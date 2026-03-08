import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Star, Utensils, Landmark } from "lucide-react";
import romeImage from "@/assets/cities/rome.jpg";

const MeilleuresChosesRome = () => {
  const faqs = [
    { question: "Quelles sont les 3 choses à faire absolument à Rome ?", answer: "Le Colisée et le Forum romain, la basilique Saint-Pierre et la chapelle Sixtine au Vatican, et lancer une pièce dans la fontaine de Trevi. Ces trois expériences couvrent 2000 ans d'histoire." },
    { question: "Combien de jours pour visiter Rome ?", answer: "3 à 4 jours minimum pour les incontournables. 5 à 7 jours pour explorer les quartiers comme le Trastevere, l'Aventin et faire une excursion à Tivoli ou Ostia Antica." },
    { question: "Quand visiter Rome ?", answer: "Le printemps (avril-mai) et l'automne (septembre-octobre) offrent un climat idéal et des foules modérées. L'été est très chaud (35°C+) et bondé. L'hiver est doux mais certains sites ferment plus tôt." },
    { question: "Rome est-elle chère ?", answer: "Modérément. Un espresso au comptoir coûte 1,20€, une part de pizza al taglio 2-4€, un plat de pâtes 10-15€. Les musées coûtent 15-20€. Budget quotidien confortable : 80-120€." },
    { question: "Faut-il réserver les billets à l'avance ?", answer: "Oui, absolument pour le Colisée, les musées du Vatican et la galerie Borghèse (obligatoire). Sans réservation, comptez 2-3h de file d'attente au Colisée et au Vatican." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Les Meilleures Choses à Faire à Rome en 2025 – Top 20 Expériences"
        description="Découvrez les 20 meilleures choses à faire à Rome : Colisée, Vatican, Trastevere, gastronomie italienne et trésors cachés. Guide complet pour un séjour inoubliable dans la Ville Éternelle."
        image={romeImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-08" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Meilleures Choses à Faire à Rome", url: "/blog/meilleures-choses-a-faire-rome" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${romeImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Meilleures Expériences</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Les Meilleures Choses à Faire à Rome en 2025
              </h1>
              <p className="text-xl text-white/90">20 expériences incontournables dans la Ville Éternelle</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 8 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 15 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <div className="not-prose mb-8 p-4 bg-muted/40 rounded-lg border border-border text-sm text-muted-foreground">
            📋 Pour les tarifs détaillés et horaires d'ouverture, consultez notre <Link to="/blog/que-faire-rome" className="text-ocean hover:underline font-medium">guide pratique Rome avec prix et horaires</Link>. Cet article présente les <strong>meilleures expériences</strong> pour un séjour mémorable.
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Rome n'est pas une ville-musée figée dans le passé : c'est une capitale vivante où <strong>2 800 ans d'histoire</strong> se mêlent à une dolce vita bien réelle. Ici, vous prenez votre espresso accoudé à un comptoir en marbre face à un obélisque égyptien, vous dégustez une cacio e pepe dans une trattoria centenaire à deux pas du Panthéon, et vous flânez dans des ruelles ocre où chaque pierre raconte une histoire. De l'immensité du Colisée à l'intimité du Trastevere, des chefs-d'œuvre du Vatican aux pizzas al taglio de Testaccio, Rome récompense chaque pas. Voici les <strong>20 meilleures choses à faire</strong> lors de votre séjour en <Link to="/destinations/italie" className="text-ocean hover:underline font-medium">Italie</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Landmark className="h-7 w-7 text-ocean" /> Monuments Antiques Incontournables
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">1. Revivre l'histoire au Colisée</h3>
          <p>
            Le plus grand amphithéâtre jamais construit (80 après J.-C.) pouvait accueillir <strong>50 000 spectateurs</strong> pour les combats de gladiateurs. Marchez sur les gradins, descendez dans les souterrains où attendaient les fauves, et imaginez la foule rugissante. Le billet combiné inclut le Forum romain et le Palatin — ne les manquez pas, car c'est là que Rome est née. Réservez impérativement en ligne pour éviter les files monstrueuses.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">2. Arpenter le Forum Romain et le Mont Palatin</h3>
          <p>
            Le cœur battant de la Rome antique s'étend entre les temples en ruines, les arcs de triomphe et les basiliques. Le Forum était la place publique où se décidait le destin du monde : discours de Cicéron, triomphes de César, procès de sénateurs. Montez sur le Palatin pour une <strong>vue panoramique</strong> spectaculaire sur le Forum et le Colisée. Les jardins Farnèse au sommet sont un havre de fraîcheur avec des orangers et des fontaines Renaissance.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">3. S'émerveiller devant le Panthéon</h3>
          <p>
            Ce temple de tous les dieux (125 après J.-C.) possède la plus grande <strong>coupole en béton non armé</strong> jamais construite — un exploit d'ingénierie inégalé pendant 1 300 ans. L'oculus de 9 mètres de diamètre au sommet laisse entrer un rayon de lumière qui tourne lentement dans le temple au fil de la journée. Quand il pleut, l'eau tombe à l'intérieur et s'évacue par un système de drainage antique toujours fonctionnel. L'entrée est gratuite.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Vatican et Trésors Artistiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">4. Contempler la chapelle Sixtine et les musées du Vatican</h3>
          <p>
            Le plafond peint par <strong>Michel-Ange</strong> entre 1508 et 1512 reste l'une des plus grandes réalisations artistiques de l'humanité. La Création d'Adam, avec les doigts de Dieu et d'Adam qui se frôlent, est une icône universelle. Les musées qui précèdent la chapelle abritent 70 000 œuvres : les Chambres de Raphaël, la galerie des cartes géographiques, le Laocoon. Arrivez dès l'ouverture ou en nocturne (vendredi soir) pour éviter les 25 000 visiteurs quotidiens.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">5. Entrer dans la basilique Saint-Pierre</h3>
          <p>
            La plus grande église du monde impressionne par ses dimensions colossales : 187 mètres de long, une coupole de 136 mètres signée Michel-Ange, la Pietà sculptée quand l'artiste n'avait que 24 ans. Montez les <strong>551 marches</strong> du dôme pour un panorama à 360° sur Rome et la place Saint-Pierre avec ses colonnades du Bernin. L'entrée de la basilique est gratuite, seule la montée au dôme est payante.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">6. Découvrir la galerie Borghèse</h3>
          <p>
            Ce petit musée dans les jardins de la Villa Borghèse abrite des chefs-d'œuvre du Bernin (Apollon et Daphné, L'Enlèvement de Proserpine), du Caravage et de Raphaël. La <strong>réservation est obligatoire</strong> — les visites sont limitées à 2 heures par groupe de 360 personnes, garantissant une expérience intime face aux sculptures les plus expressives de l'histoire de l'art.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Places et Fontaines Mythiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">7. Lancer une pièce dans la fontaine de Trevi</h3>
          <p>
            La plus célèbre fontaine du monde (achevée en 1762) représente le dieu Neptune sur un char tiré par des chevaux marins. La tradition veut qu'une pièce lancée par-dessus l'épaule droite garantisse votre retour à Rome. <strong>3 000 euros</strong> de pièces sont récoltés chaque jour et reversés à des œuvres caritatives. Visitez très tôt le matin ou tard le soir pour la voir sans la foule — illuminée de nuit, elle est magique.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">8. Flâner sur la Piazza Navona</h3>
          <p>
            Construite sur l'ancien stade de Domitien (Ier siècle), cette place ovale est l'une des plus belles d'Europe. La <strong>fontaine des Quatre-Fleuves</strong> du Bernin, avec ses allégories du Nil, du Gange, du Danube et du Rio de la Plata, est un chef-d'œuvre baroque. Les peintres, les musiciens de rue et les terrasses de café animent la place jour et nuit. C'est l'endroit idéal pour un tartufo (glace au chocolat) chez Tre Scalini.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">9. Monter les escaliers de la Place d'Espagne</h3>
          <p>
            Les 135 marches du Scalinata di Trinità dei Monti, bordées d'azalées au printemps, sont un lieu de rendez-vous intemporel. Depuis le sommet, la vue plonge sur la Via Condotti et ses boutiques de luxe. En bas, la fontaine Barcaccia du Bernin père a la forme d'un bateau à demi-submergé. Le quartier environnant est le triangle d'or du shopping romain.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> La Dolce Vita Gastronomique
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">10. Déguster les quatre pâtes romaines canoniques</h3>
          <p>
            Rome a ses quatre recettes sacrées : la <strong>carbonara</strong> (guanciale, pecorino, œuf, poivre), la <strong>cacio e pepe</strong> (pecorino et poivre noir), l'<strong>amatriciana</strong> (guanciale, tomate, pecorino) et la <strong>gricia</strong> (guanciale et pecorino sans tomate). Chaque trattoria a sa spécialité. Da Enzo au Trastevere, Felice a Testaccio et Roscioli sont des valeurs sûres où les Romains eux-mêmes font la queue.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">11. Savourer la pizza al taglio de Testaccio</h3>
          <p>
            Oubliez Naples — Rome a sa propre tradition pizza : la <strong>pizza al taglio</strong> (à la coupe), rectangulaire, à pâte épaisse et croustillante, garnie de combinaisons créatives. Bonci (le « Michel-Ange de la pizza ») à Prati et Pizzarium sont des institutions. Une part coûte 3-5€ et constitue le meilleur déjeuner sur le pouce de Rome. Le quartier de Testaccio, ancien quartier des abattoirs, est devenu le cœur foodie de la ville.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">12. Prendre un gelato artisanal dans les ruelles</h3>
          <p>
            Le gelato romain est un art. Fuyez les montagnes de glace fluorescente — les vraies gelaterias utilisent des ingrédients frais et des couleurs naturelles. <strong>Fatamorgana</strong> (saveurs inventives comme basilic-noix de macadamia), <strong>Giolitti</strong> (institution depuis 1900) et <strong>Il Gelato di Claudio Torcè</strong> sont des références. Un cornet 2 boules coûte 2,50-4€.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Quartiers de Charme et Trésors Cachés
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">13. Se perdre dans le Trastevere</h3>
          <p>
            Ce quartier bohème aux ruelles pavées, aux façades ocre couvertes de lierre et aux petites places ombragées est le Rome le plus romantique. Les trattorias familiales, les bars à vin confidentiels et les boutiques artisanales donnent l'impression de vivre dans un film italien. Le soir, les terrasses s'illuminent de guirlandes et l'ambiance devient festive. Ne manquez pas la basilique Santa Maria in Trastevere avec ses mosaïques dorées du XIIe siècle.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">14. Découvrir l'Aventin et le trou de la serrure</h3>
          <p>
            La colline de l'Aventin est l'un des secrets les mieux gardés de Rome. Le <strong>jardin des Orangers</strong> (Giardino degli Aranci) offre une vue panoramique sur le Tibre et le dôme de Saint-Pierre. Juste à côté, le trou de la serrure de la porte du Prieuré de Malte encadre parfaitement le dôme de Saint-Pierre au bout d'une allée de cyprès — la photo la plus instagrammable de Rome.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">15. Explorer le quartier juif et ses trésors</h3>
          <p>
            Le Ghetto, l'un des plus anciens quartiers juifs d'Europe (1555), est aujourd'hui un quartier vibrant avec les meilleurs <strong>carciofi alla giudia</strong> (artichauts frits à la romaine) de la ville. Le Portico d'Ottavia, vieux de 2000 ans, les pierres d'achoppement (Stolpersteine) commémorant les victimes de la Shoah, et la grande synagogue créent une atmosphère chargée d'histoire et de résilience.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">16-20. Autres expériences romaines inoubliables</h3>
          <ul>
            <li><strong>Via Appia Antica</strong> — La plus ancienne voie romaine (312 av. J.-C.), bordée de tombeaux, de catacombes et de pins parasols. Location de vélo recommandée.</li>
            <li><strong>Thermes de Caracalla</strong> — Ces ruines monumentales du IIIe siècle accueillent des opéras en plein air l'été. L'acoustique y est exceptionnelle.</li>
            <li><strong>Basilique San Clemente</strong> — Trois niveaux d'histoire empilés : église du XIIe siècle, basilique du IVe siècle, temple de Mithra du Ier siècle. Fascinant.</li>
            <li><strong>Marché de Campo de' Fiori</strong> — Chaque matin, fruits, légumes, épices et fleurs envahissent cette place historique. La statue de Giordano Bruno veille sur les étals.</li>
            <li><strong>Coucher de soleil depuis le Pincio</strong> — Les jardins au-dessus de la Piazza del Popolo offrent le panorama doré le plus romantique de Rome.</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Conseils Pratiques pour Rome
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">Se déplacer</h3>
          <p>
            Rome se visite essentiellement <strong>à pied</strong> — les sites sont concentrés dans un périmètre de 4-5 km. Le métro (2 lignes) est utile pour les grandes distances (Colisée, Vatican, Termini). Le bus est chaotique mais pittoresque. Évitez absolument les taxis non officiels à Termini. Le Roma Pass (48/72h) offre les transports illimités et l'entrée gratuite aux 1 ou 2 premiers musées.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">Itinéraire suggéré : 4 jours à Rome</h3>
          <ul>
            <li><strong>Jour 1</strong> — Colisée, Forum romain, Palatin, Capitole, Piazza Venezia</li>
            <li><strong>Jour 2</strong> — Vatican (musées, Sixtine, Saint-Pierre, dôme), Château Saint-Ange</li>
            <li><strong>Jour 3</strong> — Panthéon, Piazza Navona, Campo de' Fiori, Trastevere (déjeuner + flânerie), Aventin (coucher de soleil)</li>
            <li><strong>Jour 4</strong> — Galerie Borghèse (matin), Place d'Espagne, fontaine de Trevi, Via del Corso, Pincio (coucher de soleil)</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Rome est la preuve vivante que <strong>la beauté peut durer éternellement</strong>. Chaque coin de rue est une carte postale, chaque repas est une célébration, chaque monument est un chapitre d'histoire universelle. La Ville Éternelle porte bien son nom : quels que soient le nombre de visites, elle a toujours quelque chose de nouveau à offrir. Continuez votre voyage en <Link to="/destinations/italie" className="text-ocean hover:underline font-medium">Italie</Link> vers Florence, Venise ou la côte amalfitaine.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Que faire à Rome : prix et horaires", url: "/blog/que-faire-rome" },
                { label: "Guide complet de l'Italie", url: "/destinations/italie" },
                { label: "Rome : guide de la ville", url: "/destinations/italie/rome" },
                { label: "Meilleures choses à faire à Paris", url: "/blog/meilleures-choses-a-faire-paris" },
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

export default MeilleuresChosesRome;
