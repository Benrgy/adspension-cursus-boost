import tijnImg from "@/assets/tijn-strikker.jpg";

export default function FounderBio() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-adspension-dark">
          Maak kennis met jouw Coach: Tijn Strikker
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={tijnImg} 
              alt="Tijn Strikker - Amazon FBA Expert en Cursus Creator"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Master in Digital Business</strong> (Universiteit van Amsterdam) en gepassioneerde ondernemer 
              die zijn leven heeft gewijd aan het helpen van anderen hun financiële dromen waar te maken.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Tijn heeft <strong>meer dan 300+ studenten geholpen</strong> met het opzetten van hun Amazon FBA business 
              en is gespecialiseerd in Amazon PPC Advertising en Brand Registry.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Met zijn praktische, no-nonsense aanpak en bewezen systeem heeft hij talloze entrepreneurs geholpen 
              om hun eerste €1000, €5000, en zelfs €10.000+ per maand te verdienen met Amazon FBA.
            </p>
            
            <div className="pt-4">
              <div className="inline-flex items-center bg-adspension-green text-white px-4 py-2 rounded-lg">
                <span className="font-semibold">🏆 Resultaat: 95+ studenten behalen winst binnen 6 maanden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}