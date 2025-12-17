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
import { Save, ArrowLeft } from "lucide-react";
import ApiLoader from "@/components/ApiLoader";
import { delayApiCall, ErrorMessage } from "@/lib/utils";
import { blogService } from "@/services/blog.service";
import { useBlogsStore } from "@/store/blogs.store";

const EditBlog = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const blogId = searchParams.get('id');
//   console.log(blogId)
  const blogs = useBlogsStore(state => state.blogs);

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: '',
    category: '',
    readTime: ""
  });
  const [image, setImage] = useState<File | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

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
      // First check if blog exists in store
      const blogFromStore = blogs.find(b => b.id === parseInt(blogId!));
      
      if (blogFromStore) {
        populateForm(blogFromStore);
      } else {
        // If not in store, fetch all blogs
        const response = await blogService.fetchBlogs();
        if (response.status === 200) {
          const blog = response.data.find((b: any) => b.id === parseInt(blogId!));
          if (blog) {
            populateForm(blog);
          } else {
            toast({
              title: "Not Found",
              description: "Blog post not found",
              variant: "destructive",
            });
            navigate('/admin/all-blogs');
          }
        }
      }
    } catch (error) {
      console.log(error)
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
    setCurrentImageUrl(blog.featuredImage || "");
  };

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

  const buildFormData = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("content", form.content);
    formData.append("category", form.category);
    formData.append("readingTime", form.readTime);

    // Only append new image if one was selected
    if (image) {
      formData.append("featuredImage", image);
    }

    return formData;
  };

  const validateFormData = (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const readingTime = formData.get("readingTime") as string;

    const emptyFields = [];
    if (!title || title.trim() === '') emptyFields.push('title');
    if (!description || description.trim() === '') emptyFields.push('description');
    if (!content || content.trim() === '') emptyFields.push('content');
    if (!category || category.trim() === '') emptyFields.push('category');
    if (!readingTime || readingTime.trim() === '') emptyFields.push('readingTime');

    // Image is optional on edit (only validate if there's no current image and no new image)
    if (!currentImageUrl && !image) {
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
        // Refresh blogs in store
        await blogService.fetchBlogs();
        await delayApiCall();
        
        toast({
          title: "Updated",
          description: "Blog post has been updated successfully.",
        });
        
        navigate('/admin/all-blogs');
      }
    } catch (error) {
      console.log(error);
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
                <CardTitle>Featured Image</CardTitle>
                <CardDescription>Update the main image for this post (optional).</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Current Image Preview */}
                {currentImageUrl && !image && (
                  <div className="space-y-2">
                    <Label>Current Image</Label>
                    <div className="border rounded-lg overflow-hidden">
                      <img 
                        src={currentImageUrl} 
                        alt="Current featured" 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Upload a new image to replace the current one
                    </p>
                  </div>
                )}

                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    id="imageUpload" 
                    onChange={handleImage} 
                  />
                  <label htmlFor="imageUpload">
                    <Button type="button" variant="outline" asChild>
                      <span>{image ? 'Change Image' : 'Upload New Image'}</span>
                    </Button>
                  </label>

                  {image && (
                    <p className="text-sm mt-3">
                      New image selected: <b>{image.name}</b>
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
                <CardDescription>Update your blog content (HTML supported).</CardDescription>
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
    </>
  );
};

export default EditBlog;