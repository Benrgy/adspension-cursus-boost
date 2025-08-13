const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold">Adspension</span>
            </div>
            <p className="text-gray-300 mb-4">
              De #1 Amazon FBA cursus van Nederland. Wij helpen entrepreneurs hun dromen waar te maken 
              door een winstgevende e-commerce business op te bouwen.
            </p>
            <p className="text-gray-400 text-sm">
              Contact: info@adspension.nl | +31 6 12 34 56 78
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Cursus</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Amazon FBA Training</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">BOL.com Modules</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">1-op-1 Support</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Juridisch</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Algemene Voorwaarden</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Adspension. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;