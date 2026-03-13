import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screens = [
  { src: "/tela1-app-simplou.png", alt: "Dashboard financeiro do App Simplou" },
  { src: "/tela2-app-simplou.png", alt: "Produtos e Serviços do App Simplou" },
  { src: "/tela3-app-simplou.png", alt: "Financeiro do App Simplou" },
];

/* ── Phone shell ── */
const PhoneShell = ({ src, alt, large = false }: { src: string; alt: string; large?: boolean }) => (
  <div
    className={`rounded-[28px] border border-border/40 overflow-hidden shadow-xl ${
      large ? "w-[190px] md:w-[210px] md:-translate-y-4" : "w-[155px] md:w-[170px]"
    }`}
  >
    <img src={src} alt={alt} className="w-full h-auto block" />
  </div>
);

/* ── Mobile Carousel ── */
const MobileCarousel = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="sm:hidden mb-10 pb-4">
      <div className="relative flex items-center justify-center py-4">
        <button
          onClick={() => setActive((p) => Math.max(0, p - 1))}
          className={`absolute left-2 z-10 p-1 ${active === 0 ? "opacity-20 pointer-events-none" : "opacity-60 hover:opacity-100"} transition-opacity`}
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        <div className="overflow-hidden w-[220px]">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${active * 220}px)` }}
          >
            {screens.map((screen, i) => (
              <div
                key={i}
                className="w-[220px] flex-shrink-0 flex justify-center py-2"
                style={{ opacity: i === active ? 1 : 0, transition: "opacity 0.3s" }}
              >
                <PhoneShell src={screen.src} alt={screen.alt} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setActive((p) => Math.min(screens.length - 1, p + 1))}
          className={`absolute right-2 z-10 p-1 ${active === screens.length - 1 ? "opacity-20 pointer-events-none" : "opacity-60 hover:opacity-100"} transition-opacity`}
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === active ? "bg-primary" : "bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Section ── */
const AppSection = () => (
  <section id="app" className="bg-section-alt section-padding">
    <div className="container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">App Simplou</h2>
        <p className="text-lg text-muted-foreground mb-6">Toda a gestão do seu negócio na palma da mão</p>
        <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed text-center mb-4">
          Cadastre produtos e serviços, controle entradas e saídas e acompanhe seu lucro em tempo real.{" "}
          <span className="font-semibold text-foreground">Sem planilha, sem complicação.</span>
        </p>
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-foreground text-sm font-medium px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary inline-block" />
          7 dias grátis · Sem cartão · Sem compromisso
        </div>
      </motion.div>

      {/* Desktop: side by side */}
      <motion.div
        className="hidden sm:flex items-end justify-center gap-4 md:gap-8 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <PhoneShell src={screens[1].src} alt={screens[1].alt} />
        <PhoneShell src={screens[0].src} alt={screens[0].alt} large />
        <PhoneShell src={screens[2].src} alt={screens[2].alt} />
      </motion.div>

      {/* Mobile: carousel */}
      <MobileCarousel />

      <div className="text-center">
        <a
          href="https://simplou.app.br/registro"
          className="inline-block border-2 border-primary text-foreground text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          Acessar agora
        </a>
      </div>
    </div>
  </section>
);

export default AppSection;
