import { motion } from "framer-motion";

const DualCTA = () => (
  <section id="cta" className="bg-background section-padding">
    <div className="container">
      <motion.div
        className="bg-section-alt p-12 text-center hover:shadow-md transition-all duration-250 max-w-xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-extrabold text-foreground mb-3">Comece a lucrar de verdade</h3>
        <p className="text-base text-muted-foreground mb-8">
          Cadastre-se agora e tenha clareza total sobre o financeiro do seu negócio
        </p>
        <a
          href="https://simplou.app.br/registro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          Criar minha conta
        </a>
      </motion.div>
    </div>
  </section>
);

export default DualCTA;
