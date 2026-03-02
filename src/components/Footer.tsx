import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-elegant font-bold text-white mb-3">Cap sur le Monde</h4>
              <p className="text-sm leading-relaxed mb-4">
                Guides pratiques, budgets détaillés et conseils concrets pour organiser vos voyages sereinement.
              </p>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-ocean transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="mailto:contact@cap-sur-le-monde.com" className="hover:text-ocean transition-colors" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Destinations</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/destinations/thailande" className="hover:text-ocean transition-colors">Thaïlande</Link></li>
                <li><Link to="/destinations/vietnam" className="hover:text-ocean transition-colors">Vietnam</Link></li>
                <li><Link to="/destinations/indonesie" className="hover:text-ocean transition-colors">Indonésie</Link></li>
                <li><Link to="/destinations/portugal" className="hover:text-ocean transition-colors">Portugal</Link></li>
                <li><Link to="/destinations/italie" className="hover:text-ocean transition-colors">Italie</Link></li>
                <li><Link to="/destinations" className="hover:text-ocean transition-colors font-medium">Voir tout →</Link></li>
              </ul>
            </div>

            {/* Organiser */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Organiser</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/guides/budget" className="hover:text-ocean transition-colors">Budget voyage</Link></li>
                <li><Link to="/guides/planification" className="hover:text-ocean transition-colors">Itinéraires</Link></li>
                <li><Link to="/bons-plans/hebergement" className="hover:text-ocean transition-colors">Hébergements</Link></li>
                <li><Link to="/guides/securite" className="hover:text-ocean transition-colors">Assurance</Link></li>
                <li><Link to="/tests" className="hover:text-ocean transition-colors">Tests matériel</Link></li>
                <li><Link to="/ressources-gratuites" className="hover:text-ocean transition-colors">Ressources gratuites</Link></li>
              </ul>
            </div>

            {/* À propos */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Le site</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/a-propos" className="hover:text-ocean transition-colors">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-ocean transition-colors">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-ocean transition-colors">Blog</Link></li>
                <li><a href="mailto:contact@cap-sur-le-monde.com" className="hover:text-ocean transition-colors">Partenariats</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
              <p>© 2025 Cap sur le Monde. Tous droits réservés.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/a-propos" className="hover:text-white transition-colors">Mentions légales</Link>
                <Link to="/a-propos" className="hover:text-white transition-colors">Confidentialité</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
