import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee } from "lucide-react";
import cambodgeImage from "@/assets/destinations/cambodge.jpg";

const ItineraireCambodge10Jours = () => {
  const faqs = [
    { question: "10 jours suffisent-ils pour le Cambodge ?", answer: "Oui, 10 jours permettent de voir les incontournables : Siem Reap/Angkor (3-4j), Phnom Penh (2j), Kampot/Kep (2j) et Sihanoukville/îles (2-3j)." },
    { question: "Faut-il un visa pour le Cambodge ?", answer: "Oui, un e-visa (36$) est nécessaire pour les Français. Il s'obtient en ligne en 3 jours ouvrés. Vous pouvez aussi obtenir un visa on arrival (30$)." },
    { question: "Quel budget pour 10 jours au Cambodge ?", answer: "Le Cambodge est très abordable : 20-35€/jour en mode backpacker, 40-70€/jour en confort. Le dollar US est accepté partout." },
    { question: "Comment se déplacer au Cambodge ?", answer: "Bus climatisés entre les villes (5-15$), tuk-tuks en ville (1-5$), et vols internes Phnom Penh-Siem Reap (50-80$). Les routes se sont beaucoup améliorées." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Cambodge 10 Jours : Angkor, Phnom Penh et Plages"
        description="Notre itinéraire détaillé pour découvrir le Cambodge en 10 jours. Des temples d'Angkor aux plages de Sihanoukville, jour par jour avec budget et conseils."
        image={cambodgeImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-02-10" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Cambodge 10 Jours", url: "/blog/itineraire-cambodge-10-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${cambodgeImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Itinéraire Cambodge 10 Jours : Angkor, Phnom Penh et Plages</h1>
              <p className="text-xl text-white/90">Temples millénaires, histoire poignante et plages secrètes</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 10 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Cambodge est un pays qui touche au cœur. Entre les <strong>temples majestueux d'Angkor</strong>, l'histoire douloureuse de Phnom Penh et les <strong>plages préservées du sud</strong>, ce petit pays d'Asie du Sud-Est offre une richesse culturelle immense. Voici notre itinéraire optimisé pour 10 jours inoubliables.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Jour 1-4 : Siem Reap et les Temples d'Angkor
          </h2>
          <p>
            Commencez par <Link to="/destinations/cambodge/siem-reap" className="text-ocean hover:underline font-medium">Siem Reap</Link>, porte d'entrée du site archéologique le plus impressionnant d'Asie du Sud-Est. Le <strong>pass 3 jours</strong> (62$) est le meilleur rapport qualité-prix pour explorer le parc d'Angkor.
          </p>
          <h3 className="text-xl font-bold mt-6">Programme temple par jour</h3>
          <ul>
            <li><strong>Jour 1</strong> : Petit circuit – Angkor Wat (lever du soleil !), Bayon, Ta Prohm (le temple « Tomb Raider »)</li>
            <li><strong>Jour 2</strong> : Grand circuit – Preah Khan, Neak Poan, Ta Som, East Mebon, Pre Rup</li>
            <li><strong>Jour 3</strong> : Temples éloignés – Banteay Srei (la « citadelle des femmes »), Beng Mealea (temple englouti par la jungle)</li>
            <li><strong>Jour 4</strong> : Journée détente – Pub Street, marché de nuit, Tonle Sap (village flottant), cours de cuisine khmère</li>
          </ul>
          <p><strong>Conseil</strong> : louez un tuk-tuk à la journée (15-20$/jour) plutôt que des billets d'excursion organisée.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 5-6 : Phnom Penh, la Capitale
          </h2>
          <p>
            Bus de Siem Reap à <Link to="/destinations/cambodge/phnom-penh" className="text-ocean hover:underline font-medium">Phnom Penh</Link> (6h, 10-15$). La capitale cambodgienne est une ville en plein renouveau qui mérite au moins 2 jours.
          </p>
          <h3 className="text-xl font-bold mt-6">Incontournables</h3>
          <ul>
            <li><strong>Musée du génocide Tuol Sleng (S-21)</strong> – Émouvant et nécessaire pour comprendre l'histoire du pays</li>
            <li><strong>Killing Fields de Choeung Ek</strong> – Mémorial poignant (6$ entrée avec audioguide)</li>
            <li><strong>Palais Royal et Pagode d'Argent</strong> – Architecture khmère resplendissante</li>
            <li><strong>Marché central (Phsar Thmei)</strong> – Bâtiment Art Déco, artisanat local</li>
            <li><strong>Bord du Mékong</strong> – Promenade au coucher du soleil, bars et restaurants</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Jour 7-8 : Kampot et Kep
          </h2>
          <p>Bus vers Kampot (3h, 8$). Cette ville coloniale au bord de la rivière est le secret le mieux gardé du Cambodge.</p>
          <ul>
            <li><strong>Kampot</strong> : plantation de poivre (le meilleur du monde !), coucher de soleil sur la rivière, architecture coloniale</li>
            <li><strong>Kep</strong> (30 min de Kampot) : marché aux crabes, plage tranquille, parc national pour une randonnée facile</li>
            <li><strong>Grotte de Phnom Chhngok</strong> – Temple caché dans une grotte naturelle</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-ocean" /> Jour 9-10 : Sihanoukville et les Îles
          </h2>
          <p>
            Rejoignez <Link to="/destinations/cambodge/sihanoukville" className="text-ocean hover:underline font-medium">Sihanoukville</Link> (2h de Kampot) pour embarquer vers les îles. <strong>Koh Rong Samloem</strong> est notre coup de cœur : plages désertes, eaux cristallines et bioluminescence la nuit.
          </p>
          <ul>
            <li><strong>Koh Rong Samloem</strong> : paradis préservé, idéal pour le snorkeling et la déconnexion</li>
            <li><strong>Koh Rong</strong> : plus développée, bars de plage et ambiance festive</li>
            <li><strong>Ferry</strong> : 12-20$ aller-retour, 45 min de traversée</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Conseils Pratiques
          </h2>
          <ul>
            <li><strong>Monnaie</strong> : dollar US partout + riels khmers pour la monnaie (1$ = 4 000 riels)</li>
            <li><strong>Climat</strong> : saison sèche nov-avr (idéale), saison pluies mai-oct (temples moins bondés)</li>
            <li><strong>Carte SIM</strong> : Smart ou Cellcard, 2-5$ pour 10-30 Go</li>
            <li><strong>Sécurité</strong> : pays très sûr, attention aux vols à la tire en moto dans les villes</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Cambodge en 10 jours est une <strong>expérience profondément enrichissante</strong>. Des merveilles architecturales d'Angkor à la douceur de vivre de Kampot, en passant par les plages vierges des îles, ce pays vous marquera durablement. Les Cambodgiens sont parmi les peuples les plus accueillants d'Asie.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage au Cambodge", url: "/blog/budget-voyage-cambodge" },
                { label: "Quand partir au Cambodge", url: "/blog/quand-partir-cambodge" },
                { label: "Guide complet Cambodge", url: "/guides/guide-complet-cambodge" },
                { label: "Transport au Cambodge", url: "/guides/transport-cambodge" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées dans cet article
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇰🇭 Cambodge", url: "/destinations/cambodge" },
                { label: "Siem Reap", url: "/destinations/cambodge/siem-reap" },
                { label: "Phnom Penh", url: "/destinations/cambodge/phnom-penh" },
                { label: "Sihanoukville", url: "/destinations/cambodge/sihanoukville" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/cambodge" onClick={() => window.scrollTo(0, 0)}>Découvrir le Cambodge</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ItineraireCambodge10Jours;
