import { Play, BookOpen, Gift } from "lucide-react";
import courseMockup from "@/assets/course-mockup.jpg";

const CourseContents = () => {
  const contents = [
    {
      icon: <Play className="w-12 h-12 text-brand-green" />,
      title: "40+ A-tot-Z Video Tutorials",
      description: "Stap-voor-stap video's die je door het complete Amazon FBA proces leiden, van het vinden van je eerste product tot het opschalen van je business. Alle video's zijn in het Nederlands opgenomen en bevatten praktische voorbeelden.",
      image: courseMockup
    },
    {
      icon: <BookOpen className="w-12 h-12 text-brand-orange" />,
      title: "70+ Pagina's eBook",
      description: "Een complete geschreven gids die alle aspecten van Amazon FBA behandelt. Perfect om naast de video's te gebruiken als referentiemateriaal. Inclusief templates, checklists en praktische tools.",
      image: courseMockup
    },
    {
      icon: <Gift className="w-12 h-12 text-brand-green" />,
      title: "BONUS: Bol.com Modules",
      description: "Exclusieve modules over hoe je ook succesvol kunt zijn op BOL.com, de grootste Nederlandse e-commerce platform. Leer de verschillen en unieke kansen die BOL.com biedt voor Nederlandse sellers.",
      image: courseMockup
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Dit is Wat Je Krijgt in Onze Cursus
        </h2>
        
        <div className="space-y-16">
          {contents.map((content, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  {content.icon}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {content.title}
                  </h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content.description}
                </p>
              </div>
              
              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <img
                  src={content.image}
                  alt={`${content.title} - Adspension Amazon FBA Cursus`}
                  className="w-full rounded-xl shadow-2xl border"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContents;