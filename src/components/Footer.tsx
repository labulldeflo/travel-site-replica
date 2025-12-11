import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import travelGlobe from '@/assets/travel-globe.jpg';
const Footer = () => {
  const {
    t
  } = useTranslation();
  return <footer className="bg-sand py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img 
                  src={travelGlobe} 
                  alt="Globe de voyage" 
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md flex-shrink-0" 
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Cap sur le Monde</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {t('footer.about')}
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-ocean transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-ocean transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-ocean transition-colors duration-300"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a 
                      href="mailto:contact@lesdeuxpetitsbaroudeurs.com" 
                      className="text-muted-foreground hover:text-ocean transition-colors duration-300"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">{t('footer.navigation')}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-ocean transition-colors duration-300">{t('footer.home')}</a></li>
                <li><a href="#voyages" className="text-muted-foreground hover:text-ocean transition-colors duration-300">{t('footer.trips')}</a></li>
                <li><a href="#conseils" className="text-muted-foreground hover:text-ocean transition-colors duration-300">{t('footer.tips')}</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-ocean transition-colors duration-300">{t('footer.whoWeAre')}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2">
                <li><a href="mailto:contact@lesdeuxpetitsbaroudeurs.com" className="text-muted-foreground hover:text-ocean transition-colors duration-300">{t('footer.email')}</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-ocean transition-colors duration-300">{t('footer.newsletter')}</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-ocean transition-colors duration-300">{t('footer.partnerships')}</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-sand-dark pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                {t('footer.rights')}
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-ocean transition-colors duration-300">{t('footer.legal')}</a>
                <a href="#" className="text-muted-foreground hover:text-ocean transition-colors duration-300">{t('footer.privacy')}</a>
                <a href="#" className="text-muted-foreground hover:text-ocean transition-colors duration-300">{t('footer.terms')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;