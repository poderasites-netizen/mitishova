import { motion } from "framer-motion";

const PRICES = [
  {
    category: "Вежди",
    items: [
      {
        name: "Оформяне и моделиране",
        description: "Оформяне и моделиране на формата спрямо чертите и асиметрията на лицето.",
        price: "15 €",
      },
      {
        name: "Оформяне, моделиране и боядисване",
        description: "Моделиране на формата и боядисване с избрана техника според косъма, кожата и търсения резултат.",
        price: "25 €",
      },
      {
        name: "Ламиниране на вежди",
        description: "Оформяне, моделиране, ламиниране и дълбоко възстановяваща грижа за косъма.",
        price: "36 €",
      },
      {
        name: "Ламиниране и боядисване на вежди",
        description: "Оформяне, моделиране, ламиниране, боядисване и дълбоко възстановяваща грижа за косъма.",
        price: "45 €",
      },
    ],
  },
  {
    category: "Перманентен грим",
    items: [
      {
        name: "Перманентен грим на вежди",
        description: "Оформяне и моделиране, индивидуално изграждане и предварително изрисуване на формата, подбор на пигмент и перманентен грим.",
        price: "230 €",
      },
      {
        name: "Перманентен грим на устни",
        description: "Изграждане и корекция на формата и симетрията, прецизиране на контура, подбор на пигмент и перманентен грим.",
        price: "230 €",
      },
      {
        name: "Междумиглено пространство",
        description: "Определяне на формата и дебелината спрямо очите, предварително очертаване и перманентен грим.",
        price: "150 €",
      },
      {
        name: "Ретуш на перманентен грим",
        description: "Втора процедура 4–6 седмици след първоначалната — за завършване на резултата и корекция при необходимост.",
        price: "115 €",
      },
      {
        name: "Обновяване на перманентен грим",
        description: "Освежаване на цвета и формата на вече направен при нас перманент след по-дълъг период.",
        price: "180 €",
      },
    ],
  },
  {
    category: "Мигли",
    items: [
      {
        name: "Боядисване на мигли",
        description: "Боядисване на миглите по цялата им дължина.",
        price: "12 €",
      },
      {
        name: "Ламиниране и боядисване на мигли",
        description: "Ламиниране, боядисване и дълбоко възстановяваща и хидратираща грижа за миглите.",
        price: "45 €",
      },
    ],
  },
  {
    category: "Други",
    items: [
      {
        name: "Кола маска на лице",
        description: "Премахване на нежеланото окосмяване в избрани зони или на цялото лице.",
        price: "от 5 €",
      },
    ],
  },
];

export default function PricesSection() {
  return (
    <section id="prices" className="py-24 md:py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            Цени
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {PRICES.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <h3 className="font-display text-xl md:text-2xl font-light text-primary/80 mb-7 pb-3 border-b border-border/30">
                {group.category}
              </h3>

              <div className="space-y-7">
                {group.items.map((item, ii) => (
                  <div key={ii}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-body text-[15px] md:text-base font-light text-foreground/80">
                        {item.name}
                      </span>
                      <span className="flex-1 mx-3 border-b border-dotted border-border/25 translate-y-[-4px]" />
                      <span className="font-body text-[15px] md:text-base font-light text-foreground/55 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13px] md:text-sm font-light leading-relaxed text-foreground/40 max-w-[90%]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
}