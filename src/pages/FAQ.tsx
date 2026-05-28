import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import YouTubeEmbed from "@/components/YouTubeEmbed";

type FaqCategory = { title: string; items: { q: string; a: string }[] };

const FAQ = () => {
  const { t } = useTranslation();
  const categories = t("faq.categories", { returnObjects: true }) as FaqCategory[];
  const gallery = t("faq.gallery", { returnObjects: true }) as string[];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-agrobot-mid">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t("faq.heroTitle")}
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            {t("faq.heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          {categories.map((cat) => (
            <div key={cat.title} className="mb-10">
              <h2 className="font-heading text-xl font-bold mb-4 text-foreground">{cat.title}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {cat.items.map((item, i) => (
                  <AccordionItem key={i} value={`${cat.title}-${i}`} className="border border-border rounded-lg px-4 bg-card">
                    <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Inspiratie */}
      <section className="py-20 bg-muted">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-4">{t("faq.inspirationTitle")}</h2>
          <p className="text-muted-foreground text-center mb-10">{t("faq.inspirationText")}</p>
          <YouTubeEmbed />
          <div className="grid grid-cols-2 gap-4 mt-8">
            {gallery.map((alt, i) => (
              <div key={i} className="aspect-video rounded-lg bg-card border border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">📷 {alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
