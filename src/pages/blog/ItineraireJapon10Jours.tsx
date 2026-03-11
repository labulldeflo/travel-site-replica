import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from "@/components/affiliate";
import { AFFILIATE_BLOCKS } from "@/lib/affiliateData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, DollarSign, Compass, Train, Camera, Coffee } from "lucide-react";
import japonImage from "@/assets/destinations/japon.jpg";

const ItineraireJapon10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter le Japon en 10 jours ?", answer: "Oui, 10 jours permettent de couvrir Tokyo, Kyoto, Osaka et une excursion au Mont Fuji. C'est un bon format pour un premier voyage." },
    { question: "Le Japan Rail Pass est-il rentable pour 10 jours ?", answer: "Oui, le JR Pass 7 ou 14 jours est très rentable dès que vous faites le trajet Tokyo-Kyoto aller-retour. Le pass 7 jours coûte environ 230€." },
    { question: "Faut-il réserver les hôtels à l'avance au Japon ?", answer: "Oui, surtout pendant la saison des cerisiers (mars-avril) et l'automne (novembre). Réservez 2-3 mois à l'avance pour ces périodes." },
    { question: "Le Japon est-il cher ?", answer: "Moins qu'on ne le pense. L'hébergement et la nourriture sont abordables si vous mangez local (ramen à 7-10€, hôtel capsule à 25-40€). Le transport est le poste le plus élevé." },
    { question: "A-t-on besoin d'un visa pour le Japon ?", answer: "Non, les ressortissants français peuvent séjourner jusqu'à 90 jours sans visa. Un passeport valide suffit." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Japon 10 Jours : De Tokyo à Kyoto"
        description="Itinéraire complet pour visiter le Japon en 10 jours. De Tokyo à Kyoto en passant par le Mont Fuji et Osaka, découvrez notre programme jour par jour avec budget et conseils."
        image={japonImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-10" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Japon 10 Jours", url: "/blog/itineraire-japon-10-jours" },
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
                Itinéraire Japon 10 Jours : De Tokyo à Kyoto
              </h1>
              <p className="text-xl text-white/90">Le programme jour par jour pour un premier voyage au pays du Soleil-Levant</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 10 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 14 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Japon est une destination qui fascine par ses contrastes saisissants entre <strong>tradition millénaire et modernité futuriste</strong>. En 10 jours, vous pouvez explorer les incontournables du pays : la mégapole vibrante de <strong>Tokyo</strong>, l'élégance intemporelle de <strong>Kyoto</strong>, la street food d'<strong>Osaka</strong> et la majesté du <strong>Mont Fuji</strong>. Cet itinéraire optimisé vous permet de vivre l'essentiel du Japon sans vous épuiser, grâce au réseau de <strong>Shinkansen</strong> (trains à grande vitesse).
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 1-3 : Tokyo, la Mégapole Fascinante
          </h2>
          <p>
            Votre aventure commence dans la capitale nippone. <Link to="/destinations/japon" className="text-ocean hover:underline font-medium">Tokyo</Link> est un monde à elle seule : quartiers futuristes, temples séculaires, gastronomie exceptionnelle et culture pop omniprésente.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 1 : Arrivée et immersion</h3>
          <ul>
            <li><strong>Aéroport de Narita/Haneda</strong> → centre-ville en Narita Express ou Limousine Bus (35-90 min)</li>
            <li><strong>Quartier de Shinjuku</strong> : gratte-ciels, observatoire gratuit de la mairie, Golden Gai (ruelles de bars)</li>
            <li><strong>Premier repas</strong> : ramen dans un restaurant à tickets (7-10€)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 2 : Culture et modernité</h3>
          <ul>
            <li><strong>Shibuya</strong> : le célèbre carrefour, Hachiko, shopping dans Center Gai</li>
            <li><strong>Harajuku</strong> : Takeshita Street (culture kawaii), sanctuaire Meiji-jingū</li>
            <li><strong>Akihabara</strong> : paradis de l'électronique, mangas et maid cafés</li>
            <li><strong>Soirée à Roppongi</strong> ou Odaiba (vue sur la baie de Tokyo)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 3 : Tokyo traditionnel</h3>
          <ul>
            <li><strong>Asakusa</strong> : temple Senso-ji, le plus ancien de Tokyo (628 après J.-C.)</li>
            <li><strong>Marché de Tsukiji</strong> (marché extérieur) : sushis frais dès le matin</li>
            <li><strong>Jardin impérial</strong> ou parc d'Ueno (musées, zoo, étangs)</li>
            <li><strong>Teamlab Borderless/Planets</strong> : expérience d'art numérique immersive (réservez en ligne !)</li>
          </ul>
          <p>
            <strong>Budget hébergement Tokyo :</strong> 30-80€/nuit selon la catégorie. Les hôtels capsule (25-40€) sont une expérience unique à tester au moins une nuit. Pour plus de détails, consultez notre <Link to="/blog/budget-voyage-japon" className="text-ocean hover:underline font-medium">guide budget Japon</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 4 : Excursion au Mont Fuji et Hakone
          </h2>
          <p>
            Excursion d'une journée depuis Tokyo vers la région du <strong>Mont Fuji</strong> et <strong>Hakone</strong>. Le Hakone Free Pass (environ 40€) couvre tous les transports de la journée.
          </p>
          <ul>
            <li><strong>Train Romancecar</strong> depuis Shinjuku (1h30) → Hakone</li>
            <li><strong>Croisière sur le lac Ashi</strong> avec vue sur le Fuji (par temps clair)</li>
            <li><strong>Téléphérique d'Owakudani</strong> : vallée volcanique, œufs noirs (légende : +7 ans de vie !)</li>
            <li><strong>Onsen</strong> (bain thermal) en fin de journée – une expérience incontournable</li>
          </ul>
          <p><strong>Conseil :</strong> Le Fuji est le plus visible tôt le matin et en automne/hiver. En été, les nuages le cachent souvent après 10h.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Jour 5-7 : Kyoto, l'Ancienne Capitale
          </h2>
          <p>
            Prenez le <strong>Shinkansen Nozomi</strong> de Tokyo à Kyoto (2h15, couvert par le JR Pass). <Link to="/destinations/japon" className="text-ocean hover:underline font-medium">Kyoto</Link> abrite plus de <strong>2 000 temples et sanctuaires</strong>, dont 17 classés au patrimoine mondial de l'UNESCO.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 5 : Kyoto Est</h3>
          <ul>
            <li><strong>Fushimi Inari</strong> : le sanctuaire aux 10 000 torii vermillon (gratuit, idéalement tôt le matin)</li>
            <li><strong>Quartier de Gion</strong> : ruelles traditionnelles, maisons de thé, geishas</li>
            <li><strong>Temple Kiyomizu-dera</strong> : vue panoramique sur Kyoto depuis la terrasse en bois</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 6 : Kyoto Ouest</h3>
          <ul>
            <li><strong>Forêt de bambous d'Arashiyama</strong> : sentier magique à l'aube (évitez la foule)</li>
            <li><strong>Temple du Pavillon d'Or (Kinkaku-ji)</strong> : icône dorée se reflétant dans l'étang</li>
            <li><strong>Jardin zen de Ryoan-ji</strong> : 15 rochers, méditation contemplative</li>
            <li><strong>Cérémonie du thé</strong> dans une maison traditionnelle (20-40€)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 7 : Nara – Excursion d'une demi-journée</h3>
          <ul>
            <li><strong>Nara</strong> (45 min de Kyoto en train) : cerfs en liberté dans le parc</li>
            <li><strong>Todai-ji</strong> : le plus grand bâtiment en bois du monde, Bouddha géant de bronze</li>
            <li><strong>Retour à Kyoto</strong> pour une soirée au <strong>quartier de Pontocho</strong> (restaurants au bord de la rivière Kamo)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Jour 8-9 : Osaka, la Cuisine du Japon
          </h2>
          <p>
            Train rapide Kyoto → Osaka (15 min). Osaka est la <strong>capitale gastronomique du Japon</strong> avec sa devise « kuidaore » (manger jusqu'à en tomber).
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Incontournables</h3>
          <ul>
            <li><strong>Dotonbori</strong> : boulevard néon emblématique, street food (takoyaki 3€, okonomiyaki 5-8€)</li>
            <li><strong>Château d'Osaka</strong> : forteresse historique entourée de douves et jardins</li>
            <li><strong>Shinsekai</strong> : quartier rétro, kushikatsu (brochettes panées) à volonté</li>
            <li><strong>Kuromon Market</strong> : « la cuisine d'Osaka », fruits de mer ultra-frais</li>
            <li><strong>Universal Studios Japan</strong> (journée complète si vous êtes fan, billet ~65€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Jour 10 : Dernier Jour et Départ
          </h2>
          <p>
            Selon votre vol de retour (Osaka Kansai ou Tokyo Narita/Haneda), profitez de la matinée pour un dernier shopping à <strong>Namba</strong> ou <strong>Umeda</strong>, ou rejoignez Tokyo en Shinkansen pour une dernière visite.
          </p>
          <p><strong>Conseil :</strong> Gardez du temps pour les <strong>omiyage</strong> (souvenirs culinaires) : Kit-Kat au matcha, mochi, wagashi… Les gares sont les meilleurs endroits pour les acheter.</p>

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
                <tr className="border-b border-border/50"><td className="py-2 px-4">Vol international A/R</td><td className="py-2 px-4">500 – 900€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">JR Pass 7 jours</td><td className="py-2 px-4">230€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement (10 nuits)</td><td className="py-2 px-4">300 – 800€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">150 – 300€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités</td><td className="py-2 px-4">80 – 200€</td></tr>
                <tr className="font-bold"><td className="py-2 px-4">Total</td><td className="py-2 px-4">1 260 – 2 430€</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Calendar className="h-7 w-7 text-ocean" /> Quand Partir ?
          </h2>
          <p>
            Les meilleures périodes sont le <strong>printemps (mars-mai)</strong> pour les cerisiers en fleurs et l'<strong>automne (octobre-novembre)</strong> pour les érables flamboyants. L'été est chaud et humide, l'hiver est froid mais idéal pour le ski et les onsen. Consultez notre guide détaillé <Link to="/blog/quand-partir-japon" className="text-ocean hover:underline font-medium">Quand partir au Japon</Link>.
          </p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Japon en 10 jours, c'est un <strong>voyage entre deux mondes</strong> : la frénésie high-tech de Tokyo et la sérénité contemplative de Kyoto. Avec le JR Pass et une bonne organisation, vous pouvez vivre des expériences inoubliables sans stress. Pour un séjour plus long, ajoutez <strong>Hiroshima</strong> et <strong>Miyajima</strong> ou le <strong>sud de Kyushu</strong>.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage au Japon", url: "/blog/budget-voyage-japon" },
                { label: "Quand partir au Japon", url: "/blog/quand-partir-japon" },
                { label: "Que faire à Tokyo", url: "/blog/que-faire-tokyo" },
                { label: "Guide préparer son voyage", url: "/guides/preparer-voyage" },
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

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

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

export default ItineraireJapon10Jours;