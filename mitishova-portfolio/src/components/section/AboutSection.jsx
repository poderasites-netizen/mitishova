import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

export default function AboutSection() {
  return (
    <section id="about">
      {/* Intro — image + opening statement */}
      <div className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-20 md:mb-28"
          >
            <p className="text-[12px] font-body tracking-[0.5em] uppercase text-primary/70 mb-6">
              За мен
            </p>
            <h2 className="font-display text-5xl md:text-5.5xl font-light leading-[1.02] text-foreground">
              Не искам да оставям своето разбиране за красота върху нечие лице.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-2 gap-3 h-full">
                <div className="col-span-2 overflow-hidden rounded-2xl">
                  <img
                    src={IMAGES.about}
                    alt="Митишова — мастер за вежди"
                    className="w-full h-full object-cover object-top"
                    style={{ aspectRatio: "3/4" }}
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={IMAGES.about2}
                    alt="Митишова — студиен портрет"
                    className="w-full h-full object-cover object-top"
                    style={{ aspectRatio: "3/4" }}
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={IMAGES.about3}
                    alt="Митишова — портрет"
                    className="w-full h-full object-cover object-top"
                    style={{ aspectRatio: "3/4" }}
                  />
                </div>
              </div>
            </motion.div>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="lg:col-span-7 flex flex-col justify-center lg:py-6"
>
  <div className="max-w-2xl">
    {/* Главното изречение */}
    <p className="font-display text-2xl md:text-[2.15rem] font-light leading-[1.45] text-foreground/90 tracking-wide">
      Аз технически мога да направя перфектни вежди
      <br className="hidden md:block" />
      и въпреки това жената срещу мен да не се чувства комфортно с тях.
    </p>

    <p className="mt-5 font-display text-xl md:text-2xl font-light text-foreground/45 italic">
      За мен това е лош резултат.
    </p>

    {/* Декоративна линия */}
    <div className="w-16 h-px bg-primary/35 mt-10 mb-10" />

    {/* Основен текст */}
    <div className="space-y-6">
      <p className="font-body text-base md:text-lg font-light leading-[1.85] text-foreground/55">
        Работейки с вежди от осем години, с времето започнах да гледам на тази професия по различен начин.
        Не ме интересува само дали формата е категорично правилна, цветът е идеален и техниката е изпълнена както трябва.
        Това си е задължително.
      </p>

      <p className="font-display text-xl md:text-[1.65rem] font-light leading-[1.55] text-foreground/80">
        Интересува ме друго — дали жената, която ще носи този резултат,
        ще се чувства уверена с тях.
      </p>

      <p className="font-display text-lg md:text-xl font-light leading-[1.6] text-foreground/45">
        Затова психологията стана част от начина, по който аз работя с клиенти и ученици.
      </p>
    </div>
  </div>

              <div className="mt-12 pt-10 border-t border-border/30 grid grid-cols-3 gap-6">
                <div>
                  <p className="font-display text-3xl md:text-4xl font-light text-primary/80 mb-2">8+</p>
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-foreground/40">години опит</p>
                </div>
                <div>
                  <p className="font-display text-3xl md:text-4xl font-light text-primary/80 mb-2">700+</p>
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-foreground/40">доволни клиента</p>
                </div>
                <div>
                  <p className="font-display text-3xl md:text-4xl font-light text-primary/80 mb-2">35+</p>
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-foreground/40">обучени специалисти</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Delicate quote — a soft, poetic accent, almost part of the background */}
      <div className="px-6 md:px-12 pb-24 md:pb-36">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="max-w-[1400px] mx-auto text-center"
        >
          <p className="font-display italic font-light leading-[1.5] text-foreground/20 text-2xl md:text-4xl lg:text-[3rem]">
            „Не всичко, което може да бъде променено, има нужда от промяна."
          </p>
        </motion.div>
      </div>
    </section>
  );
}