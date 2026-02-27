import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TELEGRAM_BOT_TOKEN = "8631782403:AAGYxE9DGINs5nDtxsM_5Imb_6Bvv3yrj5s";
const TELEGRAM_CHAT_ID = "368177673";

const RequestForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    device: "",
    problem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.device || !form.problem.trim()) {
      toast({ title: "Заполните все поля", variant: "destructive" });
      return;
    }

    if (form.name.length > 100 || form.phone.length > 30 || form.problem.length > 1000) {
      toast({ title: "Превышена допустимая длина полей", variant: "destructive" });
      return;
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      toast({
        title: "Заявка принята!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setForm({ name: "", phone: "", device: "", problem: "" });
      return;
    }

    setLoading(true);
    const text = `📩 Новая заявка!\n\n👤 Имя: ${form.name}\n📱 Телефон: ${form.phone}\n💻 Устройство: ${form.device}\n🔧 Проблема: ${form.problem}`;

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      });
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setForm({ name: "", phone: "", device: "", problem: "" });
    } catch {
      toast({ title: "Ошибка отправки", description: "Попробуйте позже.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="request" className="section-padding bg-section-dark">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-section-dark-foreground mb-3">
            Оставить заявку
          </h2>
          <p className="text-section-dark-foreground/60">
            Опишите проблему — мы перезвоним и проконсультируем бесплатно
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-xl space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">Ваше имя</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                placeholder="Иван Иванов"
                className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-1.5">Телефон</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                maxLength={30}
                placeholder="+7 (900) 000-00-00"
                className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-card-foreground mb-1.5">Тип устройства</label>
            <select
              name="device"
              value={form.device}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition"
            >
              <option value="">Выберите устройство</option>
              <option value="Компьютер">Компьютер</option>
              <option value="Ноутбук">Ноутбук</option>
              <option value="Телевизор">Телевизор</option>
              <option value="Микроволновая печь">Микроволновая печь</option>
              <option value="Электронная плата">Электронная плата</option>
              <option value="Робот-пылесос">Робот-пылесос</option>
              <option value="Другое">Другое</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-card-foreground mb-1.5">Опишите проблему</label>
            <textarea
              name="problem"
              value={form.problem}
              onChange={handleChange}
              maxLength={1000}
              rows={4}
              placeholder="Кратко опишите неисправность..."
              className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition-opacity"
          >
            <Send className="w-4 h-4" />
            {loading ? "Отправка..." : "Отправить заявку"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RequestForm;
