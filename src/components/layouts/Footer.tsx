import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--dark-bg))] text-[hsl(var(--dark-text))] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-primary">LANDWISE</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md">
              Your gateway to discovering prime land investment opportunities. 
              Explore curated properties and make informed decisions for your future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/summer-program" className="text-gray-400 hover:text-primary transition-colors">
                  Summer Program
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/waitlist" className="hover:text-primary transition-colors">
                  Join VIP Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} LandWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
