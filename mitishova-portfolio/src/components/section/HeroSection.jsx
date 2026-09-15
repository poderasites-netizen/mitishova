import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-stretch overflow-hidden max-sm:pt-20">
      <div className="absolute inset-0 md:hidden">
        <img
          src={IMAGES.hero}
          alt="Митишова — портрет"
          className="w-full h-full object-cover object-center opacity-30 scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/35" />
      </div>

      <div className="flex w-full max-w-[1600px] mx-auto relative z-10">
        {/* Left — solid dark background with text */}
        <div className="relative z-10 flex-1 flex items-center px-8 md:px-16 lg:px-24 py-20 max-sm:px-5 max-sm:py-14">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8 max-sm:mb-6"
            >
              <img
                src={IMAGES.logoMonogram}
                alt="Mitishova Brows"
                className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-90 max-sm:w-12 max-sm:h-12"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[12px] font-body tracking-[0.5em] uppercase text-primary/70 mb-8 max-sm:text-[10px] max-sm:tracking-[0.28em] max-sm:mb-6"
            >
              BROW & BEAUTY ATELIER · VARNA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-display text-6xl md:text-7xl lg:text-[4.5rem] font-light leading-[1.05] text-foreground mb-8 max-sm:text-[3.1rem] max-sm:leading-[0.95] max-sm:mb-6"
            >
              КРАСОТА НЯМА
              <br />
              ШАБЛОН
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="w-12 h-px bg-primary/40 mb-8 max-sm:mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="font-body text-sm md:text-[15px] font-light leading-[1.9] text-foreground/45 max-w-md mb-12 max-sm:text-xs max-sm:leading-[1.8] max-sm:mb-8"
            >
             Естетика, прецизност и индивидуален подход, съобразени с естествените черти и излъчването на всяка жена.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-start gap-4 max-sm:items-stretch max-sm:gap-3"
            >
              <button
                onClick={() => scrollTo("#services")}
                className="px-10 py-4 border border-primary/50 text-xs font-body tracking-[0.2em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 max-sm:w-full max-sm:px-6 max-sm:py-3.5 max-sm:text-[10px] max-sm:tracking-[0.18em]"
              >
                Нашите услуги
              </button>
              <button
                onClick={() => scrollTo("#academy")}
                className="px-10 py-4 text-xs font-body tracking-[0.2em] uppercase text-foreground/50 hover:text-foreground transition-all duration-500 max-sm:w-full max-sm:px-6 max-sm:py-3.5 max-sm:text-[10px] max-sm:tracking-[0.18em]"
              >
                Обучения
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right — portrait image */}
        <div className="hidden md:block w-[45%] lg:w-[48%] relative flex-shrink-0">
          <img
            src={IMAGES.hero}
            alt="Митишова — портрет"
            className="w-full h-full object-cover object-center"
          />
          {/* Soft gradient blending the left edge into the dark background */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 lg:w-40 bg-gradient-to-r from-background to-transparent" />
          {/* Soft gradient blending the right edge into the page background */}
          <div className="absolute inset-y-0 right-0 w-20 md:w-28 bg-gradient-to-l from-background to-transparent" />
          {/* Soft gradient blending the top edge */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/60 to-transparent" />
        </div>
      </div>

      {/* Bottom transition — smooth fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-20" />
    </section>
  );
}