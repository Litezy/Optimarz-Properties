import { useState } from "react";
import { Helmet } from "react-helmet";
import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Save, Eye } from "lucide-react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [readTime, setReadTime] = useState("");

  const handleTitleChange = (value: string) => {
    setTitle(value);
    // Auto-generate slug
    const generatedSlug = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    setSlug(generatedSlug);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Blog post saved",
      description: "Your blog post has been saved as a draft",
    });
  };

  const handlePublish = () => {
    toast({
      title: "Blog post published",
      description: "Your blog post is now live",
    });
  };

  return (
    <>
      <Helmet>
        <title>Create Blog - Admin - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Create Blog Post</h1>
              <p className="text-muted-foreground">
                Write and publish engaging content for your audience
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter the basic details of your blog post
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter blog post title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug (URL)</Label>
                  <Input
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="blog-post-url"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Auto-generated from title. Edit if needed.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
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
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Author name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="readTime">Read Time</Label>
                    <Input
                      id="readTime"
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                      placeholder="5 min read"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Brief description of the blog post (150-200 characters)"
                    rows={3}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
                <CardDescription>
                  Upload a featured image for your blog post
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Button type="button" variant="outline">
                    Choose Image
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    JPG, PNG or WebP. Max size 5MB. Recommended: 1200x630px
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>
                  Write your blog post content (HTML supported)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your blog post content here. You can use HTML tags for formatting."
                  rows={20}
                  className="font-mono text-sm"
                  required
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Tip: Use HTML tags like &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;ol&gt; for formatting
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-end">
              <Button type="button" variant="outline">
                Save Draft
              </Button>
              <Button type="submit">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button type="button" onClick={handlePublish}>
                Publish Now
              </Button>
            </div>
          </form>
        </div>
      </AdminLayout>
    </>
  );
};

export default CreateBlog;
