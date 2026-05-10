import { Link } from "@tanstack/react-router";
import { Code2, ExternalLink } from "lucide-react";

const footerLinks = [
  { label: "Syllabus", path: "/syllabus" },
  { label: "SL vs HL", path: "/sl-vs-hl" },
  { label: "Assessment", path: "/assessment" },
  { label: "Resources", path: "/resources" },
  { label: "News", path: "/news" },
  { label: "About", path: "/about" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground">
                <Code2 size={16} />
              </div>
              <span className="font-display font-bold text-foreground">
                IB CS Guide
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A free study companion for IB Diploma Programme Computer Science
              students — covering both SL and HL.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Disclaimer
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This is an <strong>unofficial resource</strong>, not affiliated
              with or endorsed by the International Baccalaureate Organization
              (IBO). All IB trademarks and content are the property of the IBO.
              This site is intended for educational study purposes only.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year}. Built with love using{" "}
            <a
              href={utm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              caffeine.ai <ExternalLink size={10} />
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Unofficial resource — not affiliated with IBO
          </p>
        </div>
      </div>
    </footer>
  );
}
