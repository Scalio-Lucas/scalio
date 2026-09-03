import { useEffect, useState } from "react";
import logo from "@/assets/scalio-logo.png";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#como", label: "Como Funciona" },
  { href: "#cases", label: "Cases" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]" : "glass"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Scalio" className="h-6 w-auto" />
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://lp.digitalscalio.com/forms"
          className="group relative hidden overflow-hidden rounded-full bg-electric px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-4px_oklch(0.62_0.24_264/0.7)] transition-all hover:shadow-[0_0_32px_0_oklch(0.62_0.24_264/0.9)] md:inline-flex"
        >
          <span className="relative z-10">Agendar Diagnóstico</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden p-2 text-foreground"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="absolute top-full mt-2 w-[calc(100%-2rem)] max-w-6xl rounded-2xl glass-strong p-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="https://lp.digitalscalio.com/forms"
              className="mt-2 rounded-full bg-electric px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Agendar Diagnóstico
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
