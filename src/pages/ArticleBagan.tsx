import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import baganImage from "@/assets/cities/bagan.jpg";

const ArticleBagan = () => {
  return (
    <ArticleTemplate
      title="Bagan : La Plaine aux 2000 Temples"
      subtitle="Site archéologique extraordinaire où plus de 2000 temples s'élèvent de la plaine ocre birmane"
      category="Asie du Sud-Est"
      keywords={["Bagan", "Birmanie", "Myanmar", "Temples", "Montgolfière"]}
      author="Cap sur le Monde"
      date="Mars 2024"
      readingTime="9 min"
      heroImage={baganImage}
      introduction="Bagan est l'un des sites archéologiques les plus extraordinaires d'Asie. Imaginez plus de **2000 temples et pagodes** s'élevant de la plaine ocre, témoins silencieux d'un royaume birman florissant entre le 11e et 13e siècle. Un spectacle hors du temps."
      contentSections={[
        {
          icon: MapPin,
          title: "Lever de Soleil : Spectacle Magique",
          content: "<p>Le lever du soleil à Bagan est un moment magique. Dès 5h du matin, grimpez sur une pagode autorisée ou réservez un vol en <strong>montgolfière</strong> pour un panorama inoubliable. Les premiers rayons percent la brume, dévoilant progressivement des centaines de temples.</p><p>Vol en montgolfière : 300-400$ par personne. Réservez plusieurs semaines à l'avance.</p>"
        },
        {
          icon: MapPin,
          title: "Temples Incontournables",
          content: "<p><strong>Ananda Temple</strong> : Le plus beau, architecture parfaite et statues dorées époustouflantes.</p><p><strong>Shwesandaw Pagoda</strong> : Idéale pour le coucher de soleil, vue 360°.</p><p><strong>Dhammayangyi Temple</strong> : Le plus massif, architecture mystérieuse.</p><p><strong>Sulamani Temple</strong> : Fresques magnifiquement préservées.</p>"
        },
        {
          icon: Coffee,
          title: "Explorer Bagan en E-Bike",
          content: "<p>Le E-bike est le meilleur moyen d'explorer Bagan. Location : 5000-8000 kyats/jour (~3-4€). Perdez-vous sur les chemins secondaires pour découvrir des temples oubliés, sans touristes.</p><p><strong>Zone Pass obligatoire</strong> : 25 000 kyats (~12€) valable 5 jours.</p>"
        }
      ]}
      gastronomyItems={[
        { title: "🍜 Mohinga", description: "Soupe de nouilles de riz au poisson, petit-déjeuner national." },
        { title: "🥗 Laphet Thoke", description: "Salade de feuilles de thé fermentées, unique à la Birmanie." },
        { title: "🍛 Shan Noodles", description: "Nouilles de riz avec sauce tomate et poulet." },
        { title: "🍵 Thé Birman", description: "Thé au lait sucré dans les maisons de thé traditionnelles." }
      ]}
      practicalTips={[
        { title: "Budget quotidien", content: "<p>Petit budget : 20-30€ | Confort : 50-80€ | Supérieur : 100€+</p>" },
        { title: "Conseils", content: "<p><strong>Hébergement</strong> : Old Bagan (luxe), Nyaung U (routards), New Bagan (entre les deux). <strong>Période</strong> : Nov-Fév (saison sèche). Durée : 3-4 jours.</p>" }
      ]}
      conclusion="Bagan transcende les mots et les photos. C'est un lieu où **l'histoire, la spiritualité et la beauté** fusionnent dans une harmonie parfaite. Une expérience transformatrice."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Bagan, Birmanie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Incontournable", value: "Lever de soleil", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 60 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Bagan"
      affiliateCountryCode="mm"
      destinationLink="/destinations/birmanie"
    />
  );
};

export default ArticleBagan;