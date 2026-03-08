import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee } from "lucide-react";
import laosImage from "@/assets/destinations/laos.jpg";

const ItineraireLaos10Jours = () => {
  const faqs = [
    { question: "10 jours suffisent-ils pour le Laos ?", answer: "Oui, 10 jours couvrent les incontournables : Luang Prabang (3-4j), Vang Vieng (2j), Vientiane (2j) et une excursion aux cascades ou grottes." },
    { question: "Le Laos est-il facile à visiter ?", answer: "Le Laos est un pays calme et accueillant mais les infrastructures sont basiques. Les routes peuvent être longues et sinueuses. Prévoyez de la flexibilité." },
    { question: "Faut-il un visa pour le Laos ?", answer: "Oui, visa on arrival disponible pour les Français (30-40$, 30 jours). Prévoyez une photo d'identité et des dollars en espèces." },
    { question: "Quel budget pour le Laos ?", answer: "Le Laos est abordable : 20-40€/jour en confort. Luang Prabang est un peu plus cher que le reste du pays." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Itinéraire Laos 10 Jours : Luang Prabang, Vang Vieng, Vientiane"
        description="Itinéraire complet pour découvrir le Laos en 10 jours. De Luang Prabang à Vientiane en passant par Vang Vieng, jour par jour avec conseils et budget."
        image={laosImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-02-12" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Itinéraire Laos 10 Jours", url: "/blog/itineraire-laos-10-jours" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${laosImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Itinéraire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Itinéraire Laos 10 Jours : Luang Prabang, Vang Vieng, Vientiane</h1>
              <p className="text-xl text-white/90">L'Asie authentique loin du tourisme de masse</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 12 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Laos est le <strong>joyau caché de l'Asie du Sud-Est</strong>. Loin du tourisme de masse, ce pays enclavé entre la Thaïlande et le Vietnam offre une expérience authentique : temples dorés au bord du Mékong, cascades turquoise dans la jungle et une douceur de vivre incomparable. Voici notre itinéraire pour 10 jours.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Jour 1-4 : Luang Prabang, Perle du Mékong</h2>
          <p><Link to="/destinations/laos/luang-prabang" className="text-ocean hover:underline font-medium">Luang Prabang</Link>, classée au patrimoine mondial de l'UNESCO, est l'une des plus belles villes d'Asie. Nichée au confluent du Mékong et de la Nam Khan, elle séduit par ses temples dorés et sa tranquillité.</p>
          <h3 className="text-xl font-bold mt-6">Incontournables</h3>
          <ul>
            <li><strong>Cérémonie de l'aumône</strong> (5h30) – Des centaines de moines en file silencieuse. Observez respectueusement</li>
            <li><strong>Cascades de Kuang Si</strong> – Piscines naturelles turquoise dans la jungle (20 000 kip). Le highlight du Laos</li>
            <li><strong>Mont Phousi</strong> – Coucher de soleil panoramique sur la ville et le Mékong</li>
            <li><strong>Marché nocturne</strong> – Artisanat laotien, textiles hmong et street food</li>
            <li><strong>Grottes de Pak Ou</strong> – Excursion en bateau sur le Mékong (demi-journée)</li>
            <li><strong>Cours de cuisine laotienne</strong> – Laap, sticky rice et Or Lam (15-25€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Jour 5-6 : Vang Vieng, Nature et Aventure</h2>
          <p>Minivan vers <Link to="/destinations/laos/vang-vieng" className="text-ocean hover:underline font-medium">Vang Vieng</Link> (4-5h sur route sinueuse mais panoramique). Autrefois connue pour sa fête, Vang Vieng s'est transformée en destination nature.</p>
          <ul>
            <li><strong>Kayak sur la Nam Song</strong> – Paysages karstiques spectaculaires (10-15€)</li>
            <li><strong>Blue Lagoons</strong> – Baignade dans des lagons turquoise (1-2€ l'entrée)</li>
            <li><strong>Grottes Tham Chang</strong> – Exploration avec vue panoramique</li>
            <li><strong>Montgolfière</strong> – Vol au lever du soleil sur les formations karstiques (80-100€)</li>
            <li><strong>Tubing</strong> – Descente en bouée sur la rivière (version calme désormais)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Coffee className="h-7 w-7 text-ocean" /> Jour 7-8 : Vientiane, la Capitale Tranquille</h2>
          <p>Bus vers <Link to="/destinations/laos/vientiane" className="text-ocean hover:underline font-medium">Vientiane</Link> (3-4h). La capitale la plus décontractée d'Asie : un mélange charmant d'architecture coloniale française et de temples bouddhistes.</p>
          <ul>
            <li><strong>Pha That Luang</strong> – Le monument national doré, symbole du Laos</li>
            <li><strong>Patuxai</strong> – L'arc de triomphe laotien, montez pour la vue</li>
            <li><strong>Wat Sisaket</strong> – Le plus ancien temple de Vientiane (1818), 6 840 statues de Bouddha</li>
            <li><strong>Buddha Park (Xieng Khuan)</strong> – Parc de sculptures surréalistes au bord du Mékong</li>
            <li><strong>Coucher de soleil sur le Mékong</strong> – Promenade le long du fleuve avec vue sur la Thaïlande</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Jour 9-10 : Options Flexibles</h2>
          <p>Selon vos envies et votre vol de retour :</p>
          <ul>
            <li><strong>Option A : Plateau des Bolovens</strong> (sud) – Cascades spectaculaires, plantations de café, villages ethniques (2 jours minimum)</li>
            <li><strong>Option B : 4000 Îles (Si Phan Don)</strong> – Archipel du Mékong, dauphins d'Irrawaddy, rythme ultra-lent</li>
            <li><strong>Option C : Retour à Luang Prabang</strong> – Profitez d'une journée de plus dans cette ville magique avant le vol</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Compass className="h-7 w-7 text-ocean" /> Conseils Pratiques</h2>
          <ul>
            <li><strong>Meilleure période</strong> : novembre à mars (saison sèche et fraîche). Voir <Link to="/blog/quand-partir-laos" className="text-ocean hover:underline">quand partir au Laos</Link></li>
            <li><strong>Budget</strong> : 20-40€/jour. Voir <Link to="/blog/budget-voyage-laos" className="text-ocean hover:underline">budget voyage Laos</Link></li>
            <li><strong>Monnaie</strong> : kip laotien (1€ ≈ 23 000 LAK). Le baht et le dollar sont acceptés</li>
            <li><strong>Transport</strong> : minivans entre villes, tuk-tuks en ville. Voir <Link to="/guides/transport-laos" className="text-ocean hover:underline">guide transport</Link></li>
            <li><strong>Carte SIM</strong> : Unitel, 2-5€ pour 5-15 Go</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Laos est un <strong>antidote au stress du quotidien</strong>. Ici, le temps ralentit, la nature reprend ses droits et les sourires sont sincères. En 10 jours, vous découvrirez un pays qui a gardé son âme, loin du tourisme de masse. C'est peut-être le dernier secret de l'Asie du Sud-Est.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Budget voyage au Laos", url: "/blog/budget-voyage-laos" },
                { label: "Quand partir au Laos", url: "/blog/quand-partir-laos" },
                { label: "Guide complet Laos", url: "/guides/guide-complet-laos" },
                { label: "Transport au Laos", url: "/guides/transport-laos" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/laos" onClick={() => window.scrollTo(0, 0)}>Découvrir le Laos</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ItineraireLaos10Jours;
