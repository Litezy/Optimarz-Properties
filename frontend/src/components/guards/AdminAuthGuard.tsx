import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, ADMIN_AUTH_COOKIE, ADMIN_PROFILE_COOKIE } from "@/utils/cookies";

interface AdminAuthGuardProps {
  children: React.ReactNode;
}

export interface AdminProfile {
  name: string;
  email: string;
  bio: string;
  avatar: string;
}

const AdminAuthGuard = ({ children }: AdminAuthGuardProps) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const authCookie = getCookie(ADMIN_AUTH_COOKIE);
      
      if (!authCookie) {
        navigate("/admin/login");
        return;
      }

      // Verify admin data exists
      const profileData = getCookie(ADMIN_PROFILE_COOKIE);
      if (!profileData) {
        navigate("/admin/login");
        return;
      }

      setIsAuthenticated(true);
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default AdminAuthGuard;
