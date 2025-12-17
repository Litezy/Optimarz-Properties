import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminStore } from "@/store/admin.store";
import { adminService } from "@/services/admin.service";
import { deleteCookie, ADMIN_AUTH_COOKIE } from "@/utils/cookies";
import ApiLoader from "@/components/ApiLoader";
import { handleApiError } from "@/lib/ApiError";

const AdminProfile = () => {
  const navigate = useNavigate();
  const { admin, clearAdmin } = useAdminStore();

  const [fullname, setFullname] = useState(admin?.fullname || "");
  const [email, setEmail] = useState(admin?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  const handleLogout = () => {
    deleteCookie(ADMIN_AUTH_COOKIE);
    clearAdmin();
    toast({
      title: "Logged out",
      description: "Profile updated. Please login again with your new credentials",
    });
    navigate("/admin/login");
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullname.trim()) {
      toast({
        title: "Validation Error",
        description: "Full name is required",
        variant: "destructive",
      });
      return;
    }

    if (!email.trim()) {
      toast({
        title: "Validation Error",
        description: "Email is required",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsUpdatingProfile(true);

    try {
      const payload = {
        newEmail: email.trim(),
        oldEmail:admin.email,
        fullname: fullname.trim(),
      };

      const response = await adminService.updateAdminProfile(payload);

      if (response.status === 'success') {
        toast({
          title: "Profile Updated",
          description: "Your profile has been updated successfully. Please login again.",
        });

        // Wait a moment before logging out
        setTimeout(() => {
          handleLogout();
        }, 1500);
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!currentPassword) {
      toast({
        title: "Validation Error",
        description: "Current password is required",
        variant: "destructive",
      });
      return;
    }

    if (!newPassword) {
      toast({
        title: "Validation Error",
        description: "New password is required",
        variant: "destructive",
      });
      return;
    }

    if (newPassword.length < 8) {
      toast({
        title: "Validation Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (currentPassword === newPassword) {
      toast({
        title: "Validation Error",
        description: "New password must be different from current password",
        variant: "destructive",
      });
      return;
    }

    setIsUpdatingPassword(true);

    try {
      const payload = {
        email: admin?.email || email,
        fullname: admin?.fullname || fullname,
        oldEmail:admin.email,
        password: newPassword,
      };

      const response = await adminService.updateAdminProfile(payload);

      if (response.status === 'success') {
        toast({
          title: "Password Updated",
          description: "Your password has been changed successfully. Please login again.",
        });

        // Wait a moment before logging out
        setTimeout(() => {
          handleLogout();
        }, 1500);
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Profile - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <ApiLoader isLoading={isUpdatingProfile || isUpdatingPassword} message="Updating..." />
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h1 className="lg:text-3xl text-2xl font-bold mb-2">Profile Settings</h1>
            <p className="text-muted-foreground">
              Manage your account settings and profile information
            </p>
          </div>

          <Card>
            <CardHeader>
              <h1 className="lg:text-3xl text-2xl font-bold mb-2">Profile Information</h1>
              <CardDescription>
                Update your personal details. You'll be logged out after updating.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input
                      id="fullname"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" disabled={isUpdatingProfile}>
                    {isUpdatingProfile ? "Saving..." : "Save Changes"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setFullname(admin?.fullname || "");
                      setEmail(admin?.email || "");
                    }}
                    disabled={isUpdatingProfile}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your password to keep your account secure. You'll be logged out after updating.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdatePassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password (min. 8 characters)"
                    minLength={8}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                  />
                </div>
                <Button type="submit" disabled={isUpdatingPassword}>
                  {isUpdatingPassword ? "Updating..." : "Update Password"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
    </>
  );
};

export default AdminProfile;