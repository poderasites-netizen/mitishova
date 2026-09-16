import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const MODULES = [
  {
    num: "01",
    title: "Анализ и виждане",
    text: "Да виждате формата, асиметрията и реалната нужда на лицето — не просто да измервате по схема.",
  },
  {
    num: "02",
    title: "Техника с мислене",
    text: "Моделиране, боядисване и ламиниране, изградени върху разбиране на кожа, косъм и желан резултат.",
  },
  {
    num: "03",
    title: "Работа с човека",
    text: "Консултация, очаквания, комуникация и решения, които създават увереност — не само красиви вежди.",
  },
];

const LEARNING_POINTS = [
  {
    title: "Да виждате формата, а не просто да я измервате",
    text: "Архитектура, пропорции, основни точки, асиметрия, посока на растеж и различни форми на лицето. Ще се научите да разбирате какво действително има нужда да бъде коригирано и как да изградите форма, която работи за конкретното лице — не просто такава, която е правилна по схема.",
  },
  {
    title: "Да разбирате кожата и косъма преди да изберете как да работите",
    text: "Структура на кожата и косъма, фази на растеж, различни типове кожа и състояние на косъма. Ще разберете как това, което виждате пред себе си, определя избора на продукт, техника, време на действие и крайния резултат.",
  },
  {
    title: "Да управлявате цвета, а не да работите по готова рецепта",
    text: "Колористика, професионални бои, избор и смесване на нюанси, работа с кожа и косъм, контрол на наситеността. Ще можете да създадете различен резултат според конкретния случай — от почти незабележимо оцветяване до по-плътен ефект.",
  },
  {
    title: "Да разбирате какво се случва с косъма по време на ламиниране",
    text: "Състави, химични процеси, време на действие, различна структура на косъма, противопоказания, боядисване след ламиниране и възстановяваща грижа. Няма просто да запомните колко минути стои един продукт — ще разбирате какво прави той с косъма.",
  },
  {
    title: "Да избирате продукта, а не продуктът да определя как работите",
    text: "Материали, инструменти, професионални продукти, правилна употреба, организация на работното място, хигиена и дезинфекция. Ще знаете какво ви е необходимо, защо го използвате и кога има смисъл да изберете нещо различно.",
  },
  {
    title: "Да работите с човека, а не само с веждите",
    text: "Консултация, анализ на изходното състояние, клиентска заявка, очаквания и професионална комуникация. Ще се научите да разбирате какво иска клиентът, да преценявате какво е подходящо и спокойно да обясните защо предлагате конкретно решение.",
  },
  {
    title: "Да показвате работата си така, както изглежда в действителност",
    text: "Позициониране на модела, светлина, ракурси, настройки на телефона, снимки и видео. Ще можете да създавате професионално съдържание само с телефон и да показвате резултата силно, без да се налага да го прикривате зад обработка.",
  },
];

