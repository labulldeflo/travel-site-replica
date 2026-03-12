import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { OrganiserVoyageBlock } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Train, Camera, DollarSign } from "lucide-react";
import japonImage from "@/assets/destinations/japon.jpg";

const tocItems = [
  { id: "resume", label: "Résumé de l'itinéraire" },
  { id: "jour-1", label: "Jour 1 : Tokyo – Shibuya et Shinjuku" },
  { id: "jour-2", label: "Jour 2 : Tokyo – Asakusa et Akihabara" },
  { id: "jour-3", label: "Jour 3 : Tokyo – Harajuku et Meiji-jingu" },
  { id: "jour-4", label: "Jour 4 : Shinkansen vers Kyoto" },
  { id: "jour-5", label: "Jour 5 : Kyoto – Kinkaku-ji et Arashiyama" },
  { id: "jour-6", label: "Jour 6 : Excursion à Nara + Osaka" },
  { id: "jour-7", label: "Jour 7 : Osaka – Château et Street Food" },
  { id: "budget", label: "Budget Récapitulatif" },
  { id: "conseils", label: "Conseils Pratiques" },
];

const guideLinks = [
  { label: "Guide complet du Japon", to: "/blog/guide-complet-japon", icon: "guide" as const },
  { label: "Budget voyage Japon", to: "/blog/budget-voyage-japon", icon: "budget" as const },
  { label: "Itinéraire Japon 10 jours", to: "/blog/itineraire-japon-10-jours", icon: "itineraire" as const },
  { label: "Quand partir au Japon", to: "/blog/quand-partir-japon", icon: "quand" as const },
];

