import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import ArticleBreadcrumb from "@/components/ArticleBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { AffiliateDisclaimer } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const ErreursAEviterVoyage = () => {
  const faqs = [
    { question: "Quelle est l'erreur n°1 des voyageurs débutants ?", answer: "Surcharger son sac. Un sac trop lourd = douleurs, fatigue, frais supplémentaires en bagage soute. Règle d'or : votre sac ne doit pas dépasser 10-12 kg pour 2 semaines de voyage. Faites des piles de vêtements puis enlevez-en la moitié." },
    { question: "Faut-il vraiment souscrire une assurance voyage ?", answer: "Oui, à 100%. Une hospitalisation aux USA peut coûter 50 000-200 000€, un rapatriement sanitaire 30 000-80 000€. Votre carte bancaire (Visa Premier, Gold Mastercard) couvre seulement les 90 premiers jours et les hospitalisations courtes. 30-40€ pour 2 semaines vaut largement le risque." },
    { question: "Combien de temps avant le départ réserver un vol ?", answer: "Pour l'Europe : 6 à 8 semaines avant. Pour les vols long-courriers : 3 à 6 mois. Évitez les réservations de dernière minute (sauf bonnes affaires de dernière minute) et les réservations 1 an à l'avance (souvent plus chères que 3 mois avant)." },
    { question: "Peut-on payer partout en carte en voyage ?", answer: "Non. Dans 80% des pays asiatiques, africains et latino-américains, le cash reste roi pour les petits commerces, taxis, marchés. Retirez TOUJOURS un peu de cash en arrivant (~100€ équivalent) et gardez-le séparé de la carte. Évitez les bureaux de change d'aéroport (taux désastreux)." },
    { question: "Faut-il faire confiance aux taxis à l'aéroport ?", answer: "Évitez les rabatteurs ! Utilisez les taxis officiels (compteur), les VTC (Uber, Bolt, Grab selon le pays) ou les transports publics. Au Vietnam, Thaïlande, Maroc : les arnaques au compteur 'cassé' sont fréquentes. Demandez le prix AVANT de monter ou exigez le compteur." },
    { question: "Quel est le meilleur jour pour acheter un billet d'avion ?", answer: "Mythe largement débunké. Les prix varient selon l'algorithme de la compagnie, pas selon le jour de l'achat. Ce qui marche vraiment : être flexible sur les dates de voyage (mardi/mercredi 30% moins cher que vendredi), comparer sur Skyscanner / Google Flights, activer les alertes de prix." },
    { question: "Peut-on boire l'eau du robinet en voyage ?", answer: "Selon les pays : OUI en Europe occidentale, Amérique du Nord, Japon, Australie. NON en Asie du Sud-Est, Afrique, Amérique latine, Inde. Dans ces zones, utilisez : eau en bouteille, gourde filtrante (Grayl, LifeStraw), pastilles purifiantes. Évitez aussi les glaçons et les fruits non pelés." },
    { question: "Faut-il prévenir sa banque avant de partir ?", answer: "Plus indispensable en 2026 avec les banques modernes (Wise, Revolut, Boursorama) qui détectent automatiquement les voyages. Pour les banques traditionnelles : oui, un appel rapide évite que votre carte soit bloquée pour 'transaction suspecte' au premier achat à l'étranger." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="10 erreurs à éviter en voyage (et comment ne pas les faire)"
        description="Sac surchargé, pas d'assurance, change à l'aéroport, taxis non officiels... Les 10 erreurs classiques qui plombent un voyage, et comment les éviter."
        url="/blog/erreurs-a-eviter-voyage"
        ogType="article"
        hideH1
        articleMeta={{
          author: "Cap sur le Monde",
          datePublished: "2026-06-27",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Erreurs à éviter en voyage", url: "/blog/erreurs-a-eviter-voyage" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24">
        <ArticleBreadcrumb
          items={[
            { label: "Préparer son voyage", to: "/preparer-voyage" },
            { label: "Erreurs à éviter" },
          ]}
        />

        <div className="container mx-auto px-4 py-12">
          <Link to="/preparer-voyage" className="inline-flex items-center text-ocean hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour Préparer son voyage
          </Link>

          <article className="max-w-4xl mx-auto prose prose-lg">
            <div className="text-center mb-12 not-prose">
              <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                10 erreurs à éviter en voyage (et comment ne pas les faire)
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Les pièges classiques qui transforment un beau voyage en galère. Tirés de notre expérience sur 30+ pays — et de celle de nos lecteurs.
              </p>
            </div>

            <p className="lead text-gray-700">
              Un voyage raté ne vient presque jamais d'un événement extérieur. <strong>9 fois sur 10, c'est une erreur
              évitable</strong> faite avant le départ ou pendant. Voici les 10 plus fréquentes — et la solution concrète
              pour chacune.
            </p>

            <h2 className="text-cyan-600">1. Surcharger son sac</h2>
            <p>
              C'est l'erreur n°1 universelle. Un sac de 18 kg vous épuise dès la première journée. La règle d'or :
              <strong> 10 à 12 kg max</strong> pour 2 semaines, peu importe la destination.
            </p>
            <p>
              <strong>Solution :</strong> faites votre sac, posez-le, enlevez la moitié. Privilégiez les vêtements
              techniques (séchage rapide), 3 hauts + 2 bas + 5 sous-vêtements suffisent. Lavage tous les 5 jours.
              Consultez notre <Link to="/equipement-voyage" className="text-ocean">checklist d'équipement</Link>.
            </p>

            <h2 className="text-cyan-600">2. Partir sans assurance voyage</h2>
            <p>
              "Je n'en aurai pas besoin" est la pensée magique qui ruine des familles entières chaque année. Une
              hospitalisation aux USA = 50 000 à 200 000€. Un rapatriement sanitaire depuis l'Asie = 30 000 à 80 000€.
            </p>
            <p>
              <strong>Solution :</strong> 30 à 40€ pour 2 semaines avec ACS ou Chapka. Comparatif détaillé dans notre
              <Link to="/guides/securite" className="text-ocean"> guide assurance voyage</Link>. Non négociable.
            </p>

            <h2 className="text-cyan-600">3. Changer ses devises à l'aéroport</h2>
            <p>
              Les bureaux de change aéroports appliquent des marges de 10 à 18%. Sur 500€ changés, vous perdez
              50 à 90€ instantanément.
            </p>
            <p>
              <strong>Solution :</strong> retirez du cash directement aux distributeurs locaux avec une carte
              <strong> Wise ou Revolut</strong> (taux de change réel, frais quasi nuls). Ou payez en carte partout où
              c'est accepté. <Link to="/blog/applications-indispensables-voyage" className="text-ocean">Voir les apps bancaires recommandées</Link>.
            </p>

            <h2 className="text-cyan-600">4. Faire confiance aux rabatteurs aéroport / gare</h2>
            <p>
              "Taxi monsieur, très bon prix !" = arnaque garantie dans 90% des cas. Surcoût moyen : 3 à 5x le prix normal.
            </p>
            <p>
              <strong>Solution :</strong> sortez de l'aéroport en ignorant les rabatteurs. Utilisez les taxis officiels
              (file dédiée), Uber, Bolt ou Grab selon le pays. Au Vietnam : <strong>Grab uniquement</strong>. En Thaïlande :
              taxi rouge "Public Taxi-Meter" avec compteur exigé.
            </p>

            <h2 className="text-cyan-600">5. Ne pas télécharger les cartes hors-ligne</h2>
            <p>
              Tomber en rade de batterie ou de data, dans une ruelle de Hanoï à 23h, avec 50 numéros de moto qui se
              ressemblent : situation classique.
            </p>
            <p>
              <strong>Solution :</strong> AVANT le départ, téléchargez la zone Google Maps complète (Menu → Plans
              hors-connexion) et installez Maps.me. Voir notre
              <Link to="/blog/applications-indispensables-voyage" className="text-ocean"> liste d'apps voyage</Link>.
            </p>

            <h2 className="text-cyan-600">6. Réserver son hébergement à la dernière minute (en haute saison)</h2>
            <p>
              Bali en août, Japon pendant les cerisiers, Maroc à Noël : les bons hôtels se remplissent 3 à 6 mois à
              l'avance. Le dernier moment = chambres pourries à 3x le prix.
            </p>
            <p>
              <strong>Solution :</strong> en haute saison, réservez les 3-4 premières nuits dès l'achat du billet. Vous
              vous laissez la flexibilité pour la suite, mais vous sécurisez l'arrivée.
            </p>

            <h2 className="text-cyan-600">7. Mal gérer le décalage horaire</h2>
            <p>
              Dormir à l'arrivée en plein jour, somnoler 3 jours = jet lag prolongé qui plombe le début du voyage.
            </p>
            <p>
              <strong>Solution :</strong> dès l'embarquement, calez votre montre sur l'heure de destination. Mangez,
              dormez et bougez selon ce nouveau rythme. À l'arrivée : <strong>tenir jusqu'au soir local</strong> avant
              de dormir, même si vous êtes épuisé. 80% du jet lag absorbé en 1 nuit.
            </p>

            <h2 className="text-cyan-600">8. Programme trop chargé</h2>
            <p>
              "On peut faire Tokyo, Kyoto, Osaka, Hiroshima en 7 jours, hein ?" Spoiler : non. Trop de transferts =
              fatigue, frais multipliés, zéro temps pour s'imprégner.
            </p>
            <p>
              <strong>Solution :</strong> règle des "3-4 nuits minimum par lieu". Mieux vaut profiter de 3 destinations
              à fond que survoler 7 lieux en stress. Voir nos
              <Link to="/blog/itineraire-vietnam-15-jours" className="text-ocean"> itinéraires testés</Link>.
            </p>

            <h2 className="text-cyan-600">9. Ignorer la nourriture locale par peur</h2>
            <p>
              Manger McDo à Bangkok ou Subway à Hanoï = passer à côté de 70% de l'expérience. Et ironiquement, les
              chaînes occidentales sont parfois MOINS hygiéniques que les stands de rue locaux à fort turnover.
            </p>
            <p>
              <strong>Solution :</strong> repérez les stands bondés de locaux (gage de fraîcheur), mangez ce qui est
              cuit, évitez les salades crues et les glaçons en zone à risque. Une bonne gourde filtrante (Grayl) vous
              sauve aussi des troubles intestinaux.
            </p>

            <h2 className="text-cyan-600">10. Pas de copie de ses documents</h2>
            <p>
              Perdre passeport et téléphone simultanément = cauchemar bureaucratique de 3 à 7 jours pour rentrer.
            </p>
            <p>
              <strong>Solution :</strong> avant le départ, photographiez passeport, visa, e-billets, carte bancaire,
              assurance. Stockez les copies dans un cloud (Google Drive, Dropbox) accessible depuis n'importe quel
              navigateur. Photocopie papier dans une poche séparée du passeport.
            </p>

            <FAQSection faqs={faqs} className="mt-10" />

            <section className="not-prose mt-10 p-6 bg-muted/30 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">À lire aussi</h2>
              <ul className="grid gap-2 sm:grid-cols-2 text-ocean">
                <li>→ <Link to="/preparer-voyage" className="hover:underline">Préparer son voyage : guide</Link></li>
                <li>→ <Link to="/equipement-voyage" className="hover:underline">Équipement voyage indispensable</Link></li>
                <li>→ <Link to="/guides/securite" className="hover:underline">Meilleure assurance voyage 2026</Link></li>
                <li>→ <Link to="/blog/applications-indispensables-voyage" className="hover:underline">20 apps voyage indispensables</Link></li>
                <li>→ <Link to="/comparatifs/meilleur-adaptateur-universel" className="hover:underline">Meilleur adaptateur universel</Link></li>
                <li>→ <Link to="/comparatifs/meilleure-batterie-externe-voyage" className="hover:underline">Meilleure batterie externe</Link></li>
              </ul>
            </section>

            <AffiliateDisclaimer />
          </article>

          <div className="max-w-4xl mx-auto">
            <RelatedArticles category="Préparer" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErreursAEviterVoyage;
