import ArticleTemplate from "@/components/ArticleTemplate";
import { Calendar, Clock, DollarSign, MapPin, Plane, Train, Mountain, Sparkles } from "lucide-react";
import tokyoImg from "@/assets/cities/tokyo.jpg";

const ItineraireJapon2Semaines = () => {
  return (
    <ArticleTemplate
      heroImage={tokyoImg}
      heroImageAlt="Vue panoramique de Tokyo au coucher du soleil avec le Mont Fuji"
      title="Itinéraire Japon 2 semaines : Tokyo, Kyoto, Osaka (2025)"
      subtitle="Notre itinéraire backpacker complet pour découvrir l'essentiel du Japon en 14 jours, sans se ruiner."
      category="Japon"
      keywords={["itinéraire japon 2 semaines", "japon backpacker", "tokyo kyoto osaka", "voyage japon pas cher"]}
      readingTime="9 min"
      metaDescription="Découvrez notre itinéraire Japon 2 semaines complet pour backpackers : Tokyo, Nikko, Hakone, Kyoto, Nara et Osaka. Conseils pratiques, budget et transports inclus."
      introText="Deux semaines au Japon, c'est court mais suffisant pour tomber amoureux du pays. Entre temples millénaires, néons tokyoïtes, bols de ramen fumants et forêts de bambous, cet itinéraire backpacker couvre l'essentiel sans se ruiner."
      contentSections={[
        {
          icon: Sparkles,
          title: "Ce qu'il faut savoir avant de partir",
          content: `
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Visa :</strong> gratuit pour les Français, tampon à l'arrivée (90 jours maximum).</li>
              <li><strong>Meilleure période :</strong> mars-avril (cerisiers) ou octobre-novembre (feuillage automnal).</li>
              <li><strong>Budget moyen :</strong> 80-100€/jour en auberge de jeunesse, transports et restaurants locaux.</li>
              <li><strong>Transport principal :</strong> Japan Rail Pass 14 jours (~430€) — rentable si vous suivez cet itinéraire.</li>
              <li><strong>Application indispensable :</strong> Google Maps fonctionne parfaitement au Japon, ajoutez Hyperdia pour les trains.</li>
            </ul>
          `,
        },
        {
          icon: MapPin,
          title: "Jours 1-5 : Tokyo, l'effervescence nippone",
          content: `
            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 1 — Arrivée et Shinjuku</h3>
            <p>Atterrissage à l'aéroport de Narita ou Haneda. Prenez le Narita Express (JR Pass) jusqu'à Shinjuku. Posez vos affaires à l'auberge et partez explorer le quartier à la nuit tombée : Golden Gai, Kabukicho et la vue depuis le belvédère gratuit du gouvernement métropolitain.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 2 — Shibuya et Harajuku</h3>
            <p>Commencez par le célèbre carrefour de Shibuya, puis remontez vers Harajuku pour la rue Takeshita et le parc Yoyogi. L'après-midi, perdez-vous dans Omotesando, le quartier branché de Tokyo. Dîner dans un izakaya typique.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 3 — Asakusa et Akihabara</h3>
            <p>Réveil matinal pour visiter le temple Senso-ji avant les touristes (avant 8h, c'est magique). Balade dans le vieux quartier d'Asakusa, puis cap sur Akihabara pour l'univers manga et électronique. Parfait pour les curieux.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 4 — Excursion à Nikko</h3>
            <p>En JR Pass, 2h de Tokyo. Les sanctuaires de Nikko sont classés à l'UNESCO et souvent oubliés des backpackers — c'est l'occasion de les devancer. Retour à Tokyo le soir.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 5 — Odaiba et Shimokitazawa</h3>
            <p>Matinée à Odaiba pour la vue sur la baie. Après-midi dans Shimokitazawa, le quartier vintage et bohème de Tokyo, idéal pour chiner et boire un café dans un coffee shop indépendant.</p>

            <div class="mt-4 p-4 bg-ocean/10 border-l-4 border-ocean rounded-r-lg">
              <p class="font-semibold text-ocean">🛏️ Où dormir à Tokyo</p>
              <p class="text-gray-700">K's House Tokyo, Khaosan Tokyo ou Nui Hostel (25-35€/nuit en dortoir).</p>
            </div>
          `,
        },
        {
          icon: Mountain,
          title: "Jours 6-7 : Hakone, sources chaudes et Mont Fuji",
          content: `
            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 6 — Route vers Hakone</h3>
            <p>Quittez Tokyo en direction de Hakone avec le JR Pass. Cette région volcanique offre, par temps clair, une vue imprenable sur le Mont Fuji. Installez-vous dans un hostel ou un ryokan d'entrée de gamme.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 7 — Sources chaudes et lac Ashi</h3>
            <p>Matinée au bord du lac Ashi avec vue sur le Fuji (si la météo coopère). Balade dans le parc national et bain dans un onsen public le soir — une expérience incontournable au Japon. Comptez 5-10€ pour un onsen public.</p>
          `,
        },
        {
          icon: MapPin,
          title: "Jours 8-10 : Kyoto, l'âme du Japon traditionnel",
          content: `
            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 8 — Arrivée et Fushimi Inari</h3>
            <p>Shinkansen Hakone → Kyoto (JR Pass). Posez vos affaires puis direction Fushimi Inari : les milliers de torii orangés sont encore plus beaux en montant jusqu'en haut (1h30 de marche aller-retour). Arrivez vers 17h pour éviter les foules.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 9 — Arashiyama et Gion</h3>
            <p>Réveil tôt pour Arashiyama : la forêt de bambous est sublime à l'aube. Visitez aussi le temple Tenryu-ji et son jardin. L'après-midi, explorez le quartier de Gion, la zone des geishas. Flânez dans la rue Hanamikoji à la tombée de la nuit.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 10 — Temples et quartier Higashiyama</h3>
            <p>Journée complète dans le quartier Higashiyama : temple Kiyomizudera, ruelle Ninenzaka et Sannenzaka. Finissez par le Nishiki Market, le marché couvert de Kyoto, pour grignoter des spécialités locales.</p>

            <div class="mt-4 p-4 bg-ocean/10 border-l-4 border-ocean rounded-r-lg">
              <p class="font-semibold text-ocean">🛏️ Où dormir à Kyoto</p>
              <p class="text-gray-700">Piece Hostel, Len Kyoto ou The Millennials Kyoto (25-40€/nuit).</p>
            </div>
          `,
        },
        {
          icon: Train,
          title: "Jour 11 : Nara, excursion au pays des cerfs",
          content: `
            <p>30 minutes de train depuis Kyoto. Nara est célèbre pour ses cerfs en liberté qui se baladent dans le parc. Visitez le Todai-ji, le plus grand temple en bois du monde, abritant un Bouddha géant de bronze. Retour à Kyoto le soir ou transfert direct vers Osaka.</p>
          `,
        },
        {
          icon: MapPin,
          title: "Jours 12-14 : Osaka, capitale culinaire",
          content: `
            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 12 — Dotonbori et street food</h3>
            <p>Osaka est la capitale culinaire du Japon. Première étape obligatoire : Dotonbori le soir, avec ses enseignes lumineuses et ses takoyaki (boulettes de poulpe) à déguster sur le pouce. Prévoyez un budget street food de 15-20€ pour la soirée.</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 13 — Château d'Osaka et Shinsekai</h3>
            <p>Matinée au château d'Osaka entouré de douves. Après-midi dans Shinsekai, le vieux quartier populaire avec ses tours Tsutenkaku et ses restaurants de kushikatsu (brochettes panées).</p>

            <h3 class="text-xl font-bold text-ocean mt-4 mb-2">Jour 14 — Marché Kuromon et départ</h3>
            <p>Dernière matinée au marché Kuromon, le "ventre d'Osaka", pour un petit-déjeuner local. Transfert vers l'aéroport du Kansai (KIX) en JR Express depuis Osaka.</p>

            <div class="mt-4 p-4 bg-ocean/10 border-l-4 border-ocean rounded-r-lg">
              <p class="font-semibold text-ocean">🛏️ Où dormir à Osaka</p>
              <p class="text-gray-700">Hana Hostel, J-Hoppers ou The Dorm (20-35€/nuit).</p>
            </div>
          `,
        },
        {
          icon: DollarSign,
          title: "Budget estimé pour 2 semaines",
          content: `
            <div class="overflow-x-auto">
              <table class="w-full border-collapse text-left">
                <thead>
                  <tr class="bg-ocean/10">
                    <th class="p-3 border border-gray-200">Poste</th>
                    <th class="p-3 border border-gray-200">Budget serré</th>
                    <th class="p-3 border border-gray-200">Budget confort</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-3 border border-gray-200">Hébergement (14 nuits)</td><td class="p-3 border border-gray-200">350€</td><td class="p-3 border border-gray-200">560€</td></tr>
                  <tr class="bg-gray-50"><td class="p-3 border border-gray-200">Japan Rail Pass</td><td class="p-3 border border-gray-200">430€</td><td class="p-3 border border-gray-200">430€</td></tr>
                  <tr><td class="p-3 border border-gray-200">Nourriture</td><td class="p-3 border border-gray-200">280€</td><td class="p-3 border border-gray-200">420€</td></tr>
                  <tr class="bg-gray-50"><td class="p-3 border border-gray-200">Activités &amp; entrées</td><td class="p-3 border border-gray-200">100€</td><td class="p-3 border border-gray-200">200€</td></tr>
                  <tr class="font-bold bg-ocean/5"><td class="p-3 border border-gray-200">Total</td><td class="p-3 border border-gray-200">1 160€</td><td class="p-3 border border-gray-200">1 610€</td></tr>
                </tbody>
              </table>
            </div>
            <p class="mt-3 italic text-sm text-gray-600">Vols non inclus — comptez 600-900€ depuis la France selon la saison.</p>
          `,
        },
      ]}
      gastronomyTitle="À goûter absolument pendant votre itinéraire"
      gastronomyIntro="Chaque ville traversée a sa spécialité culinaire. Voici les plats à ne pas manquer."
      gastronomyItems={[
        { title: "🍜 Ramen (Tokyo)", description: "Bouillon riche, nouilles fermes : un incontournable, surtout dans les petits comptoirs de Shinjuku." },
        { title: "🐙 Takoyaki (Osaka)", description: "Les célèbres boulettes de poulpe à déguster sur le pouce à Dotonbori." },
        { title: "🍢 Kushikatsu (Osaka)", description: "Brochettes panées et frites, spécialité populaire de Shinsekai." },
        { title: "🍵 Matcha (Kyoto)", description: "Thé vert cérémoniel à savourer dans une maison de thé traditionnelle de Gion." },
        { title: "🍣 Sushi de marché (Osaka)", description: "Au marché Kuromon, fraîcheur incomparable pour quelques euros." },
        { title: "🍡 Dango et wagashi (Nara)", description: "Petites pâtisseries traditionnelles, parfaites en pause après la visite des temples." },
      ]}
      practicalTips={[
        {
          title: "💴 Retirer des yens",
          content: "Les DAB des konbini (7-Eleven, Lawson) acceptent les cartes étrangères 24h/24, partout au Japon. Inutile de changer en France.",
        },
        {
          title: "📶 Wi-Fi et data",
          content: "Louez un pocket Wi-Fi à l'aéroport (~7€/jour) ou achetez une eSIM data. Indispensable pour naviguer avec Google Maps et Hyperdia.",
        },
        {
          title: "🙅 Pourboires",
          content: "Zéro pourboire au Japon — c'est même considéré comme impoli. Le service est inclus partout.",
        },
        {
          title: "👟 Chaussures faciles à enlever",
          content: "Vous les retirerez très souvent : temples, ryokans, certains restaurants. Privilégiez des modèles sans lacets.",
        },
        {
          title: "🚇 IC Card (Suica / Pasmo)",
          content: "Rechargez une carte IC pour les transports urbains (métros, bus) non couverts par le JR Pass. Achat dans toutes les grandes gares.",
        },
        {
          title: "🎫 Japan Rail Pass : à acheter avant le départ",
          content: "Achetez votre JR Pass en ligne avant de partir : c'est moins cher et plus simple. Indispensable pour cet itinéraire avec Shinkansen.",
        },
      ]}
      conclusionText="Deux semaines au Japon laissent un souvenir intense. Ce circuit Tokyo-Hakone-Kyoto-Nara-Osaka est le grand classique des backpackers, équilibré entre modernité, traditions, nature et gastronomie. Préparez bien votre JR Pass, vos hébergements et vos applications, et vous repartirez avec l'envie d'y revenir."
      sidebarInfos={[
        { icon: Calendar, label: "Durée idéale", value: "14 jours", iconColor: "text-ocean" },
        { icon: Clock, label: "Meilleure période", value: "Mars-Avril / Oct-Nov", iconColor: "text-green-600" },
        { icon: DollarSign, label: "Budget total", value: "1 160 € – 1 610 €", iconColor: "text-orange-600" },
        { icon: Train, label: "Transport", value: "Japan Rail Pass 14 jours", iconColor: "text-purple-600" },
        { icon: Plane, label: "Vol depuis France", value: "600 – 900 €", iconColor: "text-red-600" },
        { icon: MapPin, label: "Étapes clés", value: "Tokyo · Hakone · Kyoto · Nara · Osaka", iconColor: "text-ocean" },
      ]}
      affiliateCity="Tokyo"
      affiliateCountryCode="jp"
      relatedArticles={[
        { title: "🚄 Japan Rail Pass : est-ce rentable en 2025 ?", url: "/blog/jr-pass-japon" },
        { title: "💰 Budget voyage Japon", url: "/blog/budget-voyage-japon" },
        { title: "🛡️ Meilleure assurance voyage Japon", url: "/comparatifs/meilleure-assurance-voyage-japon" },
      ]}
      destinationLink="/destinations/japon"
      ctaTitle="🗾 Tous nos guides Japon"
      internalLinks={[
        { label: "Guide complet voyage Japon", url: "/blog/guide-complet-japon" },
        { label: "Itinéraire Japon 7 jours", url: "/blog/itineraire-japon-7-jours" },
        { label: "Itinéraire Japon 10 jours", url: "/blog/itineraire-japon-10-jours" },
        { label: "Quand partir au Japon", url: "/blog/quand-partir-japon" },
        { label: "Que faire à Tokyo", url: "/blog/que-faire-tokyo" },
        { label: "Que faire à Kyoto", url: "/blog/que-faire-kyoto" },
        { label: "Que faire à Osaka", url: "/blog/que-faire-osaka" },
        { label: "Meilleure eSIM Japon", url: "/comparatifs/meilleure-esim-japon" },
      ]}
      faqs={[
        {
          question: "Cet itinéraire Japon 2 semaines convient-il aux backpackers ?",
          answer: "Oui, il est conçu pour des backpackers avec un budget maîtrisé : auberges de jeunesse, transports JR Pass, repas locaux dans des konbini ou des izakayas. Comptez environ 1 160€ sur place hors vols.",
        },
        {
          question: "Le Japan Rail Pass est-il vraiment rentable pour 14 jours ?",
          answer: "Oui pour cet itinéraire. Avec Tokyo → Hakone → Kyoto → Osaka et plusieurs excursions (Nikko, Nara), un JR Pass 14 jours (~430€) revient moins cher que des billets achetés à l'unité.",
        },
        {
          question: "Quelle est la meilleure période pour partir au Japon ?",
          answer: "Mars-avril pour les cerisiers en fleurs (sakura) ou octobre-novembre pour le feuillage automnal (momiji). L'été est chaud et humide, l'hiver est sec mais froid.",
        },
        {
          question: "Faut-il un visa pour le Japon ?",
          answer: "Non, les ressortissants français bénéficient d'une exemption de visa pour des séjours touristiques jusqu'à 90 jours. Le tampon est délivré à l'arrivée.",
        },
        {
          question: "Quel budget prévoir pour 2 semaines au Japon ?",
          answer: "Comptez entre 1 160€ (budget serré, auberges et repas locaux) et 1 610€ (budget confort, hôtels milieu de gamme et restaurants), hors vols. Ajoutez 600-900€ pour le vol depuis la France.",
        },
      ]}
    />
  );
};

export default ItineraireJapon2Semaines;
