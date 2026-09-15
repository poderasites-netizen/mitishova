import { FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { Phone, MapPin } from "lucide-react";
import { IMAGES, CONTACT } from "@/lib/images";

export default function FooterSection() {
  return (
    <footer className="pt-16 md:pt-24 pb-12 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={IMAGES.logoMonogram} alt="Mitishova Brows" className="w-10 h-10 object-contain" />
              <div className="leading-none">
                <span className="font-display text-lg font-medium tracking-[0.15em] text-foreground">MITISHOVA</span>
                <span className="block text-[10px] tracking-[0.3em] text-muted-foreground font-body font-light uppercase mt-0.5">Brows Atelier</span>
              </div>
            </div>
            <p className="font-body text-xs font-light text-foreground/40 leading-relaxed max-w-xs">
              Бутиково студио за перманентен грим и моделиране на вежди. Индивидуален подход, психологическа дълбочина, прецизно изпълнение.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-wider uppercase text-primary/60 mb-5">Контакти</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-3.5 h-3.5 text-primary/50" />
                <p className="font-body text-xs font-light text-foreground/50">{CONTACT.addressShort}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-primary/50" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="font-body text-xs font-light text-foreground/50 hover:text-primary transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-body text-xs tracking-wider uppercase text-primary/60 mb-5">Свържете се</p>
            <div className="flex gap-4">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border flex items-center justify-center transition-colors duration-300 hover:border-primary/40" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" style={{ color: "#E1306C" }} />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border flex items-center justify-center transition-colors duration-300 hover:border-primary/40" aria-label="WhatsApp">
                <FaWhatsapp className="w-4 h-4" style={{ color: "#25D366" }} />
              </a>
              <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border flex items-center justify-center transition-colors duration-300 hover:border-primary/40" aria-label="Telegram">
                <FaTelegramPlane className="w-4 h-4" style={{ color: "#26A5E4" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Oversized signature */}
        <div className="overflow-hidden mb-8">
          <h2 className="font-display text-5xl md:text-8xl lg:text-9xl font-light italic text-foreground/[0.04] leading-none select-none whitespace-nowrap">
            Mitishova Brows
          </h2>
        </div>

        <div className="pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-foreground/30 tracking-wider">
            © {new Date().getFullYear()} Mitishova Brows. Всички права запазени.
          </p>
          <p className="font-body text-xs text-foreground/30 tracking-wider">
            Варна, България
          </p>
        </div>
      </div>
    </footer>
  );
}