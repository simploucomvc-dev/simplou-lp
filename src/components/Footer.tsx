import { Instagram } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark py-12">
      <div className="container text-center">
        <p className="text-lg font-bold text-background mb-4 tracking-tight">simplou.</p>
        <div className="flex gap-6 justify-center mb-4">
          {[
            { label: "Funcionalidades", id: "servicos" },
            { label: "App", id: "app" },
            { label: "FAQ", id: "faq" },
            { label: "Contato", id: "cta" },
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-xs text-background/50 hover:text-background/80 transition-colors uppercase tracking-wider"
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="flex gap-3 justify-center mb-6">
          <a href="https://www.instagram.com/simploucomvoce/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
            <Instagram className="w-3.5 h-3.5 text-background/60" />
          </a>
        </div>
        <p className="text-[11px] text-background/30">© 2026 Simplou. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
