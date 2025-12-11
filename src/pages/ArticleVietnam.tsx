import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleVietnam = () => {
  return (
    <ArticleTemplate
      title="Vietnam : Guide Complet pour un Voyage Inoubliable"
      subtitle="Découvrez les merveilles du Vietnam, de la baie d'Ha Long aux rizières en terrasses de Sapa"
      category="Asie du Sud-Est"
      keywords={["Vietnam", "Hanoï", "Baie d'Ha Long", "Hoi An", "Saïgon"]}
      author="Cap sur le Monde"
      date="15 janvier 2025"
      readingTime="10 min"
      heroImage="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80"
      introduction="Le Vietnam est une destination envoûtante qui combine harmonieusement **tradition ancestrale et modernité dynamique**. Des plages paradisiaques du sud aux montagnes majestueuses du nord, en passant par les villes animées et les villages traditionnels, ce pays d'Asie du Sud-Est offre une diversité incomparable."
      contentSections={[
        {
          icon: MapPin,
          title: "Hanoï - La Capitale Culturelle",
          content: "<p>Hanoï est un mélange fascinant d'influences chinoises et françaises. Le vieux quartier avec ses 36 corporations, le lac Hoan Kiem, et le mausolée de Hô Chi Minh sont des passages obligés. Ne manquez pas la street food locale, considérée comme l'une des meilleures au monde.</p>"
        },
        {
          icon: MapPin,
          title: "Baie d'Ha Long - Merveille Naturelle",
          content: "<p>Classée au patrimoine mondial de l'UNESCO, la baie d'Ha Long offre un paysage à couper le souffle avec ses milliers d'îlots karstiques émergeant d'eaux émeraude. Une croisière d'une à trois nuits permet d'explorer grottes, plages isolées et villages flottants.</p>"
        },
        {
          icon: Coffee,
          title: "Hoi An - La Ville des Lanternes",
          content: "<p>Cette ancienne ville portuaire conserve son architecture coloniale et ses traditions ancestrales. Le soir, des milliers de lanternes illuminent les rues. C'est aussi le lieu idéal pour se faire confectionner des vêtements sur mesure à petit prix.</p>"
        }
      ]}
      gastronomyItems={[
        { title: "🍜 Phở", description: "La soupe de nouilles emblématique du pays, parfumée et réconfortante." },
        { title: "🥖 Bánh Mì", description: "Le sandwich vietnamien, fusion parfaite franco-vietnamienne." },
        { title: "🍢 Bún Chả", description: "Porc grillé avec vermicelles de riz, spécialité d'Hanoï." },
        { title: "🍝 Cao Lầu", description: "Nouilles de Hoi An, unique en son genre." }
      ]}
      practicalTips={[
        { title: "Infos pratiques", content: "<p><strong>Période</strong> : Nov-Avril (saison sèche). <strong>Durée</strong> : 14-21 jours. <strong>Budget</strong> : 30-50€/jour. <strong>Visa</strong> : E-visa en ligne.</p>" },
        { title: "Transport", content: "<p>Train de nuit pour longues distances. Bus locaux économiques. Grab (équivalent Uber) dans les villes. Carte SIM : 5-10€ pour 30Go.</p>" }
      ]}
      conclusion="Le Vietnam offre une **expérience complète et inoubliable**. Culture millénaire, paysages époustouflants, gastronomie exceptionnelle et accueil chaleureux font de ce pays une destination incontournable en Asie."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Vietnam", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Nov - Avril", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "30 - 50 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Hanoi"
      affiliateCountryCode="vn"
      destinationLink="/destinations/vietnam"
    />
  );
};

export default ArticleVietnam;