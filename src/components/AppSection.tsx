import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home, Package, CircleDollarSign, Search, Bell, Plus,
  ArrowUpRight, ShoppingCart, Truck, ChevronLeft, ChevronRight
} from "lucide-react";

/* ── Shared tab bar ── */
const TabBar = ({ active }: { active: "home" | "package" | "dollar" }) => {
  const tabs = [
    { key: "home", icon: Home },
    { key: "package", icon: Package },
    { key: "dollar", icon: CircleDollarSign },
  ] as const;

  return (
    <div className="flex border-t border-foreground/10 mt-auto pt-1.5">
      {tabs.map(({ key, icon: Icon }) => (
        <div key={key} className="flex-1 flex justify-center py-1">
          <Icon
            className={`w-4 h-4 ${key === active ? "text-primary" : "text-foreground/30"}`}
            strokeWidth={key === active ? 2 : 1.5}
          />
        </div>
      ))}
    </div>
  );
};

/* ── Status bar ── */
const StatusBar = () => (
  <div className="flex justify-between items-center px-3 pt-1.5 pb-1 text-[7px] text-foreground/40 font-medium">
    <span>9:41</span>
    <div className="w-14 h-4 bg-foreground/15 rounded-full mx-auto" />
    <div className="flex gap-1 items-center">
      <div className="w-3 h-2 border border-foreground/30 rounded-[1px] relative">
        <div className="absolute inset-[1px] right-[2px] bg-foreground/30 rounded-[0.5px]" />
      </div>
    </div>
  </div>
);

/* ── Phone shell ── */
const PhoneShell = ({ children, large = false }: { children: React.ReactNode; large?: boolean }) => (
  <div
    className={`rounded-[28px] border border-border p-[2px] ${
      large ? "w-[190px] md:w-[210px] md:-translate-y-4" : "w-[155px] md:w-[170px]"
    }`}
    style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
  >
    <div className="bg-background rounded-[26px] flex flex-col overflow-hidden" style={{ minHeight: large ? 320 : 260 }}>
      {children}
    </div>
  </div>
);

/* ── TELA 1: Produtos ── */
const ProductsScreen = () => (
  <PhoneShell>
    <StatusBar />
    <div className="px-3 py-2 flex justify-between items-center">
      <span className="text-[11px] font-bold text-foreground">Produtos</span>
      <Search className="w-3 h-3 text-foreground/40" strokeWidth={1.5} />
    </div>
    <div className="px-3 flex-1 space-y-1.5">
      {[
        { name: "Produto A", price: "R$ 45,00", margin: "32%" },
        { name: "Produto B", price: "R$ 89,90", margin: "28%" },
        { name: "Produto C", price: "R$ 22,50", margin: "45%" },
      ].map((p) => (
        <div key={p.name} className="bg-section-alt rounded-lg p-2 flex justify-between items-center">
          <div>
            <p className="text-[9px] font-semibold text-foreground">{p.name}</p>
            <p className="text-[8px] text-primary font-bold">{p.price}</p>
          </div>
          <span className="text-[7px] text-muted-foreground bg-background px-1.5 py-0.5 rounded-full border border-border">
            {p.margin} margem
          </span>
        </div>
      ))}
      {/* FAB */}
      <div className="flex justify-end pt-1">
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-sm">
          <Plus className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={2} />
        </div>
      </div>
    </div>
    <TabBar active="package" />
  </PhoneShell>
);

