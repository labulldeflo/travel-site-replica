import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock, ContextualCTA, MoneyPageLinks, RecommendationCard, ReassuranceBlock } from "@/components/affiliate";
import GuideCompletBlock from "@/components/GuideCompletBlock";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Shield, CheckCircle, ArrowRight, Users } from "lucide-react";
import japonImage from "@/assets/destinations/japon.jpg";

const AssuranceVoyageJapon = () => {
  const faqs = [
    { question: "L'assurance voyage est-elle obligatoire pour le Japon ?", answer: "Non, l'assurance n'est pas obligatoire pour entrer au Japon. Mais elle est fortement recommandée : les frais médicaux y sont très élevés (une hospitalisation peut coûter 3 000 à 10 000€ par jour), et le rapatriement médical vers la France dépasse souvent 30 000€." },
    { question: "Quelle est la meilleure assurance voyage pour le Japon ?", answer: "Chapka Cap Aventure offre le meilleur rapport qualité-prix (dès 32€/mois, 200 000€ de frais médicaux). Heymondo est idéal si vous voulez un plafond plus élevé (500 000€) avec une app mobile intuitive. Les deux couvrent rapatriement, bagages et responsabilité civile." },
    { question: "Ma carte bancaire suffit-elle pour le Japon ?", answer: "Les cartes Visa Premier/Gold offrent une couverture basique : plafond de 11 000€ seulement, durée limitée à 90 jours, nombreuses exclusions (sports, catastrophes naturelles). Pour le Japon où les frais sont élevés, une assurance dédiée est bien plus sûre." },
    { question: "Quand souscrire mon assurance voyage Japon ?", answer: "Idéalement dès la réservation de votre vol, surtout si vous souhaitez une garantie annulation. Au plus tard, souscrivez avant le départ. Certaines assurances comme Chapka permettent de souscrire jusqu'à la veille du départ." },
    { question: "Les catastrophes naturelles sont-elles couvertes ?", answer: "Oui, Chapka et Heymondo couvrent les frais médicaux liés aux catastrophes naturelles (séismes, typhons). C'est un critère important pour le Japon, situé sur la ceinture de feu du Pacifique." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Assurance Voyage Japon 2025 : Comparatif et Guide Complet"
        description="Quelle assurance voyage choisir pour le Japon ? Comparatif Chapka vs Heymondo, couvertures, prix et conseils d'experts pour partir bien assuré."
        image={japonImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-29" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Assurance Voyage Japon", url: "/blog/assurance-voyage-japon" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Pratique</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Assurance Voyage Japon : Le Guide pour Bien Choisir
              </h1>
              <p className="text-xl text-white/90">Comparatif, critères de choix et conseils pour partir sereinement</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Mis à jour : juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 8 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          {/* Introduction */}
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le Japon est l'un des <strong>pays les plus sûrs au monde</strong> — mais en cas de pépin médical, la facture peut vite grimper. Une consultation coûte 50 à 100€, une hospitalisation <strong>1 000 à 10 000€ par jour</strong>, et un rapatriement vers la France dépasse 30 000€. Avec une bonne assurance voyage, vous partez l'esprit léger, sans risquer votre budget.
          </p>
          <p className="text-base text-muted-foreground">
            Ce guide vous aide à <strong>choisir l'assurance adaptée</strong> à votre voyage au Japon : les critères essentiels, notre comparatif des meilleures offres, et nos recommandations selon votre profil.
          </p>

          {/* Cette page vous aidera si… */}
          <div className="not-prose my-8 p-5 rounded-xl bg-ocean/5 border border-ocean/20">
            <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-ocean" /> Cette page vous aidera si…
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Vous préparez un voyage au Japon et vous demandez si une assurance est nécessaire",
                "Vous hésitez entre Chapka, Heymondo ou votre carte bancaire",
                "Vous cherchez une couverture adaptée aux séismes, typhons et frais médicaux élevés",
                "Vous voulez comparer rapidement les prix et garanties sans lire 10 sites",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-ocean shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pourquoi s'assurer */}
          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Shield className="h-7 w-7 text-ocean" /> Pourquoi S'assurer pour le Japon ?
          </h2>
          <ul>
            <li><strong>Frais médicaux élevés</strong> : consultation 50-100€, hospitalisation 1 000-10 000€/jour</li>
            <li><strong>Rapatriement coûteux</strong> : 15 000 à 50 000€ depuis le Japon</li>
            <li><strong>Investissement important</strong> : vol + hôtels + JR Pass = budget conséquent à protéger</li>
            <li><strong>Risques naturels</strong> : séismes et typhons sont des réalités au Japon</li>
            <li><strong>Bagages en transit</strong> : les escales multiplient les risques de perte</li>
          </ul>

          {/* Comment choisir */}
          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Shield className="h-7 w-7 text-ocean" /> Comment Choisir son Assurance Voyage ?
          </h2>
          <p>Voici les <strong>5 critères essentiels</strong> à vérifier avant de souscrire :</p>
          <div className="not-prose grid gap-3 my-6">
            {[
              { title: "Frais médicaux", desc: "Minimum 150 000€ de couverture. Au Japon, une hospitalisation peut coûter plusieurs milliers d'euros par jour." },
              { title: "Assistance & rapatriement", desc: "Vérifiez que le rapatriement est en frais réels (sans plafond). Une assistance 24/7 en français est un vrai plus." },
              { title: "Annulation de voyage", desc: "Protégez votre investissement : vols, hôtels, JR Pass. Vérifiez les motifs couverts (maladie, accident, décès proche)." },
              { title: "Responsabilité civile", desc: "Couvre les dommages que vous pourriez causer à un tiers. Indispensable dans un pays où les règles sociales sont strictes." },
              { title: "Exclusions à vérifier", desc: "Sports d'aventure, catastrophes naturelles, conditions préexistantes : lisez les petites lignes avant de souscrire." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-ocean/10 text-ocean text-sm font-bold shrink-0">{i + 1}</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparatif */}
          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Shield className="h-7 w-7 text-ocean" /> Comparatif des Meilleures Assurances Voyage Japon
          </h2>
          <p>Nous avons analysé les offres les plus populaires auprès des voyageurs francophones. Voici notre comparatif actualisé :</p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Assurance</th>
                  <th className="py-3 px-4 font-bold">Prix</th>
                  <th className="py-3 px-4 font-bold">Frais médicaux</th>
                  <th className="py-3 px-4 font-bold">Points forts</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50 bg-ocean/5">
                  <td className="py-2 px-4 font-semibold">Chapka Cap Aventure ⭐</td>
                  <td className="py-2 px-4">Dès 32€/mois</td>
                  <td className="py-2 px-4">200 000€</td>
                  <td className="py-2 px-4">Meilleur rapport qualité-prix, sports couverts</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-4 font-semibold">Heymondo</td>
                  <td className="py-2 px-4">Dès 37€/semaine</td>
                  <td className="py-2 px-4">500 000€</td>
                  <td className="py-2 px-4">Plafond élevé, app mobile intuitive</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-4">ACS Globe Partner</td>
                  <td className="py-2 px-4">Dès 29€/mois</td>
                  <td className="py-2 px-4">100 000€</td>
                  <td className="py-2 px-4">Budget, couverture de base correcte</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-4 text-muted-foreground">Carte Visa Premier</td>
                  <td className="py-2 px-4">Incluse</td>
                  <td className="py-2 px-4">11 000€</td>
                  <td className="py-2 px-4">Gratuite mais plafond insuffisant, 90 jours max</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA principal */}
          <div className="not-prose my-8 text-center">
            <Button size="lg" className="bg-ocean hover:bg-ocean/90 text-base px-8" asChild>
              <a href="https://www.chapkadirecte.com" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2">
                Comparer les assurances voyage pour le Japon <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <ReassuranceBlock
              items={["Souscription en 5 minutes", "Annulation gratuite sous 14 jours", "Assistance 24/7 en français"]}
              className="justify-center mt-2"
            />
          </div>

          {/* Recommandations */}
          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Shield className="h-7 w-7 text-ocean" /> Nos Recommandations
          </h2>

          <RecommendationCard
            type="best"
            name="Chapka Cap Aventure"
            description="Le meilleur rapport qualité-prix pour le Japon : dès 32€/mois, 200 000€ de frais médicaux, sports d'aventure couverts, rapatriement en frais réels. Spécialiste français reconnu depuis 2002."
            url="https://www.chapkadirecte.com"
            ctaLabel="Obtenir un devis Chapka →"
            ctaType="assurance"
            destination="Japon"
          />
          <RecommendationCard
            type="simple"
            name="Heymondo"
            description="Le choix sécurité maximale : 500 000€ de frais médicaux, app mobile intuitive pour déclarer un sinistre en 2 minutes, assistance 24/7. Idéal si vous voulez le plafond le plus élevé."
            url="https://www.heymondo.fr"
            ctaLabel="Voir les offres Heymondo →"
            ctaType="assurance"
            destination="Japon"
          />
          <RecommendationCard
            type="avoid"
            name="Carte bancaire seule"
            description="Plafond trop bas (11 000€ en Visa Premier), durée limitée à 90 jours, nombreuses exclusions (catastrophes naturelles, sports). Insuffisant pour le Japon où une seule hospitalisation peut dépasser ce montant."
          />

          {/* Conclusion */}
          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <h3 className="text-lg font-bold text-foreground mb-2">Notre verdict</h3>
            <p className="text-base text-foreground leading-relaxed">
              Pour le Japon, ne partez jamais sans assurance. <strong>Chapka Cap Aventure</strong> est notre premier choix pour son excellent rapport qualité-prix. Si vous voulez un plafond médical maximal, optez pour <strong>Heymondo</strong>. Dans les deux cas, vous serez couvert en cas de pépin — et votre voyage restera un plaisir.
            </p>
          </div>

          {/* Mention affiliation */}
          <p className="text-[11px] text-muted-foreground mt-4 italic">
            ℹ️ Certains liens de cette page sont des liens affiliés. Si vous souscrivez via nos liens, nous recevons une petite commission — sans aucun surcoût pour vous. C'est ce qui nous permet de maintenir ce guide à jour.
          </p>

          {/* FAQ */}
          <FAQSection faqs={faqs} className="mt-10" />

          {/* Maillage interne */}
          <GuideCompletBlock destination="Japon" links={[
            { label: "Internet et eSIM au Japon", to: "/blog/internet-esim-japon", icon: "guide" as const },
            { label: "Budget voyage Japon", to: "/blog/budget-voyage-japon", icon: "budget" as const },
            { label: "Où dormir au Japon", to: "/blog/ou-dormir-japon", icon: "guide" as const },
            { label: "Itinéraire Japon 7 jours", to: "/blog/itineraire-japon-7-jours", icon: "guide" as const },
            { label: "Quand partir au Japon", to: "/blog/quand-partir-japon", icon: "quand" as const },
          ]} />

          <ContextualCTA type="esim" destination="Japon" />
          <MoneyPageLinks destination="Japon" showVols={true} />
          <OrganiserVoyageBlock destination="Japon" showAssurance showVols showHotel />

          {/* Boutons de navigation */}
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

export default AssuranceVoyageJapon;
