import { BlogCard } from "@/components/blog/BlogCard";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";
import Resources from "@/pages/Resources";
import SummerProgram from "@/pages/SummerProgram";
import Waitlist from "@/pages/Waitlist";

export const ClientPages = [
    { component: Index, path: "/" },
    { component: Projects, path: "/projects" },
    { component: SummerProgram, path: "/summer-program" },
    { component: Resources, path: "/resources" },
    { component: About, path: "/about" },
    { component: Waitlist, path: "/waitlist" },
    { component: Blog, path: "/blog" },
    // { component: BlogCard, path: "/blog/:slug" },
    { component: Contact, path: "/contact" },
    { component: NotFound, path: "*" },
]