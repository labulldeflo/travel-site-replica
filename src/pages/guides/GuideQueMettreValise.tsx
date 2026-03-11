import { ArrowLeft, Luggage, Shirt, Smartphone, Pill, Sun, Compass, HelpCircle, ShieldCheck, PackageCheck } from 'lucide-react';
import { AffiliateBlock } from '@/components/affiliate';
import { AFFILIATE_BLOCKS } from '@/lib/affiliateData';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection, { FAQItem } from '@/components/FAQSection';

const faqs: FAQItem[] = [
  { question: "Quel sac choisir pour un voyage de 2 semaines ?", answer: "Pour 2 semaines, un sac à dos de 40 à 50 litres est idéal si vous voyagez léger. L'Osprey Farpoint 40 et le Patagonia Black Hole 55L sont d'excellents choix. Pour un voyage plus confort, une valise cabine rigide (55x35x25cm) suffit pour la plupart des compagnies aériennes." },
  { question: "Comment faire sa valise pour un pays chaud ?", answer: "Privilégiez les vêtements légers en matière technique (séchage rapide, anti-UV). Emportez 3-4 t-shirts, 2 shorts/pantalons convertibles, 1 chemise légère à manches longues (protection soleil et temples), maillot de bain, et une veste légère imperméable. N'oubliez pas la crème solaire SPF50 et un chapeau." },
  { question: "Faut-il emporter un adaptateur universel ?", answer: "Oui, c'est un indispensable. Un adaptateur universel couvre toutes les prises du monde. Les modèles avec ports USB intégrés sont particulièrement pratiques. Comptez 15-25€ pour un modèle fiable. Complétez avec une multiprise compacte si vous avez plusieurs appareils à charger." },
  { question: "Comment rouler ses vêtements pour gagner de la place ?", answer: "La technique du roulage permet de gagner 30% d'espace par rapport au pliage classique et réduit les faux plis. Roulez chaque vêtement serré, puis organisez-les dans des cubes de rangement par catégorie (hauts, bas, sous-vêtements). Les cubes compriment le contenu et facilitent l'organisation." },
  { question: "Quels médicaments emporter en voyage ?", answer: "Constituez une trousse de base : paracétamol, ibuprofène, antidiarrhéique (Imodium), antihistaminique, pansements, antiseptique, crème anti-moustiques DEET 50%, crème solaire SPF50, et vos médicaments habituels avec ordonnance traduite en anglais. Pour les pays tropicaux, ajoutez des sachets de réhydratation orale." },
];

