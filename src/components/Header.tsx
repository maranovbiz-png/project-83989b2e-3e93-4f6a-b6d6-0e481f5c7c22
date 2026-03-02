import { Link, useLocation } from "react-router-dom";
import { Monitor, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Цены", path: "/prices" },
  { label: "О нас", path: "/about" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-section-dark/95 backdrop-blur-md border-b border-primary/10">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Monitor className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-section-dark-foreground tracking-tight">
            ЯрТехноСервис
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/15 text-primary"
                  : "text-section-dark-foreground/70 hover:text-section-dark-foreground hover:bg-primary/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#request"
            className="ml-3 px-5 py-2 rounded-md text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Оставить заявку
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-section-dark-foreground"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-section-dark border-t border-primary/10 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm font-medium ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-section-dark-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              to="/#request"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-2.5 rounded-md text-sm font-semibold bg-accent text-accent-foreground"
            >
              Оставить заявку
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
