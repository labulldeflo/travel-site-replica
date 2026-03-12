import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Backpack, ExternalLink, Star, ArrowRight } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliateData";

const faqs = [
  { question: "Quel sac à dos choisir pour un tour du monde ?", answer: "Un sac de 40 à 50L est idéal. Il passe en cabine chez la plupart des compagnies et suffit pour 2 à 3 semaines. Optez pour un modèle avec ouverture frontale type valise, bretelles rembourrées et ceinture ventrale." },
  { question: "Valise rigide ou souple ?", answer: "La valise rigide protège mieux les objets fragiles et résiste aux chocs. La souple est plus légère et flexible. Pour un voyage backpacker, privilégiez le sac à dos. Pour un séjour hôtel, la valise rigide cabine est parfaite." },
  { question: "Quelles chaussures emporter en voyage ?", answer: "Une paire polyvalente suffit souvent : des chaussures de randonnée légères type trail pour la marche, et des sandales pour le quotidien. En Asie, des tongs suffisent au quotidien." },
  { question: "Faut-il un adaptateur universel ?", answer: "Oui, c'est indispensable. Un adaptateur universel couvre tous les types de prises dans le monde. Choisissez un modèle avec ports USB intégrés pour charger plusieurs appareils simultanément." },
  { question: "Quel budget pour l'équipement voyage ?", answer: "Comptez 150-300€ pour un équipement complet de qualité : sac à dos (80-150€), chaussures (60-100€), accessoires (50-100€). C'est un investissement durable qui vous servira pendant des années." },
];

const categories = [
  {
    title: "🎒 Sacs à dos voyage",
    description: "Les meilleurs sacs à dos pour le backpacking et le voyage longue durée.",
    items: [
      { name: "Sac à dos 40L – Idéal cabine", note: "Le plus polyvalent", desc: "Passe en cabine, ouverture frontale, bretelles ajustables. Parfait pour 2-3 semaines.", url: AFFILIATE_LINKS.amazonSearch("sac a dos voyage 40L cabine") },
      { name: "Sac à dos 50L – Long voyage", note: "Tour du monde", desc: "Pour les voyages de 3+ semaines. Compartiment principal + accès latéral.", url: AFFILIATE_LINKS.amazonSearch("sac a dos voyage 50L") },
      { name: "Sac à dos 30L – Week-end", note: "Court séjour", desc: "Compact et léger, idéal pour les city trips et week-ends prolongés.", url: AFFILIATE_LINKS.amazonSearch("sac a dos voyage 30L") },
    ],
  },
  {
    title: "🧳 Valises cabine",
    description: "Valises légères et résistantes aux dimensions cabine.",
    items: [
      { name: "Valise cabine rigide 55cm", note: "Best-seller", desc: "Coque rigide, 4 roues, serrure TSA. Acceptée par toutes les compagnies.", url: AFFILIATE_LINKS.amazonSearch("valise cabine rigide 55cm") },
      { name: "Valise souple extensible", note: "Flexible", desc: "Plus légère, extensible de 5-10cm. Idéale pour ramener des souvenirs.", url: AFFILIATE_LINKS.amazonSearch("valise cabine souple extensible") },
    ],
  },
  {
    title: "🥾 Chaussures de randonnée",
    description: "Chaussures testées pour la marche en voyage.",
    items: [
      { name: "Chaussures trail légères", note: "Polyvalent", desc: "Légères, respirantes, semelle Vibram. Pour la randonnée légère et la ville.", url: AFFILIATE_LINKS.amazonSearch("chaussures trail légères homme femme") },
      { name: "Sandales de marche", note: "Chaleur", desc: "Indispensables en Asie et en été. Semelle épaisse et séchage rapide.", url: AFFILIATE_LINKS.amazonSearch("sandales marche voyage") },
    ],
  },
  {
    title: "🔌 Accessoires indispensables",
    description: "Les accessoires qui facilitent chaque voyage.",
    items: [
      { name: "Adaptateur universel USB-C", note: "Essentiel", desc: "Compatible monde entier, ports USB-A et USB-C intégrés.", url: AFFILIATE_LINKS.amazonSearch("adaptateur universel voyage USB-C") },
      { name: "Batterie externe 20000mAh", note: "Autonomie", desc: "Recharge un smartphone 4-5 fois. Indispensable pour les longues journées.", url: AFFILIATE_LINKS.amazonSearch("batterie externe 20000mAh voyage") },
      { name: "Cadenas TSA", note: "Sécurité", desc: "Approuvé par la TSA pour les vols vers les USA. Combinaison 3 chiffres.", url: AFFILIATE_LINKS.amazonSearch("cadenas TSA voyage") },
      { name: "Cubes de rangement", note: "Organisation", desc: "Organisez votre sac par catégorie. Gain de place et accès rapide.", url: AFFILIATE_LINKS.amazonSearch("cubes rangement voyage compression") },
      { name: "Oreiller de voyage compressible", note: "Confort", desc: "Mousse à mémoire de forme, housse lavable. Se compresse dans le sac.", url: AFFILIATE_LINKS.amazonSearch("oreiller voyage mousse mémoire") },
    ],
  },
  {
    title: "📷 Photo & Électronique",
    description: "Matériel photo et électronique pour voyager léger.",
    items: [
      { name: "Appareil photo compact", note: "Qualité", desc: "Capteur 1 pouce, zoom 24-200mm. Qualité pro dans la poche.", url: AFFILIATE_LINKS.amazonSearch("appareil photo compact voyage 1 pouce") },
      { name: "GoPro ou action cam", note: "Aventure", desc: "Étanche, stabilisée, ultra-compacte. Parfaite pour snorkeling et randonnée.", url: AFFILIATE_LINKS.amazonSearch("GoPro action cam voyage") },
      { name: "Trépied flexible", note: "Polyvalent", desc: "Se fixe partout : rampes, branches, poteaux. Idéal pour les photos de nuit.", url: AFFILIATE_LINKS.amazonSearch("trépied flexible voyage smartphone") },
    ],
  },
];

