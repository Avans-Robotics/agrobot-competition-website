import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, Calendar, ClipboardList, Flag, Award } from "lucide-react";

const timelineIcons = [ClipboardList, Calendar, Flag, Award];

const Regels = () => {
  const { t } = useTranslation();
  const timeline = t("rules.timeline", { returnObjects: true }) as { title: string; period: string; desc: string }[];
  const rules = t("rules.rulesList", { returnObjects: true }) as string[];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-agrobot-mid">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t("rules.heroTitle")}
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            {t("rules.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Tijdlijn */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">{t("rules.programTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((step, i) => {
              const Icon = timelineIcons[i];
              return (
                <Card key={i} className="relative overflow-hidden border-border hover:shadow-lg transition-shadow">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-agrobot-mint to-agrobot-light" />
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">{step.period}</p>
                    <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regels */}
      <section className="py-20 bg-muted">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-10">{t("rules.rulesTitle")}</h2>
          <div className="space-y-4">
            {rules.map((rule, i) => (
              <div key={i} className="flex gap-3 items-start bg-card rounded-lg p-4 border border-border">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">{t("rules.downloadsTitle")}</h2>
          <p className="text-muted-foreground mb-8">{t("rules.downloadsText")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" /> {t("rules.regulationsPdf")}
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" /> {t("rules.programBookletPdf")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Regels;
