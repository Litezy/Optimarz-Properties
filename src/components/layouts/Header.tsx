import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2 } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Projects", path: "/projects" },
    { label: "Summer Program", path: "/summer-program" },
    { label: "Resources", path: "/resources" },
    { label: "Blog", path: "/blog" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--dark-bg))] text-[hsl(var(--dark-text))] shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Building2 className="w-8 h-8 text-primary" />
          <span className="text-primary">LANDWISE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
            <Link to="/waitlist">Join The VIP Waitlist</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[hsl(var(--dark-bg))] border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 w-full">
              <Link to="/waitlist" onClick={() => setIsMenuOpen(false)}>
                Join The VIP Waitlist
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
