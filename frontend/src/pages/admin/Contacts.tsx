import { Helmet } from "react-helmet";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Eye, Trash2Icon, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useMessagesStore } from "@/store/contactMessages.store";
import { toast } from "@/hooks/use-toast";
import { contactService } from "@/services/contact.service";
import { delayApiCall, ErrorMessage } from "@/lib/utils";

interface ViewProps {
  status: boolean;
  id?: number | null;
}

interface DeleteProps {
  status: boolean;
  id?: number | null;
  name?: string;
}

const AdminContacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const messages = useMessagesStore(state => state.messages);
  const [view, setView] = useState<ViewProps>({ status: false, id: null });
  const [deleteModal, setDeleteModal] = useState<DeleteProps>({ status: false, id: null, name: '' });
  const [currentMessage, setCurrentMessage] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const filteredContacts = messages.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openMessage = (id: number) => {
    const findMessage = messages.find(msg => msg.id === id);
    if (findMessage) {
      setCurrentMessage(findMessage);
      setView({ status: true, id });
    }
  };

  const closeMessage = () => {
    setView({ status: false, id: null });
    setCurrentMessage(null);
  };

  const openDeleteModal = (id: number, name: string) => {
    setDeleteModal({ status: true, id, name });
  };

  const closeDeleteModal = () => {
    setDeleteModal({ status: false, id: null, name: '' });
    setIsDeleting(false);
  };



  const handleDelete = async () => {
    if (!deleteModal.id) return ErrorMessage('ID missing');
    setIsDeleting(true);
    try {
      // Simulate API call
      const response = await contactService.deleteContactMessage(deleteModal.id)

      if (response.status === 'success') {
        messages.filter(con => con.id !== deleteModal.id)
        await contactService.fetchContactMessages()
        await delayApiCall()
        toast({
          title: "Success",
          description: "Message deleted successfully.",
          variant: "default",
        });
         closeDeleteModal();
      }
    } catch (error) {
      console.error('Delete error:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  // Close modals when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (view.status) closeMessage();
        if (deleteModal.status) closeDeleteModal();
      }
    };

    if (view.status || deleteModal.status) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [view.status, deleteModal.status]);

  return (
    <>
      <Helmet>
        <title>Contacts - Admin - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
        <div className="space-y-6">
          {/* Message View Modal */}
          {view.status && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center w-full min-h-screen z-50 p-4"
              onClick={closeMessage}
            >
              <div
                className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Message Details</h2>
                    <p className="text-sm text-gray-900 text-muted-foreground mt-1">
                      From: {currentMessage?.name}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeMessage}
                    className="h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-4 overflow-y-auto max-h-[60vh]">
                  {/* Sender Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Name:</span>
                      <p className="mt-1 text-gray-900">{currentMessage?.name}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Email:</span>
                      <p className="mt-1 text-gray-900 break-all">{currentMessage?.email}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <span className="font-medium text-gray-900 text-sm">Date Sent:</span>
                    <p className="mt-1 text-gray-900  text-sm">
                      {currentMessage?.createdAt ? new Date(currentMessage.createdAt).toLocaleString() : 'N/A'}
                    </p>
                  </div>

                  {/* Message */}
                  <div>
                    <span className="font-medium text-gray-500 text-sm">Message:</span>
                    <div className="mt-2 p-4 bg-gray-50 rounded-lg border">
                      <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {currentMessage?.message}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-3 p-6 border-t bg-gray-50">
                  <Button variant="outline" onClick={closeMessage}>
                    Close
                  </Button>
                  <Button
                    onClick={() => window.location.href = `mailto:${currentMessage?.email}?subject=Re: Your message to Optimarz Properties`}
                    className="bg-primary"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Reply via Email
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Delete Confirmation Modal */}
          {deleteModal.status && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center w-full min-h-screen z-50 p-4"
              onClick={closeDeleteModal}
            >
              <div
                className="bg-white rounded-lg shadow-xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <h2 className="text-xl font-semibold text-gray-900">Delete Message</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeDeleteModal}
                    className="h-8 w-8 p-0"
                    disabled={isDeleting}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <p className="text-gray-700">
                    Are you sure you want to delete the message from <strong>{deleteModal.name}</strong>?
                    This action cannot be undone.
                  </p>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-3 p-6 border-t bg-gray-50">
                  <Button
                    variant="outline"
                    onClick={closeDeleteModal}
                    disabled={isDeleting}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleDelete}
                    disabled={isDeleting}
                  >
                    {isDeleting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2Icon className="w-4 h-4 mr-2" />
                        Delete Message
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">Contact Messages</h1>
              <p className="text-muted-foreground">
                Manage and respond to customer inquiries
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs px-3 py-1">
                {messages.length} Total
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
                  placeholder="Search by name, email, or message..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-md"
                />
              </div>
            </CardHeader>
            <CardContent>
              {filteredContacts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    {searchTerm ? "No messages match your search" : "No contact messages yet"}
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">{contact.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-3 h-3 text-muted-foreground" />
                            <span className="text-muted-foreground">{contact.email}</span>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <p className="truncate" title={contact.message}>
                            {contact.message}
                          </p>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {new Date(contact.createdAt).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openMessage(contact.id)}
                              title="View full message"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openDeleteModal(contact.id, contact.name)}
                              title="Delete message"
                            >
                              <Trash2Icon className="w-4 h-4 " />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
    </>
  );
};

export default AdminContacts;