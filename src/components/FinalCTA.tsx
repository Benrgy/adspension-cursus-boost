import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import courseMockup from "@/assets/course-mockup.jpg";

const FinalCTA = () => {
  const included = [
    "40+ A-tot-Z Video Tutorials",
    "70+ Pagina's eBook met alle info",
    "BONUS: BOL.com Modules", 
    "Persoonlijke 1-op-1 Support",
    "Lifetime Access & Updates",
    "Templates & Checklists",
    "Directe toegang na aankoop"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={courseMockup}
              alt="Complete Amazon FBA Cursus bundle - Adspension"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-brand-orange">
              #1 Amazon Cursus van NL
            </h3>
            
            <div className="mb-8">
              <p className="text-xl text-muted-foreground mb-6">
                Alles wat je nodig hebt om een succesvolle Amazon FBA business op te bouwen:
              </p>
              
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground line-through">Normale prijs: €997</p>
                <p className="text-4xl font-bold text-brand-green">€497</p>
                <p className="text-sm text-brand-orange font-semibold">Eenmalige betaling - Lifetime Access</p>
              </div>
              
              <Button variant="cta" size="xl" className="w-full md:w-auto">
                START NU MET AMAZON FBA!
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                30 dagen geld-terug-garantie • Directe toegang na betaling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;