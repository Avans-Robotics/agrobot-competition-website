import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Zap, BookOpen, Heart, ArrowRight, ExternalLink, CalendarDays } from "lucide-react";

const minoren = [
  { name: "Smart Farming & Robotics", url: "https://www.avans.nl" },
  { name: "Applied Artificial Intelligence", url: "https://www.avans.nl" },
  { name: "Mechatronica & Robotica", url: "https://www.avans.nl" },
  { name: "Duurzame Innovatie", url: "https://www.avans.nl" },
];

const formSchema = z.object({
  naam: z.string().trim().min(2, "Vul je volledige naam in.").max(100),
  email: z.string().trim().email("Vul een geldig e-mailadres in.").max(255),
  opleiding: z.string().trim().min(2, "Vul je opleiding in.").max(150),
  minor: z.string().min(1, "Selecteer een minor."),
  motivatie: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const Inschrijven = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { naam: "", email: "", opleiding: "", minor: "", motivatie: "" },
  });

  const onSubmit = (data: FormData) => {
    console.log("Inschrijving:", data);
    toast.success("Bedankt voor je inschrijving! We nemen snel contact op.");
    setSubmitted(true);
  };

  return (
    <>
      {/* ATTENTION */}
      <section className="py-20 bg-gradient-to-br from-primary to-agrobot-mid relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 30% 70%, hsl(163 70% 50% / 0.3) 0%, transparent 50%)",
        }} />
        <div className="container relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Schrijf je in voor de <span className="text-agrobot-mint">Agrobotcompetitie</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { value: "50+", label: "Teams vorig jaar" },
              { value: "200+", label: "Studenten" },
              { value: "€10.000", label: "Aan prijzen" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-agrobot-mint">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEREST */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-10">Wat levert het je op?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Praktijkervaring", desc: "Werk aan een echt project met robots, sensoren en AI." },
              { icon: BookOpen, title: "Studiepunten", desc: "Deelname via een minor levert je EC's op voor je studie." },
              { icon: Heart, title: "Netwerk", desc: "Ontmoet experts, bedrijven en medestudenten uit heel Nederland." },
            ].map((item) => (
              <Card key={item.title} className="border-border">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DESIRE */}
      <section className="py-20 bg-muted">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-8">Wat zeggen eerdere deelnemers?</h2>
          <div className="space-y-6">
            {[
              { quote: "De beste ervaring van mijn studietijd. Ik heb zoveel geleerd over samenwerken en technologie.", author: "Lisa, HAS Hogeschool" },
              { quote: "Onze robot werkte niet perfect, maar het proces was onbetaalbaar. Aanrader voor iedereen!", author: "Sander, Avans Hogeschool" },
            ].map((t, i) => (
              <blockquote key={i} className="bg-card rounded-lg p-6 border border-border text-left">
                <p className="italic text-foreground mb-3">"{t.quote}"</p>
                <cite className="text-sm text-muted-foreground not-italic">— {t.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          {/* Deadlines */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full mb-6">
              <CalendarDays className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold">Deadline inschrijving: 15 oktober 2026</span>
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4">Meld je aan</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Deelname aan de Agrobotcompetitie loopt via een relevante minor. Kies hieronder een minor en vul het formulier in.
            </p>
          </div>

          {/* Minoren */}
          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold mb-4">Relevante KOM-minoren</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {minoren.map((m) => (
                <a
                  key={m.name}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors group"
                >
                  <span className="font-medium text-sm">{m.name}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <Card className="border-accent">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-heading text-2xl font-bold mb-2">Bedankt voor je inschrijving!</h3>
                <p className="text-muted-foreground mb-4">We hebben je aanmelding ontvangen. Je ontvangt binnenkort een bevestiging per e-mail.</p>
                <Link to="/">
                  <Button variant="outline">Terug naar home</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-border">
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField control={form.control} name="naam" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Volledige naam *</FormLabel>
                          <FormControl><Input placeholder="Jan de Vries" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mailadres *</FormLabel>
                          <FormControl><Input type="email" placeholder="jan@student.avans.nl" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="opleiding" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Opleiding *</FormLabel>
                        <FormControl><Input placeholder="Bijv. Technische Informatica" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="minor" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gekozen minor *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecteer een minor" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {minoren.map((m) => (
                              <SelectItem key={m.name} value={m.name}>{m.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="motivatie" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Motivatie (optioneel)</FormLabel>
                        <FormControl><Textarea placeholder="Waarom wil je meedoen?" rows={4} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" size="lg" className="w-full bg-agrobot-mint text-agrobot-dark hover:bg-agrobot-light font-bold gap-2">
                      Inschrijven <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  );
};

export default Inschrijven;
