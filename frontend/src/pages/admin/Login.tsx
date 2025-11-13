import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import optimarzLogo from "@/assets/logo.png";
import { setCookie, getCookie, ADMIN_AUTH_COOKIE, ADMIN_PROFILE_COOKIE } from "@/utils/cookies";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already logged in
    const authCookie = getCookie(ADMIN_AUTH_COOKIE);
    if (authCookie) {
      navigate("/admin/profile");
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - replace with actual auth later
    if (email === "admin@optimarz.com" && password === "admin123") {
      // Mock admin profile data
      const mockProfile = {
        name: "Admin User",
        email: "admin@optimarz.com",
        bio: "Administrator at Optimarz Properties",
        avatar: ""
      };

      // Set cookies
      setCookie(ADMIN_AUTH_COOKIE, "true", 7);
      setCookie(ADMIN_PROFILE_COOKIE, JSON.stringify(mockProfile), 7);
      
      toast({
        title: "Login successful",
        description: "Welcome back to the admin dashboard",
      });
      navigate("/admin/profile");
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-4 text-center">
            <img src={optimarzLogo} alt="Optimarz Properties" className="h-12 w-auto mx-auto" />
            <div className="flex justify-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <Lock className="w-6 h-6 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@optimarz.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Demo credentials: admin@optimarz.com / admin123
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminLogin;
