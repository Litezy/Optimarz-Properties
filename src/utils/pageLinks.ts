import About from "@/pages/About";
import Blog from "@/pages/Blog";
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
    { component: Blog, path: "/blog" },
    { component: BlogPost, path: "/blog/:slug" },
    { component: Contact, path: "/contact" },
    { component: NotFound, path: "*" },
]