const GuideQueMettreValise = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Que Mettre dans sa Valise : Checklist Complète"
        description="Checklist complète pour faire sa valise : vêtements, électronique, santé, documents. Tous les indispensables pour voyager léger et organisé selon votre destination."
        url="/guides/que-mettre-valise"
        hideH1={true}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Guides", url: "/guides" },
          { name: "Que mettre dans sa valise", url: "/guides/que-mettre-valise" },
        ]}
      />
      <Header />

      <div className="container mx-auto px-4 py-12 pt-24">
        <Link to="/guides" className="inline-flex items-center text-ocean hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux guides
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
              <Luggage className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              Que Mettre dans sa Valise : la Checklist Complète
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Faire sa valise est un art qui s'apprend. Trop souvent, les voyageurs emportent le double de ce dont ils ont besoin et regrettent d'avoir oublié l'essentiel. Ce guide vous aide à préparer vos bagages intelligemment, avec une checklist adaptable à toutes les destinations et toutes les durées de voyage.
            </p>
          </div>

          {/* Choisir son bagage */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <PackageCheck className="w-6 h-6 mr-2 text-ocean" />
              Choisir le bon bagage
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Le choix du bagage conditionne tout le reste. Voici les options selon votre type de voyage.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Sac à dos ou valise ?</h3>
              <p>Le sac à dos est idéal pour les voyages itinérants avec beaucoup de déplacements (Asie du Sud-Est, tour d'Europe en train). La valise à roulettes convient mieux pour les séjours fixes, les voyages d'affaires ou les destinations urbaines. Le sac à dos hybride (avec roulettes) est un bon compromis.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Quelle taille ?</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Week-end (2-4 jours)</strong> — Sac cabine 20-30L ou valise cabine</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Voyage court (1-2 semaines)</strong> — Sac 35-45L ou valise cabine/moyenne</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Voyage long (3+ semaines)</strong> — Sac 45-60L. Pas plus grand : vous le remplirez de superflu</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Tour du monde</strong> — Sac 50-65L + petit sac à dos de jour 20L</span></li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mt-4">Nos recommandations</h3>
              <p>L'Osprey Farpoint/Fairview 40L est le meilleur sac polyvalent (ouverture valise, confort de portage). Le Patagonia Black Hole 55L est ultra-résistant et imperméable. Le Decathlon Travel 100 40L offre un excellent rapport qualité-prix pour les budgets serrés.</p>
            </div>
          </Card>

          {/* Vêtements */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Shirt className="w-6 h-6 mr-2 text-ocean" />
              Vêtements : la garde-robe minimaliste du voyageur
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>La règle d'or : emportez des vêtements pour 4-5 jours maximum, quel que soit la durée du voyage. Vous ferez des lessives en route.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Pour un pays chaud (Asie, Amérique Latine, Afrique)</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>3-4 t-shirts en matière technique à séchage rapide</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>2 shorts ou pantalons convertibles (short/pantalon)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>1 chemise ou blouse à manches longues (temples, protection soleil)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>1 maillot de bain</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>1 veste imperméable légère et compressible</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>4-5 sous-vêtements et paires de chaussettes</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>1 paire de sandales (Teva, Birkenstock) + 1 paire de chaussures fermées</span></li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mt-4">Pour un pays froid ou tempéré (Europe, Canada)</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Système 3 couches : sous-vêtement thermique + polaire + veste imperméable</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>2-3 t-shirts mérinos (anti-odeur, thermorégulateur)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>1-2 pantalons (dont 1 jean ou pantalon polyvalent)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Bonnet, gants et écharpe légère</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Chaussures de marche imperméables</span></li>
              </ul>
            </div>
          </Card>

          {/* Électronique */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Smartphone className="w-6 h-6 mr-2 text-ocean" />
              Électronique et accessoires tech
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>La technologie est devenue indispensable en voyage, mais inutile de tout emporter. Voici l'essentiel :</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Smartphone</strong> — Votre outil principal : GPS, traduction, réservations, photos. Protégez-le avec une coque étanche si vous allez à la plage ou sous la pluie.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Batterie externe 20 000 mAh</strong> — Indispensable pour les longues journées sans prise. L'Anker PowerCore est la référence.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Adaptateur universel</strong> — Un modèle avec ports USB-A et USB-C intégrés remplace plusieurs chargeurs.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Écouteurs à réduction de bruit</strong> — Transforment les longs vols et trajets en bus. Le Sony WH-1000XM5 est le meilleur rapport qualité-prix.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>eSIM ou carte SIM locale</strong> — Activez une eSIM (Holafly, Airalo) avant le départ pour avoir internet dès l'atterrissage.</span></li>
              </ul>
            </div>
          </Card>

          {/* Santé et hygiène */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Pill className="w-6 h-6 mr-2 text-ocean" />
              Trousse de santé et hygiène
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Une trousse de pharmacie bien préparée peut vous éviter bien des désagréments, surtout dans les pays où l'accès aux médicaments familiers est limité.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4">Médicaments essentiels</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Paracétamol et ibuprofène (douleurs, fièvre)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Antidiarrhéique (Imodium) et sachets de réhydratation orale</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Antihistaminique (allergies, piqûres d'insectes)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Pansements, compresses stériles et antiseptique</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Vos médicaments habituels avec ordonnance traduite</span></li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mt-4">Hygiène et protection</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Crème solaire SPF50 (achetez-la avant, souvent plus chère sur place)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Répulsif anti-moustiques DEET 50% (indispensable en zone tropicale)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Gel hydroalcoolique et lingettes désinfectantes</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span>Produits de toilette en format voyage (100ml max pour la cabine)</span></li>
              </ul>
            </div>
          </Card>

          {/* Documents et sécurité */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <ShieldCheck className="w-6 h-6 mr-2 text-ocean" />
              Documents et sécurité
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Les documents sont la partie la plus critique de vos bagages. Une perte peut transformer votre voyage en cauchemar.</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Passeport</strong> — Vérifiez la validité (6 mois minimum après retour pour beaucoup de pays)</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Photocopies</strong> — Gardez des copies séparées de vos documents + versions numériques dans le cloud</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Cadenas TSA</strong> — Pour sécuriser votre sac en auberge et en transit</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Pochette de cou ou ceinture secrète</strong> — Pour garder passeport et argent en sécurité</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Attestation d'assurance voyage</strong> — Imprimée et en version numérique</span></li>
              </ul>
            </div>
          </Card>

          {/* Astuces */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Sun className="w-6 h-6 mr-2 text-ocean" />
              Astuces pour voyager léger
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="space-y-3 ml-4">
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>La règle des 3-4-5</strong> — 3 bas, 4 hauts, 5 sous-vêtements. C'est suffisant pour n'importe quelle durée.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Roulez, ne pliez pas</strong> — Le roulage économise 30% d'espace et réduit les faux plis.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Cubes de rangement</strong> — Indispensables pour organiser et comprimer vos affaires. Eagle Creek et Peak Design sont les références.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Portez le plus lourd</strong> — Mettez vos chaussures les plus lourdes et votre veste dans l'avion, pas dans le sac.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div><span><strong>Laissez 20% de vide</strong> — Pour les souvenirs et les achats sur place.</span></li>
              </ul>
            </div>
          </Card>

          {/* FAQ */}
          <FAQSection faqs={faqs} className="mb-8" />

          {/* Liens internes */}
          <Card className="p-8 mb-8 bg-muted/20">
            <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
              <Compass className="w-6 h-6 mr-2 text-ocean" />
              À lire aussi sur Cap sur le Monde
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Préparer son voyage : guide complet", url: "/guides/preparer-voyage" },
                { label: "Budget voyage : maîtriser ses dépenses", url: "/guides/budget-voyage" },
                { label: "Construire son itinéraire de voyage", url: "/guides/itineraire-voyage" },
                { label: "Meilleurs sites pour réserver un voyage", url: "/guides/meilleurs-sites-reserver-voyage" },
                { label: "Bons plans cartes SIM et eSIM", url: "/bons-plans/cartes-sim" },
                { label: "Tests équipement voyage", url: "/tests" },
                { label: "Sécurité en voyage solo", url: "/guides/securite" },
                { label: "Toutes nos destinations", url: "/destinations" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-ocean/40 hover:bg-background transition-all text-foreground hover:text-ocean">
                  <span className="text-ocean">→</span>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </Card>
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-8">
          <AffiliateBlock {...AFFILIATE_BLOCKS.equipement} variant="compact" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuideQueMettreValise;
