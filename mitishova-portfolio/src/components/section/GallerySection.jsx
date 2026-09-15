import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    const frame = requestAnimationFrame(() => {
      setScrollSnaps(embla.scrollSnapList());
      onSelect();
    });

    embla.on("select", onSelect);

    return () => {
      cancelAnimationFrame(frame);
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <section id="gallery" className="py-20 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
        >
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-[1.1]">
              Галерия
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden touch-pan-x" ref={emblaRef}>
          <div className="flex">
            {IMAGES.gallery.map((img, i) => (
              <div
                key={i}
                className="flex-[0_0_70%] md:flex-[0_0_25%] max-md:flex-[0_0_58%] pl-3 md:pl-4 max-md:pl-2"
              >
                <div className="group relative overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={`Резултат ${i + 1}`}
                    className="w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105"
                    style={{ aspectRatio: "4 / 5" }}
                  />
                  <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-44 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-44 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />

        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-background hover:text-primary md:left-8 md:flex"
          aria-label="Предишна"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-background hover:text-primary md:right-8 md:flex"
          aria-label="Следваща"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Controls */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-12 md:mt-16">
        <div className="flex items-center justify-between gap-4">
          {/* Dots */}
          <div className="flex items-center gap-2.5">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => embla && embla.scrollTo(i)}
                className={`h-px transition-all duration-500 ${
                  i === selectedIndex
                    ? "w-8 bg-primary"
                    : "w-4 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}