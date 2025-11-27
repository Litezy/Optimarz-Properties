import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import optimarzLogo from "@/assets/logo.png";
import ApiLoader from "@/components/ApiLoader";
import { delayApiCall } from "@/lib/utils";
import { adminService } from "@/services/admin.service";
import { useAdminStore } from "@/store/admin.store";
import Cookies from 'js-cookie'
import { ADMIN_AUTH_COOKIE } from "@/utils/cookies";

const AdminLogin = () => {
  // const setAdmin = useAdminStore(state => state.setAdmin);
  const setAdmin = useAdminStore((state) => state.setAdmin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already logged in
    const authCookie = Cookies.get(ADMIN_AUTH_COOKIE)
    if (authCookie) {
      navigate("/admin/profile");
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return ("email and password missing")
    setIsLoading(true)
    try {
      const res = await adminService.loginAdmin({ email, password });
      await delayApiCall()
      setAdmin(res.admin)
      Cookies.set(ADMIN_AUTH_COOKIE, res.access_token);
      localStorage.setItem('refresh_token', res.refresh_token)
      navigate("/admin/profile");
    } catch (error) {
      console.error('Login failed');
    }
    finally { setIsLoading(false) }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <ApiLoader isLoading={isLoading} message="Logging in..." />
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
              {/* <p className="text-sm text-muted-foreground text-center mt-4">
                Demo credentials: admin@optimarz.com / admin123
              </p> */}
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminLogin;
