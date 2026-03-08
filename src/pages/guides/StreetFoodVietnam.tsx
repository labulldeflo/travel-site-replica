import { Utensils, Coffee, Soup, Salad, IceCream, MapPin } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const StreetFoodVietnam = () => {
  return (
    <GuideTemplate
      title="Street Food Vietnam"
      description="Un tour gourmand entre marchés et spécialités locales incontournables"
      metaDescription="Guide street food Vietnam : les meilleurs plats de rue, où manger, spécialités par région. Phở, bánh mì, bún chả et plus."
      country="Vietnam"
      countrySlug="vietnam"
      icon={Utensils}
      affiliateCity="Hanoi"
      affiliateCountryCode="vn"
      sections={[
        {
          title: "Les incontournables du Nord",
          icon: Soup,
          content: [
            "Phở bò : La mythique soupe de nouilles au bœuf, emblème du Vietnam",
            "Bún chả : Porc grillé avec nouilles et herbes fraîches (spécialité de Hanoï)",
            "Chả cá : Poisson frit aux herbes et curcuma",
            "Bánh cuốn : Crêpes de riz vapeur farcies au porc",
            "Egg coffee (cà phê trứng) : Café crémeux au jaune d'œuf battu"
          ]
        },
        {
          title: "Les spécialités du Centre",
          icon: Salad,
          content: [
            "Cao lầu : Nouilles épaisses au porc de Hoi An",
            "Bánh bèo : Petits gâteaux de riz aux crevettes séchées",
            "Mì Quảng : Nouilles de Quang Nam au bouillon parfumé",
            "Bánh xèo : Crêpe croustillante aux crevettes et germes de soja",
            "Bún bò Huế : Soupe épicée au bœuf de Huế"
          ]
        },
        {
          title: "Les saveurs du Sud",
          icon: IceCream,
          content: [
            "Bánh mì : Le sandwich vietnamien dans sa version la plus garnie",
            "Cơm tấm : Riz brisé avec porc grillé et œuf",
            "Gỏi cuốn : Rouleaux de printemps frais aux crevettes",
            "Hủ tiếu : Soupe de nouilles du sud, plus sucrée",
            "Chè : Desserts sucrés aux haricots, fruits et lait de coco"
          ]
        },
        {
          title: "Boissons à découvrir",
          icon: Coffee,
          content: [
            "Cà phê sữa đá : Café glacé au lait concentré sucré",
            "Bia hơi : Bière pression ultra-fraîche (0.20€ le verre !)",
            "Nước mía : Jus de canne à sucre pressé",
            "Sinh tố : Smoothies aux fruits tropicaux",
            "Trà đá : Thé glacé gratuit servi avec les repas"
          ]
        },
        {
          title: "Où manger ?",
          icon: MapPin,
          content: [
            "Cherchez les stands avec beaucoup de locaux",
            "Les marchés de nuit : ambiance animée et choix varié",
            "Ruelles et trottoirs : les meilleurs spots sont souvent cachés",
            "Hanoï : Vieux quartier, rue Tong Duy Tan pour le bún chả",
            "Saigon : Marché Ben Thanh (touristique mais complet)",
            "Hoi An : Marché central tôt le matin"
          ]
        }
      ]}
      faqs={[
        { question: "Combien coûte un repas de street food au Vietnam ?", answer: "Un plat de rue coûte entre 25 000 et 60 000 VND (1-2,50€). Un phở coûte 30 000-50 000 VND, un bánh mì 15 000-30 000 VND. On peut manger très bien pour 5-8€ par jour en street food." },
        { question: "Le street food vietnamien est-il hygiénique ?", answer: "Globalement oui. Choisissez les stands fréquentés par les locaux (forte rotation), évitez la glace dans les petits stands ruraux, et privilégiez les plats cuits devant vous. Les soupes bouillantes (phở, bún) sont naturellement sûres." },
        { question: "Quels sont les plats incontournables à goûter au Vietnam ?", answer: "Le phở (soupe de nouilles au bœuf ou poulet), le bánh mì (sandwich baguette), le bún chả (porc grillé de Hanoï), le cà phê sữa đá (café glacé) et les rouleaux de printemps frais (gỏi cuốn) sont les 5 essentiels." },
        { question: "Y a-t-il des options végétariennes en street food vietnamien ?", answer: "Oui ! Cherchez les restaurants 'chay' (végétariens). Le Vietnam a une forte tradition bouddhiste et les options végétariennes sont nombreuses : phở chay, bánh mì chay, riz sauté aux légumes. Le 1er et 15e jour lunaire, de nombreux stands proposent des menus végétariens." }
      ]}
    />
  );
};

export default StreetFoodVietnam;
