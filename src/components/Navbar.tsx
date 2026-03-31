import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/simplou-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center">
          <img
            src={logo}
            alt="Simplou"
            className={`h-6 transition-all duration-300 ${
              scrolled ? "brightness-0" : ""
            }`}
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("servicos")}
            className={`text-[15px] font-semibold uppercase tracking-widest transition-colors ${
              scrolled ? "text-foreground/70 hover:text-foreground" : "text-background/80 hover:text-background"
            }`}
          >
            Funcionalidades
          </button>
          <button
            onClick={() => scrollTo("como-funciona")}
            className={`text-[15px] font-semibold uppercase tracking-widest transition-colors ${
              scrolled ? "text-foreground/70 hover:text-foreground" : "text-background/80 hover:text-background"
            }`}
          >
            Como funciona
          </button>
          <a
            href="https://simplou.app.br/registro"
            className="bg-primary text-primary-foreground text-[15px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            Inscreva-se
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-background"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-background"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-4">
          <button onClick={() => scrollTo("servicos")} className="text-base font-semibold uppercase tracking-wider text-foreground/70 text-left">Funcionalidades</button>
          <button onClick={() => scrollTo("como-funciona")} className="text-base font-semibold uppercase tracking-wider text-foreground/70 text-left">Como funciona</button>
          <a
            href="https://simplou.app.br/registro"
            className="bg-primary text-primary-foreground text-base font-bold uppercase tracking-wider px-6 py-3 rounded-full text-center mt-2"
          >
            Inscreva-se
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
