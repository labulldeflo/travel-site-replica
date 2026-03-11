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
import espagneImage from "@/assets/destinations/espagne.jpg";

const ItineraireEspagne10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter l'Espagne en 10 jours ?", answer: "Oui, 10 jours permettent de découvrir 3-4 grandes villes et leurs environs. L'itinéraire Madrid-Andalousie-Barcelone est le grand classique qui couvre le meilleur du pays." },
    { question: "Comment se déplacer en Espagne ?", answer: "Le train AVE (grande vitesse) est excellent : Madrid-Séville en 2h30, Madrid-Barcelone en 2h30. Réservez sur renfe.com. Les vols intérieurs low-cost (Vueling, Ryanair) sont aussi très abordables." },
    { question: "Quelle est la meilleure saison pour l'Espagne ?", answer: "Le printemps (avril-mai) et l'automne (septembre-octobre) sont parfaits. L'été est très chaud en Andalousie (40°C+) mais idéal pour les côtes." },
    { question: "L'Espagne est-elle chère ?", answer: "L'Espagne reste l'un des pays les plus abordables d'Europe occidentale. Les tapas, le vin et l'hébergement sont nettement moins chers qu'en France ou en Italie." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Espagne 10 Jours : Madrid, Andalousie, Barcelone"
        description="Itinéraire complet pour visiter l'Espagne en 10 jours. De Madrid à Barcelone en passant par l'Andalousie, programme jour par jour avec budget et conseils."
        image={espagneImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-01" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Espagne 10 Jours", url: "/blog/itineraire-espagne-10-jours" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Itinéraire Espagne 10 Jours : De Madrid à Barcelone via l'Andalousie
          </h1>

          <img src={espagneImage} alt="Panorama d'Espagne avec l'Alhambra et la Sagrada Familia" className="w-full rounded-2xl mb-8 object-cover max-h-96" loading="lazy" />

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="lead text-xl mb-6">
              L'Espagne est un pays de contrastes saisissants : architecture mauresque, flamenco passionné, tapas savoureuses et plages dorées. En 10 jours, cet itinéraire vous emmène à travers les plus belles facettes du pays, de la capitale madrilène aux trésors de l'Andalousie, en terminant par la Barcelone de Gaudí.
            </p>

            <p>
              Ce guide jour par jour vous aide à organiser un voyage riche en découvertes culturelles, gastronomiques et historiques. L'Espagne est l'un des pays les plus abordables d'Europe occidentale, ce qui permet de vivre des expériences exceptionnelles sans se ruiner.
            </p>

            <div className="bg-muted/50 border border-border rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><Compass className="w-5 h-5 text-primary" /> Résumé de l'itinéraire</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> <strong>Durée :</strong> 10 jours / 9 nuits</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> <strong>Étapes :</strong> Madrid → Tolède → Cordoue → Séville → Grenade → Barcelone</li>
                <li className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-primary" /> <strong>Budget :</strong> 800 € à 2 000 € par personne</li>
                <li className="flex items-center gap-2"><Train className="w-4 h-4 text-primary" /> <strong>Transport :</strong> Train AVE + bus régionaux</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Jours 1-3 : Madrid et Tolède</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 1 : Arrivée à Madrid</h3>
            <p>
              Atterrissez à Madrid-Barajas et rejoignez le centre en métro (ligne 8, puis correspondance, environ 5 €). Installez-vous dans le quartier de <strong>Malasaña</strong> ou <strong>La Latina</strong> pour leur ambiance locale authentique. Commencez par la <strong>Puerta del Sol</strong> et la <strong>Plaza Mayor</strong>, puis perdez-vous dans les ruelles du vieux Madrid. Le soir, plongez dans la culture des tapas : commandez des patatas bravas, du jamón ibérico et des croquetas dans les bars de La Latina.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 2 : Musées et Parque del Retiro</h3>
            <p>
              Le matin, visitez le <strong>Musée du Prado</strong> (15 €, gratuit les 2 dernières heures), l'un des plus grands musées d'art au monde avec Velázquez, Goya et El Greco. Après le déjeuner, promenez-vous dans le <strong>Parque del Retiro</strong>, le poumon vert de Madrid, et louez une barque sur le lac. Le <strong>Palais de Cristal</strong> dans le parc accueille des expositions d'art contemporain gratuites.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 3 : Excursion à Tolède</h3>
            <p>
              Prenez le train pour <strong>Tolède</strong> (30 min, environ 13 € A/R), la « ville des trois cultures ». Cette ancienne capitale perchée sur une colline mêle architectures chrétienne, musulmane et juive. Visitez la cathédrale gothique, la synagogue del Tránsito et l'Alcázar. Ne manquez pas le mirador du Tage pour une vue panoramique époustouflante. Retour à Madrid le soir.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.vols} />

            <h2 className="text-2xl font-bold mt-10 mb-4">Jours 4-5 : Cordoue et Séville</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 4 : Cordoue, Joyau Andalou</h3>
            <p>
              Train AVE Madrid-Cordoue (1h45, environ 25-40 €). La <strong>Mosquée-Cathédrale (Mezquita)</strong> est l'un des monuments les plus extraordinaires au monde : 856 colonnes de marbre et d'onyx créent une forêt de pierre hypnotique. Flânez dans le quartier juif (Judería), ses ruelles fleuries et ses patios secrets. Cordoue est aussi célèbre pour son salmorejo, une soupe froide de tomate plus épaisse que le gazpacho.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 5 : Séville, Capitale du Flamenco</h3>
            <p>
              Train Cordoue-Séville (45 min, environ 10-15 €). Séville est la ville la plus envoûtante d'Andalousie. Visitez l'<strong>Alcázar</strong> (12 €), palais mudéjar spectaculaire, et la <strong>Cathédrale</strong> avec la Giralda (9 €). Le quartier de <strong>Triana</strong> est le berceau du flamenco — assistez à un spectacle dans un tablao le soir (20-35 €). Les tapas sévillanes sont les meilleures d'Espagne : essayez les espinacas con garbanzos (épinards aux pois chiches) et le pescaíto frito (poisson frit).
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Jours 6-7 : Grenade et l'Alhambra</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 6 : L'Alhambra</h3>
            <p>
              Bus Séville-Grenade (3h, environ 20 €). Réservez votre billet pour l'<strong>Alhambra</strong> au moins 2 mois à l'avance (14 €) — c'est le monument le plus visité d'Espagne et les places sont limitées. Ce palais nasride est un chef-d'œuvre absolu de l'art islamique : jardins du Generalife, palais des Nasrides, patios ornés de stucs et de céramiques. Prévoyez une demi-journée complète.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 7 : Albaicín et Sacromonte</h3>
            <p>
              Le quartier de l'<strong>Albaicín</strong>, classé UNESCO, est un labyrinthe de ruelles blanches avec des vues imprenables sur l'Alhambra et la Sierra Nevada. Le <strong>Mirador de San Nicolás</strong> offre le coucher de soleil le plus célèbre d'Andalousie. Le soir, montez au <strong>Sacromonte</strong> pour un spectacle de flamenco dans une grotte troglodyte — une expérience inoubliable et authentique.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6 rounded-r-lg">
              <p className="font-medium">💡 <strong>Bon plan tapas :</strong> À Grenade, les tapas sont encore gratuites avec chaque boisson commandée ! C'est l'une des dernières villes d'Espagne à maintenir cette tradition. Un verre de bière (2-3 €) vous sera servi avec une tapa généreuse.</p>
            </div>

            <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} />

            <h2 className="text-2xl font-bold mt-10 mb-4">Jours 8-10 : Barcelone, la Ville de Gaudí</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 8 : Vol vers Barcelone et La Rambla</h3>
            <p>
              Vol Grenade-Barcelone (1h30, environ 30-60 € avec Vueling). Installez-vous dans le <strong>Born</strong> ou le <strong>Raval</strong> pour leur vie nocturne et proximité avec les sites. Promenez-vous sur <strong>La Rambla</strong>, visitez le <strong>marché de la Boqueria</strong> (goûtez les fruits frais et les jus) et explorez le <strong>quartier gothique (Barri Gòtic)</strong> avec sa cathédrale et ses places médiévales.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 9 : Gaudí et Modernisme</h3>
            <p>
              Journée consacrée à l'œuvre de Gaudí. La <strong>Sagrada Família</strong> (26 €, réservation indispensable) est une cathédrale en construction depuis 1882 dont l'intérieur baigné de lumière est à couper le souffle. Enchaînez avec le <strong>Parc Güell</strong> (10 €) pour ses mosaïques colorées et ses vues panoramiques. Si le temps le permet, visitez la <strong>Casa Batlló</strong> (35 €) ou la <strong>Casa Milà</strong> (La Pedrera, 25 €) sur le Passeig de Gràcia.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Jour 10 : Plage et Dernières Découvertes</h3>
            <p>
              Profitez de la plage de la <strong>Barceloneta</strong> le matin, puis explorez le quartier du <strong>Born</strong> avec le musée Picasso (12 €, gratuit le premier dimanche du mois). Déjeunez de paella dans un restaurant du port et terminez par une dernière balade sur le <strong>Passeig de Gràcia</strong> pour admirer les façades modernistes. Un dernier vermouth en terrasse pour clôturer ce magnifique tour d'Espagne.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Budget Détaillé pour 10 Jours en Espagne</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Poste</th>
                    <th className="border border-border p-3 text-center">Économique</th>
                    <th className="border border-border p-3 text-center">Moyen</th>
                    <th className="border border-border p-3 text-center">Confort</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">✈️ Vol A/R</td><td className="border border-border p-3 text-center">60-120 €</td><td className="border border-border p-3 text-center">120-250 €</td><td className="border border-border p-3 text-center">250-450 €</td></tr>
                  <tr><td className="border border-border p-3">🏨 Hébergement (9 nuits)</td><td className="border border-border p-3 text-center">200-350 €</td><td className="border border-border p-3 text-center">400-750 €</td><td className="border border-border p-3 text-center">750-1 500 €</td></tr>
                  <tr><td className="border border-border p-3">🍽️ Repas</td><td className="border border-border p-3 text-center">150-250 €</td><td className="border border-border p-3 text-center">300-450 €</td><td className="border border-border p-3 text-center">450-700 €</td></tr>
                  <tr><td className="border border-border p-3">🚂 Transports</td><td className="border border-border p-3 text-center">80-130 €</td><td className="border border-border p-3 text-center">130-220 €</td><td className="border border-border p-3 text-center">220-350 €</td></tr>
                  <tr><td className="border border-border p-3">🎟️ Activités</td><td className="border border-border p-3 text-center">40-80 €</td><td className="border border-border p-3 text-center">80-180 €</td><td className="border border-border p-3 text-center">180-350 €</td></tr>
                  <tr className="font-bold bg-muted"><td className="border border-border p-3">Total</td><td className="border border-border p-3 text-center">530-930 €</td><td className="border border-border p-3 text-center">1 030-1 850 €</td><td className="border border-border p-3 text-center">1 850-3 350 €</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Conseils Pratiques pour l'Espagne</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Horaires Espagnols</h3>
            <p>
              Les Espagnols vivent en décalé : le déjeuner se prend entre 14h et 15h30, le dîner rarement avant 21h. Les tapas bars ouvrent en général à partir de 13h et le soir à partir de 20h. Adaptez-vous à ce rythme pour vivre l'Espagne authentique et trouver les restaurants ouverts.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Sécurité</h3>
            <p>
              L'Espagne est un pays très sûr. Attention cependant aux pickpockets dans les zones touristiques de Barcelone (La Rambla, métro) et Madrid (Gran Vía, Puerta del Sol). Utilisez un sac à bandoulière fermé et gardez vos objets de valeur en sécurité.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/destinations/espagne"><Button variant="outline"><MapPin className="w-4 h-4 mr-2" />Guide Espagne</Button></Link>
              <Link to="/destinations/espagne/barcelone"><Button variant="outline"><Camera className="w-4 h-4 mr-2" />Visiter Barcelone</Button></Link>
              <Link to="/blog/budget-voyage-espagne"><Button variant="outline"><DollarSign className="w-4 h-4 mr-2" />Budget Espagne</Button></Link>
              <Link to="/blog/quand-partir-espagne"><Button variant="outline"><Calendar className="w-4 h-4 mr-2" />Quand partir en Espagne</Button></Link>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ItineraireEspagne10Jours;
