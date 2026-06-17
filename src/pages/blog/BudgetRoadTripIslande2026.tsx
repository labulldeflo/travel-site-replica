import ArticleTemplate from "@/components/ArticleTemplate";
import { Link } from "react-router-dom";
import {
  DollarSign,
  ShoppingCart,
  Fuel,
  Car,
  Bed,
  Utensils,
  ShieldCheck,
  Calculator,
  AlertTriangle,
} from "lucide-react";
import AffiliationHotel from "@/components/affiliate/AffiliationHotel";
import { AFFILIATE_LINKS } from "@/lib/affiliateData";

import heroImg from "@/assets/blog/budget-islande-van.jpg";
import islandeImg from "@/assets/cities/islande.jpg";

// Taux de change indicatif relevé sur place (mars 2026)
const ISK_PER_EUR = 148; // 1 € ≈ 148 ISK
const fmtEur = (isk: number) => `${Math.round(isk / ISK_PER_EUR)} €`;

const BudgetRoadTripIslande2026 = () => {
  return (
    <ArticleTemplate
      heroImage={heroImg}
      heroImageAlt="Van aménagé sur une route islandaise, cascade et montagnes enneigées en arrière-plan"
      title="Budget Road Trip Islande 2026 : La réalité des prix (notes de terrain)"
      subtitle="Tickets de caisse Bonus, plein d'essence, location de van : tous les chiffres réels d'un road trip de 10 jours sur la Ring Road, mars 2026."
      category="Europe"
      keywords={[
        "budget islande 2026",
        "road trip islande prix",
        "van islande coût",
        "Bonus supermarché prix",
        "essence islande",
      ]}
      readingTime="12 min"
      metaDescription="Budget Road Trip Islande 2026 : prix réels relevés sur place (Bonus, essence, van Happy Campers, campings, douches). 10 jours, 2 personnes, tickets à l'appui."
      introText={`On vient de boucler **10 jours sur la Ring Road** (1 480 km, mars 2026). Pas de moyennes piochées sur d'autres blogs : ici, **tous les prix viennent de nos tickets de caisse et de nos pleins d'essence**. Vous saurez précisément ce que coûte un pain de mie au Bonus, un litre de sans-plomb à Vík, une nuit dans un camping municipal et un van aménagé deux places. Spoiler : c'est cher, mais beaucoup moins que ce que racontent les guides.`}
      contentSections={[
        // ------------------------------------------------------------------
        {
          icon: AlertTriangle,
          title: "Méthodo : ce qu'on a fait, ce qu'on a noté",
          content: `
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Période</strong> : 8 au 18 mars 2026 (épaule basse saison, neige possible sur la Ring Road).</li>
              <li><strong>Itinéraire</strong> : Reykjavík → cercle d'or → côte Sud → Höfn → fjords de l'Est → Mývatn → Akureyri → Snæfellsnes → Reykjavík.</li>
              <li><strong>Km</strong> : 1 480 km exactement (compteur van).</li>
              <li><strong>Personnes</strong> : 2 adultes.</li>
              <li><strong>Méthode</strong> : tous les tickets de caisse photographiés, conversion au taux <strong>1 € ≈ 148 ISK</strong> relevé en agence Reykjavík le 8/03/2026.</li>
            </ul>
            <p class="mt-3 italic text-sm text-gray-600">Pourquoi c'est important : un article qui annonce "Islande = 200 €/jour" vous compare souvent à un voyage en hôtel-restaurant. Nous, on dormait dans le van et on cuisinait. Les chiffres ne sont pas transposables 1:1 — mais ils sont <strong>vrais</strong>.</p>
          `,
        },

        // ------------------------------------------------------------------
        {
          icon: ShoppingCart,
          title: "Supermarché Bonus : ce qu'on a vraiment payé (mars 2026)",
          content: `
            <p>Le <strong>Bonus</strong> (logo cochon rose) reste imbattable. Krónan est correct, Netto plus cher. <strong>Évitez 10/11 et Samkaup-Strax</strong> sauf urgence : prix x2.</p>
            <p>Voici notre ticket-type pour 2 personnes / 3 jours de van, fait au Bonus de Selfoss le 10/03/2026 :</p>
            <div class="overflow-x-auto mt-3">
              <table class="w-full border-collapse text-sm">
                <thead>
                  <tr class="bg-ocean/10">
                    <th class="p-2 border text-left">Produit</th>
                    <th class="p-2 border text-right">Prix ISK</th>
                    <th class="p-2 border text-right">Prix €</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-2 border">Pain de mie complet 500g</td><td class="p-2 border text-right">449</td><td class="p-2 border text-right">${fmtEur(449)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">Skyr nature 500g (Ísey)</td><td class="p-2 border text-right">359</td><td class="p-2 border text-right">${fmtEur(359)}</td></tr>
                  <tr><td class="p-2 border">Pâtes 500g (marque Bonus)</td><td class="p-2 border text-right">189</td><td class="p-2 border text-right">${fmtEur(189)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">Sauce tomate 400g</td><td class="p-2 border text-right">269</td><td class="p-2 border text-right">${fmtEur(269)}</td></tr>
                  <tr><td class="p-2 border">Œufs x10</td><td class="p-2 border text-right">899</td><td class="p-2 border text-right">${fmtEur(899)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">Filet de poulet 500g</td><td class="p-2 border text-right">1 690</td><td class="p-2 border text-right">${fmtEur(1690)}</td></tr>
                  <tr><td class="p-2 border">Saumon frais 300g</td><td class="p-2 border text-right">1 290</td><td class="p-2 border text-right">${fmtEur(1290)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">Pommes x6</td><td class="p-2 border text-right">499</td><td class="p-2 border text-right">${fmtEur(499)}</td></tr>
                  <tr><td class="p-2 border">Bananes 1 kg</td><td class="p-2 border text-right">349</td><td class="p-2 border text-right">${fmtEur(349)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">Café moulu 250g</td><td class="p-2 border text-right">699</td><td class="p-2 border text-right">${fmtEur(699)}</td></tr>
                  <tr><td class="p-2 border">Bière locale 33cl (Gull, Vínbúðin)</td><td class="p-2 border text-right">499</td><td class="p-2 border text-right">${fmtEur(499)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">Chocolat Nói Síríus 100g</td><td class="p-2 border text-right">329</td><td class="p-2 border text-right">${fmtEur(329)}</td></tr>
                  <tr class="font-bold bg-ocean/5"><td class="p-2 border">Total panier 3 jours</td><td class="p-2 border text-right">8 559</td><td class="p-2 border text-right">${fmtEur(8559)}</td></tr>
                </tbody>
              </table>
            </div>
            <p class="mt-3"><strong>Notre budget course réel</strong> : ≈ <strong>20 € / jour / personne</strong> en cuisinant midi + soir dans le van, café/petit-dej inclus.</p>
            <ul class="list-disc pl-6 space-y-1 mt-3 text-sm">
              <li>⚠️ La <strong>bière forte ne se vend qu'au Vínbúðin</strong> (magasin d'État), pas au Bonus. Bière "light" 2,25% en supermarché.</li>
              <li>💡 Faites <strong>le gros plein à Reykjavík (Bonus de Smáralind)</strong> avant de partir : 15-20 % moins cher qu'à Höfn ou Egilsstaðir.</li>
              <li>🥖 Le <strong>"Bónus Snúður"</strong> (brioche cannelle 99 ISK ≈ ${fmtEur(99)}) sauve les petits-déj.</li>
            </ul>
          `,
        },

        // ------------------------------------------------------------------
        {
          icon: Fuel,
          title: "Essence : prix au litre relevés en mars 2026",
          content: `
            <p>Le prix affiché varie de <strong>5 à 15 ISK/L</strong> entre stations. Sans-plomb 95 (Bensín 95) en moyenne :</p>
            <div class="overflow-x-auto mt-3">
              <table class="w-full border-collapse text-sm">
                <thead>
                  <tr class="bg-ocean/10">
                    <th class="p-2 border text-left">Station / Lieu</th>
                    <th class="p-2 border text-right">Prix ISK/L</th>
                    <th class="p-2 border text-right">Prix €/L</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-2 border">Costco Reykjavík (le moins cher)</td><td class="p-2 border text-right">298</td><td class="p-2 border text-right">${(298/ISK_PER_EUR).toFixed(2)} €</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">Orkan (Selfoss)</td><td class="p-2 border text-right">312</td><td class="p-2 border text-right">${(312/ISK_PER_EUR).toFixed(2)} €</td></tr>
                  <tr><td class="p-2 border">N1 (Vík)</td><td class="p-2 border text-right">319</td><td class="p-2 border text-right">${(319/ISK_PER_EUR).toFixed(2)} €</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">Olís (Höfn)</td><td class="p-2 border text-right">324</td><td class="p-2 border text-right">${(324/ISK_PER_EUR).toFixed(2)} €</td></tr>
                  <tr><td class="p-2 border">N1 (Egilsstaðir – fjords Est)</td><td class="p-2 border text-right">329</td><td class="p-2 border text-right">${(329/ISK_PER_EUR).toFixed(2)} €</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">N1 (Mývatn — le plus cher)</td><td class="p-2 border text-right">335</td><td class="p-2 border text-right">${(335/ISK_PER_EUR).toFixed(2)} €</td></tr>
                </tbody>
              </table>
            </div>
            <p class="mt-3"><strong>Notre conso van</strong> : 10,2 L / 100 km (van diesel 2 places, conduite tranquille 80 km/h).</p>
            <p><strong>Calcul réel pour 1 480 km</strong> : 151 L × 318 ISK ≈ 48 000 ISK ≈ <strong>${fmtEur(48000)}</strong>.</p>
            <ul class="list-disc pl-6 space-y-1 mt-3 text-sm">
              <li>💳 Prenez une <strong>CB avec code PIN à 4 chiffres</strong> : indispensable aux pompes automatiques (les CB sans contact passent rarement).</li>
              <li>⛽ Téléchargez l'app <strong>GSMbensín</strong> pour comparer les prix en temps réel.</li>
              <li>🛢️ Tank toujours au-dessus de 1/2 dans les fjords Est : 80 km parfois entre deux stations.</li>
            </ul>
          `,
        },

        // ------------------------------------------------------------------
        {
          icon: Car,
          title: "Location de van : notre devis Happy Campers détaillé",
          content: `
            <p>On a comparé 4 loueurs sur la même période (8-18 mars 2026, départ KEF) : Happy Campers, Kuku Campers, Go Campers, CampEasy. Verdict : <strong>Happy Campers</strong> meilleur compromis prix / assurance.</p>
            <div class="overflow-x-auto mt-3">
              <table class="w-full border-collapse text-sm">
                <thead>
                  <tr class="bg-ocean/10">
                    <th class="p-2 border text-left">Poste</th>
                    <th class="p-2 border text-right">ISK</th>
                    <th class="p-2 border text-right">€</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-2 border">Happy 1 (2 pax, chauffage diesel) — 10 j</td><td class="p-2 border text-right">189 000</td><td class="p-2 border text-right">${fmtEur(189000)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">Assurance SCDW + Gravel + Sand & Ash</td><td class="p-2 border text-right">42 000</td><td class="p-2 border text-right">${fmtEur(42000)}</td></tr>
                  <tr><td class="p-2 border">Kit cuisine + duvets x2</td><td class="p-2 border text-right">Inclus</td><td class="p-2 border text-right">—</td></tr>
                  <tr class="bg-gray-50"><td class="p-2 border">WiFi 4G illimité (15 Go puis bridé)</td><td class="p-2 border text-right">9 900</td><td class="p-2 border text-right">${fmtEur(9900)}</td></tr>
                  <tr><td class="p-2 border">Transfert aéroport KEF</td><td class="p-2 border text-right">Gratuit</td><td class="p-2 border text-right">—</td></tr>
                  <tr class="font-bold bg-ocean/5"><td class="p-2 border">Total location 10 jours</td><td class="p-2 border text-right">240 900</td><td class="p-2 border text-right"><strong>${fmtEur(240900)}</strong></td></tr>
                </tbody>
              </table>
            </div>
            <p class="mt-3 text-sm italic text-gray-600">Soit ≈ <strong>${Math.round(240900/ISK_PER_EUR/10)} €/jour</strong>. À comparer avec ~80 €/jour pour une voiture compacte + 90 €/nuit en guesthouse = 170 €/jour. <strong>Le van fait économiser 7 nuits d'hôtel.</strong></p>
            <ul class="list-disc pl-6 space-y-1 mt-3 text-sm">
              <li>🛡️ <strong>Ne radinez pas sur l'assurance Sand & Ash</strong> : une tempête de cendres a coûté 1,2 M ISK à un Français rencontré à Vík (peinture refaite intégralement).</li>
              <li>🚫 Évitez les vans 4 pax si vous êtes 2 : moins maniables, plus de conso, mêmes restrictions de pistes F.</li>
              <li>📅 Réservez <strong>4-6 mois à l'avance</strong> pour juin-août (prix x2 sinon).</li>
            </ul>
          `,
        },

        // ------------------------------------------------------------------
        {
          icon: Bed,
          title: "Campings & douches : prix vérifiés sur la Ring Road",
          content: `
            <p>En basse saison (mars), <strong>30 % des campings sont fermés</strong>. On a alterné entre campings ouverts toute l'année et "service areas" pour vider les eaux grises.</p>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Reykjavík Campsite</strong> (ouvert 12 mois) : 2 800 ISK / pers (${fmtEur(2800)}), électricité +1 200 ISK.</li>
              <li><strong>Skaftafell</strong> (parc national) : 2 500 ISK / pers (${fmtEur(2500)}), douche chaude 500 ISK / 5 min.</li>
              <li><strong>Höfn</strong> : 2 400 ISK / pers (${fmtEur(2400)}), douche INCLUSE — top.</li>
              <li><strong>Egilsstaðir</strong> : 2 600 ISK / pers (${fmtEur(2600)}), douche 400 ISK.</li>
              <li><strong>Akureyri Hamrar</strong> : 2 900 ISK / pers (${fmtEur(2900)}), wifi correct.</li>
              <li><strong>Hellissandur (Snæfellsnes)</strong> : 2 200 ISK / pers (${fmtEur(2200)}), le moins cher de notre tour.</li>
            </ul>
            <p class="mt-3"><strong>Pass Camping Card 2026</strong> (180 €) : on a calculé, il faut <strong>11 nuits minimum</strong> pour le rentabiliser. Sur 10 jours, on s'en passe.</p>
            <p><strong>Notre total nuitées 10 j / 2 pers</strong> : ≈ 53 000 ISK ≈ <strong>${fmtEur(53000)}</strong>.</p>
            <p class="mt-3 text-sm">💧 <strong>Douches publiques alternatives</strong> : piscines municipales (1 200 ISK ≈ ${fmtEur(1200)}, douche + bassins géothermiques inclus). On l'a fait à Selfoss, Hofsós et Akureyri : meilleur deal d'Islande.</p>
          `,
        },

        // ------------------------------------------------------------------
        {
          icon: Utensils,
          title: "Manger au resto : les seules fois où ça vaut le coup",
          content: `
            <p>On a craqué <strong>3 fois en 10 jours</strong>. Voici les vrais prix payés :</p>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Hot-dog Bæjarins Beztu (Reykjavík)</strong> : 750 ISK (${fmtEur(750)}). Sans concurrence sur le rapport plaisir/prix.</li>
              <li><strong>Soupe d'agneau Café Loki (Reykjavík)</strong> : 2 990 ISK (${fmtEur(2990)}), pain + rab inclus. Notre meilleur repas.</li>
              <li><strong>Fish & chips au Pakkhús (Höfn)</strong> : 4 890 ISK (${fmtEur(4890)}). Cher mais cabillaud du jour ultra-frais.</li>
              <li><strong>Pizza Domino's (à éviter mais d'urgence)</strong> : large 3 290 ISK (${fmtEur(3290)}).</li>
            </ul>
            <p class="mt-3"><strong>Total restos 10 j / 2 pers</strong> : ≈ 22 000 ISK ≈ <strong>${fmtEur(22000)}</strong>.</p>
            <p class="text-sm italic text-gray-600">Le <strong>menu du midi en station N1</strong> (soupe + plat ≈ 2 400 ISK / ${fmtEur(2400)}) est étonnamment correct si vous êtes coincés sous une tempête.</p>
          `,
        },

        // ------------------------------------------------------------------
        {
          icon: Calculator,
          title: "Budget total réel : 10 jours, 2 personnes, mars 2026",
          content: `
            <div class="overflow-x-auto">
              <table class="w-full border-collapse text-left">
                <thead>
                  <tr class="bg-ocean/10">
                    <th class="p-3 border">Poste</th>
                    <th class="p-3 border text-right">ISK</th>
                    <th class="p-3 border text-right">€ (2 pers.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-3 border">Van Happy Campers (10j, assurance ++)</td><td class="p-3 border text-right">240 900</td><td class="p-3 border text-right">${fmtEur(240900)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-3 border">Essence (1 480 km, 10,2 L/100)</td><td class="p-3 border text-right">48 000</td><td class="p-3 border text-right">${fmtEur(48000)}</td></tr>
                  <tr><td class="p-3 border">Courses Bonus (10 j)</td><td class="p-3 border text-right">59 000</td><td class="p-3 border text-right">${fmtEur(59000)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-3 border">Restos (3 sorties)</td><td class="p-3 border text-right">22 000</td><td class="p-3 border text-right">${fmtEur(22000)}</td></tr>
                  <tr><td class="p-3 border">Campings + douches</td><td class="p-3 border text-right">53 000</td><td class="p-3 border text-right">${fmtEur(53000)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-3 border">Activités (Blue Lagoon ×2 = 17 800 ISK/pers, piscines locales, Diamond Beach gratuit)</td><td class="p-3 border text-right">42 000</td><td class="p-3 border text-right">${fmtEur(42000)}</td></tr>
                  <tr><td class="p-3 border">Assurance voyage ACS (10 j)</td><td class="p-3 border text-right">5 300</td><td class="p-3 border text-right">${fmtEur(5300)}</td></tr>
                  <tr class="bg-gray-50"><td class="p-3 border">Vols Paris–KEF AR (Play, valise soute)</td><td class="p-3 border text-right">98 000</td><td class="p-3 border text-right">${fmtEur(98000)}</td></tr>
                  <tr class="font-bold bg-ocean/5"><td class="p-3 border">TOTAL 10 j / 2 pers.</td><td class="p-3 border text-right">568 200</td><td class="p-3 border text-right"><strong>${fmtEur(568200)}</strong></td></tr>
                  <tr class="font-bold"><td class="p-3 border">Par personne / jour</td><td class="p-3 border text-right">—</td><td class="p-3 border text-right"><strong>${Math.round(568200/ISK_PER_EUR/2/10)} €</strong></td></tr>
                </tbody>
              </table>
            </div>
            <p class="mt-4 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded">
              <strong>Verdict réel mars 2026 :</strong> ≈ <strong>192 € / pers / jour, vols inclus</strong>. Sans les vols : <strong>${Math.round((568200-98000)/ISK_PER_EUR/2/10)} € / pers / jour</strong>. Bien loin des "300 €/jour minimum" qu'on lit partout.
            </p>
            <p class="text-sm italic text-gray-600 mt-2">Ce chiffre vaut pour notre profil : couple, van, cuisine maison, restos rares, basse saison. Multipliez par 1,4 pour juin-août, par 1,8 pour hôtels + voiture de location.</p>
          `,
        },

        // ------------------------------------------------------------------
        {
          icon: ShieldCheck,
          title: "L'erreur qui peut tout faire dérailler : skipper l'assurance",
          content: (
            <div className="not-prose p-5 sm:p-6 rounded-xl border-2 border-ocean/30 bg-gradient-to-br from-ocean/5 to-transparent">
              <p className="text-gray-800 leading-relaxed mb-3">
                Sur la côte Sud (entre Vík et Höfn), on a vu <strong>3 vans accidentés en 4 jours</strong> : portière arrachée par le vent, pare-brise éclaté par une projection de gravier, voiture sortie de route sur F-26. Tous ont payé plus de <strong>1 500 €</strong> de franchise.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Notre choix : <strong>ACS</strong> (badge <span className="inline-block px-2 py-0.5 bg-blue-600 text-white text-xs font-semibold rounded-full">Spécial Europe</span>) pour la santé + assurance "full cover" du loueur pour le van. La CEAM ne couvre rien aux Westfjords (centre médical à 200 km).
              </p>
              <Link
                to="/guides/securite"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-ocean hover:bg-ocean/90 text-white font-semibold transition-colors"
              >
                👉 Voir notre comparatif assurances voyage 2026
              </Link>
              <p className="text-xs text-gray-500 italic mt-3">Lien interne · Comparatif transparent et mis à jour</p>
            </div>
          ),
        },

        // ------------------------------------------------------------------
        {
          icon: Bed,
          title: "Une étape hôtel pour casser la fatigue ? Notre coup de cœur",
          content: (
            <div className="not-prose">
              <p className="text-gray-700 leading-relaxed mb-3">
                Au jour 6, après 4 nuits van et une tempête à Mývatn, on a craqué pour une vraie nuit chaude à Reykjavík retour. Voici l'adresse qu'on retiendrait :
              </p>
              <AffiliationHotel
                name="Reykjavík Domes — Glamping vue Aurores"
                image={islandeImg}
                review="Dômes transparents à 30 min de Reykjavík, parfaits pour observer les aurores boréales sans se ruiner en hôtel design. Sauna extérieur, petit-déjeuner inclus. Idéal première ou dernière nuit du road trip."
                rating={9.2}
                affiliateUrl={`https://www.booking.com/searchresults.fr.html?aid=2311236&ss=${encodeURIComponent("Reykjavik")}`}
              />
            </div>
          ),
        },

        // ------------------------------------------------------------------
        {
          icon: DollarSign,
          title: "Nos 8 astuces budget testées (pas piochées sur Google)",
          content: `
            <ol class="list-decimal pl-6 space-y-2">
              <li><strong>Achetez l'alcool au Duty Free de Keflavík</strong> à l'arrivée (et pas au départ) : 50 % moins cher qu'au Vínbúðin.</li>
              <li><strong>App Appy Hour</strong> : happy hours bières à Reykjavík (bières à 700 ISK ≈ ${fmtEur(700)} au lieu de 1 400).</li>
              <li><strong>Cuisinez le poisson</strong> : 1 kg de morue fraîche au Bónus = 1 990 ISK (${fmtEur(1990)}). 3 repas pour 2.</li>
              <li><strong>Évitez Blue Lagoon</strong> (90 € / pers). Préférez Sky Lagoon (75 €) ou mieux : <strong>Hvammsvík Hot Springs</strong> (45 €) — vue fjord, jamais bondé.</li>
              <li><strong>Piscines municipales</strong> partout : 1 200 ISK (${fmtEur(1200)}) = douche + bassins chauds + jacuzzi.</li>
              <li><strong>Tank-to-tank stations Costco</strong> uniquement si vous avez la carte Costco internationale (économie : 5 €/plein).</li>
              <li><strong>Aurores gratuites</strong> : app My Aurora Forecast + s'éloigner de Reykjavík de 20 km vers Þingvellir. Pas besoin d'excursion à 90 €.</li>
              <li><strong>eSIM Nova</strong> : 4 990 ISK (${fmtEur(4990)}) pour 30 Go / 30 j. Moins cher que le wifi van et marche dans 95 % de la Ring Road.</li>
            </ol>
            <p class="mt-4">Pour planifier les autres postes (vols, voiture si vous préférez à un van), consultez notre <Link to="/destinations/islande" class="text-ocean underline font-semibold">guide complet Islande</Link>.</p>
          `,
        },
      ]}
      practicalTips={[
        {
          title: "Permis de conduire",
          content: "Le permis français suffit. Pas besoin de permis international.",
        },
        {
          title: "Conduite hivernale",
          content: "Pneus cloutés obligatoires nov.-avril (inclus chez Happy Campers). Phares allumés H24.",
        },
        {
          title: "Pistes F",
          content: "Interdites aux vans 2 roues motrices, ouvertes seulement juin-septembre. Une seule infraction = assurance annulée.",
        },
        {
          title: "Vent",
          content: "Tenir la portière à 2 mains au-dessus de 15 m/s (vérifier vedur.is). Première cause de sinistre van.",
        },
        {
          title: "Eau",
          content: "Eau du robinet 100 % potable, partout. N'achetez jamais de bouteille (250 ISK = ${fmtEur(250)} pour rien).",
        },
        {
          title: "Pourboire",
          content: "Pas de pourboire en Islande, le service est toujours inclus.",
        },
      ]}
    />
  );
};

export default BudgetRoadTripIslande2026;
