import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Users, Cpu, Trophy, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Teamwork",
    description: "Werk samen met studenten van verschillende opleidingen en ontwikkel je samenwerkingsvaardigheden.",
  },
  {
    icon: Cpu,
    title: "Technologie",
    description: "Leer werken met robotica, sensoren, AI en andere cutting-edge technologieën.",
  },
  {
    icon: Trophy,
    title: "Competitie",
    description: "Strijd mee om de hoofdprijs en laat zien wat jouw team kan bereiken.",
  },
  {
    icon: Lightbulb,
    title: "Ervaring",
    description: "Doe praktijkervaring op die je CV versterkt en je voorbereidt op de toekomst.",
  },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-agrobot-mid to-primary py-24 md:py-36">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, hsl(163 70% 50% / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(155 80% 60% / 0.2) 0%, transparent 40%)",
      }} />
      <div className="container relative z-10 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Doe mee aan de<br />
          <span className="text-agrobot-mint">Agrobotcompetitie</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Bouw de landbouwrobot van de toekomst. Leer, innoveer en win — samen met jouw team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/inschrijven">
            <Button size="lg" className="bg-agrobot-mint text-agrobot-dark hover:bg-agrobot-light font-bold text-base px-8">
              Schrijf je in
            </Button>
          </Link>
          <Link to="/regels">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
              Meer info
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Waarom meedoen */}
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Waarom meedoen?
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          De Agrobotcompetitie biedt een unieke kans om je technische en persoonlijke vaardigheden te ontwikkelen.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="group hover:shadow-lg transition-shadow border-border">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/25 transition-colors">
                  <f.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Video */}
    <section className="py-20 bg-muted">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Bekijk de competitie in actie
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">
          Ontdek wat eerdere deelnemers hebben gebouwd en ervaren.
        </p>
        <div className="max-w-3xl mx-auto">
          <YouTubeEmbed />
        </div>
      </div>
    </section>

    {/* Sfeerbeelden */}
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10">
          Sfeerimpressie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Studenten werken aan hun robot",
            "Robot op het landbouwveld",
            "Teamwork tijdens de competitie",
          ].map((alt, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg bg-muted border border-border flex items-center justify-center"
            >
              <span className="text-muted-foreground text-sm text-center px-4">📷 {alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-to-r from-primary to-agrobot-mid">
      <div className="container text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Klaar om mee te doen?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Schrijf je vandaag nog in en word onderdeel van de Agrobotcompetitie. De toekomst van landbouw begint bij jou!
        </p>
        <Link to="/inschrijven">
          <Button size="lg" className="bg-agrobot-mint text-agrobot-dark hover:bg-agrobot-light font-bold text-base px-10">
            Schrijf je in
          </Button>
        </Link>
      </div>
    </section>
  </>
);

export default Index;
