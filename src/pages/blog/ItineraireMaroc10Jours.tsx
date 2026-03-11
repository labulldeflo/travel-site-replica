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
import marocImage from "@/assets/destinations/maroc.jpg";

const ItineraireMaroc10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter le Maroc en 10 jours ?", answer: "Oui, 10 jours permettent de découvrir Marrakech, Fès, le désert du Sahara et les montagnes de l'Atlas. C'est le format idéal pour un premier voyage." },
    { question: "Faut-il louer une voiture au Maroc ?", answer: "C'est recommandé pour la flexibilité, surtout pour le sud et l'Atlas. Comptez 20-35€/jour. Sinon, les bus CTM et Supratours sont fiables et économiques." },
    { question: "Le Maroc est-il sûr ?", answer: "Oui, le Maroc est une destination sûre. Les zones touristiques sont bien surveillées. Restez vigilant face aux arnaques et rabatteurs dans les médinas." },
    { question: "Faut-il un visa pour le Maroc ?", answer: "Non, les ressortissants français peuvent séjourner jusqu'à 90 jours sans visa avec un passeport valide." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Maroc 10 Jours : De Marrakech au Sahara"
        description="Itinéraire complet pour visiter le Maroc en 10 jours. De Marrakech à Fès en passant par le désert de Merzouga et les gorges du Dadès, programme jour par jour."
        image={marocImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-15" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Maroc 10 Jours", url: "/blog/itineraire-maroc-10-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${marocImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Itinéraire Maroc 10 Jours : De Marrakech au Sahara
              </h1>
              <p className="text-xl text-white/90">Le guide jour par jour pour explorer les merveilles du Maroc</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 15 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 13 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Maroc est une terre de contrastes envoûtants : <strong>médinas labyrinthiques</strong>, dunes dorées du Sahara, sommets enneigés de l'Atlas et <strong>hospitalité légendaire</strong>. En 10 jours, cet itinéraire vous emmène de la vibrante <strong>Marrakech</strong> aux portes du désert, en passant par les <strong>gorges du Dadès</strong>, la vallée des roses et la fascinante <strong>Fès</strong>. Un voyage sensoriel inoubliable entre couleurs, saveurs et paysages grandioses.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 1-2 : Marrakech, la Ville Rouge
          </h2>
          <p>
            Votre aventure commence dans la captivante <Link to="/destinations/maroc" className="text-ocean hover:underline font-medium">Marrakech</Link>. La médina classée UNESCO est un tourbillon de couleurs, d'odeurs et de sons qui éveille tous les sens.
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 1 : La médina</h3>
          <ul>
            <li><strong>Place Jemaa el-Fna</strong> : le cœur battant de Marrakech, spectacles de rue au coucher du soleil</li>
            <li><strong>Souks</strong> : épices, cuir, tapis, lanternes – laissez-vous perdre dans le labyrinthe</li>
            <li><strong>Medersa Ben Youssef</strong> : chef-d'œuvre d'architecture islamique (XIVe siècle)</li>
            <li><strong>Dîner sur un rooftop</strong> avec vue sur les toits de la médina</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 2 : Jardins et palais</h3>
          <ul>
            <li><strong>Jardin Majorelle</strong> : le jardin bleu d'Yves Saint Laurent (entrée 14€)</li>
            <li><strong>Palais Bahia</strong> : 8 hectares de cours, jardins et mosaïques</li>
            <li><strong>Tombeaux Saadiens</strong> : joyau caché redécouvert en 1917</li>
            <li><strong>Hammam traditionnel</strong> : expérience de détente authentique (10-30€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 3 : L'Atlas et Aït Ben Haddou
          </h2>
          <p>
            Route spectaculaire à travers le <strong>col du Tichka</strong> (2 260 m) avec des paysages à couper le souffle. Arrêt à <strong>Aït Ben Haddou</strong>, ksar classé UNESCO et décor de Gladiator et Game of Thrones.
          </p>
          <ul>
            <li><strong>Col du Tichka</strong> : virages vertigineux, panoramas sur l'Atlas</li>
            <li><strong>Aït Ben Haddou</strong> : village fortifié en terre ocre (visite 1-2h)</li>
            <li><strong>Nuit à Ouarzazate</strong> : la « porte du désert »</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Jour 4-5 : Gorges et Vallées
          </h2>
          <p>
            Route vers l'est à travers la <strong>vallée des Roses</strong> (célèbre en mai), les <strong>gorges du Dadès</strong> et les <strong>gorges du Todra</strong> (parois de 300 m de haut).
          </p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 4 : Gorges du Dadès</h3>
          <ul>
            <li><strong>Route des Kasbahs</strong> : forts en terre le long de la vallée du Dadès</li>
            <li><strong>Gorges du Dadès</strong> : randonnée dans les formations rocheuses spectaculaires</li>
            <li><strong>Nuit en gîte</strong> dans la vallée (ambiance berbère authentique)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 5 : Gorges du Todra</h3>
          <ul>
            <li><strong>Gorges du Todra</strong> : canyon étroit aux parois vertigineuses, baignade possible</li>
            <li><strong>Route vers Merzouga</strong> : changement de paysage progressif vers le désert</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Jour 6-7 : Désert de Merzouga (Erg Chebbi)
          </h2>
          <p>
            Le point fort du voyage : les <strong>dunes de l'Erg Chebbi</strong>, atteignant 150 mètres de hauteur. Une nuit dans un camp en plein désert est une expérience inoubliable.
          </p>
          <ul>
            <li><strong>Balade à dos de dromadaire</strong> au coucher du soleil (inclus dans la plupart des camps)</li>
            <li><strong>Nuit en camp berbère</strong> : dîner sous les étoiles, musique traditionnelle</li>
            <li><strong>Lever de soleil</strong> sur les dunes : moment magique à ne pas manquer</li>
            <li><strong>Sandboarding</strong> ou excursion en 4x4 dans le désert</li>
          </ul>
          <p><strong>Budget camp désert :</strong> 30-100€/personne la nuit tout inclus (transport, dîner, petit-déjeuner, dromadaire).</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 8-9 : Fès, la Capitale Spirituelle
          </h2>
          <p>
            Route ou vol vers <strong>Fès</strong> (6-7h de route ou vol interne ~50€). La médina de Fès est la plus grande zone piétonne au monde, avec plus de 9 000 ruelles.
          </p>
          <ul>
            <li><strong>Médina de Fès el-Bali</strong> : classée UNESCO, la plus grande médina médiévale au monde</li>
            <li><strong>Tanneries Chouara</strong> : cuves de teinture colorées vues des terrasses (visite matinale recommandée)</li>
            <li><strong>Medersa Bou Inania</strong> : architecture mérinide raffinée</li>
            <li><strong>Quartier juif (Mellah)</strong> et cimetière historique</li>
            <li><strong>Cuisine de rue</strong> : msemen, harira, méchoui</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Jour 10 : Dernier Jour et Départ
          </h2>
          <p>
            Profitez de la matinée pour un dernier thé à la menthe dans un riad, faire vos derniers achats dans les souks de Fès, ou visiter le <strong>jardin Jnan Sbil</strong>. Transfert vers l'aéroport de Fès (ou retour vers Marrakech si vol depuis là-bas).
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
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement (10 nuits)</td><td className="py-2 px-4">200 – 600€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">80 – 200€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Transport (voiture ou bus)</td><td className="py-2 px-4">100 – 300€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités & excursions</td><td className="py-2 px-4">80 – 200€</td></tr>
                <tr className="font-bold"><td className="py-2 px-4">Total (hors vol)</td><td className="py-2 px-4">460 – 1 300€</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Maroc en 10 jours, c'est un <strong>voyage multisensoriel</strong> qui vous transporte des ruelles animées de Marrakech au silence majestueux du Sahara. Entre les sommets de l'Atlas, les oasis luxuriantes et les médinas millénaires, chaque jour apporte son lot de découvertes et d'émerveillement.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage au Maroc", url: "/blog/budget-voyage-maroc" },
                { label: "Quand partir au Maroc", url: "/blog/quand-partir-maroc" },
                { label: "Guide complet du Maroc", url: "/destinations/maroc" },
                { label: "Préparer son voyage", url: "/guides/preparer-voyage" },
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
                { label: "🇲🇦 Maroc", url: "/destinations/maroc" },
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
              <Link to="/destinations/maroc" onClick={() => window.scrollTo(0, 0)}>Découvrir le Maroc</Link>
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

export default ItineraireMaroc10Jours;