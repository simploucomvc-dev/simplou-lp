import { motion } from "framer-motion";

const Definition = () => (
  <section className="bg-background section-padding">
    <div className="container">
      <motion.div
        className="border border-border rounded-sm p-8 md:p-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">simplou.</h2>
        <p className="text-sm italic text-muted-foreground mb-6">/sim·plôu/</p>

        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">v.t. (verbo transitivo)</p>
        <p className="text-sm text-foreground/70 leading-relaxed mb-5 pl-4 border-l-2 border-primary">
          Organizar e simplificar a gestão de pequenos negócios, implementando processos,
          reduzindo esforço, eliminando desperdícios e aumentando o lucro, transformando
          pequenas operações em empresas formatadas, previsíveis e prontas para crescer.
        </p>

        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">fig.</p>
        <p className="text-sm text-foreground/70 leading-relaxed mb-5 pl-4 border-l-2 border-primary">
          Tirar um negócio do improviso e formatá-lo como empresa de verdade.
        </p>

        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">ex.:</p>
        <p className="text-sm italic text-muted-foreground pl-4">
          "Depois da consultoria, ele simplou o negócio e começou a ter lucro todo mês."
        </p>
      </motion.div>
    </div>
  </section>
);

export default Definition;
