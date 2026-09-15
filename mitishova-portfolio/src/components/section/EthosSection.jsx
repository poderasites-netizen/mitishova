import { motion } from "framer-motion";

export default function EthosSection() {
  return (
    <section className="relative px-6 md:px-12 py-32 md:py-44 overflow-hidden">
      {/* Soft ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-accent/5 blur-[130px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          <span className="w-14 h-px bg-primary/25" />
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          <span className="w-14 h-px bg-primary/25" />
        </motion.div>

        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="space-y-8"
        >
          <p className="font-display text-2xl md:text-[1.25rem] lg:text-[2.15rem] font-light leading-[1.2] text-foreground/70">
            Отдавна знам, че жените при мен рядко идват само за вежди. 
            Тези столове са виждали вежди с история.
          </p>

          <p className="font-display text-xl md:text-2xl lg:text-[1.9rem] font-light leading-[1.65] text-foreground/80">
            Една и съща жена е сядала на тях влюбена, уморена, след раздяла, 
            в началото на нещо ново или просто в момент, в който вече не се разпознава по същия начин.
          </p>

          <p className="font-display italic text-xl md:text-2xl lg:text-[1.85rem] font-light leading-[1.6] text-foreground/55">
            И всеки път е искала нещо различно. Защото рядко променяме начина, 
            по който изглеждаме, без нещо преди това да се е променило в нас.
          </p>
        </motion.div>
      </div>
    </section>
  );
}