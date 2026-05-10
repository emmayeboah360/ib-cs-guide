import type { NavItem } from "@/types";
import { Link, useLocation } from "@tanstack/react-router";
import { BookOpen, Code2, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Syllabus", path: "/syllabus", description: "Full topic breakdown" },
  { label: "SL vs HL", path: "/sl-vs-hl", description: "Level comparison" },
  { label: "Assessment", path: "/assessment", description: "Exams & IA guide" },
  { label: "Resources", path: "/resources", description: "Study materials" },
  { label: "News", path: "/news", description: "Latest updates" },
  { label: "About", path: "/about", description: "About this site" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header
      className="bg-card border-b border-border shadow-subtle sticky top-0 z-50"
      data-ocid="nav.header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            data-ocid="nav.logo_link"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground shadow-xs">
              <Code2 size={18} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm font-bold text-foreground tracking-tight">
                IB CS Guide
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                DP Computer Science
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link px-3 py-2 rounded-md hover:bg-muted/60 ${
                  isActive(item.path)
                    ? "nav-link-active bg-primary/8 text-primary"
                    : ""
                }`}
                data-ocid={`nav.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            data-ocid="nav.mobile_menu_toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-border bg-card animate-fade-in"
          data-ocid="nav.mobile_menu"
        >
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
                data-ocid={`nav.mobile.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              >
                <BookOpen size={15} className="shrink-0 opacity-60" />
                <span>{item.label}</span>
                {item.description && (
                  <span className="ml-auto text-xs text-muted-foreground">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
