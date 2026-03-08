import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Star, Utensils, Landmark } from "lucide-react";
import romeImage from "@/assets/cities/rome.jpg";

const QueFaireRome = () => {
  const faqs = [
    { question: "Combien de jours faut-il pour visiter Rome ?", answer: "3 à 4 jours permettent de voir les incontournables. Avec 5-6 jours, vous pourrez explorer les quartiers authentiques et faire des excursions (Pompéi, Tivoli)." },
    { question: "Quelle est la meilleure période pour visiter Rome ?", answer: "Le printemps (avril-mai) et l'automne (septembre-octobre) offrent des températures agréables et moins de foule. L'été est très chaud (35°C+) et bondé." },
    { question: "Rome est-elle chère ?", answer: "Les entrées sont coûteuses (Colisée 16€, Vatican 17€) mais la street food est abordable (pizza al taglio 3-5€, supplì 1-2€). Comptez 60-90€/jour en mode confortable." },
    { question: "Faut-il réserver les billets à l'avance ?", answer: "Oui, absolument pour le Colisée, le Vatican et la Galerie Borghèse. Réservez 2-4 semaines à l'avance pour éviter les files d'attente de 2-3 heures." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Rome : 20 Activités et Visites Incontournables"
        description="Guide complet des meilleures activités à Rome : Colisée, Vatican, Trastevere, gastronomie italienne. Itinéraire, conseils pratiques et bons plans."
        image={romeImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-02" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Rome", url: "/blog/que-faire-rome" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${romeImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Ville</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Rome : 20 Activités et Visites Incontournables
              </h1>
              <p className="text-xl text-white/90">La Ville Éternelle comme vous ne l'avez jamais vue</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 2 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 13 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Rome n'est pas simplement une ville, c'est un <strong>musée à ciel ouvert</strong> où chaque pierre raconte 3 000 ans d'histoire. Capital de l'Empire romain, berceau de la Renaissance et siège du Vatican, <Link to="/destinations/italie/rome" className="text-ocean hover:underline font-medium">Rome</Link> offre une densité de merveilles inégalée en Europe. Des ruines antiques du Forum aux trattorias animées du Trastevere, voici les <strong>20 expériences essentielles</strong> pour découvrir la Ville Éternelle.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Les Monuments Incontournables
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">1. Le Colisée</h3>
          <p>
            L'<strong>amphithéâtre Flavien</strong>, construit en 72 après J.-C., pouvait accueillir 50 000 spectateurs pour les combats de gladiateurs. Réservez le billet « Underground » pour accéder aux souterrains où attendaient les bêtes. Le coucher de soleil depuis l'étage supérieur est magique. <strong>Astuce :</strong> réservez le billet combiné Colisée + Forum + Palatin (16€), valable 2 jours.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">2. Forum Romain et Mont Palatin</h3>
          <p>
            Le cœur politique de l'Empire romain s'étend sous vos pieds. Marchez sur la <strong>Via Sacra</strong>, admirez l'Arc de Titus et montez au Palatin pour une vue panoramique sur le Forum et le Cirque Maxime. Prévoyez 2 heures minimum et apportez de l'eau en été.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">3. Le Panthéon</h3>
          <p>
            Ce temple de 2 000 ans possède la plus grande <strong>coupole en béton non armé</strong> du monde (43 mètres de diamètre). L'oculus ouvert au sommet crée un rayon de lumière mystique. L'entrée est gratuite — arrivez tôt pour éviter la foule. Le tombeau de Raphaël se trouve à l'intérieur.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">4. Fontaine de Trevi</h3>
          <p>
            La plus célèbre fontaine du monde, chef-d'œuvre baroque de Nicola Salvi (1762). Jetez une pièce de la main droite par-dessus l'épaule gauche pour garantir votre retour à Rome. <strong>Conseil :</strong> venez à l'aube (6h-7h) ou tard le soir pour l'admirer sans la foule.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">5. Place d'Espagne et escalier de la Trinité-des-Monts</h3>
          <p>
            Les 135 marches de l'<strong>escalier monumental</strong> relient la Piazza di Spagna à l'église Trinità dei Monti. Au pied, la fontaine Barcaccia de Bernini. Le quartier environnant est le triangle de la mode romaine avec Via Condotti et ses boutiques de luxe.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Landmark className="h-7 w-7 text-ocean" /> Le Vatican
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">6. Musées du Vatican et Chapelle Sixtine</h3>
          <p>
            Les musées abritent l'une des plus importantes collections d'art au monde. Le clou : la <strong>Chapelle Sixtine</strong> et le plafond de Michel-Ange (1508-1512). Réservez en ligne (17€) et visitez le vendredi soir (en saison) pour une expérience plus intime. Prévoyez 3-4 heures minimum.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">7. Basilique Saint-Pierre</h3>
          <p>
            La plus grande église du monde (218 m de long) abrite la <strong>Pietà de Michel-Ange</strong> et le baldaquin du Bernin. Montez au dôme (551 marches ou ascenseur + 320 marches) pour une vue spectaculaire sur Rome. Entrée gratuite — la file est rapide le matin.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie Romaine
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">8. Pizza al taglio dans Testaccio</h3>
          <p>
            La <strong>pizza à la coupe</strong> romaine est croustillante, légère et vendue au poids. Le quartier populaire de Testaccio abrite les meilleures adresses. Essayez les classiques : margherita, patate e mozzarella, ou supplì (boulettes de riz frites). Budget : 3-6€ pour un repas complet.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">9. Pasta alla carbonara dans le Trastevere</h3>
          <p>
            Les quatre plats emblématiques de Rome sont la <strong>carbonara</strong>, la <strong>cacio e pepe</strong>, l'<strong>amatriciana</strong> et la <strong>gricia</strong>. Le Trastevere, avec ses ruelles pavées et ses trattorias éclairées aux bougies, est l'endroit idéal pour les déguster. Comptez 10-15€ pour un plat de pâtes.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">10. Gelato artisanal</h3>
          <p>
            Rome est la capitale mondiale de la glace artisanale. Fuyez les montagnes de couleurs fluo et cherchez les <strong>gelaterias artisanales</strong> : Fatamorgana, Giolitti (depuis 1890), Come il Latte. Un cornet coûte 2,50-4€ selon la taille.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Quartiers et Atmosphères
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">11. Trastevere</h3>
          <p>
            Le quartier le plus <strong>bohème et authentique</strong> de Rome. Ses ruelles pavées, façades ocre et lierre grimpant en font un décor de film. Le soir, les terrasses s'animent et les musiciens de rue ajoutent à la magie. C'est ici que les Romains viennent dîner.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">12. Quartier juif (Ghetto)</h3>
          <p>
            Le plus ancien ghetto d'Europe (1555) est aujourd'hui un quartier vibrant avec des restaurants servant la cuisine <strong>judéo-romaine</strong> : artichauts à la juive, filetti di baccalà. Le Portico d'Ottavia et les ruines du Teatro di Marcello sont magnifiques.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">13-15. Autres quartiers à explorer</h3>
          <ul>
            <li><strong>Monti</strong> – Le quartier hipster avec boutiques vintage, bars à cocktails et la Via dei Serpenti</li>
            <li><strong>EUR</strong> – L'architecture rationaliste fasciste, le Colisée Carré et le musée de la Civilisation romaine</li>
            <li><strong>Aventino</strong> – Le jardin des orangers avec vue sur le Tibre et le trou de serrure des Chevaliers de Malte (vue parfaite sur Saint-Pierre)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Expériences et Excursions
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">16. Villa Borghèse et sa galerie</h3>
          <p>
            Le plus beau parc de Rome abrite la <strong>Galerie Borghèse</strong> avec des chefs-d'œuvre du Bernin, Caravage et Raphaël. Réservation obligatoire (13€), créneaux de 2 heures. Louez un vélo ou une barque dans le parc après la visite.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">17-20. Autres expériences</h3>
          <ul>
            <li><strong>Via Appia Antica</strong> – Promenade à vélo sur la plus ancienne route romaine (312 av. J.-C.), bordée de catacombes et de ruines</li>
            <li><strong>Thermes de Caracalla</strong> – Les ruines monumentales de ces bains publics du IIIe siècle donnent une idée de la grandeur romaine</li>
            <li><strong>Excursion à Pompéi</strong> – Accessible en train (2h), la cité figée par le Vésuve est un voyage dans le temps extraordinaire</li>
            <li><strong>Excursion à Tivoli</strong> – La Villa d'Este et ses 500 fontaines, et la Villa Adriana, résidence de l'empereur Hadrien</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Conseils Pratiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">Budget quotidien</h3>
          <p>
            Comptez <strong>60-90€/jour</strong> : hébergement (40-70€), repas (15-25€/jour en mangeant local), transports (7€ pour un pass journalier) et une entrée musée. Rome est chère pour les sites mais abordable pour la nourriture de rue.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">Itinéraire suggéré : 4 jours à Rome</h3>
          <ul>
            <li><strong>Jour 1</strong> – Colisée, Forum, Palatin, quartier Monti le soir</li>
            <li><strong>Jour 2</strong> – Vatican (musées + Chapelle Sixtine + Basilique), Castel Sant'Angelo</li>
            <li><strong>Jour 3</strong> – Panthéon, Fontaine de Trevi, Place d'Espagne, Villa Borghèse, Trastevere le soir</li>
            <li><strong>Jour 4</strong> – Quartier juif, Testaccio, Via Appia Antica à vélo, aperitivo au coucher du soleil</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Rome est une ville qui se <strong>vit autant qu'elle se visite</strong>. Prenez le temps de vous asseoir en terrasse, de vous perdre dans les ruelles, de goûter un espresso au comptoir comme les Romains. La dolce vita n'est pas un cliché — c'est un art de vivre que cette ville a perfectionné depuis des millénaires. Pour explorer le reste de l'<Link to="/destinations/italie" className="text-ocean hover:underline font-medium">Italie</Link>, ne manquez pas <Link to="/destinations/italie/toscane" className="text-ocean hover:underline font-medium">la Toscane</Link> et <Link to="/destinations/italie/venise" className="text-ocean hover:underline font-medium">Venise</Link>.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet de l'Italie", url: "/destinations/italie" },
                { label: "La Toscane : art et paysages", url: "/destinations/italie/toscane" },
                { label: "Venise : canaux et palais", url: "/destinations/italie/venise" },
                { label: "Guide budget voyage", url: "/guides/budget-voyage" },
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
                { label: "🇮🇹 Italie", url: "/destinations/italie" },
                { label: "Rome", url: "/destinations/italie/rome" },
                { label: "Toscane", url: "/destinations/italie/toscane" },
                { label: "Venise", url: "/destinations/italie/venise" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/italie" onClick={() => window.scrollTo(0, 0)}>Découvrir l'Italie</Link>
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

export default QueFaireRome;
