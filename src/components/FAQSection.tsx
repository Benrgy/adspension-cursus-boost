import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Hoeveel startkapitaal heb ik nodig voor Amazon FBA?",
      answer: "Voor een goede start adviseren wij minimaal €2.000-€5.000. Dit is voor je eerste productbestelling, Amazon fees, en eventuele marketing. Je kunt natuurlijk ook kleiner beginnen, maar met meer budget heb je meer kansen op succes."
    },
    {
      question: "Wat zijn de kosten van verkopen op Amazon?",
      answer: "Amazon rekent referral fees (6-15% afhankelijk van categorie), FBA fees voor opslag en verzending (€2-5 per item), en maandelijkse opslagkosten. Ook heb je kosten voor PPC advertising. Alles wordt uitgebreid uitgelegd in de cursus."
    },
    {
      question: "Moet ik een KVK-nummer hebben om te starten?",
      answer: "Ja, voor verkopen op Amazon en BOL.com heb je een geregistreerd bedrijf nodig. Een eenmanszaak is voldoende om te beginnen. We leggen in de cursus stap-voor-stap uit hoe je dit regelt."
    },
    {
      question: "Hoe lang duurt het voordat ik winst maak?",
      answer: "De meeste van onze studenten zien binnen 3-6 maanden hun eerste winsten. Het hangt af van je productkeuze, budget en inzet. Sommige studenten maken al winst in maand 2, anderen hebben wat langer nodig."
    },
    {
      question: "Is deze cursus ook geschikt voor beginners zonder ervaring?",
      answer: "Absoluut! De cursus is speciaal ontworpen voor complete beginners. We beginnen bij de basis en bouwen stap-voor-stap op. Je hebt geen voorkennis nodig, alleen motivatie om te leren en actie te ondernemen."
    },
    {
      question: "Krijg ik persoonlijke begeleiding?",
      answer: "Ja! Naast de 40+ video's en het eBook krijg je ook persoonlijke support via telefoon, WhatsApp en email. Tijn en zijn team staan klaar om al je vragen te beantwoorden."
    },
    {
      question: "Wat maakt deze cursus anders dan andere Amazon cursussen?",
      answer: "Onze cursus is specifiek gericht op de Nederlandse markt, inclusief BOL.com training. Je krijgt persoonlijke begeleiding van Tijn zelf, lifetime access en updates. Plus we hebben al 300+ studenten succesvol begeleid."
    },
    {
      question: "Kan ik de cursus naast mijn baan volgen?",
      answer: "Zeker! Veel van onze studenten starten part-time naast hun baan. De video's kun je in je eigen tempo bekijken en je krijgt lifetime access, dus je kunt alles op je eigen tempo doorlopen."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Veelgestelde Vragen (FAQ)
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border shadow-sm">
              <AccordionTrigger className="text-left hover:text-brand-orange text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;