const EquipementVoyage = () => {
  return (
    <>
      <SEO
        title="Équipement voyage : comparatifs sacs, valises et accessoires"
        description="Comparatifs et recommandations d'équipement voyage : sacs à dos, valises cabine, chaussures de randonnée et accessoires indispensables pour voyager léger."
        url="/equipement-voyage"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Équipement voyage", url: "/equipement-voyage" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="bg-sunset/5 py-16">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <div className="w-14 h-14 bg-sunset/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Backpack className="w-7 h-7 text-sunset" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                Équipement voyage : nos recommandations
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sacs à dos, valises, chaussures et accessoires : comparatifs détaillés et recommandations pour voyager léger et bien équipé.
              </p>
            </div>
          </section>

          {/* Categories */}
          {categories.map((cat, catIdx) => (
            <section key={catIdx} className={catIdx % 2 === 0 ? "py-16" : "py-16 bg-muted/30"}>
              <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-2xl font-elegant font-bold text-foreground mb-2">{cat.title}</h2>
                <p className="text-muted-foreground mb-8">{cat.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.items.map((item, idx) => (
                    <Card key={idx} className="p-5 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
                        {item.note && (
                          <span className="px-2 py-0.5 bg-ocean/10 text-ocean text-xs font-medium rounded-full shrink-0 ml-2">
                            {item.note}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{item.desc}</p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-sunset text-white text-sm font-medium rounded-md hover:bg-sunset/90 transition-colors w-fit"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Voir le prix
                      </a>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Conseils pratiques */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-elegant font-bold text-foreground mb-8 text-center">
                Conseils pour bien choisir son équipement
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Sac à dos ou valise ?</h3>
                <p>Le choix dépend de votre style de voyage. Le sac à dos est idéal pour le backpacking, les transports en commun et les terrains irréguliers. La valise à roulettes convient mieux aux séjours hôtel et aux déplacements en taxi/transfert. Pour un premier voyage en Asie, le sac à dos 40L est le choix le plus polyvalent.</p>

                <h3 className="text-xl font-semibold text-foreground">Comment voyager avec un bagage cabine uniquement ?</h3>
                <p>Utilisez des cubes de rangement pour optimiser l'espace. Portez vos vêtements les plus volumineux dans l'avion. Choisissez des vêtements polyvalents et des tissus techniques qui sèchent vite. Une lessive rapide tous les 3-4 jours vous permet de partir léger.</p>

                <h3 className="text-xl font-semibold text-foreground">Investir dans la qualité</h3>
                <p>Un bon sac à dos dure 10 ans et d'innombrables voyages. Investir 100-150€ dans un sac de qualité est plus économique que de racheter un sac bas de gamme tous les 2 ans. Même logique pour les chaussures de marche : une bonne paire protège vos pieds et vos articulations.</p>
              </div>
            </div>
          </section>

          {/* Liens internes */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-elegant font-bold text-foreground mb-6 text-center">
                Articles liés
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Préparer son voyage", link: "/preparer-voyage" },
                  { label: "Que mettre dans sa valise", link: "/guides/que-mettre-valise" },
                  { label: "Budget voyage par pays", link: "/budget-voyage" },
                  { label: "Tests matériel", link: "/tests" },
                ].map((item, idx) => (
                  <Link key={idx} to={item.link} className="flex items-center gap-2 px-4 py-3 bg-background rounded-lg border border-border hover:border-ocean/30 transition-colors group">
                    <ArrowRight className="w-4 h-4 text-ocean" />
                    <span className="text-sm font-medium text-foreground group-hover:text-ocean transition-colors">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 max-w-4xl py-12">
            <FAQSection faqs={faqs} />
          </div>

          {/* Disclaimer */}
          <section className="py-6">
            <div className="container mx-auto px-4 max-w-4xl">
              <p className="text-xs text-muted-foreground text-center italic">
                Certains liens présents sur cette page sont des liens d'affiliation. Cela signifie que nous pouvons recevoir une commission si vous effectuez un achat via ces liens, sans coût supplémentaire pour vous.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EquipementVoyage;
