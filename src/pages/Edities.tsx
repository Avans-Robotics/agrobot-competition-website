import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Trophy, Users } from "lucide-react";

type Edition = {
  year: string;
  tagline: string;
  winner: { team: string; project: string };
  teams: string[];
  gallery: string[];
};

const Edities = () => {
  const { t } = useTranslation();
  const editions = t("editions.list", { returnObjects: true }) as Edition[];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-agrobot-mid">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t("editions.heroTitle")}
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            {t("editions.heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <Tabs defaultValue={editions[0]?.year} className="w-full">
            <TabsList className="mx-auto mb-10 flex w-fit">
              {editions.map((ed) => (
                <TabsTrigger key={ed.year} value={ed.year}>
                  {ed.year}
                </TabsTrigger>
              ))}
            </TabsList>

            {editions.map((ed) => (
              <TabsContent key={ed.year} value={ed.year} className="space-y-10">
                <p className="text-center text-muted-foreground max-w-2xl mx-auto">{ed.tagline}</p>

                {/* Winnend team */}
                <Card className="border-accent/40 bg-accent/5">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                      <Trophy className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                        {t("editions.winnerLabel")}
                      </p>
                      <h3 className="font-heading text-xl font-bold">{ed.winner.team}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{ed.winner.project}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Deelnemende teams */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-accent" />
                    <h3 className="font-heading text-lg font-bold">{t("editions.teamsLabel")}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ed.teams.map((team) => (
                      <Badge key={team} variant="secondary" className="text-sm font-medium px-3 py-1">
                        {team}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Beeldmateriaal */}
                <div>
                  <h3 className="font-heading text-lg font-bold mb-4">{t("editions.galleryLabel")}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {ed.gallery.map((alt, i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-lg bg-muted border border-border flex items-center justify-center"
                      >
                        <span className="text-muted-foreground text-sm text-center px-3">📷 {alt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <p className="text-center text-xs text-muted-foreground/70 mt-12">{t("editions.placeholderNote")}</p>
        </div>
      </section>
    </>
  );
};

export default Edities;
