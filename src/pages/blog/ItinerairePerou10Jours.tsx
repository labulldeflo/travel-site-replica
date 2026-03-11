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
import perouImage from "@/assets/destinations/perou.jpg";

const ItinerairePerou10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter le Pérou en 10 jours ?", answer: "Oui, 10 jours permettent de découvrir Lima, Cusco, le Machu Picchu, la Vallée Sacrée et le lac Titicaca. C'est un bon rythme pour un premier voyage." },
    { question: "Faut-il s'acclimater à l'altitude ?", answer: "Oui, Cusco est à 3 400 m. Prévoyez 1-2 jours d'acclimatation. Buvez du mate de coca, évitez l'alcool et montez progressivement." },
    { question: "Comment réserver le Machu Picchu ?", answer: "Les billets sont limités à 4 044 visiteurs/jour. Réservez 2-3 mois à l'avance sur le site officiel (machupicchu.gob.pe). Circuit 1 ou 2 selon votre préférence." },
    { question: "Le Pérou est-il sûr ?", answer: "Les zones touristiques (Lima Miraflores, Cusco, Vallée Sacrée) sont sûres. Gardez vos objets de valeur en sécurité et évitez de marcher seul la nuit dans les quartiers isolés." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Pérou 10 Jours : De Lima au Machu Picchu"
        description="Itinéraire complet pour visiter le Pérou en 10 jours. De Lima à Cusco en passant par le Machu Picchu, la Vallée Sacrée et le lac Titicaca, programme jour par jour."
        image={perouImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-25" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Pérou 10 Jours", url: "/blog/itineraire-perou-10-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${perouImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Itinéraire Pérou 10 Jours : De Lima au Machu Picchu</h1>
              <p className="text-xl text-white/90">Le guide jour par jour pour explorer les trésors incas et andins</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 25 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 14 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Pérou est une destination qui fait rêver : <strong>Machu Picchu</strong>, cité inca perchée dans les nuages, <strong>Cusco</strong> l'ancienne capitale inca, le mystérieux <strong>lac Titicaca</strong> et <strong>Lima</strong>, capitale gastronomique d'Amérique du Sud. En 10 jours, cet itinéraire vous fait traverser les paysages les plus spectaculaires des Andes, entre histoire millénaire et nature grandiose.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 1-2 : Lima, Capital Gastronomique
          </h2>
          <p><Link to="/destinations/perou" className="text-ocean hover:underline font-medium">Lima</Link> est souvent négligée, mais la capitale péruvienne mérite 2 jours. C'est l'une des <strong>meilleures villes au monde pour la gastronomie</strong>.</p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 1 : Miraflores et Barranco</h3>
          <ul>
            <li><strong>Malecón de Miraflores</strong> : promenade en bord de falaise, vue sur le Pacifique</li>
            <li><strong>Parc de l'Amour</strong> : sculptures et mosaïques surplombant l'océan</li>
            <li><strong>Barranco</strong> : quartier bohème, street art, galeries, Puente de los Suspiros</li>
            <li><strong>Dîner gastronomique</strong> : ceviche, lomo saltado, causa (15-30€ dans un bon restaurant)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 2 : Centre historique</h3>
          <ul>
            <li><strong>Plaza Mayor</strong> : cathédrale, Palais du Gouvernement (relève de la garde à midi)</li>
            <li><strong>Couvent San Francisco</strong> : catacombes souterraines impressionnantes</li>
            <li><strong>Huaca Pucllana</strong> : pyramide pré-inca en plein centre de Miraflores</li>
            <li><strong>Marché de Surquillo</strong> : fruits exotiques, jus frais, ambiance locale</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 3-4 : Cusco, l'Ancienne Capitale Inca
          </h2>
          <p>Vol Lima → Cusco (1h15). À <strong>3 400 m d'altitude</strong>, l'acclimatation est essentielle. Le jour 3 est un jour doux pour s'adapter.</p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 3 : Acclimatation douce</h3>
          <ul>
            <li><strong>Plaza de Armas</strong> : cathédrale, Iglesia de la Compañía</li>
            <li><strong>San Pedro Market</strong> : marché couvert, jus de fruits, cuisine locale (repas 2-4€)</li>
            <li><strong>Quartier San Blas</strong> : artisans, cafés, ruelles pavées</li>
            <li><strong>Mate de coca</strong> : infusion traditionnelle contre le mal d'altitude</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 4 : Sites incas autour de Cusco</h3>
          <ul>
            <li><strong>Sacsayhuamán</strong> : forteresse inca aux pierres monumentales (certaines de 200 tonnes)</li>
            <li><strong>Qenqo, Puka Pukara, Tambomachay</strong> : circuit des sites archéologiques proches</li>
            <li><strong>Boleto Turístico</strong> (billet combiné ~40€) : couvre 16 sites sur 10 jours</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Jour 5 : Vallée Sacrée des Incas
          </h2>
          <p>Excursion d'une journée dans la <strong>Vallée Sacrée</strong>, berceau de la civilisation inca, à une altitude plus basse et agréable que Cusco.</p>
          <ul>
            <li><strong>Pisac</strong> : terrasses agricoles incas et marché artisanal coloré</li>
            <li><strong>Ollantaytambo</strong> : forteresse inca imposante, village au plan inca intact</li>
            <li><strong>Moray</strong> : amphithéâtre agricole inca expérimental</li>
            <li><strong>Salines de Maras</strong> : 3 000+ bassins de sel en terrasses, paysage surréaliste (entrée 5€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Jour 6-7 : Machu Picchu, la Cité Perdue
          </h2>
          <p>Le point fort du voyage. Deux options pour rejoindre Aguas Calientes (village au pied du Machu Picchu) :</p>
          <ul>
            <li><strong>Train PeruRail/Inca Rail</strong> depuis Ollantaytambo (1h45, 50-80€ A/R)</li>
            <li><strong>Trek du Chemin de l'Inca</strong> (4 jours, réserver 6 mois à l'avance, ~600€)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 6 : Arrivée et exploration</h3>
          <ul>
            <li><strong>Aguas Calientes</strong> : installation, sources thermales (5€), marché artisanal</li>
            <li><strong>Préparez votre visite</strong> : passeport, billet imprimé, eau, crème solaire</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 7 : Machu Picchu</h3>
          <ul>
            <li><strong>Bus navette</strong> depuis Aguas Calientes (25 min, ~12€ A/R)</li>
            <li><strong>Arrivez à l'ouverture</strong> (6h) pour la lumière magique du matin</li>
            <li><strong>Huayna Picchu</strong> (optionnel, supplément ~15€) : vue vertigineuse, réserver à l'avance</li>
            <li><strong>Visite guidée</strong> recommandée (20-30€) pour comprendre l'histoire</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 8-9 : Lac Titicaca
          </h2>
          <p>Bus ou avion Cusco → Puno (bus touristique 7h avec arrêts, ou vol 1h). Le <strong>lac Titicaca</strong>, à 3 812 m, est le plus haut lac navigable du monde.</p>
          <ul>
            <li><strong>Îles flottantes des Uros</strong> : îles artificielles en roseaux totora, peuple vivant sur le lac</li>
            <li><strong>Île Taquile</strong> : communauté quechua, textiles UNESCO, randonnée panoramique</li>
            <li><strong>Île Amantaní</strong> (optionnel) : nuit chez l'habitant, coucher de soleil inoubliable</li>
            <li><strong>Excursion journée</strong> : Uros + Taquile (~15-25€ avec guide)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Jour 10 : Retour à Lima et Départ
          </h2>
          <p>Vol Juliaca → Lima (1h30). Profitez des dernières heures pour un dernier ceviche à Miraflores ou faire du shopping artisanal au <strong>Mercado Indio</strong>.</p>

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
                <tr className="border-b border-border/50"><td className="py-2 px-4">Vols internes (Lima-Cusco-Puno)</td><td className="py-2 px-4">100 – 250€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement (10 nuits)</td><td className="py-2 px-4">150 – 500€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">80 – 200€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Transports locaux</td><td className="py-2 px-4">50 – 150€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités & entrées</td><td className="py-2 px-4">100 – 250€</td></tr>
                <tr className="font-bold"><td className="py-2 px-4">Total (hors vol international)</td><td className="py-2 px-4">480 – 1 350€</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Pérou en 10 jours, c'est un <strong>voyage à travers 3 000 ans d'histoire</strong>, des civilisations pré-incas au Machu Picchu, le tout dans des paysages andins à couper le souffle. L'altitude demande de la patience, mais la récompense est à la hauteur. Pour un voyage plus long, ajoutez <strong>la ligne de Nazca</strong> ou <strong>l'Amazonie péruvienne</strong>.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage au Pérou", url: "/blog/budget-voyage-perou" },
                { label: "Quand partir au Pérou", url: "/blog/quand-partir-perou" },
                { label: "Guide complet du Pérou", url: "/destinations/perou" },
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
              {[{ label: "🇵🇪 Pérou", url: "/destinations/perou" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/perou" onClick={() => window.scrollTo(0, 0)}>Découvrir le Pérou</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ItinerairePerou10Jours;