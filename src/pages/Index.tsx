import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import VideoHero from "@/components/VideoHero";
import { Users, Cpu, Trophy, Lightbulb } from "lucide-react";

const featureIcons = [Users, Cpu, Trophy, Lightbulb];

const Index = () => {
  const { t } = useTranslation();
  const features = t("home.features", { returnObjects: true }) as { title: string; description: string }[];
  const impressions = t("home.impressions", { returnObjects: true }) as { src?: string; alt: string }[];

  return (
    <>
      {/* Hero met video-achtergrond */}
      <VideoHero />

      {/* Waarom meedoen */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            {t("home.whyTitle")}
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            {t("home.whySubtitle")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <Card key={f.title} className="group hover:shadow-lg transition-shadow border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/25 transition-colors">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            {t("home.videoTitle")}
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">
            {t("home.videoSubtitle")}
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
            {t("home.impressionTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {impressions.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg bg-muted border border-border overflow-hidden flex items-center justify-center"
              >
                {img.src ? (
                  <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <span className="text-muted-foreground text-sm text-center px-4">📷 {img.alt}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-agrobot-mid">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            {t("home.ctaText")}
          </p>
          <Link to="/inschrijven">
            <Button size="lg" className="bg-agrobot-mint text-agrobot-dark hover:bg-agrobot-light font-bold text-base px-10">
              {t("home.ctaButton")}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
