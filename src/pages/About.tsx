import Layout from "@/components/Layout";
import { Users, Award, Wrench, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "14+", label: "Лет опыта" },
  { value: "12 000+", label: "Ремонтов выполнено" },
  { value: "98%", label: "Довольных клиентов" },
  { value: "12", label: "Месяцев гарантии" },
];

const team = [
  { icon: Wrench, name: "Ремонт ПК и ноутбуков", desc: "Команда из 4 инженеров, специализирующихся на настольных и портативных компьютерах." },
  { icon: Award, name: "Телевизоры и электроника", desc: "Опытные мастера по ремонту ЖК/LED телевизоров и электронных плат." },
  { icon: Users, name: "Сервис и поддержка", desc: "Менеджеры, которые помогут с консультацией и приёмом заказов." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted/50">
        <div className="container max-w-3xl text-center">
          <p className="text-accent font-mono font-bold text-sm tracking-widest uppercase mb-2">О компании</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            ТехноСервис — надёжный ремонт техники в Ярославле
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы работаем с 2010 года и за это время выполнили более 12 000 ремонтов.
            Наша команда — это квалифицированные инженеры с многолетним опытом работы с современной электроникой.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center bg-card rounded-xl p-6 border shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / departments */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-mono font-bold text-sm tracking-widest uppercase mb-2">Наша команда</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Отделы сервиса</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-6 border shadow-sm text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <t.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{t.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding">
        <div className="container max-w-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-7 h-7 text-accent" />
          </div>
          <h2 className="text-2xl font-extrabold text-foreground mb-3">Наш адрес</h2>
          <p className="text-muted-foreground mb-6">
            г. Ярославль, ул. Куропаткова<br />
            Пн–Сб: 9:00–18:00<br />
            Тел.: <a href="tel:+79605420427" className="text-primary hover:underline">+7 (960) 542-04-27</a>
          </p>
          <Link
            to="/#request"
            className="inline-flex px-7 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
