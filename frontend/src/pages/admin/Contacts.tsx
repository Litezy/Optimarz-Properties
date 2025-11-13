import { Helmet } from "react-helmet";
import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Mock data for contacts
const mockContacts = [
  {
    id: 1,
    name: "John Anderson",
    email: "john.anderson@email.com",
    phone: "+1 (555) 123-4567",
    subject: "Inquiry about Heritage Bloom Project",
    message: "I'm interested in learning more about the available plots in the Heritage Bloom project. Could you provide more details about pricing and payment plans?",
    date: "2024-11-10",
    status: "new",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    email: "sarah.mitchell@email.com",
    phone: "+1 (555) 234-5678",
    subject: "Summer Program Registration",
    message: "I would like to register my family for the upcoming summer program. Are there any spots still available?",
    date: "2024-11-09",
    status: "replied",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1 (555) 345-6789",
    subject: "Land Investment Consultation",
    message: "I'm new to land investment and would appreciate a consultation to understand the process and opportunities available.",
    date: "2024-11-08",
    status: "new",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    phone: "+1 (555) 456-7890",
    subject: "Partnership Opportunity",
    message: "I represent a development firm interested in potential partnership opportunities. Can we schedule a meeting?",
    date: "2024-11-07",
    status: "in-progress",
  },
  {
    id: 5,
    name: "David Thompson",
    email: "david.thompson@email.com",
    phone: "+1 (555) 567-8901",
    subject: "Question about Tranquil Retreat",
    message: "What amenities are planned for the Tranquil Retreat community? I'm particularly interested in recreational facilities.",
    date: "2024-11-06",
    status: "replied",
  },
];

const AdminContacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = mockContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      new: "default",
      "in-progress": "secondary",
      replied: "secondary",
    };
    return (
      <Badge variant={variants[status] || "default"}>
        {status.replace("-", " ")}
      </Badge>
    );
  };

  return (
    <>
      <Helmet>
        <title>Contacts - Admin - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Contact Messages</h1>
              <p className="text-muted-foreground">
                Manage and respond to customer inquiries
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-base px-3 py-1">
                {mockContacts.filter((c) => c.status === "new").length} New
              </Badge>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Messages</CardTitle>
              <CardDescription>
                View and manage all contact form submissions
              </CardDescription>
              <div className="pt-4">
                <Input
                  placeholder="Search by name, email, or subject..."
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
                    <TableHead>Contact</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell className="font-medium">{contact.name}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-3 h-3 text-muted-foreground" />
                            <span className="text-muted-foreground">{contact.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-3 h-3 text-muted-foreground" />
                            <span className="text-muted-foreground">{contact.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{contact.subject}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(contact.date).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(contact.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
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

export default AdminContacts;
