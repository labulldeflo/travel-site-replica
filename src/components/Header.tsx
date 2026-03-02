import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import logo from '@/assets/logo-cap-sur-le-monde.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-sand/20 transition-all duration-300">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="Cap sur le Monde" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300 px-3 py-2">
                    Accueil
                  </Link>
                </NavigationMenuItem>

                {/* Destinations */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Destinations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] max-h-[600px] overflow-y-auto p-4 bg-background border border-sand/20 rounded-lg shadow-lg">
                      <div className="grid grid-cols-2 gap-4">
                        {/* Colonne 1: Asie et Europe */}
                        <div className="space-y-3">
                          <Link to="/destinations" className="block px-4 py-2 hover:bg-sand/20 rounded-md font-semibold">
                            ↳ Asie du Sud-Est
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
                          </div>
                          
                          <Link to="/europe" className="block px-4 py-2 hover:bg-sand/20 rounded-md font-semibold mt-2">
                            ↳ Europe
                          </Link>
                          <div className="pl-4 space-y-1">
                            <Link to="/destinations/france" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• France</Link>
                            <Link to="/destinations/italie" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Italie</Link>
                            <Link to="/destinations/espagne" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Espagne</Link>
                            <Link to="/destinations/grece" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Grèce</Link>
                            <Link to="/destinations/portugal" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Portugal</Link>
                            <Link to="/destinations/croatie" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Croatie</Link>
                            <Link to="/destinations/islande" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Islande</Link>
                            <Link to="/destinations/norvege" className="block px-4 py-1.5 hover:bg-sand/10 rounded-md text-sm">• Norvège</Link>
                          </div>
                        </div>

                        {/* Colonne 2: Afrique et Amérique */}
                        <div className="space-y-3">
                          <Link to="/afrique" className="block px-4 py-2 hover:bg-sand/20 rounded-md font-semibold">
                            ↳ Afrique
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
                            ↳ Amérique
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

                {/* Organiser son voyage (NEW) */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Organiser son voyage</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[320px] p-4 bg-background border border-sand/20 rounded-lg shadow-lg space-y-1">
                      <Link to="/guides/budget" className="block px-4 py-2.5 hover:bg-sand/20 rounded-md text-sm font-medium">💰 Budget & Coûts</Link>
                      <Link to="/guides/planification" className="block px-4 py-2.5 hover:bg-sand/20 rounded-md text-sm font-medium">🗺️ Itinéraires</Link>
                      <Link to="/bons-plans/hebergement" className="block px-4 py-2.5 hover:bg-sand/20 rounded-md text-sm font-medium">🏨 Où dormir</Link>
                      <Link to="/guides/securite" className="block px-4 py-2.5 hover:bg-sand/20 rounded-md text-sm font-medium">🛡️ Assurance voyage</Link>
                      <Link to="/guides/vol" className="block px-4 py-2.5 hover:bg-sand/20 rounded-md text-sm font-medium">✈️ Vols & Transports</Link>
                      <Link to="/guides" className="block px-4 py-2.5 hover:bg-sand/20 rounded-md text-sm font-medium">📋 Conseils pratiques</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Guides pratiques */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Guides pratiques</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[320px] max-h-[400px] overflow-y-auto p-4 bg-background border border-sand/20 rounded-lg shadow-lg space-y-1">
                      <Link to="/guides" className="block px-4 py-2.5 hover:bg-sand/20 rounded-md font-semibold text-sm">
                        Tous les guides
                      </Link>
                      <Link to="/tests" className="block px-4 py-2.5 hover:bg-sand/10 rounded-md text-sm">🎒 Tests matériel</Link>
                      <Link to="/ressources-gratuites" className="block px-4 py-2.5 hover:bg-sand/10 rounded-md text-sm">📥 Ressources gratuites</Link>
                      <Link to="/blog" className="block px-4 py-2.5 hover:bg-sand/10 rounded-md text-sm">📝 Blog & Récits</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Bons plans */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Bons plans</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[280px] p-4 bg-background border border-sand/20 rounded-lg shadow-lg space-y-1">
                      <Link to="/bons-plans/vols" className="block px-4 py-2.5 hover:bg-sand/10 rounded-md text-sm">✈️ Billets d'avion</Link>
                      <Link to="/bons-plans/hebergement" className="block px-4 py-2.5 hover:bg-sand/10 rounded-md text-sm">🏨 Hébergements</Link>
                      <Link to="/bons-plans/cartes-sim" className="block px-4 py-2.5 hover:bg-sand/10 rounded-md text-sm">📱 Cartes SIM</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/a-propos" className="text-sm font-medium text-foreground hover:text-ocean transition-colors duration-300 px-3 py-2">
                    À propos
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2 pb-4">
            <Link to="/" className="block py-2 text-sm font-medium text-foreground hover:text-ocean" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </Link>
            
            {/* Destinations Mobile */}
            <div>
              <button
                onClick={() => toggleSubmenu('destinations')}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-ocean"
              >
                Destinations
                <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === 'destinations' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'destinations' && (
                <div className="pl-4 space-y-1 mt-1 max-h-[50vh] overflow-y-auto">
                  <div className="font-semibold text-sm py-1">Asie du Sud-Est</div>
                  <Link to="/destinations/vietnam" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Vietnam</Link>
                  <Link to="/destinations/thailande" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Thaïlande</Link>
                  <Link to="/destinations/cambodge" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Cambodge</Link>
                  <Link to="/destinations/laos" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Laos</Link>
                  <Link to="/destinations/indonesie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Indonésie</Link>
                  <Link to="/destinations/malaisie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Malaisie</Link>
                  
                  <div className="font-semibold text-sm py-1 mt-2">Europe</div>
                  <Link to="/destinations/france" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• France</Link>
                  <Link to="/destinations/italie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Italie</Link>
                  <Link to="/destinations/espagne" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Espagne</Link>
                  <Link to="/destinations/portugal" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Portugal</Link>
                  <Link to="/destinations/grece" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Grèce</Link>
                  <Link to="/destinations/islande" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Islande</Link>
                  
                  <div className="font-semibold text-sm py-1 mt-2">Afrique</div>
                  <Link to="/destinations/maroc" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Maroc</Link>
                  <Link to="/destinations/egypte" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Égypte</Link>
                  <Link to="/destinations/kenya" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Kenya</Link>
                  
                  <div className="font-semibold text-sm py-1 mt-2">Amérique</div>
                  <Link to="/destinations/usa" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• États-Unis</Link>
                  <Link to="/destinations/canada" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Canada</Link>
                  <Link to="/destinations/mexique" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Mexique</Link>
                  <Link to="/destinations/perou" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Pérou</Link>
                  <Link to="/destinations/bresil" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Brésil</Link>
                  <Link to="/destinations/argentine" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>• Argentine</Link>
                </div>
              )}
            </div>

            {/* Organiser son voyage Mobile */}
            <div>
              <button
                onClick={() => toggleSubmenu('organiser')}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-ocean"
              >
                Organiser son voyage
                <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === 'organiser' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'organiser' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/guides/budget" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>💰 Budget & Coûts</Link>
                  <Link to="/guides/planification" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>🗺️ Itinéraires</Link>
                  <Link to="/bons-plans/hebergement" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>🏨 Où dormir</Link>
                  <Link to="/guides/securite" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>🛡️ Assurance voyage</Link>
                  <Link to="/guides/vol" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>✈️ Vols & Transports</Link>
                </div>
              )}
            </div>

            {/* Guides Mobile */}
            <div>
              <button
                onClick={() => toggleSubmenu('guides')}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-ocean"
              >
                Guides pratiques
                <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === 'guides' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'guides' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/guides" className="block py-1.5 text-sm hover:text-ocean font-semibold" onClick={() => setIsMenuOpen(false)}>Tous les guides</Link>
                  <Link to="/tests" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>🎒 Tests matériel</Link>
                  <Link to="/ressources-gratuites" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>📥 Ressources gratuites</Link>
                  <Link to="/blog" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>📝 Blog</Link>
                </div>
              )}
            </div>

            <Link to="/a-propos" className="block py-2 text-sm font-medium text-foreground hover:text-ocean" onClick={() => setIsMenuOpen(false)}>
              À propos
            </Link>
            <Link to="/contact" className="block py-2 text-sm font-medium text-foreground hover:text-ocean" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
