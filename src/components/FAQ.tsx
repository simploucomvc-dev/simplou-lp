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
  { q: "O app é gratuito para clientes da consultoria?", a: "Clientes da consultoria terão acesso prioritário e condições especiais no lançamento." },
  { q: "Como funciona o acompanhamento?", a: "Fazemos reuniões periódicas para acompanhar indicadores, ajustar metas e garantir que o negócio siga no rumo certo." },
];

const FAQ = () => (
  <section id="faq" className="bg-background section-padding">
    <div className="container max-w-2xl">
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        DÚVIDAS FREQUENTES
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border px-6 data-[state=open]:border-primary/40">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
