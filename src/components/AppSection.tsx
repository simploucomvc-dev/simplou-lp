import { motion } from "framer-motion";

const PhoneMockup = ({ title, children, large = false }: { title: string; children: React.ReactNode; large?: boolean }) => (
  <div className={`border-2 border-foreground/20 rounded-[24px] p-3 bg-section-alt ${large ? "w-44 md:w-48 -translate-y-4" : "w-36 md:w-40"}`}>
    <div className="w-12 h-3 bg-foreground/15 rounded-b-lg mx-auto mb-3" />
    <div className="bg-foreground/10 rounded-md px-2 py-2 text-[10px] font-semibold text-foreground/60 text-center mb-2">{title}</div>
    <div className="space-y-1.5">{children}</div>
    <div className="flex gap-1 mt-3">
      {["🏠", "📦", "💰"].map((icon) => (
        <div key={icon} className="flex-1 h-6 bg-foreground/10 rounded text-[9px] flex items-center justify-center">{icon}</div>
      ))}
    </div>
  </div>
);

const Block = ({ h = 14, w = "100%", label }: { h?: number; w?: string; label?: string }) => (
  <div
    className="bg-foreground/10 rounded text-[8px] text-foreground/40 flex items-center justify-center"
    style={{ height: h, width: w }}
  >
    {label}
  </div>
);

const AppSection = () => (
  <section id="app" className="bg-section-alt section-padding">
    <div className="container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block border-2 border-dashed border-foreground/30 px-5 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Em breve
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">App Simplou</h2>
        <p className="text-sm text-muted-foreground">Toda a gestão do seu negócio na palma da mão</p>
      </motion.div>

      <motion.div
        className="flex items-end justify-center gap-4 md:gap-6 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Phone 1 - Produtos */}
        <div className="hidden sm:block">
          <PhoneMockup title="Produtos">
            <Block h={12} />
            <Block h={12} w="80%" />
            <Block h={12} />
            <Block h={12} w="60%" />
            <Block h={32} label="Lista" />
          </PhoneMockup>
        </div>

        {/* Phone 2 - Dashboard (center, larger) */}
        <PhoneMockup title="Dashboard" large>
          <Block h={64} label="GRÁFICO ANUAL" />
          <Block h={12} />
          <Block h={12} w="70%" />
          <Block h={12} />
        </PhoneMockup>

        {/* Phone 3 - Operações */}
        <div className="hidden sm:block">
          <PhoneMockup title="Operações">
            <div className="flex gap-1">
              <Block h={22} w="100%" label="Entrada" />
              <Block h={22} w="100%" label="Saída" />
            </div>
            <Block h={12} />
            <Block h={12} w="80%" />
            <Block h={12} />
            <Block h={12} w="60%" />
          </PhoneMockup>
        </div>
      </motion.div>

      <div className="text-center">
        <button className="border-2 border-primary text-foreground text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          Entrar na lista de espera
        </button>
      </div>
    </div>
  </section>
);

export default AppSection;
