import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Save, ArrowLeft, Eye, Trash2 } from "lucide-react";
import ApiLoader from "@/components/ApiLoader";
import { delayApiCall, ErrorMessage } from "@/lib/utils";
import { blogService } from "@/services/blog.service";
import TiptapEditor from "@/components/editor/TiptapEditor";
import { useBlogsStore } from "@/store/blogs.store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ImageField = "featuredImage";

const imageFieldLabels: Record<ImageField, string> = {
  featuredImage: "Header image",
};

const emptyImageFiles: Record<ImageField, File | null> = {
  featuredImage: null,
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const emptyImageUrls: Record<ImageField, string> = {
  featuredImage: "",
};

const EditBlog = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const blogId = searchParams.get('id');
  const blogs = useBlogsStore(state => state.blogs);
  const setBlogs = useBlogsStore(state => state.setBlogs);
  const updateBlogInStore = useBlogsStore(state => state.updateBlog);

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: '',
    category: '',
    readTime: ""
  });
  const [images, setImages] = useState<Record<ImageField, File | null>>(emptyImageFiles);
  const [currentImageUrls, setCurrentImageUrls] = useState<Record<ImageField, string>>(emptyImageUrls);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const previewUrl = (file: File | null) => (file ? URL.createObjectURL(file) : "");
  const previewHeaderImageUrl = images.featuredImage ? previewUrl(images.featuredImage) : currentImageUrls.featuredImage;

