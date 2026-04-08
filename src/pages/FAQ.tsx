import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const faqCategories = [
  {
    title: "Doelen & Thema's",
    items: [
      { q: "Wat is de Agrobotcompetitie?", a: "De Agrobotcompetitie is een jaarlijkse studentencompetitie waarin teams een autonome robot bouwen die een taak uitvoert in de agrarische sector. Denk aan onkruidbestrijding, gewasmonitoring of oogsten." },
      { q: "Wat is het doel van de competitie?", a: "Het doel is om studenten te inspireren om innovatieve technologische oplossingen te bedenken voor de landbouw van de toekomst." },
      { q: "Welke thema's komen aan bod?", a: "Robotica, kunstmatige intelligentie, precisielandbouw, duurzaamheid en samenwerking staan centraal." },
    ],
  },
  {
    title: "Praktische Informatie",
    items: [
      { q: "Wie kan meedoen?", a: "Alle HBO- en WO-studenten in Nederland kunnen deelnemen, mits zij zijn ingeschreven bij een erkende opleiding." },
      { q: "Hoe groot moet een team zijn?", a: "Een team bestaat uit minimaal 3 en maximaal 6 studenten." },
      { q: "Wat kost deelname?", a: "Deelname is gratis. Teams ontvangen een budget van €500 voor materialen." },
      { q: "Wanneer vindt de competitie plaats?", a: "De competitiedag vindt plaats in april. De inschrijving opent in september en sluit half oktober." },
    ],
  },
  {
    title: "Achtergrond & Voorbereiding",
    items: [
      { q: "Heb ik programmeerervaring nodig?", a: "Basiskennis is handig, maar niet vereist. Tijdens workshops leer je de benodigde vaardigheden." },
      { q: "Moet ik een technische opleiding volgen?", a: "Nee! Teams hebben baat bij diverse achtergronden — denk aan marketing, design, projectmanagement en techniek." },
      { q: "Hoe bereid ik me voor?", a: "Schrijf je in voor een relevante minor en neem deel aan de kickoff-workshops. Daar leer je alles wat je nodig hebt." },
    ],
  },
];

const FAQ = () => (
  <>
    <section className="py-20 bg-gradient-to-br from-primary to-agrobot-mid">
      <div className="container text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Veelgestelde vragen
        </h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto">
          Vind antwoorden op de meest gestelde vragen over de Agrobotcompetitie.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        {faqCategories.map((cat) => (
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
        <h2 className="font-heading text-3xl font-bold text-center mb-4">Inspiratie</h2>
        <p className="text-muted-foreground text-center mb-10">Bekijk video's en beelden van eerdere edities.</p>
        <YouTubeEmbed />
        <div className="grid grid-cols-2 gap-4 mt-8">
          {["Winnend team 2025", "Robots in actie"].map((alt, i) => (
            <div key={i} className="aspect-video rounded-lg bg-card border border-border flex items-center justify-center">
              <span className="text-muted-foreground text-sm">📷 {alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FAQ;
