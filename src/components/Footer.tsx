import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-lg font-bold mb-4">🤖 Agrobotcompetitie</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            De Agrobotcompetitie daagt studenten uit om innovatieve robots te
            bouwen voor de landbouw van de toekomst.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Pagina's</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:text-agrobot-mint transition-colors">Home</Link></li>
            <li><Link to="/regels" className="hover:text-agrobot-mint transition-colors">Regels & Programma</Link></li>
            <li><Link to="/inschrijven" className="hover:text-agrobot-mint transition-colors">Inschrijven</Link></li>
            <li><Link to="/faq" className="hover:text-agrobot-mint transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-agrobot-mint transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>📧 info@agrobotcompetitie.nl</li>
            <li>📞 +31 (0)76 123 4567</li>
            <li>📍 Avans Hogeschool, Breda</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Agrobotcompetitie. Alle rechten voorbehouden.
      </div>
    </div>
  </footer>
);

export default Footer;
