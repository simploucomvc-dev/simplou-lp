import { motion } from "framer-motion";
import { Check, LayoutDashboard, Package, ArrowLeftRight } from "lucide-react";

const modules = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    items: [
      "Resumo financeiro em tempo real",
      "Total de receitas, despesas e lucro estimado",
      "Gráficos de evolução financeira",
    ],
  },
  {
    icon: Package,
    title: "Produtos e Serviços",
    items: [
      "Cadastro de produtos e serviços",
      "Cálculo automático de lucro",
      "Preço sugerido com markup 100%",
      "Gestão de custos fixos e variáveis",
    ],
  },
  {
    icon: ArrowLeftRight,
    title: "Operações",
    items: [
      "Registro de receitas e despesas",
      "Anexo de comprovantes (PDF/imagem)",
      "Exportação em CSV e PDF",
      "Transações recorrentes automáticas",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-[var(--section-alt)]">
      <div className="container max-w-[960px] mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Plano único · Tudo incluído
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Simples assim. Um plano,{" "}
            <span className="text-primary">tudo que você precisa.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Sem plano básico, sem plano avançado. Você tem acesso completo ao
            Simplou por um preço acessível.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Card header */}
          <div className="bg-primary px-8 py-8 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-foreground/50 mb-1">App Simplou</p>
                <h3 className="text-2xl font-bold text-foreground">Plano Completo</h3>
              </div>
              <div className="text-right shrink-0">
                <p className="text-foreground/60 text-xs mb-0.5">depois dos 7 dias</p>
                <p className="text-2xl font-extrabold leading-none text-foreground">
                  R$&nbsp;19<span className="text-lg">,90</span>
                </p>
                <p className="text-foreground/60 text-xs">/ mês</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/40 text-foreground text-sm font-bold px-4 py-2.5 rounded-full self-start">
              <span className="w-2 h-2 rounded-full bg-foreground inline-block" />
              7 dias grátis · Sem cartão · Sem compromisso
            </div>
          </div>

          {/* Modules */}
          <div className="px-8 py-8 grid sm:grid-cols-2 gap-8">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <mod.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground text-sm">
                    {mod.title}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-8 pb-8">
            <a
              href="https://simplou.app.br/registro"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-foreground hover:bg-foreground/80 text-white font-bold text-base py-4 rounded-xl transition-colors duration-200"
            >
              Começar grátis por 7 dias
            </a>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Não é necessário cartão de crédito para começar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
