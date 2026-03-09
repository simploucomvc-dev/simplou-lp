import { motion } from "framer-motion";
import { ClipboardCheck, Settings, DollarSign, BarChart3 } from "lucide-react";

const services = [
  { icon: ClipboardCheck, title: "Diagnóstico Financeiro", desc: "Analisamos a saúde financeira do seu negócio e identificamos gargalos" },
  { icon: Settings, title: "Processos e Operação", desc: "Padronizamos rotinas para o negócio funcionar sem depender só de você" },
  { icon: DollarSign, title: "Precificação e Margem", desc: "Definimos preços com base em custos reais para garantir lucro" },
  { icon: BarChart3, title: "Metas e Indicadores", desc: "Criamos metas claras e indicadores para decisões baseadas em dados", tag: "+ APP" },
];

const Services = () => (
  <section id="servicos" className="bg-section-alt section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">O QUE FAZEMOS</h2>
        <p className="text-lg text-muted-foreground mb-12">Aceleração de pequenos negócios</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="bg-card border border-border p-8 relative hover:-translate-y-1 hover:shadow-md transition-all duration-250"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            {s.tag && (
              <span className="absolute top-4 right-4 text-xs font-semibold text-muted-foreground border border-border px-2.5 py-1 rounded-sm">
                {s.tag}
              </span>
            )}
            <s.icon className="w-8 h-8 text-foreground mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
