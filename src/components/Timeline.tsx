import { motion } from "framer-motion";
import { PackagePlus, ReceiptText, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: PackagePlus,
    title: "Cadastre seus produtos e custos",
    desc: "Adicione produtos ou serviços com todos os custos envolvidos — fixos, variáveis, taxas de marketplace, insumos em dólar. O app sugere o preço de venda com markup automático.",
    rule: "Vender sem saber o custo real é trabalhar de graça.",
  },
  {
    icon: ReceiptText,
    title: "Registre receitas e despesas",
    desc: "Lance movimentações financeiras, crie parcelas recorrentes com um clique e anexe comprovantes direto na transação. Tudo em um lugar, sem planilha.",
    rule: "O que não é registrado, não é gerenciado.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhe seu lucro",
    desc: "Veja no Dashboard se está lucrando de verdade. Gráfico de evolução mensal, composição de receitas e previsão de entradas futuras já lançadas.",
    rule: "Número na tela muda decisão na prática.",
  },
];

const Timeline = () => (
  <section id="como-funciona" className="bg-background section-padding">
    <div className="container">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        COMO FUNCIONA
      </motion.h2>
      <div className="relative max-w-xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

        {steps.map((p, i) => (
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
