import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Camera, Coffee, Star, Utensils } from "lucide-react";
import kyotoImage from "@/assets/cities/kyoto.jpg";

const QueFaireKyoto = () => {
  const faqs = [
    { question: "Combien de jours pour visiter Kyoto ?", answer: "3 à 4 jours sont idéaux pour découvrir les temples principaux, le quartier de Gion et Arashiyama. Avec 5 jours, vous pourrez ajouter des excursions à Nara et Uji." },
    { question: "Kyoto est-elle chère ?", answer: "Kyoto est comparable à Tokyo en termes de prix. L'hébergement coûte 40-120€/nuit, les repas 7-15€ et la plupart des temples 3-6€. Un ryokan avec dîner kaiseki coûte 100-300€." },
    { question: "Quelle est la meilleure saison pour Kyoto ?", answer: "Le printemps (fin mars-mi avril) pour les cerisiers et l'automne (mi-novembre à début décembre) pour les érables sont spectaculaires. L'hiver est aussi charmant avec les temples enneigés." },
    { question: "Faut-il louer un kimono à Kyoto ?", answer: "C'est une expérience très populaire et recommandée ! Location de kimono à partir de 3 000¥ (~20€) pour la journée. Les boutiques de Higashiyama sont les plus pratiques." },
    { question: "Comment se déplacer à Kyoto ?", answer: "Le bus est le moyen le plus pratique (pass journalier 700¥). Le vélo est aussi excellent pour le centre-ville. Le métro a seulement 2 lignes mais couvre les axes principaux." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Que Faire à Kyoto : 25 Activités Incontournables"
        description="Guide pratique des 25 meilleures activités à Kyoto : temples, jardins zen, geishas, forêt de bambous. Prix, horaires et conseils pour visiter l'ancienne capitale du Japon."
        image={kyotoImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-16" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Que Faire à Kyoto", url: "/blog/que-faire-kyoto" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${kyotoImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Que Faire</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Que Faire à Kyoto : 25 Activités Incontournables
              </h1>
              <p className="text-xl text-white/90">Temples, jardins zen, geishas : le guide pratique de l'ancienne capitale impériale</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 16 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 14 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Kyoto est l'<strong>âme spirituelle du Japon</strong>. Ancienne capitale impériale pendant plus de mille ans (794-1868), la ville abrite <strong>plus de 2 000 temples et sanctuaires</strong>, dont 17 classés au patrimoine mondial de l'UNESCO. Des allées de torii vermillon de Fushimi Inari aux jardins zen de Ryoan-ji, Kyoto offre un voyage dans le temps qui reste gravé à jamais.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Star className="h-7 w-7 text-ocean" /> Les Temples et Sanctuaires Majeurs
          </h2>

          <h3 className="text-xl font-bold mt-6">1. Fushimi Inari Taisha ⭐</h3>
          <p>Le site le plus visité de Kyoto : <strong>10 000 torii vermillon</strong> forment un tunnel serpentant à travers la montagne Inari. La montée complète prend 2-3 heures, mais le premier tronçon (30 min) suffit pour de magnifiques photos.</p>
          <ul>
            <li><strong>Prix</strong> : Gratuit</li>
            <li><strong>Horaires</strong> : Ouvert 24h/24</li>
            <li><strong>Astuce</strong> : Arrivez avant 7h ou après 17h pour éviter la foule</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">2. Kinkaku-ji (Pavillon d'Or)</h3>
          <p>Ce temple recouvert de <strong>feuilles d'or</strong> se reflétant dans un étang est l'image emblématique de Kyoto. Le jardin est magnifique en toute saison.</p>
          <ul>
            <li><strong>Prix</strong> : 400¥ (~2,50€)</li>
            <li><strong>Horaires</strong> : 9h-17h</li>
            <li><strong>Astuce</strong> : Arrivez dès l'ouverture, la lumière du matin est parfaite pour les photos</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">3. Kiyomizu-dera</h3>
          <p>Perché sur une colline, ce temple offre une <strong>vue panoramique spectaculaire</strong> sur Kyoto depuis sa terrasse en bois. La montée par les ruelles commerçantes de Higashiyama fait partie de l'expérience.</p>
          <ul>
            <li><strong>Prix</strong> : 400¥</li>
            <li><strong>Horaires</strong> : 6h-18h (illuminations nocturnes en saison)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">4. Ryoan-ji – Le jardin zen</h3>
          <p>Le plus célèbre <strong>jardin de pierres</strong> du monde : 15 rochers disposés sur du gravier blanc. Un lieu de méditation et de contemplation absolue.</p>
          <ul>
            <li><strong>Prix</strong> : 500¥</li>
            <li><strong>Horaires</strong> : 8h-17h</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">5. Ginkaku-ji (Pavillon d'Argent)</h3>
          <p>Malgré son nom, ce temple n'est pas argenté mais entouré de <strong>jardins d'une beauté raffinée</strong>. Le « jardin de sable de la mer d'argent » est hypnotisant.</p>
          <ul>
            <li><strong>Prix</strong> : 500¥</li>
            <li><strong>Astuce</strong> : Empruntez le <strong>Chemin de la Philosophie</strong> qui mène au temple (2 km de promenade zen)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Camera className="h-7 w-7 text-ocean" /> Expériences Culturelles
          </h2>

          <h3 className="text-xl font-bold mt-6">6. Forêt de Bambous d'Arashiyama ⭐</h3>
          <p>Marcher dans cette <strong>cathédrale naturelle de bambous géants</strong> est une expérience surréaliste. Le bruissement du vent dans les tiges est classé « paysage sonore » à préserver.</p>
          <ul>
            <li><strong>Prix</strong> : Gratuit</li>
            <li><strong>Astuce</strong> : Arrivez avant 8h pour avoir l'allée quasi déserte</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">7. Quartier de Gion – Les Geishas</h3>
          <p>Le quartier historique des <strong>geiko</strong> (geishas de Kyoto) et <strong>maiko</strong> (apprenties). Promenez-vous dans Hanamikoji-dori au crépuscule pour espérer croiser une geiko se rendant à un rendez-vous.</p>
          <ul>
            <li><strong>Prix</strong> : Gratuit (respectez la vie privée des geiko – pas de photos intrusives)</li>
            <li><strong>Astuce</strong> : Les spectacles de danse geiko au <strong>Gion Corner</strong> (3 150¥) offrent une introduction à la culture traditionnelle</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">8. Cérémonie du Thé</h3>
          <p>Participez à une <strong>cérémonie du thé authentique</strong> (chado) dans une maison de thé traditionnelle. Un moment de grâce et de sérénité.</p>
          <ul>
            <li><strong>Prix</strong> : 2 000-4 000¥ (13-26€)</li>
            <li><strong>Durée</strong> : 45 min à 1h30</li>
            <li><strong>Où</strong> : Camellia, En, ou Jotokuji Temple</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">9. Location de Kimono</h3>
          <p>Louez un <strong>kimono</strong> pour la journée et promenez-vous dans les quartiers historiques. C'est une tradition locale, pas un déguisement touristique – les Japonais le font aussi.</p>
          <ul>
            <li><strong>Prix</strong> : 3 000-5 000¥ (20-33€) avec coiffure</li>
            <li><strong>Où</strong> : Yumeyakata, Okamoto Kimono (Higashiyama)</li>
          </ul>

          <h3 className="text-xl font-bold mt-6">10. Nishiki Market – La cuisine de Kyoto</h3>
          <p>Ce marché couvert de <strong>400 mètres de long</strong> est le paradis des gourmands : pickles, tofu frais, mochi, brochettes de poulpe, sake... Plus de 100 étals.</p>
          <ul>
            <li><strong>Prix</strong> : Gratuit (dégustations 100-500¥ par étal)</li>
            <li><strong>Horaires</strong> : 9h-17h (certains étals ferment plus tôt)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Quartiers et Promenades
          </h2>

          <h3 className="text-xl font-bold mt-6">11. Higashiyama – Le vieux Kyoto</h3>
          <p>Le quartier le plus pittoresque avec ses <strong>ruelles pavées</strong>, maisons en bois et boutiques traditionnelles. Les rues Ninenzaka et Sannenzaka mènent au Kiyomizu-dera.</p>

          <h3 className="text-xl font-bold mt-6">12. Chemin de la Philosophie</h3>
          <p>Promenade de <strong>2 km le long d'un canal</strong> bordé de cerisiers, du Ginkaku-ji au Nanzen-ji. Magnifique au printemps (cerisiers) et en automne (érables).</p>

          <h3 className="text-xl font-bold mt-6">13. Arashiyama au-delà des Bambous</h3>
          <p>Le quartier offre bien plus que la forêt : <strong>temple Tenryu-ji</strong> (500¥, jardin UNESCO), <strong>pont Togetsukyo</strong>, <strong>temple des singes Iwatayama</strong> (550¥, vue panoramique), <strong>train romantique Sagano</strong> (880¥).</p>

          <h3 className="text-xl font-bold mt-6">14. Pontocho – Dîner au bord de l'eau</h3>
          <p>Cette ruelle étroite le long de la rivière Kamogawa abrite des restaurants avec <strong>terrasses sur l'eau</strong> (yuka) l'été. Ambiance magique au crépuscule.</p>

          <h3 className="text-xl font-bold mt-6">15. Sagano – Les rizières et temples cachés</h3>
          <p>Au-delà de la forêt de bambous, continuez vers les <strong>rizières en terrasses</strong>, le temple <strong>Gio-ji</strong> (300¥, tapis de mousse) et le temple <strong>Adashino Nenbutsu-ji</strong> (500¥, 8 000 statues de pierre).</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Utensils className="h-7 w-7 text-ocean" /> Gastronomie Kyotoïte
          </h2>

          <h3 className="text-xl font-bold mt-6">16. Cuisine Kaiseki</h3>
          <p>L'art culinaire le plus raffiné du Japon : un repas de <strong>6 à 12 plats miniatures</strong> mettant en valeur la saison. Une expérience gastronomique unique (5 000-30 000¥).</p>

          <h3 className="text-xl font-bold mt-6">17. Tofu de Kyoto</h3>
          <p>Kyoto est célèbre pour son <strong>tofu artisanal</strong> (yudofu). Les restaurants autour de Nanzen-ji servent du yudofu dans un cadre zen (2 000-3 000¥).</p>

          <h3 className="text-xl font-bold mt-6">18. Matcha sous toutes ses formes</h3>
          <p>Kyoto (et surtout la ville voisine d'<strong>Uji</strong>) produit le meilleur matcha du Japon. Glaces, parfaits, gâteaux – tout est au matcha ici. La maison <strong>Tsujiri</strong> est incontournable.</p>

          <h3 className="text-xl font-bold mt-6">19-25. Autres incontournables</h3>
          <ul>
            <li><strong>19. Nanzen-ji</strong> (500¥) : aqueduc en briques et jardin zen</li>
            <li><strong>20. Tofuku-ji</strong> (400¥) : le meilleur spot pour les érables d'automne</li>
            <li><strong>21. Sanctuaire Kitano Tenmangu</strong> : marché aux puces le 25 de chaque mois</li>
            <li><strong>22. Musée du Manga</strong> (900¥) : 300 000 mangas dans une ancienne école</li>
            <li><strong>23. Excursion à Uji</strong> : temple Byodo-in (600¥) et dégustation de matcha</li>
            <li><strong>24. Nuit en ryokan</strong> : futon, tatami et onsen (8 000-30 000¥)</li>
            <li><strong>25. Festival saisonnier</strong> : Gion Matsuri (juillet), Gozan no Okuribi (août), Hanatoro (décembre)</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Kyoto est une ville qui se <strong>découvre à pied, à vélo ou en bus</strong>. Chaque ruelle, chaque jardin, chaque tasse de matcha est une invitation à ralentir. Prenez le temps de vous perdre dans Higashiyama au crépuscule – c'est souvent là que la magie opère.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Kyoto" showVols showHotel showActivites />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" },
                { label: "Itinéraire Japon 7 jours", url: "/blog/itineraire-japon-7-jours" },
                { label: "Que faire à Osaka", url: "/blog/que-faire-osaka" },
                { label: "Que faire à Nara", url: "/blog/que-faire-nara" },
                { label: "Meilleurs hôtels à Kyoto", url: "/blog/meilleurs-hotels-kyoto" },
                { label: "Meilleures activités Kyoto", url: "/blog/meilleures-activites-kyoto" },
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

export default QueFaireKyoto;
