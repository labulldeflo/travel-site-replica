import React, { useState, useMemo } from "react";
import { MapPin, Clock, Star, Users, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // TabsContent n'est pas utilisé dans cette version
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// --- Importations d'Images : Utilisez un alias si possible pour la clarté ---
import moroccoImg from "@/assets/destinations/maroc.jpg";
import egyptImg from "@/assets/destinations/egypte.jpg";
import kenyaImg from "@/assets/destinations/kenya.jpg";
import tanzaniaImg from "@/assets/destinations/tanzanie.jpg";
import southAfricaImg from "@/assets/destinations/afrique-du-sud.jpg";
import madagascarImg from "@/assets/destinations/madagascar.jpg";

// --- 1. Définition de l'interface pour la clarté TypeScript ---
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

// --- 2. Fonctions de Données Externalisées (Optimisation) ---
// La logique de récupération des données reste dans le composant, mais la structure des destinations est externalisée.

const getDestinationData = (t: (key: string, options?: any) => any, key: string) => {
  return {
    description: t(`destinations:${key}.description`),
    duration: t(`destinations:${key}.duration`),
    budget: t(`destinations:${key}.budget`),
    // Assurez-vous que la clé de traduction est correctement typée pour retourner un tableau
    highlights: t(`destinations:${key}.highlights`, { returnObjects: true }) as string[],
    bestTime: t(`destinations:${key}.bestTime`),
    difficulty: t(`destinations:${key}.difficulty`),
  };
};

// --- Composant Principal ---
const Afrique = () => {
  const { t } = useTranslation();
  // Utilisation de 'all' comme onglet par défaut pour afficher toutes les destinations
  const [activeTab, setActiveTab] = useState("all");
  const [isLoading, setIsLoading] = useState(false); // Ajout d'un état de chargement pour la simulation

  // --- 3. Création des destinations dans un useMemo (performance) ---
  const destinations: Destination[] = useMemo(
    () => [
      {
        id: 1,
        name: t("countries.morocco"),
        slug: "maroc",
        region: "Afrique du Nord",
        image: moroccoImg,
        ...getDestinationData(t, "morocco"),
      },
      {
        id: 2,
        name: t("countries.egypt"),
        slug: "egypte",
        region: "Afrique du Nord",
        image: egyptImg,
        ...getDestinationData(t, "egypt"),
      },
      {
        id: 3,
        name: t("countries.kenya"),
        slug: "kenya",
        region: "Afrique de l'Est",
        image: kenyaImg,
        ...getDestinationData(t, "kenya"),
      },
      {
        id: 4,
        name: t("countries.tanzania"),
        slug: "tanzanie",
        region: "Afrique de l'Est",
        image: tanzaniaImg,
        ...getDestinationData(t, "tanzania"),
      },
      {
        id: 5,
        name: t("countries.southafrica"),
        slug: "afrique-du-sud",
        region: "Afrique australe",
        image: southAfricaImg,
        ...getDestinationData(t, "southafrica"),
      },
      {
        id: 6,
        name: t("countries.madagascar"),
        slug: "madagascar",
        region: "Afrique de l'Est",
        image: madagascarImg,
        ...getDestinationData(t, "madagascar"),
      },
    ],
    [t],
  ); // Dépendance à 't' pour que la liste se mette à jour si la langue change

  // --- 4. Logique de Filtrage ---
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
      { value: "all", label: t("afrique.allRegions") },
      ...uniqueRegions.map((region) => ({ value: region, label: region })),
    ];
  }, [destinations, t]);

  // Simuler le changement d'onglet avec un chargement léger
  const handleTabChange = (value: string) => {
    setIsLoading(true);
    setActiveTab(value);
    // Simuler le temps de chargement des nouvelles données/filtres
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      <SEO 
        title="Destinations Afrique - Maroc, Égypte, Kenya, Tanzanie et plus"
        description="Explorez l'Afrique avec nos guides voyage : Maroc, Égypte, Kenya, Afrique du Sud. Safaris, déserts, plages et cultures millénaires."
        url="/afrique"
      />
      <div className="min-h-screen flex flex-col">
        <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-white py-20" aria-labelledby="africa-title">
          <div className="container mx-auto px-4">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors font-medium"
              aria-label={t("afrique.backToDestinations")}
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              {t("afrique.backToDestinations")}
            </Link>
            <div className="text-center">
              <h1 id="africa-title" className="text-4xl md:text-6xl font-elegant font-bold mb-6">
                {t("afrique.title")}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">{t("afrique.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation (Amélioré : Filtres de Région) */}
        <section className="py-8 border-b border-gray-100 bg-white shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">{t("afrique.filterDestinations")}</h2> {/* Titre pour l'accessibilité */}
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <TabsList className="mx-auto w-full md:w-auto flex justify-center flex-wrap h-auto p-1 bg-gray-50">
                {regions.map((region) => (
                  <TabsTrigger
                    key={region.value}
                    value={region.value}
                    className="flex-1 sm:flex-none data-[state=active]:bg-ocean data-[state=active]:text-white transition-colors duration-200"
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((destination) => (
                  <Card
                    key={destination.id}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      {/* 5. Amélioration de l'Image (Lazy Loading et Alt Text) */}
                      <img
                        src={destination.image}
                        alt={t("destinations.imageAlt", { country: destination.name })} // Alt text plus sémantique
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy" // Amélioration de la performance
                      />
                    </div>

                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-2xl font-elegant text-gray-800">{destination.name}</CardTitle>
                        <Badge variant="secondary" className="bg-sand text-ocean font-medium">
                          {destination.region}
                        </Badge>
                      </div>
                      <CardDescription className="text-base line-clamp-2">{destination.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        {/* Infos pratiques */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <InfoItem
                            Icon={Clock}
                            iconColor="text-ocean"
                            label={t("destinations.durationLabel")}
                            value={destination.duration}
                          />
                          <InfoItem
                            Icon={Star}
                            iconColor="text-sunset"
                            label={t("destinations.budgetLabel")}
                            value={destination.budget}
                          />
                          <InfoItem
                            Icon={Users}
                            iconColor="text-ocean"
                            label={t("destinations.difficultyLabel")}
                            value={t(`destinations.${destination.difficulty.toLowerCase()}`)}
                          />
                          <InfoItem
                            Icon={MapPin}
                            iconColor="text-sunset"
                            label={t("destinations.bestTimeLabel")}
                            value={destination.bestTime}
                          />
                        </div>

                        {/* Points forts */}
                        <div>
                          <h4 className="font-semibold mb-2 text-sm text-gray-700">{t("destinations.highlights")} :</h4>
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
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Newsletter (Peut rester tel quel, il est fonctionnel) */}
        <section className="py-16 bg-gradient-sand">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-elegant font-bold mb-4">{t("destinations.newsletter.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t("destinations.newsletter.desc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("destinations.newsletter.placeholder")}
                className="flex-1 px-4 py-3 rounded-lg border border-sand-dark focus:outline-none focus:ring-2 focus:ring-ocean"
                aria-label={t("destinations.newsletter.placeholder")} // Accessibilité
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

export default Afrique;

// --- 6. Composant Répétitif Externalisé pour la Lisibilité ---
interface InfoItemProps {
  Icon: React.ElementType;
  iconColor: string;
  label: string; // Ajouté pour l'accessibilité
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ Icon, iconColor, value }) => (
  <div className="flex items-center gap-2">
    <Icon className={`h-4 w-4 ${iconColor}`} aria-hidden="true" />
    <span className="text-gray-600">{value}</span>
  </div>
);
