import ArticleTemplate from "@/components/ArticleTemplate";
import { Compass, DollarSign, Plane, Bed, Backpack, Shield, MapPin, AlertTriangle, Calendar, Briefcase } from "lucide-react";
import tourMondeBudgetImg from "@/assets/blog/tour-monde-budget.jpg";

const OrganiserTourMondeBudget = () => {
  return (
    <ArticleTemplate
      title="Organiser un Tour du Monde avec un Petit Budget : Guide Complet 2026"
      subtitle="Méthode pas à pas, budget réaliste, itinéraires optimisés et astuces d'expert pour partir 6 à 12 mois avec moins de 15 000 €"
      category="Organisation & Budget"
      keywords={["tour du monde budget", "organiser tour du monde", "tour du monde pas cher", "budget tour du monde", "itinéraire tour du monde", "partir 1 an"]}
      author="Cap sur le Monde"
      date="20 juin 2026"
      readingTime="22 min"
      heroImage={tourMondeBudgetImg}
      heroImageAlt="Voyageur avec son sac à dos contemplant un paysage montagneux — préparation tour du monde"
      metaDescription="Guide expert pour organiser un tour du monde avec un petit budget en 2026 : méthode complète, budget réaliste 12 000-18 000 €, itinéraires, équipement, assurance, astuces économies."
      introduction="Faire le tour du monde n'a jamais été aussi accessible qu'en 2026 — à condition de bien s'y prendre. Si vous tapez « tour du monde budget » sur Google, vous trouverez des fourchettes allant de 8 000 € à 50 000 € : autant dire que les chiffres ne veulent rien dire sans méthode. Ce guide pilier est le résultat de dizaines de retours de voyageurs au long cours et d'une analyse fine des prix actualisés pour 2026. Vous y trouverez la méthode complète pour partir 6 à 12 mois avec un budget maîtrisé (objectif : 12 000-18 000 € pour un an, vols inclus), un découpage poste par poste, des itinéraires optimisés selon votre durée, l'équipement vraiment indispensable, le choix de l'assurance, les techniques pour gagner de l'argent en route, et les pièges à éviter absolument. Que vous prépariez un break sabbatique, un congé sans solde, une transition de carrière ou simplement le voyage d'une vie, ce guide vous donnera toutes les clés."
      contentSections={[
        {
          icon: DollarSign,
          title: "Quel budget réel pour un tour du monde en 2026 ?",
          content: `<p>Première question, la plus floue dans la majorité des guides. Soyons précis : le budget d'un tour du monde dépend de trois variables seulement — <strong>la durée</strong>, <strong>le rythme de voyage</strong> et <strong>les destinations choisies</strong>. Voici les fourchettes réalistes 2026 (par personne, vols et tout compris) :</p>
          <div class="overflow-x-auto my-4">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-ocean text-white">
                <tr><th class="p-3 text-left">Profil</th><th class="p-3">6 mois</th><th class="p-3">9 mois</th><th class="p-3">12 mois</th></tr>
              </thead>
              <tbody class="bg-white">
                <tr class="border-b"><td class="p-3 font-semibold">Backpacker (Asie/Amérique latine majoritaire)</td><td class="p-3">7 000-9 000 €</td><td class="p-3">10 000-12 000 €</td><td class="p-3 text-ocean font-bold">12 000-15 000 €</td></tr>
                <tr class="border-b bg-sand/30"><td class="p-3 font-semibold">Confort moyen (mix continents)</td><td class="p-3">10 000-13 000 €</td><td class="p-3">14 000-17 000 €</td><td class="p-3 text-ocean font-bold">17 000-22 000 €</td></tr>
                <tr><td class="p-3 font-semibold">Confort + (Océanie, Japon, Europe)</td><td class="p-3">14 000-18 000 €</td><td class="p-3">20 000-25 000 €</td><td class="p-3 text-ocean font-bold">26 000-35 000 €</td></tr>
              </tbody>
            </table>
          </div>
          <h3>Décomposition type d'un budget 12 000 € pour 12 mois (backpacker)</h3>
          <ul>
            <li><strong>Vols long-courriers (billet TDM) :</strong> 2 800 € (cf. section dédiée)</li>
            <li><strong>Hébergement (300 nuits, moy. 12 €) :</strong> 3 600 €</li>
            <li><strong>Repas (12 €/jour) :</strong> 4 380 €</li>
            <li><strong>Transports locaux (bus, trains, vols internes) :</strong> 1 200 €</li>
            <li><strong>Activités, visites, excursions :</strong> 1 500 €</li>
            <li><strong>Assurance voyage longue durée :</strong> 800 €</li>
            <li><strong>Visas, vaccins, divers :</strong> 600 €</li>
            <li><strong>Total :</strong> <strong>14 880 €</strong></li>
          </ul>
          <p>💡 <strong>Règle d'or :</strong> ajoutez <strong>+20 % de marge sécurité</strong> pour les imprévus (vol annulé, problème de santé, opportunité qui se présente). Budget objectif réaliste : <strong>15 000 € pour 12 mois</strong>.</p>`,
        },
        {
          icon: Plane,
          title: "Vols : choisir entre billet TDM, vols séparés et low-cost",
          content: `<p>Le transport aérien représente 25-35 % du budget total. Trois stratégies coexistent en 2026, chacune avec ses avantages.</p>
          <h3>Option 1 — Le billet Tour du Monde (alliances)</h3>
          <p>Les alliances <strong>Star Alliance</strong> (Round The World) et <strong>OneWorld</strong> (Explorer) proposent des billets multi-segments : 3-6 continents, 16 escales maximum, validité 12 mois.</p>
          <ul>
            <li><strong>Prix 2026 :</strong> 2 800 € (4 continents, classe éco) à 6 500 € (6 continents).</li>
            <li><strong>Avantages :</strong> tarif lissé, miles cumulables, dates modifiables gratuitement.</li>
            <li><strong>Inconvénients :</strong> sens de voyage fixe (Est OU Ouest), pas de retour arrière, contrainte de finir dans le pays de départ.</li>
            <li><strong>Idéal pour :</strong> voyageurs voulant visiter 5+ continents avec dates flexibles.</li>
          </ul>
          <h3>Option 2 — Vols séparés (DIY)</h3>
          <p>Acheter chaque vol long-courrier à l'avance, au moment où le prix est intéressant. Combine compagnies traditionnelles et low-cost (AirAsia, Cebu Pacific, JetSmart).</p>
          <ul>
            <li><strong>Budget moyen 2026 :</strong> 2 200-3 200 € pour 4-5 long-courriers + vols internes.</li>
            <li><strong>Avantages :</strong> liberté totale (changement de plan, retour arrière possible), parfois moins cher que le TDM si on cible l'Asie + Amérique latine.</li>
            <li><strong>Inconvénients :</strong> demande de la veille tarifaire (Google Flights, Skyscanner, Kayak), risque de payer plus si on s'y prend mal.</li>
          </ul>
          <h3>Option 3 — Tour du monde terrestre (slow travel)</h3>
          <p>Maximiser bus, trains et bateaux ; ne prendre que 2-3 vols stratégiques. Trans-sibérien, ferry Indonésie, bus Amérique latine.</p>
          <p><strong>Budget transport :</strong> 1 500-2 000 €. <strong>Réservé aux voyageurs ayant 9-12 mois</strong>, car les temps de trajet explosent.</p>
          <h3>Astuces économies sur les vols</h3>
          <ul>
            <li>Réservez en navigation privée (les prix montent à la 3e recherche).</li>
            <li>Comparez les aéroports voisins (Paris → Bruxelles, Madrid).</li>
            <li>Utilisez <strong>Skyscanner mode "dates flexibles + tout le monde"</strong> pour repérer les destinations les moins chères.</li>
            <li>Évitez juin-août et 20 décembre-5 janvier (haute saison).</li>
            <li>Posez votre billet TDM en mai-juin (creux saisonnier).</li>
          </ul>`,
        },
        {
          icon: Bed,
          title: "Hébergement : techniques pour diviser le coût par 3",
          content: `<p>L'hébergement représente 20-30 % du budget tour du monde. Mixer plusieurs solutions est la clé pour faire chuter ce poste.</p>
          <h3>Auberges de jeunesse (hostels)</h3>
          <p>La base : <strong>5-10 € le dortoir en Asie du Sud-Est</strong>, 10-20 € en Amérique latine, 25-40 € en Australie/Europe occidentale, 60 €+ aux États-Unis. Hostelworld et Booking restent les références.</p>
          <h3>Couchsurfing</h3>
          <p>Logement <strong>gratuit</strong> chez l'habitant. Plus efficace en Europe, Amérique du Nord et Australie qu'en Asie. Bonus : immersion locale, conseils précieux, repas partagés. Soyez actif sur votre profil (photos, références, contributions).</p>
          <h3>Workaway, HelpX, WWOOF</h3>
          <p>Échange travail (4-5h/jour) contre logement et repas. <strong>Économies massives</strong> sur la durée :</p>
          <ul>
            <li><strong>WWOOF :</strong> spécifique aux fermes bio (récoltes, animaux).</li>
            <li><strong>Workaway :</strong> hôtels, écoles, familles, projets divers.</li>
            <li><strong>HelpX :</strong> proche de Workaway, plus de fermes et auberges.</li>
          </ul>
          <p>2 mois de Workaway sur un tour du monde de 12 mois = <strong>1 800-2 400 € économisés</strong> sur l'hébergement + nourriture.</p>
          <h3>Airbnb long séjour</h3>
          <p>Réductions automatiques de <strong>20-40 %</strong> pour réservations de 1 mois+. Stratégie idéale pour les voyageurs qui veulent ralentir entre 2 phases intenses (slow travel à Chiang Mai, Medellín, Lisbonne…).</p>
          <h3>Maison-sitting (gardiennage)</h3>
          <p>Vous gardez la maison/les animaux de quelqu'un en son absence. Plateformes : TrustedHousesitters, Nomador. <strong>Hébergement gratuit dans des destinations chères</strong> (Australie, Canada, UK, USA). Demande des références au début.</p>
          <h3>Camping & van</h3>
          <p>En Australie, Nouvelle-Zélande, USA, Europe du Nord : louer un van ou camper réduit drastiquement le coût (12-25 €/nuit pour 2 personnes contre 60-120 € en hôtel). Voir DiscoverCars Campervan, Spaceships, Jucy.</p>`,
        },
        {
          icon: MapPin,
          title: "Itinéraires optimisés selon votre budget",
          content: `<p>Le choix des destinations conditionne <strong>directement le budget journalier</strong> (de 15 €/jour en Asie du Sud-Est à 100 €/jour en Norvège). Voici 3 itinéraires testés et budgétés pour 2026.</p>
          <h3>Itinéraire "Petit Budget" (12 000 € — 12 mois)</h3>
          <p><strong>Focus :</strong> Asie + Amérique latine, peu de vols.</p>
          <ol>
            <li><strong>Thaïlande → Laos → Cambodge → Vietnam</strong> (4 mois) — 18 €/jour</li>
            <li><strong>Indonésie → Philippines</strong> (2 mois) — 25 €/jour</li>
            <li><strong>Vol Manille → Lima</strong> (700 €)</li>
            <li><strong>Pérou → Bolivie → Argentine → Chili</strong> (4 mois) — 35 €/jour</li>
            <li><strong>Colombie → Mexique → retour Paris</strong> (2 mois) — 40 €/jour</li>
          </ol>
          <p><strong>Total transport :</strong> ~2 200 €. <strong>Total séjour :</strong> ~9 200 €. <strong>Total :</strong> 11 400 € + assurances/visas.</p>
          <h3>Itinéraire "Best-of mondial" (17 000 € — 9 mois)</h3>
          <p><strong>Focus :</strong> diversité maximale, mix continents.</p>
          <ol>
            <li><strong>Japon</strong> (3 semaines) — 80 €/jour</li>
            <li><strong>Vietnam → Cambodge → Thaïlande</strong> (2 mois) — 22 €/jour</li>
            <li><strong>Nouvelle-Zélande</strong> (1 mois, van) — 60 €/jour</li>
            <li><strong>Australie côte Est</strong> (3 semaines) — 70 €/jour</li>
            <li><strong>Pérou + Bolivie + Argentine Patagonie</strong> (3 mois) — 45 €/jour</li>
            <li><strong>USA Ouest road trip</strong> (1 mois) — 100 €/jour</li>
          </ol>
          <p><strong>Total :</strong> ~16 500 €.</p>
          <h3>Itinéraire "Slow travel" (10 000 € — 12 mois)</h3>
          <p><strong>Focus :</strong> moins de pays, plus de profondeur, beaucoup de Workaway / Couchsurfing.</p>
          <ol>
            <li><strong>Sri Lanka</strong> (1 mois) — 18 €/jour</li>
            <li><strong>Thaïlande Nord (Chiang Mai base)</strong> (2 mois) — 22 €/jour</li>
            <li><strong>Indonésie (Bali + Java + Sulawesi)</strong> (3 mois) — 25 €/jour</li>
            <li><strong>Vol Bali → Mexico</strong> (900 €)</li>
            <li><strong>Mexique (focus Yucatán + Oaxaca)</strong> (2 mois) — 35 €/jour</li>
            <li><strong>Guatemala + Colombie</strong> (2 mois) — 30 €/jour</li>
            <li><strong>Portugal (Workaway final)</strong> (2 mois) — 0 € hébergement, 15 €/jour</li>
          </ol>
          <p><strong>Total :</strong> ~9 800 €.</p>`,
        },
        {
          icon: Backpack,
          title: "Équipement : le strict nécessaire (8-10 kg max)",
          content: `<p>L'erreur n°1 des futurs tour-du-mondistes : partir avec un sac de 15 kg qu'on traîne pendant des mois. La règle d'or : <strong>maximum 10 kg, idéalement 8 kg</strong>. Liste optimisée :</p>
          <h3>Sac à dos</h3>
          <ul>
            <li><strong>Sac principal 40-50 L</strong> (Osprey Farpoint 40, Décathlon Forclaz Travel 100 50L). Format cabine pour éviter les frais bagages.</li>
            <li><strong>Petit sac journée 20 L</strong> (Osprey Daylite, anti-vol Pacsafe).</li>
          </ul>
          <h3>Vêtements (1 semaine, qu'on lave régulièrement)</h3>
          <ul>
            <li>5 t-shirts mérinos ou techniques (séchage rapide, anti-odeur)</li>
            <li>2 pantalons légers + 1 short + 1 maillot de bain</li>
            <li>1 polaire fine + 1 veste imperméable légère</li>
            <li>7 sous-vêtements + 4 paires de chaussettes</li>
            <li>1 paire de baskets + 1 paire de sandales + tongs douche</li>
          </ul>
          <h3>Tech</h3>
          <ul>
            <li>Smartphone (votre arme #1), batterie externe 10 000 mAh</li>
            <li>Ordinateur portable léger ou tablette (si nomade digital)</li>
            <li>Adaptateur universel + multiprise</li>
            <li>Disque dur externe (sauvegarde photos)</li>
            <li>Liseuse Kindle (la bibliothèque infinie sans le poids)</li>
          </ul>
          <h3>Trousse santé</h3>
          <ul>
            <li>Médicaments personnels + ordonnance traduite en anglais</li>
            <li>Diarrhée (Smecta, Imodium), paracétamol, antibiotique large spectre (sur prescription)</li>
            <li>Pastilles purificatrices d'eau (Micropur)</li>
            <li>Crème solaire SPF 50, anti-moustique 30 % DEET</li>
            <li>Petite trousse premier secours (pansements, désinfectant)</li>
          </ul>
          <h3>Documents</h3>
          <ul>
            <li>Passeport (valide 12 mois après retour) + 4 photos d'identité</li>
            <li>Carnet de vaccination international</li>
            <li>Copies numériques de tous vos documents (Drive + USB)</li>
            <li>Carte bancaire sans frais à l'étranger (Wise, Revolut, BoursoBank)</li>
            <li>Cash USD en réserve (200-300 € pour urgences)</li>
          </ul>
          <p>💡 <strong>Test final :</strong> faites votre sac, sortez marcher 1 h avec. Si vous transpirez ou avez mal au dos, retirez 2 kg.</p>`,
        },
        {
          icon: Shield,
          title: "Assurance voyage longue durée : indispensable",
          content: `<p>C'est l'unique poste sur lequel il ne faut <strong>jamais économiser</strong>. Un rapatriement sanitaire sans assurance coûte 50 000-200 000 €. Une hospitalisation aux USA peut dépasser 100 000 €. Vos cartes bancaires Visa Premier / Mastercard Gold sont insuffisantes au-delà de 90 jours.</p>
          <h3>Les 3 assurances spécialisées tour du monde</h3>
          <ul>
            <li><strong>Chapka Cap Aventure (référence FR) :</strong> 600-900 € pour 1 an, couverture rapatriement 750 000 €, bagages, assistance 24/7. La plus utilisée par les blogueurs voyage.</li>
            <li><strong>ACS Globe Partner :</strong> formule modulable (Petit Budget 70 €/mois → Confort 110 €/mois), responsabilité civile incluse, sports inclus.</li>
            <li><strong>AVA Marco Polo :</strong> alternative un peu moins chère, bons retours.</li>
          </ul>
          <h3>Critères à vérifier impérativement</h3>
          <ul>
            <li>Frais médicaux à l'étranger : <strong>500 000 € minimum</strong>, 1 M$ recommandé pour USA/Canada.</li>
            <li>Rapatriement sanitaire <strong>illimité</strong>.</li>
            <li>Responsabilité civile vie privée : 5 M €.</li>
            <li>Sports & activités : vérifiez si vos activités prévues sont incluses (plongée, surf, randonnée altitude, vélo).</li>
            <li>Bagages & vols : 1 500-2 500 €.</li>
            <li>Annulation/interruption de voyage.</li>
          </ul>
          <p>⚠️ <strong>Ne jamais partir avec une simple "assurance carte bancaire"</strong> au-delà de 90 jours : ça ne couvre rien.</p>`,
        },
        {
          icon: Briefcase,
          title: "Gagner de l'argent en route (et financer son voyage)",
          content: `<p>Travailler en route allonge significativement la durée du voyage et permet à beaucoup de partir avec un budget réduit. Trois grandes voies :</p>
          <h3>Le Working Holiday Visa (PVT)</h3>
          <p>Visa "vacances-travail" pour les 18-30 ans (35 ans pour le Canada et l'Australie). Vous travaillez légalement pendant 1 an dans le pays. Destinations possibles depuis la France en 2026 :</p>
          <ul>
            <li><strong>Australie, Nouvelle-Zélande :</strong> les classiques. Salaires élevés (15-20 €/h). Cueillette de fruits, hôtellerie, restaurant, construction.</li>
            <li><strong>Canada :</strong> très populaire. Quota limité, à demander en début d'année.</li>
            <li><strong>Japon, Corée du Sud, Argentine, Chili, Uruguay, Brésil, Mexique, Taïwan, Hong Kong :</strong> autres possibilités.</li>
          </ul>
          <p>Un PVT en Australie permet généralement de <strong>partir avec 5 000 € et finir avec 5 000 € en poche</strong> après 1 an.</p>
          <h3>Le travail à distance (digital nomad)</h3>
          <p>Si vous êtes freelance (rédaction, dev, design, marketing, traduction, montage vidéo, coaching…), vous pouvez maintenir vos revenus en voyageant. Hubs populaires : Chiang Mai, Bali, Lisbonne, Medellín, Tbilisi, Mexico DF. Coworking 80-150 €/mois, hébergement long séjour 300-600 €/mois.</p>
          <p><strong>Visas "nomades digitaux"</strong> disponibles en 2026 : Portugal, Espagne, Croatie, Grèce, Costa Rica, Indonésie (Second Home Visa), Thaïlande (DTV).</p>
          <h3>Petits jobs ponctuels</h3>
          <ul>
            <li><strong>Enseigner le français</strong> (Italki, Preply, écoles privées en Asie).</li>
            <li><strong>Travail saisonnier</strong> (stations de ski, hôtellerie estivale).</li>
            <li><strong>Crew sur voilier</strong> (FindACrew) pour traverser les océans gratuitement.</li>
            <li><strong>Photographe pour hostels</strong> en échange d'hébergement.</li>
          </ul>`,
        },
        {
          icon: AlertTriangle,
          title: "Erreurs à éviter (vécues par 90 % des voyageurs)",
          content: `<p>Quelques pièges classiques qui peuvent ruiner ou raccourcir un tour du monde. Apprenez-les avant le départ :</p>
          <ul>
            <li><strong>❌ Tout planifier à l'avance.</strong> Réservez seulement les 2-3 premières semaines. Le reste s'invente sur place selon les rencontres, la météo, vos envies. Les meilleurs souvenirs sont rarement planifiés.</li>
            <li><strong>❌ Vouloir trop voir.</strong> 15 pays en 6 mois = vous ne verrez rien. Mieux vaut 5 pays bien que 15 survolés.</li>
            <li><strong>❌ Sous-estimer la fatigue.</strong> Voyager 12 mois sans pause = burn-out garanti vers le 6e mois. Prévoyez des phases de slow travel (1 mois au même endroit) toutes les 8-10 semaines.</li>
            <li><strong>❌ Ne pas se vacciner / négliger la prévention paludisme.</strong> Faites un rendez-vous au centre de vaccinations internationales 2-3 mois avant le départ.</li>
            <li><strong>❌ Ignorer les visas en avance.</strong> Certains visas demandent du temps (Inde, Chine, Russie, Iran). Préparez une "feuille de route visas" dès maintenant.</li>
            <li><strong>❌ Sortir l'argent au mauvais distributeur.</strong> Préférez Wise et Revolut, retirez de grosses sommes d'un coup, évitez les ATM d'aéroport (mauvais taux).</li>
            <li><strong>❌ Oublier de prévoir le retour.</strong> Le "post-trip blues" est très réel. Économisez 2-3 mois de loyer + budget vie pour amortir le retour, qui n'est jamais évident.</li>
            <li><strong>❌ Lâcher son blog/Instagram à mi-parcours.</strong> Documenter régulièrement vous force à vivre intensément et constitue un trésor précieux 10 ans plus tard.</li>
          </ul>`,
        },
        {
          icon: Calendar,
          title: "Calendrier de préparation : 6 mois avant le départ",
          content: `<p>Voici le rétroplanning standard, optimisé pour ne rien oublier :</p>
          <h3>J-6 mois</h3>
          <ul>
            <li>Décision familiale/professionnelle (démission, congé sabbatique, congé sans solde)</li>
            <li>Budget global défini, plan d'épargne calé</li>
            <li>Vérification passeport (validité 6 mois après retour)</li>
            <li>Premiers rendez-vous au centre de vaccinations (rappels DTP, hépatite A/B, fièvre jaune, typhoïde)</li>
          </ul>
          <h3>J-4 mois</h3>
          <ul>
            <li>Itinéraire global esquissé (sens, saisons, durée par zone)</li>
            <li>Demande visa pays "compliqués" (Russie, Chine, Inde)</li>
            <li>Achat du billet TDM ou premier vol long-courrier</li>
            <li>Test du sac à dos (porté 1 h)</li>
          </ul>
          <h3>J-2 mois</h3>
          <ul>
            <li>Souscription assurance voyage longue durée</li>
            <li>Achat équipement manquant (chaussures de marche rodées avant départ)</li>
            <li>Souscription cartes bancaires sans frais (Wise + Revolut + BoursoBank)</li>
            <li>Démarches administratives : impôts, sécu (CFE pour rester couvert), résiliation forfait mobile / abonnements, transfert/sous-location appart</li>
          </ul>
          <h3>J-1 mois</h3>
          <ul>
            <li>Photocopies + scans de tous documents (Drive + USB)</li>
            <li>Téléchargement applis indispensables (Maps.me, Booking, Hostelworld, Grab, XE Currency, Google Translate hors-ligne, WhatsApp, Wise)</li>
            <li>Soirée d'adieu (très important pour le moral)</li>
            <li>Premier mois pré-réservé sur place</li>
          </ul>
          <h3>J-1 semaine</h3>
          <ul>
            <li>Vérification billets imprimés + numériques</li>
            <li>Cash USD/EUR (200-300 € pour urgences)</li>
            <li>Sac fait, pesé, ré-allégé une dernière fois</li>
          </ul>`,
        },
      ]}
      gastronomyItems={[]}
      practicalTips={[
        {
          title: "🎯 Récapitulatif des chiffres-clés (2026)",
          content: `<ul class='space-y-2'>
            <li><strong>Budget réaliste tour du monde 1 an :</strong> 12 000-18 000 € (backpacker à confort moyen)</li>
            <li><strong>Billet Tour du Monde :</strong> 2 800-6 500 € selon nombre de continents</li>
            <li><strong>Budget journalier moyen :</strong> 15-25 € en Asie / 30-50 € en Amérique latine / 70-100 € en Océanie/USA</li>
            <li><strong>Assurance voyage 1 an :</strong> 600-900 € (à ne JAMAIS supprimer)</li>
            <li><strong>Sac à dos optimal :</strong> 8-10 kg maximum, format 40-50 L cabine</li>
            <li><strong>Préparation :</strong> 6 mois idéalement</li>
            <li><strong>Marge sécurité :</strong> +20 % du budget total</li>
          </ul>`,
        },
        {
          title: "🛡️ Notre conseil n°1 (le plus important)",
          content: `<p>Si vous ne deviez retenir qu'une chose : <strong>partez avec un budget sécurisé, pas avec un budget juste</strong>. Un tour du monde "à la limite" devient anxiogène vers le 4e mois et vous gâche les meilleures expériences (excursions ratées, vols ajustés, hébergements bas de gamme prolongés). Prenez 3 mois de plus pour économiser 3 000 € supplémentaires — vous ne regretterez jamais ces 3 000 € en route, mais vous regretterez toujours leur absence.</p>`,
        },
      ]}
      conclusion="Organiser un tour du monde avec un petit budget en 2026 est totalement réaliste : 12 000-15 000 € permettent de partir 1 an si vous ciblez l'Asie et l'Amérique latine, utilisez le Workaway, voyagez en mode backpacker et préparez méticuleusement vos vols. Le vrai luxe du voyage long, ce n'est pas l'argent — c'est le temps. Avec 6 à 12 mois devant vous, vous vivrez ce que peu de gens vivent : la rencontre profonde avec d'autres cultures, l'apprentissage de soi en autonomie complète, et le rythme naturel d'une vie sans deadline. Ce guide vous donne les bases méthodologiques ; la partie magie, c'est à vous de l'écrire sur la route. Bon voyage, et n'oubliez pas : le départ est toujours plus dur que l'arrivée."
      faqs={[
        { question: "Quel budget minimum pour un tour du monde en 2026 ?", answer: "Comptez 12 000 € minimum pour 12 mois en mode backpacker (Asie + Amérique latine majoritaires, vols inclus). En confort moyen avec mix continents, prévoyez 15 000-18 000 €. Avec Océanie ou Japon, le budget grimpe à 20 000-25 000 €. Toujours ajouter 20 % de marge sécurité." },
        { question: "Combien coûte un billet tour du monde ?", answer: "En 2026, un billet TDM via Star Alliance ou OneWorld coûte 2 800 € (4 continents, classe éco) à 6 500 € (6 continents). C'est compétitif si vous visitez 5+ continents avec dates flexibles. Si vous ciblez seulement Asie + Amérique latine, des vols séparés (2 200-3 000 €) reviennent souvent moins cher." },
        { question: "Faut-il une assurance pour un tour du monde ?", answer: "Absolument indispensable et non négociable. Un rapatriement sanitaire coûte 50 000-200 000 € sans assurance. Les assurances cartes bancaires (Visa Premier, Mastercard Gold) ne couvrent que 90 jours maximum. Chapka Cap Aventure (600-900 €/an), ACS Globe Partner et AVA Marco Polo sont les références. Couverture frais médicaux minimum : 500 000 €." },
        { question: "Combien de temps pour préparer un tour du monde ?", answer: "6 mois constituent la durée idéale : décision et budget à J-6 mois, vaccinations dès J-5 mois, itinéraire et billet TDM à J-4 mois, assurance et équipement à J-2 mois, démarches administratives à J-1 mois. En urgence, 3 mois sont jouables mais stressants." },
        { question: "Quelles destinations choisir pour un tour du monde pas cher ?", answer: "Privilégiez l'Asie du Sud-Est (Thaïlande, Vietnam, Laos, Cambodge, Indonésie : 18-25 €/jour), l'Amérique latine andine (Pérou, Bolivie, Équateur, Colombie : 30-40 €/jour) et l'Europe de l'Est (Géorgie, Roumanie, Albanie : 30-45 €/jour). Évitez Australie, Nouvelle-Zélande, USA et Europe occidentale qui plombent rapidement le budget." },
        { question: "Peut-on travailler pendant un tour du monde ?", answer: "Oui, trois voies principales : le Working Holiday Visa (PVT en Australie, Nouvelle-Zélande, Canada, Japon, Corée — pour les 18-30/35 ans), le travail à distance pour les freelances (digital nomads à Chiang Mai, Bali, Lisbonne, Medellín), et les petits jobs ponctuels (enseignement français en ligne, photographe pour hostels, crew sur voilier)." },
        { question: "Quel sac à dos pour un tour du monde ?", answer: "Maximum 10 kg, idéalement 8 kg. Un sac 40-50 L format cabine (Osprey Farpoint 40, Décathlon Forclaz Travel 100 50L) suffit largement. Ajoutez un petit sac journée 20 L. La règle : si vous n'utilisez pas un objet chaque semaine, il sort du sac. Testez votre sac en marchant 1 h avant le départ." },
        { question: "Comment économiser sur l'hébergement en tour du monde ?", answer: "Mixez 5 stratégies : auberges de jeunesse (5-20 €/nuit), Couchsurfing (gratuit), Workaway/WWOOF/HelpX (gratuit contre 4-5h de travail/jour), Airbnb long séjour (20-40 % de réduction sur 1 mois+), et maison-sitting (TrustedHousesitters) pour les destinations chères (Australie, USA, UK). 2 mois de Workaway sur 12 mois = 1 800-2 400 € économisés." },
        { question: "Vaut-il mieux partir seul ou en couple ?", answer: "Les deux ont leurs avantages. Seul : liberté totale, rencontres plus faciles, croissance personnelle maximale. En couple : budget par personne légèrement inférieur (chambres doubles plus rentables que dortoirs), soutien moral dans les moments difficiles. La pression émotionnelle d'un long voyage met les couples à l'épreuve — assurez-vous d'avoir déjà voyagé 2-3 semaines ensemble avant de vous lancer 12 mois." },
        { question: "Quels documents administratifs avant de partir ?", answer: "Passeport valide 12 mois après retour, carte d'identité, permis international, carnet de vaccinations, copies numériques de tout (Drive + USB). Côté France : déclaration au Consulat (Ariane), maintien Sécurité sociale (formulaire CFE), résiliation forfait mobile, gestion appart (sous-location, transfert ou abandon), procurations bancaires, prévenir banques et impôts." },
      ]}
      sidebarInfos={[
        { icon: DollarSign, label: "Budget 12 mois", value: "12 000 - 18 000 €", iconColor: "text-emerald-600" },
        { icon: Plane, label: "Billet TDM", value: "2 800 - 6 500 €", iconColor: "text-ocean" },
        { icon: Shield, label: "Assurance", value: "600 - 900 €/an", iconColor: "text-sunset" },
        { icon: Calendar, label: "Préparation", value: "6 mois idéal", iconColor: "text-ocean" },
      ]}
      affiliateCity="Backpacker"
      affiliateCountryCode=""
      relatedArticles={[
        { title: "💰 Méthode budget voyage complète", url: "/guides/budget-voyage" },
        { title: "🗓️ Préparer son voyage de A à Z", url: "/guides/preparer-voyage" },
        { title: "🧳 Que mettre dans sa valise", url: "/guides/que-mettre-valise" },
        { title: "🛡️ Guide assurance & sécurité", url: "/guides/securite" },
        { title: "✈️ Bons plans vols", url: "/bons-plans/vols" },
        { title: "🌴 Cap Asie du Sud-Est", url: "/destinations" },
      ]}
      destinationLink="/destinations"
      ctaTitle="🌍 Toutes les destinations"
      internalLinks={[
        { label: "Méthode budget voyage", url: "/guides/budget-voyage" },
        { label: "Planifier son voyage", url: "/guides/preparer-voyage" },
        { label: "Itinéraire Vietnam 10 jours", url: "/blog/itineraire-vietnam-10-jours" },
        { label: "Budget voyage Vietnam", url: "/blog/budget-voyage-vietnam" },
        { label: "Quand partir au Vietnam", url: "/blog/quand-partir-vietnam" },
        { label: "Visiter Hanoï", url: "/destinations/vietnam/hanoi" },
        { label: "Planificateur de budget", url: "/planificateur-budget" },
        { label: "Bons plans vols", url: "/bons-plans/vols" },
      ]}
    />
  );
};

export default OrganiserTourMondeBudget;
