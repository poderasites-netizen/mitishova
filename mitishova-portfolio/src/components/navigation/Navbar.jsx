import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { IMAGES, CONTACT } from "@/lib/images";

const NAV_LINKS = [
  { label: "За мен", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Цени", href: "#prices" },
  { label: "Обучения", href: "#academy" },
  { label: "Галерия", href: "#gallery" },
  { label: "Отзиви", href: "#reviews" },
  { label: "Въпроси", href: "#faq" },
  { label: "Контакти", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3 z-10">
              <img
                src={IMAGES.logoMonogram}
                alt="Mitishova Brows"
                className="w-9 h-9 md:w-10 md:h-10 object-contain"
              />
              <div className="hidden sm:block text-left leading-none">
                <span className="font-display text-lg md:text-xl font-medium tracking-[0.15em] text-foreground">
                  MITISHOVA
                </span>
                <span className="block text-[10px] tracking-[0.3em] text-muted-foreground font-body font-light uppercase mt-0.5">
                  Brows Atelier
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-xs font-body font-light tracking-[0.15em] uppercase text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Social */}
            <div className="hidden lg:flex items-center gap-5">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-primary" aria-label="Instagram">
                <FaInstagram className="w-4 h-4 text-foreground/60" />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-primary" aria-label="WhatsApp">
                <FaWhatsapp className="w-4 h-4 text-foreground/60" />
              </a>
              <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-primary" aria-label="Telegram">
                <FaTelegramPlane className="w-4 h-4 text-foreground/60" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground/80 z-10 max-sm:p-2 max-sm:-mr-2"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 lg:hidden max-sm:gap-4 max-sm:px-6 max-sm:pt-20"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                className="font-display text-2xl font-light tracking-widest text-foreground/70 hover:text-primary transition-colors max-sm:text-xl max-sm:tracking-[0.2em]"
              >
                {link.label}
              </motion.button>
            ))}
            <div className="flex gap-8 mt-8">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
                <FaInstagram className="w-5 h-5 text-foreground/60" />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-primary transition-colors">
                <FaWhatsapp className="w-5 h-5 text-foreground/60" />
              </a>
              <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-primary transition-colors">
                <FaTelegramPlane className="w-5 h-5 text-foreground/60" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}