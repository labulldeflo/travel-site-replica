import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";
import saharaImage from "@/assets/cities/sahara.jpg";

const ArticleSahara = () => {
  return (
    <ArticleTemplate
      title="Le Sahara marocain : immensité et magie"
      subtitle="Face à l'immensité des dunes dorées de l'Erg Chebbi, on prend conscience de notre petitesse et de la beauté du monde. Une nuit sous les étoiles qui transforme"
      category="Afrique"
      keywords={["Maroc", "Sahara", "Désert", "Merzouga", "Dunes"]}
      author="Cap sur le Monde"
      date="22 janvier 2025"
      readingTime="6 min"
      heroImage={saharaImage}
      introduction="Merzouga est la porte d'entrée vers les dunes géantes de l'Erg Chebbi. Ces montagnes de sable rouge-orangé peuvent atteindre 150 mètres de hauteur. Au lever et au coucher du soleil, les couleurs sont absolument magiques. L'expérience typique consiste en une balade à dos de dromadaire au coucher du soleil, suivie d'une nuit dans un campement berbère au cœur du désert."
      contentSections={[
        {
          icon: MapPin,
          title: "Les dunes de l'Erg Chebbi",
          content: `<p>Le silence absolu et le ciel étoilé sans pollution lumineuse sont inoubliables. Loin de toute civilisation, seul le vent qui caresse les dunes accompagne vos pensées. La Voie lactée se déploie dans toute sa splendeur, offrant un spectacle céleste que l'on ne voit plus ailleurs.</p>
          <p>Au lever du soleil, les dunes s'embrasent de couleurs changeantes : du rose pâle à l'orange flamboyant, puis au rouge profond. Grimper au sommet d'une dune géante pour assister à ce spectacle quotidien de la nature reste un moment de pure émotion.</p>`
        },
        {
          icon: MapPin,
          title: "Culture berbère et vie nomade",
          content: `<p>Les nomades berbères vivent dans le Sahara depuis des millénaires. Leur hospitalité est légendaire : thé à la menthe autour du feu, récits des anciens, musique traditionnelle avec le tambour et le oud... Ces moments de partage authentique sont le cœur de l'expérience désertique.</p>
          <p>Certaines familles partagent leur mode de vie avec les visiteurs : préparation du pain traditionnel cuit sous le sable, découverte des plantes médicinales du désert, observation des fossiles millénaires... Une immersion dans un savoir ancestral précieusement préservé.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🍲 Tajine du désert",
          description: "Tajine cuit lentement sur les braises, agneau ou poulet aux légumes. Saveurs concentrées incomparables."
        },
        {
          title: "🍞 Pain berbère",
          description: "Pain cuit sous le sable chaud, spécialité à goûter absolument. Texture unique et authentique."
        },
        {
          title: "🍵 Thé à la menthe",
          description: "Rituel sacré du désert, très sucré, ponctue chaque moment de convivialité autour du feu."
        },
        {
          title: "🥘 Harira",
          description: "Soupe réconfortante aux lentilles et pois chiches. Parfaite pour les soirées fraîches du désert."
        }
      ]}
      practicalTips={[
        {
          title: "Budget excursion",
          content: `<ul class="space-y-2">
            <li><strong>1 nuit :</strong> 40-80€/personne (dromadaire, campement, repas)</li>
            <li><strong>2 nuits :</strong> 70-140€/personne (recommandé pour profiter pleinement)</li>
            <li><strong>Excursion luxe :</strong> 150€+/personne (campement confort, services premium)</li>
          </ul>`
        },
        {
          title: "Conseils pratiques",
          content: `<p><strong>Températures extrêmes :</strong> 35-45°C le jour, 5-15°C la nuit. Apportez vêtements chauds pour la nuit.</p>
          <p><strong>Meilleure période :</strong> Octobre à avril. Évitez juillet-août (canicule insupportable).</p>
          <p><strong>Équipement :</strong> Crème solaire haute protection, eau en quantité, lampe frontale, chèche contre le sable.</p>`
        }
      ]}
      conclusion="Dormir à la belle étoile avec pour seul bruit le vent qui caresse les dunes, observer la Voie lactée dans toute sa splendeur, assister au lever du soleil sur les dunes... La simplicité de la vie dans le désert, l'accueil chaleureux des berbères, les moments de partage autour du feu : c'est une expérience qui nous reconnecte à l'essentiel et laisse des souvenirs impérissables."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Sahara, Maroc", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Oct-Avril", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget excursion", value: "70 - 140 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Merzouga"
      affiliateCountryCode="ma"
      destinationLink="/destinations/maroc"
    />
  );
};

export default ArticleSahara;