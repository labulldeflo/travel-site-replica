import { Building, MapPin, Calendar, DollarSign, Plane, AlertTriangle, Search, Shield, Hotel, Ticket, Backpack } from 'lucide-react';
import GuideTemplate from '@/components/GuideTemplate';

const GuideCompletVietnam = () => {
  return (
    <GuideTemplate
      title="Guide Complet Vietnam 2026 : Itinéraires, Budget et Conseils"
      description="Votre ressource indispensable pour organiser votre voyage au Vietnam, étape par étape"
      metaDescription="Guide complet Vietnam 2026 : itinéraires 7/15/21 jours, budget réel, visa, meilleures périodes, transports et conseils pratiques du Nord au Sud."
      country="Vietnam"
      countrySlug="vietnam"
      icon={Building}
      affiliateCity="Hanoi"
      affiliateCountryCode="vn"
      sections={[
        {
          title: "Quand partir au Vietnam ?",
          icon: Calendar,
          content: [
            "Nord (Hanoï, Sapa, Ha Long) : Octobre à Avril — Climat frais et sec, idéal pour les treks à Sapa et les croisières dans la baie",
            "Centre (Hoi An, Huế) : Février à Mai — Avant la mousson, températures agréables pour explorer les vestiges impériaux",
            "Sud (Saigon, Delta du Mékong) : Décembre à Avril — Saison sèche, parfait pour naviguer dans les marchés flottants",
            "Évitez Juillet-Août : mousson intense dans tout le pays, risques d'inondations dans le Centre",
            "Meilleure période globale : Mars-Avril ou Octobre-Novembre pour combiner Nord et Sud",
            "Astuce : utilisez Skyscanner ou Google Flights pour trouver les vols les moins chers selon la saison"
          ]
        },
        {
          title: "Itinéraires recommandés",
          icon: MapPin,
          content: [
            "7 jours Express : Hanoï (2j) → Ha Long (1j) → Hoi An (2j) → Saigon (2j) — idéal pour un premier aperçu",
            "15 jours Classique : Ajoutez Sapa (3j), Huế (2j) et Delta du Mékong (2j) — le meilleur rapport temps/découverte",
            "21 jours Complet : Incluez Ha Giang, Phong Nha et Phu Quoc pour une immersion totale",
            "Privilégiez les vols intérieurs pour gagner du temps (Hanoï-Danang, Danang-Saigon) — réservez sur VietJet ou Bamboo Airways",
            "Le train de nuit Hanoï-Sapa ou Hanoï-Huế est une expérience à vivre, réservez sur 12go.asia",
            "Réservez vos excursions à l'avance sur GetYourGuide ou Civitatis pour les activités populaires comme Ha Long ou les cours de cuisine"
          ]
        },
        {
          title: "Budget à prévoir",
          icon: DollarSign,
          content: [
            "Budget backpacker : 25-35€/jour — dortoirs en auberge, street food, transports locaux en bus",
            "Budget confort : 50-80€/jour — hôtels 3*, restaurants, quelques excursions organisées",
            "Budget luxe : 100-200€/jour — hôtels 4-5*, guides privés, vols intérieurs, croisière de luxe Ha Long",
            "Vols internationaux : 600-900€ A/R depuis la France — comparez sur Skyscanner et réservez 2-3 mois à l'avance",
            "E-visa : 25$ (30 jours, entrée unique) — demande en ligne sur le site officiel",
            "Astuce budget : réservez vos hébergements sur Booking.com ou Hostelworld pour comparer les prix et lire les avis vérifiés",
            "Assurance voyage indispensable : Chapka ou ACS proposent des formules adaptées aux longs séjours en Asie"
          ]
        },
        {
          title: "Transports sur place",
          icon: Plane,
          content: [
            "Vols intérieurs : VietJet, Bamboo Airways (20-60€ le trajet) — comparez sur Skyscanner",
            "Train : Réseau Nord-Sud, réservez sur 12go.asia ou dsvn.vn — le train de nuit en couchette molle est très confortable",
            "Bus couchettes : Nombreuses compagnies (The Sinh Tourist, Futa Bus), pratiques pour les longues distances de nuit",
            "Grab : Application indispensable pour taxis et motos — téléchargez-la avant votre arrivée",
            "Location scooter : 5-8€/jour (permis international recommandé) — incontournable pour la boucle de Ha Giang",
            "Conseil : utilisez Rome2Rio pour planifier vos trajets multimodaux et comparer les options"
          ]
        },
        {
          title: "Conseils pratiques",
          icon: AlertTriangle,
          content: [
            "Négociez TOUT sauf dans les magasins à prix fixe — commencez par diviser le prix annoncé par 2 ou 3",
            "Apprenez quelques mots de vietnamien : xin chào (bonjour), cảm ơn (merci) — les locaux apprécient énormément",
            "Évitez l'eau du robinet, buvez de l'eau en bouteille — emportez une gourde filtrante LifeStraw ou Grayl",
            "Traversez la rue lentement et régulièrement, les motos vous éviteront — ne vous arrêtez surtout pas",
            "Protégez-vous du soleil : chapeau, crème solaire 50+, vêtements légers et respirants",
            "Carte SIM locale : achetez une SIM Viettel ou Mobifone à l'aéroport (5-10€ pour 1 mois de data)",
            "Équipement recommandé : consultez nos tests de sacs à dos et vestes de pluie dans notre section Tests"
          ]
        }
      ]}
      toolRecommendations={[
        {
          category: "Comparateurs de vols",
          icon: Search,
          tools: [
            { name: "Skyscanner", description: "Comparateur de vols le plus complet, idéal pour trouver les meilleurs prix vers Hanoï ou Saigon", url: "https://www.skyscanner.fr", badge: "Recommandé" },
            { name: "Google Flights", description: "Outil gratuit de Google pour suivre les prix et trouver les dates les moins chères", url: "https://www.google.com/travel/flights" },
            { name: "Kayak", description: "Alertes de prix et prévisions pour réserver au meilleur moment", url: "https://www.kayak.fr" }
          ]
        },
        {
          category: "Hébergement",
          icon: Hotel,
          tools: [
            { name: "Booking.com", description: "Large choix d'hôtels au Vietnam avec annulation gratuite sur la plupart des offres", url: "https://www.booking.com/searchresults.html?ss=Vietnam&lang=fr&aid=2311236", badge: "Partenaire" },
            { name: "Hostelworld", description: "Spécialiste des auberges de jeunesse, parfait pour les backpackers au Vietnam", url: "https://www.hostelworld.com" },
            { name: "Agoda", description: "Très populaire en Asie du Sud-Est, souvent les meilleurs prix pour le Vietnam", url: "https://www.agoda.com" }
          ]
        },
        {
          category: "Activités & Excursions",
          icon: Ticket,
          tools: [
            { name: "GetYourGuide", description: "Réservez vos excursions à Ha Long, cours de cuisine à Hoi An et treks à Sapa", url: "https://www.getyourguide.fr", badge: "Populaire" },
            { name: "Civitatis", description: "Visites guidées en français au Vietnam, idéal pour une première découverte", url: "https://www.civitatis.com/fr/vietnam/" },
            { name: "Klook", description: "Spécialiste des activités en Asie : transferts, excursions, expériences locales", url: "https://www.klook.com" }
          ]
        },
        {
          category: "Assurance voyage",
          icon: Shield,
          tools: [
            { name: "Chapka Assurance", description: "Cap Aventure : formule complète pour les voyages en Asie, rapatriement et frais médicaux inclus", url: "https://www.chapkadirect.fr", badge: "Recommandé" },
            { name: "ACS", description: "Assurance voyage longue durée, idéale pour les tours du monde incluant le Vietnam", url: "https://www.acs-ami.com" },
            { name: "Heymondo", description: "Assurance voyage en ligne avec assistance 24/7 et app mobile pratique", url: "https://www.heymondo.fr" }
          ]
        },
        {
          category: "Équipement de voyage",
          icon: Backpack,
          tools: [
            { name: "Osprey Farpoint 40", description: "Le sac à dos idéal pour le Vietnam : format cabine, confortable et résistant", url: "/tests", badge: "Notre test" },
            { name: "Gourde filtrante Grayl", description: "Purifiez l'eau n'importe où au Vietnam — essentiel pour les treks", url: "/tests" },
            { name: "Carte SIM Holafly", description: "eSIM internationale avec data illimitée, activable avant le départ", url: "https://www.holafly.com" }
          ]
        }
      ]}
      internalLinks={[
        { label: "Itinéraire Vietnam 10 jours", url: "/blog/itineraire-vietnam-10-jours" },
        { label: "Itinéraire Vietnam 15 jours (nouveau)", url: "/blog/itineraire-vietnam-15-jours" },
        { label: "Budget voyage Vietnam 2026", url: "/blog/budget-voyage-vietnam" },
        { label: "Quand partir au Vietnam", url: "/blog/quand-partir-vietnam" },
        { label: "Que faire à Hanoï", url: "/destinations/vietnam/hanoi" },
        { label: "Budget détaillé Vietnam", url: "/guides/budget-vietnam" },
        { label: "Transport au Vietnam", url: "/guides/transport-vietnam" },
        { label: "Street Food Vietnam", url: "/guides/street-food-vietnam" },
        { label: "Photo Vietnam : les meilleurs spots", url: "/guides/photo-vietnam" },
        { label: "Destination Hoi An", url: "/destinations/vietnam/hoi-an" },
        { label: "Destination Ho Chi Minh", url: "/destinations/vietnam/ho-chi-minh" },
        { label: "Guide planification de voyage", url: "/guides/planification" },
        { label: "Organiser un tour du monde", url: "/blog/organiser-tour-monde-budget-limite" },
        { label: "Nos tests d'équipement voyage", url: "/tests" },
      ]}
      faqs={[
        { question: "Combien de temps faut-il pour visiter le Vietnam ?", answer: "Minimum 2 semaines pour un aperçu nord-sud (Hanoï, Halong, Hué, Hoi An, Saigon). 3 semaines permettent d'ajouter Sapa, le delta du Mékong et des étapes relaxantes. 4 semaines offrent un rythme confortable avec les régions moins touristiques (Ha Giang, Phong Nha). 10 jours restent possibles mais imposent de choisir entre Sapa et le delta — voir notre itinéraire 10 jours ou 15 jours." },
        { question: "Faut-il un visa pour le Vietnam en 2026 ?", answer: "Les Français bénéficient d'une exemption de visa pour un séjour de 45 jours maximum (reconduite en 2026). Au-delà, un e-visa (25 $) permet un séjour de 90 jours. Le passeport doit être valide 6 mois après l'entrée. L'e-visa se fait en ligne en 3 jours ouvrables sur le site officiel evisa.xuatnhapcanh.gov.vn." },
        { question: "Quel budget pour 2 semaines au Vietnam en 2026 ?", answer: "Backpacker : 545 € hors vol international. Confort (hôtels 3*, vols internes, croisière Halong) : 1 060 €. Premium : 2 075 €. Le vol Paris-Hanoï coûte 650-900 € selon la saison. Voir notre itinéraire 15 jours pour le détail poste par poste." },
        { question: "Est-il facile de voyager seul(e) au Vietnam ?", answer: "Oui, le Vietnam est très accueillant pour les voyageurs solo. Les Vietnamiens sont curieux et chaleureux. Les auberges de jeunesse facilitent les rencontres. La barrière de la langue peut être un défi hors des zones touristiques — téléchargez Google Traduction hors ligne et l'application Grab pour les transports." },
        { question: "Quels vaccins sont recommandés pour le Vietnam ?", answer: "Aucun vaccin n'est obligatoire mais les vaccins recommandés sont : hépatite A et B, typhoïde, encéphalite japonaise (si séjour rural prolongé) et rage (si zones reculées). Le traitement antipaludéen est conseillé pour certaines régions rurales du centre et du sud. Consultez un centre de vaccination international 4-6 semaines avant le départ." },
        { question: "Nord ou Sud du Vietnam : que choisir ?", answer: "Le Nord (Hanoï, Sapa, Halong) offre des paysages montagneux spectaculaires et une culture plus traditionnelle. Le Sud (Saigon, delta du Mékong) est plus tropical et dynamique. Le Centre (Hué, Hoi An) combine histoire impériale et plages magnifiques. L'idéal est de combiner les trois sur 15 jours." },
        { question: "Quelle est la meilleure période pour visiter le Vietnam ?", answer: "Octobre-novembre et mars-avril sont les fenêtres optimales pour un itinéraire nord-sud : temps sec partout, températures modérées. Évitez septembre-octobre sur le Centre (typhons) et juin-août (chaleur étouffante + mousson)." },
        { question: "Le Vietnam est-il sûr en 2026 ?", answer: "Oui, le Vietnam reste l'un des pays les plus sûrs d'Asie du Sud-Est. La criminalité violente est très rare. Les seuls vrais risques sont les vols à l'arraché (sacs, téléphones) à Saigon, les arnaques de taxi (utilisez Grab) et le trafic routier. Une assurance voyage avec rapatriement est indispensable." },
        { question: "Quelle assurance voyage pour le Vietnam ?", answer: "Pour un séjour de 2-3 semaines, choisissez une assurance avec rapatriement, frais médicaux (minimum 100 000 €) et couverture scooter (essentielle si vous comptez en louer un). Chapka Cap Aventure ou ACS conviennent parfaitement. Comptez 35-60 € pour 15 jours." },
        { question: "Peut-on payer par carte bancaire partout au Vietnam ?", answer: "Les hôtels, restaurants touristiques et grandes enseignes acceptent la CB (Visa/Mastercard, attention aux frais de 3 %). Mais une grande partie du pays fonctionne en cash (VND). Retirez à des distributeurs Vietcombank, BIDV ou ACB (frais modérés). Évitez Citibank (frais élevés)." },
      ]}
    />
  );
};

export default GuideCompletVietnam;
