import { useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Save, Eye } from "lucide-react";
import ApiLoader from "@/components/ApiLoader";
import { delayApiCall, ErrorMessage } from "@/lib/utils";
import { blogService } from "@/services/blog.service";
// import { AuthFormDataPostApi } from "@/services/Apis.service"; // Uncomment when ready

const CreateBlog = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: '',
    category: '',
    readTime: ""
  });
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
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

  const clearForm = () => {
    setForm({
      title: "",
      description: "",
      content: "",
      category: "",
      readTime: ""
    });
    setImage(null);

    // Optional: Clear file input
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const buildFormData = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("content", form.content);
    formData.append("category", form.category);
    formData.append("readingTime", form.readTime);

    if (image) formData.append("featuredImage", image);

    return formData;
  };

  const validateFormData = (formData: FormData) => {
    // Check each field directly from FormData
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const readingTime = formData.get("readingTime") as string;
    const featuredImage = formData.get("featuredImage");

    console.log("Validating form data:", {
      title, description, content, category, readingTime, featuredImage
    });

    // Validate all required fields
    const emptyFields = [];
    if (!title || title.trim() === '') emptyFields.push('title');
    if (!description || description.trim() === '') emptyFields.push('description');
    if (!content || content.trim() === '') emptyFields.push('content');
    if (!category || category.trim() === '') emptyFields.push('category');
    if (!readingTime || readingTime.trim() === '') emptyFields.push('readingTime');
    if (!featuredImage) emptyFields.push('featuredImage');

    if (emptyFields.length > 0) {
      console.error("Empty fields found:", emptyFields);
      return false;
    }

    return true;
  };

  const handlePublish = async () => {
    const formData = buildFormData();

    // console.log("=== DEBUG FORM DATA ===");
    // console.log("Image state:", image);
    // console.log("FormData entries:");
    // for (let [key, value] of formData.entries()) {
    //   if (value instanceof File) {
    //     console.log(`${key}: File - ${value.name} (${value.type}, ${value.size} bytes)`);
    //   } else {
    //     console.log(`${key}:`, value);
    //   }
    // }
    // console.log("=== END DEBUG ===");
    const valid = validateFormData(formData);
    if (!valid) {
      ErrorMessage('All fields are compulsory');
      return;
    }

    setIsLoading(true);
    try {

      const response = await blogService.createBlog(formData);
      if (response.status === 201) {
        await blogService.fetchBlogs()
        await delayApiCall()
        toast({
          title: "Published",
          description: "Your blog post is now live.",
        });
        clearForm()
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
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">Create Blog Post</h1>
            <p className="text-muted-foreground">Write and publish engaging content.</p>
          </div>

          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>

        <form className="space-y-6">
          {/* BASIC INFO */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the basic details of your blog.</CardDescription>
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={form.category} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="land-investment">Land Investment</SelectItem>
                      <SelectItem value="market-trends">Market Trends</SelectItem>
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
              <CardTitle>Featured Image</CardTitle>
              <CardDescription>Upload the main image for this post.</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <input type="file" accept="image/*" className="hidden" id="imageUpload" onChange={handleImage} />
                <label htmlFor="imageUpload">
                  <Button type="button" variant="outline" asChild>
                    <span>Choose Image</span>
                  </Button>
                </label>

                {image && (
                  <p className="text-sm mt-3">
                    Selected: <b>{image.name}</b>
                  </p>
                )}

                <p className="text-sm text-muted-foreground mt-2">
                  JPG, PNG, WebP. Max 5MB. Recommended 1200×630px.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CONTENT */}
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>Write your full blog content (HTML supported).</CardDescription>
            </CardHeader>

            <CardContent>
              <Textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                placeholder="Write your blog post here. HTML tags supported."
                rows={20}
                className="font-mono text-sm"
                required
              />
            </CardContent>
          </Card>

          {/* ACTIONS */}
          <div className="w-fit ml-auto flex gap-3">
            <Button type="button" onClick={handlePublish}>
              Publish Now
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;