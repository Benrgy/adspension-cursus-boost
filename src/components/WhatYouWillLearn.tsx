import { Search, Settings, TrendingUp } from "lucide-react";

export default function WhatYouWillLearn() {
  const features = [
    {
      icon: Search,
      title: "Product Research & Inkopen",
      items: [
        "Leer hoe je winstgevende producten vindt met de beste software tools",
        "Ontdek de geheimen van succesvolle product selectie",
        "Maak contact met betrouwbare leveranciers in China",
        "Onderhandel als een pro en krijg de beste prijzen"
      ]
    },
    {
      icon: Settings,
      title: "Account Opzetten & Managen",
      items: [
        "Stap-voor-stap Amazon Seller Central setup",
        "Brand Registry aanvragen voor merkbescherming",
        "FBA shipment planning en inventory management",
        "BOL.com account opzetten voor de Nederlandse markt"
      ]
    },
    {
      icon: TrendingUp,
      title: "Listings & PPC Advertising",
      items: [
        "Converterende productlistings schrijven die verkopen",
        "Amazon PPC campagnes opzetten voor maximale ROI",
        "Keyword research en SEO optimalisatie",
        "Geavanceerde advertising strategieën voor schaling"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-adspension-dark">
          Wat je in deze Amazon cursus gaat leren:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-adspension-orange rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-adspension-dark">
                {feature.title}
              </h3>
              
              <ul className="space-y-2 text-left">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-adspension-green mr-2 font-bold">✅</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}