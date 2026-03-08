import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Calendar, Compass, Home, Utensils, Train, MapPin } from "lucide-react";
import indonesieImage from "@/assets/destinations/indonesie.jpg";

const BudgetVoyageIndonesie = () => {
  const faqs = [
    { question: "Quel budget par jour en Indonésie ?", answer: "25-40€/jour en backpacker, 50-80€ en confort, 100-250€ en luxe. Bali est un peu plus cher que Java ou Lombok." },
    { question: "Bali est-elle devenue chère ?", answer: "Les zones touristiques (Seminyak, Canggu) ont augmenté, mais Ubud et le nord restent abordables. Java et Lombok sont nettement moins chers." },
    { question: "Quelle monnaie en Indonésie ?", answer: "La roupie indonésienne (IDR). 1€ ≈ 17 000 IDR. Les cartes sont acceptées dans les zones touristiques, mais prévoyez du cash pour les zones rurales." },
    { question: "Combien coûtent les vols internes ?", answer: "30-80€ selon la distance et la compagnie (Lion Air, AirAsia, Garuda). Réservez à l'avance pour les meilleurs prix." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Budget Voyage Indonésie : Combien Coûte un Séjour ?"
        description="Guide budget complet pour l'Indonésie. Prix détaillés à Bali, Java et Lombok : hébergement, nourriture, transport, activités. Tous les prix pour bien préparer."
        image={indonesieImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-03-02" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Budget Voyage Indonésie", url: "/blog/budget-voyage-indonesie" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${indonesieImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Budget</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">Budget Voyage Indonésie : Combien Coûte un Séjour ?</h1>
              <p className="text-xl text-white/90">Tous les prix pour Bali, Java, Lombok et les îles Gili</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 2 mars 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            L'Indonésie offre un <strong>excellent rapport qualité-prix</strong> pour les voyageurs. De <Link to="/destinations/indonesie/bali" className="text-ocean hover:underline">Bali</Link> à <Link to="/destinations/indonesie/java" className="text-ocean hover:underline">Java</Link>, les prix varient sensiblement selon les régions. Ce guide détaille tous les postes de dépenses pour vous aider à <strong>budgétiser votre séjour</strong>.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Home className="h-7 w-7 text-ocean" /> Hébergement</h2>
          <h3 className="text-xl font-bold mt-6">Bali</h3>
          <ul>
            <li><strong>Dortoir</strong> : 5-12€/nuit (Canggu, Ubud, Kuta)</li>
            <li><strong>Guesthouse/homestay</strong> : 10-25€/nuit avec petit-déjeuner</li>
            <li><strong>Hôtel 3★ avec piscine</strong> : 25-50€/nuit</li>
            <li><strong>Villa privée avec piscine</strong> : 40-100€/nuit (meilleur deal à plusieurs)</li>
            <li><strong>Resort 5★</strong> : 100-400€/nuit</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">Java</h3>
          <p>30-50% moins cher que Bali. Un hôtel 3★ à Yogyakarta coûte 15-30€/nuit.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Utensils className="h-7 w-7 text-ocean" /> Nourriture : 5 à 30€/jour</h2>
          <p>La cuisine indonésienne est savoureuse et très abordable. Voir notre guide <Link to="/guides/street-food-indonesie" className="text-ocean hover:underline font-medium">street food Indonésie</Link>.</p>
          <ul>
            <li><strong>Warung (restaurant local)</strong> : 1-3€/repas (nasi goreng, mie goreng, sate ayam)</li>
            <li><strong>Restaurant touristique à Bali</strong> : 5-15€/repas</li>
            <li><strong>Café branchés Canggu/Seminyak</strong> : 3-8€ (smoothie bowl, avocado toast)</li>
            <li><strong>Bière Bintang</strong> : 1,50-3€ (attention : chère comparée au reste)</li>
            <li><strong>Fruits frais</strong> : 0,50-1€ pour un jus pressé</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><Train className="h-7 w-7 text-ocean" /> Transport</h2>
          <p>Détails dans notre <Link to="/guides/transport-indonesie" className="text-ocean hover:underline font-medium">guide transport Indonésie</Link>.</p>
          <ul>
            <li><strong>Location scooter Bali</strong> : 4-7€/jour</li>
            <li><strong>Grab (moto/voiture)</strong> : 1-5€ par trajet</li>
            <li><strong>Vol interne Bali-Yogyakarta</strong> : 30-60€</li>
            <li><strong>Fast boat vers Gili</strong> : 20-35€ aller-retour</li>
            <li><strong>Train Java</strong> : 5-25€ selon la classe</li>
            <li><strong>Chauffeur privé Bali</strong> : 30-50€/journée (8h)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><MapPin className="h-7 w-7 text-ocean" /> Activités</h2>
          <ul>
            <li><strong>Trek Mont Batur (lever soleil)</strong> : 25-40€ avec guide</li>
            <li><strong>Entrée temples</strong> : 1-5€ (+ location sarong gratuite)</li>
            <li><strong>Borobudur (lever soleil)</strong> : 25€</li>
            <li><strong>Plongée aux Gili</strong> : 25-35€/plongée, PADI Open Water 300-350€</li>
            <li><strong>Cours de cuisine</strong> : 15-30€</li>
            <li><strong>Massage balinais</strong> : 5-15€/heure</li>
            <li><strong>Rafting à Ubud</strong> : 25-40€</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3"><DollarSign className="h-7 w-7 text-ocean" /> Récapitulatif</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-border"><th className="py-3 px-4 font-bold">Profil</th><th className="py-3 px-4 font-bold">Budget/jour</th><th className="py-3 px-4 font-bold">10 jours</th><th className="py-3 px-4 font-bold">3 semaines</th></tr></thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🎒 Backpacker</td><td className="py-2 px-4">25-40€</td><td className="py-2 px-4">250-400€</td><td className="py-2 px-4">525-840€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">🧳 Confort</td><td className="py-2 px-4">50-80€</td><td className="py-2 px-4">500-800€</td><td className="py-2 px-4">1 050-1 680€</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">💎 Luxe</td><td className="py-2 px-4">100-250€</td><td className="py-2 px-4">1 000-2 500€</td><td className="py-2 px-4">2 100-5 250€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Hors vol international. Voir nos <Link to="/bons-plans/vols" className="text-ocean hover:underline">bons plans vols</Link>.</p>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              L'Indonésie offre une <strong>diversité de budgets</strong> impressionnante : du dortoir à 5€ à la villa privée avec piscine à 80€, chacun trouve son bonheur. Bali s'est embourgeoisée mais reste abordable dès qu'on sort des zones touristiques. Java et Lombok offrent des expériences incroyables à petits prix.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Compass className="h-5 w-5 text-ocean" /> À lire aussi</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Itinéraire Indonésie 10 jours", url: "/blog/itineraire-indonesie-10-jours" },
                { label: "Quand partir en Indonésie", url: "/blog/quand-partir-indonesie" },
                { label: "Guide complet Indonésie", url: "/guides/guide-complet-indonesie" },
                { label: "Guide budget voyage", url: "/guides/budget-voyage" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90"><Link to="/destinations/indonesie" onClick={() => window.scrollTo(0, 0)}>Découvrir l'Indonésie</Link></Button>
            <Button asChild variant="outline" className="flex-1"><Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetVoyageIndonesie;
