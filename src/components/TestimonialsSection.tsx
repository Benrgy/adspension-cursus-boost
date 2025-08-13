import { Star, Play } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jan D.",
      result: "€5.000 omzet in tweede maand",
      quote: "De cursus van Tijn heeft mijn leven veranderd. Binnen 2 maanden had ik al €5.000 omzet en nu, 6 maanden later, verdien ik meer dan mijn oude baan. De persoonlijke begeleiding is echt onbetaalbaar.",
      rating: 5
    },
    {
      name: "Sarah M.",
      result: "Van €0 naar €15.000/maand",
      quote: "Ik begon helemaal zonder ervaring, maar de stap-voor-stap aanpak maakte het zo makkelijk. Nu heb ik een stabiele business die €15.000 per maand genereert. Tijn's expertise in PPC advertising was cruciaal voor mijn succes.",
      rating: 5
    },
    {
      name: "Mike van der Berg",
      result: "3 succesvolle producten gelanceerd",
      quote: "De product research technieken die ik geleerd heb waren goud waard. Ik heb nu 3 producten die allemaal winstgevend zijn. De BOL.com modules waren een extra bonus die ik nergens anders kon vinden.",
      rating: 5
    },
    {
      name: "Lisa K.",
      result: "Financiële vrijheid bereikt",
      quote: "Na jaren in loondienst ben ik nu financieel vrij dankzij mijn Amazon business. De cursus gaf me alle tools en vertrouwen die ik nodig had. Tijn was altijd beschikbaar voor vragen.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="bg-brand-orange text-white py-8 px-6 rounded-xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            DIT ZEGGEN CURSISTEN OVER ONS
          </h2>
        </div>
        
        {/* Results Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Resultaten van onze Cursisten
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="mb-4">
                  <p className="text-2xl font-bold text-brand-green">{testimonial.name}</p>
                  <p className="text-brand-orange font-semibold">{testimonial.result}</p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Video Testimonials Placeholder */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Bekijk de video testimonials van onze succesvolle studenten:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-muted rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-brand-green mx-auto mb-4" />
                <p className="text-muted-foreground">Jan's Succesverhaal</p>
              </div>
            </div>
            <div className="bg-muted rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-brand-green mx-auto mb-4" />
                <p className="text-muted-foreground">Sarah's Transformatie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;