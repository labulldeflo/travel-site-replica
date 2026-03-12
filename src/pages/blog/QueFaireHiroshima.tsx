import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock, ContextualCTA, MoneyPageLinks, ContextualEmailCapture } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Star, Utensils } from "lucide-react";
import hiroshimaImage from "@/assets/cities/hiroshima.jpg";

const QueFaireHiroshima = () => {
  const faqs = [
    { question: "Combien de temps pour visiter Hiroshima ?", answer: "1 à 2 jours suffisent. Une journée pour le Mémorial de la Paix et une journée pour l'île de Miyajima. C'est faisable en excursion depuis Osaka avec le JR Pass." },
    { question: "Hiroshima est-elle une ville triste à visiter ?", answer: "Non. Le message d'Hiroshima est celui de la paix et de la résilience. La ville est moderne, dynamique et accueillante. Le Mémorial est émouvant mais porteur d'espoir." },
    { question: "Comment aller à Hiroshima ?", answer: "En Shinkansen depuis Tokyo (4h), Kyoto (1h40) ou Osaka (1h30). Le JR Pass couvre tous ces trajets." },
    { question: "Faut-il visiter Miyajima ?", answer: "Absolument. L'île de Miyajima avec son torii flottant est l'une des trois plus belles vues du Japon. Le ferry est couvert par le JR Pass (10 min depuis Miyajimaguchi)." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Hiroshima : Mémorial, Miyajima et Plus"
        description="Guide pratique de Hiroshima et Miyajima. Mémorial de la Paix, torii flottant, gastronomie locale : activités, prix et conseils pour visiter Hiroshima au Japon."
        image={hiroshimaImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-18" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Hiroshima", url: "/blog/que-faire-hiroshima" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${hiroshimaImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Que Faire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Hiroshima : Mémorial, Miyajima et Plus
              </h1>
              <p className="text-xl text-white/90">Mémoire, paix et beauté : guide de la ville qui renaît de ses cendres</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 18 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Hiroshima est un <strong>symbole universel de paix et de résilience</strong>. Reconstruite après la tragédie de 1945, cette ville moderne et verdoyante offre un contraste saisissant entre mémoire et vitalité. À quelques minutes en ferry, l'<strong>île de Miyajima</strong> et son torii flottant constituent l'une des vues les plus iconiques du Japon. Un arrêt indispensable dans tout itinéraire japonais.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Le Mémorial de la Paix
          </h2>

          <h3 className="text-xl font-bold mt-6">1. Parc du Mémorial de la Paix ⭐</h3>
          <p>Ce vaste parc au cœur de la ville abrite plusieurs monuments essentiels. Le <strong>Dôme de Genbaku</strong> (A-Bomb Dome), seul bâtiment resté debout après l'explosion, est classé UNESCO. C'est un lieu de recueillement profond.</p>
          <ul><li><strong>Prix</strong> : Gratuit</li><li><strong>Temps</strong> : 1-2h pour le parc entier</li></ul>

          <h3 className="text-xl font-bold mt-6">2. Musée du Mémorial de la Paix</h3>
          <p>Le musée présente l'histoire de la bombe, ses conséquences humaines et le message de paix d'Hiroshima. <strong>Intensément émouvant</strong> mais essentiel. Les témoignages de survivants (hibakusha) sont bouleversants.</p>
          <ul>
            <li><strong>Prix</strong> : 200¥ (~1,30€)</li>
            <li><strong>Horaires</strong> : 8h30-18h (19h en été)</li>
            <li><strong>Astuce</strong> : Prévoyez 1h30-2h, audio-guide disponible (400¥)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">3. Cénotaphe et Flamme de la Paix</h3>
          <p>Le cénotaphe en arc encadre parfaitement le Dôme de Genbaku au loin. La <strong>Flamme de la Paix</strong> brûle depuis 1964 et ne s'éteindra que lorsque toutes les armes nucléaires auront été éliminées.</p>

          <h3 className="text-xl font-bold mt-6">4. Monument des enfants pour la Paix</h3>
          <p>Dédié à <strong>Sadako Sasaki</strong>, une fillette atteinte de leucémie qui pliait des grues en papier (origami). Des milliers de guirlandes de grues colorées entourent le monument – une tradition que les visiteurs perpétuent.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> L'Île de Miyajima ⭐
          </h2>

          <h3 className="text-xl font-bold mt-6">5. Torii Flottant d'Itsukushima</h3>
          <p>Le <strong>grand torii vermillon</strong> planté dans la mer est l'image emblématique du Japon. À marée haute, il semble flotter sur l'eau ; à marée basse, vous pouvez marcher jusqu'à lui. Vérifiez les <strong>horaires des marées</strong> avant votre visite.</p>
          <ul>
            <li><strong>Ferry</strong> : JR Ferry depuis Miyajimaguchi (couvert par le JR Pass, 10 min)</li>
            <li><strong>Train</strong> : Miyajimaguchi à 30 min d'Hiroshima en JR</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">6. Sanctuaire d'Itsukushima</h3>
          <p>Ce sanctuaire <strong>classé UNESCO</strong>, construit sur pilotis, est l'un des plus beaux du Japon. À marée haute, il semble flotter sur l'eau avec le torii.</p>
          <ul><li><strong>Prix</strong> : 300¥</li></ul>

          <h3 className="text-xl font-bold mt-6">7. Mont Misen</h3>
          <p>Point culminant de Miyajima (535m), accessible en <strong>téléphérique</strong> (1 800¥ A/R) puis 20 min de marche. Vue panoramique spectaculaire sur la mer intérieure de Seto et les îles environnantes.</p>

          <h3 className="text-xl font-bold mt-6">8. Cerfs de Miyajima</h3>
          <p>Comme à Nara, des <strong>cerfs sika</strong> se promènent librement sur l'île. Ils sont moins nombreux mais tout aussi curieux. Attention : ne les nourrissez pas (contrairement à Nara, ce n'est pas encouragé ici).</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Hiroshima Ville
          </h2>

          <h3 className="text-xl font-bold mt-6">9. Château d'Hiroshima (Carp Castle)</h3>
          <p>Reconstruit en 1958, ce <strong>château entouré de douves</strong> abrite un musée sur l'histoire de la ville avant la guerre. Belle vue depuis le dernier étage.</p>
          <ul><li><strong>Prix</strong> : 370¥</li></ul>

          <h3 className="text-xl font-bold mt-6">10. Jardin Shukkeien</h3>
          <p>Jardin japonais de 1620 avec <strong>étang, ponts et pavillons de thé</strong>. Un havre de paix au cœur de la ville, magnifique en toute saison.</p>
          <ul><li><strong>Prix</strong> : 260¥</li></ul>

          <h3 className="text-xl font-bold mt-6">11. Orizuru Tower</h3>
          <p>Tour d'observation moderne avec vue sur le Dôme de Genbaku et la ville. Vous pouvez y <strong>plier une grue en papier</strong> et la laisser tomber dans l'atrium depuis le 12e étage.</p>
          <ul><li><strong>Prix</strong> : 1 700¥</li></ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie d'Hiroshima
          </h2>

          <h3 className="text-xl font-bold mt-6">12. Okonomiyaki d'Hiroshima ⭐</h3>
          <p>Différent de celui d'Osaka ! L'okonomiyaki d'Hiroshima est <strong>en couches superposées</strong> (crêpe, chou, nouilles, œuf, sauce) au lieu d'être mélangé. Rendez-vous à <strong>Okonomimura</strong>, un bâtiment de 4 étages avec 25 restaurants spécialisés.</p>
          <ul><li><strong>Prix</strong> : 800-1 200¥</li></ul>

          <h3 className="text-xl font-bold mt-6">13. Huîtres de Miyajima</h3>
          <p>La mer intérieure de Seto produit <strong>les meilleures huîtres du Japon</strong>. Grillées, frites ou crues, elles sont disponibles dans les restaurants de Miyajima et sur les stands du bord de mer.</p>

          <h3 className="text-xl font-bold mt-6">14. Momiji Manju</h3>
          <p>Le souvenir comestible de Miyajima : petit gâteau en forme de <strong>feuille d'érable</strong> fourré à la pâte de haricots rouges, matcha, chocolat ou crème. Frais et grillé, c'est un délice.</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Hiroshima est une ville qui <strong>transforme les visiteurs</strong>. Le Mémorial de la Paix enseigne la fragilité de l'humanité, tandis que le torii flottant de Miyajima rappelle sa beauté. C'est un lieu qui mérite bien plus qu'une simple case cochée sur un itinéraire.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Hiroshima" showVols showHotel showActivites />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" },
                { label: "Itinéraire Japon 10 jours", url: "/blog/itineraire-japon-10-jours" },
                { label: "Que faire à Osaka", url: "/blog/que-faire-osaka" },
                { label: "JR Pass : guide complet", url: "/blog/jr-pass-japon" },
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
              {[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link>
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

export default QueFaireHiroshima;
