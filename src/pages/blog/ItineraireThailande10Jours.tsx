import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Sun } from "lucide-react";
import thailandeImage from "@/assets/destinations/thailande.jpg";

const ItineraireThailande10Jours = () => {
  const faqs = [
    { question: "10 jours suffisent-ils pour visiter la Thaïlande ?", answer: "Oui, 10 jours permettent de couvrir Bangkok, le nord (Chiang Mai) et les îles du sud. Prévoyez 1-2 vols internes pour optimiser le temps." },
    { question: "Quel est le meilleur itinéraire pour 10 jours ?", answer: "L'itinéraire classique : Bangkok (2j) → Chiang Mai (3j) → Îles du sud (4j) → Bangkok (1j). Il combine culture, nature et plage." },
    { question: "Comment se déplacer entre les étapes ?", answer: "Vols internes AirAsia/Nok Air (20-50€), trains de nuit (15-30€) et bus VIP climatisés (10-20€). L'avion est recommandé pour Bangkok-Chiang Mai." },
    { question: "Quel budget pour 10 jours en Thaïlande ?", answer: "De 400€ (backpacker) à 1 200€ (confort) par personne hors vol international. La Thaïlande offre un excellent rapport qualité-prix." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Thaïlande 10 Jours : Bangkok, Chiang Mai et Îles"
        description="Notre itinéraire jour par jour pour découvrir la Thaïlande en 10 jours. De Bangkok aux temples de Chiang Mai et aux plages paradisiaques du sud."
        image={thailandeImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-01" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Thaïlande 10 Jours", url: "/blog/itineraire-thailande-10-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${thailandeImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Itinéraire Thaïlande 10 Jours : Bangkok, Chiang Mai et Îles
              </h1>
              <p className="text-xl text-white/90">Le parfait mélange temples, montagnes et plages en 10 jours</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 1 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 12 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            La Thaïlande est la destination d'entrée parfaite en Asie du Sud-Est. Avec ses <strong>temples dorés, sa cuisine légendaire et ses plages de rêve</strong>, le « Pays du Sourire » offre une diversité incroyable concentrable en 10 jours. Voici notre itinéraire optimisé combinant culture, aventure et farniente.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 1-2 : Bangkok, la Ville des Anges
          </h2>
          <p>
            Commencez par <Link to="/destinations/thailande/bangkok" className="text-ocean hover:underline font-medium">Bangkok</Link>, mégalopole vibrante où modernité et tradition coexistent. Le <strong>Grand Palais</strong> et le <strong>Wat Phra Kaew</strong> sont incontournables. Explorez les marchés flottants de Damnoen Saduak, le quartier chinois de Yaowarat pour la street food, et le quartier branché de Sukhumvit pour le shopping.
          </p>
          <h3 className="text-xl font-bold mt-6">Programme recommandé</h3>
          <ul>
            <li><strong>Jour 1</strong> : Grand Palais, Wat Pho (Bouddha couché), balade en long-tail boat sur les klongs</li>
            <li><strong>Jour 2</strong> : Wat Arun, marché de Chatuchak (le week-end), rooftop bar au coucher du soleil</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 3-5 : Chiang Mai, la Rose du Nord
          </h2>
          <p>
            Vol matinal vers <Link to="/destinations/thailande/chiang-mai" className="text-ocean hover:underline font-medium">Chiang Mai</Link> (1h15, dès 25€). Cette ville du nord est entourée de montagnes et de rizières. La <strong>vieille ville fortifiée</strong> abrite plus de 300 temples bouddhistes.
          </p>
          <h3 className="text-xl font-bold mt-6">Incontournables</h3>
          <ul>
            <li><strong>Doi Suthep</strong> – Temple perché offrant une vue panoramique sur la ville</li>
            <li><strong>Night Bazaar</strong> – Le marché nocturne le plus célèbre de Thaïlande</li>
            <li><strong>Cours de cuisine thaïe</strong> – Une expérience phare (20-35€, demi-journée)</li>
            <li><strong>Sanctuaire d'éléphants éthique</strong> – Choisissez un centre certifié no-riding</li>
            <li><strong>Trek dans les villages Hmong</strong> – Randonnées de 1-2 jours avec homestay</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Sun className="h-7 w-7 text-ocean" /> Jour 6-9 : Îles du Sud, Paradis Tropical
          </h2>
          <p>
            Vol de Chiang Mai vers Krabi ou Surat Thani (1h30, dès 35€), puis ferry vers vos <Link to="/destinations/thailande/iles-sud" className="text-ocean hover:underline font-medium">îles du sud</Link>. Vous avez le choix entre la côte Andaman (Koh Phi Phi, Koh Lanta, Railay) et le golfe de Thaïlande (Koh Samui, Koh Phangan, Koh Tao).
          </p>
          <h3 className="text-xl font-bold mt-6">Côte Andaman vs Golfe de Thaïlande</h3>
          <ul>
            <li><strong>Koh Phi Phi</strong> : paysages spectaculaires, ambiance festive, snorkeling</li>
            <li><strong>Koh Lanta</strong> : plus calme, plages longues, idéal pour les familles</li>
            <li><strong>Koh Tao</strong> : le spot de plongée le moins cher au monde (certification PADI dès 200€)</li>
            <li><strong>Koh Phangan</strong> : célèbre Full Moon Party, mais aussi des plages secrètes au nord</li>
          </ul>
          <p>
            <strong>Budget îles</strong> : 30-80€/jour selon votre standing. Consultez notre <Link to="/blog/budget-voyage-thailande" className="text-ocean hover:underline font-medium">guide budget Thaïlande</Link> pour plus de détails.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Jour 10 : Retour à Bangkok et Départ
          </h2>
          <p>
            Vol retour vers Bangkok pour votre connexion internationale. Si vous avez quelques heures, faites un dernier tour au <strong>Terminal 21</strong> (centre commercial thématique) ou savourez un dernier <strong>pad thaï</strong> de rue.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Conseils Pratiques
          </h2>
          <ul>
            <li><strong>Visa</strong> : exemption de visa pour les Français (30 jours max)</li>
            <li><strong>Monnaie</strong> : baht thaïlandais (1€ ≈ 38 THB). Distributeurs partout</li>
            <li><strong>Transport</strong> : Grab App pour les taxis en ville, vols internes avec AirAsia</li>
            <li><strong>Santé</strong> : aucun vaccin obligatoire, mais recommandé hépatite A et typhoïde</li>
            <li><strong>Vêtements temples</strong> : couvrir épaules et genoux (obligatoire)</li>
          </ul>
          <p>Pour en savoir plus sur les transports, lisez notre <Link to="/guides/transport-thailande" className="text-ocean hover:underline font-medium">guide transport Thaïlande</Link>.</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              La Thaïlande en 10 jours est un <strong>concentré de bonheur</strong> : temples dorés le matin, pad thaï le midi, plage turquoise l'après-midi. Cet itinéraire vous permet de goûter à la diversité exceptionnelle du pays. Pour un séjour plus long, ajoutez <strong>Pai</strong> (au nord) ou <strong>Kanchanaburi</strong> (ouest de Bangkok).
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage en Thaïlande", url: "/blog/budget-voyage-thailande" },
                { label: "Quand partir en Thaïlande", url: "/blog/quand-partir-thailande" },
                { label: "Guide complet Thaïlande", url: "/guides/guide-complet-thailande" },
                { label: "Street food en Thaïlande", url: "/guides/street-food-thailande" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/thailande" onClick={() => window.scrollTo(0, 0)}>Découvrir la Thaïlande</Link>
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

export default ItineraireThailande10Jours;
