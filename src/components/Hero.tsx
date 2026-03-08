import { motion } from "framer-motion";
import logo from "@/assets/simplou-logo.png";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="bg-primary min-h-screen flex items-center justify-center relative">
      <div className="container text-center py-32">
        <motion.img
          src={logo}
          alt="Simplou"
          className="h-16 md:h-20 mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.p
          className="text-lg md:text-xl italic text-primary-foreground/80 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Simplou, cresceu!
        </motion.p>
        <motion.p
          className="text-sm md:text-base text-primary-foreground/60 max-w-md mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Empreender já é bem complicado pra gestão ainda ter que ser um peso.
          A gente acredita que organizar o negócio pode ser simples, leve e até divertido.
        </motion.p>
        <motion.button
          onClick={() => scrollTo("cta")}
          className="bg-brand-dark text-background text-sm md:text-base font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Quero simplificar meu negócio
        </motion.button>
        <motion.div
          className="mt-16 text-primary-foreground/40 text-xs uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          role para descobrir
          <span className="block mt-2 text-xl animate-bounce-subtle">↓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
