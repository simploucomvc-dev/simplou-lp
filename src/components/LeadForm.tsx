import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const LeadForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    const nameParts = form.name.trim().split(/\s+/);
    if (nameParts.length < 2 || nameParts.some((p) => p.length < 2))
      e.name = "Informe nome e sobrenome";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim()))
      e.email = "E-mail inválido";

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 11)
      e.phone = "Telefone inválido";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        throw new Error("Variáveis de ambiente do Supabase não configuradas");
      }

      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone.replace(/\D/g, ""),
        }),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      toast({ title: "Cadastro realizado!", description: "Você será um dos primeiros a saber." });
      setForm({ name: "", email: "", phone: "" });
    } catch {
      toast({ title: "Erro", description: "Não foi possível enviar. Tente novamente.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="formulario" className="bg-section-alt section-padding">
      <div className="container max-w-lg">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            Seja um dos primeiros
          </h2>
          <p className="text-lg text-muted-foreground">
            Deixe seus dados e saiba antes de todo mundo
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 bg-card border border-border rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="space-y-1.5">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              placeholder="Maria da Silva"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(91) 99999-9999"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground text-lg font-bold uppercase tracking-wider py-4 rounded-full hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Quero participar"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadForm;
