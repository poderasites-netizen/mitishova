import { motion } from "framer-motion";

const REVIEWS = [
  {
    text: "Искам да кажа, че съм влюбена във веждите си! Наистина не знам как ме нацели точно за какво говоря, макар и с моите 'обяснения' Много си добра наистина. Благодаря!",
  },
  {
    text: "Ти си бомба и ръцете са ти златни и веждите които ми правиш от 8 години са топ!",
  },
  {
    text: "Веждите вече зарастнаха и станаха супер. Изглеждат много естествено и много ми харесват. Благодаря!",
  },
  {
    text: "Влюбена съм във веждите си! Атмосферата е много уютна! Сладки сте! Благодаря за всичко!",
  },
  {
    text: "Валерия е топ мастър! Жалко, че вече не съм във Варна! Наистина не мога да намеря човек да ми прави веждите по този начин! Уникална е просто!",
  },
  {
    text: "След вчера останах много доволна!!! Мисля, че вече не мога да живея без вас!",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 md:py-36 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-body tracking-[0.4em] uppercase text-primary/70 mb-5">
            Доверие
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            Отзиви
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex h-full flex-col rounded-[28px] border border-border/60 bg-background/60 p-6 md:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.03)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-lg text-primary">
                  “
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
              </div>

              <p className="font-display text-lg md:text-xl font-light italic text-foreground/80 leading-relaxed tracking-[0.01em]">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}