import { motion } from "framer-motion";
import logo from "@/assets/simplou-logo.png";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-primary to-[hsl(82,70%,42%)] min-h-screen flex items-center justify-center relative">
      <div className="container text-center py-32">
        <motion.img
          src={logo}
          alt="Simplou"
          className="h-20 md:h-28 lg:h-32 mx-auto mb-8"
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
          onClick={() => scrollTo("cta")}
          className="bg-brand-dark text-background text-lg font-bold uppercase tracking-wider px-12 py-5 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        >
          Quero simplificar meu negócio
        </motion.button>
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
