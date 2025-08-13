import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "Hoeveel startkapitaal heb ik nodig voor Amazon FBA?",
      answer: "Voor een succesvolle start raden we minimaal €2.000-€3.000 aan. Dit is voor je eerste productorder, Amazon fees, en wat buffer. Je kunt ook kleiner beginnen met €1.000, maar dit beperkt je productkeuzes."
    },
    {
      question: "Wat zijn de kosten van verkopen op Amazon?",
      answer: "Amazon rekent verschillende fees: verkoop commissie (8-15% afhankelijk van categorie), FBA fees voor opslag en verzending (€2-5 per product), en maandelijks Professional Seller account (€35). Deze kosten worden automatisch van je verkopen afgetrokken."
    },
    {
      question: "Moet ik een KVK-nummer hebben om te starten?",
      answer: "Ja, voor verkopen op Amazon en BOL.com in Nederland heb je een KVK-inschrijving nodig. Dit is vrij eenvoudig te regelen via kvk.nl en kost ongeveer €50. We laten in de cursus precies zien hoe je dit doet."
    },
    {
      question: "Hoe lang duurt het voordat ik winst maak?",
      answer: "Gemiddeld maken onze studenten binnen 3-6 maanden hun eerste winst. De eerste 1-2 maanden gebruik je meestal voor product research, sourcing en setup. Maand 3-4 start je vaak met verkopen en vanaf maand 5-6 zie je regelmatige winsten."
    },
    {
      question: "Is deze cursus ook geschikt voor beginners zonder ervaring?",
      answer: "Absoluut! Deze cursus is speciaal ontworpen voor beginners. We starten vanaf het absolute begin en leggen alles stap-voor-stap uit. Je hebt geen voorkennis nodig van e-commerce of Amazon. Onze 1-op-1 begeleiding zorgt ervoor dat je nooit vastloopt."
    },
    {
      question: "Krijg ik levenslange toegang tot de cursus?",
      answer: "Ja, eenmaal gekocht heb je levenslange toegang tot alle cursusmateriaal. Je krijgt ook gratis updates wanneer Amazon zijn systeem wijzigt of we nieuwe strategieën toevoegen."
    },
    {
      question: "Wat maakt jullie cursus anders dan andere Amazon cursussen?",
      answer: "Wij zijn de enige die zich specifiek richt op de Nederlandse markt én BOL.com training geeft. Plus je krijgt persoonlijke 1-op-1 begeleiding van Tijn zelf via telefoon, WhatsApp en email. Geen chatbots of call centers."
    },
    {
      question: "Is er een geld-terug-garantie?",
      answer: "Ja, we bieden een 30-dagen geld-terug-garantie. Als je niet 100% tevreden bent met de cursus, krijg je je geld volledig terugbetaald. Geen vragen gesteld."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-adspension-dark">
          Veelgestelde Vragen (FAQ)
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-adspension-dark">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}