import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const schema = z.object({
  naam: z.string().trim().min(2, "Vul je naam in.").max(100),
  email: z.string().trim().email("Vul een geldig e-mailadres in.").max(255),
  onderwerp: z.string().trim().min(2, "Vul een onderwerp in.").max(200),
  bericht: z.string().trim().min(10, "Je bericht is te kort.").max(2000),
});

type ContactForm = z.infer<typeof schema>;

const Contact = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(schema),
    defaultValues: { naam: "", email: "", onderwerp: "", bericht: "" },
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Contact:", data);
    toast.success("Bedankt voor je bericht! We reageren zo snel mogelijk.");
    form.reset();
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-agrobot-mid">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Heb je vragen over de Agrobotcompetitie? Neem gerust contact met ons op.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold">Contactgegevens</h2>
              {[
                { icon: Mail, label: "E-mail", value: "info@agrobotcompetitie.nl" },
                { icon: Phone, label: "Telefoon", value: "+31 (0)76 123 4567" },
                { icon: MapPin, label: "Locatie", value: "Avans Hogeschool, Breda" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="aspect-[4/3] rounded-lg bg-muted border border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">🗺️ Kaart placeholder</span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6">Stuur ons een bericht</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField control={form.control} name="naam" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Naam *</FormLabel>
                            <FormControl><Input placeholder="Je naam" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail *</FormLabel>
                            <FormControl><Input type="email" placeholder="je@email.nl" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="onderwerp" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Onderwerp *</FormLabel>
                          <FormControl><Input placeholder="Waar gaat je vraag over?" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="bericht" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bericht *</FormLabel>
                          <FormControl><Textarea placeholder="Schrijf je bericht..." rows={5} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <Button type="submit" className="bg-agrobot-mint text-agrobot-dark hover:bg-agrobot-light font-bold gap-2">
                        <Send className="h-4 w-4" /> Versturen
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
