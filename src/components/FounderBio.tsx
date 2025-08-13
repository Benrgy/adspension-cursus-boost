import tijnImage from "@/assets/tijn-strikker.jpg";

const FounderBio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Maak kennis met jouw Coach: Tijn Strikker
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hoi! Ik ben Tijn Strikker, jouw Amazon FBA expert en de oprichter van Adspension. 
                Met een Master in Digital Business van de Universiteit van Amsterdam heb ik meer dan 
                300+ studenten geholpen met het opzetten van hun eigen Amazon FBA business.
              </p>
              
              <div className="bg-brand-orange/10 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-brand-orange mb-4">Mijn Expertise:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                    <span>Master in Digital Business (Universiteit van Amsterdam)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                    <span>300+ studenten succesvol begeleid</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                    <span>Gespecialiseerd in Amazon PPC Advertising</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                    <span>Expert in Brand Registry en merkbescherming</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mijn missie is om Nederlandse entrepreneurs te helpen financiële vrijheid te bereiken 
                door een winstgevend Amazon FBA bedrijf op te bouwen. Ik geloof in persoonlijke begeleiding 
                en praktische kennis die direct toepasbaar is.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 text-center">
            <img
              src={tijnImage}
              alt="Tijn Strikker - Amazon FBA Expert en oprichter van Adspension"
              className="w-80 h-80 object-cover rounded-full mx-auto shadow-2xl border-4 border-brand-orange"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderBio;