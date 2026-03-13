import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [overDark, setOverDark] = useState(true);

  useEffect(() => {
    const appEl = document.getElementById("app");

    const update = () => {
      if (!appEl) return;
      // Button is fixed at bottom-6 (24px); its top in page coords = scrollY + innerHeight - ~44px
      const buttonPageTop = window.scrollY + window.innerHeight - 44;
      setOverDark(buttonPageTop < appEl.offsetTop);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      href="https://simplou.app.br/registro"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md border text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 ${
        overDark
          ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
          : "bg-black/70 border-black/10 text-white hover:bg-black/80"
      }`}
    >
      Acessar APP
    </a>
  );
};

export default FloatingCTA;
