import { Link } from "react-router-dom";
import { Monitor, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      <div className="container section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Monitor className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">ТехноСервис</span>
            </Link>
            <p className="text-section-dark-foreground/60 text-sm leading-relaxed">
              Профессиональный ремонт компьютеров, ноутбуков, телевизоров и электроники в Ярославле с 2010 года.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-section-dark-foreground/80">
              Навигация
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-section-dark-foreground/60 hover:text-primary transition-colors">Главная</Link>
              <Link to="/prices" className="text-sm text-section-dark-foreground/60 hover:text-primary transition-colors">Цены</Link>
              <Link to="/about" className="text-sm text-section-dark-foreground/60 hover:text-primary transition-colors">О нас</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-section-dark-foreground/80">
              Контакты
            </h4>
            <div className="flex flex-col gap-3 text-sm text-section-dark-foreground/60">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+79605420427" className="hover:text-primary transition-colors">+7 (960) 542-04-27</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>г. Ярославль, ул. Куропаткова</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent" />
                <span>Пн–Сб: 9:00–18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-section-dark-foreground/10 mt-10 pt-6 text-center text-xs text-section-dark-foreground/40">
          © {new Date().getFullYear()} ТехноСервис. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
