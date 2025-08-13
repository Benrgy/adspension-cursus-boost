export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jan D.",
      result: "€5.000 omzet in mijn tweede maand!",
      quote: "Ik had geen ervaring met e-commerce, maar dankzij Tijn's cursus en persoonlijke begeleiding maakte ik €5k omzet in mijn tweede maand. De stap-voor-stap aanpak werkt echt!"
    },
    {
      name: "Lisa M.", 
      result: "Van €0 naar €12.000 winst in 8 maanden",
      quote: "De combinatie van Amazon en BOL.com strategie was perfect voor mij. Binnen 8 maanden ging ik van nul naar €12.000 winst per maand. Tijn's begeleiding was onmisbaar."
    },
    {
      name: "Marco V.",
      result: "€3.200 passieve inkomsten per maand",
      quote: "Na het volgen van de cursus heb ik mijn baan kunnen opzeggen. Nu verdien ik €3.200 per maand passief met Amazon FBA. Beste investering ooit!"
    },
    {
      name: "Emma K.",
      result: "€8.500 omzet in de eerste 6 maanden", 
      quote: "Als alleenstaande moeder zocht ik financiële vrijheid. Dankzij deze cursus maak ik nu €8.500 omzet in 6 maanden en kan ik meer tijd doorbrengen met mijn kinderen."
    }
  ];

  return (
    <section className="py-16 bg-adspension-orange">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DIT ZEGGEN CURSISTEN OVER ONS
          </h2>
          <p className="text-xl text-white/90">
            Echte resultaten van echte studenten
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="font-bold text-adspension-dark">{testimonial.name}</div>
                  <div className="text-adspension-green font-semibold">
                    {testimonial.result}
                  </div>
                </div>
                <div className="flex text-adspension-orange">
                  {'★'.repeat(5)}
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Resultaten van onze Cursisten
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">300+</div>
              <div className="text-white/80">Studenten</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-white/80">Succes Rate</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">€2.5M+</div>
              <div className="text-white/80">Totale Omzet</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-white/80">Gemiddelde Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}