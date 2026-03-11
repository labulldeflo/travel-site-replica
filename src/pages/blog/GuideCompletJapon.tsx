import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, Compass, Globe, Shield, Utensils, Train, DollarSign, Sun, Camera, Home } from "lucide-react";
import japonImage from "@/assets/destinations/japon.jpg";

const GuideCompletJapon = () => {
  const faqs = [
    { question: "Faut-il un visa pour voyager au Japon ?", answer: "Non, les ressortissants français, belges et suisses peuvent séjourner jusqu'à 90 jours sans visa. Un passeport valide pour la durée du séjour suffit." },
    { question: "Combien de temps faut-il pour visiter le Japon ?", answer: "Minimum 10 jours pour couvrir Tokyo, Kyoto et Osaka. 2 à 3 semaines permettent d'ajouter Hiroshima, le nord (Hokkaido) ou les Alpes japonaises." },
    { question: "Le Japon est-il dangereux ?", answer: "Le Japon est l'un des pays les plus sûrs au monde. La criminalité est extrêmement faible, les transports fiables et l'hygiène irréprochable." },
    { question: "Quelle est la meilleure période pour visiter le Japon ?", answer: "Le printemps (mars-mai) pour les cerisiers et l'automne (octobre-novembre) pour les érables. Chaque saison offre cependant des expériences uniques." },
    { question: "Parle-t-on anglais au Japon ?", answer: "L'anglais est limité en dehors des zones touristiques. Les panneaux sont bilingues dans les grandes villes, et Google Translate avec la caméra est très utile pour les menus et panneaux." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Guide Complet Japon : Tout Savoir pour Votre Voyage"
        description="Le guide ultime pour visiter le Japon. Itinéraires, budget, transport, hébergement, culture, gastronomie : tout ce qu'il faut savoir pour préparer votre séjour au Japon."
        image={japonImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-15" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Guide Complet Japon", url: "/blog/guide-complet-japon" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Complet</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Guide Complet pour Visiter le Japon
              </h1>
              <p className="text-xl text-white/90">Tout savoir pour préparer et réussir votre voyage au pays du Soleil-Levant</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 15 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 18 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Japon fascine les voyageurs du monde entier par son <strong>contraste saisissant entre tradition et modernité</strong>. Des temples millénaires de Kyoto aux néons de Shibuya, des jardins zen aux robots-serveurs, ce pays insulaire offre une expérience de voyage incomparable. Ce guide complet vous donne toutes les clés pour <strong>planifier votre voyage au Japon</strong>, que ce soit votre première visite ou un retour.
          </p>

          <div className="my-8 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h2 className="text-xl font-bold text-foreground mt-0 mb-3">📋 En bref</h2>
            <ul className="text-sm space-y-1 mb-0">
              <li><strong>Durée idéale</strong> : 10 à 21 jours</li>
              <li><strong>Budget moyen</strong> : 80-120€/jour (confort)</li>
              <li><strong>Meilleure période</strong> : Mars-mai et octobre-novembre</li>
              <li><strong>Visa</strong> : Non requis (90 jours pour les Français)</li>
              <li><strong>Décalage horaire</strong> : +8h en hiver, +7h en été</li>
              <li><strong>Monnaie</strong> : Yen (¥) – 1€ ≈ 160-170¥</li>
            </ul>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Globe className="h-7 w-7 text-ocean" /> Pourquoi Visiter le Japon ?
          </h2>
          <p>Le Japon est une destination qui ne ressemble à aucune autre. Voici ce qui en fait un voyage inoubliable :</p>
          <ul>
            <li><strong>Culture unique</strong> : cérémonies du thé, arts martiaux, geishas, sumo — une civilisation millénaire vivante</li>
            <li><strong>Gastronomie exceptionnelle</strong> : le pays aux plus d'étoiles Michelin au monde, mais aussi les meilleurs ramen à 7€</li>
            <li><strong>Sécurité absolue</strong> : un des pays les plus sûrs au monde, idéal pour les voyageurs solo</li>
            <li><strong>Nature spectaculaire</strong> : Mont Fuji, forêts de bambous, cerisiers en fleurs, onsen en montagne</li>
            <li><strong>Efficacité légendaire</strong> : trains à la seconde près, propreté irréprochable, service impeccable</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Les Régions et Villes Incontournables
          </h2>

          <h3 className="text-xl font-bold mt-6">🏙️ Tokyo – La capitale futuriste</h3>
          <p>Tokyo est une mégalopole de 14 millions d'habitants qui ne dort jamais. Chaque quartier est un monde à part : <strong>Shibuya</strong> (le célèbre carrefour), <strong>Shinjuku</strong> (gratte-ciels et vie nocturne), <strong>Asakusa</strong> (le temple Senso-ji), <strong>Akihabara</strong> (culture otaku et électronique), <strong>Harajuku</strong> (mode excentrique). Prévoyez <strong>4-5 jours minimum</strong> pour Tokyo.</p>
          <p>→ <Link to="/blog/que-faire-tokyo" className="text-ocean hover:underline font-medium">Guide complet : Que faire à Tokyo</Link></p>

          <h3 className="text-xl font-bold mt-6">⛩️ Kyoto – L'ancienne capitale impériale</h3>
          <p>Kyoto abrite <strong>plus de 2 000 temples et sanctuaires</strong>, dont 17 classés au patrimoine mondial de l'UNESCO. Le <strong>Fushimi Inari</strong> (10 000 torii vermillon), le <strong>Kinkaku-ji</strong> (pavillon d'or) et la <strong>forêt de bambous d'Arashiyama</strong> sont des expériences magiques. Réservez <strong>3-4 jours</strong> pour Kyoto.</p>
          <p>→ <Link to="/blog/que-faire-kyoto" className="text-ocean hover:underline font-medium">Guide complet : Que faire à Kyoto</Link></p>

          <h3 className="text-xl font-bold mt-6">🍜 Osaka – La capitale gastronomique</h3>
          <p>Osaka est réputée pour sa cuisine de rue (<strong>takoyaki</strong>, <strong>okonomiyaki</strong>) et son ambiance décontractée. Le quartier de <strong>Dotonbori</strong> est l'épicentre de la street food. Le <strong>château d'Osaka</strong> et le quartier <strong>Shinsekai</strong> méritent le détour. <strong>2-3 jours</strong> suffisent.</p>
          <p>→ <Link to="/blog/que-faire-osaka" className="text-ocean hover:underline font-medium">Guide complet : Que faire à Osaka</Link></p>

          <h3 className="text-xl font-bold mt-6">🕊️ Hiroshima et Miyajima</h3>
          <p>Le <strong>Mémorial de la Paix</strong> est un lieu de mémoire poignant, et l'<strong>île de Miyajima</strong> avec son torii flottant est l'une des plus belles vues du Japon. Faisable en <strong>excursion d'une journée</strong> depuis Osaka avec le JR Pass.</p>
          <p>→ <Link to="/blog/que-faire-hiroshima" className="text-ocean hover:underline font-medium">Guide complet : Que faire à Hiroshima</Link></p>

          <h3 className="text-xl font-bold mt-6">🦌 Nara – Les cerfs sacrés</h3>
          <p>À 45 minutes de Kyoto, Nara abrite le <strong>Todai-ji</strong> (le plus grand bâtiment en bois du monde) et <strong>1 200 cerfs en liberté</strong> dans le parc. Une <strong>demi-journée à une journée</strong> complète suffit.</p>
          <p>→ <Link to="/blog/que-faire-nara" className="text-ocean hover:underline font-medium">Guide complet : Que faire à Nara</Link></p>

          <h3 className="text-xl font-bold mt-6">❄️ Hokkaido (Sapporo) – Le nord sauvage</h3>
          <p>L'île du nord offre des paysages spectaculaires : <strong>festival de neige</strong> en février, <strong>champs de lavande</strong> en été, <strong>fruits de mer exceptionnels</strong> toute l'année. Idéal pour les amateurs de nature et de ski.</p>

          <h3 className="text-xl font-bold mt-6">🍜 Fukuoka – La porte du Kyushu</h3>
          <p>Ville dynamique du sud, Fukuoka est célèbre pour ses <strong>yatai</strong> (stands de ramen en plein air) et sa proximité avec des <strong>onsen naturels</strong>. Ambiance détendue et gastronomie exceptionnelle.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Itinéraires Recommandés
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Durée</th>
                  <th className="py-3 px-4 font-bold">Parcours</th>
                  <th className="py-3 px-4 font-bold">Profil</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4"><Link to="/blog/itineraire-japon-7-jours" className="text-ocean hover:underline">7 jours</Link></td><td className="py-2 px-4">Tokyo → Kyoto → Osaka</td><td className="py-2 px-4">Express, premier voyage</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4"><Link to="/blog/itineraire-japon-10-jours" className="text-ocean hover:underline">10 jours</Link></td><td className="py-2 px-4">Tokyo → Hakone → Kyoto → Nara → Osaka</td><td className="py-2 px-4">Classique recommandé</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">14 jours</td><td className="py-2 px-4">+ Hiroshima, Miyajima, Kanazawa</td><td className="py-2 px-4">Complet</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">21 jours</td><td className="py-2 px-4">+ Hokkaido ou Kyushu</td><td className="py-2 px-4">Immersion totale</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Transport : Se Déplacer au Japon
          </h2>
          <p>Le réseau de transport japonais est <strong>le plus efficace au monde</strong>. Le <strong>Shinkansen</strong> (train à grande vitesse) relie Tokyo à Kyoto en 2h15 et fonctionne à la seconde près.</p>
          <ul>
            <li><strong>Japan Rail Pass (JR Pass)</strong> : pass illimité sur les trains JR, rentable dès un aller-retour Tokyo-Kyoto (~230€ pour 7 jours). <Link to="/blog/jr-pass-japon" className="text-ocean hover:underline">Notre guide JR Pass</Link></li>
            <li><strong>Carte IC (Suica/Pasmo)</strong> : carte rechargeable pour métro, bus et achats en konbini</li>
            <li><strong>Métro</strong> : ultra-efficace à Tokyo et Osaka, pass journaliers disponibles</li>
            <li><strong>Bus longue distance</strong> : option économique pour les longs trajets (bus de nuit)</li>
          </ul>
          <p>→ <Link to="/blog/comment-se-deplacer-japon" className="text-ocean hover:underline font-medium">Guide détaillé : Comment se déplacer au Japon</Link></p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Budget : Combien Coûte le Japon ?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Poste</th>
                  <th className="py-3 px-4 font-bold">Budget</th>
                  <th className="py-3 px-4 font-bold">Confort</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement</td><td className="py-2 px-4">25-45€</td><td className="py-2 px-4">70-150€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">15-25€</td><td className="py-2 px-4">30-60€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Transport</td><td className="py-2 px-4">10-20€</td><td className="py-2 px-4">20-40€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités</td><td className="py-2 px-4">5-15€</td><td className="py-2 px-4">20-50€</td></tr>
                <tr className="border-b border-border font-bold"><td className="py-2 px-4">Total/jour</td><td className="py-2 px-4">55-105€</td><td className="py-2 px-4">140-300€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-2">→ <Link to="/blog/budget-voyage-japon" className="text-ocean hover:underline">Guide budget détaillé du Japon</Link></p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Home className="h-7 w-7 text-ocean" /> Hébergement : Où Dormir ?
          </h2>
          <p>Le Japon offre des <strong>types d'hébergement uniques</strong> qu'on ne trouve nulle part ailleurs :</p>
          <ul>
            <li><strong>Hôtels capsule</strong> (25-45€) : expérience typiquement japonaise, compacts mais fonctionnels</li>
            <li><strong>Business hotels</strong> (50-100€) : chaînes Toyoko Inn, APA, Dormy Inn – petit mais impeccable</li>
            <li><strong>Ryokan</strong> (80-300€) : auberge traditionnelle avec futon, tatami et souvent onsen</li>
            <li><strong>Airbnb/Guesthouses</strong> (30-70€) : bonne option pour familles ou séjours longs</li>
            <li><strong>Temple stay</strong> (50-120€) : nuit dans un temple bouddhiste, méditation au lever du soleil</li>
          </ul>
          <p>→ <Link to="/blog/ou-dormir-japon" className="text-ocean hover:underline font-medium">Guide complet : Où dormir au Japon</Link></p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie Japonaise
          </h2>
          <p>La cuisine japonaise est un <strong>patrimoine mondial de l'UNESCO</strong>. Voici les plats à ne pas manquer :</p>
          <ul>
            <li><strong>Ramen</strong> (7-12€) : chaque région a sa spécialité (tonkotsu à Fukuoka, miso à Sapporo, shoyu à Tokyo)</li>
            <li><strong>Sushi et sashimi</strong> : du kaiten-zushi (tapis roulant, 8-15€) aux comptoirs omakase (100-300€)</li>
            <li><strong>Tempura</strong> : légumes et crevettes frits dans une pâte légère et croustillante</li>
            <li><strong>Okonomiyaki</strong> : la « pizza japonaise » d'Osaka, préparée devant vous</li>
            <li><strong>Wagyu</strong> : le bœuf le plus marbré du monde, Kobe étant la variété la plus célèbre</li>
            <li><strong>Konbini</strong> : les supérettes 7-Eleven, Lawson et FamilyMart sont une institution – onigiri, bento et desserts de qualité à prix mini</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Quand Partir au Japon ?
          </h2>
          <ul>
            <li><strong>🌸 Printemps (mars-mai)</strong> : cerisiers en fleurs, températures agréables – <strong>haute saison</strong></li>
            <li><strong>☀️ Été (juin-août)</strong> : chaud et humide, saison des pluies en juin, festivals matsuri</li>
            <li><strong>🍁 Automne (oct-nov)</strong> : érables flamboyants, climat idéal – <strong>haute saison</strong></li>
            <li><strong>❄️ Hiver (déc-fév)</strong> : ski à Hokkaido, onsen sous la neige, illuminations</li>
          </ul>
          <p>→ <Link to="/blog/quand-partir-japon" className="text-ocean hover:underline font-medium">Guide détaillé : Quand partir au Japon</Link></p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Shield className="h-7 w-7 text-ocean" /> Informations Pratiques
          </h2>
          <h3 className="text-xl font-bold mt-6">Visa et formalités</h3>
          <p>Pas de visa requis pour les Français (90 jours max). Passeport valide obligatoire. À l'arrivée, prise d'empreintes et photo automatiques.</p>

          <h3 className="text-xl font-bold mt-6">Argent et paiement</h3>
          <p>Le Japon reste très attaché au <strong>cash</strong>. Prévoyez du liquide (retraits aux distributeurs des 7-Eleven et bureaux de poste). Les cartes Visa/Mastercard fonctionnent dans les grandes enseignes et hôtels. Les paiements mobiles (PayPay, IC Card) se développent rapidement.</p>

          <h3 className="text-xl font-bold mt-6">Internet et communication</h3>
          <p>Achetez une <strong>eSIM ou pocket Wi-Fi</strong> à l'aéroport. Le Wi-Fi gratuit est disponible dans les konbini, gares et hôtels. <Link to="/blog/internet-esim-japon" className="text-ocean hover:underline">Guide eSIM Japon</Link></p>

          <h3 className="text-xl font-bold mt-6">Étiquette et culture</h3>
          <ul>
            <li>Retirez vos chaussures en entrant dans un logement ou temple</li>
            <li>Ne donnez jamais de pourboire (considéré comme impoli)</li>
            <li>Parlez doucement dans les transports en commun</li>
            <li>Inclinez-vous pour saluer et remercier</li>
            <li>Ne mangez pas en marchant (sauf dans les zones de festival)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">Santé et sécurité</h3>
          <p>Aucun vaccin obligatoire. L'eau du robinet est potable partout. Le système de santé est excellent mais coûteux – une <strong>assurance voyage est fortement recommandée</strong>. <Link to="/blog/assurance-voyage-japon" className="text-ocean hover:underline">Guide assurance voyage Japon</Link></p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Japon est un pays qui <strong>récompense la curiosité</strong>. Plus vous sortez des sentiers battus, plus vous découvrirez un Japon authentique et généreux. Chaque ruelle, chaque petit restaurant familial, chaque conversation avec un local est une porte ouverte sur une culture fascinante.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <OrganiserVoyageBlock destination="Japon" showVols showHotel showActivites showEsim showAssurance />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire 7 jours au Japon", url: "/blog/itineraire-japon-7-jours" },
                { label: "Itinéraire 10 jours au Japon", url: "/blog/itineraire-japon-10-jours" },
                { label: "Budget voyage Japon", url: "/blog/budget-voyage-japon" },
                { label: "Quand partir au Japon", url: "/blog/quand-partir-japon" },
                { label: "Que faire à Tokyo", url: "/blog/que-faire-tokyo" },
                { label: "Que faire à Kyoto", url: "/blog/que-faire-kyoto" },
                { label: "Comment se déplacer au Japon", url: "/blog/comment-se-deplacer-japon" },
                { label: "JR Pass : faut-il l'acheter ?", url: "/blog/jr-pass-japon" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇯🇵 Japon", url: "/destinations/japon" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link>
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

export default GuideCompletJapon;
