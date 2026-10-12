/**
 * Navbar.tsx — Main navigation scheme (Assignment rubric item 1).
 * Renders the custom logo plus links to all six pages. On small screens
 * the links collapse into a hamburger menu (via shadcn/ui Sheet).
 * The active page link is highlighted using NavLink's isActive flag.
 */

import { useState } from "react";
import { NavLink, Link } from "react-router";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { personalInfo } from "@/data/portfolioData";

// Route table: label shown to the user -> path registered in App.tsx
const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Education", path: "/education" },
  { label: "Services", path: "/services" },
  { label: "Contact Me", path: "/contact" },
];

export default function Navbar() {
  // Controls the open/closed state of the mobile slide-out menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Shared className builder: highlights the link of the current page
  const linkClasses = (isActive: boolean) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "bg-indigo-600 text-white"
        : "text-slate-300 hover:text-white hover:bg-slate-800"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Custom logo + site owner name, links back to Home */}
        <Link to="/" className="flex items-center gap-3">
          <Logo size={44} />
          <span className="text-white font-semibold text-lg hidden sm:block">
            {personalInfo.fullName}
          </span>
        </Link>

        {/* Desktop navigation (hidden on small screens) */}
        <ul className="hidden md:flex items-center gap-1">
          {navigationLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"} // exact match for Home
                className={({ isActive }) => linkClasses(isActive)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger menu (visible on small screens only) */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-950 border-slate-800">
            <ul className="flex flex-col gap-2 mt-8">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setMobileMenuOpen(false)} // close after navigating
                    className={({ isActive }) => `block ${linkClasses(isActive)}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
