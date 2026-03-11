import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { AffiliateBlock, AffiliateDisclaimer } from '@/components/affiliate';
import { AFFILIATE_BLOCKS } from '@/lib/affiliateData';
import { Plane, Hotel, MapPin, Smartphone, Shield, Backpack, Compass } from 'lucide-react';

const RessourcesVoyage = () => {
  return (
    <>
      <SEO
        title="Ressources Voyage – Outils et Services Recommandés pour Voyager"
        description="Tous nos outils et services recommandés pour organiser votre voyage : comparateurs de vols, hébergement, activités, eSIM, assurance et équipement."
        url="/ressources-voyage"
        breadcrumbs={[
          { name: 'Accueil', url: '/' },
          { name: 'Ressources Voyage', url: '/ressources-voyage' },
        ]}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ocean/10 mb-4">
                <Compass className="w-8 h-8 text-ocean" />
              </div>
              <h1 className="text-4xl md:text-5xl font-script font-bold mb-4 text-foreground">
                Ressources Voyage
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Retrouvez ici tous les outils et services que nous utilisons et recommandons pour préparer nos voyages. 
                Chaque recommandation a été testée et sélectionnée pour vous aider à voyager mieux et moins cher.
              </p>
            </div>

            {/* Navigation rapide */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { icon: Plane, label: 'Vols', anchor: '#vols' },
                { icon: Hotel, label: 'Hébergement', anchor: '#hebergement' },
                { icon: MapPin, label: 'Activités', anchor: '#activites' },
                { icon: Shield, label: 'Assurance', anchor: '#assurance' },
                { icon: Smartphone, label: 'eSIM', anchor: '#esim' },
                { icon: Backpack, label: 'Équipement', anchor: '#equipement' },
              ].map((item, i) => (
                <a key={i} href={item.anchor} className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border hover:border-ocean/40 hover:bg-muted/30 text-sm font-medium text-foreground hover:text-ocean transition-all">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </a>
              ))}
            </div>

            {/* Sections */}
            <section id="vols" className="scroll-mt-24">
              <AffiliateBlock {...AFFILIATE_BLOCKS.vols} variant="full" />
              <p className="text-muted-foreground mb-2">
                Comparer sur plusieurs plateformes est la clé pour trouver le meilleur tarif. Réservez 2-3 mois à l'avance pour les vols internationaux 
                et privilégiez les mardis et mercredis pour des prix souvent 15-30% moins chers.
              </p>
              <Link to="/bons-plans/vols" className="text-sm text-ocean hover:underline">→ Lire notre guide complet des comparateurs de vols</Link>
            </section>

            <section id="hebergement" className="scroll-mt-24 mt-12">
              <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} variant="full" />
              <p className="text-muted-foreground mb-2">
                Booking.com offre la plus grande flexibilité avec l'annulation gratuite, tandis qu'Agoda est imbattable en Asie du Sud-Est. 
                Pour les petits budgets, Hostelworld reste la référence pour les auberges de jeunesse.
              </p>
              <Link to="/bons-plans/hebergement" className="text-sm text-ocean hover:underline">→ Lire notre comparatif hébergement</Link>
            </section>

            <section id="activites" className="scroll-mt-24 mt-12">
              <AffiliateBlock {...AFFILIATE_BLOCKS.activites} variant="full" />
              <p className="text-muted-foreground mb-2">
                Réservez vos activités en avance pour éviter les files d'attente et profiter des meilleurs prix. 
                GetYourGuide et Viator proposent l'annulation gratuite jusqu'à 24h avant.
              </p>
            </section>

            <section id="assurance" className="scroll-mt-24 mt-12">
              <AffiliateBlock {...AFFILIATE_BLOCKS.assurance} variant="full" />
              <p className="text-muted-foreground mb-2">
                Ne partez jamais sans assurance voyage. Les frais médicaux à l'étranger peuvent atteindre des dizaines de milliers d'euros. 
                Chapka est idéal pour les longs séjours, Heymondo pour les voyages courts.
              </p>
              <Link to="/guides/securite" className="text-sm text-ocean hover:underline">→ Lire notre guide sécurité et assurance</Link>
            </section>

            <section id="esim" className="scroll-mt-24 mt-12">
              <AffiliateBlock {...AFFILIATE_BLOCKS.esim} variant="full" />
              <p className="text-muted-foreground mb-2">
                Les eSIM ont révolutionné la connectivité en voyage. Plus besoin de chercher une carte SIM locale à l'aéroport — 
                activez votre forfait data avant même de décoller.
              </p>
              <Link to="/bons-plans/cartes-sim" className="text-sm text-ocean hover:underline">→ Lire notre comparatif eSIM et cartes SIM</Link>
            </section>

            <section id="equipement" className="scroll-mt-24 mt-12">
              <AffiliateBlock {...AFFILIATE_BLOCKS.equipement} variant="full" />
              <p className="text-muted-foreground mb-2">
                Un bon équipement fait toute la différence en voyage. Investir dans un sac à dos de qualité et un adaptateur universel 
                vous évitera bien des tracas.
              </p>
              <Link to="/guides/que-mettre-valise" className="text-sm text-ocean hover:underline">→ Lire notre guide valise</Link>
            </section>

            {/* Liens internes */}
            <div className="mt-16 p-8 bg-muted/20 rounded-lg border border-border">
              <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
                <Compass className="w-6 h-6 mr-2 text-ocean" /> Guides utiles
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'Préparer son voyage', url: '/guides/preparer-voyage' },
                  { label: 'Budget voyage', url: '/guides/budget-voyage' },
                  { label: 'Que mettre dans sa valise', url: '/guides/que-mettre-valise' },
                  { label: 'Meilleurs sites de réservation', url: '/guides/meilleurs-sites-reserver-voyage' },
                  { label: 'Sécurité et assurance', url: '/guides/securite' },
                  { label: 'Où voyager selon la saison', url: '/guides/ou-voyager' },
                  { label: 'Toutes nos destinations', url: '/destinations' },
                  { label: 'Ressources gratuites', url: '/ressources-gratuites' },
                ].map((link, i) => (
                  <Link key={i} to={link.url} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-background transition-all text-foreground hover:text-ocean">
                    <span className="text-ocean">→</span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <AffiliateDisclaimer />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RessourcesVoyage;
