import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { GalleryImage } from "@/lib/images";

type EmblaApi = NonNullable<UseEmblaCarouselType[1]>;

const TWEEN_FACTOR_BASE = 0.42;
const clamp = (n: number, min = 0, max = 1) => Math.min(Math.max(n, min), max);

type Props = {
  images: GalleryImage[];
  label?: string;
};

const LandingCarousel = ({ images, label = "Image" }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", containScroll: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  const setTweenNodes = useCallback((api: EmblaApi) => {
    tweenNodes.current = api
      .slideNodes()
      .map((node) => node.querySelector(".carousel__tween") as HTMLElement);
  }, []);

  const setTweenFactor = useCallback((api: EmblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
  }, []);

  // Scale / fade / blur each slide based on its distance from the centre.
  const tween = useCallback((api: EmblaApi, eventName?: string) => {
    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();
    const slidesInView = api.slidesInView();
    const isScroll = eventName === "scroll";

    api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScroll && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const t = clamp(1 - Math.abs(diffToTarget * tweenFactor.current));
        const node = tweenNodes.current[slideIndex];
        if (!node) return;
        node.style.transform = `scale(${0.72 + 0.28 * t})`;
        node.style.opacity = `${0.2 + 0.8 * t}`;
        node.style.filter = `blur(${(1 - t) * 5}px)`;
        node.style.zIndex = `${Math.round(t * 10)}`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tween(emblaApi);
    onSelect();

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tween)
      .on("reInit", onSelect)
      .on("scroll", tween)
      .on("slideFocus", tween)
      .on("select", onSelect);

    return () => {
      emblaApi
        .off("reInit", setTweenNodes)
        .off("reInit", setTweenFactor)
        .off("reInit", tween)
        .off("reInit", onSelect)
        .off("scroll", tween)
        .off("slideFocus", tween)
        .off("select", onSelect);
    };
  }, [emblaApi, setTweenNodes, setTweenFactor, tween]);

  const onSlideClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      if (index === emblaApi.selectedScrollSnap()) {
        setLightboxIndex(index);
      } else {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi],
  );

  const lightboxImage = lightboxIndex !== null ? images[lightboxIndex] : null;
  const stepLightbox = (delta: number) =>
    setLightboxIndex((i) => (i === null ? i : (i + delta + images.length) % images.length));

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex py-10">
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-4/5 px-2 sm:basis-3/5 sm:px-3 lg:basis-[46%]"
            >
              <button
                type="button"
                onPointerDown={(e) => {
                  pointerStart.current = { x: e.clientX, y: e.clientY };
                }}
                onClick={(e) => {
                  const start = pointerStart.current;
                  if (start && (Math.abs(e.clientX - start.x) > 8 || Math.abs(e.clientY - start.y) > 8)) {
                    return; // a drag, not a click
                  }
                  onSlideClick(i);
                }}
                aria-label={
                  i === selectedIndex
                    ? `${label}: enlarge ${img.alt || ""}`.trim()
                    : `${label}: show ${img.alt || ""}`.trim()
                }
                className="carousel__tween block aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted shadow-xl transition-[transform,opacity,filter] duration-100 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Edge fade so side images blend into the page */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-md backdrop-blur transition-colors hover:bg-card sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next image"
        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-md backdrop-blur transition-colors hover:bg-card sm:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
        <DialogContent className="max-w-5xl border-0 bg-transparent p-0 text-white shadow-none">
          <DialogTitle className="sr-only">{lightboxImage?.alt || label}</DialogTitle>
          {lightboxImage && (
            <div className="relative">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-h-[85vh] w-full rounded-lg object-contain"
              />
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepLightbox(-1)}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepLightbox(1)}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingCarousel;
