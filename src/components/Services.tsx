import { motion } from "framer-motion";
import { BarChart3, Tag, Calculator, Wallet } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Dashboard em tempo real",
    desc: "Receita, despesa e lucro líquido num painel só. Gráfico de evolução mensal e previsão de entradas futuras já lançadas.",
  },
  {
    icon: Tag,
    title: "Custo real, preço certo",
    desc: "Cadastre produtos e serviços com todos os custos. O app calcula o lucro por item e sugere o preço mínimo viável com markup automático.",
  },
  {
    icon: Calculator,
    title: "Custos fixos e variáveis",
    desc: "Embalagens, aluguel, taxas de marketplace, frete, comissões, insumos em dólar — tudo entra no cálculo. Suporte a R$, % e USD com cotação automática.",
  },
  {
    icon: Wallet,
    title: "Financeiro organizado",
    desc: "Lance receitas e despesas, crie parcelas recorrentes e anexe comprovantes diretamente na transação. Sem pasta no Drive, sem planilha.",
  },
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
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">FUNCIONALIDADES</h2>
        <p className="text-lg text-muted-foreground mb-12">Tudo que você precisa para entender se está lucrando</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map((s, i) => (
          <motion.div
            key={s.title}
            className="bg-card border border-border p-8 relative hover:-translate-y-1 hover:shadow-md transition-all duration-250"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
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
