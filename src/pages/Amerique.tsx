import React, { useState, useMemo } from "react";
import { MapPin, Clock, Star, Users, ArrowLeft, Loader2, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // TabsContent n'est pas utilisé ici
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

// --- Importations d'Images ---
import usaImg from "@/assets/destinations/usa.jpg";
import canadaImg from "@/assets/destinations/canada.jpg";
import mexicoImg from "@/assets/destinations/mexique.jpg";
import peruImg from "@/assets/destinations/perou.jpg";
import brazilImg from "@/assets/destinations/bresil.jpg";
import argentinaImg from "@/assets/destinations/argentine.jpg";
import chileImg from "@/assets/destinations/chili.jpg";
import colombiaImg from "@/assets/destinations/colombie.jpg";

// --- Interface pour la clarté TypeScript ---
interface Destination {
  id: number;
  name: string;
  slug: string;
  region: string;
  image: string;
  description: string;
  duration: string;
  budget: string;
  highlights: string[];
  bestTime: string;
  difficulty: string;
}

// --- Composant Répétitif Externalisé pour la Lisibilité ---
interface InfoItemProps {
  Icon: LucideIcon;
  iconColor: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ Icon, iconColor, value }) => (
  <div className="flex items-center gap-2">
    <Icon className={`h-4 w-4 ${iconColor}`} aria-hidden="true" />
    <span className="text-gray-600">{value}</span>
  </div>
);

// --- Fonctions de Données Externalisées (Optimisation) ---
const getDestinationData = (t: (key: string, options?: any) => any, key: string) => {
  return {
    description: t(`destinations:${key}.description`),
    duration: t(`destinations:${key}.duration`),
    budget: t(`destinations:${key}.budget`),
    highlights: t(`destinations:${key}.highlights`, {
      returnObjects: true,
    }) as string[],
    bestTime: t(`destinations:${key}.bestTime`),
    difficulty: t(`destinations:${key}.difficulty`),
  };
};

