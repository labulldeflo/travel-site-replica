import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, DollarSign, Compass, Train, Camera, Coffee } from "lucide-react";
import vietnamImage from "@/assets/destinations/vietnam.jpg";

const ItineraireVietnam10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter le Vietnam en 10 jours ?", answer: "Oui, 10 jours permettent de découvrir les incontournables du nord au sud. Concentrez-vous sur 3-4 régions pour ne pas passer trop de temps en transport." },
    { question: "Quel est le meilleur sens de visite : nord-sud ou sud-nord ?", answer: "Le sens nord-sud (Hanoï → Hô Chi Minh) est le plus populaire. Il suit la logique géographique et les vols internes sont fréquents." },
    { question: "Faut-il prendre des vols internes au Vietnam ?", answer: "Pour optimiser 10 jours, au moins un vol interne (Hanoï → Danang ou Hanoï → Hô Chi Minh) est recommandé. Comptez 30-60€ avec VietJet ou Bamboo Airways." },
    { question: "Quel budget prévoir pour 10 jours au Vietnam ?", answer: "Comptez entre 300€ et 500€ par personne (hors vol international) pour un voyage confortable : hébergement, repas, transport et activités inclus." },
    { question: "Le Vietnam est-il sûr pour les voyageurs ?", answer: "Oui, le Vietnam est l'un des pays les plus sûrs d'Asie du Sud-Est. Les précautions habituelles suffisent : attention aux pickpockets dans les zones touristiques." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Vietnam 10 Jours : Du Nord au Sud"
        description="Découvrez notre itinéraire détaillé pour visiter le Vietnam en 10 jours. De Hanoï à Hô Chi Minh en passant par la baie d'Ha Long et Hoi An, jour par jour."
        image={vietnamImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-02-15" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Vietnam 10 Jours", url: "/blog/itineraire-vietnam-10-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero */}
        <header
          className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${vietnamImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Itinéraire Vietnam 10 Jours : Du Nord au Sud
              </h1>
              <p className="text-xl text-white/90">Le guide jour par jour pour découvrir les merveilles du Vietnam</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 15 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 12 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Vietnam est une destination fascinante qui se prête parfaitement à un voyage de 10 jours. Du chaos envoûtant de <strong>Hanoï</strong> aux rizières verdoyantes de <strong>Sapa</strong>, en passant par la majestueuse <strong>baie d'Ha Long</strong> et la charmante ville de <strong>Hoi An</strong>, chaque étape de cet itinéraire vous promet des moments inoubliables. Voici notre programme détaillé, optimisé pour profiter au maximum de votre séjour sans vous épuiser.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 1-2 : Hanoï, la Capitale du Nord
          </h2>
          <p>
            Votre aventure commence dans la trépidante capitale vietnamienne. <Link to="/destinations/vietnam/hanoi" className="text-ocean hover:underline font-medium">Hanoï</Link> est un mélange unique d'influences chinoises, françaises et vietnamiennes. Le <strong>vieux quartier aux 36 corporations</strong> est un labyrinthe de ruelles animées où chaque coin de rue réserve une surprise.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">À ne pas manquer</h3>
          <ul>
            <li><strong>Lac Hoan Kiem</strong> et le temple Ngoc Son – Le cœur spirituel de la ville</li>
            <li><strong>Mausolée de Hô Chi Minh</strong> – Ouvert le matin uniquement, arrivez tôt</li>
            <li><strong>Temple de la Littérature</strong> – La première université du Vietnam (1070)</li>
            <li><strong>Street food tour</strong> – Goûtez le phở, le bún chả et le café egg coffee</li>
            <li><strong>Spectacle de marionnettes sur l'eau</strong> – Art traditionnel unique au Vietnam</li>
          </ul>
          <p>
            <strong>Budget hébergement :</strong> 15-40€/nuit pour un hôtel confortable dans le vieux quartier. Pour plus de détails sur les coûts, consultez notre <Link to="/blog/budget-voyage-vietnam" className="text-ocean hover:underline font-medium">guide budget Vietnam</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 3-4 : Baie d'Ha Long, Merveille Naturelle
          </h2>
          <p>
            Depuis Hanoï, rejoignez la <Link to="/destinations/vietnam/ha-long" className="text-ocean hover:underline font-medium">baie d'Ha Long</Link> (3h30 de route ou navette). Classée au <strong>patrimoine mondial de l'UNESCO</strong>, elle compte plus de 1 600 îlots karstiques émergeant d'eaux émeraude. Une croisière de <strong>2 jours / 1 nuit</strong> est le format idéal pour 10 jours.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Conseils pour la croisière</h3>
          <ul>
            <li><strong>Réservez à l'avance</strong> en haute saison (octobre-avril) – comptez 100-200€/personne</li>
            <li>Optez pour la <strong>baie de Lan Ha</strong> (moins touristique) plutôt que Ha Long classique</li>
            <li>Activités incluses : kayak, visite de grottes, baignade, villages flottants</li>
            <li>Emportez un <strong>anti-moustiques</strong> et de la crème solaire</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Jour 5 : Vol vers le Centre – Arrivée à Hoi An
          </h2>
          <p>
            Prenez un vol interne de Hanoï vers <strong>Danang</strong> (1h15, environ 40€), puis un taxi de 30 minutes pour rejoindre <Link to="/destinations/vietnam/hoi-an" className="text-ocean hover:underline font-medium">Hoi An</Link>. Cette ancienne cité portuaire est classée au patrimoine mondial et séduit par ses <strong>lanternes colorées</strong>, son architecture coloniale et ses plages magnifiques.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Jour 6-7 : Hoi An, la Ville des Lanternes
          </h2>
          <p>
            Hoi An mérite deux jours complets. Le matin, explorez la <strong>vieille ville</strong> (pont japonais, maisons anciennes, temples). L'après-midi, filez à la <strong>plage d'An Bang</strong> (4 km du centre). Le soir, la ville s'illumine de milliers de lanternes – un spectacle magique.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Expériences incontournables</h3>
          <ul>
            <li><strong>Cours de cuisine</strong> – Apprenez à préparer le cao lầu et les bánh mì (15-25€)</li>
            <li><strong>Atelier de couture</strong> – Faites-vous confectionner des vêtements sur mesure en 24h</li>
            <li><strong>Balade en barque</strong> sur la rivière Thu Bồn au coucher du soleil</li>
            <li><strong>Excursion à Mỹ Sơn</strong> – Les temples chams, le "petit Angkor" du Vietnam</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 8-9 : Hô Chi Minh-Ville, la Perle du Sud
          </h2>
          <p>
            Vol de Danang vers <Link to="/destinations/vietnam/ho-chi-minh" className="text-ocean hover:underline font-medium">Hô Chi Minh-Ville</Link> (1h15). L'ancienne Saïgon est une métropole vibrante de 9 millions d'habitants où gratte-ciels et pagodes cohabitent. Le quartier de <strong>District 1</strong> concentre les principaux sites.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Programme sur 2 jours</h3>
          <ul>
            <li><strong>Jour 8</strong> : Palais de la Réunification, cathédrale Notre-Dame, poste centrale, marché Ben Thanh</li>
            <li><strong>Jour 9 matin</strong> : Tunnels de Cu Chi (excursion demi-journée, 20-30€)</li>
            <li><strong>Jour 9 soir</strong> : Quartier de Bùi Viện pour l'ambiance nocturne, ou le rooftop du Bitexco Tower</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Jour 10 : Dernier Jour et Départ
          </h2>
          <p>
            Selon votre vol, profitez de la matinée pour un dernier café vietnamien au bord du Mekong, faire vos derniers achats au <strong>marché de Binh Tay</strong> (Cholon), ou visiter le <strong>musée de la Guerre</strong>. Transfert vers l'aéroport de Tan Son Nhat.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Budget Estimé pour 10 Jours
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Poste</th>
                  <th className="py-3 px-4 font-bold">Budget (par personne)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement (10 nuits)</td><td className="py-2 px-4">150 – 400€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">50 – 100€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Transports internes</td><td className="py-2 px-4">80 – 150€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités & excursions</td><td className="py-2 px-4">50 – 120€</td></tr>
                <tr className="font-bold"><td className="py-2 px-4">Total</td><td className="py-2 px-4">330 – 770€</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Calendar className="h-7 w-7 text-ocean" /> Quand Partir ?
          </h2>
          <p>
            La meilleure période pour cet itinéraire nord-sud est de <strong>octobre à avril</strong>. Le nord est frais (15-25°C), le centre est sec et le sud ensoleillé. Évitez juillet-août (mousson au centre). Pour plus de détails climatiques, lisez notre article <Link to="/blog/quand-partir-vietnam" className="text-ocean hover:underline font-medium">Quand partir au Vietnam</Link>.
          </p>

          {/* Conclusion */}
          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Vietnam en 10 jours, c'est un <strong>condensé d'émotions</strong> : la ferveur des villes, la sérénité des paysages et la chaleur des rencontres. Cet itinéraire vous permet de goûter à l'essentiel du pays sans courir. Pour un séjour plus long, ajoutez <strong>Sapa</strong> (trek dans les rizières) ou le <strong>delta du Mékong</strong>.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          {/* Internal Links */}
          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Vietnam", url: "/guides/guide-complet-vietnam" },
                { label: "Budget voyage au Vietnam", url: "/blog/budget-voyage-vietnam" },
                { label: "Quand partir au Vietnam", url: "/blog/quand-partir-vietnam" },
                { label: "Street food au Vietnam", url: "/guides/street-food-vietnam" },
                { label: "Transport au Vietnam", url: "/guides/transport-vietnam" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Destinations mentionnées */}
          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées dans cet article
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇻🇳 Vietnam", url: "/destinations/vietnam" },
                { label: "Hanoï", url: "/destinations/vietnam/hanoi" },
                { label: "Baie d'Ha Long", url: "/destinations/vietnam/ha-long" },
                { label: "Hoi An", url: "/destinations/vietnam/hoi-an" },
                { label: "Huế", url: "/destinations/vietnam/hue" },
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

export default ItineraireVietnam10Jours;
