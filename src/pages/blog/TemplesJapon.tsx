import React from "react";import Header from "@/components/Header";import Footer from "@/components/Footer";import SEO from "@/components/SEO";import FAQSection from "@/components/FAQSection";import { OrganiserVoyageBlock } from "@/components/affiliate";import { Link } from "react-router-dom";import { Button } from "@/components/ui/button";import { Calendar, MapPin, Clock, Compass, Camera } from "lucide-react";import japonImage from "@/assets/destinations/japon.jpg";
const TemplesJapon = () => {
  const faqs = [
    { question: "Quelle est la différence entre un temple et un sanctuaire ?", answer: "Les temples (tera/ji) sont bouddhistes et les sanctuaires (jinja) sont shinto. Les temples ont un portail en bois (sanmon), les sanctuaires ont un torii (portail vermillon). Au Japon, les deux coexistent harmonieusement." },
    { question: "Faut-il payer pour visiter les temples ?", answer: "Beaucoup sont gratuits. Les plus célèbres demandent 300-600¥ (2-4€). Les jardins et musées annexes sont parfois en supplément." },
    { question: "Comment se comporter dans un temple ?", answer: "Retirez vos chaussures à l'entrée des bâtiments, parlez à voix basse, ne photographiez pas les zones interdites, et faites une légère révérence devant les autels." },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Les Plus Beaux Temples du Japon : Top 20" description="Découvrez les 20 plus beaux temples et sanctuaires du Japon. De Fushimi Inari à Kinkaku-ji, guide avec photos, prix et conseils pour chaque temple." image={japonImage} ogType="article" hideH1 articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-01" }} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Temples du Japon", url: "/blog/temples-japon" }]} />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}><div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" /><div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10"><div className="text-white max-w-4xl"><span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Inspiration</span><h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Les Plus Beaux Temples du Japon</h1><p className="text-xl text-white/90">20 temples et sanctuaires à voir absolument</p><div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90"><span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 1 juillet 2025</span><span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 14 min de lecture</span></div></div></div></header>
        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">Le Japon compte plus de <strong>80 000 temples bouddhistes et 100 000 sanctuaires shinto</strong>. Des allées infinies de torii vermillon aux jardins zen de pierres, chaque édifice raconte une histoire millénaire. Ce guide sélectionne les <strong>20 plus beaux temples et sanctuaires</strong> à ne pas manquer.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Kyoto – La Capitale Spirituelle</h2>
          <h3 className="text-xl font-bold mt-6">1. Fushimi Inari Taisha ⭐</h3>
          <p>10 000 torii vermillon serpentant sur la montagne Inari. Le sanctuaire le plus visité du Japon. Gratuit, ouvert 24h/24. Arrivez avant 7h pour l'avoir quasi seul.</p>
          <h3 className="text-xl font-bold mt-6">2. Kinkaku-ji (Pavillon d'Or)</h3>
          <p>Temple recouvert de feuilles d'or se reflétant dans un étang. Image emblématique de Kyoto. 400¥, 9h-17h.</p>
          <h3 className="text-xl font-bold mt-6">3. Kiyomizu-dera</h3>
          <p>Terrasse en bois surplombant Kyoto, sans aucun clou. Vue panoramique spectaculaire. 400¥. Illuminations nocturnes en saison.</p>
          <h3 className="text-xl font-bold mt-6">4. Ryoan-ji</h3>
          <p>Le plus célèbre jardin zen de pierres : 15 rochers sur gravier blanc. Méditation contemplative. 500¥.</p>
          <h3 className="text-xl font-bold mt-6">5. Ginkaku-ji (Pavillon d'Argent)</h3>
          <p>Jardin de sable et mousse d'une beauté raffinée. Point de départ du Chemin de la Philosophie. 500¥.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Nara et Kansai</h2>
          <h3 className="text-xl font-bold mt-6">6. Todai-ji (Nara) ⭐</h3>
          <p>Plus grand bâtiment en bois du monde, abritant un Bouddha de 15m. 600¥.</p>
          <h3 className="text-xl font-bold mt-6">7. Kasuga-taisha (Nara)</h3>
          <p>3 000 lanternes de pierre et de bronze créant une atmosphère mystique. Gratuit (enceinte intérieure 500¥).</p>
          <h3 className="text-xl font-bold mt-6">8. Horyuji (Nara)</h3>
          <p>Plus ancien ensemble de bâtiments en bois du monde (607). UNESCO. 1 500¥.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Tokyo et Kantō</h2>
          <h3 className="text-xl font-bold mt-6">9. Senso-ji (Tokyo)</h3>
          <p>Le plus ancien temple de Tokyo (645). La porte Kaminarimon et la rue Nakamise sont iconiques. Gratuit.</p>
          <h3 className="text-xl font-bold mt-6">10. Meiji-jingu (Tokyo)</h3>
          <p>Sanctuaire shinto majestueux en pleine forêt au cœur de Tokyo. Gratuit.</p>
          <h3 className="text-xl font-bold mt-6">11. Kamakura Daibutsu</h3>
          <p>Grand Bouddha en bronze de 13m en plein air. Ambiance plus intime que celui de Nara. 300¥.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Ailleurs au Japon</h2>
          <h3 className="text-xl font-bold mt-6">12. Itsukushima (Miyajima)</h3>
          <p>Le torii flottant dans la mer, l'une des trois plus belles vues du Japon. 300¥.</p>
          <h3 className="text-xl font-bold mt-6">13. Koyasan (Mont Koya)</h3>
          <p>Centre du bouddhisme Shingon, cimetière Okunoin aux 200 000 tombes dans une forêt de cèdres géants. Gratuit.</p>
          <h3 className="text-xl font-bold mt-6">14-20. Autres trésors</h3>
          <ul>
            <li><strong>14. Nikko Toshogu</strong> : sanctuaire orné de 2,5 millions de feuilles d'or. UNESCO. 1 300¥</li>
            <li><strong>15. Byodo-in (Uji)</strong> : le temple figurant sur la pièce de 10¥. 600¥</li>
            <li><strong>16. Nanzen-ji (Kyoto)</strong> : aqueduc en briques et jardin zen. 500¥</li>
            <li><strong>17. Tofuku-ji (Kyoto)</strong> : meilleur spot pour les érables d'automne. 400¥</li>
            <li><strong>18. Daibutsu de Kamakura</strong> : Bouddha en plein air. 300¥</li>
            <li><strong>19. Ise-jingu (Mie)</strong> : le sanctuaire shinto le plus sacré du Japon, reconstruit tous les 20 ans</li>
            <li><strong>20. Zenko-ji (Nagano)</strong> : l'un des plus anciens temples du Japon, pèlerinage important</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean"><p className="text-lg text-foreground italic leading-relaxed">Les temples japonais ne sont pas des monuments figés mais des <strong>lieux vivants</strong> où les moines méditent, les fidèles prient et les visiteurs trouvent la paix. Prenez le temps de vous asseoir, de contempler un jardin zen et de laisser le silence vous envahir.</p></div>
          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Japon" showVols showHotel showActivites />
          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border"><h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3><div className="grid gap-2 sm:grid-cols-2">{[{ label: "Guide complet du Japon", url: "/blog/guide-complet-japon" }, { label: "Que faire à Kyoto", url: "/blog/que-faire-kyoto" }, { label: "Châteaux japonais", url: "/blog/chateaux-japon" }, { label: "Villages traditionnels", url: "/blog/villages-traditionnels-japon" }].map((link, idx) => (<Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>))}</div></div>
          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20"><h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations</h3><div className="flex flex-wrap gap-2">{[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((d, i) => (<Link key={i} to={d.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{d.label}</Link>))}</div></div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4"><Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link></Button><Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button></div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default TemplesJapon;
