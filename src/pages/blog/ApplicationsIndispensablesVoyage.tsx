import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import ArticleBreadcrumb from "@/components/ArticleBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { AffiliateDisclaimer } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone, MapPin, CreditCard, Languages, Wifi, Bed } from "lucide-react";

const ApplicationsIndispensablesVoyage = () => {
  const faqs = [
    { question: "Quelles applications télécharger AVANT de partir en voyage ?", answer: "Maps.me ou Google Maps offline (cartes hors-ligne), Google Translate (avec packs langues téléchargés), Wise ou Revolut (banque en ligne), XE Currency (conversion), votre eSIM (Holafly), Booking et Airbnb, l'app de votre compagnie aérienne. Tout doit être installé et testé avant le départ." },
    { question: "Quelle application de traduction est la meilleure en voyage ?", answer: "Google Translate reste la référence : 100+ langues, mode hors-ligne, traduction par photo (menu, panneaux), conversation en temps réel. Téléchargez les packs hors-ligne avant le départ. DeepL est plus précis pour les langues européennes mais moins de langues asiatiques." },
    { question: "Faut-il une app bancaire spéciale pour voyager ?", answer: "Oui, fortement recommandé. Wise (anciennement TransferWise) ou Revolut offrent : pas de frais de retrait à l'étranger, taux de change réel, paiement multi-devises, alertes en temps réel. Économie moyenne : 50-150€ sur un voyage de 2 semaines vs une carte bancaire classique." },
    { question: "Comment avoir internet en voyage sans se ruiner ?", answer: "Une eSIM est la meilleure solution en 2026 : pas de carte physique, activation en 5 minutes, pas de frais de roaming. Holafly propose des forfaits data illimitée à partir de 30€ pour 15 jours. Airalo est moins cher mais data limitée. Évitez le roaming opérateur français : 5-15€/jour." },
    { question: "Quelle app utiliser pour réserver un logement en voyage ?", answer: "Booking.com pour les hôtels (annulation gratuite, comparateur), Airbnb pour les appartements et séjours longs, Hostelworld pour les auberges de jeunesse. Pour les city-trips économiques, Booking propose souvent des prix plus bas qu'Airbnb. Pour 5+ nuits, Airbnb est souvent plus avantageux." },
    { question: "Google Maps ou Maps.me : lequel choisir ?", answer: "Les deux sont complémentaires. Google Maps : meilleurs avis, info trafic temps réel, transports en commun. Maps.me : 100% hors-ligne, parfait pour la randonnée, sentiers détaillés, pas de connexion requise. Téléchargez les zones Google Maps + installez Maps.me pour la sécurité." },
    { question: "Une app pour gérer son budget voyage ?", answer: "Splitwise (gestion des dépenses en groupe), TravelSpend ou Trail Wallet (suivi quotidien par catégorie), Bunq ou Revolut (sous-comptes voyage avec alerte). Splitwise est gratuit et incontournable pour les voyages à plusieurs. Notre planificateur de budget intégré sur le site est aussi 100% gratuit." },
    { question: "Faut-il une VPN pour voyager ?", answer: "Recommandé. Un VPN (NordVPN, Surfshark) protège vos données sur les Wi-Fi publics (aéroports, hôtels) et permet d'accéder à Netflix/banque française depuis l'étranger. Indispensable en Chine où Google, WhatsApp et Facebook sont bloqués sans VPN." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="20 applications indispensables pour voyager en 2026 (testées)"
        description="Cartes hors-ligne, traduction, banque, eSIM, réservation : la liste complète des applications voyage indispensables en 2026, classées par catégorie."
        url="/blog/applications-indispensables-voyage"
        ogType="article"
        hideH1
        articleMeta={{
          author: "Cap sur le Monde",
          datePublished: "2026-06-27",
        }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Applications indispensables voyage", url: "/blog/applications-indispensables-voyage" },
        ]}
      />
      <Header />
      <main className="flex-grow pt-24">
        <ArticleBreadcrumb
          items={[
            { label: "Préparer son voyage", to: "/preparer-voyage" },
            { label: "Applications indispensables" },
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
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant font-bold text-foreground mb-4">
                20 applications indispensables pour voyager en 2026
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cartes hors-ligne, traduction, banque, eSIM, hébergements : la sélection testée sur 30+ pays, classée par catégorie.
              </p>
            </div>

            <p className="lead text-gray-700">
              Un smartphone bien équipé remplace aujourd'hui un guide papier, un dictionnaire, une carte, un convertisseur
              de devises et un appareil photo. Encore faut-il avoir les bonnes applications, installées
              <strong> avant le départ</strong> (et testées au moins une fois). Voici les 20 apps que nous utilisons à
              chaque voyage, classées par usage.
            </p>

            <h2 className="flex items-center gap-3 text-cyan-600">
              <MapPin className="w-6 h-6 text-ocean" /> 1. Cartes & navigation
            </h2>
            <ul>
              <li><strong>Google Maps</strong> — la référence. <em>Téléchargez la zone en hors-ligne avant le départ</em> (Menu → Plans hors-connexion). Indispensable pour la marche, les transports en commun et les avis restaurants.</li>
              <li><strong>Maps.me</strong> — 100% hors-ligne, sentiers de randonnée détaillés, idéal en montagne et zones reculées.</li>
              <li><strong>Citymapper</strong> — meilleure app de transports urbains (Paris, Londres, NYC, Tokyo, Berlin). Trajets multimodaux en temps réel.</li>
              <li><strong>Rome2Rio</strong> — comparateur tous-modes (avion, train, bus, ferry) pour planifier les trajets entre villes.</li>
            </ul>

            <h2 className="flex items-center gap-3 text-cyan-600">
              <Languages className="w-6 h-6 text-ocean" /> 2. Traduction & langues
            </h2>
            <ul>
              <li><strong>Google Translate</strong> — 100+ langues, mode hors-ligne, traduction par photo (menus, panneaux), conversation temps réel.</li>
              <li><strong>DeepL</strong> — traductions plus précises pour l'européen (français, anglais, espagnol, allemand, italien).</li>
              <li><strong>Pleco</strong> (Chine) ou <strong>Yomiwa</strong> (Japon) — dictionnaires spécialisés caractères asiatiques avec reconnaissance d'écriture manuscrite.</li>
            </ul>

            <h2 className="flex items-center gap-3 text-cyan-600">
              <CreditCard className="w-6 h-6 text-ocean" /> 3. Banque & paiement
            </h2>
            <ul>
              <li><strong>Wise</strong> (ex-TransferWise) — compte multi-devises, retraits sans frais à l'étranger jusqu'à 200€/mois, taux de change réel. <em>L'app n°1 du voyageur en 2026.</em></li>
              <li><strong>Revolut</strong> — alternative similaire, plus orientée banque européenne, sous-comptes pour budgéter par voyage.</li>
              <li><strong>XE Currency</strong> — convertisseur de devises offline, taux mis à jour.</li>
              <li><strong>Splitwise</strong> — gestion des dépenses partagées en groupe (indispensable en couple ou entre amis).</li>
            </ul>

            <h2 className="flex items-center gap-3 text-cyan-600">
              <Wifi className="w-6 h-6 text-ocean" /> 4. Internet & connexion
            </h2>
            <ul>
              <li><strong>Holafly</strong> — eSIM avec data illimitée dans 200+ destinations. Activation en 5 minutes, pas de carte physique. À partir de 30€ pour 15 jours.</li>
              <li><strong>Airalo</strong> — eSIM moins chère mais data limitée (5 à 20 GB selon forfait).</li>
              <li><strong>NordVPN</strong> ou <strong>Surfshark</strong> — VPN pour Wi-Fi publics et contournement géo-blocages (Chine, Iran).</li>
              <li><strong>Wi-Fi Map</strong> — base de données mondiale de hotspots Wi-Fi avec mots de passe partagés.</li>
            </ul>

            <h2 className="flex items-center gap-3 text-cyan-600">
              <Bed className="w-6 h-6 text-ocean" /> 5. Hébergement & réservation
            </h2>
            <ul>
              <li><strong>Booking.com</strong> — leader hôtellerie, comparateur de prix, annulation gratuite, programme Genius (réductions fidélité).</li>
              <li><strong>Airbnb</strong> — appartements et séjours longs (souvent moins cher pour 5+ nuits).</li>
              <li><strong>Hostelworld</strong> — auberges de jeunesse, idéal pour les backpackers et la rencontre.</li>
              <li><strong>GetYourGuide</strong> — réservation d'activités, billets coupe-file et excursions guidées.</li>
            </ul>

            <h2 className="text-cyan-600">6. Transport (avion, train, taxi)</h2>
            <ul>
              <li><strong>Skyscanner</strong> ou <strong>Google Flights</strong> — comparateurs de vols, alertes de prix.</li>
              <li><strong>Trainline</strong> — réservation trains Europe + UK + Italie + Espagne.</li>
              <li><strong>Uber / Bolt / Grab</strong> — VTC selon la région (Bolt en Europe Est et Afrique, Grab en Asie Sud-Est).</li>
              <li><strong>FlightRadar24</strong> — suivi de vol en temps réel (utile si quelqu'un vient vous chercher).</li>
            </ul>

            <h2 className="text-cyan-600">7. Sécurité & santé</h2>
            <ul>
              <li><strong>Ariane</strong> (service Diplomatie française) — alertes pays + enregistrement de votre voyage auprès de l'ambassade. Gratuit.</li>
              <li><strong>Cap Aventure</strong> ou app de votre assurance voyage — accès rapide aux numéros d'urgence et au contrat.</li>
              <li><strong>What3Words</strong> — partage de position ultra-précis (3 mots = 3x3m), utile pour les secours en zone isolée.</li>
            </ul>

            <h2 className="text-cyan-600">Configuration AVANT le départ : checklist</h2>
            <div className="not-prose p-6 bg-accent/40 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li>☐ Téléchargez les cartes Google Maps et Maps.me de votre destination</li>
                <li>☐ Téléchargez les packs hors-ligne Google Translate (langues utiles)</li>
                <li>☐ Activez votre eSIM (Holafly / Airalo) — pas le jour du départ !</li>
                <li>☐ Créez et alimentez votre compte Wise ou Revolut</li>
                <li>☐ Activez les alertes de prix Skyscanner / Google Flights</li>
                <li>☐ Inscrivez-vous sur Ariane (Diplomatie)</li>
                <li>☐ Sauvegardez les contacts urgents (ambassade, assurance) dans le téléphone</li>
                <li>☐ Activez la double authentification sur les apps bancaires</li>
              </ul>
            </div>

            <FAQSection faqs={faqs} className="mt-10" />

            <section className="not-prose mt-10 p-6 bg-muted/30 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">À lire aussi</h2>
              <ul className="grid gap-2 sm:grid-cols-2 text-ocean">
                <li>→ <Link to="/preparer-voyage" className="hover:underline">Préparer son voyage : le guide</Link></li>
                <li>→ <Link to="/equipement-voyage" className="hover:underline">Équipement voyage indispensable</Link></li>
                <li>→ <Link to="/guides/securite" className="hover:underline">Meilleure assurance voyage 2026</Link></li>
                <li>→ <Link to="/comparatifs/meilleure-batterie-externe-voyage" className="hover:underline">Meilleure batterie externe voyage</Link></li>
                <li>→ <Link to="/comparatifs/meilleur-adaptateur-universel" className="hover:underline">Meilleur adaptateur universel</Link></li>
                <li>→ <Link to="/blog/erreurs-a-eviter-voyage" className="hover:underline">10 erreurs à éviter en voyage</Link></li>
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

export default ApplicationsIndispensablesVoyage;