const ItineraireJapon7Jours = () => {
  const faqs = [
    { question: "7 jours suffisent-ils pour visiter le Japon ?", answer: "Oui, 7 jours permettent de découvrir l'essentiel : Tokyo (3 jours), Kyoto (2 jours) et Osaka (2 jours). C'est un format intense mais parfait pour un premier voyage." },
    { question: "Le JR Pass 7 jours est-il rentable ?", answer: "Absolument. Le JR Pass 7 jours (~230€) est rentable dès l'aller-retour Tokyo-Kyoto en Shinkansen (270€ sans pass). Il couvre aussi les trajets locaux JR." },
    { question: "Quel budget pour 7 jours au Japon ?", answer: "Comptez 600-900€ hors vol pour un voyage confort (hébergement, repas, transport, activités). Le vol A/R coûte 500-900€ selon la saison." },
    { question: "Faut-il réserver les hôtels à l'avance ?", answer: "Oui, surtout en haute saison (cerisiers mars-avril, automne octobre-novembre). Réservez 2-3 mois à l'avance pour ces périodes." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Japon 7 Jours : Tokyo, Kyoto, Osaka"
        description="Itinéraire optimisé pour visiter le Japon en 7 jours. Programme jour par jour de Tokyo à Osaka, budget, JR Pass et conseils pratiques pour un premier voyage réussi."
        image={japonImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-14" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Japon 7 Jours", url: "/blog/itineraire-japon-7-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Itinéraire Japon 7 Jours : Tokyo, Kyoto, Osaka
              </h1>
              <p className="text-xl text-white/90">Le circuit express pour découvrir l'essentiel du Japon</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 14 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 12 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Une semaine au Japon, c'est court mais <strong>largement suffisant pour tomber amoureux</strong> de ce pays extraordinaire. Cet itinéraire de 7 jours vous emmène à travers les <strong>trois villes incontournables</strong> : Tokyo la futuriste, Kyoto l'impériale et Osaka la gourmande. Optimisé pour les premiers voyages, ce programme maximise chaque journée tout en laissant de la place à la spontanéité.
          </p>

          <TableOfContents items={tocItems} />

          <div className="my-8 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h2 id="resume" className="text-xl font-bold text-foreground mt-0 mb-3">📋 Résumé de l'itinéraire</h2>
            <ul className="text-sm space-y-1 mb-0">
              <li><strong>Jours 1-3</strong> : Tokyo (Shibuya, Asakusa, Akihabara, Shinjuku)</li>
              <li><strong>Jour 4</strong> : Shinkansen vers Kyoto</li>
              <li><strong>Jours 4-5</strong> : Kyoto (temples, geishas, bambous)</li>
              <li><strong>Jour 6</strong> : Nara (excursion) + Osaka</li>
              <li><strong>Jour 7</strong> : Osaka (Dotonbori, château)</li>
              <li><strong>Transport</strong> : JR Pass 7 jours (~230€)</li>
              <li><strong>Budget total</strong> : 600-900€ hors vol</li>
            </ul>
          </div>

          <h2 id="jour-1" className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 1 : Arrivée à Tokyo – Shibuya et Shinjuku
          </h2>
          <p>Après votre arrivée à l'aéroport de <strong>Narita</strong> (Narita Express, 36 min) ou <strong>Haneda</strong> (monorail, 20 min), direction votre hôtel à Shinjuku ou Shibuya. Après vous être installé :</p>
          <ul>
            <li><strong>Carrefour de Shibuya</strong> : le croisement le plus célèbre du monde, impressionnant au coucher du soleil</li>
            <li><strong>Statue de Hachiko</strong> : rendez-vous iconique devant la gare</li>
            <li><strong>Shibuya Sky</strong> (2 000¥) : vue panoramique à 230m, surtout au coucher du soleil</li>
            <li><strong>Shinjuku</strong> le soir : Omoide Yokocho (allée des yakitori) et Golden Gai (micro-bars)</li>
          </ul>
          <p><strong>Budget du jour</strong> : 40-70€ (transport + repas + Shibuya Sky)</p>

          <h2 id="jour-2" className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 2 : Tokyo – Asakusa, Akihabara et Ueno
          </h2>
          <ul>
            <li><strong>Senso-ji (Asakusa)</strong> : le plus ancien temple de Tokyo, arrivez tôt (gratuit)</li>
            <li><strong>Nakamise-dori</strong> : rue commerçante traditionnelle devant le temple</li>
            <li><strong>Ueno</strong> : parc et musées (Musée National de Tokyo, 1 000¥)</li>
            <li><strong>Akihabara</strong> l'après-midi : paradis des mangas, jeux vidéo et électronique</li>
            <li><strong>Tokyo Skytree</strong> au coucher du soleil (2 100¥) pour une vue spectaculaire</li>
          </ul>
          <p><strong>Budget du jour</strong> : 35-60€</p>

          <h2 id="jour-3" className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 3 : Tokyo – Harajuku, Meiji-jingu et Roppongi
          </h2>
          <ul>
            <li><strong>Meiji-jingu</strong> : sanctuaire shinto majestueux niché dans une forêt en plein Tokyo (gratuit)</li>
            <li><strong>Harajuku</strong> : Takeshita Street (mode kawaii) et Cat Street (boutiques tendance)</li>
            <li><strong>Omotesando</strong> : les Champs-Élysées de Tokyo, architecture contemporaine</li>
            <li><strong>TeamLab Borderless</strong> (3 200¥) ou <strong>TeamLab Planets</strong> (3 200¥) : musées d'art numérique immersif</li>
            <li>Soirée à <strong>Roppongi Hills</strong> : vue nocturne depuis le Mori Tower</li>
          </ul>
          <p><strong>Budget du jour</strong> : 40-75€</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Jour 4 : Shinkansen vers Kyoto – Premiers temples
          </h2>
          <p>Activez votre <strong>JR Pass</strong> et prenez le <strong>Shinkansen Nozomi</strong> (couvert par le JR Pass avec le Hikari, 2h15). Arrivée à Kyoto en milieu de matinée.</p>
          <ul>
            <li><strong>Fushimi Inari Taisha</strong> : les 10 000 torii vermillon, le site le plus photographié du Japon (gratuit, montée complète 2h)</li>
            <li><strong>Quartier de Gion</strong> le soir : ruelles pavées, maisons de thé, possibilité d'apercevoir des geiko (geishas)</li>
            <li>Dîner dans un <strong>izakaya traditionnel</strong> de Pontocho</li>
          </ul>
          <p><strong>Budget du jour</strong> : 30-50€ (hors transport couvert par JR Pass)</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 5 : Kyoto – Kinkaku-ji, Arashiyama et Geishas
          </h2>
          <ul>
            <li><strong>Kinkaku-ji</strong> (Pavillon d'Or, 400¥) : arrivez à l'ouverture pour éviter la foule</li>
            <li><strong>Ryoan-ji</strong> (500¥) : le plus célèbre jardin zen de pierres</li>
            <li><strong>Arashiyama</strong> l'après-midi : forêt de bambous (gratuit), pont Togetsukyo, temple Tenryu-ji (500¥)</li>
            <li><strong>Cérémonie du thé</strong> (2 000-4 000¥) : expérience authentique dans une maison de thé</li>
          </ul>
          <p><strong>Budget du jour</strong> : 25-55€</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 6 : Excursion à Nara + Arrivée à Osaka
          </h2>
          <p>Nara est à <strong>45 minutes de Kyoto en train JR</strong> (couvert par le JR Pass).</p>
          <ul>
            <li><strong>Parc de Nara</strong> : 1 200 cerfs en liberté, biscuits shika senbei (200¥)</li>
            <li><strong>Todai-ji</strong> (600¥) : le plus grand bâtiment en bois du monde, abritant un Bouddha de 15m</li>
            <li><strong>Kasuga-taisha</strong> (500¥) : sanctuaire aux 3 000 lanternes</li>
            <li>Train vers <strong>Osaka</strong> l'après-midi (30 min depuis Nara)</li>
            <li>Soirée à <strong>Dotonbori</strong> : la rue la plus animée du Japon, paradis de la street food</li>
          </ul>
          <p><strong>Budget du jour</strong> : 30-50€</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 7 : Osaka – Château et Street Food
          </h2>
          <ul>
            <li><strong>Château d'Osaka</strong> (600¥) : forteresse du XVIe siècle, musée et vue panoramique</li>
            <li><strong>Shinsekai</strong> : quartier rétro, kushikatsu (brochettes panées) à volonté</li>
            <li><strong>Kuromon Market</strong> : « la cuisine d'Osaka », fruits de mer frais, wagyu grillé</li>
            <li><strong>Dernière soirée à Dotonbori</strong> : takoyaki (poulpe), okonomiyaki, gyoza</li>
            <li>Retour depuis l'<strong>aéroport du Kansai (KIX)</strong> ou train retour vers Tokyo</li>
          </ul>
          <p><strong>Budget du jour</strong> : 25-50€</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Budget Récapitulatif – 7 Jours
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
                <tr className="border-b border-border/50"><td className="py-2 px-4">Vol A/R</td><td className="py-2 px-4">500-700€</td><td className="py-2 px-4">700-1 200€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">JR Pass 7 jours</td><td className="py-2 px-4">230€</td><td className="py-2 px-4">230€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement (7 nuits)</td><td className="py-2 px-4">200-350€</td><td className="py-2 px-4">500-900€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">120-200€</td><td className="py-2 px-4">250-400€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités</td><td className="py-2 px-4">50-100€</td><td className="py-2 px-4">100-200€</td></tr>
                <tr className="border-b border-border font-bold"><td className="py-2 px-4">TOTAL</td><td className="py-2 px-4">1 100-1 580€</td><td className="py-2 px-4">1 780-2 930€</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Conseils Pratiques
          </h2>
          <ul>
            <li><strong>Achetez le JR Pass avant de partir</strong> – il doit être acheté en ligne et activé à la gare à l'arrivée</li>
            <li><strong>Réservez les hôtels 2-3 mois à l'avance</strong> en haute saison</li>
            <li><strong>Téléchargez Google Maps hors ligne</strong> et l'app Hyperdia (horaires trains)</li>
            <li><strong>Prévoyez du cash</strong> – le Japon reste très attaché aux espèces</li>
            <li><strong>Prenez une eSIM</strong> pour rester connecté. <Link to="/blog/internet-esim-japon" className="text-ocean hover:underline">Guide eSIM Japon</Link></li>
            <li><strong>Voyagez léger</strong> – utilisez les consignes à bagages (coin lockers) dans les gares</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              7 jours au Japon, c'est un <strong>condensé d'émerveillement</strong>. Vous passerez des temples millénaires de Kyoto aux néons de Shibuya, des jardins zen aux stands de takoyaki d'Osaka. Le plus dur sera de repartir – la plupart des voyageurs commencent déjà à planifier leur retour dans l'avion.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Japon" showVols showHotel showActivites showEsim />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" },
                { label: "Itinéraire Japon 10 jours", url: "/blog/itineraire-japon-10-jours" },
                { label: "Budget voyage Japon", url: "/blog/budget-voyage-japon" },
                { label: "Que faire à Tokyo", url: "/blog/que-faire-tokyo" },
                { label: "Que faire à Kyoto", url: "/blog/que-faire-kyoto" },
                { label: "JR Pass : guide complet", url: "/blog/jr-pass-japon" },
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
              {[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((dest, idx) => (
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

export default ItineraireJapon7Jours;
