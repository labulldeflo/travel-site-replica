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
import portugalImage from "@/assets/destinations/portugal.jpg";

const ItinerairePortugal10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter le Portugal en 10 jours ?", answer: "Oui, 10 jours permettent de découvrir Lisbonne, Sintra, Porto, la vallée du Douro et l'Algarve. C'est le format idéal." },
    { question: "Comment se déplacer au Portugal ?", answer: "Le train (CP) est confortable et abordable (Lisbonne-Porto ~25€ en 2h45). La location de voiture est idéale pour l'Algarve et le Douro." },
    { question: "Le Portugal est-il cher ?", answer: "Le Portugal est l'une des destinations les plus abordables d'Europe de l'Ouest. Lisbonne et Porto ont vu leurs prix augmenter mais restent raisonnables." },
    { question: "Faut-il un visa ?", answer: "Non, le Portugal est dans l'espace Schengen. Carte d'identité ou passeport valide." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Itinéraire Portugal 10 Jours : De Lisbonne à Porto" description="Itinéraire complet pour visiter le Portugal en 10 jours. De Lisbonne à Porto en passant par Sintra, la vallée du Douro et l'Algarve, programme jour par jour." image={portugalImage} ogType="article" hideH1 articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-13" }} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Itinéraire Portugal 10 Jours", url: "/blog/itineraire-portugal-10-jours" }]} />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${portugalImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Itinéraire Portugal 10 Jours : De Lisbonne à Porto</h1>
              <p className="text-xl text-white/90">Le guide jour par jour pour explorer le pays des azulejos et du fado</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 13 juillet 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 14 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Portugal séduit par sa <strong>lumière dorée</strong>, ses <strong>azulejos</strong> bleus et blancs, sa <strong>gastronomie généreuse</strong> et ses <strong>prix doux</strong>. En 10 jours, cet itinéraire vous emmène de la captivante <strong>Lisbonne</strong> aux palais féeriques de <strong>Sintra</strong>, en passant par les plages spectaculaires de l'<strong>Algarve</strong> et le charme irrésistible de <strong>Porto</strong>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Jour 1-3 : Lisbonne, la Ville aux Sept Collines</h2>
          <p><Link to="/destinations/portugal" className="text-ocean hover:underline font-medium">Lisbonne</Link> est une ville qui se vit à pied, dans la montée et la descente de ses collines pavées, au son du fado et au goût des pastéis de nata.</p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 1 : Alfama et Baixa</h3>
          <ul>
            <li><strong>Château São Jorge</strong> : vue panoramique imprenable sur Lisbonne et le Tage (10€)</li>
            <li><strong>Alfama</strong> : le quartier le plus ancien, ruelles labyrinthiques, maisons colorées</li>
            <li><strong>Tram 28</strong> : le tramway emblématique qui serpente dans les collines (gratuit avec la Lisboa Card)</li>
            <li><strong>Maison du fado</strong> : dîner avec spectacle traditionnel (20-40€)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 2 : Belém et LX Factory</h3>
          <ul>
            <li><strong>Tour de Belém</strong> : icône de Lisbonne, architecture manuéline (8€)</li>
            <li><strong>Monastère des Hiéronymites</strong> : chef-d'œuvre UNESCO (10€)</li>
            <li><strong>Pastéis de Belém</strong> : la pâtisserie originale depuis 1837 (incontournable !)</li>
            <li><strong>MAAT</strong> : musée d'art contemporain au bord du Tage</li>
            <li><strong>LX Factory</strong> : ancienne usine reconvertie en village créatif, restaurants, boutiques</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 3 : Bairro Alto et Time Out Market</h3>
          <ul>
            <li><strong>Elevador de Santa Justa</strong> : ascenseur néo-gothique en fer forgé</li>
            <li><strong>Time Out Market</strong> : food court gastronomique, le meilleur de la cuisine lisboète</li>
            <li><strong>Bairro Alto</strong> : le quartier bohème, galeries d'art le jour, bars la nuit</li>
            <li><strong>Miradouros</strong> : points de vue gratuits (Graça, Senhora do Monte, Santa Catarina)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Jour 4 : Sintra, les Palais Féeriques</h2>
          <p>Excursion d'une journée depuis Lisbonne (40 min en train, 2,25€). <strong>Sintra</strong> est un monde à part : palais colorés nichés dans une forêt enchantée.</p>
          <ul>
            <li><strong>Palais de Pena</strong> : château aux couleurs vives, le « Neuschwanstein du Portugal » (14€)</li>
            <li><strong>Quinta da Regaleira</strong> : puits initiatique, grottes mystérieuses, jardins romantiques (10€)</li>
            <li><strong>Palais national de Sintra</strong> : cheminées coniques emblématiques</li>
            <li><strong>Cabo da Roca</strong> : le point le plus occidental d'Europe continentale</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Coffee className="h-7 w-7 text-ocean" /> Jour 5-6 : Algarve, Falaises et Plages</h2>
          <p>Vol ou train Lisbonne → Faro (vol 45 min ~30€, ou train 3h ~20€). L'<strong>Algarve</strong> offre les plus belles plages d'Europe avec ses falaises dorées spectaculaires.</p>
          <ul>
            <li><strong>Praia da Marinha</strong> : élue parmi les 10 plus belles plages du monde</li>
            <li><strong>Grotte de Benagil</strong> : cathédrale marine accessible en kayak ou bateau (20-30€)</li>
            <li><strong>Lagos</strong> : Ponta da Piedade, formations rocheuses incroyables</li>
            <li><strong>Faro</strong> : vieille ville charmante, Ria Formosa (parc naturel)</li>
            <li><strong>Sagres</strong> : bout du monde, falaises vertigineuses, surf</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Train className="h-7 w-7 text-ocean" /> Jour 7-9 : Porto, la Ville du Porto</h2>
          <p>Vol Faro → Porto (1h15, ~30€). <strong>Porto</strong> est une ville d'une beauté brute, accrochée aux rives du Douro, avec ses ponts majestueux et ses caves de porto.</p>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 7 : Ribeira et caves de porto</h3>
          <ul>
            <li><strong>Ribeira</strong> : quartier UNESCO en bord de Douro, maisons colorées empilées</li>
            <li><strong>Pont Dom Luís I</strong> : traverse le Douro à pied, vue spectaculaire</li>
            <li><strong>Caves de porto</strong> (Vila Nova de Gaia) : dégustation chez Graham's, Sandeman ou Taylor's (15-20€)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 8 : Centro histórico</h3>
          <ul>
            <li><strong>Librairie Lello</strong> : l'une des plus belles au monde, inspiration pour Harry Potter (5€)</li>
            <li><strong>Tour des Clercs</strong> : clocher panoramique emblématique (6€)</li>
            <li><strong>Gare São Bento</strong> : 20 000 azulejos racontant l'histoire du Portugal</li>
            <li><strong>Francesinha</strong> : le sandwich typique de Porto, un must gastronomique (8-12€)</li>
          </ul>
          <h3 className="text-xl font-bold text-foreground mt-6">Jour 9 : Vallée du Douro</h3>
          <ul>
            <li><strong>Croisière sur le Douro</strong> : 6 écluses, paysages de vignobles en terrasses (40-60€)</li>
            <li><strong>Train historique du Douro</strong> : Porto-Pinhão en train le long du fleuve (12€)</li>
            <li><strong>Dégustation dans les quintas</strong> : domaines viticoles du patrimoine mondial</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Jour 10 : Dernier Jour et Départ</h2>
          <p>Profitez d'un dernier café et pastéis de nata dans le quartier de Foz do Douro, face à l'océan Atlantique. Vol retour depuis l'aéroport de Porto.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><DollarSign className="h-7 w-7 text-ocean" /> Budget Estimé pour 10 Jours</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Poste</th><th className="py-3 px-4 font-bold">Budget (par personne)</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hébergement (10 nuits)</td><td className="py-2 px-4">250 – 700€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nourriture</td><td className="py-2 px-4">120 – 300€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Transport</td><td className="py-2 px-4">80 – 200€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Activités & entrées</td><td className="py-2 px-4">60 – 150€</td></tr>
                <tr className="font-bold"><td className="py-2 px-4">Total (hors vol)</td><td className="py-2 px-4">510 – 1 350€</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">Le Portugal en 10 jours, c'est une <strong>immersion dans l'art de vivre lusitanien</strong> : la saudade du fado, la douceur des pastéis, la beauté des azulejos et la chaleur des Portugais. Un pays qui se déguste lentement et qui invite toujours à revenir.</p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage au Portugal", url: "/blog/budget-voyage-portugal" },
                { label: "Quand partir au Portugal", url: "/blog/quand-partir-portugal" },
                { label: "Guide complet du Portugal", url: "/destinations/portugal" },
                { label: "Préparer son voyage", url: "/guides/preparer-voyage" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées</h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇵🇹 Portugal", url: "/destinations/portugal" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/portugal" onClick={() => window.scrollTo(0, 0)}>Découvrir le Portugal</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ItinerairePortugal10Jours;