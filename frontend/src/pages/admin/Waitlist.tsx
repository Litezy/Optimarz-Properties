import { Helmet } from "react-helmet";
import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Download, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Mock data for waitlist
const mockWaitlist = [
  {
    id: 1,
    name: "Jennifer Williams",
    email: "jennifer.williams@email.com",
    phone: "+1 (555) 111-2222",
    interest: "Heritage Bloom",
    joinedDate: "2024-11-12",
    contacted: false,
  },
  {
    id: 2,
    name: "Robert Jackson",
    email: "robert.jackson@email.com",
    phone: "+1 (555) 222-3333",
    interest: "Tranquil Retreat",
    joinedDate: "2024-11-11",
    contacted: true,
  },
  {
    id: 3,
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    phone: "+1 (555) 333-4444",
    interest: "Summer Program",
    joinedDate: "2024-11-10",
    contacted: false,
  },
  {
    id: 4,
    name: "James Brown",
    email: "james.brown@email.com",
    phone: "+1 (555) 444-5555",
    interest: "General Interest",
    joinedDate: "2024-11-09",
    contacted: true,
  },
  {
    id: 5,
    name: "Lisa Martinez",
    email: "lisa.martinez@email.com",
    phone: "+1 (555) 555-6666",
    interest: "Bonham Renaissance",
    joinedDate: "2024-11-08",
    contacted: false,
  },
  {
    id: 6,
    name: "William Taylor",
    email: "william.taylor@email.com",
    phone: "+1 (555) 666-7777",
    interest: "Small Town Charm",
    joinedDate: "2024-11-07",
    contacted: true,
  },
  {
    id: 7,
    name: "Patricia Anderson",
    email: "patricia.anderson@email.com",
    phone: "+1 (555) 777-8888",
    interest: "Heritage Bloom",
    joinedDate: "2024-11-06",
    contacted: false,
  },
  {
    id: 8,
    name: "Christopher Lee",
    email: "christopher.lee@email.com",
    phone: "+1 (555) 888-9999",
    interest: "Investment Consultation",
    joinedDate: "2024-11-05",
    contacted: true,
  },
];

const AdminWaitlist = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWaitlist = mockWaitlist.filter(
    (person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.interest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    // Mock export functionality
    const csv = [
      ["Name", "Email", "Phone", "Interest", "Joined Date", "Contacted"],
      ...mockWaitlist.map((person) => [
        person.name,
        person.email,
        person.phone,
        person.interest,
        person.joinedDate,
        person.contacted ? "Yes" : "No",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "waitlist-export.csv";
    a.click();
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
              <h1 className="text-3xl font-bold mb-2">VIP Waitlist</h1>
              <p className="text-muted-foreground">
                Manage and contact people who joined the waitlist
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-base px-3 py-1">
                {mockWaitlist.length} Total
              </Badge>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Signups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{mockWaitlist.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Not Contacted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">
                  {mockWaitlist.filter((p) => !p.contacted).length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Contacted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-muted-foreground">
                  {mockWaitlist.filter((p) => p.contacted).length}
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
                  placeholder="Search by name, email, or interest..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-md"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Interest</TableHead>
                    <TableHead>Joined Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWaitlist.map((person) => (
                    <TableRow key={person.id}>
                      <TableCell className="font-medium">{person.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="w-3 h-3" />
                          {person.email}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {person.phone}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{person.interest}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(person.joinedDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        {person.contacted ? (
                          <Badge variant="secondary" className="gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Contacted
                          </Badge>
                        ) : (
                          <Badge variant="default">New</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminWaitlist;
