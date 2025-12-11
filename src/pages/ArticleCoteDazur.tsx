import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleCoteDazur = () => {
  return (
    <ArticleTemplate
      title="Côte d'Azur : la French Riviera sous le soleil"
      subtitle="De Nice à Monaco, en passant par les villages perchés de l'arrière-pays, la Côte d'Azur nous a éblouis par ses lumières dorées, ses eaux turquoise et son art de vivre légendaire"
      category="France"
      keywords={["Côte d'Azur", "Nice", "Cannes", "Monaco", "Méditerranée"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200"
      introduction="La Côte d'Azur incarne le rêve méditerranéen français. De la Promenade des Anglais à Nice aux casinos de Monte-Carlo, des criques turquoise aux villages perchés de l'arrière-pays, cette riviera légendaire a inspiré les plus grands artistes du 20ème siècle. Matisse, Chagall, Picasso ont tous été captivés par cette lumière unique qui baigne le littoral."
      contentSections={[
        {
          icon: MapPin,
          title: "Nice : la reine de la Côte d'Azur",
          content: `<p>Nice nous a conquis dès la première balade sur la Promenade des Anglais, cette avenue mythique de 7km qui longe la Baie des Anges. Nous avons adoré flâner dans le Vieux-Nice, avec ses ruelles étroites, ses façades ocre et jaune, et le marché aux fleurs du Cours Saleya où les senteurs de lavande et de mimosa embaument l'air.</p>
          <p>La colline du Château offre le plus beau panorama sur la ville, la mer et les Alpes en arrière-plan. Le musée Matisse et le musée Marc Chagall témoignent de l'attraction qu'a exercée la lumière niçoise sur les plus grands artistes.</p>`
        },
        {
          icon: MapPin,
          title: "Cannes et le glamour de la Croisette",
          content: `<p>Marcher sur les traces des stars sur le tapis rouge du Palais des Festivals, même hors période du festival, procure une sensation particulière. La Croisette, bordée de palmiers et de palaces Belle Époque, incarne le luxe et la sophistication.</p>
          <p>Nous avons pris le bateau pour rejoindre les îles de Lérins, à 15 minutes au large. L'île Sainte-Marguerite, où fut emprisonné le Masque de Fer, et l'île Saint-Honorat avec son abbaye cistercienne, offrent un contraste saisissant avec l'agitation de Cannes.</p>`
        },
        {
          icon: MapPin,
          title: "Monaco : principauté de rêve",
          content: `<p>Le rocher de Monaco, avec son palais princier et sa cathédrale où repose Grace Kelly, domine la mer d'un éperon spectaculaire. Nous avons assisté à la relève de la garde carabinière devant le palais, cérémonie haute en couleur qui se déroule chaque jour à 11h55.</p>
          <p>Le musée océanographique, fondé par le prince Albert Ier, est un chef-d'œuvre architectural accroché à la falaise. Monte-Carlo et son casino mythique, le Grand Prix de F1, les yachts luxueux : Monaco concentre tous les symboles du luxe sur 2km².</p>`
        },
        {
          icon: MapPin,
          title: "Villages perchés de l'arrière-pays",
          content: `<p>Èze, Saint-Paul-de-Vence, Gourdon : ces villages médiévaux accrochés aux collines offrent des panoramas vertigineux sur la Méditerranée. À Èze, nous avons visité le jardin exotique au sommet du village, d'où la vue embrasse toute la côte jusqu'à la Corse par temps clair.</p>
          <p>Saint-Paul-de-Vence est devenu au 20ème siècle le village des artistes. Chagall, Matisse, Picasso y ont séjourné, et les galeries d'art bordent aujourd'hui les ruelles pavées. La Fondation Maeght abrite l'une des plus belles collections d'art moderne d'Europe.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🐟 Socca et pan bagnat",
          description: "La socca, galette de pois chiches, est l'emblème culinaire de Nice. Le pan bagnat est le sandwich niçois par excellence."
        },
        {
          title: "🍷 Vins de Provence",
          description: "Rosés de Bandol, Côtes de Provence : les vins rosés accompagnent parfaitement la cuisine méditerranéenne."
        }
      ]}
      practicalTips={[
        {
          title: "Budget et transport",
          content: `<p><strong>Budget moyen :</strong> 80-180€/jour selon la saison et le niveau de confort.</p>
          <p><strong>Transport :</strong> Le train TER longe toute la côte, pratique et bon marché. En voiture, attention aux embouteillages l'été.</p>`
        },
        {
          title: "Quand partir",
          content: `<p><strong>Idéal :</strong> Mai-juin et septembre-octobre offrent le meilleur rapport météo/affluence.</p>
          <p><strong>À éviter :</strong> L'été est bondé et cher, privilégiez l'arrière-pays pour économiser.</p>`
        }
      ]}
      conclusion="Notre coup de cœur : louer un petit bateau à Villefranche-sur-Mer pour explorer les calanques et criques sauvages inaccessibles par la route. Mouiller l'ancre dans une crique déserte, plonger dans une eau cristalline à 26°C en plein été : le rêve méditerranéen à l'état pur."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Côte d'Azur, France", iconColor: "text-ocean" },
        { icon: Coffee, label: "Meilleure période", value: "Mai-Juin, Septembre", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "80 - 180 €", iconColor: "text-emerald-600" }
      ]}
      affiliateCity="Nice"
      affiliateCountryCode="fr"
      destinationLink="/destinations/france"
    />
  );
};

export default ArticleCoteDazur;
