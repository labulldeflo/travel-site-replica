import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Star, Utensils, Train } from "lucide-react";
import bangkokImage from "@/assets/cities/bangkok.jpg";

const QueFaireBangkok = () => {
  const faqs = [
    { question: "Combien de jours pour visiter Bangkok ?", answer: "3 à 4 jours suffisent pour les incontournables. Avec 5-6 jours, vous pourrez explorer les quartiers excentrés et faire une excursion au marché flottant ou à Ayutthaya." },
    { question: "Bangkok est-elle dangereuse ?", answer: "Bangkok est une ville très sûre. Les précautions classiques suffisent : attention aux pickpockets dans les transports bondés et aux arnaques aux tuk-tuks (négociez le prix avant)." },
    { question: "Quelle est la meilleure période pour visiter Bangkok ?", answer: "De novembre à février (saison fraîche). Mars-mai est très chaud (35-40°C). La mousson (juin-octobre) apporte des averses courtes mais intenses." },
    { question: "Comment se déplacer à Bangkok ?", answer: "Le BTS Skytrain et le MRT sont rapides et climatisés. Les bateaux sur le Chao Phraya sont pittoresques et efficaces. Utilisez Grab pour les taxis (prix fixe, pas d'arnaque)." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Bangkok : 20 Activités et Visites Incontournables"
        description="Découvrez les meilleures activités à Bangkok : temples dorés, marchés flottants, street food, rooftop bars. Guide complet avec itinéraire et budget."
        image={bangkokImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-03" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Bangkok", url: "/blog/que-faire-bangkok" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${bangkokImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Ville</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Bangkok : 20 Activités et Visites Incontournables
              </h1>
              <p className="text-xl text-white/90">Le guide ultime de la capitale thaïlandaise</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 3 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 13 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            <Link to="/destinations/thailande/bangkok" className="text-ocean hover:underline font-medium">Bangkok</Link> est une ville qui bouscule tous les sens. <strong>Capitale de la Thaïlande</strong> et mégalopole de 10 millions d'habitants, elle mêle temples dorés scintillants, gratte-ciels futuristes, marchés débordants et une scène culinaire parmi les meilleures du monde. De Khao San Road aux rooftop bars vertigineux, voici <strong>20 expériences incontournables</strong> pour apprivoiser la Cité des Anges.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Temples et Patrimoine
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">1. Wat Phra Kaew et Grand Palais</h3>
          <p>
            Le <strong>Temple du Bouddha d'Émeraude</strong>, au sein du Grand Palais Royal, est le site le plus sacré de Thaïlande. L'architecture est éblouissante : toits dorés, mosaïques de miroirs, gardiens géants. Entrée : 500 bahts (≈13€). <strong>Conseil :</strong> arrivez à 8h30 pour éviter les groupes. Dress code strict : épaules et genoux couverts.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">2. Wat Pho (Temple du Bouddha couché)</h3>
          <p>
            Le <strong>Bouddha couché de 46 mètres</strong> recouvert de feuilles d'or est spectaculaire. Le temple est aussi le berceau du massage thaï traditionnel — offrez-vous un massage dans l'école du temple (300 bahts/h ≈ 8€). Plus de 1 000 statues de Bouddha jalonnent le complexe.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">3. Wat Arun (Temple de l'Aube)</h3>
          <p>
            Sur la rive opposée du Chao Phraya, le <strong>Wat Arun</strong> avec sa tour centrale de 70 mètres ornée de porcelaine chinoise est l'icône de Bangkok. Grimpez les marches raides pour une vue panoramique. Le meilleur moment : au coucher du soleil depuis la rive d'en face.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">4. Wat Saket (Mont d'Or)</h3>
          <p>
            Montez les <strong>344 marches</strong> de cette colline artificielle pour atteindre le stupa doré au sommet. La vue à 360° sur Bangkok est l'une des meilleures de la ville. Ambiance paisible avec cloches et drapeaux de prière. Entrée : 50 bahts (≈1,30€).
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Street Food et Gastronomie
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">5. Chinatown (Yaowarat Road)</h3>
          <p>
            Le <strong>paradis de la street food</strong> à Bangkok. Dès la tombée de la nuit, les étals envahissent Yaowarat Road : pad thaï grillé au wok, nouilles aux fruits de mer, dim sum, mangue sticky rice. Un festin pour 3-5€. L'ambiance nocturne avec les néons rouges est électrique. Lisez notre <Link to="/guides/street-food-thailande" className="text-ocean hover:underline font-medium">guide street food Thaïlande</Link>.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">6. Marchés de nuit</h3>
          <p>
            Bangkok vit la nuit. Le <strong>Jodd Fairs</strong> (successeur du Rod Fai) est le marché nocturne le plus trendy. Le <strong>Asiatique The Riverfront</strong> combine shopping et restaurants en bord de fleuve. Le <strong>Chatuchak Weekend Market</strong> (15 000 stands !) est le plus grand marché d'Asie.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">7. Cours de cuisine thaïe</h3>
          <p>
            Apprenez à préparer un <strong>curry vert, un pad thaï et une soupe tom yum</strong> lors d'un cours de 4 heures avec visite du marché. Comptez 30-50€ — le meilleur souvenir à ramener dans vos valises ! Nombreuses écoles dans Silom et autour de Khao San Road.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Expériences Uniques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">8. Marché flottant de Damnoen Saduak</h3>
          <p>
            À 1h30 de Bangkok, ce <strong>marché sur l'eau</strong> où les vendeuses en chapeau de paille pagaient entre les étals est une image emblématique de la Thaïlande. Touristique mais spectaculaire. Partez tôt (7h) pour l'ambiance authentique. Alternative moins touristique : Amphawa (week-end uniquement).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">9. Rooftop bars</h3>
          <p>
            Bangkok possède les <strong>plus beaux rooftop bars du monde</strong>. Le <strong>Sky Bar</strong> (Lebua State Tower) rendu célèbre par « Very Bad Trip 2 », le <strong>Vertigo</strong> (Banyan Tree) et le <strong>Octave</strong> (Marriott) offrent des vues vertigineuses. Cocktails : 300-500 bahts (8-13€). Dress code : smart casual.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">10. Croisière sur le Chao Phraya</h3>
          <p>
            Le <strong>fleuve Chao Phraya</strong> est l'artère vitale de Bangkok. Prenez un bateau-bus (15 bahts ≈ 0,40€) ou une croisière au coucher du soleil pour voir les temples illuminés depuis l'eau. Le contraste entre les gratte-ciels modernes et les maisons en bois sur pilotis est saisissant.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">11-15. Autres expériences</h3>
          <ul>
            <li><strong>Massage thaï traditionnel</strong> – Dès 200 bahts (5€) pour 1 heure dans les spas de Silom ou Sukhumvit</li>
            <li><strong>Jim Thompson House</strong> – La maison en teck de ce négociant en soie américain disparu mystérieusement (200 bahts)</li>
            <li><strong>Khao San Road</strong> – La rue backpacker légendaire : bars, street food et ambiance de fête permanente</li>
            <li><strong>Lumpini Park</strong> – Le « Central Park » de Bangkok : varans géants, tai-chi matinal et pédalo</li>
            <li><strong>MBK et Siam Center</strong> – Shopping dans les méga-centres commerciaux climatisés, refuge idéal pendant les orages</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Excursions depuis Bangkok
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">16. Ayutthaya</h3>
          <p>
            L'ancienne capitale du Siam (1h30 en train), classée <strong>UNESCO</strong>, offre des temples-ruines spectaculaires. Le fameux <strong>visage de Bouddha emprisonné dans les racines</strong> (Wat Mahathat) est l'un des clichés les plus iconiques de Thaïlande. Louez un vélo pour explorer le site (50 bahts/jour).
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">17-20. Autres excursions</h3>
          <ul>
            <li><strong>Kanchanaburi</strong> – Le pont de la rivière Kwaï et le parc national d'Erawan avec ses cascades turquoise (3h)</li>
            <li><strong>Pattaya</strong> – Plages et vie nocturne à 2h de route (pas pour tout le monde mais les îles proches sont belles)</li>
            <li><strong>Hua Hin</strong> – Station balnéaire royale à 3h, plus calme et élégante que Pattaya</li>
            <li><strong>Parc national de Khao Yai</strong> – Jungle, éléphants sauvages et cascades à 3h de Bangkok (UNESCO)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Coffee className="h-7 w-7 text-ocean" /> Conseils Pratiques
          </h2>

          <h3 className="text-xl font-bold text-foreground mt-6">Budget quotidien</h3>
          <p>
            Comptez <strong>25-50€/jour</strong> : hébergement (10-30€), repas street food (5-10€/jour), transports (3-5€) et une activité. Bangkok est l'une des capitales les plus abordables du monde. Pour un budget détaillé, consultez notre <Link to="/blog/budget-voyage-thailande" className="text-ocean hover:underline font-medium">guide budget Thaïlande</Link>.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6">Itinéraire suggéré : 4 jours à Bangkok</h3>
          <ul>
            <li><strong>Jour 1</strong> – Grand Palais, Wat Pho, Wat Arun, dîner à Chinatown</li>
            <li><strong>Jour 2</strong> – Chatuchak Market (si week-end), Jim Thompson House, rooftop bar au coucher du soleil</li>
            <li><strong>Jour 3</strong> – Excursion marché flottant le matin, massage thaï l'après-midi, Khao San Road le soir</li>
            <li><strong>Jour 4</strong> – Lumpini Park, shopping à Siam, cours de cuisine thaïe</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Bangkok est une ville qui <strong>ne dort jamais</strong>. Entre les temples scintillants à l'aube et les rooftop bars jusqu'au petit matin, chaque heure offre une facette différente. Pour découvrir le reste de la <Link to="/destinations/thailande" className="text-ocean hover:underline font-medium">Thaïlande</Link>, continuez vers <Link to="/destinations/thailande/chiang-mai" className="text-ocean hover:underline font-medium">Chiang Mai</Link> au nord ou les <Link to="/destinations/thailande/iles-sud-thailande" className="text-ocean hover:underline font-medium">îles du sud</Link>.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi sur Cap sur le Monde
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Thaïlande 10 jours", url: "/blog/itineraire-thailande-10-jours" },
                { label: "Budget voyage Thaïlande", url: "/blog/budget-voyage-thailande" },
                { label: "Quand partir en Thaïlande", url: "/blog/quand-partir-thailande" },
                { label: "Street food en Thaïlande", url: "/guides/street-food-thailande" },
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
                { label: "🇹🇭 Thaïlande", url: "/destinations/thailande" },
                { label: "Bangkok", url: "/destinations/thailande/bangkok" },
                { label: "Chiang Mai", url: "/destinations/thailande/chiang-mai" },
                { label: "Îles du Sud", url: "/destinations/thailande/iles-sud-thailande" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
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

export default QueFaireBangkok;
