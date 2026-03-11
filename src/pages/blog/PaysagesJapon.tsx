import React from "react";import Header from "@/components/Header";import Footer from "@/components/Footer";import SEO from "@/components/SEO";import FAQSection from "@/components/FAQSection";import { OrganiserVoyageBlock } from "@/components/affiliate";import { Link } from "react-router-dom";import { Button } from "@/components/ui/button";import { Calendar, MapPin, Clock, Compass, Camera } from "lucide-react";import japonImage from "@/assets/destinations/japon.jpg";
const PaysagesJapon = () => {
  const faqs = [
    { question: "Quel est le plus beau paysage du Japon ?", answer: "Le Mont Fuji vu depuis le lac Kawaguchiko est emblématique. Mais les gorges de Takachiho, la mer de nuages de Tomamu et les bambous d'Arashiyama sont tout aussi spectaculaires." },
    { question: "Quand voir les plus beaux paysages ?", answer: "Chaque saison offre des paysages uniques : cerisiers au printemps, rizières vertes en été, érables en automne, neige en hiver." },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Les Plus Beaux Paysages du Japon : Top 15" description="Découvrez les 15 plus beaux paysages du Japon. Mont Fuji, forêt de bambous, rizières en terrasses, îles tropicales : guide photo avec conseils de visite." image={japonImage} ogType="article" hideH1 articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-02" }} breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Paysages Japon", url: "/blog/paysages-japon" }]} />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}><div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" /><div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10"><div className="text-white max-w-4xl"><span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Inspiration</span><h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Les Plus Beaux Paysages du Japon</h1><p className="text-xl text-white/90">15 paysages à couper le souffle du nord au sud</p><div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90"><span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 2 juillet 2025</span><span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 12 min de lecture</span></div></div></div></header>
        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">Le Japon s'étend sur <strong>3 000 km du nord au sud</strong>, offrant une diversité de paysages stupéfiante : volcans enneigés, forêts primaires, côtes découpées, rizières en terrasses et plages tropicales. Ce guide sélectionne les <strong>15 panoramas les plus spectaculaires</strong> du pays.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Montagnes et Volcans</h2>
          <h3 className="text-xl font-bold mt-6">1. Mont Fuji ⭐</h3>
          <p>Le symbole du Japon (3 776m). Les meilleures vues : <strong>lac Kawaguchiko</strong> (reflet parfait), pagode Chureito (cerisiers + Fuji), Hakone. Ascension possible en juillet-août.</p>
          <h3 className="text-xl font-bold mt-6">2. Alpes Japonaises</h3>
          <p>Chaîne de montagnes spectaculaire au centre de Honshu. <strong>Kamikochi</strong> : vallée alpine paradisiaque. <strong>Route alpine Tateyama-Kurobe</strong> : mur de neige de 20m au printemps.</p>
          <h3 className="text-xl font-bold mt-6">3. Mont Aso (Kyushu)</h3>
          <p>Le plus grand volcan actif du Japon avec sa caldeira de 25 km. Paysage lunaire et fumerolles.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Forêts et Nature</h2>
          <h3 className="text-xl font-bold mt-6">4. Forêt de Bambous d'Arashiyama (Kyoto)</h3>
          <p>Cathédrale naturelle de bambous géants, classée « paysage sonore » à préserver. Gratuit.</p>
          <h3 className="text-xl font-bold mt-6">5. Yakushima</h3>
          <p>Forêt primaire UNESCO avec des cèdres millénaires (Jomon Sugi : 7 000 ans). L'île qui a inspiré Princesse Mononoké.</p>
          <h3 className="text-xl font-bold mt-6">6. Jigokudani (Nagano)</h3>
          <p>Les célèbres <strong>singes des neiges</strong> se baignant dans les sources chaudes en hiver. Image iconique du Japon.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Camera className="h-7 w-7 text-ocean" /> Côtes et Îles</h2>
          <h3 className="text-xl font-bold mt-6">7. Mer intérieure de Seto</h3>
          <p>Archipel de 3 000 îles entre Honshu et Shikoku. Art contemporain sur Naoshima et Teshima. Traversées en ferry pittoresques.</p>
          <h3 className="text-xl font-bold mt-6">8. Gorges de Takachiho (Kyushu)</h3>
          <p>Gorges volcaniques profondes avec cascades et promenades en barque. Paysage surréaliste.</p>
          <h3 className="text-xl font-bold mt-6">9-15. Autres merveilles</h3>
          <ul>
            <li><strong>9. Champs de lavande de Furano</strong> (Hokkaido, juillet)</li>
            <li><strong>10. Rizières en terrasses de Shirakawa-go</strong> (Alpes, village UNESCO)</li>
            <li><strong>11. Lac Mashu</strong> (Hokkaido, l'un des lacs les plus clairs au monde)</li>
            <li><strong>12. Miyajima et son torii flottant</strong></li>
            <li><strong>13. Côte de Sanriku</strong> (Tohoku, falaises spectaculaires)</li>
            <li><strong>14. Okinawa</strong> (plages tropicales et récifs coralliens)</li>
            <li><strong>15. Vallée de l'enfer de Noboribetsu</strong> (Hokkaido, fumerolles volcaniques)</li>
          </ul>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean"><p className="text-lg text-foreground italic leading-relaxed">Le Japon prouve que <strong>nature et civilisation peuvent coexister en harmonie</strong>. Chaque paysage est soigneusement préservé, chaque sentier balisé, chaque point de vue aménagé avec respect. C'est cette attention au détail qui rend les paysages japonais si exceptionnels.</p></div>
          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Japon" showVols showHotel showActivites />
          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border"><h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3><div className="grid gap-2 sm:grid-cols-2">{[{ label: "Guide complet du Japon", url: "/blog/guide-complet-japon" }, { label: "Temples du Japon", url: "/blog/temples-japon" }, { label: "Villages traditionnels", url: "/blog/villages-traditionnels-japon" }, { label: "Quand partir au Japon", url: "/blog/quand-partir-japon" }].map((link, idx) => (<Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>))}</div></div>
          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20"><h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations</h3><div className="flex flex-wrap gap-2">{[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((d, i) => (<Link key={i} to={d.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{d.label}</Link>))}</div></div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4"><Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link></Button><Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button></div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default PaysagesJapon;
