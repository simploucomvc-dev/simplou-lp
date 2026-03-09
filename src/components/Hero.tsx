import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/simplou-logo.png";
import logoMobile from "@/assets/simplou-logo-mobile.png";

const TARGET_DATE = new Date("2026-03-13T03:00:00Z"); // 13/03/2026 00:00 Belém (UTC-3)

const useCountdown = (target: Date) => {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  const timeUnits = [
    { label: "dias", value: days },
    { label: "horas", value: hours },
    { label: "min", value: minutes },
    { label: "seg", value: seconds },
  ];

  return (
    <section id="hero" className="bg-gradient-to-br from-primary to-[hsl(82,70%,42%)] min-h-screen flex items-center justify-center relative">
      <div className="container text-center py-32">
        {/* Mobile/tablet logo */}
        <motion.img
          src={logoMobile}
          alt="Simplou"
          className="md:hidden w-[80%] max-w-[360px] mx-auto mb-8 object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {/* Desktop logo */}
        <motion.img
          src={logo}
          alt="Simplou"
          className="hidden md:block md:h-28 lg:h-32 mx-auto mb-8 object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.p
          className="text-lg md:text-xl text-primary-foreground/60 max-w-lg mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Empreender já é bem complicado pra gestão ainda ter que ser um peso.
          A gente acredita que organizar o negócio pode ser simples, leve e até divertido.{" "}
          <span className="italic font-bold text-primary-foreground/80">Simplou, cresceu!</span>
        </motion.p>
        <motion.button
          onClick={() => scrollTo("formulario")}
          className="bg-brand-dark text-background text-sm md:text-lg font-bold uppercase tracking-wider px-8 py-3.5 md:px-12 md:py-5 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        >
          Seja um dos primeiros a saber
        </motion.button>

        {/* Countdown */}
        <motion.div
          className="mt-8 flex justify-center gap-3 md:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        >
          {timeUnits.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-extrabold text-primary-foreground tabular-nums">
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-[10px] md:text-xs text-primary-foreground/50 uppercase tracking-widest mt-1">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-primary-foreground/40 text-xs uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          role para descobrir
          <span className="block mt-2 text-xl animate-bounce-subtle">↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
