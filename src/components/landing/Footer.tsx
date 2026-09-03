import logo from "@/assets/scalio-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Scalio Digital" className="h-6 w-auto" />
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Scalio Digital
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Tecnologia para imobiliárias que tratam aquisição como engenharia, não como sorte.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Navegar</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#metodo" className="text-foreground/80 hover:text-electric-bright">
                Método
              </a>
            </li>
            <li>
              <a href="#cases" className="text-foreground/80 hover:text-electric-bright">
                Cases
              </a>
            </li>
            <li>
              <a href="#faq" className="text-foreground/80 hover:text-electric-bright">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contato" className="text-foreground/80 hover:text-electric-bright">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Contato</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-foreground/80">contato@scalio.com.br</li>
            <li className="text-foreground/80">Belo Horizonte · Brasil</li>
            <li className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/luucas.ferreira1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-border p-2 text-muted-foreground hover:text-electric-bright hover:border-electric/40"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-ferreira-santana-201142254/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border p-2 text-muted-foreground hover:text-electric-bright hover:border-electric/40"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h4v16H4zM6 2a2 2 0 110 4 2 2 0 010-4zM10 8h4v2c1-1.5 2.5-2 4-2 3 0 4 2 4 5v7h-4v-6c0-2-1-3-2.5-3S13 12 13 14v6h-3z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
        <p>Scalio Digital — © {new Date().getFullYear()}. Todos os direitos reservados.</p>
        <p>Aquisição · Qualificação · Agendamento</p>
      </div>
    </footer>
  );
}
