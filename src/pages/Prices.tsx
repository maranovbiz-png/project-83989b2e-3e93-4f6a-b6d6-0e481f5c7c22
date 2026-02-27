import Layout from "@/components/Layout";
import { Monitor, Laptop, Tv, Microwave, CircuitBoard, Bot } from "lucide-react";
import { Link } from "react-router-dom";

interface PriceItem {
  service: string;
  price: string;
}

interface PriceCategory {
  icon: React.ElementType;
  title: string;
  items: PriceItem[];
}

const priceData: PriceCategory[] = [
  {
    icon: Monitor,
    title: "Компьютеры",
    items: [
      { service: "Диагностика", price: "Бесплатно" },
      { service: "Чистка от пыли", price: "от 1 000 ₽" },
      { service: "Замена термопасты", price: "от 500 ₽" },
      { service: "Установка/переустановка ОС", price: "от 1 500 ₽" },
      { service: "Замена блока питания", price: "от 800 ₽" },
      { service: "Сборка ПК", price: "от 2 000 ₽" },
    ],
  },
  {
    icon: Laptop,
    title: "Ноутбуки",
    items: [
      { service: "Диагностика", price: "Бесплатно" },
      { service: "Замена матрицы (экрана)", price: "от 3 000 ₽" },
      { service: "Замена клавиатуры", price: "от 2 000 ₽" },
      { service: "Чистка + замена термопасты", price: "от 1 500 ₽" },
      { service: "Ремонт разъёма зарядки", price: "от 1 500 ₽" },
      { service: "Ремонт материнской платы", price: "от 3 500 ₽" },
    ],
  },
  {
    icon: Tv,
    title: "Телевизоры",
    items: [
      { service: "Диагностика", price: "Бесплатно" },
      { service: "Замена подсветки", price: "от 2 500 ₽" },
      { service: "Ремонт блока питания", price: "от 2 000 ₽" },
      { service: "Замена матрицы", price: "от 5 000 ₽" },
      { service: "Ремонт Main-платы", price: "от 3 000 ₽" },
    ],
  },
  {
    icon: Microwave,
    title: "Микроволновые печи",
    items: [
      { service: "Диагностика", price: "от 500 ₽" },
      { service: "Замена магнетрона", price: "от 2 500 ₽" },
      { service: "Ремонт блока управления", price: "от 1 500 ₽" },
      { service: "Замена двигателя тарелки", price: "от 1 000 ₽" },
      { service: "Замена слюдяной пластины", price: "от 500 ₽" },
    ],
  },
  {
    icon: CircuitBoard,
    title: "Электронные платы",
    items: [
      { service: "Диагностика", price: "от 1 000 ₽" },
      { service: "Пайка BGA-чипов", price: "от 3 000 ₽" },
      { service: "Замена микросхем", price: "от 2 000 ₽" },
      { service: "Восстановление дорожек", price: "от 1 500 ₽" },
      { service: "Прошивка микроконтроллеров", price: "от 2 000 ₽" },
    ],
  },
  {
    icon: Bot,
    title: "Роботы-пылесосы",
    items: [
      { service: "Диагностика", price: "от 500 ₽" },
      { service: "Замена аккумулятора", price: "от 2 500 ₽" },
      { service: "Замена щёток/валиков", price: "от 1 000 ₽" },
      { service: "Ремонт платы управления", price: "от 3 000 ₽" },
      { service: "Замена датчиков", price: "от 1 500 ₽" },
      { service: "Замена мотора", price: "от 2 500 ₽" },
    ],
  },
];

const Prices = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-accent font-mono font-bold text-sm tracking-widest uppercase mb-2">Прайс-лист</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Цены на ремонт</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Точная стоимость определяется после диагностики. Указаны ориентировочные цены.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {priceData.map((cat) => (
              <div key={cat.title} className="bg-card rounded-xl border shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b bg-muted/30">
                  <cat.icon className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold text-card-foreground">{cat.title}</h2>
                </div>
                <div className="divide-y">
                  {cat.items.map((item) => (
                    <div key={item.service} className="flex items-center justify-between px-6 py-3.5">
                      <span className="text-sm text-card-foreground">{item.service}</span>
                      <span className={`text-sm font-semibold ${item.price === "Бесплатно" ? "text-primary" : "text-foreground"}`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Не нашли нужную услугу? Свяжитесь с нами!</p>
            <Link
              to="/#request"
              className="inline-flex px-7 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prices;
