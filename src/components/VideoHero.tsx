import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoHeroProps {
  /** Pad naar de achtergrondvideo (in /public). */
  videoSrc?: string;
  /** Optionele poster-afbeelding, getoond terwijl de video laadt. */
  poster?: string;
}

/**
 * Volledig-scherm hero met een vastgezette (sticky) achtergrondvideo.
 * De video blijft in beeld terwijl je door deze sectie scrollt, en de
 * tekstblokken schuiven er overheen — meteen vanaf de bovenkant.
 */
const VideoHero = ({ videoSrc = "/videos/hero-web.mp4", poster }: VideoHeroProps) => (
  <section className="relative -mt-16">
    {/* Vastgezette video-laag: blijft in beeld zolang je door de sectie scrollt.
        De gradient dient als nette fallback voordat de video laadt of als die ontbreekt. */}
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-br from-primary via-agrobot-mid to-primary">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* Donkere laag voor leesbaarheid van de tekst. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
    </div>

    {/* Tekstlagen — over de video heen getrokken met een negatieve marge. */}
    <div className="relative z-10 -mt-[100vh]">
      {/* Eerste blok: meteen zichtbaar bovenaan. */}
      <div className="container flex min-h-screen flex-col items-center justify-center text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in-up">
          Doe mee aan de<br />
          <span className="text-agrobot-mint">Agrobotcompetitie</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-md">
          Bouw de landbouwrobot van de toekomst. Leer, innoveer en win — samen met jouw team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/inschrijven">
            <Button size="lg" className="bg-agrobot-mint text-agrobot-dark hover:bg-agrobot-light font-bold text-base px-8">
              Schrijf je in
            </Button>
          </Link>
          <Link to="/regels">
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold text-base px-8"
            >
              Meer info
            </Button>
          </Link>
        </div>

        {/* Scroll-indicator. */}
        <ChevronDown className="absolute bottom-8 left-1/2 h-8 w-8 -translate-x-1/2 animate-bounce text-white/70" />
      </div>

      {/* Tweede blok: schuift over de video terwijl je verder scrollt. */}
      <div className="container flex min-h-screen items-center justify-center text-center">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Klaar voor de uitdaging?
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
            Ontwerp, bouw en programmeer een autonome robot die echte landbouwtaken uitvoert.
            Samen met je team strijd je om de titel — en doe je ervaring op die je nergens anders krijgt.
          </p>
        </div>
      </div>
    </div>

    {/* Zachte overgang naar de witte pagina-achtergrond eronder. */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-background" />
  </section>
);

export default VideoHero;
