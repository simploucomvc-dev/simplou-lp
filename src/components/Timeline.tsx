import { motion } from "framer-motion";
import { Wallet, Settings2, LineChart } from "lucide-react";

const pillars = [
  {
    icon: Wallet,
    title: "Caixa Organizado",
    desc: "Separar conta pessoal da empresa, registrar entradas e saídas, saber faturamento, custo, lucro e caixa, precificar com margem, manter caixa positivo.",
    rule: "Empresa que não mede dinheiro, quebra.",
  },
  {
    icon: Settings2,
    title: "Operação Clara",
    desc: "Funções definidas, checklist diário, processos padronizados, menos improviso, negócio funcionando sem o dono.",
    rule: "O negócio precisa funcionar mesmo sem você.",
  },
  {
    icon: LineChart,
    title: "Informação para Decidir",
    desc: "Metas mensais, indicadores semanais, reuniões de acompanhamento, planejamento trimestral, decisões com números.",
    rule: "O que não é medido, não melhora.",
  },
];

const Timeline = () => (
  <section className="bg-background section-padding">
    <div className="container">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        TRIPÉ PARA PROSPERAR
      </motion.h2>
      <div className="relative max-w-xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            className="flex gap-6 mb-12 last:mb-0 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            <div className="w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center shrink-0 z-10">
              <p.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </div>
            <div className="pt-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {i + 1}. {p.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
              <p className="text-sm italic text-muted-foreground border-l-2 border-primary pl-3">
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
