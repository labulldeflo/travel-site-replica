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
import croatieImage from "@/assets/destinations/croatie.jpg";

const ItineraireCroatie10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter la Croatie en 10 jours ?", answer: "Oui, 10 jours permettent de découvrir Zagreb, les lacs de Plitvice, Split, Hvar et Dubrovnik. C'est le format idéal pour un premier voyage." },
    { question: "Faut-il louer une voiture en Croatie ?", answer: "C'est recommandé pour la flexibilité, surtout pour Plitvice et la côte dalmate. Comptez 25-40€/jour. Sinon, les bus Flixbus sont fiables." },
    { question: "La Croatie est-elle dans la zone euro ?", answer: "Oui, depuis janvier 2023, la Croatie utilise l'euro. Plus besoin de changer de monnaie." },
    { question: "Dubrovnik est-elle trop touristique ?", answer: "En juillet-août, oui. Visitez tôt le matin ou en septembre-octobre. La ville reste un joyau incontournable malgré la foule." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Croatie 10 Jours : De Zagreb à Dubrovnik"
        description="Itinéraire complet pour visiter la Croatie en 10 jours. De Zagreb à Dubrovnik en passant par Plitvice, Split et Hvar, programme jour par jour avec budget et conseils."
        image={croatieImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-07" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Croatie 10 Jours", url: "/blog/itineraire-croatie-10-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${croatieImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Itinéraire Croatie 10 Jours : De Zagreb à Dubrovnik</h1>
              <p className="text-xl text-white/90">Le guide jour par jour pour explorer la perle de l'Adriatique</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 7 juillet 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 13 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            La Croatie est devenue l'une des <strong>destinations les plus prisées d'Europe</strong>. Entre les <strong>lacs turquoise de Plitvice</strong>, les palais romains de <strong>Split</strong>, les îles paradisiaques de la côte dalmate et les remparts de <strong>Dubrovnik</strong> (la « Perle de l'Adriatique »), le pays offre une richesse incroyable sur un petit territoire. Cet itinéraire de 10 jours vous fait traverser le meilleur de la Croatie, du nord au sud.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 1 : Zagreb, la Capitale Méconnue
          </h2>
          <p><Link to="/destinations/croatie" className="text-ocean hover:underline font-medium">Zagreb</Link> est souvent négligée mais mérite une journée. La capitale croate est charmante, avec ses cafés, musées excentriques et marchés animés.</p>
          <ul>
            <li><strong>Ville haute (Gornji Grad)</strong> : cathédrale, église Saint-Marc aux tuiles colorées, tour Lotrščak</li>
            <li><strong>Marché Dolac</strong> : le « ventre de Zagreb », fruits, légumes, fromages locaux</li>
            <li><strong>Musée des Relations Rompues</strong> : le musée le plus original de Croatie (7€)</li>
            <li><strong>Rue Tkalčićeva</strong> : terrasses de cafés, bars et restaurants</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 2-3 : Lacs de Plitvice, Joyau Naturel
          </h2>
          <p>Route depuis Zagreb (2h). Les <strong>lacs de Plitvice</strong> sont le site naturel le plus spectaculaire de Croatie : 16 lacs en cascade reliés par des chutes d'eau, classés UNESCO.</p>
          <ul>
            <li><strong>Entrée</strong> : 30-40€ selon la saison (réservation obligatoire en ligne)</li>
            <li><strong>Circuit supérieur</strong> (2-3h) : vues panoramiques sur les lacs</li>
            <li><strong>Circuit inférieur</strong> (2-3h) : passerelles en bois au ras de l'eau, Grande Cascade (78 m)</li>
            <li><strong>Arrivez à 7h</strong> pour éviter la foule et profiter de la lumière matinale</li>
            <li><strong>Nuit</strong> dans un gîte ou pension à proximité du parc (30-60€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Jour 4-5 : Split, Entre Rome et Méditerranée
          </h2>
          <p>Route vers Split (3h30 depuis Plitvice). <strong>Split</strong> est unique : le centre-ville est littéralement construit <strong>dans le palais de Dioclétien</strong> (IVe siècle), classé UNESCO.</p>
          <ul>
            <li><strong>Palais de Dioclétien</strong> : péristyle, caves souterraines, temple de Jupiter</li>
            <li><strong>Cathédrale Saint-Domnius</strong> : ancien mausolée de Dioclétien, clocher panoramique</li>
            <li><strong>Riva</strong> : promenade en bord de mer, cafés, coucher de soleil</li>
            <li><strong>Marjan</strong> : colline boisée en plein centre, sentiers de randonnée et plages cachées</li>
            <li><strong>Plage de Bačvice</strong> : sable fin, locale et animée</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Jour 6-7 : Île de Hvar, Paradis Méditerranéen
          </h2>
          <p>Ferry Split → Hvar (1-2h, ~10-15€). <strong>Hvar</strong> est surnommée « l'île la plus ensoleillée de Croatie » avec 2 724 heures de soleil par an.</p>
          <ul>
            <li><strong>Ville de Hvar</strong> : forteresse espagnole (panorama), place principale Renaissance</li>
            <li><strong>Îles Pakleni</strong> : excursion en bateau taxi (5-10€), criques cristallines, restaurants de poisson</li>
            <li><strong>Champs de lavande</strong> (juin-juillet) : l'intérieur de l'île est recouvert de lavande</li>
            <li><strong>Stari Grad</strong> : l'une des plus anciennes villes d'Europe (384 av. J.-C.), plaine agricole UNESCO</li>
            <li><strong>Vie nocturne</strong> : Hvar est connue pour ses bars branchés en été</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 8-9 : Dubrovnik, la Perle de l'Adriatique
          </h2>
          <p>Ferry ou catamaran Hvar → Dubrovnik (3-4h). <strong>Dubrovnik</strong> est une merveille architecturale : remparts médiévaux, toits de tuiles oranges et mer Adriatique d'un bleu profond.</p>
          <ul>
            <li><strong>Tour des remparts</strong> : 2 km de marche sur les fortifications (35€, le must absolu)</li>
            <li><strong>Stradun</strong> : avenue principale pavée de marbre, palais et fontaines</li>
            <li><strong>Fort Lovrijenac</strong> : la « Gibraltar de Dubrovnik », décor de Game of Thrones</li>
            <li><strong>Téléphérique du Srđ</strong> : vue panoramique sur la vieille ville et les îles Élaphites</li>
            <li><strong>Île de Lokrum</strong> : 15 min en ferry, jardin botanique, plages naturistes, paons</li>
            <li><strong>Kayak de mer</strong> autour des remparts (25-35€) : perspective unique sur la ville</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Jour 10 : Dernier Jour et Départ
          </h2>
          <p>Profitez de la matinée pour une dernière baignade à la <strong>plage de Banje</strong> ou un café sur le Stradun. Vol direct depuis l'aéroport de Dubrovnik vers la plupart des villes européennes.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Budget Estimé pour 10 Jours
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Poste</th><th className="py-3 px-4 font-bold">Budget (par personne)</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement (10 nuits)</td><td className="py-2 px-4">350 – 900€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">150 – 350€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Transport (voiture ou bus/ferry)</td><td className="py-2 px-4">100 – 300€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités & entrées</td><td className="py-2 px-4">80 – 200€</td></tr>
                <tr className="font-bold"><td className="py-2 px-4">Total (hors vol)</td><td className="py-2 px-4">680 – 1 750€</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              La Croatie en 10 jours, c'est un <strong>concentré de merveilles</strong> : des cascades émeraude de Plitvice aux remparts de Dubrovnik surplombant l'Adriatique. Ce petit pays offre une diversité impressionnante de paysages et une richesse historique qui rivalisent avec n'importe quelle destination européenne.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage en Croatie", url: "/blog/budget-voyage-croatie" },
                { label: "Quand partir en Croatie", url: "/blog/quand-partir-croatie" },
                { label: "Guide complet de la Croatie", url: "/destinations/croatie" },
                { label: "Préparer son voyage", url: "/guides/preparer-voyage" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées</h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇭🇷 Croatie", url: "/destinations/croatie" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/croatie" onClick={() => window.scrollTo(0, 0)}>Découvrir la Croatie</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ItineraireCroatie10Jours;