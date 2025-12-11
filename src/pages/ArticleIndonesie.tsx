import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import heroImage from "@/assets/destinations/indonesie.jpg";

const ArticleIndonesie = () => {
  return (
    <ArticleTemplate
      title="Indonésie : L'Archipel aux Mille Visages"
      subtitle="De Bali à Java, en passant par les îles Gili : temples, volcans et plages paradisiaques"
      category="Asie du Sud-Est"
      keywords={["Indonésie", "Bali", "Java", "Temples", "Volcans", "Plongée"]}
      author="Cap sur le Monde"
      date="31 janvier 2025"
      readingTime="12 min"
      heroImage={heroImage}
      introduction="L'Indonésie, c'est plus de 17 000 îles dispersées entre l'océan Indien et le Pacifique. Un **pays-continent** où la diversité culturelle et naturelle atteint des sommets. Notre voyage de 3 semaines nous a menés de Bali, l'île des Dieux, à Java et ses volcans majestueux, en passant par les îles Gili et leurs eaux cristallines. Un concentré d'Asie tropicale à découvrir !"
      contentSections={[
        {
          icon: MapPin,
          title: "Bali : L'Île des Dieux",
          content: `<p>Bali concentre à elle seule tout ce qui fait le charme de l'Indonésie : rizières en terrasses à perte de vue, temples hindous somptueux, plages de rêve, et une culture balinaise unique. <strong>Ubud</strong> séduit par sa forêt des singes, les rizières de Tegallalang et son palais royal.</p>
          <p>Le <strong>Temple Tanah Lot</strong> offre des couchers de soleil iconiques, tandis que le <strong>Mont Batur</strong> (2h de trek de nuit) récompense les lève-tôt d'un lever de soleil spectaculaire. <strong>Seminyak</strong> et <strong>Canggu</strong> séduisent les surfeurs et amateurs de vie nocturne.</p>`
        },
        {
          icon: MapPin,
          title: "Îles Gili : Paradis Tropical",
          content: `<p>Trois petites îles au large de Lombok : <strong>Gili Trawangan</strong> (la fêtarde), <strong>Gili Meno</strong> (la romantique) et <strong>Gili Air</strong> (le compromis parfait). Pas de voitures ni de motos, seulement vélos et calèches.</p>
          <p>Le snorkeling avec les tortues marines est incontournable, tout comme les couchers de soleil depuis les balançoires dans l'eau. Baptême de plongée accessible (50-70€ pour 2 plongées). L'ambiance décontractée des Gili reste inoubliable.</p>`
        },
        {
          icon: MapPin,
          title: "Java : Volcans et Temples Millénaires",
          content: `<p>Java abrite les deux plus beaux temples d'Indonésie : <strong>Borobudur</strong> (bouddhiste, IXe siècle, classé UNESCO) et <strong>Prambanan</strong> (hindou, complexe de 240 temples). Le lever de soleil sur Borobudur, émergeant de la brume, est magique.</p>
          <p>Le <strong>Mont Bromo</strong> offre un trek de nuit vers un lever de soleil mythique sur le cratère fumant. Le <strong>cratère Ijen</strong> révèle des flammes bleues de soufre (départ 1h du matin, difficile !). <strong>Yogyakarta</strong>, capitale culturelle, vibre de street food et de traditions.</p>`
        },
        {
          icon: Coffee,
          title: "Nusa Penida : L'Île Sauvage",
          content: `<p>À 45 minutes en bateau de Bali, <strong>Nusa Penida</strong> offre des paysages côtiers spectaculaires avec des falaises vertigineuses plongeant dans des eaux turquoise.</p>
          <p><strong>Kelingking Beach</strong> (la plage en forme de T-Rex) est l'une des photos les plus iconiques d'Indonésie. <strong>Angel's Billabong</strong> forme une piscine naturelle, tandis que <strong>Crystal Bay</strong> offre la plongée avec raies manta (saison août-octobre). Location scooter indispensable, routes très accidentées !</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍚 Nasi Goreng",
          description: "LE plat national : riz frit avec légumes, œuf et poulet ou crevettes. Simple mais délicieux, 1-3€."
        },
        {
          title: "🐷 Babi Guling",
          description: "Cochon de lait rôti à la balinaise, peau ultra croustillante. Spécialité de Bali incontournable."
        },
        {
          title: "🍢 Satay / Sate",
          description: "Brochettes de viande marinée grillées au charbon, sauce cacahuète sucrée-salée."
        },
        {
          title: "🥗 Gado-Gado",
          description: "Salade de légumes avec tofu, tempeh et œuf dur, sauce cacahuète. Option végétarienne délicieuse."
        }
      ]}
      practicalTips={[
        {
          title: "Budget détaillé",
          content: `<ul class="space-y-2">
            <li>Hébergement : 10-25€/nuit (guesthouse) ou 40-80€ (hôtel confort)</li>
            <li>Repas : 2-5€ (warung) ou 10-15€ (resto touristique)</li>
            <li>Scooter : 5€/jour, indispensable</li>
            <li>Total : 800-1500€/personne pour 3 semaines (hors vol)</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Meilleure période</strong> : Mai à septembre (saison sèche). Évitez novembre-mars (moussons).</p>
          <p><strong>Transport</strong> : Apps Grab et Gojek (Uber local). Vols intérieurs avec Lion Air, Citilink (20-50€).</p>
          <p><strong>Visa</strong> : Gratuit 30 jours pour les Français. Carte SIM Telkomsel : 10€ pour 20GB.</p>`
        }
      ]}
      conclusion="L'Indonésie coche toutes les cases du voyage parfait : **dépaysement total, budget mini, gentillesse des locaux**, et une diversité de paysages incroyable. Chaque île offre une facette unique et mérite le détour. C'est une destination que nous recommandons les yeux fermés, surtout pour un premier grand voyage en Asie !"
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Indonésie", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai - Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "25 - 50 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Bali"
      affiliateCountryCode="id"
      destinationLink="/destinations/indonesie"
    />
  );
};

export default ArticleIndonesie;