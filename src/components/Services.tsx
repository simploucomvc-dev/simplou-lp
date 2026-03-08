import { motion } from "framer-motion";

const services = [
  { icon: "📋", title: "Diagnóstico Financeiro", desc: "Analisamos a saúde financeira do seu negócio e identificamos gargalos" },
  { icon: "⚙️", title: "Processos e Operação", desc: "Padronizamos rotinas para o negócio funcionar sem depender só de você" },
  { icon: "💰", title: "Precificação e Margem", desc: "Definimos preços com base em custos reais para garantir lucro" },
  { icon: "📊", title: "Metas e Indicadores", desc: "Criamos metas claras e indicadores para decisões baseadas em dados", tag: "+ APP" },
];

const Services = () => (
  <section id="servicos" className="bg-section-alt section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">O QUE FAZEMOS</h2>
        <p className="text-sm text-muted-foreground mb-12">Consultoria completa para pequenos negócios</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="bg-card border border-border p-8 relative hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {s.tag && (
              <span className="absolute top-4 right-4 text-[10px] font-semibold text-muted-foreground border border-border px-2 py-0.5 rounded-sm">
                {s.tag}
              </span>
            )}
            <span className="text-2xl mb-4 block">{s.icon}</span>
            <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
