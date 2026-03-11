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
import mexiqueImage from "@/assets/destinations/mexique.jpg";

const ItineraireMexique10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter le Mexique en 10 jours ?", answer: "Oui, 10 jours permettent de découvrir le Yucatán (Cancún, Playa del Carmen, Tulum, Chichén Itzá) ou de combiner Mexico et Oaxaca. Concentrez-vous sur une région." },
    { question: "Le Mexique est-il sûr pour les touristes ?", answer: "Les zones touristiques (Yucatán, Oaxaca, Mexico Centro) sont globalement sûres. Évitez les zones frontalières nord et restez vigilant la nuit dans les grandes villes." },
    { question: "Faut-il un visa pour le Mexique ?", answer: "Non, les Français peuvent séjourner jusqu'à 180 jours avec un passeport valide. Un formulaire migratoire est rempli à l'arrivée." },
    { question: "Quelle est la meilleure période ?", answer: "Novembre à avril (saison sèche). Consultez notre guide Quand partir au Mexique pour plus de détails." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Mexique 10 Jours : Yucatán et Merveilles Mayas"
        description="Itinéraire complet pour visiter le Mexique en 10 jours. De Cancún à Mérida en passant par Tulum, Chichén Itzá et les cénotes, programme jour par jour avec budget."
        image={mexiqueImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-20" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Mexique 10 Jours", url: "/blog/itineraire-mexique-10-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${mexiqueImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Itinéraire Mexique 10 Jours : Yucatán et Merveilles Mayas
              </h1>
              <p className="text-xl text-white/90">Le guide jour par jour pour explorer la péninsule du Yucatán</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 20 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 13 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            La péninsule du <strong>Yucatán</strong> est l'une des régions les plus fascinantes du Mexique : <strong>ruines mayas</strong> majestueuses, cénotes cristallins, plages de sable blanc et gastronomie épicée. En 10 jours, cet itinéraire vous emmène de <strong>Cancún</strong> à <strong>Mérida</strong>, en passant par les trésors de <strong>Tulum</strong>, <strong>Valladolid</strong> et l'emblématique <strong>Chichén Itzá</strong>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 1-2 : Cancún et Isla Mujeres
          </h2>
          <p>Arrivée à Cancún, porte d'entrée du Yucatán. Si la zone hôtelière est très touristique, le <strong>centre-ville (El Centro)</strong> est plus authentique et abordable.</p>
          <h3 className="text-xl font-bold text-foreground mt-6">Incontournables</h3>
          <ul>
            <li><strong>Isla Mujeres</strong> : ferry de 20 min, plages paradisiaques, snorkeling, golf carts pour explorer l'île</li>
            <li><strong>Marché 28</strong> à Cancún : artisanat, souvenirs et tacos authentiques</li>
            <li><strong>Plage Delfines</strong> : la plus belle plage publique de Cancún (gratuite)</li>
            <li><strong>Coucher de soleil</strong> depuis la pointe sud d'Isla Mujeres</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 3-4 : Playa del Carmen et Cozumel
          </h2>
          <p>Route vers <strong>Playa del Carmen</strong> (1h au sud de Cancún). Ambiance plus décontractée que Cancún, avec la célèbre <strong>Quinta Avenida</strong> (5e Avenue) piétonne.</p>
          <ul>
            <li><strong>Quinta Avenida</strong> : boutiques, restaurants, street art, musique live</li>
            <li><strong>Île de Cozumel</strong> : ferry 45 min, plongée/snorkeling de classe mondiale (récif de Palancar)</li>
            <li><strong>Parc Xcaret</strong> : parc éco-archéologique, rivières souterraines, spectacle nocturne (85€)</li>
            <li><strong>Cénote Azul</strong> : baignade en eau turquoise (entrée 5€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Jour 5-6 : Tulum, Ruines et Bohème
          </h2>
          <p><Link to="/destinations/mexique" className="text-ocean hover:underline font-medium">Tulum</Link> est devenu l'un des endroits les plus photographiés du Mexique : des <strong>ruines mayas perchées sur une falaise</strong> surplombant la mer des Caraïbes.</p>
          <ul>
            <li><strong>Ruines de Tulum</strong> : arrivez à 8h pour éviter la foule (entrée 5€)</li>
            <li><strong>Gran Cenote</strong> : le plus beau cénote de Tulum, eau cristalline, tortues (10€)</li>
            <li><strong>Cenote Dos Ojos</strong> : snorkeling dans des grottes sous-marines</li>
            <li><strong>Réserve de Sian Ka'an</strong> : biosphère UNESCO, excursion en bateau (50-80€)</li>
            <li><strong>Plage de Tulum</strong> : sable blanc, ambiance bohème, beach clubs</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Jour 7 : Valladolid, la Perle Coloniale
          </h2>
          <p>Route vers <strong>Valladolid</strong> (2h de Tulum), charmante ville coloniale au cœur du Yucatán, bien moins touristique que la côte.</p>
          <ul>
            <li><strong>Cenote Suytun</strong> : cathédrale souterraine avec rayon de lumière spectaculaire (7€)</li>
            <li><strong>Cenote Zací</strong> : en plein centre-ville (3€)</li>
            <li><strong>Couvent San Bernardino</strong> : architecture franciscaine du XVIe siècle</li>
            <li><strong>Calzada de los Frailes</strong> : rue colorée, galeries d'art, restaurants locaux</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 8 : Chichén Itzá, Merveille du Monde
          </h2>
          <p>L'une des <strong>7 nouvelles merveilles du monde</strong>. La pyramide de Kukulcán est un chef-d'œuvre d'ingénierie maya.</p>
          <ul>
            <li><strong>Arrivez à l'ouverture</strong> (8h) pour éviter la chaleur et les bus touristiques</li>
            <li><strong>Entrée</strong> : ~25€ (billet combiné fédéral + régional)</li>
            <li><strong>Temple des Guerriers, jeu de balle, observatoire</strong> : comptez 3-4h de visite</li>
            <li><strong>Cenote Ik Kil</strong> : à 5 min, cénote spectaculaire entouré de lianes (8€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 9-10 : Mérida, la Ville Blanche
          </h2>
          <p><strong>Mérida</strong>, capitale du Yucatán, est une ville coloniale élégante avec une scène culturelle vibrante et la meilleure cuisine régionale.</p>
          <ul>
            <li><strong>Plaza Grande</strong> : cathédrale (1598), Palacio de Gobierno (fresques murales)</li>
            <li><strong>Paseo de Montejo</strong> : avenue bordée de demeures coloniales (le « Champs-Élysées » local)</li>
            <li><strong>Marché Lucas de Gálvez</strong> : immense marché local, cuisine yucatèque authentique</li>
            <li><strong>Uxmal</strong> (excursion demi-journée) : site maya moins touristique que Chichén Itzá, architecture Puuc exceptionnelle</li>
            <li><strong>Cuisine yucatèque</strong> : cochinita pibil, papadzules, sopa de lima</li>
          </ul>

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
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement (10 nuits)</td><td className="py-2 px-4">250 – 700€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">100 – 250€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Transport (bus/voiture)</td><td className="py-2 px-4">80 – 250€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités & entrées</td><td className="py-2 px-4">100 – 300€</td></tr>
                <tr className="font-bold"><td className="py-2 px-4">Total (hors vol)</td><td className="py-2 px-4">530 – 1 500€</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Yucatán en 10 jours, c'est un <strong>voyage entre civilisation maya et paradis caribéen</strong>. Des pyramides majestueuses aux cénotes cristallins, des tacos al pastor aux couchers de soleil sur la mer turquoise, chaque jour est une nouvelle aventure. Pour plus de temps, ajoutez <strong>Bacalar</strong> (lagune aux 7 couleurs) ou <strong>Holbox</strong> (île paradisiaque).
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage au Mexique", url: "/blog/budget-voyage-mexique" },
                { label: "Quand partir au Mexique", url: "/blog/quand-partir-mexique" },
                { label: "Guide complet du Mexique", url: "/destinations/mexique" },
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
              {[{ label: "🇲🇽 Mexique", url: "/destinations/mexique" }].map((dest, idx) => (
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
              <Link to="/destinations/mexique" onClick={() => window.scrollTo(0, 0)}>Découvrir le Mexique</Link>
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

export default ItineraireMexique10Jours;