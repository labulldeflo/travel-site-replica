import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import OrganiserVoyageBlock from "@/components/affiliate/OrganiserVoyageBlock";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mountain, Clock, DollarSign, Train, Compass, Waves, TreePine } from "lucide-react";
import heroImg from "@/assets/cities/tokyo-excursions.jpg";

const ExcursionsDepuisTokyo = () => {
  const faqs = [
    { question: "Quelle est la meilleure excursion d'une journée depuis Tokyo ?", answer: "Kamakura est souvent considérée comme la meilleure excursion : accessible en 1h, elle offre le Grand Bouddha, de magnifiques temples et une ambiance balnéaire. Nikko est également un choix exceptionnel pour ses sanctuaires spectaculaires." },
    { question: "Peut-on voir le Mont Fuji en une journée depuis Tokyo ?", answer: "Oui ! La région des 5 lacs (Kawaguchiko) est accessible en 2h de bus. Vous pouvez profiter de vues spectaculaires, croisières sur le lac et sources thermales. L'ascension du Fuji nécessite cependant un séjour de nuit (juillet-septembre uniquement)." },
    { question: "Le JR Pass est-il utile pour les excursions ?", answer: "Le JR Pass couvre les trajets vers Kamakura, Nikko, Hakone (partiellement) et Yokohama. Pour une seule excursion, un billet simple est moins cher. Pour 2-3 excursions combinées avec d'autres trajets, le JR Pass devient rentable." },
    { question: "Quelles excursions faire avec des enfants ?", answer: "Hakone (croisière pirate, téléphérique, œufs noirs), Kamakura (plage, Grand Bouddha), Yokohama (Cup Noodles Museum, Chinatown) et Enoshima (aquarium, plage) sont parfaites pour les familles." },
    { question: "Combien de temps faut-il pour chaque excursion ?", answer: "Prévoyez une journée complète pour Nikko, Hakone et le Mont Fuji. Une demi-journée suffit pour Yokohama et Kawagoe. Kamakura peut se faire en demi-journée ou journée complète selon votre rythme." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO hideH1={true}
        title="10 Excursions depuis Tokyo (Guide 2025)"
        description="Les meilleures excursions d'une journée depuis Tokyo : Mont Fuji, Kamakura, Nikko, Hakone. Itinéraires, prix, durées et conseils pratiques."
        image={heroImg}
        ogType="article"
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-10", dateModified: "2025-03-10" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Japon", url: "/destinations/japon" },
          { name: "Excursions Tokyo", url: "/blog/excursions-depuis-tokyo" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img src={heroImg} alt="Excursion au Mont Fuji depuis Tokyo" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-12 text-white">
          <Badge className="mb-4 bg-ocean/80">🗻 Excursions</Badge>
          <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-4">Les 10 Meilleures Excursions depuis Tokyo</h1>
          <p className="text-lg text-white/90 max-w-2xl">Du majestueux Mont Fuji aux temples de Kamakura, découvrez les plus belles escapades à portée de train.</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Résumé */}
        <Card className="p-6 mb-10 border-l-4 border-ocean bg-muted/30">
          <h2 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Compass className="w-5 h-5 text-ocean" /> En résumé</h2>
          <p className="text-muted-foreground">Tokyo est idéalement située pour des excursions d'une journée vers des sites exceptionnels. Le réseau ferroviaire japonais rend ces escapades faciles et agréables, avec des trajets de 30 minutes à 2 heures. Prévoyez un budget de 20 à 80 € par excursion (transport + entrées).</p>
        </Card>

        {/* Mont Fuji */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Mountain className="w-6 h-6 text-ocean" /> Excursions nature et montagne
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Le Mont Fuji et la région des 5 lacs</h3>
          <p className="text-muted-foreground mb-4">Le Mont Fuji (3 776 m) est le symbole du Japon. La région du lac Kawaguchiko offre les plus belles vues sur le volcan sacré. Prenez le bus express depuis Shinjuku (2h, environ 2 000 ¥ / 13 €). Sur place, faites une croisière sur le lac, visitez le sanctuaire Arakurayama Sengen (la pagode Chureito avec le Fuji en arrière-plan est l'un des clichés les plus iconiques du Japon), et détendez-vous dans un onsen avec vue sur le volcan. En été (juillet-septembre), vous pouvez entreprendre l'ascension du Fuji, mais prévoyez alors un séjour de nuit en refuge. La meilleure visibilité est le matin par temps dégagé, préférez les mois d'automne et d'hiver.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Hakone : onsen et panoramas</h3>
          <p className="text-muted-foreground mb-4">Station thermale emblématique à 1h30 de Shinjuku par le Romancecar d'Odakyu (environ 2 300 ¥ / 15 €). Le Hakone Free Pass (6 100 ¥ / 40 € pour 2 jours) inclut le train, le téléphérique, la croisière pirate sur le lac Ashi et les bus. Visitez le musée en plein air de Hakone (sculptures dans la nature), traversez la vallée volcanique d'Owakudani pour goûter les célèbres œufs noirs (qui ajouteraient 7 ans de vie !), et admirez le Fuji depuis le lac. Terminez la journée dans un onsen. Par temps clair, le panorama sur le Fuji depuis le lac Ashi est spectaculaire.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Nikko : splendeur des sanctuaires</h3>
          <p className="text-muted-foreground mb-4">À 2h de Tokyo par le train Tobu (environ 1 400 ¥ / 9 € en express), Nikko abrite le Toshogu, l'un des sanctuaires les plus ornés et spectaculaires du Japon, classé au patrimoine mondial de l'UNESCO. Ce mausolée du shogun Tokugawa Ieyasu est une explosion de couleurs, de sculptures et de feuilles d'or. Ne manquez pas les célèbres trois singes « ne rien voir, ne rien entendre, ne rien dire ». Le pass combiné des temples coûte environ 1 600 ¥ (10 €). En automne, les gorges de Nikko avec les feuillages rouges et or sont un spectacle naturel extraordinaire. Prévoyez une journée complète.</p>
        </section>

        {/* Villes historiques */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-ocean" /> Villes historiques et culturelles
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Kamakura : le Grand Bouddha et la mer</h3>
          <p className="text-muted-foreground mb-4">Ancienne capitale du Japon médiéval, Kamakura est accessible en 1h par la ligne JR Yokosuka depuis Tokyo Station. La ville est célèbre pour son Daibutsu, un Grand Bouddha de bronze de 13 mètres en plein air (300 ¥ / 2 €). Explorez le sanctuaire Tsurugaoka Hachimangu, le temple zen Engaku-ji, et le temple Hase-dera avec sa vue sur l'océan. Le sentier de randonnée Daibutsu entre les temples traverse une forêt de bambous. Terminez la journée sur la plage de Yuigahama. En été, les hortensias du temple Meigetsu-in sont spectaculaires. Budget total : environ 25-35 €.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Kawagoe : la petite Edo</h3>
          <p className="text-muted-foreground mb-4">Surnommée « la petite Edo », Kawagoe conserve des entrepôts marchands (kurazukuri) du XIXe siècle qui évoquent l'époque des shoguns. À seulement 30 minutes de Shinjuku ou Ikebukuro, cette excursion est parfaite pour une demi-journée. Promenez-vous dans Ichiban-gai, écoutez la cloche de la tour Toki no Kane, et perdez-vous dans Kashiya Yokocho (la ruelle des bonbons). Essayez les spécialités à la patate douce, omniprésentes ici. Trajet + visites : environ 15-20 €.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6. Yokohama : Chinatown et port moderne</h3>
          <p className="text-muted-foreground mb-4">La deuxième ville du Japon est à seulement 30 minutes en train de Tokyo. Le Chinatown de Yokohama est le plus grand du Japon avec plus de 500 restaurants. Visitez le musée Cup Noodles (créez votre propre saveur pour 500 ¥), promenez-vous sur le front de mer Minato Mirai avec ses gratte-ciel et sa grande roue, et découvrez le jardin Sankeien. Le soir, la skyline illuminée est magnifique. Budget journée : 20-40 €.</p>
        </section>

        {/* Nature */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <TreePine className="w-6 h-6 text-ocean" /> Escapades nature
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7. Enoshima : île sacrée et plages</h3>
          <p className="text-muted-foreground mb-4">Cette petite île reliée au continent par un pont est un mélange charmant de sanctuaires, grottes marines et restaurants de fruits de mer. Accessible en 1h15 depuis Shinjuku via la ligne Odakyu. Montez au sommet du Samuel Cocking Garden pour la vue panoramique, explorez les grottes d'Iwaya et dégustez du shirasu (blanchailles) frais. Combinée avec Kamakura, c'est l'excursion idéale d'une journée complète.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8. Vallée de Chichibu et Nagatoro</h3>
          <p className="text-muted-foreground mb-4">À 1h30 en train de Ikebukuro, cette vallée offre une expérience de nature sauvage étonnamment proche de Tokyo. Descendez les rapides de la rivière Arakawa en bateau traditionnel, randonnez jusqu'au sanctuaire Mitsumine perché dans la montagne, et visitez le temple Hodosan. En hiver, les illuminations de glace de Chichibu sont féériques. Budget : 25-40 €.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9. Mont Takao : randonnée accessible</h3>
          <p className="text-muted-foreground mb-4">À seulement 50 minutes de Shinjuku par la ligne Keio (390 ¥ / 2,5 €), le Mont Takao (599 m) est la randonnée la plus accessible depuis Tokyo. Plusieurs sentiers de difficulté variable mènent au sommet, où un temple et des vues sur le Fuji vous attendent. Un téléphérique permet de raccourcir la montée. Les soba (nouilles de sarrasin) au sommet sont réputées. Parfait pour une demi-journée active.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10. Atami : station balnéaire thermale</h3>
          <p className="text-muted-foreground mb-4">Cette station balnéaire historique sur la péninsule d'Izu est à 45 minutes en Shinkansen de Tokyo. Les onsen en bord de mer, le musée MOA avec sa collection d'art japonais et les jardins de pruniers (en février) en font une escapade relaxante. L'Akao Herb & Rose Garden offre des terrasses instagrammables au-dessus de l'océan. Budget : 30-50 € (hors Shinkansen, couvert par JR Pass).</p>
        </section>

        {/* Tableau comparatif */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-ocean" /> Comparatif des excursions
          </h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Destination</TableHead>
                  <TableHead>Trajet</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Durée</TableHead>
                  <TableHead>JR Pass</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Mont Fuji / Kawaguchiko", "2h (bus)", "30-50 €", "Journée", "Non"],
                  ["Hakone", "1h30 (train)", "40-60 €", "1-2 jours", "Partiel"],
                  ["Nikko", "2h (train)", "25-40 €", "Journée", "Oui"],
                  ["Kamakura", "1h (train)", "25-35 €", "½-1 jour", "Oui"],
                  ["Kawagoe", "30 min (train)", "15-20 €", "½ jour", "Non"],
                  ["Yokohama", "30 min (train)", "20-40 €", "½-1 jour", "Oui"],
                  ["Enoshima", "1h15 (train)", "20-30 €", "½ jour", "Non"],
                  ["Chichibu", "1h30 (train)", "25-40 €", "Journée", "Non"],
                  ["Mont Takao", "50 min (train)", "10-15 €", "½ jour", "Non"],
                  ["Atami", "45 min (Shinkansen)", "30-50 €", "½-1 jour", "Oui"],
                ].map(([dest, trajet, budget, duree, jr], i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{dest}</TableCell>
                    <TableCell>{trajet}</TableCell>
                    <TableCell>{budget}</TableCell>
                    <TableCell>{duree}</TableCell>
                    <TableCell>{jr}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Conseils pratiques */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 flex items-center gap-2">
            <Train className="w-6 h-6 text-ocean" /> Conseils pratiques
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "🎫 JR Pass", text: "Si vous prévoyez 2-3 excursions + des trajets longue distance, le JR Pass est rentable. Sinon, achetez des billets à l'unité. Le Hakone Free Pass est indépendant du JR Pass." },
              { title: "⏰ Horaires", text: "Partez tôt (7h-8h) pour maximiser votre temps sur place. Les premiers trains offrent généralement des places assises. Vérifiez les horaires sur Hyperdia ou Google Maps." },
              { title: "🎒 À emporter", text: "Prévoyez de bonnes chaussures de marche, un parapluie compact (météo changeante) et de l'argent liquide (beaucoup de sites n'acceptent pas la carte). Un IC card (Suica/Pasmo) est indispensable." },
              { title: "📅 Meilleure période", text: "Printemps (cerisiers) et automne (feuillages) sont les plus beaux. L'été est chaud et humide mais parfait pour le Mont Fuji. L'hiver offre la meilleure visibilité sur le Fuji et des onsen en plein air sous la neige." },
            ].map((tip, i) => (
              <Card key={i} className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.text}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Affiliation */}
        <OrganiserVoyageBlock destination="Tokyo" showActivites showHotel showVols={false} showEsim variant="compact" />

        {/* FAQ */}
        <FAQSection faqs={faqs} className="mb-12" />

        {/* Articles liés */}
        <section className="mb-12">
          <h2 className="text-2xl font-elegant font-bold text-foreground mb-6">📚 Articles liés sur le Japon</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { to: "/blog/meilleures-activites-tokyo", label: "🎯 Meilleures activités à Tokyo" },
              { to: "/blog/que-faire-tokyo", label: "🏯 Que faire à Tokyo" },
              { to: "/blog/jr-pass-japon", label: "🎫 Guide JR Pass" },
              { to: "/blog/comment-deplacer-japon", label: "🚅 Se déplacer au Japon" },
              { to: "/blog/guide-complet-japon", label: "🇯🇵 Guide complet Japon" },
              { to: "/blog/itineraire-japon-7-jours", label: "📋 Itinéraire 7 jours" },
            ].map((link, i) => (
              <Link key={i} to={link.to} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-muted/30 transition-all text-sm font-medium text-foreground hover:text-ocean">
                <MapPin className="w-4 h-4 text-ocean shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default ExcursionsDepuisTokyo;
