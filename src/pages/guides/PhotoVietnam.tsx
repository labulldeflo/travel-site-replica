import { Camera, Sun, Mountain, Users, Clock, Lightbulb } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const PhotoVietnam = () => {
  return (
    <GuideTemplate
      title="Photographie Vietnam"
      description="Les plus beaux spots photo et astuces pour capturer la magie du pays"
      metaDescription="Guide photo Vietnam : meilleurs spots, heures dorées, conseils techniques. Capturez Ha Long, rizières de Sapa et vieux Hanoï."
      country="Vietnam"
      countrySlug="vietnam"
      icon={Camera}
      affiliateCity="Sapa"
      affiliateCountryCode="vn"
      sections={[
        {
          title: "Spots incontournables - Nord",
          icon: Mountain,
          content: [
            "Baie d'Ha Long : lever de soleil depuis le pont du bateau",
            "Rizières de Sapa : vallée de Muong Hoa au petit matin",
            "Boucle de Ha Giang : cols de montagne et villages reculés",
            "Tam Coc (Ninh Binh) : rivière et pitons karstiques",
            "Vieux quartier de Hanoï : vie de rue animée à l'aube"
          ]
        },
        {
          title: "Spots incontournables - Centre & Sud",
          icon: Sun,
          content: [
            "Hoi An : lanternes au crépuscule, pont japonais",
            "Hué : Cité Impériale et tombeaux royaux",
            "Delta du Mékong : marchés flottants à 6h du matin",
            "Saigon : skyline depuis le rooftop Bitexco",
            "Mui Ne : dunes de sable rouge au coucher du soleil"
          ]
        },
        {
          title: "Meilleures heures",
          icon: Clock,
          content: [
            "Golden hour : 5h30-7h et 17h-18h30 (varie selon saison)",
            "Blue hour : 15 min avant le lever et après le coucher",
            "Marchés : arrivez avant 7h pour l'activité maximale",
            "Villes : l'heure bleue sublime les néons et lanternes",
            "Rizières : brume matinale entre 6h et 8h"
          ]
        },
        {
          title: "Photographier les gens",
          icon: Users,
          content: [
            "Demandez toujours la permission (un sourire suffit souvent)",
            "Apprenez 'chụp ảnh được không?' (puis-je prendre une photo ?)",
            "Montrez le résultat : les Vietnamiens adorent se voir en photo",
            "Marchés : les vendeurs sont habitués aux photographes",
            "Évitez de photographier les uniformes militaires/policiers"
          ]
        },
        {
          title: "Conseils techniques",
          icon: Lightbulb,
          content: [
            "Protégez votre matériel : humidité et chaleur intenses",
            "Emportez des sachets de silice pour absorber l'humidité",
            "Objectif polyvalent : 24-70mm idéal pour le voyage",
            "Drone : techniquement interdit, toléré dans les zones rurales",
            "Sauvegardez chaque soir : cloud ou disque dur externe",
            "Filtres ND : indispensables pour les longues poses en plein jour"
          ]
        }
      ]}
    />
  );
};

export default PhotoVietnam;
