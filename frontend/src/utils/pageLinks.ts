import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";
import Resources from "@/pages/Resources";
import SummerProgram from "@/pages/SummerProgram";
import Waitlist from "@/pages/Waitlist";
import BlogPost from "@/pages/BlogPost";
import HeritageBloom from "@/pages/HeritageBloom";
import TranquilRetreat from "@/pages/TranquilRetreat";
import BonhamRenaissance from "@/pages/BonhamRenaissance";
import SmallTownCharm from "@/pages/SmallTownCharm";
import AdminLogin from "@/pages/admin/Login";
import AdminProfile from "@/pages/admin/Profile";
import CreateBlog from "@/pages/admin/CreateBlog";
import AdminContacts from "@/pages/admin/Contacts";
import AdminWaitlist from "@/pages/admin/Waitlist";
import AllBlogs from "@/pages/admin/AllBlogs";
import EditBlog from "@/pages/admin/EditBlog";
import Downloads from "@/pages/admin/Downloads";
import Blogs from "@/pages/Blogs";

export const ClientPages = [
    { component: Index, path: "/" },
    { component: Projects, path: "/projects" },
    { component: HeritageBloom, path: "/heritage-bloom" },
    { component: TranquilRetreat, path: "/tranquil-retreat" },
    { component: BonhamRenaissance, path: "/bonham-renaissance" },
    { component: SmallTownCharm, path: "/small-town-charm" },
    { component: SummerProgram, path: "/summer-program" },
    { component: Resources, path: "/resources" },
    { component: About, path: "/about" },
    { component: Waitlist, path: "/waitlist" },
    { component: Blogs, path: "/blogs" },
    { component: BlogPost, path: "/blog/:slug" },
    { component: Contact, path: "/contact" },
    { component: NotFound, path: "*" },
    { component: AdminLogin, path: "/admin/login" },
]



export const AdminPages = [
    { component: AdminProfile, path: "/admin/profile" },
    { component: CreateBlog, path: "/admin/create-blog" },
    { component: AllBlogs, path: "/admin/all-blogs" },
    { component: EditBlog, path: "/admin/edit-blog" },
    { component: AdminContacts, path: "/admin/contacts" },
    { component: AdminWaitlist, path: "/admin/waitlist" },
    { component: Downloads, path: "/admin/downloads" },
]