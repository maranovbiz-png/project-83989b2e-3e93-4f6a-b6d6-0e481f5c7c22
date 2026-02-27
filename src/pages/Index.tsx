import { Link } from "react-router-dom";
import { Monitor, Laptop, Tv, Microwave, CircuitBoard, Wrench, Shield, Clock, Award, Bot } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import RequestForm from "@/components/RequestForm";
import heroImage from "@/assets/hero-repair.jpg";

const services = [
  { icon: Monitor, title: "Ремонт компьютеров", description: "Диагностика, замена комплектующих, настройка ПО и оптимизация производительности." },
  { icon: Laptop, title: "Ремонт ноутбуков", description: "Замена матриц, клавиатур, чистка от пыли, ремонт разъёмов и материнских плат." },
  { icon: Tv, title: "Ремонт телевизоров", description: "Ремонт ЖК, LED и Smart TV любых брендов. Замена подсветки и матриц." },
  { icon: Microwave, title: "Ремонт СВЧ-печей", description: "Замена магнетронов, ремонт блоков управления и механических частей." },
  { icon: CircuitBoard, title: "Ремонт электронных плат", description: "Пайка BGA, замена микросхем, восстановление дорожек и диагностика." },
  { icon: Bot, title: "Ремонт роботов-пылесосов", description: "Замена щёток, аккумуляторов, датчиков, ремонт плат управления и моторов." },
];

const advantages = [
  { icon: Shield, title: "Гарантия", description: "До 100 дней на все виды работ" },
  { icon: Clock, title: "Быстрый ремонт", description: "Большинство ремонтов за 1–3 дня" },
  { icon: Award, title: "Опыт 14+ лет", description: "Квалифицированные инженеры" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Ремонт электроники"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-accent font-mono font-bold text-sm tracking-widest uppercase mb-4">
              Сервисный центр в Ярославле
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-section-dark-foreground">
              Профессиональный ремонт{" "}
              <span className="text-gradient">техники и электроники</span>
            </h1>
            <p className="text-lg text-section-dark-foreground/70 mb-8 max-w-lg">
              Ремонтируем компьютеры, ноутбуки, телевизоры, микроволновые печи, электронные платы и роботы-пылесосы. Быстро, качественно, с гарантией.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#request"
                className="px-7 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Оставить заявку
              </a>
              <Link
                to="/prices"
                className="px-7 py-3 rounded-lg border border-section-dark-foreground/20 text-section-dark-foreground font-semibold text-sm hover:bg-section-dark-foreground/5 transition-colors"
              >
                Посмотреть цены
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-mono font-bold text-sm tracking-widest uppercase mb-2">Наши услуги</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Что мы ремонтируем</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-mono font-bold text-sm tracking-widest uppercase mb-2">Почему мы</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Наши преимущества</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((a) => (
              <div key={a.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <a.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <RequestForm />
    </Layout>
  );
};

export default Index;
