import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Succesvolle entrepreneur werkt aan Amazon FBA business"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Wil jij ook een succesvol bedrijf starten op Amazon?
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 font-medium text-gray-200">
          Stap voor stap uitleg hoe jij met Amazon FBA vrijheid kan bereiken en een winstgevend e-commerce bedrijf opbouwt.
        </p>
        
        <p className="text-lg mb-8 text-gray-300">
          Onze #1 Amazon FBA Cursus is dé gids voor beginners in Nederland en België.
        </p>
        
        <Button variant="hero" size="xl" className="animate-pulse hover:animate-none">
          PLAN JOUW GRATIS CALL IN!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;