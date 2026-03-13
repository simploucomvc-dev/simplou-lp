import { motion } from "framer-motion";

const DualCTA = () => (
  <section id="cta" className="bg-background section-padding">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          className="bg-section-alt p-10 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-250"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-xl font-bold text-foreground mb-2">Consultoria</h3>
          <p className="text-base text-muted-foreground mb-8">
            Agende uma conversa gratuita e descubra como organizar seu negócio
          </p>
          <a
            href="https://forms.gle/d16an3tHNrD1kwmv8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            Agendar agora
          </a>
        </motion.div>
        <motion.div
          className="border border-border p-10 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-250"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-xl font-bold text-foreground mb-2">App Simplou</h3>
          <p className="text-base text-muted-foreground mb-8">
            Acesse agora e gerencie seu negócio de onde estiver
          </p>
          <a
            href="https://simplou.app.br/login"
            className="inline-block border-2 border-primary text-foreground text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            Acessar agora
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DualCTA;
