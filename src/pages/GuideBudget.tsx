import { ArrowLeft, Backpack, DollarSign, PiggyBank, Calculator, Search, Shield, Hotel, Ticket, ExternalLink, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuideBudget = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Budget Voyage - Économiser et Planifier"
        description="Guide complet pour gérer votre budget voyage : astuces d'économie, outils de planification budgétaire et conseils pour voyager moins cher."
        hideH1={true}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12 pt-24">
        <Link to="/#conseils" className="inline-flex items-center text-ocean hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux conseils
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
              <Backpack className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Budget Voyage
            </h1>
            <p className="text-lg text-muted-foreground">
              Maîtrisez vos dépenses et voyagez plus pour moins cher
            </p>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-ocean" />
              Établir son budget voyage
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Un budget bien planifié est la clé d'un voyage réussi. Voici comment procéder :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Transport :</strong> Comptez 30-40% de votre budget total — comparez systématiquement sur Skyscanner ou Google Flights pour les vols, et Omio pour les trains/bus</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Hébergement :</strong> 25-35% du budget — utilisez Booking.com pour comparer hôtels et Hostelworld pour les auberges</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Nourriture :</strong> 15-25% — mangez local dans les marchés et restaurants de quartier</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Activités :</strong> 10-15% — réservez sur GetYourGuide ou Civitatis pour des excursions au meilleur prix</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Assurance :</strong> 3-5% — indispensable, Chapka ou Heymondo proposent des formules abordables</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Imprévus :</strong> 10% minimum — gardez toujours une réserve pour les urgences et opportunités</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <PiggyBank className="w-6 h-6 mr-2 text-ocean" />
              Astuces pour économiser
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Transport</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Réservez vos vols 2-3 mois à l'avance — activez les alertes prix sur Skyscanner</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Utilisez Google Flights pour visualiser les dates les moins chères sur un calendrier</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Privilégiez les vols avec escale — souvent 30-50% moins cher que les vols directs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Voyagez en basse saison — les économies peuvent atteindre 40% sur l'ensemble du séjour</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Hébergement</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Optez pour les auberges de jeunesse en dortoir — Hostelworld a les meilleures options</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Utilisez Couchsurfing pour loger gratuitement et rencontrer des locaux</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Réservez des logements avec cuisine sur Booking.com — cuisiner soi-même économise 30%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Échangez votre maison avec HomeExchange — logement gratuit dans le monde entier</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Nourriture</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Mangez dans les marchés locaux — authentique et 3x moins cher que les restaurants touristiques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Privilégiez la street food — découvrez nos guides gastronomiques par pays</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>En Europe : profitez des menus du midi (menu del día en Espagne, pranzo en Italie)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Argent et paiements</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Carte Revolut ou N26 : 0% de frais de change à l'étranger — essentiel pour économiser</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Wise (TransferWise) : virements internationaux au taux réel, sans commission cachée</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Refusez la conversion en euros aux distributeurs — choisissez toujours la devise locale</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Calculator className="w-6 h-6 mr-2 text-ocean" />
              Outils et applications recommandés
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Utilisez ces outils pour optimiser votre budget :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Trail Wallet :</strong> Application mobile pour suivre vos dépenses en temps réel par catégorie</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>XE Currency :</strong> Convertisseur de devises offline — indispensable pour négocier dans les marchés</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Budget Your Trip :</strong> Estimations de coûts détaillées par destination et par style de voyage</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Splitwise :</strong> Partage des dépenses entre amis ou en couple — synchronisation automatique</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Notre Budget Tracker :</strong> <Link to="/guide-gratuit" className="text-ocean hover:underline">Disponible dans notre guide gratuit</Link></span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Tool Recommendations */}
          <div className="mt-12 mb-8">
            <h2 className="text-3xl font-elegant font-bold text-foreground mb-8 text-center">
              🧰 Services recommandés pour économiser
            </h2>
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-xl font-elegant font-semibold text-foreground mb-6 flex items-center">
                  <Search className="w-5 h-5 mr-2 text-ocean" />
                  Comparateurs de vols
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "Skyscanner", desc: "Le comparateur le plus complet — alertes de prix et recherche par mois", url: "https://www.skyscanner.fr", badge: "Recommandé" },
                    { name: "Google Flights", desc: "Carte des prix interactive et suivi des tendances tarifaires", url: "https://www.google.com/travel/flights" },
                    { name: "Kayak", desc: "Prédictions de prix : le bon moment pour réserver", url: "https://www.kayak.fr" },
                    { name: "Momondo", desc: "Comparateur malin incluant les combinaisons multi-compagnies", url: "https://www.momondo.fr" }
                  ].map((tool, idx) => (
                    <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">{tool.name}</span>
                          {tool.badge && <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">{tool.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ocean flex-shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-elegant font-semibold text-foreground mb-6 flex items-center">
                  <Hotel className="w-5 h-5 mr-2 text-ocean" />
                  Hébergement pas cher
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "Booking.com", desc: "Le plus grand choix d'hébergements, annulation gratuite sur la plupart", url: "https://www.booking.com/?aid=2311236", badge: "Partenaire" },
                    { name: "Hostelworld", desc: "Spécialiste des auberges de jeunesse dans le monde entier", url: "https://www.hostelworld.com" },
                    { name: "Agoda", desc: "Meilleurs prix en Asie du Sud-Est, promotions fréquentes", url: "https://www.agoda.com" },
                    { name: "HomeExchange", desc: "Échange de maisons gratuit — logement sans frais dans 130 pays", url: "https://www.homeexchange.fr" }
                  ].map((tool, idx) => (
                    <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">{tool.name}</span>
                          {tool.badge && <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">{tool.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ocean flex-shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-elegant font-semibold text-foreground mb-6 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-ocean" />
                  Cartes bancaires voyage & Assurance
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "Revolut", desc: "Carte sans frais de change, retraits gratuits à l'étranger", url: "https://www.revolut.com", badge: "Essentiel" },
                    { name: "Wise", desc: "Carte multi-devises au taux réel — idéale pour les voyageurs fréquents", url: "https://www.wise.com" },
                    { name: "Chapka Assurance", desc: "Assurance voyage complète à partir de 32€/mois", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
                    { name: "Heymondo", desc: "Assurance voyage avec app mobile et assistance 24/7", url: "https://www.heymondo.fr" }
                  ].map((tool, idx) => (
                    <a key={idx} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all group">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground group-hover:text-ocean transition-colors">{tool.name}</span>
                          {tool.badge && <Badge variant="secondary" className="text-xs">{tool.badge}</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">{tool.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ocean flex-shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Certains liens sont des liens affiliés • Nous touchons une petite commission sans surcoût pour vous
                </p>
              </Card>
            </div>
          </div>

          {/* Internal Links */}
          <Card className="p-8 mb-8 bg-muted/20">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Compass className="w-6 h-6 mr-2 text-ocean" />
              À lire aussi sur Cap sur le Monde
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Budget détaillé Vietnam", url: "/guides/budget-vietnam" },
                { label: "Budget détaillé Thaïlande", url: "/guides/budget-thailande" },
                { label: "Budget détaillé Indonésie", url: "/guides/budget-indonesie" },
                { label: "Budget détaillé Cambodge", url: "/guides/budget-cambodge" },
                { label: "Guide Sécurité et Assurance", url: "/guides/securite" },
                { label: "Guide Planification Voyage", url: "/guides/planification" },
                { label: "Tous nos guides de voyage", url: "/guides" },
                { label: "Nos tests d'équipement voyage", url: "/tests" }
              ].map((link, idx) => (
                <Link key={idx} to={link.url} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-background transition-all text-foreground hover:text-ocean">
                  <span className="text-ocean">→</span>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuideBudget;
