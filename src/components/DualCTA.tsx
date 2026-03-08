import { motion } from "framer-motion";

const DualCTA = () => (
  <section id="cta" className="bg-background section-padding">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          className="bg-section-alt p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-2">Consultoria</h3>
          <p className="text-sm text-muted-foreground mb-8">
            Agende uma conversa gratuita e descubra como organizar seu negócio
          </p>
          <button className="bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
            Agendar agora
          </button>
        </motion.div>
        <motion.div
          className="border border-border p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-2">App Simplou</h3>
          <p className="text-sm text-muted-foreground mb-8">
            Entre na lista de espera e seja o primeiro a usar quando lançar
          </p>
          <button className="border-2 border-primary text-foreground text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
            Lista de espera
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DualCTA;
