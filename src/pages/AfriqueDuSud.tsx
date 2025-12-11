import React from "react";
import { MapPin, Clock, DollarSign, Users, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import manquant dans le code initial
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- Importations d'Images : Utilisation des imports fonctionnels ---
import southAfricaHero from "@/assets/destinations/afrique-du-sud.jpg";
import capeTownImg from "@/assets/cities/cape-town.jpg";

// =================================================================
// --- 1. Composant Utilitaire : Info Item pour Infos Pratiques ---
// Rendu dynamique et réutilisable pour la section 'practical'
// =================================================================
interface InfoItemProps {
  Icon: LucideIcon;
  title: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ Icon, title, value }) => (
  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
    <Icon className="h-5 w-5 text-ocean flex-shrink-0 mt-1" aria-hidden="true" />
    <div>
      <p className="font-semibold text-gray-800">{title}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  </div>
);

// =================================================================
// --- 2. Composant Principal et Données (Maintenabilité) ---
// Les données sont ici pour la démonstration, mais devraient idéalement
// provenir d'un hook ou d'un fichier JSON/TS externe.
// =================================================================

const AfriqueDuSud = () => {
  const { t } = useTranslation();

  // --- Données Statiques (Utilisent capeTownImg pour toutes les villes pour éviter l'erreur de compilation) ---
  const cities = [
    {
      name: "Le Cap",
      region: "Western Cape",
      description: "Ville cosmopolite nichée entre montagne et océan, capitale du vin et du design.",
      highlights: ["Table Mountain", "V&A Waterfront", "Cap de Bonne-Espérance", "Vignobles"],
      duration: "3-4 jours",
      image: capeTownImg,
    },
    {
      name: "Parc Kruger",
      region: "Mpumalanga",
      description: "Parc emblématique pour observer les Big Five dans leur habitat naturel.",
      highlights: ["Big Five", "Safaris", "Lodges de luxe", "Panorama Route"],
      duration: "3-4 jours",
      image: capeTownImg,
    }, // Utilise capeTownImg
    {
      name: "Garden Route",
      region: "Côte Sud",
      description: "Route panoramique le long de la côte avec forêts, plages et lagons.",
      highlights: ["Knysna", "Plettenberg Bay", "Tsitsikamma", "Observation des baleines"],
      duration: "4-5 jours",
      image: capeTownImg,
    }, // Utilise capeTownImg
    {
      name: "Johannesburg",
      region: "Gauteng",
      description: "Métropole vibrante, centre économique et culturel du pays.",
      highlights: ["Soweto", "Apartheid Museum", "Maboneng", "Arts & Culture"],
      duration: "1-2 jours",
      image: capeTownImg,
    }, // Utilise capeTownImg
  ];

  const itineraries = [
    {
      duration: "12 jours",
      title: "Le Cap & Safari",
      description: "Le meilleur des deux mondes : ville, nature, et faune sauvage.",
      stops: ["Le Cap", "Winelands", "Garden Route", "Parc Kruger"],
      budget: "€€€",
    },
    {
      duration: "15 jours",
      title: "Afrique du Sud Complète",
      description: "Le grand tour du pays arc-en-ciel, des côtes aux montagnes.",
      stops: ["Le Cap", "Garden Route", "Addo", "Durban", "Drakensberg", "Kruger"],
      budget: "€€€€",
    },
    {
      duration: "8 jours",
      title: "Safari & Vignobles",
      description: "Une combinaison parfaite entre nature sauvage et gastronomie.",
      stops: ["Johannesburg", "Parc Kruger", "Le Cap", "Stellenbosch"],
      budget: "€€€",
    },
  ];

  const practicalInfoData = [
    { Icon: MapPin, title: t("practicalInfo.visa.title"), value: "Pas de visa pour séjours < 90 jours (UE/CH/CA)" },
    { Icon: DollarSign, title: t("practicalInfo.currency.title"), value: "Rand sud-africain (ZAR)" },
    { Icon: DollarSign, title: t("practicalInfo.budget.title"), value: "60-150€/jour (selon le type de voyage)" },
    {
      Icon: Users,
      title: t("practicalInfo.language.title"),
      value: "11 langues officielles (anglais et afrikaans largement parlés)",
    },
    {
      Icon: Clock,
      title: t("practicalInfo.climate.title"),
      value: "Meilleure période : octobre-avril (été austral), mais safaris excellents toute l'année.",
    },
    {
      Icon: MapPin,
      title: t("practicalInfo.transport.title"),
      value: "Voiture de location recommandée, vols intérieurs pour les longues distances.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section (Amélioration SEO/Sémantique) */}
        <header
          className="relative h-[550px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${southAfricaHero})`,
          }}
          aria-labelledby="hero-title"
        >
          {/* Sémantique: Ajout de `aria-label` et `loading="eager"` pour l'image de héros */}
          <div
            className="absolute inset-0 z-0"
            aria-hidden="true"
            style={{
              backgroundImage: `url(${southAfricaHero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="text-white max-w-3xl">
              <h1 id="hero-title" className="text-5xl md:text-7xl font-elegant font-extrabold mb-6 drop-shadow-lg">
                {t("southAfrica.title")}
              </h1>
              <p className="text-xl md:text-2xl mb-8 drop-shadow">{t("southAfrica.subtitle")}</p>
              <Link to="/afrique">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-3 shadow-md hover:bg-gray-100">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {t("southAfrica.backToAfrica")}
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Tabs Section */}
        <section className="py-12 bg-white">
          <Tabs defaultValue="cities" className="container mx-auto px-4">
            <h2 className="sr-only">
              {t("southAfrica.title")} - {t("southAfrica.tabs.cities")}
            </h2>

            <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto mb-12 bg-gray-50 p-1 h-auto">
              <TabsTrigger
                value="cities"
                className="data-[state=active]:bg-ocean data-[state=active]:text-white font-medium"
              >
                {t("southAfrica.tabs.cities")}
              </TabsTrigger>
              <TabsTrigger
                value="itineraries"
                className="data-[state=active]:bg-ocean data-[state=active]:text-white font-medium"
              >
                {t("southAfrica.tabs.itineraries")}
              </TabsTrigger>
              <TabsTrigger
                value="practical"
                className="data-[state=active]:bg-ocean data-[state=active]:text-white font-medium"
              >
                {t("southAfrica.tabs.practical")}
              </TabsTrigger>
              <TabsTrigger
                value="guides"
                className="data-[state=active]:bg-ocean data-[state=active]:text-white font-medium"
              >
                {t("southAfrica.tabs.guides")}
              </TabsTrigger>
            </TabsList>

            {/* --- Villes & Régions --- */}
            <TabsContent value="cities" className="pt-4">
              <h3 className="text-3xl font-elegant font-bold mb-8 text-center text-gray-800">
                {t("southAfrica.cities.heading")}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cities.map((city, index) => (
                  <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      {/* Amélioration Image : Lazy loading et alt text */}
                      <img
                        src={city.image}
                        alt={`Vue panoramique de ${city.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-elegant text-2xl text-gray-800">{city.name}</CardTitle>
                        <Badge variant="secondary" className="text-sm bg-sand text-ocean font-medium">
                          {city.region}
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-2">{city.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Clock className="h-4 w-4 text-sunset" aria-hidden="true" />
                        <span>{city.duration}</span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-700">{t("common.mustSee")} :</p>
                        <div className="flex flex-wrap gap-1">
                          {city.highlights.map((highlight, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-ocean/50 text-ocean bg-ocean/5">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-ocean hover:bg-ocean/90" asChild>
                        <Link to={`/destinations/afrique-du-sud/${city.name.toLowerCase().replace(/ /g, "-")}`}>
                          {t("common.fullGuide")} {city.name}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* --- Itinéraires --- */}
            <TabsContent value="itineraries" className="pt-4">
              <h3 className="text-3xl font-elegant font-bold mb-8 text-center text-gray-800">
                {t("southAfrica.itineraries.heading")}
              </h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {itineraries.map((itinerary, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-shadow flex flex-col">
                    <CardHeader className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-ocean text-white font-medium">{itinerary.duration}</Badge>
                        <span className="text-2xl font-bold text-sunset">{itinerary.budget}</span>
                      </div>
                      <CardTitle className="font-elegant text-2xl text-gray-800">{itinerary.title}</CardTitle>
                      <CardDescription className="flex-grow">{itinerary.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold mb-2 text-gray-700">{t("common.stops")} :</p>
                          <ul className="space-y-1">
                            {itinerary.stops.map((stop, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin className="h-3 w-3 text-ocean flex-shrink-0" aria-hidden="true" />
                                <span>{stop}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full mt-4 bg-ocean hover:bg-ocean/90">{t("common.viewItinerary")}</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* --- Infos Pratiques --- */}
            <TabsContent value="practical" className="pt-4">
              <h3 className="text-3xl font-elegant font-bold mb-8 text-center text-gray-800">
                {t("southAfrica.practical.heading")}
              </h3>
              <Card className="max-w-4xl mx-auto shadow-xl border-t-4 border-ocean">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Utilisation du composant InfoItem et des données structurées */}
                    {practicalInfoData.map((item, index) => (
                      <InfoItem key={index} Icon={item.Icon} title={item.title} value={item.value} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* --- Nos Guides (CTA) --- */}
            <TabsContent value="guides" className="pt-4">
              <div className="text-center py-16 bg-gradient-sand rounded-xl mt-8 shadow-inner">
                <h3 className="text-3xl font-elegant font-bold mb-4 text-gray-800">
                  {t("southAfrica.guides.heading")}
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  De la préparation de votre safari aux meilleurs restaurants du Cap, nos guides vous accompagnent.
                </p>
                <Button size="lg" className="bg-sunset hover:bg-sunset/90 font-semibold text-white">
                  {t("southAfrica.guides.cta")}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AfriqueDuSud;
