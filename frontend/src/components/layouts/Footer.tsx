import { Link } from "react-router-dom";
import optimarzLogoDark from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#1f2914] text-footer-text py-12 border-t border-footer-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={optimarzLogoDark} 
              alt="Optimarz Properties" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-base opacity-90">
              Your trusted partner in land investment and exploration opportunities. Have more questions or need more information? Reach out to us today and take the first step towards securing your finacial future with Optimarz
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-footer-accent">Quick Links</h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link to="/projects" className="hover:text-footer-accent transition-colors opacity-90 hover:opacity-100">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/summer-program" className="hover:text-footer-accent transition-colors opacity-90 hover:opacity-100">
                  Summer Program
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-footer-accent transition-colors opacity-90 hover:opacity-100">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-footer-accent transition-colors opacity-90 hover:opacity-100">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-footer-accent">Company</h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link to="/about" className="hover:text-footer-accent transition-colors opacity-90 hover:opacity-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-footer-accent transition-colors opacity-90 hover:opacity-100">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/waitlist" className="hover:text-footer-accent transition-colors opacity-90 hover:opacity-100">
                  Join VIP Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-footer-accent">Contact</h4>
            <ul className="space-y-2 text-base opacity-90">
              <li>contact@optimarzproperties.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-footer-border mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Optimarz Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
