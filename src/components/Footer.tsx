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
            { label: "Consultoria", id: "servicos" },
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
          <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
            <svg className="w-3.5 h-3.5 text-background/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
          </a>
        </div>
        <p className="text-[11px] text-background/30">© 2026 Simplou. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
