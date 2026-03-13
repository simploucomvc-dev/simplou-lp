import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Quanto custa a consultoria?", a: "Entre em contato para um diagnóstico gratuito. Nossos planos são acessíveis para pequenos negócios." },
  { q: "Funciona para qualquer tipo de negócio?", a: "Sim! Trabalhamos com comércios, serviços, alimentação, beleza e qualquer pequena operação que queira se profissionalizar." },
  { q: "Quanto tempo leva para ver resultados?", a: "Já nas primeiras semanas você terá clareza sobre seus números. Resultados consistentes aparecem em 30 a 90 dias." },
  { q: "Como funciona o acompanhamento?", a: "Fazemos reuniões periódicas para acompanhar indicadores, ajustar metas e garantir que o negócio siga no rumo certo." },
  { q: "O que eu consigo fazer no App Simplou?", a: "Cadastrar produtos e serviços com custo e preço de venda — o app calcula o lucro automaticamente. Registrar receitas e despesas, acompanhar o faturamento no Dashboard e exportar relatórios em PDF ou CSV." },
  { q: "Preciso entender de finanças para usar o app?", a: "Não. O Simplou foi feito pra quem não tem tempo (nem paciência) pra planilha. Tudo é simples, direto e visual." },
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
