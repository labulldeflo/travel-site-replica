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


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-sand/20">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <span className="font-elegant text-xl sm:text-2xl font-bold text-ocean tracking-tight">
              <span className="text-2xl sm:text-3xl">C</span>ap <span className="font-normal">sur le</span> Monde
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-sm font-medium text-foreground hover:text-ocean transition-colors px-3 py-2">
                    Accueil
                  </Link>
                </NavigationMenuItem>

                {/* Destinations */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Destinations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[520px] max-h-[500px] overflow-y-auto p-4 bg-background border border-sand/20 rounded-lg shadow-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Link to="/destinations" className="block px-3 py-2 hover:bg-sand/20 rounded-md font-semibold text-sm">Asie du Sud-Est</Link>
                          <div className="pl-3 space-y-1">
                            <Link to="/destinations/vietnam" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Vietnam</Link>
                            <Link to="/destinations/thailande" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Thaïlande</Link>
                            <Link to="/destinations/cambodge" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Cambodge</Link>
                            <Link to="/destinations/laos" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Laos</Link>
                            <Link to="/destinations/indonesie" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Indonésie</Link>
                            <Link to="/destinations/malaisie" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Malaisie</Link>
                          </div>
                          <Link to="/europe" className="block px-3 py-2 hover:bg-sand/20 rounded-md font-semibold text-sm mt-2">Europe</Link>
                          <div className="pl-3 space-y-1">
                            <Link to="/destinations/italie" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Italie</Link>
                            <Link to="/destinations/espagne" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Espagne</Link>
                            <Link to="/destinations/portugal" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Portugal</Link>
                            <Link to="/destinations/grece" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Grèce</Link>
                            <Link to="/destinations/islande" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Islande</Link>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Link to="/afrique" className="block px-3 py-2 hover:bg-sand/20 rounded-md font-semibold text-sm">Afrique</Link>
                          <div className="pl-3 space-y-1">
                            <Link to="/destinations/maroc" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Maroc</Link>
                            <Link to="/destinations/egypte" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Égypte</Link>
                            <Link to="/destinations/kenya" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Kenya</Link>
                            <Link to="/destinations/tanzanie" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Tanzanie</Link>
                          </div>
                          <Link to="/amerique" className="block px-3 py-2 hover:bg-sand/20 rounded-md font-semibold text-sm mt-2">Amérique</Link>
                          <div className="pl-3 space-y-1">
                            <Link to="/destinations/usa" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">États-Unis</Link>
                            <Link to="/destinations/canada" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Canada</Link>
                            <Link to="/destinations/mexique" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Mexique</Link>
                            <Link to="/destinations/perou" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Pérou</Link>
                            <Link to="/destinations/bresil" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Brésil</Link>
                            <Link to="/destinations/argentine" className="block px-3 py-1 hover:bg-sand/10 rounded-md text-sm">Argentine</Link>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-sand/20">
                        <Link to="/destinations" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm font-medium text-ocean">
                          Toutes les destinations →
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Guides de voyage */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Guides de voyage</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[280px] p-4 bg-background border border-sand/20 rounded-lg shadow-lg space-y-1">
                      <Link to="/guides/budget" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">💰 Budget & Coûts</Link>
                      <Link to="/guides/planification" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">🗺️ Itinéraires</Link>
                      <Link to="/guides/vol" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">✈️ Vols & Transports</Link>
                      <Link to="/guides/securite" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">🛡️ Assurance voyage</Link>
                      <Link to="/guides/photo" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">📷 Photo voyage</Link>
                      <Link to="/guides" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm font-medium text-ocean">Tous les guides →</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Conseils pratiques */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Conseils pratiques</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[280px] p-4 bg-background border border-sand/20 rounded-lg shadow-lg space-y-1">
                      <Link to="/bons-plans/hebergement" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">🏨 Hébergements</Link>
                      <Link to="/bons-plans/vols" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">✈️ Billets d'avion</Link>
                      <Link to="/bons-plans/cartes-sim" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">📱 Cartes SIM</Link>
                      <Link to="/tests" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">🎒 Tests matériel</Link>
                      <Link to="/ressources-gratuites" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">📥 Ressources gratuites</Link>
                      <Link to="/blog" className="block px-3 py-2 hover:bg-sand/20 rounded-md text-sm">📝 Blog</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/a-propos" className="text-sm font-medium text-foreground hover:text-ocean transition-colors px-3 py-2">
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
                  <Link to="/destinations/vietnam" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Vietnam</Link>
                  <Link to="/destinations/thailande" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Thaïlande</Link>
                  <Link to="/destinations/cambodge" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Cambodge</Link>
                  <Link to="/destinations/indonesie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Indonésie</Link>
                  
                  <div className="font-semibold text-sm py-1 mt-2">Europe</div>
                  <Link to="/destinations/italie" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Italie</Link>
                  <Link to="/destinations/espagne" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Espagne</Link>
                  <Link to="/destinations/portugal" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Portugal</Link>
                  
                  <div className="font-semibold text-sm py-1 mt-2">Afrique & Amérique</div>
                  <Link to="/destinations/maroc" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Maroc</Link>
                  <Link to="/destinations/usa" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>États-Unis</Link>
                  <Link to="/destinations/mexique" className="block py-1 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Mexique</Link>
                  
                  <Link to="/destinations" className="block py-1.5 text-sm text-ocean font-medium" onClick={() => setIsMenuOpen(false)}>Toutes les destinations →</Link>
                </div>
              )}
            </div>

            {/* Guides Mobile */}
            <div>
              <button
                onClick={() => toggleSubmenu('guides')}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-ocean"
              >
                Guides de voyage
                <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === 'guides' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'guides' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/guides/budget" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Budget & Coûts</Link>
                  <Link to="/guides/planification" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Itinéraires</Link>
                  <Link to="/guides/vol" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Vols & Transports</Link>
                  <Link to="/guides/securite" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Assurance voyage</Link>
                  <Link to="/guides" className="block py-1.5 text-sm text-ocean font-medium" onClick={() => setIsMenuOpen(false)}>Tous les guides →</Link>
                </div>
              )}
            </div>

            {/* Conseils Mobile */}
            <div>
              <button
                onClick={() => toggleSubmenu('conseils')}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-ocean"
              >
                Conseils pratiques
                <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === 'conseils' ? 'rotate-180' : ''}`} />
              </button>
              {openSubmenu === 'conseils' && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/bons-plans/hebergement" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Hébergements</Link>
                  <Link to="/bons-plans/vols" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Billets d'avion</Link>
                  <Link to="/tests" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Tests matériel</Link>
                  <Link to="/blog" className="block py-1.5 text-sm hover:text-ocean" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                </div>
              )}
            </div>

            <Link to="/a-propos" className="block py-2 text-sm font-medium text-foreground hover:text-ocean" onClick={() => setIsMenuOpen(false)}>
              À propos
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
