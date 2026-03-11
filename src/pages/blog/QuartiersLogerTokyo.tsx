import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Home, DollarSign } from "lucide-react";
import tokyoImage from "@/assets/cities/tokyo.jpg";

const QuartiersLogerTokyo = () => {
  const faqs = [
    { question: "Quel est le meilleur quartier pour un premier voyage à Tokyo ?", answer: "Shinjuku est le choix le plus pratique : accès direct au JR Pass, gare la plus fréquentée du monde, restaurants, bars et proximité de tous les quartiers." },
    { question: "Shibuya ou Shinjuku ?", answer: "Shinjuku est plus pratique (meilleur hub de transport), Shibuya est plus branché et animé. Les deux sont excellents – c'est une question de préférence." },
    { question: "Faut-il loger près d'une gare ?", answer: "Oui, c'est essentiel à Tokyo. Être à moins de 5 min à pied d'une station de métro ou JR vous fera économiser un temps considérable." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Meilleurs Quartiers où Loger à Tokyo : Guide"
        description="Guide des meilleurs quartiers où dormir à Tokyo. Shinjuku, Shibuya, Asakusa, Ginza : comparatif, ambiance, prix et recommandations d'hôtels pour chaque quartier."
        image={tokyoImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-25" }}
        breadcrumbs={[{ name: "Accueil", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Quartiers Tokyo", url: "/blog/quartiers-loger-tokyo" }]}
      />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${tokyoImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Hébergement</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Les Meilleurs Quartiers où Loger à Tokyo</h1>
              <p className="text-xl text-white/90">Shinjuku, Shibuya, Asakusa : quel quartier choisir selon votre profil</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 25 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11 min de lecture</span>
              </div>
            </div>
          </div>
        </header>
        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Tokyo est une <strong>mégalopole tentaculaire</strong> de 14 millions d'habitants, et le choix du quartier peut transformer votre expérience. Chaque arrondissement a sa personnalité : Shinjuku la nocturne, Shibuya la branchée, Asakusa la traditionnelle, Ginza la chic. Ce guide compare les <strong>meilleurs quartiers</strong> selon votre budget, vos centres d'intérêt et votre style de voyage.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> 1. Shinjuku – Le Hub Idéal ⭐</h2>
          <p><strong>Pour qui</strong> : premier voyage, accès facile à tout Tokyo et au JR Pass</p>
          <p>Shinjuku abrite la <strong>gare la plus fréquentée du monde</strong> (3,5 millions de passagers/jour). C'est le hub central du réseau JR et de nombreuses lignes de métro. Le quartier est vivant 24h/24 avec Kabukicho (vie nocturne), Golden Gai (bars miniatures) et Omoide Yokocho (yakitori).</p>
          <ul>
            <li><strong>Budget</strong> : Business hotel 60-100€, hôtel confort 100-200€</li>
            <li><strong>Avantages</strong> : transport optimal, vie nocturne, shopping</li>
            <li><strong>Inconvénients</strong> : bruyant, quartier rouge à proximité</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> 2. Shibuya – Branché et Animé</h2>
          <p><strong>Pour qui</strong> : jeunes voyageurs, amateurs de mode et culture pop</p>
          <p>Le célèbre <strong>carrefour de Shibuya</strong>, Shibuya Sky, Cat Street, Harajuku tout près. Ambiance jeune, dynamique et très photogénique.</p>
          <ul>
            <li><strong>Budget</strong> : 70-120€ (business), 120-250€ (confort)</li>
            <li><strong>Avantages</strong> : ambiance unique, shopping, restaurants tendance</li>
            <li><strong>Inconvénients</strong> : foule constante, prix légèrement plus élevés</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> 3. Asakusa – Le Tokyo Traditionnel</h2>
          <p><strong>Pour qui</strong> : amateurs de culture, budget modéré, ambiance calme</p>
          <p>Le quartier du <strong>Senso-ji</strong>, des rues commerçantes traditionnelles et du Tokyo Skytree. Ambiance plus locale et paisible que le centre-ouest.</p>
          <ul>
            <li><strong>Budget</strong> : 40-80€ (budget), 80-150€ (confort)</li>
            <li><strong>Avantages</strong> : prix bas, atmosphère authentique, Senso-ji à pied</li>
            <li><strong>Inconvénients</strong> : plus éloigné des quartiers ouest (Shibuya, Shinjuku)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> 4. Ginza – Le Luxe</h2>
          <p><strong>Pour qui</strong> : voyageurs cherchant le raffinement, couples, shopping haut de gamme</p>
          <p>Les Champs-Élysées de Tokyo : boutiques de luxe, galeries d'art, restaurants étoilés, théâtre Kabuki.</p>
          <ul>
            <li><strong>Budget</strong> : 100-200€ (milieu), 200-500€ (luxe)</li>
            <li><strong>Avantages</strong> : élégant, calme le soir, excellents restaurants</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> 5-7. Autres Quartiers</h2>
          <ul>
            <li><strong>5. Ueno</strong> (40-80€) : musées, parc, marché Ameyoko – bon rapport qualité-prix</li>
            <li><strong>6. Akihabara</strong> (50-90€) : paradis otaku, électronique, arcades – pour les fans de culture pop</li>
            <li><strong>7. Roppongi</strong> (80-200€) : vie nocturne internationale, Mori Tower – pour les noctambules</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><DollarSign className="h-7 w-7 text-ocean" /> Comparatif Rapide</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Quartier</th><th className="py-3 px-4 font-bold">Budget/nuit</th><th className="py-3 px-4 font-bold">Ambiance</th><th className="py-3 px-4 font-bold">Transport</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Shinjuku ⭐</td><td className="py-2 px-4">60-200€</td><td className="py-2 px-4">Dynamique</td><td className="py-2 px-4">★★★★★</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Shibuya</td><td className="py-2 px-4">70-250€</td><td className="py-2 px-4">Branché</td><td className="py-2 px-4">★★★★</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Asakusa</td><td className="py-2 px-4">40-150€</td><td className="py-2 px-4">Traditionnel</td><td className="py-2 px-4">★★★</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Ginza</td><td className="py-2 px-4">100-500€</td><td className="py-2 px-4">Luxe</td><td className="py-2 px-4">★★★★</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Ueno</td><td className="py-2 px-4">40-100€</td><td className="py-2 px-4">Culturel</td><td className="py-2 px-4">★★★★</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">Notre conseil : <strong>Shinjuku pour un premier voyage</strong> (hub central), Asakusa pour le charme et le budget, Shibuya pour l'énergie. Dans tous les cas, privilégiez la proximité d'une gare JR ou de métro.</p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Tokyo" showHotel showActivites />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Que faire à Tokyo", url: "/blog/que-faire-tokyo" },
                { label: "Meilleurs hôtels à Tokyo", url: "/blog/meilleurs-hotels-tokyo" },
                { label: "Où dormir au Japon", url: "/blog/ou-dormir-japon" },
                { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm"><span className="text-ocean">→</span><span>{link.label}</span></Link>
              ))}
            </div>
          </div>
          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées</h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">{dest.label}</Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/blog/que-faire-tokyo" onClick={() => window.scrollTo(0, 0)}>Que faire à Tokyo</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuartiersLogerTokyo;
