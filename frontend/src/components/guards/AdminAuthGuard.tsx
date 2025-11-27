import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminStore } from "@/store/admin.store";
import { ADMIN_AUTH_COOKIE,  deleteCookie,  getCookie } from "@/utils/cookies";
import Cookies from "js-cookie";

interface AdminAuthGuardProps {
  children: React.ReactNode;
}

const AdminAuthGuard = ({ children }: AdminAuthGuardProps) => {
  const navigate = useNavigate();
  const { admin, isAuthenticated } = useAdminStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const authCookie = getCookie(ADMIN_AUTH_COOKIE)
      
      // Check if auth token exists
      if (!authCookie) {
        navigate("/admin/login", { replace: true });
        deleteCookie(ADMIN_AUTH_COOKIE)
        return;
      }

      // Check if admin data exists in Zustand store
      if (!admin || !isAuthenticated) {
        navigate("/admin/login", { replace: true });
        return;
      }

      setIsLoading(false);
    };

    checkAuth();
  }, [navigate, admin, isAuthenticated]);

  if (isLoading) {
    return (
      <div className=""></div>
      // <div className="min-h-screen flex items-center justify-center bg-background">
      //   <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      // </div>
    );
  }

  return isAuthenticated && admin ? <>{children}</> : null;
};

export default AdminAuthGuard;