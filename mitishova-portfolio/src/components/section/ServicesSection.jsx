import { motion } from "framer-motion";

const SERVICES = [
  {
    name: "Оформяне и моделиране на вежди",
    desc: "Формата се изгражда спрямо лицето, коригира се асиметрията и се отваря погледът.",
  },
  {
    name: " Оформяне, моделиране и биодизайн",
    desc: "От леко оцветяване на косъма до плътен или графичен ефект, работа с кожата или дорисуване на липсващи косъмчета.",
  },
  {
    name: "Ламиниране на вежди",
    desc: "Променяме посоката и фиксираме косъмчетата, за да подредим формата и да добавим визуално плътност и ширина.",
  },
  {
    name: "Боядисване на мигли",
    desc: "Оцветяваме светлите мигли по цялата им дължина, за да станат по-тъмни и видими без спирала.",
  },
  {
    name: "Ламиниране и боядисване на мигли",
    desc: "Повдигаме и извиваме миглите с дълготраен ефект, а цветът подчертава цялата им естествена дължина.",
  },
  {
    name: "Перманентен грим на вежди",
    desc: "Изграждаме форма и плътност, попълваме липсващи участъци и коригираме асиметрията, за по-лесно ежедневно оформяне на веждите.",
  },
  {
    name: "Перманентен грим на устни",
    desc: "Изравняваме цвета, възстановяваме контура и коригираме леки асиметрии.",
  },
  {
    name: "Перманентен грим на междумигелно пространство",
    desc: "Запълваме пространството между миглите, за да изглеждат по-плътни, без ефект на очна линия.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-36 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary/70 mb-5">
            Какво предлагаме
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            Услуги
          </h2>
        </motion.div>

        <div className="space-y-px">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid grid-cols-12 gap-4 md:gap-8 items-start py-6 md:py-7 border-b border-border/30 hover:border-primary/20 transition-colors duration-500"
            >
              <div className="col-span-12 md:col-span-1 text-primary/40 font-body text-s tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-12 md:col-span-6">
                <h3 className="font-display text-xl md:text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-500">
                  {service.name}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="font-body text-sm font-light text-foreground/45 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}