/* ── TELA 2: Dashboard ── */
const DashboardScreen = () => {
  const bars = [
    { month: "Jan", h: 40 },
    { month: "Fev", h: 55 },
    { month: "Mar", h: 35 },
    { month: "Abr", h: 60 },
    { month: "Mai", h: 50 },
    { month: "Jun", h: 75 },
  ];

  return (
    <PhoneShell large>
      <StatusBar />
      <div className="px-3 py-2 flex justify-between items-center">
        <span className="text-[11px] font-bold text-foreground">Dashboard</span>
        <Bell className="w-3 h-3 text-foreground/40" strokeWidth={1.5} />
      </div>
      <div className="px-3 flex-1 space-y-2">
        {/* Revenue card */}
        <div className="bg-section-alt rounded-lg p-2.5">
          <p className="text-[7px] text-muted-foreground uppercase tracking-wider">Faturamento do mês</p>
          <p className="text-[16px] font-extrabold text-foreground leading-tight">R$ 12.450</p>
          <span className="inline-flex items-center gap-0.5 text-[7px] text-primary font-semibold mt-0.5">
            <ArrowUpRight className="w-2 h-2" /> 18% vs mês anterior
          </span>
        </div>

        {/* Bar chart */}
        <div className="bg-section-alt rounded-lg p-2.5">
          <div className="flex items-end justify-between gap-1" style={{ height: 70 }}>
            {bars.map((b, i) => (
              <div key={b.month} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className={`w-full rounded-t transition-all ${
                    i === bars.length - 1 ? "bg-primary" : "bg-primary/40"
                  }`}
                  style={{ height: `${b.h}%` }}
                />
                <span className="text-[6px] text-muted-foreground">{b.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini cards */}
        <div className="flex gap-1.5">
          <div className="flex-1 bg-section-alt rounded-lg p-2">
            <p className="text-[7px] text-muted-foreground">Entradas</p>
            <p className="text-[10px] font-bold text-primary">R$ 15.200</p>
          </div>
          <div className="flex-1 bg-section-alt rounded-lg p-2">
            <p className="text-[7px] text-muted-foreground">Saídas</p>
            <p className="text-[10px] font-bold text-[#E85D5D]">R$ 2.750</p>
          </div>
        </div>
      </div>
      <TabBar active="home" />
    </PhoneShell>
  );
};

/* ── TELA 3: Operações ── */
const OperationsScreen = () => (
  <PhoneShell>
    <StatusBar />
    <div className="px-3 py-2">
      <span className="text-[11px] font-bold text-foreground">Operações</span>
    </div>
    <div className="px-3 flex-1 space-y-2">
      {/* Action buttons */}
      <div className="flex gap-1.5">
        <button className="flex-1 bg-primary text-primary-foreground text-[8px] font-bold py-1.5 rounded-lg">Entrada</button>
        <button className="flex-1 bg-background border border-border text-foreground text-[8px] font-bold py-1.5 rounded-lg">Saída</button>
      </div>

      <p className="text-[7px] text-muted-foreground font-semibold uppercase tracking-wider">Março 2026</p>

      {/* Transaction list */}
      {[
        { name: "Venda Produto A", value: "+R$ 120", type: "in" as const, date: "08 mar", icon: ShoppingCart },
        { name: "Compra insumos", value: "-R$ 45", type: "out" as const, date: "07 mar", icon: Truck },
        { name: "Venda Produto B", value: "+R$ 89", type: "in" as const, date: "06 mar", icon: ShoppingCart },
      ].map((t, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
            t.type === "in" ? "bg-primary/15" : "bg-[#E85D5D]/15"
          }`}>
            <t.icon className={`w-2.5 h-2.5 ${t.type === "in" ? "text-primary" : "text-[#E85D5D]"}`} strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[8px] font-semibold text-foreground truncate">{t.name}</p>
            <p className="text-[6px] text-muted-foreground">{t.date}</p>
          </div>
          <span className={`text-[8px] font-bold ${t.type === "in" ? "text-primary" : "text-[#E85D5D]"}`}>
            {t.value}
          </span>
        </div>
      ))}
    </div>
    <TabBar active="dollar" />
  </PhoneShell>
);

/* ── Mobile Carousel ── */
const MobileCarousel = () => {
  const [active, setActive] = useState(1); // 0=Products, 1=Dashboard, 2=Operations
  const screens = [<ProductsScreen />, <DashboardScreen />, <OperationsScreen />];

  return (
    <div className="sm:hidden mb-10">
      <div className="relative flex items-center justify-center">
        <button
          onClick={() => setActive((p) => Math.max(0, p - 1))}
          className={`absolute left-0 z-10 p-1 ${active === 0 ? "opacity-20 pointer-events-none" : "opacity-60 hover:opacity-100"} transition-opacity`}
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        <div className="overflow-hidden w-[220px]">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${active * 220}px)` }}
          >
            {screens.map((screen, i) => (
              <div key={i} className="w-[220px] flex-shrink-0 flex justify-center">
                {screen}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setActive((p) => Math.min(2, p + 1))}
          className={`absolute right-0 z-10 p-1 ${active === 2 ? "opacity-20 pointer-events-none" : "opacity-60 hover:opacity-100"} transition-opacity`}
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === active ? "bg-primary" : "bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Section ── */
const AppSection = () => (
  <section id="app" className="bg-section-alt section-padding">
    <div className="container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-block border-2 border-dashed border-foreground/30 px-5 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Em breve
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">App Simplou</h2>
        <p className="text-lg text-muted-foreground">Toda a gestão do seu negócio na palma da mão</p>
      </motion.div>

      {/* Desktop: side by side */}
      <motion.div
        className="hidden sm:flex items-end justify-center gap-4 md:gap-8 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ProductsScreen />
        <DashboardScreen />
        <OperationsScreen />
      </motion.div>

      {/* Mobile: carousel */}
      <MobileCarousel />

      <div className="text-center">
        <button className="border-2 border-primary text-foreground text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          Entrar na lista de espera
        </button>
      </div>
    </div>
  </section>
);

export default AppSection;
