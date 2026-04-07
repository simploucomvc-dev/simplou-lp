import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/heads/1.png", alt: "Resumo financeiro – Saiba o que entrou, o que saiu e o lucro real" },
  { src: "/heads/2.png", alt: "Produtos e Serviços – Custos, precificação, lucro estimado e estoque" },
  { src: "/heads/3.png", alt: "Funcionalidade do App Simplou" },
  { src: "/heads/4.png", alt: "Funcionalidade do App Simplou" },
  { src: "/heads/5.png", alt: "Funcionalidade do App Simplou" },
];

const AUTOPLAY_INTERVAL = 4500;

const HeadsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      setDirection(dir ?? (index > current ? 1 : -1));
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    const nextIndex = (current + 1) % slides.length;
    goTo(nextIndex, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    const prevIndex = (current - 1 + slides.length) % slides.length;
    goTo(prevIndex, -1);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
    }),
  };

  return (
    <section
      id="heads-carousel"
      className="w-full bg-section-alt py-8 px-4 sm:px-8 md:px-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide wrapper — constrained + rounded */}
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg aspect-[16/5] sm:aspect-[16/4.5] md:aspect-[16/4]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
            draggable={false}
          />
        </AnimatePresence>

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Slide anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/90 backdrop-blur-sm text-foreground rounded-full p-1.5 shadow transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Próximo slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/90 backdrop-blur-sm text-foreground rounded-full p-1.5 shadow transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Progress bar inside the image */}
        {!paused && (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/10 z-10">
            <motion.div
              key={current}
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
            />
          </div>
        )}
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 pt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-primary"
                : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeadsCarousel;
