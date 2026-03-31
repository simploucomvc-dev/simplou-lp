import { motion } from "framer-motion";
import logo from "@/assets/simplou-logo.png";
import logoMobile from "@/assets/simplou-logo-mobile.png";

const Hero = () => (
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
        Descubra se o seu negócio está lucrando de verdade. Controle custos,
        precifique certo e acompanhe o resultado — tudo em um app simples.{" "}
        <span className="italic font-bold text-primary-foreground/80">Simplou, cresceu!</span>
      </motion.p>
      <motion.button
        onClick={() => document.getElementById("app")?.scrollIntoView({ behavior: "smooth" })}
        className="bg-brand-dark text-background text-sm md:text-lg font-bold uppercase tracking-wider px-8 py-3.5 md:px-12 md:py-5 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
      >
        Quero organizar meu negócio agora
      </motion.button>

      <motion.div
        className="mt-16 text-primary-foreground/40 text-xs uppercase tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        role para descobrir
        <span className="block mt-2 text-xl animate-bounce-subtle">↓</span>
      </motion.div>
    </div>
  </section>
);

export default Hero;