export default function AcademySection() {
  return (
    <section id="academy" className="py-28 md:py-40 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-5 md:gap-6 items-start">
              <div className="overflow-hidden group">
                <img
                  src={IMAGES.academy}
                  alt="Дипломиране в Mitishova Brows Academy"
                  className="w-full h-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>
              <div className="mt-12 md:mt-20 overflow-hidden group">
                <img
                  src={IMAGES.academyBrand}
                  alt="Mitishova Brows — бранд и обучение"
                  className="w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-[11px] font-body tracking-[0.5em] uppercase text-primary/70 mb-6">
              Обучения
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-[1.1]">
              Авторска методика
              <br />
              <em className="italic font-light">с психологически подход</em>
            </h2>

            <div className="mb-12 max-w-lg space-y-6">
              <p className="font-display text-2xl md:text-3xl font-light leading-[1.25] text-primary/90">
                НЕ ИСКАМ ДА СЪЗДАВАМ КОПИЯ.
              </p>
              <div className="space-y-5 font-body text-[15px] font-light leading-[1.9] text-foreground/55">
                <p>
                  Целта е да се научим на базовите навици, да ви улесня пътя от точка А до точка Б, да ускоря процеса на учене и да изградим техника.
                </p>
                <p>
                  Но след това ще изграждаме индивидуално мислене. Ще се научите да вземате собствени решения и да използвате силните си страни в работа с клиента.
                </p>
              </div>
            </div>

            {/* Modules */}
            <div className="mb-12">
              {MODULES.map((mod) => (
                <div
                  key={mod.num}
                  className="grid grid-cols-12 gap-4 items-baseline py-5 border-b border-border/20"
                >
                  <div className="col-span-2 text-primary/40 font-body text-xs tracking-widest">
                    {mod.num}
                  </div>
                  <div className="col-span-10">
                    <h4 className="font-body text-sm font-medium text-foreground mb-1.5">
                      {mod.title}
                    </h4>
                    <p className="font-body text-xs font-light text-foreground/45 leading-relaxed">
                      {mod.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 px-8 py-3.5 border border-primary/50 text-xs font-body tracking-[0.2em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                Запиши се за обучение
              </button>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center gap-3 px-8 py-3.5 border border-primary/70 bg-primary/10 text-xs font-body tracking-[0.2em] uppercase text-primary whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-all duration-500">
                    Виж подробности
                  </button>
                </DialogTrigger>

                <DialogContent className="flex max-w-5xl max-h-[92vh] overflow-hidden scrollbar-dark rounded-2xl border-primary/20 bg-background p-8 shadow-[0_24px_80px_rgba(0,0,0,0.55)] md:p-14">
                  <div className="min-h-0 flex-1 overflow-y-auto scrollbar-dark pr-2 md:pr-4">
                    <DialogHeader className="mb-10 text-left">
                      <DialogTitle className="font-display text-3xl md:text-4xl font-light text-foreground">
                        Подробности за обучението
                      </DialogTitle>
                      <DialogDescription className="font-body text-sm leading-relaxed text-foreground/50 mt-3">
                        Практическа програма с фокус върху мисленето, анализа и уверената работа с клиент.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-14">
                    {/* Format */}
                    <section>
                      <h3 className="font-display text-xl md:text-2xl font-light text-primary/90 mb-6 pb-3 border-b border-border/30">
                        Формат на обучението
                      </h3>

                      <div className="space-y-8">
                        <div>
                          <h4 className="font-display text-lg text-foreground mb-3">
                            Теория — онлайн
                          </h4>
                          <p className="font-body text-sm font-light leading-[1.85] text-foreground/60">
                            Получавате предварително записан обучителен материал с неограничен достъп, който остава с вас и след курса. Теорията се преминава преди практическата част, за да използваме времето заедно не за лекции, а за реална работа.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-display text-lg text-foreground mb-3">
                            Практика — 2 присъствени дни
                          </h4>
                          <p className="font-body text-sm font-light leading-[1.85] text-foreground/60">
                            2 пълни демонстрации от мен и ваша работа върху 4–5 различни модела под мое наблюдение. Идеята не е да повторите една и съща процедура много пъти. Различните модели означават различна кожа, структура на косъма, форма и желан резултат. При всеки следващ модел отново анализирате ситуацията и решавате как да работите.
                          </p>
                        </div>
                      </div>
                    </section>

                    {/* What you get */}
                    <section>
                      <h3 className="font-display text-xl md:text-2xl font-light text-primary/90 mb-6 pb-3 border-b border-border/30">
                        Какво получавате
                      </h3>
                      <ul className="grid gap-3 md:grid-cols-2 font-body text-sm font-light leading-relaxed text-foreground/60">
                        <li>Онлайн теория с неограничен достъп</li>
                        <li>2 дни присъствена практика</li>
                        <li>Практика върху 4–5 различни модела</li>
                        <li>2 пълни демонстрации от мен</li>
                        <li>Материали за работа по време на обучението</li>
                        <li>Сертификат от Mitishova Brows School</li>
                        <li>Удостоверение от МОН</li>
                        <li>Комуникация след завършване на курса</li>
                      </ul>
                    </section>

                    {/* What you will learn */}
                    <section>
                      <h3 className="font-display text-xl md:text-2xl font-light text-primary/90 mb-8 pb-3 border-b border-border/30">
                        Какво ще научите
                      </h3>

                      <div className="space-y-10">
                        {LEARNING_POINTS.map((point, index) => (
                          <article key={point.title}>
                            <h4 className="font-display text-lg md:text-xl font-light leading-snug text-foreground mb-3">
                              <span className="text-primary/50 mr-2">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              {point.title}
                            </h4>
                            <p className="font-body text-sm font-light leading-[1.85] text-foreground/55">
                              {point.text}
                            </p>
                          </article>
                        ))}

                        {/* Final point */}
                        <article>
                          <h4 className="font-display text-lg md:text-xl font-light leading-snug text-foreground mb-3">
                            <span className="text-primary/50 mr-2">08</span>
                            Да свържете всичко това в едно решение
                          </h4>
                          <div className="space-y-4 font-body text-sm font-light leading-[1.85] text-foreground/55">
                            <p>
                              Тук започва практиката. 4–5 различни модела. Различна кожа, различен косъм, различна форма и различна заявка.
                            </p>
                            <p>
                              Не за да направите една и съща процедура пет пъти. При всеки модел започваме отначало: какво виждаме, какъв е проблемът, какъв резултат искаме и как ще стигнем до него.
                            </p>
                            <p>
                              В началото анализираме решенията заедно. С всеки следващ модел оставям все повече от тях на вас. Не коригирам само това, което правите с ръцете си. Ако има грешка, искам да разберем откъде е тръгнала — от техниката или от решението преди нея.
                            </p>
                            <p>
                              В края на курса не искам просто да можете да направите процедурата. Искам да можете да останете сами пред клиент, когото никога не сте виждали, да прецените ситуацията и да знаете:
                            </p>
                            <p className="font-display text-base md:text-lg text-foreground/80 pt-2">
                              Какво да направя? Как да го направя? Защо точно така?
                            </p>
                          </div>
                        </article>
                      </div>
                    </section>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}