//   Fetch blog data on mount
  useEffect(() => {
    if (!blogId) {
      toast({
        title: "Error",
        description: "Blog ID is required",
        variant: "destructive",
      });
      navigate('/admin/all-blogs');
      return;
    }

    fetchBlogData();
  }, [blogId]);

  const fetchBlogData = async () => {
    setIsFetching(true);
    try {
      if (!blogId) {
        throw new Error('Blog ID is required');
      }

      const response = await blogService.fetchSingleBlog(parseInt(blogId));
      if (response?.data) {
        populateForm(response.data);
        return;
      }

      const blogFromStore = blogs.find(b => b.id === parseInt(blogId!));
      if (blogFromStore) {
        populateForm(blogFromStore);
        return;
      }

      toast({
        title: "Not Found",
        description: "Blog post not found",
        variant: "destructive",
      });
      navigate('/admin/all-blogs');
    } catch (error) {
      console.log(error);
      navigate('/admin/all-blogs');
    } finally {
      setIsFetching(false);
    }
  };

  const populateForm = (blog: any) => {
    setForm({
      title: blog.title || "",
      description: blog.description || "",
      content: blog.content || "",
      category: blog.category || "",
      readTime: blog.readingTime || ""
    });
    setCurrentImageUrls({
      featuredImage: blog.featuredImage || "",
    });
    setImages(emptyImageFiles);
  };

  const validateImage = (file: File, field: ImageField) => {
    if (file.size > MAX_FILE_SIZE) {
      ErrorMessage(`${imageFieldLabels[field]} must be 5MB or less`, "orange");
      return false;
    }

    if (!file.type.startsWith("image/")) {
      ErrorMessage(`${imageFieldLabels[field]} must be an image file`, "orange");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleCategoryChange = (value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      category: value
    }));
  };

  const buildFormData = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("content", form.content);
    formData.append("category", form.category);
    formData.append("readingTime", form.readTime);

    // Only include featured image if a new one is being uploaded
    if (images.featuredImage) {
      formData.append("featuredImage", images.featuredImage);
    }

    return formData;
  };

  const validateFormData = (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const rawContent = formData.get("content") as string;
    const content = rawContent?.replace(/<[^>]+>/g, "").trim();
    const category = formData.get("category") as string;
    const readingTime = formData.get("readingTime") as string;

    const emptyFields = [];
    if (!title || title.trim() === '') emptyFields.push('title');
    if (!description || description.trim() === '') emptyFields.push('description');
    if (!content) emptyFields.push('content');
    if (!category || category.trim() === '') emptyFields.push('category');
    if (!readingTime || readingTime.trim() === '') emptyFields.push('readingTime');

    if (!currentImageUrls.featuredImage && !images.featuredImage) {
      emptyFields.push('featuredImage');
    }

    if (emptyFields.length > 0) {
      console.error("Empty fields found:", emptyFields);
      return false;
    }

    return true;
  };

  const handleUpdate = async () => {
    const formData = buildFormData();

    const valid = validateFormData(formData);
    if (!valid) {
      ErrorMessage('All fields are required');
      return;
    }

    setIsLoading(true);
    try {
      const response = await blogService.updateBlog(parseInt(blogId!), formData);
      
      if (response.status === 'success') {
        updateBlogInStore(parseInt(blogId!), response.data);

        const refreshed = await blogService.fetchBlogs();
        if (refreshed.status === 200) {
          setBlogs(refreshed.data);
        }

        await delayApiCall();
        
        toast({
          title: "Updated",
          description: "Blog post has been updated successfully.",
        });
        
        navigate('/admin/all-blogs');
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to update the blog post.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <>
        <Helmet>
          <title>Loading... - Admin - Optimarz Properties</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <ApiLoader isLoading={true} message="Loading blog data..." />
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading blog data...</p>
            </div>
          </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Edit Blog - Admin - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <ApiLoader isLoading={isLoading} message="Updating..." />

        <div className="max-w-5xl mx-auto space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/admin/all-blogs')}
                className="mb-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Profile
              </Button>
              <h1 className="text-3xl font-bold mb-2">Edit Blog Post</h1>
              <p className="text-muted-foreground">Update your blog content.</p>
            </div>

            <Button variant="outline" size="sm" type="button" onClick={() => setIsPreviewOpen(true)}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>

            {/* <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button> */}
          </div>

          <form className="space-y-6">
            {/* BASIC INFO */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Update the basic details of your blog.</CardDescription>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select value={form.category} onValueChange={handleCategoryChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Land Investment">Land Investment</SelectItem>
                        <SelectItem value="Market Trends">Market Trends</SelectItem>
                        <SelectItem value="Tips">Tips & Guides</SelectItem>
                        <SelectItem value="News">News</SelectItem>
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
                    placeholder="Brief summary of the blog post (150–200 chars)"
                    rows={3}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* IMAGE UPLOAD */}
            <Card>
              <CardHeader>
                <CardTitle>Header image</CardTitle>
                <CardDescription>Update the main header image for this post.</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="rounded-lg border border-border p-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-semibold">Featured Image <span className="text-destructive">*</span></h3>
                      <p className="text-sm text-muted-foreground">
                        Header image for the blog post and previews. Update inline images in the content editor below.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="featuredImageUpload"
                        onChange={(e) => handleImageSelection("featuredImage", e.target.files?.[0] ?? null)}
                      />
                      <label htmlFor="featuredImageUpload">
                        <Button type="button" variant="outline">
                          {images.featuredImage ? "Replace image" : "Choose image"}
                        </Button>
                      </label>
                      {images.featuredImage && (
                        <Button type="button" variant="ghost" size="icon" onClick={() => setImages((prev) => ({ ...prev, featuredImage: null }))}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {previewHeaderImageUrl && (
                    <div className="mt-4 overflow-hidden rounded-lg border border-border">
                      <img
                        src={previewHeaderImageUrl}
                        alt="Header preview"
                        className="h-64 w-full object-cover"
                      />
                      <div className="border-t border-border px-4 py-3 text-sm">
                        <span className="font-medium">
                          {images.featuredImage ? images.featuredImage.name : "Current header image"}
                        </span>
                      </div>
                    </div>
                  )}

                  <p className="mt-4 text-xs text-muted-foreground">
                    JPG, PNG, WebP, GIF. Maximum 5MB. Add additional images directly in the content editor.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CONTENT */}
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Update your blog content (HTML supported). Use the editor to add inline images.</CardDescription>
              </CardHeader>

              <CardContent>
                <TiptapEditor
                  content={form.content}
                  setContent={(html) => setForm((prev) => ({ ...prev, content: html }))}
                  placeholder="Write your blog post here. Use formatting, headings, lists, links, and images."
                />
              </CardContent>
            </Card>

            {/* ACTIONS */}
            <div className="w-fit ml-auto flex gap-3">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate('/admin/profile')}
              >
                Cancel
              </Button>
              <Button type="button" onClick={handleUpdate}>
                <Save className="w-4 h-4 mr-2" />
                Update Blog
              </Button>
            </div>
          </form>
        </div>

        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="max-h-[90vh] w-[95vw] max-w-4xl overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{form.title || "Untitled blog post"}</DialogTitle>
              <DialogDescription>
                Preview your edited blog before saving the changes.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {previewHeaderImageUrl ? (
                <img
                  src={previewHeaderImageUrl}
                  alt="Header preview"
                  className="h-72 w-full rounded-xl object-cover"
                />
              ) : (
                <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
                  No header image selected yet.
                </div>
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
                <p className="text-muted-foreground">{form.readTime || "Not set"}</p>
              </div>

              <div className="rounded-xl border border-border p-4">
                <p className="mb-3 text-sm font-medium">Content preview</p>
                <div
                  className="prose max-w-none prose-sm prose-headings:text-foreground prose-p:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: form.content || "<p>No content yet.</p>" }}
                />
              </div>

              <div className="flex justify-end">
                <Button type="button" onClick={() => setIsPreviewOpen(false)}>
                  Close Preview
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
    </>
  );
};

export default EditBlog;