import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from '@/components/affiliate';
import { AFFILIATE_BLOCKS } from '@/lib/affiliateData';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Star, Utensils, Heart } from "lucide-react";
import parisImage from "@/assets/cities/paris.jpg";

const QueFaireParis = () => {
  const faqs = [
    { question: "Combien de jours pour visiter Paris ?", answer: "4 à 5 jours pour les incontournables. Une semaine pour explorer les quartiers en profondeur et faire des excursions (Versailles, Giverny)." },
    { question: "Paris est-elle chère pour les touristes ?", answer: "Oui, Paris est une ville chère. Comptez 80-120€/jour. Les musées nationaux sont gratuits le 1er dimanche du mois. La street food et les boulangeries sont abordables (5-10€/repas)." },
    { question: "Quel est le meilleur quartier où loger à Paris ?", answer: "Le Marais (3e-4e) pour son ambiance, Saint-Germain (6e) pour le charme, Montmartre (18e) pour le romantisme, Bastille (11e) pour le rapport qualité-prix." },
    { question: "Le Paris Museum Pass vaut-il le coup ?", answer: "Oui, si vous visitez 4+ musées en 2-4 jours. Le pass 2 jours (55€) couvre le Louvre, Orsay, l'Orangerie, Versailles et 50+ sites. Surtout, il permet de couper les files d'attente." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Paris : 25 Activités avec Prix, Horaires et Bons Plans"
        description="Liste pratique des 25 meilleures activités à Paris avec tarifs exacts, horaires d'ouverture, jours de gratuité et astuces pour éviter les files d'attente."
        image={parisImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-04" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Paris", url: "/blog/que-faire-paris" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${parisImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Pratique</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Paris : 25 Activités avec Prix, Horaires et Bons Plans
              </h1>
              <p className="text-xl text-white/90">Tarifs exacts, créneaux sans attente et jours de gratuité</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 4 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 14 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <div className="not-prose mb-8 p-4 bg-muted/40 rounded-lg border border-border text-sm text-muted-foreground">
            📖 Pour une présentation complète des quartiers et de l'art de vivre parisien, consultez notre <Link to="/destinations/france/paris" className="text-ocean hover:underline font-medium">guide de Paris</Link>. Cet article se concentre sur les <strong>activités concrètes</strong> avec prix, horaires et astuces pour éviter les files d'attente.
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Face aux centaines de choses à faire à Paris, comment prioriser ? Ce guide liste <strong>25 activités concrètes</strong> avec pour chacune le <strong>tarif exact, les horaires, les jours de gratuité et les astuces</strong> pour éviter les files d'attente. Utilisez cette check-list pour planifier votre séjour en <Link to="/destinations/france" className="text-ocean hover:underline font-medium">France</Link> jour par jour.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Les Monuments Emblématiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">1. Tour Eiffel</h3>
          <p>
            Le symbole de Paris par excellence. Montez au <strong>sommet (276 m)</strong> pour un panorama à 360° sur la ville. Réservez en ligne pour éviter 2h d'attente. <strong>Astuce :</strong> le 2e étage offre déjà une vue exceptionnelle. Le soir, la tour scintille pendant 5 minutes toutes les heures à partir de la tombée de la nuit. Budget : 26€ pour le sommet.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">2. Musée du Louvre</h3>
          <p>
            Le plus grand musée du monde abrite <strong>38 000 œuvres</strong> dont la Joconde, la Vénus de Milo et la Victoire de Samothrace. Impossible de tout voir en une journée — concentrez-vous sur 2-3 ailes. <strong>Astuce :</strong> entrez par la Porte des Lions (moins de file). Entrée : 17€, gratuit les 1ers dimanches (octobre-mars).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">3. Cathédrale Notre-Dame</h3>
          <p>
            Après l'incendie de 2019 et une restauration spectaculaire, <strong>Notre-Dame a rouvert en décembre 2024</strong>. Les vitraux restaurés, la nouvelle flèche et la charpente en chêne sont éblouissants. L'entrée est gratuite. La vue depuis les tours sur Paris et la Seine est inégalable.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">4. Arc de Triomphe et Champs-Élysées</h3>
          <p>
            Montez au sommet de l'<strong>Arc de Triomphe</strong> (13€) pour la plus belle perspective sur les 12 avenues en étoile, dont les Champs-Élysées. Descendez ensuite la « plus belle avenue du monde » jusqu'à la Place de la Concorde. Le soir, les Champs illuminés sont magiques.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">5. Sacré-Cœur et Montmartre</h3>
          <p>
            La basilique blanche perchée sur la Butte Montmartre offre une <strong>vue panoramique gratuite</strong> sur tout Paris depuis son parvis. Explorez ensuite le village de Montmartre : Place du Tertre (peintres), Moulin Rouge, vignoble, mur des Je t'aime. Le quartier est particulièrement romantique au coucher du soleil.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Musées et Culture
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">6. Musée d'Orsay</h3>
          <p>
            Installé dans une ancienne gare ferroviaire, il abrite la plus grande collection d'<strong>art impressionniste</strong> au monde : Monet, Renoir, Degas, Van Gogh, Cézanne. L'horloge géante offre un cadre photographique unique. Entrée : 16€. Moins bondé que le Louvre.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">7. Centre Pompidou</h3>
          <p>
            Son architecture « à l'envers » (tuyaux colorés à l'extérieur) abrite le <strong>plus grand musée d'art moderne d'Europe</strong>. Picasso, Matisse, Kandinsky, Warhol. La terrasse panoramique au 6e étage est gratuite et offre une vue spectaculaire. Entrée : 15€.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">8-10. Autres musées incontournables</h3>
          <ul>
            <li><strong>Musée de l'Orangerie</strong> – Les Nymphéas géants de Monet dans deux salles ovales conçues par l'artiste (12,50€)</li>
            <li><strong>Musée Rodin</strong> – Le Penseur, Le Baiser, dans un magnifique hôtel particulier avec jardin (13€)</li>
            <li><strong>Fondation Louis Vuitton</strong> – Architecture spectaculaire de Frank Gehry à la lisière du Bois de Boulogne</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Heart className="h-7 w-7 text-ocean" /> Quartiers et Promenades
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">11. Le Marais</h3>
          <p>
            Le quartier le plus <strong>branché et historique</strong> de Paris. Hôtels particuliers du XVIIe, galeries d'art, boutiques de créateurs, falafel de L'As du Fallafel (rue des Rosiers), Place des Vosges — la plus ancienne place de Paris. Parfait pour flâner un dimanche (les boutiques sont ouvertes).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">12. Saint-Germain-des-Prés</h3>
          <p>
            Le quartier littéraire et intellectuel. Les cafés historiques où Sartre et Beauvoir écrivaient : <strong>Café de Flore</strong> et <strong>Les Deux Magots</strong>. Les librairies d'antiquaires, le jardin du Luxembourg et les galeries de la rue de Seine. L'âme bohème de Paris.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">13. Île de la Cité et Île Saint-Louis</h3>
          <p>
            Le <strong>berceau de Paris</strong>. Notre-Dame, la Sainte-Chapelle (les plus beaux vitraux du monde, 11,50€), la Conciergerie. Traversez le pont pour l'Île Saint-Louis : glaces Berthillon, quais romantiques et vue sur la Seine.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">14-15. Autres quartiers à explorer</h3>
          <ul>
            <li><strong>Canal Saint-Martin</strong> (10e) – Ambiance bobo, écluses, terrasses au bord de l'eau, street art et boutiques vintage</li>
            <li><strong>Belleville</strong> (20e) – Le Paris multiculturel : street art, restaurants chinois et kebabs, bars alternatifs et vue depuis le parc de Belleville</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie Parisienne
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">16. Croissant et café en terrasse</h3>
          <p>
            Le rituel matinal parisien. Trouvez une boulangerie artisanale (pas les chaînes) pour un <strong>croissant au beurre croustillant</strong> (1,20-1,50€) et un café serré au comptoir. Les meilleures : Du Pain et des Idées (10e), Poilâne (6e), Sain Boulangerie (divers arrondissements).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">17. Fromageries et marchés</h3>
          <p>
            Paris compte plus de <strong>300 fromageries artisanales</strong>. Visitez le marché d'Aligre (12e), le marché des Enfants Rouges (3e, le plus ancien de Paris) ou la rue Montorgueil (1er-2e) pour des dégustations de fromages, charcuteries et vins.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">18-20. Expériences culinaires</h3>
          <ul>
            <li><strong>Bistrot parisien classique</strong> – Steak-frites, confit de canard, crème brûlée dans un bistrot authentique (20-35€/personne)</li>
            <li><strong>Macarons chez Ladurée ou Pierre Hermé</strong> – Les meilleurs macarons du monde (2-3€ pièce)</li>
            <li><strong>Dégustation de vin dans le Marais</strong> – Bars à vins naturels et caves avec dégustation commentée (15-30€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Expériences et Excursions
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">21. Croisière sur la Seine</h3>
          <p>
            Voir Paris depuis l'eau est une <strong>expérience magique</strong>, surtout au coucher du soleil quand les monuments s'illuminent. Les Bateaux Mouches et Vedettes du Pont Neuf proposent des croisières de 1h (15€). Pour les petits budgets : le Batobus (pass journée 19€) fait office de transport fluvial.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">22. Château de Versailles</h3>
          <p>
            À 30 minutes en RER, le <strong>château de Louis XIV</strong> et ses jardins sont une merveille absolue. La Galerie des Glaces, les fontaines musicales (avril-octobre) et le Petit Trianon de Marie-Antoinette. Prévoyez la journée entière. Entrée : 21€ (château + jardins).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">23-25. Autres expériences</h3>
          <ul>
            <li><strong>Catacombes de Paris</strong> – 6 millions de squelettes dans 300 km de galeries souterraines. File d'attente longue — réservez en ligne (29€)</li>
            <li><strong>Opéra Garnier</strong> – Visite libre (14€) ou assistez à un ballet/opéra dans ce chef-d'œuvre de Charles Garnier. Le plafond de Chagall est époustouflant</li>
            <li><strong>Giverny</strong> – Les jardins de Claude Monet à 1h15 de Paris. Les nymphéas, le pont japonais : un tableau vivant (avril-octobre, 11€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Conseils Pratiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">Budget quotidien</h3>
          <p>
            Comptez <strong>80-120€/jour</strong> : hébergement (50-80€), repas (20-35€), transports (pass Navigo semaine 30€ ou tickets) et une entrée musée. Le Paris Museum Pass est rentable dès 3-4 visites. Les pique-niques dans les parcs sont une tradition parisienne économique et agréable.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">Itinéraire suggéré : 5 jours à Paris</h3>
          <ul>
            <li><strong>Jour 1</strong> – Tour Eiffel, Trocadéro, croisière Seine, Champs-Élysées et Arc de Triomphe</li>
            <li><strong>Jour 2</strong> – Louvre (matinée), Tuileries, Place Vendôme, Palais Royal, Opéra Garnier</li>
            <li><strong>Jour 3</strong> – Notre-Dame, Sainte-Chapelle, Île Saint-Louis, Le Marais, Place des Vosges</li>
            <li><strong>Jour 4</strong> – Montmartre, Sacré-Cœur, Musée d'Orsay, Saint-Germain-des-Prés le soir</li>
            <li><strong>Jour 5</strong> – Excursion Versailles ou musées au choix, shopping, dîner d'adieu</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Paris est une ville qui <strong>récompense la lenteur</strong>. Les meilleures découvertes se font en flânant sans but, en s'arrêtant dans un café de quartier, en prenant un verre de vin en regardant passer les Parisiens. La Ville Lumière ne livre pas ses secrets aux pressés. Pour explorer le reste de la <Link to="/destinations/france" className="text-ocean hover:underline font-medium">France</Link>, découvrez la <Link to="/destinations/france/provence" className="text-ocean hover:underline font-medium">Provence</Link> et la <Link to="/destinations/france/cote-azur" className="text-ocean hover:underline font-medium">Côte d'Azur</Link>.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet de la France", url: "/destinations/france" },
                { label: "Provence : lavande et villages", url: "/destinations/france/provence" },
                { label: "Côte d'Azur", url: "/destinations/france/cote-azur" },
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
                { label: "🇫🇷 France", url: "/destinations/france" },
                { label: "Paris", url: "/destinations/france/paris" },
                { label: "Provence", url: "/destinations/france/provence" },
                { label: "Lyon", url: "/destinations/france/lyon" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/france" onClick={() => window.scrollTo(0, 0)}>Découvrir la France</Link>
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

export default QueFaireParis;
