import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "O que eu consigo fazer no App Simplou?", a: "Cadastrar produtos e serviços com custos reais, registrar receitas e despesas, acompanhar lucro e faturamento no Dashboard e exportar dados em CSV. Tudo em um só lugar, sem planilha." },
  { q: "Preciso entender de finanças para usar o app?", a: "Não. O Simplou foi feito pra quem não tem tempo (nem paciência) pra planilha. Tudo é simples, direto e visual. Um tour guiado aparece no primeiro acesso para explicar cada módulo." },
  { q: "O Simplou funciona para quem vende em marketplace?", a: "Sim. Você pode cadastrar as taxas e comissões de plataformas como Shopee e Mercado Livre como custos variáveis. O app desconta tudo e mostra seu lucro real por produto." },
  { q: "Posso controlar custos em dólar?", a: "Sim. O Simplou suporta valores em USD com cotação automática, ideal para quem importa insumos ou paga ferramentas em dólar." },
  { q: "Como funciona o cálculo de lucro?", a: "O Simplou considera custos fixos (embalagem, aluguel, energia) e custos variáveis (taxas, frete, comissões) de cada produto. Assim você vê o lucro real — não só a diferença entre receita e despesa." },
  { q: "Como funciona o pagamento?", a: "Assinatura mensal de R$ 19,90, cobrada via cartão de crédito pelo Stripe. Sem contrato, sem fidelidade — cancele quando quiser." },
];

const FAQ = () => (
  <section id="faq" className="bg-background section-padding">
    <div className="container max-w-2xl">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        DÚVIDAS FREQUENTES
      </motion.h2>
      <div>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            >
              <AccordionItem value={`item-${i}`} className="border border-border px-6 data-[state=open]:border-primary/40">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
