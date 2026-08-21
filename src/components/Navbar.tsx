import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, GraduationCap } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppButton";
import { LanguageToggle } from "./LanguageToggle";
import { useLang, type TKey } from "@/lib/i18n";

const links: { href: string; key: TKey }[] = [
  { href: "/#about", key: "nav.about" },
  { href: "/#why", key: "nav.why" },
  { href: "/#academics", key: "nav.academics" },
  { href: "/#gallery", key: "nav.gallery" },
  { href: "/#admissions", key: "nav.admissions" },
  { href: "/#contact", key: "nav.contact" },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-card-soft">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className={`font-display font-bold text-base sm:text-lg ${scrolled ? "text-foreground" : "text-white"}`}>
                Darul Ilmi
              </div>
              <div className={`text-[10px] sm:text-xs tracking-wide ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
                Primary & Junior School
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-card-soft hover:shadow-elegant transition-all"
            >
              Apply Now
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
