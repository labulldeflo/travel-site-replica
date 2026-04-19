import ArticleTemplate from "@/components/ArticleTemplate";
import { Calendar, Clock, DollarSign, MapPin, Train, Sparkles, ShoppingBag, Utensils } from "lucide-react";
import tokyoImg from "@/assets/cities/tokyo.jpg";

const JaponPasCherAstuces = () => {
  return (
    <ArticleTemplate
      heroImage={tokyoImg}
      heroImageAlt="Rue animée de Tokyo avec ses enseignes lumineuses et ses konbinis"
      title="Japon pas cher : 12 astuces pour voyager avec un petit budget (2025)"
      subtitle="Voyager au Japon sans se ruiner, c'est possible. Découvrez 12 astuces testées sur le terrain pour réduire son budget au maximum."
      category="Japon"
      keywords={["japon pas cher", "budget japon backpacker", "voyager japon petit budget", "astuces japon économies"]}
      readingTime="7 min"
      metaDescription="Voyager au Japon sans se ruiner, c'est possible ! Découvrez 12 astuces testées par des backpackers pour réduire son budget au Japon : hébergement, transports, nourriture et activités gratuites."
      introText="Le Japon a la réputation d'être une destination hors de prix. C'est en partie vrai — mais en partie seulement. Avec les bonnes habitudes, un backpacker peut s'en sortir pour 60-80€ par jour tout compris. Voici 12 astuces concrètes, testées sur le terrain."
      contentSections={[
        {
          icon: MapPin,
          title: "Hébergement : dormir pas cher au Japon",
          content: `
            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">1. Privilégiez les auberges de jeunesse japonaises</h3>
            <p>Le Japon possède certaines des meilleures auberges au monde : propres, bien situées, avec des espaces communs chaleureux. Un dortoir coûte entre 20 et 35€ la nuit à Tokyo ou Kyoto.</p>
            <p class="mt-2">Les meilleures chaînes : K's House, Khaosan, J-Hoppers, Piece Hostel. Réservez sur Hostelworld ou Booking.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">2. Testez un capsule hotel</h3>
            <p>Comptez 25-40€ la nuit pour une expérience typiquement japonaise. Parfait pour une ou deux nuits, surtout à Tokyo. Certains incluent l'accès à un onsen privé.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">3. Utilisez les manga kissa en dépannage</h3>
            <p>Les manga kissa (cybercafés) proposent des boxes privées pour dormir à partir de 10-15€ la nuit. Solution de secours si tout est complet — pas le plus confortable mais authentique.</p>
          `,
        },
        {
          icon: Train,
          title: "Transports : se déplacer intelligemment",
          content: `
            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">4. Le Japan Rail Pass : calculez avant d'acheter</h3>
            <p>Le JR Pass 14 jours coûte environ 430€. Il est rentable si vous faites Tokyo → Kyoto → Osaka en shinkansen (environ 350€ aller-retour en temps normal). Ajoutez Hakone ou Hiroshima et l'équation est clairement gagnante.</p>
            <p class="mt-2">En revanche, si vous restez dans une seule ville, passez votre chemin.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">5. IC Card pour les trajets urbains</h3>
            <p>La carte Suica ou Pasmo (rechargeable, ~5€ de dépôt) fonctionne dans tous les métros, bus et même certains konbini. Évite d'acheter un ticket à chaque trajet et fait gagner un temps fou.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">6. Le bus de nuit entre les villes</h3>
            <p>Pour les trajets Tokyo → Osaka ou Tokyo → Kyoto, le bus de nuit coûte 30-50€ contre 130€+ en shinkansen sans JR Pass. Vous économisez une nuit d'hôtel en prime. Réservez sur Willer Express ou Kousoku Bus.</p>
          `,
        },
        {
          icon: Utensils,
          title: "Nourriture : manger bien pour pas cher",
          content: `
            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">7. Mangez dans les konbini</h3>
            <p>Les konbinis japonais (7-Eleven, Lawson, FamilyMart) sont une révélation : onigiri, bento, ramen cup, sandwichs chauds — tout est frais, bon et pas cher. Un repas complet pour 3-5€. Les plats du soir sont souvent remisés à 20h.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">8. Les restaurants à ticket (shokken)</h3>
            <p>Ces restaurants avec distributeur automatique à l'entrée (ramen, curry, tonkatsu) affichent les prix avant commande et proposent des plats à partir de 6-8€. Aucun pourboire, aucune interaction — idéal pour les timides.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">9. Les marchés et food halls de sous-sols</h3>
            <p>Les sous-sols des grands magasins (depachika) proposent des plats cuisinés à prix réduit en fin de journée. Comptez 5-8€ pour un repas complet de qualité.</p>
          `,
        },
        {
          icon: Sparkles,
          title: "Activités : profiter sans se ruiner",
          content: `
            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">10. Les temples et jardins sont souvent gratuits</h3>
            <p>Fushimi Inari à Kyoto, le parc de Nara, Senso-ji à Tokyo, Arashiyama — tout ça est gratuit. Les entrées payantes (Kinkaku-ji, Todai-ji) dépassent rarement 5-7€. Priorisez les extérieurs et les promenades.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">11. Les belvédères gratuits</h3>
            <p>Tokyo Government Building (Shinjuku) : vue à 360° sur Tokyo et par temps clair le Fuji — entièrement gratuit. Sky Tree et Tokyo Tower sont spectaculaires mais payants (20-25€). Gardez votre argent pour la nourriture.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">12. Les onsen publics (sentō)</h3>
            <p>Un bain public japonais coûte entre 4 et 8€. C'est l'une des expériences les plus authentiques du pays, accessible à tous les budgets. Cherchez les sentō locaux plutôt que les complexes touristiques pour les prix les plus bas.</p>
          `,
        },
        {
          icon: DollarSign,
          title: "Budget journalier récapitulatif",
          content: `
            <div class="overflow-x-auto">
              <table class="w-full border-collapse text-left">
                <thead>
                  <tr class="bg-ocean/10">
                    <th class="p-3 border border-gray-200">Type de journée</th>
                    <th class="p-3 border border-gray-200">Budget estimé</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-3 border border-gray-200">Journée ultra-économe (konbini + activités gratuites)</td><td class="p-3 border border-gray-200">45-55€</td></tr>
                  <tr class="bg-gray-50"><td class="p-3 border border-gray-200">Journée standard backpacker</td><td class="p-3 border border-gray-200">65-80€</td></tr>
                  <tr><td class="p-3 border border-gray-200">Journée avec shinkansen ou activité payante</td><td class="p-3 border border-gray-200">90-120€</td></tr>
                </tbody>
              </table>
            </div>
            <p class="mt-3 italic text-sm text-gray-600">Hébergement en dortoir inclus dans toutes les estimations.</p>
          `,
        },
        {
          icon: ShoppingBag,
          title: "Les erreurs à éviter",
          content: `
            <ul class="list-disc pl-6 space-y-3">
              <li><strong>Ne pas acheter le JR Pass sans calculer :</strong> selon votre itinéraire, il peut ne pas être rentable.</li>
              <li><strong>Éviter les restaurants à menu photo en anglais :</strong> signe quasi certain de prix touristiques.</li>
              <li><strong>Ne pas négliger les marchés du soir :</strong> les réductions de 20-30% sur les bento après 19h sont systématiques.</li>
              <li><strong>Ne pas retirer de l'argent dans les banques classiques :</strong> seuls les DAB des konbini (7-Eleven surtout) acceptent les cartes étrangères sans problème.</li>
            </ul>
          `,
        },
      ]}
      gastronomyTitle="Manger pas cher au Japon : nos incontournables"
      gastronomyIntro="La street food et les restaurants locaux japonais sont excellents et très abordables. Voici les adresses et plats à privilégier."
      gastronomyItems={[
        { title: "🍙 Onigiri (konbini)", description: "Triangle de riz fourré au saumon, thon ou umeboshi. 1-2€ pièce, repas idéal pour le petit-déjeuner." },
        { title: "🍜 Ramen (comptoir local)", description: "Un bol complet pour 6-10€ dans un petit restaurant à ticket. Évitez les chaînes touristiques." },
        { title: "🍱 Bento du soir (konbini)", description: "Remisés à -20/30% après 19h. Repas complet et varié pour 3-5€." },
        { title: "🍛 Katsu curry (chaînes locales)", description: "Chez CoCo Ichibanya, comptez 7-9€ pour un curry copieux. Personnalisable à volonté." },
        { title: "🥢 Gyoza (izakaya)", description: "6 gyozas grillés pour 3-5€ dans un izakaya de quartier. Accompagnez d'une bière locale." },
        { title: "🍡 Dango (marchés)", description: "Brochettes de mochi sucrées pour 1-2€. Parfaites en en-cas autour des temples." },
      ]}
      practicalTips={[
        {
          title: "💴 Retraits d'argent",
          content: "Utilisez exclusivement les DAB des konbini 7-Eleven — ils acceptent toutes les cartes étrangères, 24h/24, partout au Japon. Évitez les banques classiques.",
        },
        {
          title: "📶 Connexion internet",
          content: "Achetez une eSIM data avant le départ (Airalo, Nomad) — moins cher et plus pratique qu'un pocket Wi-Fi. Comptez 15-20€ pour 15 jours de data illimitée.",
        },
        {
          title: "🙅 Pourboires",
          content: "Zéro pourboire au Japon — c'est considéré comme impoli. Le service est inclus partout, des konbinis aux restaurants étoilés.",
        },
        {
          title: "🎫 JR Pass : achetez avant le départ",
          content: "Le JR Pass s'achète uniquement hors du Japon. Commandez-le en ligne 2-3 semaines avant votre départ sur le site officiel ou chez un revendeur agréé.",
        },
        {
          title: "👟 Chaussures faciles à enlever",
          content: "Vous les retirerez très souvent dans les temples, ryokans et certains restaurants. Privilégiez des modèles sans lacets pour gagner du temps.",
        },
        {
          title: "🌸 Évitez les Golden Week",
          content: "La semaine du 29 avril au 5 mai est une période de vacances nationale au Japon — les prix explosent et tout est complet. Planifiez autour de cette période.",
        },
      ]}
      conclusionText="Le Japon récompense les voyageurs curieux et organisés. La street food est excellente, les transports sont fiables et les activités gratuites sont nombreuses. Avec ces 12 astuces et un peu de préparation, un budget de 70€/jour est tout à fait réaliste — même à Tokyo. Il ne vous reste plus qu'à réserver votre vol."
      sidebarInfos={[
        { icon: DollarSign, label: "Budget journalier", value: "65-80€/jour", iconColor: "text-ocean" },
        { icon: Clock, label: "Meilleure période", value: "Mars-Avril / Oct-Nov", iconColor: "text-green-600" },
        { icon: Train, label: "Transport clé", value: "Japan Rail Pass", iconColor: "text-purple-600" },
        { icon: MapPin, label: "Hébergement", value: "25-35€/nuit en dortoir", iconColor: "text-orange-600" },
        { icon: Utensils, label: "Repas pas cher", value: "3-8€ au konbini", iconColor: "text-red-600" },
        { icon: Calendar, label: "Durée idéale", value: "14-21 jours", iconColor: "text-ocean" },
      ]}
      affiliateCity="Tokyo"
      affiliateCountryCode="jp"
      relatedArticles={[
        { title: "🗾 Itinéraire Japon 2 semaines : Tokyo, Kyoto, Osaka", url: "/blog/itineraire-japon-2-semaines" },
        { title: "🚄 Japan Rail Pass : est-ce rentable en 2025 ?", url: "/blog/jr-pass-japon" },
        { title: "🛡️ Meilleure assurance voyage Japon", url: "/comparatifs/meilleure-assurance-voyage-japon" },
      ]}
      destinationLink="/destinations/japon"
      ctaTitle="🗾 Tous nos guides Japon"
      internalLinks={[
        { label: "Itinéraire Japon 2 semaines", url: "/blog/itineraire-japon-2-semaines" },
        { label: "Itinéraire Japon 7 jours", url: "/blog/itineraire-japon-7-jours" },
        { label: "Que faire à Tokyo", url: "/blog/que-faire-tokyo" },
        { label: "Que faire à Kyoto", url: "/blog/que-faire-kyoto" },
        { label: "Que faire à Osaka", url: "/blog/que-faire-osaka" },
        { label: "Quand partir au Japon", url: "/blog/quand-partir-japon" },
        { label: "Meilleure eSIM Japon", url: "/comparatifs/meilleure-esim-japon" },
        { label: "Guide complet voyage Japon", url: "/blog/guide-complet-japon" },
      ]}
      faqs={[
        {
          question: "Peut-on vraiment voyager au Japon avec un petit budget ?",
          answer: "Oui, un budget de 65-80€/jour est réaliste en dormant en auberge, mangeant dans les konbinis et restaurants locaux, et en utilisant le JR Pass pour les transports. Les activités gratuites sont nombreuses.",
        },
        {
          question: "Le Japan Rail Pass est-il rentable pour un voyage économique ?",
          answer: "Oui, si vous bougez entre plusieurs villes (Tokyo, Kyoto, Osaka, Hiroshima). Pour un séjour concentré dans une seule région, il vaut mieux acheter des billets à l'unité ou utiliser les bus longue distance.",
        },
        {
          question: "Où retirer des yens au Japon sans frais ?",
          answer: "Les DAB des konbinis 7-Eleven acceptent toutes les cartes étrangères sans problème, 24h/24. Les banques classiques refusent souvent les cartes étrangères.",
        },
        {
          question: "Quelle est la période la moins chère pour aller au Japon ?",
          answer: "Janvier-février (hors Nouvel An) et juin (mousson) sont les périodes les moins chères. Évitez absolument la Golden Week (fin avril-début mai) et les cerisiers en fleurs (fin mars-début avril) si vous voulez des prix bas.",
        },
        {
          question: "Les konbinis japonais sont-ils vraiment une bonne option pour manger ?",
          answer: "Absolument — c'est l'une des meilleures surprises du Japon. Les konbinis proposent des plats frais, variés et délicieux pour 3-5€. Un repas y est souvent meilleur que dans de nombreux restaurants européens au même prix.",
        },
      ]}
    />
  );
};

export default JaponPasCherAstuces;
