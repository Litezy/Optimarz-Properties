import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Download, BookOpen, TrendingUp, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDownloadsStore } from "@/store/downloads.store";

const Downloads = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const downloads = useDownloadsStore(state => state.downloads);
   console.log(downloads)
  const filteredDownloads = downloads.filter(
    (person) =>
      person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate stats
  const thisMonthDownloads = downloads.filter(d => {
    const downloadDate = new Date(d.createdAt);
    const now = new Date();
    return downloadDate.getMonth() === now.getMonth() && 
           downloadDate.getFullYear() === now.getFullYear();
  }).length;

  const handleExport = () => {
    if (downloads.length === 0) {
      alert("No data to export");
      return;
    }

    const csv = [
      ["ID", "First Name", "Last Name", "Email", "Download Date"],
      ...downloads.map((person) => [
        person.id,
        person.firstName,
        person.lastName,
        person.email,
        new Date(person.createdAt).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ebook-downloads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>eBook Downloads - Admin - Optimarz Properties</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">eBook Downloads</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Track and manage all eBook download requests
            </p>
          </div>
          <div className="flex items-center flex-col lg:flex-row gap-2">
            <Badge variant="outline" className="text-base px-3 py-1 border-primary/30 text-primary">
              <BookOpen className="w-4 h-4 mr-1" />
              {downloads.length} Total
            </Badge>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleExport}
              disabled={downloads.length === 0}
              className="border-primary/30 hover:bg-primary/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" />
                Total Downloads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{downloads.length}</div>
              <p className="text-xs text-muted-foreground mt-1">All time downloads</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{thisMonthDownloads}</div>
              <p className="text-xs text-muted-foreground mt-1">Downloads this month</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Latest Download
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold text-foreground">
                {downloads.length > 0
                  ? new Date(
                      Math.max(...downloads.map(p => new Date(p.createdAt).getTime()))
                    ).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })
                  : "N/A"}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Most recent download</p>
            </CardContent>
          </Card>
        </div>

        {/* Downloads Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              All eBook Downloads
            </CardTitle>
            <CardDescription >
              View and manage all users who have downloaded the eBook
            </CardDescription>
            <div className="pt-4">
              <Input
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md focus:ring-primary"
              />
            </div>
          </CardHeader>
          <CardContent>
            {filteredDownloads.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">
                  {searchTerm ? "No downloads match your search" : "No eBook downloads yet"}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="font-semibold">Name</TableHead>
                      <TableHead className="font-semibold">Email</TableHead>
                      <TableHead className="font-semibold truncate">Download Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDownloads.map((person) => (
                      <TableRow key={person.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3 truncate">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-sm font-semibold text-primary">
                                {person.firstName[0]}{person.lastName[0]}
                              </span>
                            </div>
                            <span>{person.firstName} {person.lastName}</span>
                          </div>
                        </TableCell>
                        <TableCell className="">
                          <div className="flex items-center truncate gap-2 text-sm text-muted-foreground">
                            <Mail className="w-3 h-3" />
                            {person.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex truncate items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {new Date(person.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Downloads;
