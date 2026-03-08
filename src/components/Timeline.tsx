import { motion } from "framer-motion";

const pillars = [
  {
    icon: "$",
    title: "Caixa Organizado",
    desc: "Separar conta pessoal da empresa, registrar entradas e saídas, saber faturamento, custo, lucro e caixa, precificar com margem, manter caixa positivo.",
    rule: "Empresa que não mede dinheiro, quebra.",
  },
  {
    icon: "⚙",
    title: "Operação Clara",
    desc: "Funções definidas, checklist diário, processos padronizados, menos improviso, negócio funcionando sem o dono.",
    rule: "O negócio precisa funcionar mesmo sem você.",
  },
  {
    icon: "📊",
    title: "Informação para Decidir",
    desc: "Metas mensais, indicadores semanais, reuniões de acompanhamento, planejamento trimestral, decisões com números.",
    rule: "O que não é medido, não melhora.",
  },
];

const Timeline = () => (
  <section className="bg-background section-padding">
    <div className="container">
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        TRIPÉ PARA PROSPERAR
      </motion.h2>
      <div className="relative max-w-xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            className="flex gap-6 mb-12 last:mb-0 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center text-lg shrink-0 z-10">
              {p.icon}
            </div>
            <div className="pt-1">
              <h3 className="text-base font-bold text-foreground mb-2">
                {i + 1}. {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
              <p className="text-xs italic text-muted-foreground border-l-2 border-primary pl-3">
                {p.rule}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
