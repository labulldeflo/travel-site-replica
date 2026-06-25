import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, DollarSign, Compass, Train, Camera, Mountain, Sun, Coffee, Plane } from "lucide-react";
import vietnamImage from "@/assets/destinations/vietnam.jpg";

const ItineraireVietnam15Jours = () => {
  const faqs = [
    { question: "Pourquoi 15 jours plutôt que 10 au Vietnam ?", answer: "15 jours est le format idéal pour le Vietnam : vous pouvez combiner le Nord (Hanoï, Ha Long, Sapa), le Centre (Hué, Hoi An) et le Sud (Hô Chi Minh, delta du Mékong) sans courir. 10 jours obligent à sacrifier soit Sapa soit le delta. 15 jours laissent aussi 1-2 journées de repos en milieu de séjour." },
    { question: "Quel budget prévoir pour 15 jours au Vietnam en 2026 ?", answer: "Comptez 700-900 € par personne hors vol international en confort moyen : hôtels 3*, restaurants locaux et touristiques, 2 vols internes, croisière Halong 2 jours, excursions guidées. Backpacker : 450-550 €. Premium (hôtels 4*, guide privé partiel) : 1 500-2 000 €. Le vol Paris-Hanoï coûte 650-900 € selon la saison." },
    { question: "Faut-il faire le Vietnam du Nord au Sud ou inversement ?", answer: "Du Nord au Sud reste le sens dominant pour des raisons météo : Hanoï en octobre-mars est sec, Saigon vous offre la fin du voyage sous le soleil tropical. Sud-Nord fonctionne aussi (utile si vous prolongez ensuite vers Hong Kong) mais terminez par Hanoï = atterrissage culturel plus brutal après la chaleur du Sud." },
    { question: "Combien de vols internes prévoir sur 15 jours ?", answer: "Deux vols suffisent : Hanoï → Danang (pour Hoi An) puis Danang → Hô Chi Minh. Comptez 35-60 € par vol avec VietJet ou Bamboo Airways. Le train de nuit Hanoï-Hué (couchette molle) est une alternative pittoresque mais mobilise 13-15h. Évitez le bus longue distance sur ces deux tronçons : trop long et inconfortable." },
    { question: "Est-ce un itinéraire fatigant ?", answer: "Non si vous respectez le découpage 4-4-3-4 (Nord-Centre-Sud-Mékong) avec 2-3 nuits minimum par étape. Les transferts sont concentrés sur 3-4 journées au total. Prévoyez une demi-journée tampon à Hoi An (plage, massage) en milieu de séjour pour récupérer." },
    { question: "Peut-on faire cet itinéraire en famille avec enfants ?", answer: "Oui à partir de 6-7 ans. Adaptez : remplacez la nuit en train par un vol, raccourcissez les visites de temples, prévoyez plus de temps plage à Hoi An (An Bang) et un hôtel avec piscine à Saigon. Évitez Sapa avec des enfants de moins de 8 ans (treks longs)." },
    { question: "Faut-il un visa pour 15 jours au Vietnam ?", answer: "Non pour les Français : exemption de visa jusqu'à 45 jours depuis août 2023, reconduite en 2026. Le passeport doit être valide 6 mois après l'entrée et comporter 2 pages vierges. Une preuve de vol retour peut être demandée à l'embarquement." },
    { question: "Quelle assurance voyage pour 15 jours au Vietnam ?", answer: "Une assurance avec rapatriement, frais médicaux (minimum 100 000 €) et couverture scooter est essentielle. Chapka Cap Aventure ou ACS conviennent parfaitement pour cette durée. Comptez 35-60 € pour 15 jours. Voir notre comparatif des assurances voyage Asie." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Vietnam 15 Jours 2026 : Le Programme Complet Nord-Centre-Sud"
        description="Itinéraire Vietnam 15 jours détaillé : Hanoï, Sapa, Ha Long, Hué, Hoi An, Hô Chi Minh et delta du Mékong. Budget 2026, transports, vols internes, conseils pratiques."
        image={vietnamImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2026-06-25" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Vietnam 15 jours", url: "/blog/itineraire-vietnam-15-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${vietnamImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire détaillé</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Itinéraire Vietnam 15 Jours : Programme Complet 2026
              </h1>
              <p className="text-xl text-white/90">Hanoï, Sapa, Ha Long, Hoi An, Saigon, Mékong — jour par jour, budget, transports</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 25 juin 2026</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 16 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            <strong>15 jours, c'est la durée idéale pour visiter le Vietnam</strong> sans courir d'un point à l'autre. Cette durée permet de combiner les trois grandes régions (Nord, Centre, Sud), d'inclure une étape nature comme Sapa ou le delta du Mékong, et de garder du temps pour les pauses essentielles : plage à Hoi An, café au bord du lac à Hanoï, balade au coucher du soleil à Saigon. Voici un programme testé, optimisé et adapté aux <strong>tarifs 2026</strong>, du nord au sud, avec budgets réels et alternatives selon votre rythme.
          </p>

          <div className="my-8 p-5 bg-ocean/5 border border-ocean/20 rounded-lg not-prose">
            <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> Vue d'ensemble du parcours</h2>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• <strong>Jour 1-3</strong> : Hanoï (arrivée, capitale du Nord)</li>
              <li>• <strong>Jour 4-5</strong> : Sapa (treks dans les rizières)</li>
              <li>• <strong>Jour 6-7</strong> : Baie d'Ha Long (croisière 2 jours / 1 nuit)</li>
              <li>• <strong>Jour 8</strong> : Vol Hanoï → Danang, transfert Hué</li>
              <li>• <strong>Jour 9-11</strong> : Hué et Hoi An (patrimoine + plage)</li>
              <li>• <strong>Jour 12-13</strong> : Hô Chi Minh-Ville (Saigon)</li>
              <li>• <strong>Jour 14</strong> : Delta du Mékong (excursion)</li>
              <li>• <strong>Jour 15</strong> : Derniers achats et retour</li>
            </ul>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jours 1-3 : Hanoï, plonger dans le Vietnam
          </h2>
          <p>
            Atterrissage à <strong>Noi Bai</strong>. Le trajet en taxi officiel ou Grab jusqu'au vieux quartier coûte 15-20 € (45 min). Installez-vous dans le <strong>quartier de Hoan Kiem</strong> : hôtels 3* à 25-45 € la nuit avec petit-déjeuner. Le décalage horaire (6h en hiver, 5h en été) vous fera dormir tôt — c'est parfait.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 1 — Acclimatation</h3>
          <ul>
            <li>Lac Hoan Kiem au lever du soleil (les Hanoïens y font du tai-chi)</li>
            <li>Café au <strong>Café Giảng</strong> pour goûter le célèbre egg coffee (15 000 VND, 0,55 €)</li>
            <li>Bun cha pour le déjeuner — comptez 60 000-90 000 VND (2,20-3,30 €)</li>
            <li>Spectacle de marionnettes sur l'eau au Thang Long (80 000 VND, 3 €)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 2 — L'histoire vietnamienne</h3>
          <p>
            Matin : mausolée de Hô Chi Minh (gratuit, fermé le lundi et vendredi après-midi) et palais présidentiel. Après-midi : Temple de la Littérature (30 000 VND, 1,10 €) et musée d'Ethnographie (40 000 VND). Soir : street food tour dans le vieux quartier (15-25 € avec un guide local sur GetYourGuide).
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 3 — Excursion ou shopping</h3>
          <p>
            Option A : excursion à la <strong>pagode des Parfums</strong> (Chùa Hương) à 60 km — journée complète. Option B : musée de la Femme + ateliers du quartier des soies à Hoan Kiem. Train de nuit pour Sapa en couchette molle (Chapa Express ou Livitrans, 30-45 € l'aller, départ 22h00, arrivée 06h00).
          </p>
          <p className="text-sm italic text-muted-foreground">
            👉 Lecture complémentaire : <Link to="/destinations/vietnam/hanoi" className="text-ocean hover:underline">Que faire à Hanoï : guide complet</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Mountain className="h-7 w-7 text-ocean" /> Jours 4-5 : Sapa, trek dans les rizières
          </h2>
          <p>
            De la gare de Lao Cai, une navette d'1h vous monte à Sapa (1 500 m d'altitude). Climat frais toute l'année — <strong>prévoyez un pull même en été</strong>. Logement chez l'habitant (homestay) dans un village H'Mong à 12-18 € la nuit, repas compris : c'est l'expérience la plus authentique du voyage.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Programme recommandé</h3>
          <ul>
            <li><strong>Jour 4</strong> : trek de Sapa vers Lao Chai et Ta Van (12 km, niveau facile, 4-5h)</li>
            <li>Nuit en homestay chez une famille H'Mong noire — dîner traditionnel et alcool de riz</li>
            <li><strong>Jour 5</strong> : trek Ta Van → Giang Ta Chai → cascade d'Argent (variable)</li>
            <li>Retour Sapa, douche, train de nuit Lao Cai → Hanoï (22h00 → 06h00)</li>
          </ul>
          <p>
            Coût total Sapa avec guide privé H'Mong (recommandé, 30-40 € pour 2 jours), homestay, trains et repas : <strong>120-150 € par personne</strong>. Alternative : restez à Hanoï un jour de plus et faites Mai Chau (plus proche, moins touristique mais moins spectaculaire).
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jours 6-7 : Baie d'Ha Long, la croisière incontournable
          </h2>
          <p>
            Retour à Hanoï le matin du jour 6, navette directe vers Ha Long (3h30, 12-18 € avec Sapa Express ou Daiichi). Embarquement à 12h30 pour une <strong>croisière 2 jours / 1 nuit</strong> dans la baie de Lan Ha (recommandée plutôt que Ha Long classique, beaucoup moins fréquentée).
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead><tr className="border-b border-border"><th className="py-2 px-3">Catégorie de bateau</th><th className="py-2 px-3">Prix / personne</th><th className="py-2 px-3">Inclus</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Économique</td><td className="py-2 px-3">90-130 €</td><td className="py-2 px-3">Cabine partagée, repas, kayak</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Confort (recommandé)</td><td className="py-2 px-3">160-230 €</td><td className="py-2 px-3">Cabine privée, jacuzzi pont, transferts, activités</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Premium</td><td className="py-2 px-3">280-450 €</td><td className="py-2 px-3">Cabine suite, balcon, gastronomie</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Activités incluses : kayak dans une lagune, visite d'un village flottant, tai-chi sur le pont à 6h30, baignade. Retour à Hanoï le jour 7 vers 16h30, transfert direct à l'aéroport pour le <strong>vol du soir vers Danang</strong> (1h15, 40-60 € avec VietJet).
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Plane className="h-7 w-7 text-ocean" /> Jour 8 : Transition vers le Centre
          </h2>
          <p>
            Arrivée à Danang en soirée. Taxi vers <strong>Hué</strong> (130 km, 2h30 par le col des Nuages, 50-70 € en privé) ou nuit directe à Hoi An si vous préférez sauter Hué. Pour cet itinéraire de 15 jours, nous recommandons d'inclure Hué : une nuit suffit.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Jours 9-11 : Hué et Hoi An
          </h2>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 9 — Hué impériale</h3>
          <p>
            Visite de la <strong>Cité Impériale</strong> au matin (200 000 VND, 7,30 €), tombeaux des empereurs (Tu Duc et Khai Dinh) en moto-taxi l'après-midi. Soir : transfert vers Hoi An via le col des Nuages — louez une moto avec chauffeur Easy Riders (40-50 €) pour une route panoramique inoubliable.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jours 10-11 — Hoi An lanternes et plage</h3>
          <ul>
            <li>Vieille ville (120 000 VND le pass 5 sites) au lever du soleil</li>
            <li>Cours de cuisine vietnamienne (Red Bridge ou Morning Glory, 25-35 €)</li>
            <li>Atelier couture : vêtements sur mesure en 24h (chemise lin 25-35 €, robe 40-60 €)</li>
            <li>Demi-journée plage An Bang (transfert vélo gratuit depuis la plupart des hôtels)</li>
            <li>Excursion à <strong>Mỹ Sơn</strong> au lever du soleil (15-20 € via GetYourGuide, en groupe)</li>
            <li>Soir : la vieille ville s'illumine de lanternes — moment magique vers 19h</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Jours 12-13 : Hô Chi Minh-Ville
          </h2>
          <p>
            Vol Danang → Hô Chi Minh (1h15, 35-55 €). Saigon, c'est <strong>9 millions d'habitants, 8 millions de scooters</strong> et une énergie totalement différente de Hanoï. Logez en District 1 (Le Thanh Ton ou autour du marché Ben Thanh) : hôtels 3* à 30-50 €.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Programme jour 12</h3>
          <ul>
            <li>Cathédrale Notre-Dame et poste centrale (Gustave Eiffel)</li>
            <li>Palais de la Réunification (65 000 VND, 2,40 €)</li>
            <li>Musée des Vestiges de la Guerre (40 000 VND, intense mais essentiel)</li>
            <li>Soir : rue Bùi Viện pour l'ambiance, ou rooftop du Bitexco (cocktail vue 360°)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 13 — Tunnels de Cu Chi</h3>
          <p>
            Excursion d'une demi-journée aux <strong>tunnels de Cu Chi</strong> (20-30 € avec transport), un réseau souterrain de 250 km utilisé pendant la guerre du Vietnam. Retour à Saigon vers 14h, après-midi shopping au marché Ben Thanh ou aux <strong>boutiques d'artisanat de Dong Khoi</strong>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Jour 14 : Delta du Mékong
          </h2>
          <p>
            Excursion d'une journée à <strong>Ben Tre ou Cai Be</strong> (évitez My Tho, trop touristique). Comptez 35-50 € en petit groupe avec déjeuner — départ 7h30, retour 17h30. Au programme : marché flottant (le matin de bonne heure pour l'animation), balade en sampan dans les canaux, dégustation de fruits tropicaux, fabrique de bonbons de coco, vélo dans les villages.
          </p>
          <p>
            Alternative <strong>2 jours / 1 nuit</strong> avec nuit chez l'habitant à Can Tho (75-110 €) : préférable si vous voulez vraiment plonger dans la vie du delta. Dans ce cas, sacrifiez la journée Cu Chi.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Jour 15 : Derniers achats et envol
          </h2>
          <p>
            Selon votre heure de vol : massage des pieds (10-15 € la séance d'une heure), dernier café vietnamien au <strong>Workshop Coffee</strong> ou <strong>Cafe Apartment</strong> (42 Nguyen Hue), shopping de derniers souvenirs (café Trung Nguyen, sauce nuoc mam, soies, peintures sur soie). Transfert à Tan Son Nhat 3h avant le vol.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Budget détaillé 15 jours (par personne, 2026)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="py-3 px-4 font-bold">Poste</th>
                  <th className="py-3 px-4 font-bold">Backpacker</th>
                  <th className="py-3 px-4 font-bold">Confort</th>
                  <th className="py-3 px-4 font-bold">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergements (14 nuits)</td><td className="py-2 px-4">140 €</td><td className="py-2 px-4">380 €</td><td className="py-2 px-4">900 €</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Repas (3 / jour)</td><td className="py-2 px-4">80 €</td><td className="py-2 px-4">160 €</td><td className="py-2 px-4">320 €</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">2 vols internes + transferts</td><td className="py-2 px-4">120 €</td><td className="py-2 px-4">160 €</td><td className="py-2 px-4">220 €</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Croisière Ha Long</td><td className="py-2 px-4">100 €</td><td className="py-2 px-4">190 €</td><td className="py-2 px-4">350 €</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Excursions et entrées</td><td className="py-2 px-4">60 €</td><td className="py-2 px-4">120 €</td><td className="py-2 px-4">220 €</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Assurance voyage</td><td className="py-2 px-4">45 €</td><td className="py-2 px-4">50 €</td><td className="py-2 px-4">65 €</td></tr>
                <tr className="font-bold bg-ocean/5"><td className="py-2 px-4">Total (hors vol intl)</td><td className="py-2 px-4">545 €</td><td className="py-2 px-4">1 060 €</td><td className="py-2 px-4">2 075 €</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4 italic">Vol Paris ↔ Hanoï A/R</td><td className="py-2 px-4 italic">650 €</td><td className="py-2 px-4 italic">800 €</td><td className="py-2 px-4 italic">1 200 €</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm italic mt-3">
            👉 Tarifs vérifiés en juin 2026 — voir notre <Link to="/blog/budget-voyage-vietnam" className="text-ocean hover:underline">guide budget Vietnam complet</Link> pour la ventilation par poste.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Calendar className="h-7 w-7 text-ocean" /> Meilleure période pour cet itinéraire
          </h2>
          <p>
            Pour cet itinéraire nord-sud, <strong>octobre-novembre</strong> et <strong>mars-avril</strong> sont les fenêtres optimales : temps sec partout, températures modérées au Nord, fin de la mousson au Centre, saison sèche au Sud. Évitez <strong>septembre-octobre</strong> sur le Centre (typhons) et <strong>juin-août</strong> qui combinent chaleur étouffante et mousson. Plus de détails sur notre article <Link to="/blog/quand-partir-vietnam" className="text-ocean hover:underline">Quand partir au Vietnam</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Variantes possibles
          </h2>
          <ul>
            <li><strong>Version plage</strong> : sautez Sapa, ajoutez 3 nuits à <strong>Phu Quoc</strong> en fin de séjour</li>
            <li><strong>Version aventure</strong> : remplacez Hué par <strong>Phong Nha</strong> (les plus grandes grottes du monde)</li>
            <li><strong>Version culturelle</strong> : ajoutez 2 jours à <strong>Ninh Binh</strong> (la « baie d'Halong terrestre ») entre Hanoï et Sapa</li>
            <li><strong>Version 18 jours</strong> : tout garder + ajout de <strong>Ha Giang</strong> (boucle moto de 4 jours, sublime)</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              En 15 jours, le Vietnam vous offre <strong>une diversité que peu de pays peuvent égaler</strong> : montagnes brumeuses, baies karstiques, vieilles villes coloniales, plages tropicales, mégalopoles vibrantes et delta foisonnant. Cet itinéraire est testé, équilibré et adapté au rythme d'un voyageur qui veut profiter sans s'épuiser. Bon voyage.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> Continuer à préparer votre voyage au Vietnam
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Vietnam 2026", url: "/guides/guide-complet-vietnam" },
                { label: "Budget voyage au Vietnam", url: "/blog/budget-voyage-vietnam" },
                { label: "Quand partir au Vietnam", url: "/blog/quand-partir-vietnam" },
                { label: "Itinéraire Vietnam 10 jours", url: "/blog/itineraire-vietnam-10-jours" },
                { label: "Que faire à Hanoï", url: "/destinations/vietnam/hanoi" },
                { label: "Transport au Vietnam", url: "/guides/transport-vietnam" },
                { label: "Street food au Vietnam", url: "/guides/street-food-vietnam" },
                { label: "Préparer son voyage : guide planification", url: "/guides/planification" },
                { label: "Organiser un tour du monde", url: "/blog/organiser-tour-monde-budget-limite" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations de cet itinéraire
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇻🇳 Vietnam", url: "/destinations/vietnam" },
                { label: "Hanoï", url: "/destinations/vietnam/hanoi" },
                { label: "Baie d'Ha Long", url: "/destinations/vietnam/ha-long" },
                { label: "Hoi An", url: "/destinations/vietnam/hoi-an" },
                { label: "Hué", url: "/destinations/vietnam/hue" },
                { label: "Hô Chi Minh", url: "/destinations/vietnam/ho-chi-minh" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/vietnam" onClick={() => window.scrollTo(0, 0)}>Découvrir le Vietnam</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ItineraireVietnam15Jours;
