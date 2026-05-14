import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Eye, Trash2 } from "lucide-react";
import ApiLoader from "@/components/ApiLoader";
import { delayApiCall, ErrorMessage } from "@/lib/utils";
import { blogService } from "@/services/blog.service";
import TiptapEditor from "@/components/editor/TiptapEditor";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ImageField = "featuredImage";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const imageFieldLabels: Record<ImageField, string> = {
  featuredImage: "Header image",
};

const emptyImages: Record<ImageField, File | null> = {
  featuredImage: null,
};

const CreateBlog = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    readTime: "",
  });
  const [images, setImages] =
    useState<Record<ImageField, File | null>>(emptyImages);
  const [isLoading, setIsLoading] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDraftSaving, setIsDraftSaving] = useState(false);
  const [hasDraft, setHasDraft] = useState(false);
  const featuredInputRef = useRef<HTMLInputElement | null>(null);

  const DRAFT_STORAGE_KEY = "blog_draft_data";

  // Load draft on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (savedDraft) {
      try {
        const draftData = JSON.parse(savedDraft);
        setForm(draftData.form);
        // Note: File objects can't be serialized, so images won't be restored
        setHasDraft(true);
        toast({
          title: "Draft Loaded",
          description: "Your previous draft has been restored.",
        });
      } catch (err) {
        console.error("Failed to load draft:", err);
        localStorage.removeItem(DRAFT_STORAGE_KEY);
      }
    }
  }, []);

  const saveDraft = async () => {
    setIsDraftSaving(true);
    try {
      const draftData = {
        form,
        savedAt: new Date().toISOString(),
      };
      localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draftData));
      setHasDraft(true);
      toast({
        title: "Draft Saved",
        description: "Your blog draft has been saved locally.",
      });
    } catch (err) {
      console.error("Failed to save draft:", err);
      toast({
        title: "Error",
        description: "Failed to save draft.",
        variant: "destructive",
      });
    } finally {
      setIsDraftSaving(false);
    }
  };

  const deleteDraft = () => {
    localStorage.removeItem(DRAFT_STORAGE_KEY);
    setHasDraft(false);
  };

  const previewUrl = (file: File | null) =>
    file ? URL.createObjectURL(file) : "";

  const openFeaturedPicker = () => {
    featuredInputRef.current?.click();
  };

  const validateImage = (file: File, field: ImageField) => {
    if (file.size > MAX_FILE_SIZE) {
      ErrorMessage(`${imageFieldLabels[field]} must be 5MB or less`, "orange");
      return false;
    }

    if (!file.type.startsWith("image/")) {
      ErrorMessage(
        `${imageFieldLabels[field]} must be an image file`,
        "orange",
      );
      return false;
    }

    return true;
  };

  const handleImageSelection = (field: ImageField, file: File | null) => {
    if (!file || !validateImage(file, field)) {
      return;
    }

    setImages((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleFeaturedImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleImageSelection("featuredImage", e.target.files?.[0] ?? null);
    e.target.value = "";
  };

  const removeImage = (field: ImageField) => {
    setImages((prev) => ({
      ...prev,
      [field]: null,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCategoryChange = (value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      category: value,
    }));
  };

  const clearForm = () => {
    setForm({
      title: "",
      description: "",
      content: "",
      category: "",
      readTime: "",
    });
    setImages(emptyImages);
    deleteDraft();

    if (featuredInputRef.current) featuredInputRef.current.value = "";
  };

  const buildFormData = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("content", form.content);
    formData.append("category", form.category);
    formData.append("readingTime", form.readTime);

    // Featured image is optional - images should be embedded inline in content
    if (images.featuredImage)
      formData.append("featuredImage", images.featuredImage);

    return formData;
  };

  const validateFormData = (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const rawContent = formData.get("content") as string;
    const content = rawContent?.replace(/<[^>]+>/g, "").trim();
    const category = formData.get("category") as string;
    const readingTime = formData.get("readingTime") as string;
    const featuredImage = formData.get("featuredImage");

    if (!title?.trim()) return false;
    if (!description?.trim()) return false;
    if (!content) return false;
    if (!category?.trim()) return false;
    if (!readingTime?.trim()) return false;
    if (!featuredImage) return false; // Featured image is required

    return true;
  };

  const handlePublish = async () => {
    const formData = buildFormData();

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    // return;
    if (!validateFormData(formData)) {
      ErrorMessage(
        "All required fields must be provided, including the featured header image",
      );
      return;
    }

    setIsLoading(true);
    try {
      const response = await blogService.createBlog(formData);

      if (response.status === 201) {
        deleteDraft();
        await blogService.fetchBlogs();
        await delayApiCall();
        toast({
          title: "Published",
          description: "Your blog post is now live.",
        });
        setIsPreviewOpen(false);
        clearForm();
      }
    } catch (err) {
      console.log("Publish error:", err);
      toast({
        title: "Error",
        description: "Failed to publish blog.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Blog - Admin - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <ApiLoader isLoading={isLoading} message="Processing..." />
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-bold lg:text-3xl">
              Create Blog Post
            </h1>
            <p className="text-muted-foreground">
              Write and publish engaging content.
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => setIsPreviewOpen(true)}
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
        </div>

        <form className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Enter the basic details of your blog.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter blog post title"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select
                    value={form.category}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="land-investment">
                        Land Investment
                      </SelectItem>
                      <SelectItem value="market-trends">
                        Market Trends
                      </SelectItem>
                      <SelectItem value="tips">Tips & Guides</SelectItem>
                      <SelectItem value="news">News</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input
                    id="readTime"
                    name="readTime"
                    value={form.readTime}
                    onChange={handleChange}
                    placeholder="5 min read"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Brief summary of the blog post (150-200 chars)"
                  rows={3}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
              <CardDescription>
                Upload a header image, then add up to three supporting images
                for the post.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">
                      Featured Image <span className="text-destructive">*</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      This image appears at the top of the post and in blog
                      previews. Additional images should be embedded inline in
                      the content editor.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <input
                      ref={featuredInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="featuredImageUpload"
                      onChange={handleFeaturedImage}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={openFeaturedPicker}
                    >
                      {images.featuredImage ? "Replace image" : "Choose image"}
                    </Button>
                    {images.featuredImage && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeImage("featuredImage")}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {images.featuredImage && (
                  <div className="mt-4 overflow-hidden rounded-lg border border-border">
                    <img
                      src={previewUrl(images.featuredImage)}
                      alt="Header preview"
                      className="h-64 w-full object-cover"
                    />
                    <div className="border-t border-border px-4 py-3 text-sm">
                      <span className="font-medium">
                        {images.featuredImage.name}
                      </span>
                    </div>
                  </div>
                )}

                <p className="mt-4 text-xs text-muted-foreground">
                  JPG, PNG, WebP, GIF. Maximum 5MB. Add additional images
                  directly in the content editor below.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>
                Write your full blog content (HTML supported). Use the editor to
                add inline images.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <TiptapEditor
                content={form.content}
                setContent={(html) =>
                  setForm((prev) => ({ ...prev, content: html }))
                }
                placeholder="Write your blog post here. Use formatting, headings, lists, links, and images."
              />
            </CardContent>
          </Card>

          <div className="ml-auto flex w-fit gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={clearForm}
              disabled={isLoading || isDraftSaving}
            >
              Clear
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={saveDraft}
              disabled={isLoading || isDraftSaving}
            >
              {isDraftSaving
                ? "Saving..."
                : hasDraft
                  ? "Update Draft"
                  : "Save Draft"}
            </Button>
            <Button
              type="button"
              onClick={handlePublish}
              disabled={isLoading || isDraftSaving}
            >
              Publish Now
            </Button>
          </div>
        </form>
      </div>

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-h-[90vh] w-[95vw] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{form.title || "Untitled blog post"}</DialogTitle>
            <DialogDescription>
              Previewing the content and the ordered image set before
              publishing.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {images.featuredImage && (
              <img
                src={previewUrl(images.featuredImage)}
                alt="Featured preview"
                className="h-72 w-full rounded-xl object-cover"
              />
            )}

            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-primary">
                {form.category || "No category selected"}
              </p>
              <p className="text-lg text-muted-foreground">
                {form.description || "No description yet."}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/20 p-4">
              <p className="mb-2 text-sm font-medium">Reading time</p>
              <p className="text-muted-foreground">
                {form.readTime || "Not set"}
              </p>
            </div>

            <div className="rounded-xl border border-border p-4">
              <p className="mb-3 text-sm font-medium">Content preview</p>
              <div
                className="prose max-w-none prose-sm prose-headings:text-foreground prose-p:text-muted-foreground"
                dangerouslySetInnerHTML={{
                  __html: form.content || "<p>No content yet.</p>",
                }}
              />
            </div>

            <div className="flex justify-end">
              <Button type="button" onClick={handlePublish}>
                Publish Now
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateBlog;
