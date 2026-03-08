import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Sun, Coffee } from "lucide-react";
import indonesieImage from "@/assets/destinations/indonesie.jpg";

const ItineraireIndonesie10Jours = () => {
  const faqs = [
    { question: "Peut-on visiter Bali et Java en 10 jours ?", answer: "Oui ! 5-6 jours à Bali et 3-4 jours à Java (Yogyakarta, Borobudur, Bromo) est un excellent compromis. Un vol interne Bali-Yogyakarta prend 1h15." },
    { question: "Faut-il un visa pour l'Indonésie ?", answer: "Les Français bénéficient d'un visa on arrival (VOA) de 30 jours pour 500 000 IDR (~30€), extensible une fois de 30 jours supplémentaires." },
    { question: "Est-ce facile de se déplacer en Indonésie ?", answer: "Entre les îles, les vols internes sont fréquents et abordables (30-80€). Sur place, les scooters et les Grab facilitent les déplacements." },
    { question: "Quel budget pour 10 jours en Indonésie ?", answer: "Comptez 30-50€/jour en confort à Bali et Java. Les Gili Islands et Nusa Penida sont légèrement plus chères. Total : 300-500€ hors vol international." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Indonésie 10 Jours : Bali, Java et Îles Gili"
        description="Itinéraire détaillé pour découvrir l'Indonésie en 10 jours. De Bali aux temples de Java en passant par les îles Gili, programme jour par jour avec conseils et budget."
        image={indonesieImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-02-28" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Indonésie 10 Jours", url: "/blog/itineraire-indonesie-10-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${indonesieImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Itinéraire Indonésie 10 Jours : Bali, Java et Îles Gili</h1>
              <p className="text-xl text-white/90">Temples, volcans, rizières et plages paradisiaques</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 28 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 12 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            L'Indonésie est un archipel de <strong>17 000 îles</strong> offrant une diversité époustouflante. En 10 jours, vous pouvez découvrir les joyaux de <Link to="/destinations/indonesie/bali" className="text-ocean hover:underline font-medium">Bali</Link> et <Link to="/destinations/indonesie/java" className="text-ocean hover:underline font-medium">Java</Link>, deux îles complémentaires mêlant spiritualité, nature sauvage et plages paradisiaques.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Jour 1-2 : Ubud, le Cœur Culturel de Bali</h2>
          <p>Arrivée à Denpasar et transfert vers <strong>Ubud</strong> (1h30). Ce village niché au cœur des rizières en terrasses est le centre culturel et spirituel de Bali.</p>
          <ul>
            <li><strong>Rizières de Tegallalang</strong> – Les plus photographiées de Bali, arrivez tôt le matin</li>
            <li><strong>Monkey Forest</strong> – Sanctuaire peuplé de macaques dans un décor de temple</li>
            <li><strong>Tirta Empul</strong> – Temple de purification, expérience spirituelle unique</li>
            <li><strong>Marché d'art d'Ubud</strong> – Artisanat balinais (négociez !)</li>
            <li><strong>Cours de cuisine balinaise</strong> – Apprenez le nasi goreng et le sate lilit (15-30€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Jour 3 : Temples et Volcans</h2>
          <p>Journée excursion depuis Ubud :</p>
          <ul>
            <li><strong>Lever de soleil au Mont Batur</strong> – Trek nocturne (départ 2h du matin), vue spectaculaire sur le cratère (25-40€ avec guide)</li>
            <li><strong>Sources chaudes de Toya Devasya</strong> – Relaxation post-trek face au lac</li>
            <li><strong>Temple de Besakih</strong> – Le plus grand et le plus sacré de Bali (« Temple Mère »)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Sun className="h-7 w-7 text-ocean" /> Jour 4-5 : Nusa Penida ou Îles Gili</h2>
          <p>Deux options au choix :</p>
          <h3 className="text-xl font-bold mt-6">Option A : Nusa Penida (2 jours)</h3>
          <p>Fast boat depuis Sanur (30 min, 15-20€ A/R). Paysages spectaculaires : <strong>Kelingking Beach</strong> (la carte postale de Bali), <strong>Angel's Billabong</strong> et <strong>Broken Beach</strong>. Louez un scooter (5€/jour) ou prenez un chauffeur (25€/jour).</p>
          <h3 className="text-xl font-bold mt-6">Option B : Îles Gili (2 jours)</h3>
          <p>Fast boat depuis Padang Bai (2h, 25-35€). <strong>Gili Trawangan</strong> pour l'ambiance festive, <strong>Gili Air</strong> pour la tranquillité, <strong>Gili Meno</strong> pour Robinson Crusoé. Snorkeling avec les tortues garanti !</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Coffee className="h-7 w-7 text-ocean" /> Jour 6 : Sud de Bali – Plages et Temples</h2>
          <ul>
            <li><strong>Temple d'Uluwatu</strong> – Perché sur une falaise, spectacle de danse Kecak au coucher du soleil</li>
            <li><strong>Plages de Seminyak/Canggu</strong> – Surf, beach clubs et restaurants tendance</li>
            <li><strong>Tanah Lot</strong> – Temple iconique sur un rocher dans la mer (coucher de soleil)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Jour 7-8 : Java – Yogyakarta et Borobudur</h2>
          <p>Vol Bali → Yogyakarta (1h15, 30-50€). Java offre une expérience culturelle profonde.</p>
          <ul>
            <li><strong>Borobudur</strong> – Le plus grand temple bouddhiste du monde, lever du soleil magique (25$ entrée spéciale)</li>
            <li><strong>Prambanan</strong> – Complexe de temples hindous, coucher du soleil spectaculaire (25$)</li>
            <li><strong>Kraton (palais du Sultan)</strong> – Le sultan règne encore symboliquement</li>
            <li><strong>Malioboro Street</strong> – Shopping et street food nocturne</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Jour 9 : Mont Bromo</h2>
          <p>Train ou voiture vers Probolinggo (6h), puis jeep vers le <strong>Mont Bromo</strong>. Le lever du soleil sur la caldeira est l'un des plus beaux spectacles naturels du monde. Trek facile jusqu'au cratère fumant. Retour à Surabaya pour le vol retour.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Jour 10 : Retour</h2>
          <p>Vol Surabaya → Bali → International ou vol direct depuis Surabaya selon votre compagnie.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Conseils Pratiques</h2>
          <ul>
            <li><strong>Meilleure période</strong> : avril-octobre (saison sèche). Consultez <Link to="/blog/quand-partir-indonesie" className="text-ocean hover:underline">quand partir en Indonésie</Link></li>
            <li><strong>Budget</strong> : 30-50€/jour en confort. Voir notre <Link to="/blog/budget-voyage-indonesie" className="text-ocean hover:underline">guide budget</Link></li>
            <li><strong>Transport</strong> : Grab (moto/voiture), vols internes Lion Air/AirAsia</li>
            <li><strong>Temples</strong> : sarong obligatoire (souvent prêté à l'entrée)</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              L'Indonésie en 10 jours est un <strong>voyage entre ciel et terre</strong> : temples millénaires perdus dans la brume, volcans fumants au lever du soleil, rizières émeraude et fonds marins féeriques. Bali et Java forment un duo parfait qui vous donnera envie de revenir explorer Komodo, Sulawesi ou Raja Ampat.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage en Indonésie", url: "/blog/budget-voyage-indonesie" },
                { label: "Quand partir en Indonésie", url: "/blog/quand-partir-indonesie" },
                { label: "Guide complet Indonésie", url: "/guides/guide-complet-indonesie" },
                { label: "Transport en Indonésie", url: "/guides/transport-indonesie" },
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
                { label: "🇮🇩 Indonésie", url: "/destinations/indonesie" },
                { label: "Bali", url: "/destinations/indonesie/bali" },
                { label: "Java", url: "/destinations/indonesie/java" },
                { label: "Bornéo", url: "/destinations/indonesie/borneo" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/indonesie" onClick={() => window.scrollTo(0, 0)}>Découvrir l'Indonésie</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ItineraireIndonesie10Jours;
