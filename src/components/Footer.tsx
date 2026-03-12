import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-elegant font-bold text-white mb-3">Cap sur le Monde</h4>
              <p className="text-sm leading-relaxed mb-4 max-w-xs">
                Guides pratiques, budgets détaillés et conseils concrets pour organiser vos voyages sereinement. +40 destinations couvertes.
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
                <li><Link to="/destinations/japon" className="hover:text-ocean transition-colors">Japon</Link></li>
                <li><Link to="/destinations/thailande" className="hover:text-ocean transition-colors">Thaïlande</Link></li>
                <li><Link to="/destinations/vietnam" className="hover:text-ocean transition-colors">Vietnam</Link></li>
                <li><Link to="/destinations/indonesie" className="hover:text-ocean transition-colors">Indonésie</Link></li>
                <li><Link to="/destinations/portugal" className="hover:text-ocean transition-colors">Portugal</Link></li>
                <li><Link to="/destinations/italie" className="hover:text-ocean transition-colors">Italie</Link></li>
                <li><Link to="/destinations" className="hover:text-ocean transition-colors font-medium">Voir tout →</Link></li>
              </ul>
            </div>

            {/* Préparer */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Préparer</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/preparer-voyage" className="hover:text-ocean transition-colors">Checklist voyage</Link></li>
                <li><Link to="/budget-voyage" className="hover:text-ocean transition-colors">Budget voyage</Link></li>
                <li><Link to="/equipement-voyage" className="hover:text-ocean transition-colors">Équipement</Link></li>
                <li><Link to="/guides/securite" className="hover:text-ocean transition-colors">Assurance voyage</Link></li>
                <li><Link to="/guides/vol" className="hover:text-ocean transition-colors">Vols pas chers</Link></li>
                <li><Link to="/guides/planification" className="hover:text-ocean transition-colors">Itinéraires</Link></li>
                <li><Link to="/ressources-gratuites" className="hover:text-ocean transition-colors">Ressources gratuites</Link></li>
              </ul>
            </div>

            {/* Le site */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Le site</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/a-propos" className="hover:text-ocean transition-colors">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-ocean transition-colors">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-ocean transition-colors">Blog</Link></li>
                <li><Link to="/mentions-legales" className="hover:text-ocean transition-colors">Mentions légales</Link></li>
                <li><Link to="/politique-confidentialite" className="hover:text-ocean transition-colors">Confidentialité</Link></li>
                <li><a href="mailto:contact@cap-sur-le-monde.com" className="hover:text-ocean transition-colors">Partenariats</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-4">
              <p>© {new Date().getFullYear()} Cap sur le Monde. Tous droits réservés.</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
                <Link to="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
