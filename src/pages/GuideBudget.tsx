import { ArrowLeft, Backpack, DollarSign, PiggyBank, Calculator, Search, Shield, Hotel, ExternalLink, Compass, HelpCircle, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const GuideBudget = () => {
  const faqs = [
    { q: "Quel budget prévoir pour un voyage en Asie du Sud-Est ?", a: "Comptez 25-40€/jour en mode backpacker (auberge, street food, transports locaux), 50-80€/jour en confort moyen (hôtel 3*, restaurants, quelques excursions) et 100-150€/jour en confort (hôtel 4*, restaurants gastronomiques, activités premium). Le Vietnam et le Cambodge sont les moins chers, la Thaïlande et Bali légèrement plus chers." },
    { q: "Comment éviter les frais bancaires à l'étranger ?", a: "Utilisez une carte Revolut ou Wise pour 0% de frais de change. Aux distributeurs, refusez toujours la conversion en euros (Dynamic Currency Conversion) et choisissez la devise locale. Prévenez votre banque de votre voyage pour éviter les blocages." },
    { q: "Faut-il tout budgéter à l'avance ?", a: "Prévoyez un budget global avec des enveloppes par catégorie (transport 35%, hébergement 30%, nourriture 20%, activités 10%, imprévus 5%). Utilisez Trail Wallet ou Splitwise sur place pour suivre vos dépenses en temps réel et ajuster si nécessaire." },
    { q: "Voyage en basse saison : est-ce vraiment moins cher ?", a: "Oui, les économies sont significatives : 30-50% sur les vols, 20-40% sur les hébergements, et des sites touristiques moins bondés. L'inconvénient est le risque météo, mais la « shoulder season » (saison intermédiaire) offre le meilleur compromis." },
    { q: "Comment gérer son budget en couple vs en solo ?", a: "En couple, vous économisez sur l'hébergement (chambre double vs dortoir), les taxis et les entrées groupées. En solo, vous êtes plus flexible et dépensez moins en restauration. Utilisez Splitwise en couple pour un suivi transparent des dépenses partagées." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide Budget Voyage 2025 – Économiser et Planifier"
        description="Guide complet pour gérer votre budget voyage : répartition des dépenses, astuces d'économie, outils de suivi et conseils pour voyager moins cher en 2025."
        url="/guides/budget"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Guide Budget Voyage", url: "/guides/budget" },
        ]}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12 pt-24">
        <Link to="/guides" className="inline-flex items-center text-ocean hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux guides
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
              <Backpack className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Guide Budget Voyage 2025
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Le budget est souvent la première préoccupation des voyageurs. Ce guide complet vous aide à planifier, optimiser et suivre vos dépenses pour profiter au maximum de votre voyage sans vous ruiner. Des astuces concrètes testées sur des dizaines de destinations.
            </p>
          </div>

          {/* Section 1 */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-ocean" />
              Établir son budget voyage
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Un budget bien planifié est la clé d'un voyage réussi. Voici la répartition recommandée et les plateformes pour optimiser chaque poste :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Transport (30-40%) :</strong> Comparez systématiquement sur Skyscanner et Google Flights pour les vols, Omio pour les trains et bus en Europe. Les vols représentent souvent le poste le plus important.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Hébergement (25-35%) :</strong> Booking.com pour comparer hôtels et appartements, Hostelworld pour les auberges, Agoda pour l'Asie. Réservez avec annulation gratuite pour garder de la flexibilité.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Nourriture (15-25%) :</strong> Mangez local dans les marchés et restaurants de quartier. La street food en Asie coûte 1-3€ par repas. En Europe, les menus du midi offrent un excellent rapport qualité-prix.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Activités (10-15%) :</strong> Réservez sur GetYourGuide ou Civitatis — souvent moins cher que sur place. Profitez des free tours et des jours d'entrée gratuite dans les musées.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Assurance (3-5%) :</strong> Indispensable. Chapka ou Heymondo proposent des formules complètes à partir de 32€/mois. Ne partez jamais sans couverture médicale.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Imprévus (10%) :</strong> Gardez toujours une réserve pour les urgences, les opportunités de dernière minute et les petits plaisirs spontanés.</span></li>
              </ul>
            </div>
          </Card>

          {/* Section 2 */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <PiggyBank className="w-6 h-6 mr-2 text-ocean" />
              Astuces pour économiser
            </h2>
            <div className="space-y-6 text-muted-foreground">
              {[
                { title: "Transport", items: [
                  "Réservez vos vols 2-3 mois à l'avance — activez les alertes prix sur Skyscanner pour être notifié des baisses",
                  "Utilisez Google Flights pour visualiser les dates les moins chères sur un calendrier mensuel",
                  "Privilégiez les vols avec escale — souvent 30-50% moins cher que les vols directs",
                  "Voyagez en basse saison — les économies peuvent atteindre 40% sur l'ensemble du séjour",
                  "Considérez les vols open-jaw (arrivée dans une ville, départ d'une autre) pour éviter les détours"
                ]},
                { title: "Hébergement", items: [
                  "Auberges de jeunesse en dortoir — Hostelworld propose les meilleures options avec avis vérifiés",
                  "Couchsurfing pour loger gratuitement et rencontrer des locaux — expérience humaine garantie",
                  "Logements avec cuisine sur Booking.com — cuisiner soi-même économise 30% sur la nourriture",
                  "Échangez votre maison avec HomeExchange — logement gratuit dans 130 pays"
                ]},
                { title: "Nourriture", items: [
                  "Mangez dans les marchés locaux — authentique et 3x moins cher que les restaurants touristiques",
                  "Privilégiez la street food — consultez nos guides gastronomiques par pays pour les meilleurs spots",
                  "En Europe, profitez des menus du midi (menu del día en Espagne, pranzo en Italie, formule midi en France)"
                ]},
                { title: "Argent et paiements", items: [
                  "Carte Revolut ou N26 : 0% de frais de change à l'étranger — économisez 3-5% sur chaque transaction",
                  "Wise (TransferWise) : virements internationaux au taux réel, carte multi-devises incluse",
                  "Aux distributeurs, refusez toujours la conversion en euros — choisissez la devise locale pour le vrai taux"
                ]}
              ].map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
                  <ul className="space-y-2 ml-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* Section 3: Outils */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Calculator className="w-6 h-6 mr-2 text-ocean" />
              Outils et applications de suivi
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Suivez vos dépenses en temps réel pour ne jamais dépasser votre budget :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Trail Wallet :</strong> Application mobile pour suivre vos dépenses par catégorie avec conversion automatique des devises</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>XE Currency :</strong> Convertisseur de devises offline — indispensable pour négocier dans les marchés locaux</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Budget Your Trip :</strong> Estimations de coûts détaillées par destination, par jour et par style de voyage</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Splitwise :</strong> Partage des dépenses entre amis ou en couple — synchronisation automatique et règlement simplifié</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Notre Budget Tracker :</strong> <Link to="/guide-gratuit" className="text-ocean hover:underline">Template gratuit prêt à l'emploi dans notre guide</Link></span></li>
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
                    { name: "Skyscanner", desc: "Le comparateur le plus complet — alertes de prix et recherche par mois entier", url: "https://www.skyscanner.fr", badge: "Recommandé" },
                    { name: "Google Flights", desc: "Carte des prix interactive et suivi des tendances tarifaires en temps réel", url: "https://www.google.com/travel/flights" },
                    { name: "Kayak", desc: "Prédictions de prix fiables : vous dit quand réserver au meilleur moment", url: "https://www.kayak.fr" },
                    { name: "Momondo", desc: "Comparateur malin incluant les combinaisons multi-compagnies pour des prix imbattables", url: "https://www.momondo.fr" }
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
                    { name: "Booking.com", desc: "Le plus grand choix d'hébergements, annulation gratuite sur la plupart des offres", url: "https://www.booking.com/?aid=2311236", badge: "Partenaire" },
                    { name: "Hostelworld", desc: "Spécialiste des auberges de jeunesse dans le monde entier, avis vérifiés", url: "https://www.hostelworld.com" },
                    { name: "Agoda", desc: "Meilleurs prix en Asie du Sud-Est, promotions quotidiennes exclusives", url: "https://www.agoda.com" },
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
                  <CreditCard className="w-5 h-5 mr-2 text-ocean" />
                  Cartes bancaires voyage et assurance
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "Revolut", desc: "Carte sans frais de change, retraits gratuits à l'étranger, blocage/déblocage instantané", url: "https://www.revolut.com", badge: "Essentiel" },
                    { name: "Wise", desc: "Carte multi-devises au taux réel — idéale pour les voyageurs fréquents et les nomades", url: "https://www.wise.com" },
                    { name: "Chapka Assurance", desc: "Assurance voyage complète à partir de 32€/mois — couverture médicale, rapatriement, bagages", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
                    { name: "Heymondo", desc: "Assurance voyage avec app mobile intuitive et assistance 24/7 en plusieurs langues", url: "https://www.heymondo.fr" }
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

          {/* FAQ */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-6 flex items-center">
              <HelpCircle className="w-6 h-6 mr-2 text-ocean" />
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-medium text-foreground">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Internal Links */}
          <Card className="p-8 bg-muted/20">
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
                { label: "Guide Vols et Transport", url: "/guides/vol" },
                { label: "Guide Sécurité et Assurance", url: "/guides/securite" },
                { label: "Guide Planification Voyage", url: "/guides/planification" },
                { label: "Bons Plans Hébergement", url: "/bons-plans/hebergement" },
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
