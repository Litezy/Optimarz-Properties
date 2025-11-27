import { Helmet } from "react-helmet";
import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Download, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useWaitlistStore } from "@/store/waitlist.store";

const AdminWaitlist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const waitlist = useWaitlistStore(state => state.waitlist);

  const filteredWaitlist = waitlist.filter(
    (person) =>
      person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    if (waitlist.length === 0) {
      alert("No data to export");
      return;
    }

    const csv = [
      ["ID", "First Name", "Last Name", "Email", "Phone Number", "Joined Date"],
      ...waitlist.map((person) => [
        person.id,
        person.firstName,
        person.lastName,
        person.email,
        person.phoneNumber,
        new Date(person.createdAt).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `waitlist-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>Waitlist - Admin - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">VIP Waitlist</h1>
              <p className="text-muted-foreground">
                Manage and contact people who joined the waitlist
              </p>
            </div>
            <div className="flex items-center flex-col lg:flex-row gap-2">
              <Badge variant="outline" className="text-base px-3 py-1">
                {waitlist.length} Total
              </Badge>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleExport}
                disabled={waitlist.length === 0}
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Signups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{waitlist.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Latest Signup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">
                  {waitlist.length > 0
                    ? new Date(
                        Math.max(...waitlist.map(p => new Date(p.createdAt).getTime()))
                      ).toLocaleDateString()
                    : "N/A"}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Waitlist Members</CardTitle>
              <CardDescription>
                View and manage all VIP waitlist signups
              </CardDescription>
              <div className="pt-4">
                <Input
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-md"
                />
              </div>
            </CardHeader>
            <CardContent>
              {filteredWaitlist.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    {searchTerm ? "No waitlist entries match your search" : "No waitlist entries yet"}
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Joined Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredWaitlist.map((person) => (
                      <TableRow key={person.id}>
                        <TableCell className="font-medium truncate">
                          {person.firstName} {person.lastName}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-3 h-3" />
                            {person.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="w-3 h-3" />
                            {person.phoneNumber}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {new Date(person.createdAt).toLocaleDateString()}
                          </div>
                        </TableCell>
                        {/*  */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminWaitlist;