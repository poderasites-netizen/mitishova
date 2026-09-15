import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { Phone, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/images";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary/70 mb-5">
            Свържете се
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            Контакти
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Contact rows */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-4 h-4 text-primary/60 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-foreground/40 mb-1">Адрес</p>
                  <p className="font-body text-sm font-light text-foreground/70">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="w-4 h-4 text-primary/60 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-foreground/40 mb-1">Работно време</p>
                  <p className="font-body text-sm font-light text-foreground/70">{CONTACT.hours}</p>
                  <p className="mt-2 font-body text-[11px] font-light leading-relaxed text-foreground/45">
                    Посещения с предварително записан час.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="w-4 h-4 text-primary/60 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-foreground/40 mb-1">Телефон</p>
                  <a href={`tel:${CONTACT.phoneRaw}`} className="font-body text-sm font-light text-foreground/70 hover:text-primary transition-colors">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="font-body text-xs tracking-wider uppercase text-foreground/40 mb-4">СВЪРЖЕТЕ СЕ С НАС</p>
              <div className="flex gap-4">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 border border-border hover:border-primary/40 transition-colors duration-300 group"
                >
                  <FaWhatsapp
                    className="w-5 h-5 shrink-0"
                    style={{ color: "#25D366" }}
                  />
                  <span className="font-body text-xs font-light tracking-wider text-foreground/60 group-hover:text-primary transition-colors">WhatsApp</span>
                </a>
                <a
                  href={CONTACT.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 border border-border hover:border-primary/40 transition-colors duration-300 group"
                >
                  <FaTelegramPlane
                    className="w-5 h-5 shrink-0"
                    style={{ color: "#26A5E4" }}
                  />
                  <span className="font-body text-xs font-light tracking-wider text-foreground/60 group-hover:text-primary transition-colors">Telegram</span>
                </a>
              </div>
              <div className="mt-4">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 border border-border hover:border-primary/40 transition-colors duration-300 group"
                >
                  <FaInstagram
                    className="w-5 h-5 shrink-0"
                    style={{ color: "#E1306C" }}
                  />
                  <span className="font-body text-xs font-light tracking-wider text-foreground/60 group-hover:text-primary transition-colors">{CONTACT.instagramHandle}</span>
                </a>
              </div>
              <p className="font-body text-xs font-light text-foreground/35 mt-5 leading-relaxed max-w-sm">
                За записване на час, консултация или въпроси можете да ни пишете директно.
              </p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden h-full min-h-[400px] border border-border/30"
          >
            <iframe
              src={CONTACT.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", filter: "invert(0.9) hue-rotate(180deg) brightness(0.9) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mitishova Brows — карта"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}