import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from '@/components/affiliate';
import { AFFILIATE_BLOCKS } from '@/lib/affiliateData';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Star, Utensils, Sun } from "lucide-react";
import barceloneImage from "@/assets/cities/barcelone.jpg";

const QueFaireBarcelone = () => {
  const faqs = [
    { question: "Combien de jours pour visiter Barcelone ?", answer: "3 à 4 jours suffisent pour les incontournables (Sagrada Familia, Park Güell, Ramblas, plage). Avec 5-6 jours, ajoutez Montserrat et les quartiers excentrés." },
    { question: "Barcelone est-elle chère ?", answer: "Barcelone est abordable comparée à Paris ou Londres. Comptez 50-80€/jour. Les tapas sont bon marché (2-4€/tapa) et les transports efficaces (T-Casual 11€ pour 10 trajets)." },
    { question: "Faut-il réserver la Sagrada Familia à l'avance ?", answer: "Oui, absolument ! Réservez 2-4 semaines à l'avance sur le site officiel. Les créneaux du matin offrent la plus belle lumière à travers les vitraux." },
    { question: "Quelle est la meilleure période pour visiter Barcelone ?", answer: "Mai-juin et septembre-octobre : températures agréables (20-25°C), moins de foule. L'été (juillet-août) est chaud et très touristique." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Barcelone : 20 Activités avec Prix et Horaires Pratiques"
        description="Liste pratique des 20 meilleures activités à Barcelone avec tarifs exacts, horaires d'ouverture, astuces de réservation Sagrada Familia et bons plans tapas."
        image={barceloneImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-05" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Barcelone", url: "/blog/que-faire-barcelone" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${barceloneImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Pratique</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Barcelone : 20 Activités avec Prix et Horaires Pratiques
              </h1>
              <p className="text-xl text-white/90">Tarifs exacts, créneaux de réservation Gaudí et bons plans tapas</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 5 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 13 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <div className="not-prose mb-8 p-4 bg-muted/40 rounded-lg border border-border text-sm text-muted-foreground">
            📖 Pour une présentation complète des quartiers et de l'ambiance de Barcelone, consultez notre <Link to="/destinations/espagne/barcelone" className="text-ocean hover:underline font-medium">guide de Barcelone</Link>. Cet article se concentre sur les <strong>activités concrètes</strong> avec prix, horaires et astuces de réservation.
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Barcelone offre tellement de possibilités qu'il est facile de passer à côté de l'essentiel. Ce guide classe <strong>20 activités concrètes</strong> avec pour chacune le <strong>tarif exact, les horaires et les astuces de réservation</strong> — indispensables surtout pour les sites de Gaudí. Utilisez cette check-list pour planifier votre séjour en <Link to="/destinations/espagne" className="text-ocean hover:underline font-medium">Espagne</Link>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> L'Univers de Gaudí
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">1. Sagrada Familia</h3>
          <p>
            Le chef-d'œuvre inachevé d'<strong>Antoni Gaudí</strong>, en construction depuis 1882, est l'un des monuments les plus visités au monde. L'intérieur est encore plus impressionnant que l'extérieur : des colonnes en forme d'arbres, des vitraux qui projettent un arc-en-ciel de couleurs. Prévoyez 1h30-2h. Entrée : 26€ (avec audioguide). Montez dans les tours (36€) pour une vue unique.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">2. Park Güell</h3>
          <p>
            Ce <strong>jardin fantaisiste</strong> perché sur une colline est un monde de mosaïques colorées, de formes organiques et de panoramas spectaculaires sur Barcelone et la mer. Le dragon en mosaïque (El Drac) est l'icône de la ville. Zone monumentale payante (10€, réservation obligatoire). Arrivez tôt pour la lumière dorée.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">3. Casa Batlló</h3>
          <p>
            La façade ondulante sur le <strong>Passeig de Gràcia</strong> ressemble à un organisme vivant : écailles de dragon, os, masques vénitiens. La visite en réalité augmentée (35€) est l'une des plus immersives de toute l'Europe. La terrasse sur le toit avec ses cheminées-sculptures est époustouflante.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">4. Casa Milà (La Pedrera)</h3>
          <p>
            L'immeuble résidentiel de Gaudí semble <strong>sculpté dans la pierre</strong>. Le toit-terrasse avec ses cheminées guerrières offre une vue panoramique sur la ville et la Sagrada Familia au loin. La visite nocturne avec projection sur le toit (39€) est une expérience magique.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Quartiers et Promenades
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">5. Las Ramblas</h3>
          <p>
            La <strong>promenade la plus célèbre</strong> de Barcelone relie la Plaça Catalunya au port. Malgré son côté touristique, elle reste incontournable pour l'ambiance : artistes de rue, kiosques à fleurs, terrasses. <strong>Attention :</strong> surveillez vos affaires (pickpockets) et évitez les restaurants-pièges sur la Rambla même.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">6. Barri Gòtic (Quartier Gothique)</h3>
          <p>
            Le cœur médiéval de Barcelone : <strong>ruelles labyrinthiques</strong>, cathédrale gothique, places cachées. Perdez-vous dans les rues étroites entre la Plaça del Pi et la Plaça Reial. La cathédrale de Barcelone et son cloître aux 13 oies sont un havre de paix. Le Pont del Bisbe est l'un des spots photo les plus instagrammés.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">7. El Born</h3>
          <p>
            Le quartier le plus <strong>branché et bohème</strong> de Barcelone. Le Musée Picasso (12€), la basilique Santa Maria del Mar (chef-d'œuvre gothique catalan), des boutiques de designers locaux et des cocktail bars excellents. Le Passeig del Born est l'artère centrale bordée de terrasses.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">8. Barceloneta et les plages</h3>
          <p>
            L'ancien quartier de pêcheurs est devenu le <strong>quartier balnéaire</strong> de Barcelone. La plage de Barceloneta est animée et familiale. Pour plus de tranquillité, continuez vers Bogatell ou Nova Icaria. Le front de mer avec ses chiringuitos (bars de plage) est parfait pour un spritz au coucher du soleil.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">9-10. Autres quartiers</h3>
          <ul>
            <li><strong>Gràcia</strong> – Le quartier village : places ombragées, bars à vermouth, ambiance locale loin du tourisme de masse. Ses fêtes de rue en août sont légendaires</li>
            <li><strong>El Raval</strong> – Multiculturel et alternatif : MACBA (musée d'art contemporain), street art, restaurants du monde entier et le chat géant de Botero</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie Catalane
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">11. Tapas dans El Poble-sec</h3>
          <p>
            Le quartier le plus authentique pour les tapas. La <strong>Carrer de Blai</strong> (« la rue des pintxos ») propose des dizaines de bars où chaque tapa coûte 1-3€. Patatas bravas, croquetas, pan con tomate, jamón ibérico — un festin pour 10-15€ par personne.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">12. Marché de la Boqueria</h3>
          <p>
            Le plus célèbre marché d'Espagne, sur les Ramblas depuis 1217. <strong>Fruits tropicaux, jus frais, jamón, fruits de mer</strong>. Évitez les stands en façade (prix touristiques) et enfoncez-vous dans le marché pour les étals authentiques. Le bar Pinotxo est une institution.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">13-14. Expériences culinaires</h3>
          <ul>
            <li><strong>Paella sur le port</strong> – La vraie paella valencienne (ou sa cousine catalane) avec vue sur la marina. Comptez 12-18€. Évitez les restaurants qui affichent des photos de plats</li>
            <li><strong>Vermouth dans Gràcia</strong> – L'apéritif catalan par excellence. Un verre de vermouth rouge avec olives et chips à la terrasse d'un bar de quartier (3-5€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Expériences et Excursions
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">15. Montjuïc</h3>
          <p>
            La colline de <strong>Montjuïc</strong> offre jardins botaniques, le château avec vue panoramique, la Fondation Miró (art moderne, 14€) et le stade olympique de 1992. Le <strong>spectacle de la Fontaine Magique</strong> (gratuit, week-ends en soirée) avec eau, lumière et musique est féérique.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">16. Camp Nou (FC Barcelone)</h3>
          <p>
            Le plus grand stade d'Europe (99 000 places) propose un <strong>tour immersif</strong> même en jour sans match. Le musée du Barça retrace l'histoire de Messi, Cruyff et Ronaldinho. Entrée : 28€. Si vous pouvez assister à un match, l'ambiance est incomparable.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">17-20. Autres expériences</h3>
          <ul>
            <li><strong>Spectacle de flamenco</strong> – Au Tablao Cordobes ou au Palau de la Música (30-50€). Un art viscéral et émouvant</li>
            <li><strong>Bunkers del Carmel</strong> – Le <strong>meilleur point de vue gratuit</strong> de Barcelone. Un ancien bunker antiaérien transformé en belvédère panoramique à 360°. Coucher de soleil avec bière — le spot secret des locaux</li>
            <li><strong>Montserrat</strong> – Le monastère perché sur une montagne aux rochers dentelés à 1h de Barcelone. Randonnées spectaculaires et la Vierge Noire (train + crémaillère)</li>
            <li><strong>Cadaqués et Cap de Creus</strong> – Le village blanc où Dalí avait sa maison. 2h30 de route mais un des plus beaux villages de Méditerranée</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Conseils Pratiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">Budget quotidien</h3>
          <p>
            Comptez <strong>50-80€/jour</strong> : hébergement (30-60€), repas tapas (15-25€/jour), transports (T-Casual 11€ pour 10 trajets) et une entrée site. Barcelone est bien moins chère que Paris tout en offrant une qualité de vie exceptionnelle.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">Itinéraire suggéré : 4 jours à Barcelone</h3>
          <ul>
            <li><strong>Jour 1</strong> – Sagrada Familia, Eixample, Casa Batlló, Passeig de Gràcia, tapas dans Gràcia</li>
            <li><strong>Jour 2</strong> – Barri Gòtic, cathédrale, El Born, Musée Picasso, plage Barceloneta</li>
            <li><strong>Jour 3</strong> – Park Güell le matin, Bunkers del Carmel, Camp Nou, Montjuïc et Fontaine Magique le soir</li>
            <li><strong>Jour 4</strong> – Boqueria, Ramblas, El Raval, shopping, Poble-sec pour le dîner de tapas final</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Barcelone est une ville qui vit <strong>dehors</strong>. Les places deviennent des salons, les terrasses des salles à manger, les plages des bureaux improvisés. L'art de vivre catalan — le « fer el bonic » (faire les choses avec beauté) — imprègne chaque aspect de la ville. Pour explorer le reste de l'<Link to="/destinations/espagne" className="text-ocean hover:underline font-medium">Espagne</Link>, découvrez <Link to="/destinations/espagne/madrid" className="text-ocean hover:underline font-medium">Madrid</Link> et l'<Link to="/destinations/espagne/andalousie" className="text-ocean hover:underline font-medium">Andalousie</Link>.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet de l'Espagne", url: "/destinations/espagne" },
                { label: "Madrid : capitale et culture", url: "/destinations/espagne/madrid" },
                { label: "Andalousie : soleil et flamenco", url: "/destinations/espagne/andalousie" },
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
                { label: "🇪🇸 Espagne", url: "/destinations/espagne" },
                { label: "Barcelone", url: "/destinations/espagne/barcelone" },
                { label: "Madrid", url: "/destinations/espagne/madrid" },
                { label: "Andalousie", url: "/destinations/espagne/andalousie" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.activites} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/espagne" onClick={() => window.scrollTo(0, 0)}>Découvrir l'Espagne</Link>
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

export default QueFaireBarcelone;