const Amerique = () => {
  const { t } = useTranslation();
  // Utilisation de 'all' comme onglet par défaut pour afficher toutes les destinations
  const [activeTab, setActiveTab] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // --- 1. Création des destinations dans un useMemo (performance) ---
  const destinations: Destination[] = useMemo(
    () => [
      {
        id: 1,
        name: t("countries.usa"),
        slug: "usa",
        region: t("regions.northAmerica"),
        image: usaImg,
        ...getDestinationData(t, "usa"),
      },
      {
        id: 2,
        name: t("countries.canada"),
        slug: "canada",
        region: t("regions.northAmerica"),
        image: canadaImg,
        ...getDestinationData(t, "canada"),
      },
      {
        id: 3,
        name: t("countries.mexico"),
        slug: "mexique",
        region: t("regions.centralAmerica"),
        image: mexicoImg,
        ...getDestinationData(t, "mexico"),
      },
      {
        id: 4,
        name: t("countries.peru"),
        slug: "perou",
        region: t("regions.southAmerica"),
        image: peruImg,
        ...getDestinationData(t, "peru"),
      },
      {
        id: 5,
        name: t("countries.brazil"),
        slug: "bresil",
        region: t("regions.southAmerica"),
        image: brazilImg,
        ...getDestinationData(t, "brazil"),
      },
      {
        id: 6,
        name: t("countries.argentina"),
        slug: "argentine",
        region: t("regions.southAmerica"),
        image: argentinaImg,
        ...getDestinationData(t, "argentina"),
      },
      {
        id: 7,
        name: t("countries.chile"),
        slug: "chili",
        region: t("regions.southAmerica"),
        image: chileImg,
        ...getDestinationData(t, "chile"),
      },
      {
        id: 8,
        name: t("countries.colombia"),
        slug: "colombie",
        region: t("regions.southAmerica"),
        image: colombiaImg,
        ...getDestinationData(t, "colombia"),
      },
    ],
    [t]
  ); // Dépendance à 't' pour que la liste se mette à jour si la langue change

  // --- 2. Logique de Filtrage ---
  const filteredDestinations = useMemo(() => {
    if (activeTab === "all") {
      return destinations;
    }
    return destinations.filter((d) => d.region === activeTab);
  }, [destinations, activeTab]);

  // Récupérer les régions uniques pour les onglets
  const regions = useMemo(() => {
    const uniqueRegions = Array.from(new Set(destinations.map((d) => d.region)));
    return [
      { value: "all", label: t("amerique.allRegions") },
      ...uniqueRegions.map((region) => ({ value: region, label: region })),
    ];
  }, [destinations, t]);

  // Simuler le changement d'onglet avec un chargement léger pour l'UX
  const handleTabChange = (value: string) => {
    setIsLoading(true);
    setActiveTab(value);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      <SEO 
        title="Voyage en Amérique 2026 : Destinations, Budget & Itinéraires"
        description="Guide complet pour voyager en Amérique en 2026 : USA, Canada, Mexique, Pérou, Brésil, Argentine. Budgets détaillés, meilleures périodes, itinéraires et conseils pratiques."
        url="/amerique"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Destinations", url: "/destinations" },
          { name: "Amérique", url: "/amerique" },
        ]}
      />
      <div className="min-h-screen flex flex-col">
        <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-white py-20" aria-labelledby="hero-title">
          <div className="container mx-auto px-4">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors font-medium"
              aria-label={t("amerique.backToDestinations")}
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              {t("amerique.backToDestinations")}
            </Link>
            <div className="text-center">
              <h1 id="hero-title" className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                {t("amerique.title")}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">{t("amerique.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation (Amélioré : Filtres de Région) */}
        <section className="py-8 border-b border-gray-100 bg-white shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">{t("amerique.filterDestinations")}</h2> {/* Titre pour l'accessibilité */}
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="mx-auto w-full md:w-auto flex justify-center flex-wrap h-auto p-1 bg-gray-50">
                {regions.map((region) => (
                  <TabsTrigger
                    key={region.value}
                    value={region.value}
                    className="flex-1 sm:flex-none data-[state=active]:bg-ocean data-[state=active]:text-white transition-colors duration-200 font-medium px-4"
                  >
                    {region.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {isLoading ? (
              // Affichage du chargement pendant le filtrage
              <div className="flex justify-center items-center h-40">
                <Loader2 className="h-8 w-8 text-ocean animate-spin" aria-label={t("common.loading")} />
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredDestinations.length > 0 ? (
                  filteredDestinations.map((destination) => (
                    <Card
                      key={destination.id}
                      className="group overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="aspect-video overflow-hidden">
                        {/* 3. Amélioration de l'Image (Lazy Loading) */}
                        <img
                          src={destination.image}
                          alt={t("destinations.imageAlt", { country: destination.name })}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-elegant text-gray-800">{destination.name}</CardTitle>
                          <Badge variant="secondary" className="bg-sand text-ocean font-medium text-xs">
                            {destination.region}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm line-clamp-2">{destination.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-4">
                          {/* Infos pratiques (Utilisation du composant InfoItem) */}
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <InfoItem Icon={Clock} iconColor="text-ocean" value={destination.duration} />
                            <InfoItem Icon={Star} iconColor="text-sunset" value={destination.budget} />
                            <InfoItem
                              Icon={Users}
                              iconColor="text-ocean"
                              value={t(`destinations.${destination.difficulty.toLowerCase()}`)}
                            />
                            <InfoItem Icon={MapPin} iconColor="text-sunset" value={destination.bestTime} />
                          </div>

                          {/* Points forts */}
                          <div>
                            <h4 className="font-semibold mb-2 text-sm text-gray-700">
                              {t("destinations.highlights")} :
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {destination.highlights.map((highlight, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs border-ocean/50 text-ocean bg-ocean/5"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <Button className="w-full mt-4 bg-ocean hover:bg-ocean/90" asChild>
                            <Link to={`/destinations/${destination.slug}`}>
                              {t("destinations.discover")} {destination.name}
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="col-span-full text-center text-lg text-gray-600 p-10">
                    {t("amerique.noDestinationsFound")}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ============= CONTENU SEO ENRICHI ============= */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-elegant font-bold text-ocean mb-6">
              Voyage en Amérique : le guide complet 2026
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Le <strong>continent américain</strong> est l'un des plus vastes et diversifiés au monde : des parcs nationaux des États-Unis aux glaciers de Patagonie, des plages caribéennes du Mexique aux sommets andins du Pérou, en passant par la jungle amazonienne brésilienne. Avec <strong>35 pays</strong> répartis sur deux sous-continents (Amérique du Nord, Amérique centrale et Amérique du Sud), choisir une destination peut vite devenir vertigineux. Ce guide synthétise tout ce qu'il faut savoir pour <strong>organiser un voyage en Amérique en 2026</strong> : budget, meilleure période, formalités, itinéraires conseillés et erreurs à éviter.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              En 2026, les destinations américaines reviennent en force après plusieurs années perturbées : les vols transatlantiques se stabilisent (à condition de réserver tôt), les visas restent globalement accessibles aux Français, et le dollar fluctue dans une fourchette qui rend certaines destinations très attractives (Argentine, Mexique, Colombie particulièrement). Que vous prépariez votre <strong>premier road trip aux USA</strong>, un <strong>trek au Machu Picchu</strong>, une <strong>traversée de la Patagonie</strong> ou une découverte des plages mexicaines, vous trouverez dans ce hub toutes les ressources nécessaires.
            </p>

            <h3 className="text-2xl font-bold text-ocean mt-10 mb-4">Pourquoi voyager en Amérique en 2026 ?</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Diversité de paysages exceptionnelle</strong> : du désert d'Atacama (Chili) — l'endroit le plus aride du monde — aux glaciers du parc Torres del Paine, en passant par les chutes d'Iguazu, le Grand Canyon, l'Amazonie ou les volcans mexicains.</li>
              <li><strong>Patrimoine culturel millénaire</strong> : civilisations précolombiennes (Aztèques, Mayas, Incas), histoire coloniale espagnole et portugaise, métropoles ultra-modernes (New York, São Paulo, Buenos Aires).</li>
              <li><strong>Rapport qualité-prix très variable</strong> : l'Amérique latine (Pérou, Bolivie, Colombie, Mexique) propose un coût de la vie 2 à 4× inférieur à l'Europe, tandis que l'Amérique du Nord (USA, Canada) reste haut de gamme.</li>
              <li><strong>Accessibilité linguistique</strong> : l'anglais et l'espagnol couvrent la quasi-totalité du continent, avec une communauté francophone significative au Québec.</li>
            </ul>

            <h3 className="text-2xl font-bold text-ocean mt-10 mb-4">Top 8 des destinations à privilégier</h3>
            <ol className="space-y-3 text-gray-700">
              <li><Link to="/destinations/perou" className="text-ocean font-semibold hover:underline">Pérou</Link> — Machu Picchu, Cusco, Vallée Sacrée, lac Titicaca. <strong>Budget 35-50 €/jour.</strong> Idéal pour un premier voyage en Amérique du Sud.</li>
              <li><Link to="/destinations/mexique" className="text-ocean font-semibold hover:underline">Mexique</Link> — Yucatán, Mexico, Oaxaca, plages de la Riviera Maya. <strong>40-60 €/jour</strong>, vols souvent abordables.</li>
              <li><Link to="/destinations/argentine" className="text-ocean font-semibold hover:underline">Argentine</Link> — Buenos Aires, Patagonie, Mendoza, chutes d'Iguazu. <strong>50-80 €/jour</strong> (peso très favorable au change).</li>
              <li><Link to="/destinations/usa" className="text-ocean font-semibold hover:underline">États-Unis</Link> — Road trip Ouest américain, Côte Est, parcs nationaux. <strong>100-180 €/jour</strong>, expérience iconique.</li>
              <li><Link to="/destinations/canada" className="text-ocean font-semibold hover:underline">Canada</Link> — Rocheuses, Québec, Vancouver, Banff. <strong>120-180 €/jour</strong>, nature préservée.</li>
              <li><Link to="/destinations/colombie" className="text-ocean font-semibold hover:underline">Colombie</Link> — Cartagena, Medellín, café et plages. <strong>30-50 €/jour</strong>, destination émergente.</li>
              <li><Link to="/destinations/bresil" className="text-ocean font-semibold hover:underline">Brésil</Link> — Rio, Amazonie, Salvador de Bahia, Iguazu. <strong>50-80 €/jour</strong>, immense diversité.</li>
              <li><Link to="/destinations/chili" className="text-ocean font-semibold hover:underline">Chili</Link> — Atacama, Patagonie, île de Pâques. <strong>60-90 €/jour</strong>, paysages extrêmes.</li>
            </ol>

            <h3 className="text-2xl font-bold text-ocean mt-10 mb-4">Budget moyen pour un voyage en Amérique (2026)</h3>
            <p className="text-gray-700 mb-4">Le budget varie radicalement selon la zone géographique. Voici une grille de référence pour 2 personnes, hors vol international :</p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-ocean text-white">
                  <tr>
                    <th className="p-3 text-left">Zone</th>
                    <th className="p-3 text-left">Hébergement (nuit)</th>
                    <th className="p-3 text-left">Repas (jour)</th>
                    <th className="p-3 text-left">Budget total/jour/pers</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b"><td className="p-3 font-semibold">Amérique du Nord (USA/Canada)</td><td className="p-3">90-180 €</td><td className="p-3">40-70 €</td><td className="p-3 text-ocean font-bold">120-180 €</td></tr>
                  <tr className="border-b bg-sand/30"><td className="p-3 font-semibold">Mexique & Caraïbes</td><td className="p-3">30-70 €</td><td className="p-3">15-30 €</td><td className="p-3 text-ocean font-bold">40-70 €</td></tr>
                  <tr className="border-b"><td className="p-3 font-semibold">Andins (Pérou, Bolivie, Équateur)</td><td className="p-3">20-50 €</td><td className="p-3">10-20 €</td><td className="p-3 text-ocean font-bold">30-50 €</td></tr>
                  <tr className="border-b bg-sand/30"><td className="p-3 font-semibold">Cône Sud (Argentine, Chili, Uruguay)</td><td className="p-3">40-90 €</td><td className="p-3">20-40 €</td><td className="p-3 text-ocean font-bold">60-100 €</td></tr>
                  <tr><td className="p-3 font-semibold">Brésil, Colombie</td><td className="p-3">30-70 €</td><td className="p-3">15-30 €</td><td className="p-3 text-ocean font-bold">50-80 €</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700"><strong>Vol international Paris ↔ Amérique en 2026 :</strong> 600-900 € pour Amérique du Nord, 800-1 400 € pour Amérique du Sud (anticipez 4-6 mois pour les meilleurs tarifs). Le pic est juin-août et fin décembre.</p>

            <h3 className="text-2xl font-bold text-ocean mt-10 mb-4">Quand partir en Amérique ?</h3>
            <p className="text-gray-700 mb-4">
              L'hémisphère nord et sud étant inversés, on peut voyager toute l'année — il suffit de cibler la bonne région :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Décembre à mars :</strong> idéal pour Patagonie, Argentine, Chili, Brésil (été austral). Évitez les Caraïbes en septembre-octobre (saison des ouragans).</li>
              <li><strong>Avril à juin & septembre-octobre :</strong> meilleure période pour Pérou, Bolivie, Équateur (saison sèche andine), Mexique, USA (printemps/automne agréables).</li>
              <li><strong>Juillet-août :</strong> haute saison Amérique du Nord (chaud mais affluence). Bonne période pour Pérou & Galápagos. À éviter au Brésil (hiver pluvieux).</li>
            </ul>

            <h3 className="text-2xl font-bold text-ocean mt-10 mb-4">Formalités essentielles pour les Français</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>USA :</strong> ESTA obligatoire (21 $, validité 2 ans), passeport biométrique. Demande à faire <em>au moins 72 h avant le départ</em>.</li>
              <li><strong>Canada :</strong> AVE en ligne (7 CAD), valable 5 ans.</li>
              <li><strong>Mexique, Pérou, Argentine, Chili, Colombie, Brésil, Équateur :</strong> aucun visa pour séjour touristique &lt; 90 jours, passeport valide 6 mois après retour.</li>
              <li><strong>Vaccins recommandés :</strong> mise à jour DTP, hépatite A. Fièvre jaune obligatoire pour Amazonie (Brésil, Pérou, Bolivie, Colombie).</li>
              <li><strong>Assurance voyage :</strong> indispensable, notamment aux USA où les frais médicaux sont astronomiques. Privilégiez une couverture rapatriement <strong>500 000 € minimum</strong>.</li>
            </ul>

            <h3 className="text-2xl font-bold text-ocean mt-10 mb-4">Conseils pratiques d'un voyageur expert</h3>
            <div className="bg-ocean/5 border-l-4 border-ocean p-6 rounded-r-lg my-6">
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li><strong>Réservez vos vols longs courriers 4-6 mois à l'avance</strong> : c'est le poste budgétaire le plus volatile. Utilisez Google Flights + Skyscanner en mode "dates flexibles".</li>
                <li><strong>Privilégiez les vols multi-destinations</strong> (open-jaw) : arrivez à Lima, repartez de La Paz — plus économique qu'un aller-retour.</li>
                <li><strong>Adaptez-vous à l'altitude</strong> en Pérou et Bolivie : prévoyez 2-3 jours d'acclimatation à Cusco (3 400 m) avant le Machu Picchu. Mâchez de la feuille de coca, hydratez-vous massivement.</li>
                <li><strong>Argent liquide en USD</strong> reste roi en Amérique latine (notamment Argentine pour profiter du "dólar blue").</li>
                <li><strong>Évitez de tout vouloir voir</strong> : un seul pays bien exploré vaut mieux que 3 survolés. Les distances sont énormes (4 000 km Mexico ↔ Patagonie).</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold text-ocean mt-10 mb-4">Erreurs à éviter</h3>
            <ul className="space-y-2 text-gray-700">
              <li>❌ <strong>Sous-estimer les temps de trajet</strong> : un bus de nuit en Argentine peut faire 20 h. Mixez avec des vols intérieurs (souvent abordables).</li>
              <li>❌ <strong>Négliger l'assurance aux USA</strong> : une simple consultation aux urgences coûte 2 000-5 000 €.</li>
              <li>❌ <strong>Voyager en haute saison sans réserver</strong> : Patagonie en janvier, Machu Picchu en juillet — réservez 3 mois avant minimum.</li>
              <li>❌ <strong>Ignorer la saison des pluies</strong> en Amazonie ou aux Caraïbes : certaines routes deviennent impraticables, certains lodges ferment.</li>
              <li>❌ <strong>Sortir des sentiers battus sans préparation</strong> : Venezuela, certaines zones du Mexique (Sinaloa), favelas brésiliennes — renseignez-vous toujours sur le <a href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" rel="noopener" target="_blank" className="text-ocean underline">site France Diplomatie</a>.</li>
            </ul>

            <h3 className="text-2xl font-bold text-ocean mt-10 mb-4">Ressources complémentaires</h3>
            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                { label: "🌍 Toutes les destinations", url: "/destinations" },
                { label: "💰 Méthode budget voyage", url: "/guides/budget-voyage" },
                { label: "🗓️ Planifier son voyage de A à Z", url: "/guides/preparer-voyage" },
                { label: "🧳 Que mettre dans sa valise", url: "/guides/que-mettre-valise" },
                { label: "🛡️ Guide assurance voyage", url: "/guides/securite" },
                { label: "✈️ Bons plans vols", url: "/bons-plans/vols" },
                { label: "🏨 Bons plans hébergement", url: "/bons-plans/hebergement" },
                { label: "🧮 Planificateur de budget", url: "/planificateur-budget" },
              ].map((l) => (
                <Link key={l.url} to={l.url} className="flex items-center gap-2 p-3 rounded-md bg-sand/50 hover:bg-ocean/10 hover:text-ocean transition-colors text-gray-700">
                  <span className="font-medium">{l.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ avec JSON-LD auto */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <FAQSection faqs={[
              { question: "Quel est le meilleur pays d'Amérique pour un premier voyage ?", answer: "Le Pérou et le Mexique sont les destinations les plus recommandées pour un premier voyage. Le Pérou offre un patrimoine exceptionnel (Machu Picchu, Cusco, lac Titicaca) avec un budget modéré (35-50 €/jour). Le Mexique combine plages, culture maya et gastronomie pour 40-60 €/jour. Les deux ne demandent pas de visa et restent globalement sûrs sur les zones touristiques classiques." },
              { question: "Combien coûte un voyage de 3 semaines en Amérique du Sud ?", answer: "Pour 3 semaines en Amérique du Sud (vol Paris compris), comptez 2 500 à 3 500 € par personne en mode confort moyen (vol 1 000 €, sur place 50-60 €/jour x 21 jours, vols internes 200-300 €). En mode backpacker, il est possible de descendre à 1 800-2 200 €." },
              { question: "Quand partir en Amérique du Sud ?", answer: "Décembre à mars pour la Patagonie, l'Argentine et le Chili (été austral). Avril à octobre pour le Pérou, la Bolivie et l'Équateur (saison sèche andine). Mai à septembre pour le Brésil (hiver sec). Évitez septembre-octobre dans les Caraïbes (saison cyclonique)." },
              { question: "Faut-il un visa pour voyager aux États-Unis depuis la France ?", answer: "Non, pas de visa pour un séjour touristique de moins de 90 jours, mais l'ESTA est obligatoire (21 $, validité 2 ans, à demander au moins 72 h avant le départ). Passeport biométrique exigé." },
              { question: "Quelle assurance voyage choisir pour l'Amérique ?", answer: "Pour les USA et le Canada, une couverture frais médicaux d'au moins 500 000 € est indispensable (un séjour aux urgences peut coûter plus de 10 000 €). Chapka Cap Aventure et ACS sont les références. Pour l'Amérique latine, une assurance classique avec rapatriement convient." },
              { question: "Quelle est la durée idéale pour un voyage en Amérique du Sud ?", answer: "Minimum 3 semaines pour un seul pays (Pérou, Argentine ou Brésil), 4 à 6 semaines pour combiner 2 pays voisins (Pérou + Bolivie, Argentine + Chili). Pour un tour du continent (Mexique → Patagonie), comptez 3 à 6 mois avec billet tour du monde." },
              { question: "Le Mexique est-il dangereux pour les touristes ?", answer: "Les zones touristiques classiques (Yucatán, Riviera Maya, Mexico DF centre, Oaxaca, San Cristóbal) sont sûres. Évitez les états frontaliers nord (Tamaulipas, Sinaloa, Guerrero hors Acapulco). Respectez les recommandations France Diplomatie et évitez d'afficher des signes extérieurs de richesse." },
              { question: "Comment se déplacer en Amérique latine sans se ruiner ?", answer: "Les bus longue distance sont le mode de transport roi : confortables, économiques et sûrs (Cruz del Sur au Pérou, Cama au Brésil/Argentine). Pour les longues distances (Lima → Cusco, Buenos Aires → Bariloche), les vols intérieurs sont souvent compétitifs si réservés 2 mois à l'avance (LATAM, GOL, Sky Airline)." },
            ]} />
          </div>
        </section>

        {/* CTA Newsletter */}
        <section className="py-16 bg-gradient-sand">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-elegant font-bold mb-4 text-gray-800">{t("destinations.newsletter.title")}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t("destinations.newsletter.desc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("destinations.newsletter.placeholder")}
                className="flex-1 px-4 py-3 rounded-lg border border-sand-dark focus:outline-none focus:ring-2 focus:ring-ocean"
                aria-label={t("destinations.newsletter.placeholder")}
              />
              <Button className="px-8 bg-ocean hover:bg-ocean/90">{t("destinations.newsletter.btn")}</Button>
            </div>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </>
  );
};
export default Amerique;
