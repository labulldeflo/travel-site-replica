import ArticleTemplate from "@/components/ArticleTemplate";
import { MapPin, Coffee, DollarSign } from "lucide-react";

const ArticleSantiago = () => {
  return (
    <ArticleTemplate
      title="Santiago : Modernité au Pied des Andes"
      subtitle="Entre la cordillère enneigée et les quartiers branchés, capitale chilienne dynamique"
      category="Amérique"
      keywords={["Santiago", "Andes", "Vignobles", "Culture chilienne"]}
      author="Cap sur le Monde"
      date="16 Novembre 2025"
      readingTime="8 min"
      heroImage="https://images.unsplash.com/photo-1518467896795-91a3f0af7820?w=1200"
      introduction="Santiago, c'est la **modernité andine**. Entre la cordillère enneigée et les quartiers branchés, Santiago nous a surpris par son dynamisme, ses vignobles proches et cette capacité chilienne à allier tradition et modernité. Nous avons passé quatre jours à découvrir cette capitale cosmopolite de 7 millions d'habitants, du cerro San Cristóbal aux vignobles de la vallée de Maipo."
      contentSections={[
        {
          icon: MapPin,
          title: "Cerro San Cristóbal et Panoramas Andins",
          content: `<p>Le cerro San Cristóbal, colline de 880m, offre la plus belle vue sur Santiago et la cordillère des Andes. Le funiculaire centenaire grimpe jusqu'au sommet où trône une statue géante de la Vierge.</p>
          <p>Par temps clair (surtout en hiver), les sommets enneigés à plus de 6000m créent un panorama spectaculaire. Le coucher de soleil illumine les Andes dans une symphonie de couleurs.</p>`
        },
        {
          icon: MapPin,
          title: "Bellavista et Lastarria : Quartiers Bohèmes",
          content: `<p>Bellavista, au pied du cerro, est le quartier artistique. Ses rues regorgent de restaurants, bars à pisco sour et galeries. La Chascona, maison de Pablo Neruda transformée en musée, dévoile l'univers excentrique du poète.</p>
          <p>Le quartier Lastarria concentre cafés littéraires, boutiques design et cinémas d'art. Le dimanche, la foire artisanale attire artistes et artisans locaux.</p>`
        },
        {
          icon: Coffee,
          title: "Vignobles de la Vallée de Maipo",
          content: `<p>À 40km de Santiago, la vallée de Maipo produit certains des meilleurs vins chiliens. Nous avons visité la viña Concha y Toro, domaine fondé en 1883 qui exporte dans plus de 140 pays.</p>
          <p>La dégustation de carmenère (cépage emblématique du Chili) et de cabernet sauvignon, dans les jardins avec les Andes en toile de fond, résume l'art de vivre chilien.</p>`
        }
      ]}
      gastronomyItems={[
        {
          title: "🌽 Pastel de Choclo",
          description: "Gratin de maïs sucré avec viande hachée, œuf et olives. Comfort food chilien réconfortant."
        },
        {
          title: "🥟 Empanadas",
          description: "Version chilienne : viande, oignons, raisins secs, œuf, olive. Cuites au four, dorées et savoureuses."
        },
        {
          title: "🍷 Carmenère",
          description: "Cépage emblématique du Chili. Les vins de Maipo sont excellents et abordables."
        },
        {
          title: "🍹 Pisco Sour Chileno",
          description: "Version chilienne du Pisco Sour. Le Chili et le Pérou se disputent l'origine de ce cocktail."
        }
      ]}
      practicalTips={[
        {
          title: "Budget moyen",
          content: `<ul class="space-y-2">
            <li>Hébergement : 30–80 €/nuit</li>
            <li>Repas : 10–30 €</li>
            <li>Transport : métro moderne et efficace</li>
          </ul>`
        },
        {
          title: "Pollution",
          content: `<p>En hiver (juin-août), la pollution peut être forte. Le smog est piégé par les Andes. Printemps et automne sont plus agréables.</p>`
        }
      ]}
      conclusion="Parce qu'ici, **la géographie dicte le mode de vie**. Dîner dans un restaurant de Lastarria en savourant un pastel de choclo accompagné d'un carmenère, alors que les Andes rosissent sous le soleil couchant, résume l'essence du Chili : un pays coincé entre océan et cordillère qui a su tirer le meilleur de cette géographie unique. Si vous aimez les villes cosmopolites et les montagnes proches, Santiago vous séduira."
      sidebarInfos={[
        { icon: MapPin, label: "Destination", value: "Santiago, Chili", iconColor: "text-ocean" },
        { icon: Coffee, label: "À goûter absolument", value: "Pastel de Choclo", iconColor: "text-sunset" },
        { icon: DollarSign, label: "Budget moyen/jour", value: "40 - 80 €", iconColor: "text-ocean" }
      ]}
      affiliateCity="Santiago"
      affiliateCountryCode="cl"
      destinationLink="/destinations/chili"
    />
  );
};

export default ArticleSantiago;