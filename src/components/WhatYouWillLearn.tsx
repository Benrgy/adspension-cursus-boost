import { Search, Settings, TrendingUp } from "lucide-react";

const WhatYouWillLearn = () => {
  const features = [
    {
      icon: <Search className="w-12 h-12 text-brand-green" />,
      title: "Product Research & Inkopen",
      benefits: [
        "Leer hoe je winstgevende producten vindt met de beste software tools",
        "Ontdek hoe je betrouwbare leveranciers vindt op Alibaba",
        "Master de kunst van onderhandelen voor de beste prijzen",
        "Leer hoe je product validatie doet voordat je investeert"
      ]
    },
    {
      icon: <Settings className="w-12 h-12 text-brand-green" />,
      title: "Account Opzetten & Managen",
      benefits: [
        "Stap-voor-stap Amazon Seller Central setup",
        "Complete BOL.com partner account configuratie",
        "Leer alle belangrijke instellingen en beleid",
        "Hoe je je bedrijf officieel registreert in Nederland"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-brand-green" />,
      title: "Listings & PPC Advertising",
      benefits: [
        "Maak converting product listings die verkopen",
        "Amazon PPC campagnes die winst genereren",
        "Keyword research en optimalisatie strategieën",
        "Brand Registry en merkbescherming"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Wat je in deze Amazon cursus gaat leren:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border">
              <div className="text-center mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-6 text-card-foreground">
                {feature.title}
              </h3>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <span className="text-brand-green font-bold mt-1">✅</span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;