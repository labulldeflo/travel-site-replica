import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock, ContextualCTA, MoneyPageLinks, ContextualEmailCapture } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Home, DollarSign, Star } from "lucide-react";
import japonImage from "@/assets/destinations/japon.jpg";

const OuDormirJapon = () => {
  const faqs = [
    { question: "Quel est le meilleur type d'hébergement au Japon ?", answer: "Les business hotels (Toyoko Inn, APA, Dormy Inn) offrent le meilleur rapport qualité-prix : 50-100€/nuit, chambres petites mais impeccables, souvent avec petit-déjeuner inclus." },
    { question: "Les ryokan valent-ils le prix ?", answer: "Absolument. Un ryokan avec dîner kaiseki et onsen est une expérience unique au monde. Réservez au moins une nuit (80-300€), idéalement à Hakone ou dans les Alpes japonaises." },
    { question: "Les hôtels capsule sont-ils confortables ?", answer: "Oui, pour une ou deux nuits. L'espace est réduit mais bien pensé (Wi-Fi, prise, lumière, rideau). Les capsules modernes comme Nine Hours sont très design." },
    { question: "Faut-il réserver à l'avance ?", answer: "Oui, surtout en haute saison (cerisiers mars-avril, automne octobre-novembre, Golden Week fin avril-début mai). Réservez 2-3 mois à l'avance." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Où Dormir au Japon : Guide Hébergement Complet"
        description="Guide complet des hébergements au Japon. Hôtels capsule, business hotels, ryokan, Airbnb : types, prix et conseils pour bien choisir où dormir au Japon."
        image={japonImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-24" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Où Dormir au Japon", url: "/blog/ou-dormir-japon" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Pratique</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Où Dormir au Japon : Guide Hébergement</h1>
              <p className="text-xl text-white/90">Capsule, ryokan, business hotel : trouvez l'hébergement parfait</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 24 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 12 min de lecture</span>
              </div>
            </div>
          </div>
        </header>
        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            L'hébergement au Japon est une <strong>expérience en soi</strong>. Du minimalisme futuriste des hôtels capsule au raffinement ancestral des ryokan, en passant par l'efficacité irréprochable des business hotels, le pays offre des options uniques qu'on ne trouve nulle part ailleurs. Ce guide vous aide à choisir le <strong>type d'hébergement idéal</strong> selon votre budget, votre style et votre itinéraire.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> Hôtels Capsule (25-50€/nuit)</h2>
          <p>Inventés au Japon en 1979, les <strong>hôtels capsule</strong> sont devenus une institution. Chaque capsule (environ 2m x 1m x 1m) dispose d'un matelas, lumière, prise électrique, Wi-Fi et rideau/porte pour l'intimité.</p>
          <ul>
            <li><strong>Pour qui</strong> : voyageurs solo, budget serré, une expérience à tester au moins une nuit</li>
            <li><strong>Avantages</strong> : prix imbattable, souvent avec onsen/sauna inclus, casiers pour bagages</li>
            <li><strong>Limites</strong> : pas de rangement pour grosses valises, bruit possible, certains sont réservés aux hommes</li>
            <li><strong>Recommandés</strong> : Nine Hours (design), First Cabin (premium), Capsule Inn Kinshicho (classique)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Star className="h-7 w-7 text-ocean" /> Business Hotels (50-120€/nuit)</h2>
          <p>Le <strong>meilleur rapport qualité-prix</strong> au Japon. Les chambres sont petites (12-15m²) mais parfaitement équipées : lit confortable, salle de bain privée, Wi-Fi, TV, pyjama, produits de toilette complets.</p>
          <ul>
            <li><strong>Toyoko Inn</strong> : la chaîne la plus répandue, petit-déjeuner japonais inclus, emplacement toujours près des gares</li>
            <li><strong>Dormy Inn</strong> : onsen naturel gratuit sur le toit, ramen gratuit le soir (!), excellent rapport qualité-prix</li>
            <li><strong>APA Hotel</strong> : moderne et bien situé, prix compétitifs</li>
            <li><strong>Super Hotel</strong> : onsen et petit-déjeuner inclus, très propre</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Star className="h-7 w-7 text-ocean" /> Ryokan – Auberges Traditionnelles (80-400€/nuit)</h2>
          <p>L'expérience <strong>la plus authentique</strong> du Japon : dormir sur un futon posé sur des tatamis, se baigner dans un onsen, déguster un repas kaiseki servi dans votre chambre par une hôtesse en kimono.</p>
          <ul>
            <li><strong>Avec repas</strong> (dîner + petit-déjeuner) : 150-400€ — le dîner kaiseki seul vaut 50-100€</li>
            <li><strong>Sans repas</strong> : 80-150€ — bonne option si vous voulez dîner en ville</li>
            <li><strong>Meilleures régions</strong> : Hakone (vue sur le Fuji), Kinosaki Onsen, Takayama, Kyoto</li>
            <li><strong>Étiquette</strong> : retirez vos chaussures, portez le yukata fourni, respectez les heures de repas</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> Autres Options</h2>
          <h3 className="text-xl font-bold mt-6">Airbnb et Guesthouses (30-80€/nuit)</h3>
          <p>Bonne option pour les familles et séjours longs. Les <strong>machiya</strong> (maisons traditionnelles) de Kyoto sont particulièrement charmantes. Attention : depuis 2018, la réglementation japonaise impose aux hôtes Airbnb une licence.</p>

          <h3 className="text-xl font-bold mt-6">Temple Stay (Shukubo, 50-120€/nuit)</h3>
          <p>Nuit dans un <strong>temple bouddhiste</strong>, avec méditation au lever du soleil et cuisine végétarienne shojin ryori. Le <strong>Mont Koya</strong> est l'endroit le plus célèbre, avec plus de 50 temples accueillant des visiteurs.</p>

          <h3 className="text-xl font-bold mt-6">Hôtels de luxe (200-800€/nuit)</h3>
          <p>Les grands noms (Aman, Park Hyatt, Ritz-Carlton) offrent un service japonais d'exception. Le <strong>Park Hyatt Tokyo</strong> (film Lost in Translation) et l'<strong>Aman Kyoto</strong> sont des références.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><DollarSign className="h-7 w-7 text-ocean" /> Comparatif Prix par Ville</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Ville</th><th className="py-3 px-4 font-bold">Capsule</th><th className="py-3 px-4 font-bold">Business</th><th className="py-3 px-4 font-bold">Ryokan</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Tokyo</td><td className="py-2 px-4">30-50€</td><td className="py-2 px-4">60-120€</td><td className="py-2 px-4">150-400€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Kyoto</td><td className="py-2 px-4">25-45€</td><td className="py-2 px-4">50-100€</td><td className="py-2 px-4">100-350€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Osaka</td><td className="py-2 px-4">25-40€</td><td className="py-2 px-4">45-90€</td><td className="py-2 px-4">80-250€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Hakone</td><td className="py-2 px-4">—</td><td className="py-2 px-4">60-100€</td><td className="py-2 px-4">120-500€</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">Le secret de l'hébergement au Japon : <strong>mélangez les expériences</strong>. Business hotel à Tokyo pour le pratique, ryokan à Hakone pour le rêve, capsule à Osaka pour le fun. Chaque nuit peut être une aventure différente.</p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Japon" showHotel showVols showAssurance />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Quartiers où loger à Tokyo", url: "/blog/quartiers-loger-tokyo" },
                { label: "Quartiers où loger à Kyoto", url: "/blog/quartiers-loger-kyoto" },
                { label: "Prix des hôtels au Japon", url: "/blog/prix-hotels-japon" },
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
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default OuDormirJapon;
