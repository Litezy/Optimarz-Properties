import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, User, FileEdit, Mail, Users, Moon, Sun, RefreshCw, File, Menu, X, DownloadCloud } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import optimarzLogo from "@/assets/logo.png";
import { deleteCookie, ADMIN_AUTH_COOKIE } from "@/utils/cookies";
import { useAdminStore } from "@/store/admin.store";
import { useBlogsStore } from "@/store/blogs.store";
import { useMessagesStore } from "@/store/contactMessages.store";
import { useWaitlistStore } from "@/store/waitlist.store";
import { blogService } from "@/services/blog.service";
import { contactService } from "@/services/contact.service";
import { waitlistService } from "@/services/waitlist.service";
import { downloadsService } from "@/services/downloads.service";
import { useDownloadsStore } from "@/store/downloads.store";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const setBlogs = useBlogsStore(state => state.setBlogs);
  const setContactMessages = useMessagesStore(state => state.setMessages);
  const setWaitList = useWaitlistStore(state => state.setWaitlist);
  const setDownloads = useDownloadsStore(state => state.setDownloads)

  const navigate = useNavigate();
  const location = useLocation();
  const { admin, clearAdmin } = useAdminStore();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fetchAdminValues = async (showToast = false) => {
    setIsRefreshing(true);
    try {
      // Fetch all data in parallel
      const [blogResponse, messagesResponse, waitlistResponse,downloadResponse] = await Promise.allSettled([
        blogService.fetchBlogs(),
        contactService.fetchContactMessages(),
        waitlistService.fetchWaitlist(),
        downloadsService.fetchDownloads()
      ]);

      let successCount = 0;
      let failCount = 0;

      // Handle blogs
      if (blogResponse.status === 'fulfilled' && blogResponse.value.status === 200) {
        setBlogs(blogResponse.value.data);
        successCount++;
      } else {
        console.error('Failed to fetch blogs');
        failCount++;
      }

      // Handle contact messages
      if (messagesResponse.status === 'fulfilled' && messagesResponse.value.status === 200) {
        setContactMessages(messagesResponse.value.data);
        successCount++;
      } else {
        console.error('Failed to fetch messages');
        failCount++;
      }

      // Handle waitlist
      if (waitlistResponse.status === 'fulfilled' && waitlistResponse.value.status === 200) {
        setWaitList(waitlistResponse.value.data);
        successCount++;
      } else {
        console.error('Failed to fetch waitlist');
        failCount++;
      }
      // Handle waitlist
      if (downloadResponse.status === 'fulfilled' && downloadResponse.value.status === 200) {
        setDownloads(downloadResponse.value.data);
        successCount++;
      } else {
        console.error('Failed to fetch downloads');
        failCount++;
      }

      // Show toast notification if requested
      if (showToast) {
        if (failCount === 0) {
          toast({
            title: "Data refreshed",
            description: "All data has been successfully updated",
          });
        } else if (successCount > 0) {
          toast({
            title: "Partial refresh",
            description: `${successCount} of 3 data sources updated successfully`,
            variant: "default",
          });
        } else {
          toast({
            title: "Refresh failed",
            description: "Failed to update data. Please try again.",
            variant: "destructive",
          });
        }
      }

    } catch (error) {
      console.error('Error fetching admin data:', error);
      if (showToast) {
        toast({
          title: "Error",
          description: "An unexpected error occurred while refreshing data",
          variant: "destructive",
        });
      }
    } finally {
      setIsRefreshing(false);
    }
  };

  // Initial data fetch on mount
  useEffect(() => {
    fetchAdminValues(false);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleRefresh = () => {
    fetchAdminValues(true);
  };

  const handleLogout = () => {
    deleteCookie(ADMIN_AUTH_COOKIE);
    clearAdmin();
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { path: "/admin/profile", label: "Profile", icon: User },
    { path: "/admin/all-blogs", label: "Blogs", icon: File },
    { path: "/admin/create-blog", label: "Create Blog", icon: FileEdit },
    { path: "/admin/contacts", label: "Contacts", icon: Mail },
    { path: "/admin/waitlist", label: "Waitlist", icon: Users },
    { path: "/admin/downloads", label: "Dowloads", icon: DownloadCloud },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden ">
      {/* Top Navigation */}
      <header className="bg-card fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={optimarzLogo} alt="Optimarz Properties" className="h-8 w-auto" />
              <div>
                <span className="text-sm lg:text-xl font-bold">Dashboard</span>
                {admin && (
                  <p className="text-xs text-muted-foreground">{admin.email}</p>
                )}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              {/* Refresh Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={handleRefresh}
                disabled={isRefreshing}
                aria-label="Refresh data"
              >
                <RefreshCw  
                className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
              </Button>
              
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

            {/* Mobile Hamburger Menu */}
            <div className="flex md:hidden items-center gap-2">
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
              
              <Button
                variant="outline"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMobileMenu}>
          <div 
            className="absolute right-0 top-16 w-64 h-[calc(100vh-4rem)] bg-card border-l border-border overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 space-y-4">
              {/* Refresh Button in Mobile Menu */}
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh Data
              </Button>

              {/* Navigation Items in Mobile Menu */}
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2 font-medium transition-colors rounded-lg ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Logout Button in Mobile Menu */}
              <Button 
                variant="outline" 
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Tabs - Hidden on mobile, shown on desktop */}
      <div className="bg-muted border-b mt-16 fixed m w-full border-border hidden md:block">
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
      <main className="container mx-auto px-4 py-8 lg:mt-[8rem] mt-[3.5rem]">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;