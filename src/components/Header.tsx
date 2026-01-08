import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import logo from '@/assets/logo-cap-sur-le-monde.png';
const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-sand/20 transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="Cap sur le Monde" className="h-16 w-auto" />
          </Link>

          {/* Language Switcher & Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300 px-4 py-2">
                    {t('header.home')}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">{t('header.destinations')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] max-h-[600px] overflow-y-auto p-4 bg-background border border-sand/20 rounded-lg shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Colonne 1: Asie et Europe */}
                      <div className="space-y-3">
                        <Link to="/destinations" className="block px-4 py-2 hover:bg-sand/20 rounded-md font-semibold">
                          ↳ {t('regions.southeastAsia')}
                        </Link>
                        <div className="pl-4 space-y-1">
                          <Link to="/destinations/vietnam" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Vietnam</Link>
                          <Link to="/destinations/thailande" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Thaïlande</Link>
                          <Link to="/destinations/cambodge" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Cambodge</Link>
                          <Link to="/destinations/laos" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Laos</Link>
                          <Link to="/destinations/birmanie" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Birmanie</Link>
                          <Link to="/destinations/malaisie" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Malaisie</Link>
                          <Link to="/destinations/singapour" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Singapour</Link>
                          <Link to="/destinations/indonesie" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Indonésie</Link>
                          <Link to="/destinations/philippines" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Philippines</Link>
                          <Link to="/destinations/brunei" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Brunei</Link>
                          <Link to="/destinations/timor-oriental" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Timor oriental</Link>
                        </div>
                        
                        <Link to="/europe" className="block px-4 py-2 hover:bg-sand/20 rounded-md font-semibold mt-2">
                          ↳ {t('regions.europe')}
                        </Link>
                        <div className="pl-4 space-y-1">
                          <Link to="/destinations/france" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• France</Link>
                          <Link to="/destinations/italie" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Italie</Link>
                          <Link to="/destinations/espagne" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Espagne</Link>
                          <Link to="/destinations/grece" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Grèce</Link>
                          <Link to="/destinations/portugal" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Portugal</Link>
                          <Link to="/destinations/croatie" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Croatie</Link>
                          <Link to="/destinations/suisse" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Suisse</Link>
                          <Link to="/destinations/autriche" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Autriche</Link>
                          <Link to="/destinations/islande" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Islande</Link>
                          <Link to="/destinations/irlande" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Irlande</Link>
                          <Link to="/destinations/norvege" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Norvège</Link>
                          <Link to="/destinations/hongrie" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Hongrie</Link>
                        </div>
                      </div>

                      {/* Colonne 2: Afrique et Amérique */}
                      <div className="space-y-3">
                        <Link to="/afrique" className="block px-4 py-2 hover:bg-sand/20 rounded-md font-semibold">
                          ↳ {t('regions.africa')}
                        </Link>
                        <div className="pl-4 space-y-1">
                          <Link to="/destinations/maroc" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Maroc</Link>
                          <Link to="/destinations/egypte" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Égypte</Link>
                          <Link to="/destinations/kenya" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Kenya</Link>
                          <Link to="/destinations/tanzanie" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Tanzanie</Link>
                          <Link to="/destinations/afrique-du-sud" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Afrique du Sud</Link>
                          <Link to="/destinations/madagascar" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Madagascar</Link>
                        </div>
                        
                        <Link to="/amerique" className="block px-4 py-2 hover:bg-sand/20 rounded-md font-semibold mt-2">
                          ↳ {t('regions.america')}
                        </Link>
                        <div className="pl-4 space-y-1">
                          <Link to="/destinations/usa" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• États-Unis</Link>
                          <Link to="/destinations/canada" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Canada</Link>
                          <Link to="/destinations/mexique" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Mexique</Link>
                          <Link to="/destinations/perou" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Pérou</Link>
                          <Link to="/destinations/bresil" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Brésil</Link>
                          <Link to="/destinations/argentine" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Argentine</Link>
                          <Link to="/destinations/chili" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Chili</Link>
                          <Link to="/destinations/colombie" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Colombie</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">{t('header.guides')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[300px] max-h-[400px] overflow-y-auto p-4 bg-background border border-sand/20 rounded-lg shadow-lg space-y-2">
                    <Link to="/guides" className="block px-4 py-2 hover:bg-sand/20 rounded-md font-semibold">
                      {t('header.allGuides')}
                    </Link>
                    <Link to="/guides#preparer-sac" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • {t('guides.backpack')}
                    </Link>
                    <Link to="/guides#assurance" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • {t('guides.insurance')}
                    </Link>
                    <Link to="/guides#sante-securite" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • {t('guides.health')}
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">{t('header.tests')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[300px] max-h-[400px] overflow-y-auto p-4 bg-background border border-sand/20 rounded-lg shadow-lg space-y-2">
                    <Link to="/tests" className="block px-4 py-2 hover:bg-sand/20 rounded-md font-semibold">
                      {t('header.allTests')}
                    </Link>
                    <Link to="/tests#chaussures" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • Chaussures
                    </Link>
                    <Link to="/tests#sacs" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • Sacs à dos
                    </Link>
                    <Link to="/tests#confort" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • Confort
                    </Link>
                    <Link to="/tests#electronique" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • Électronique
                    </Link>
                    <Link to="/tests#vetements" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • Vêtements
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">{t('header.deals')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[300px] max-h-[400px] overflow-y-auto p-4 bg-background border border-sand/20 rounded-lg shadow-lg space-y-2">
                    <Link to="/bons-plans/vols" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • {t('deals.flights')}
                    </Link>
                    <Link to="/bons-plans/hebergement" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • {t('deals.accommodation')}
                    </Link>
                    <Link to="/bons-plans/cartes-sim" className="block px-4 py-2 hover:bg-sand/10 rounded-md text-sm">
                      • {t('deals.sim')}
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/ressources-gratuites" className="text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300 px-4 py-2">
                  🎁 Ressources
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/blog" className="text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300 px-4 py-2">
                  📝 Blog
                </Link>
              </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/a-propos" className="text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300 px-4 py-2">
                    {t('header.about')}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300 px-4 py-2">
                    {t('header.contact')}
                  </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <LanguageSwitcher />
        </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            <Link 
              to="/" 
              className="block py-2 text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              🏠 {t('header.home')}
            </Link>
            
            <div>
              <button
                onClick={() => toggleSubmenu('destinations')}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300"
              >
                🌍 {t('header.destinations')}
                <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === 'destinations' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'destinations' && (
                <div className="pl-4 space-y-1 mt-2 max-h-[60vh] overflow-y-auto">
                  <div className="font-semibold text-sm py-1">↳ {t('regions.southeastAsia')}</div>
                  <Link to="/destinations/vietnam" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Vietnam</Link>
                  <Link to="/destinations/thailande" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Thaïlande</Link>
                  <Link to="/destinations/cambodge" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Cambodge</Link>
                  <Link to="/destinations/laos" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Laos</Link>
                  <Link to="/destinations/birmanie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Birmanie</Link>
                  <Link to="/destinations/malaisie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Malaisie</Link>
                  <Link to="/destinations/singapour" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Singapour</Link>
                  <Link to="/destinations/indonesie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Indonésie</Link>
                  <Link to="/destinations/philippines" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Philippines</Link>
                  <Link to="/destinations/brunei" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Brunei</Link>
                  <Link to="/destinations/timor-oriental" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Timor oriental</Link>
                  
                  <div className="font-semibold text-sm py-1 mt-2">↳ {t('regions.europe')}</div>
                  <Link to="/destinations/france" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• France</Link>
                  <Link to="/destinations/italie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Italie</Link>
                  <Link to="/destinations/espagne" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Espagne</Link>
                  <Link to="/destinations/grece" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Grèce</Link>
                  <Link to="/destinations/portugal" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Portugal</Link>
                  <Link to="/destinations/croatie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Croatie</Link>
                  <Link to="/destinations/suisse" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Suisse</Link>
                  <Link to="/destinations/autriche" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Autriche</Link>
                  <Link to="/destinations/islande" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Islande</Link>
                  <Link to="/destinations/irlande" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Irlande</Link>
                  <Link to="/destinations/norvege" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Norvège</Link>
                  <Link to="/destinations/hongrie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Hongrie</Link>
                  
                  <Link to="/afrique" className="font-semibold text-sm py-1 mt-2 block hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ {t('regions.africa')}</Link>
                  <div className="pl-4 space-y-1">
                    <Link to="/destinations/maroc" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Maroc</Link>
                    <Link to="/destinations/egypte" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Égypte</Link>
                    <Link to="/destinations/kenya" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Kenya</Link>
                    <Link to="/destinations/tanzanie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Tanzanie</Link>
                    <Link to="/destinations/afrique-du-sud" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Afrique du Sud</Link>
                    <Link to="/destinations/madagascar" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Madagascar</Link>
                  </div>
                  
                  <Link to="/amerique" className="font-semibold text-sm py-1 mt-2 block hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ {t('regions.america')}</Link>
                  <div className="pl-4 space-y-1">
                    <Link to="/destinations/usa" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• États-Unis</Link>
                    <Link to="/destinations/canada" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Canada</Link>
                    <Link to="/destinations/mexique" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Mexique</Link>
                    <Link to="/destinations/perou" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Pérou</Link>
                    <Link to="/destinations/bresil" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Brésil</Link>
                    <Link to="/destinations/argentine" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Argentine</Link>
                    <Link to="/destinations/chili" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Chili</Link>
                    <Link to="/destinations/colombie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Colombie</Link>
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleSubmenu('guides')}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300"
              >
                🧭 {t('header.guides')}
                <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === 'guides' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'guides' && (
                <div className="pl-4 space-y-1 mt-2">
                  <Link to="/guides" className="block py-1 text-sm hover:text-ocean font-semibold" onClick={() => setIsMenuOpen(false)}>{t('header.allGuides')}</Link>
                  <Link to="/guides#preparer-sac" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ {t('guides.backpack')}</Link>
                  <Link to="/guides#assurance" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ {t('guides.insurance')}</Link>
                  <Link to="/guides#sante-securite" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ {t('guides.health')}</Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleSubmenu('tests')}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300"
              >
                🎒 {t('header.tests')}
                <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === 'tests' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'tests' && (
                <div className="pl-4 space-y-1 mt-2">
                  <Link to="/tests" className="block py-1 text-sm hover:text-ocean font-semibold" onClick={() => setIsMenuOpen(false)}>{t('header.allTests')}</Link>
                  <Link to="/tests#chaussures" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ Chaussures</Link>
                  <Link to="/tests#sacs" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ Sacs à dos</Link>
                  <Link to="/tests#confort" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ Confort</Link>
                  <Link to="/tests#electronique" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ Électronique</Link>
                  <Link to="/tests#vetements" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ Vêtements</Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleSubmenu('bons-plans')}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300"
              >
                💰 {t('header.deals')}
                <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === 'bons-plans' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'bons-plans' && (
                <div className="pl-4 space-y-1 mt-2">
                  <Link to="/bons-plans/vols" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ {t('deals.flights')}</Link>
                  <Link to="/bons-plans/hebergement" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ {t('deals.accommodation')}</Link>
                  <Link to="/bons-plans/cartes-sim" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>↳ {t('deals.sim')}</Link>
                </div>
              )}
            </div>

            <Link 
              to="/ressources-gratuites" 
              className="block py-2 text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              🎁 Ressources Gratuites
            </Link>

            <Link 
              to="/blog" 
              className="block py-2 text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              📝 Blog
            </Link>

            <Link 
              to="/a-propos" 
              className="block py-2 text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              🙋‍♀️ {t('header.about')}
            </Link>

            <Link 
              to="/contact" 
              className="block py-2 text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              📩 {t('header.contact')}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;