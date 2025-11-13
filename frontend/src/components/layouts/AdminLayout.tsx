import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, User, FileEdit, Mail, Users, Moon, Sun } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import optimarzLogo from "@/assets/logo.png";
import { deleteCookie, getCookie, ADMIN_AUTH_COOKIE, ADMIN_PROFILE_COOKIE } from "@/utils/cookies";
import type { AdminProfile } from "@/components/guards/AdminAuthGuard";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [adminProfile, setAdminProfile] = useState<AdminProfile | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    // Verify authentication
    const authCookie = getCookie(ADMIN_AUTH_COOKIE);
    if (!authCookie) {
      navigate("/admin/login");
      return;
    }

    // Fetch admin profile data from cookie
    const profileData = getCookie(ADMIN_PROFILE_COOKIE);
    if (profileData) {
      try {
        const profile = JSON.parse(profileData);
        setAdminProfile(profile);
      } catch (error) {
        console.error("Failed to parse admin profile", error);
        navigate("/admin/login");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    deleteCookie(ADMIN_AUTH_COOKIE);
    deleteCookie(ADMIN_PROFILE_COOKIE);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate("/admin/login");
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    { path: "/admin/profile", label: "Profile", icon: User },
    { path: "/admin/create-blog", label: "Create Blog", icon: FileEdit },
    { path: "/admin/contacts", label: "Contacts", icon: Mail },
    { path: "/admin/waitlist", label: "Waitlist", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={optimarzLogo} alt="Optimarz Properties" className="h-8 w-auto" />
              <div>
                <span className="text-xl font-bold">Admin Dashboard</span>
                {adminProfile && (
                  <p className="text-xs text-muted-foreground">{adminProfile.email}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button variant="outline" onClick={handleLogout} size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-background text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
