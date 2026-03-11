import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from '@/components/affiliate';
import { AFFILIATE_BLOCKS } from '@/lib/affiliateData';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Calendar, Compass, Home, Utensils, Train, MapPin } from "lucide-react";
import laosImage from "@/assets/destinations/laos.jpg";

const BudgetVoyageLaos = () => {
  const faqs = [
    { question: "Quel budget par jour au Laos ?", answer: "15-25€/jour en backpacker, 30-50€/jour en confort. Le Laos est l'un des pays les moins chers d'Asie du Sud-Est." },
    { question: "Quelle monnaie utiliser au Laos ?", answer: "Le kip laotien (LAK), mais le baht thaïlandais et le dollar US sont largement acceptés. 1€ ≈ 23 000 LAK." },
    { question: "Luang Prabang est-elle chère ?", answer: "C'est la ville la plus chère du Laos (statut UNESCO), mais reste abordable : 15-30€/nuit pour un bon hôtel, 2-5€ par repas." },
    { question: "Y a-t-il des distributeurs au Laos ?", answer: "Oui, dans les villes principales. Limite de retrait 2 000 000 LAK (~80€) avec frais de 20 000 LAK (~0,80€). Emportez aussi du cash." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Laos : Tous les Prix pour Bien Préparer"
        description="Guide complet du budget voyage au Laos. Prix détaillés hébergement, nourriture, transport et activités. Combien coûte un séjour au Laos ?"
        image={laosImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-02-16" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Laos", url: "/blog/budget-voyage-laos" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${laosImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Budget Voyage Laos : Tous les Prix Détaillés</h1>
              <p className="text-xl text-white/90">Combien coûte un voyage au Laos ? Le guide complet</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 16 février 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 8 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Laos est l'un des <strong>pays les moins chers d'Asie du Sud-Est</strong>, même si les prix ont augmenté avec le développement touristique. De <Link to="/destinations/laos/luang-prabang" className="text-ocean hover:underline">Luang Prabang</Link> à <Link to="/destinations/laos/vientiane" className="text-ocean hover:underline">Vientiane</Link>, voici tous les prix pour bien préparer votre budget.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> Hébergement : 5 à 50€/nuit</h2>
          <ul>
            <li><strong>Dortoir</strong> : 3-8€/nuit (disponibles à Luang Prabang, Vang Vieng, Vientiane)</li>
            <li><strong>Guesthouse chambre double</strong> : 8-20€ avec ventilateur ou climatisation</li>
            <li><strong>Hôtel 3★</strong> : 20-40€ avec piscine à Luang Prabang</li>
            <li><strong>Boutique hôtel</strong> : 40-100€ (expérience coloniale à Luang Prabang)</li>
            <li><strong>Homestay</strong> : 5-10€ dans les zones rurales (repas souvent inclus)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Utensils className="h-7 w-7 text-ocean" /> Nourriture : 3 à 15€/jour</h2>
          <ul>
            <li><strong>Street food / marché</strong> : 1-2€ par repas (khao piak, laap, sticky rice)</li>
            <li><strong>Restaurant local</strong> : 2-5€ par repas</li>
            <li><strong>Restaurant touristique</strong> : 5-12€ par repas</li>
            <li><strong>Beer Lao</strong> : 0,50-1,50€ (la meilleure bière d'Asie du Sud-Est selon beaucoup !)</li>
            <li><strong>Café Lao</strong> : 0,50-1€ (le café laotien est excellent)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Train className="h-7 w-7 text-ocean" /> Transport : 3 à 15€/jour</h2>
          <p>Voir notre <Link to="/guides/transport-laos" className="text-ocean hover:underline font-medium">guide transport Laos</Link>.</p>
          <ul>
            <li><strong>Tuk-tuk en ville</strong> : 1-3€ par course</li>
            <li><strong>Minivan Luang Prabang → Vang Vieng</strong> : 8-12€ (4-5h)</li>
            <li><strong>Bus Vang Vieng → Vientiane</strong> : 5-8€ (3-4h)</li>
            <li><strong>Slow boat Mékong</strong> (Huay Xai → Luang Prabang) : 25-35€ (2 jours, expérience unique)</li>
            <li><strong>Train Chine-Laos</strong> (nouveau !) : 10-25€ selon la classe</li>
            <li><strong>Location vélo</strong> : 1-2€/jour</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Activités</h2>
          <ul>
            <li><strong>Cascades de Kuang Si</strong> : 20 000 kip (~1€) + transport 5-8€ A/R</li>
            <li><strong>Grottes de Pak Ou</strong> : 15-20€ (bateau + entrée)</li>
            <li><strong>Kayak Vang Vieng</strong> : 10-15€</li>
            <li><strong>Tubing Vang Vieng</strong> : 5-8€</li>
            <li><strong>Cours de cuisine</strong> : 15-25€</li>
            <li><strong>Massage traditionnel</strong> : 3-8€/heure</li>
            <li><strong>Blue Lagoon</strong> : 10 000 kip (~0,50€)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><DollarSign className="h-7 w-7 text-ocean" /> Récapitulatif</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Profil</th><th className="py-3 px-4 font-bold">Budget/jour</th><th className="py-3 px-4 font-bold">10 jours</th><th className="py-3 px-4 font-bold">3 semaines</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">15-25€</td><td className="py-2 px-4">150-250€</td><td className="py-2 px-4">315-525€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">30-50€</td><td className="py-2 px-4">300-500€</td><td className="py-2 px-4">630-1 050€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">60-150€</td><td className="py-2 px-4">600-1 500€</td><td className="py-2 px-4">1 260-3 150€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international. Voir nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link>.</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le Laos est la preuve que les <strong>plus belles expériences sont souvent les moins chères</strong>. Avec 25-40€/jour, vous vivez pleinement : cascades turquoise, couchers de soleil sur le Mékong, cuisine savoureuse et rencontres authentiques. Un pays qui récompense les voyageurs curieux et patients.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Laos 10 jours", url: "/blog/itineraire-laos-10-jours" },
                { label: "Quand partir au Laos", url: "/blog/quand-partir-laos" },
                { label: "Guide complet Laos", url: "/guides/guide-complet-laos" },
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
                { label: "🇱🇦 Laos", url: "/destinations/laos" },
                { label: "Luang Prabang", url: "/destinations/laos/luang-prabang" },
                { label: "Vang Vieng", url: "/destinations/laos/vang-vieng" },
                { label: "Vientiane", url: "/destinations/laos/vientiane" },
              ].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="compact" />
          <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="compact" />

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/laos" onClick={() => window.scrollTo(0, 0)}>Découvrir le Laos</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyageLaos;
