import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from "@/components/affiliate";
import { AFFILIATE_BLOCKS } from "@/lib/affiliateData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, DollarSign, Compass, Sun, Cloud, Thermometer } from "lucide-react";
import italieImage from "@/assets/destinations/italie.jpg";

const QuandPartirItalie = () => {
  const faqs = [
    { question: "Quelle est la meilleure période pour visiter l'Italie ?", answer: "Le printemps (avril-mai) et l'automne (septembre-octobre) sont idéaux. Températures agréables, moins de touristes et prix plus bas qu'en été." },
    { question: "Fait-il chaud en Italie en été ?", answer: "Oui, très chaud dans le sud et le centre (35-40°C à Rome en juillet-août). Le nord est plus supportable (28-32°C). La canicule rend les visites urbaines difficiles." },
    { question: "Peut-on visiter l'Italie en hiver ?", answer: "Oui ! Rome et Naples sont agréables (8-15°C). Le nord est froid mais les villes d'art sont désertes. C'est aussi la saison du ski dans les Dolomites et les Alpes italiennes." },
    { question: "Quand aller en Italie pour la plage ?", answer: "De mi-juin à mi-septembre pour la Sardaigne, la Sicile et les Pouilles. Les eaux sont les plus chaudes en août-septembre (24-26°C)." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir en Italie ? Climat et Meilleure Période"
        description="Guide complet sur le climat en Italie mois par mois. Découvrez la meilleure période pour visiter Rome, Florence, Venise, la Sicile selon vos envies."
        image={italieImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-01" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir en Italie", url: "/blog/quand-partir-italie" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Quand Partir en Italie ? Climat, Saisons et Meilleure Période
          </h1>

          <img src={italieImage} alt="Paysage d'Italie au printemps" className="w-full rounded-2xl mb-8 object-cover max-h-96" loading="lazy" />

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="lead text-xl mb-6">
              L'Italie bénéficie d'un climat méditerranéen enviable, mais les conditions varient considérablement entre les Alpes du nord et la Sicile au sud. Choisir le bon moment pour votre voyage peut faire toute la différence entre une expérience magique et un séjour étouffant au milieu des foules. Ce guide vous aide à trouver la période idéale selon votre destination et vos envies.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Climat Général de l'Italie</h2>
            <p>
              L'Italie s'étend sur près de 1 200 km du nord au sud, créant des zones climatiques très distinctes. Le <strong>nord</strong> (Milan, Venise, les lacs) a un climat continental avec des hivers froids et des étés chauds. Le <strong>centre</strong> (Rome, Florence, Toscane) jouit d'un climat méditerranéen tempéré. Le <strong>sud</strong> (Naples, Pouilles, Sicile, Sardaigne) profite d'un climat méditerranéen chaud avec des étés très secs.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Tableau Climatique par Région</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Saison</th>
                    <th className="border border-border p-3 text-center">Nord (Milan/Venise)</th>
                    <th className="border border-border p-3 text-center">Centre (Rome/Florence)</th>
                    <th className="border border-border p-3 text-center">Sud (Naples/Sicile)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3 font-medium">🌸 Printemps (mars-mai)</td><td className="border border-border p-3 text-center">12-22°C</td><td className="border border-border p-3 text-center">14-24°C</td><td className="border border-border p-3 text-center">16-26°C</td></tr>
                  <tr><td className="border border-border p-3 font-medium">☀️ Été (juin-août)</td><td className="border border-border p-3 text-center">24-32°C</td><td className="border border-border p-3 text-center">28-36°C</td><td className="border border-border p-3 text-center">30-40°C</td></tr>
                  <tr><td className="border border-border p-3 font-medium">🍂 Automne (sept-nov)</td><td className="border border-border p-3 text-center">10-24°C</td><td className="border border-border p-3 text-center">14-28°C</td><td className="border border-border p-3 text-center">18-30°C</td></tr>
                  <tr><td className="border border-border p-3 font-medium">❄️ Hiver (déc-fév)</td><td className="border border-border p-3 text-center">0-8°C</td><td className="border border-border p-3 text-center">4-12°C</td><td className="border border-border p-3 text-center">8-16°C</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Le Printemps (Avril-Mai) : La Meilleure Période</h2>
            <p>
              Le printemps est unanimement considéré comme <strong>la meilleure période pour visiter l'Italie</strong>. Les températures sont douces et agréables (18-25°C), la nature est en fleurs, et les touristes sont moins nombreux qu'en été. C'est le moment idéal pour les villes d'art (Rome, Florence, Venise), la Toscane et les randonnées sur la côte amalfitaine.
            </p>
            <p>
              <strong>Avantages :</strong> Climat parfait pour les visites, prix modérés, jardins en fleurs, lumière idéale pour la photo. La Pâques à Rome est un moment particulièrement solennel et beau. Les terrasses des cafés se remplissent et la dolce vita bat son plein.
            </p>
            <p>
              <strong>Inconvénients :</strong> La mer est encore fraîche pour la baignade (18-20°C). Quelques averses possibles en mars-avril. La Semaine sainte peut être très fréquentée à Rome.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.vols} />

            <h2 className="text-2xl font-bold mt-10 mb-4">L'Été (Juin-Août) : Soleil et Foule</h2>
            <p>
              L'été italien est chaud, ensoleillé et très touristique. C'est la haute saison par excellence : les prix sont au maximum, les sites bondés et les températures caniculaires dans le centre et le sud. Cependant, c'est la période idéale pour les <strong>plages et les îles</strong> (Sardaigne, Sicile, Pouilles, côte amalfitaine).
            </p>
            <p>
              En août, le phénomène du « Ferragosto » (15 août) vide les villes de leurs habitants qui fuient vers la côte. De nombreux commerces et restaurants ferment, surtout dans les petites villes. Paradoxalement, Rome peut être agréablement calme pendant la dernière quinzaine d'août.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6 rounded-r-lg">
              <p className="font-medium">💡 <strong>Conseil :</strong> Si vous visitez l'Italie en été, commencez les visites tôt le matin (avant 9h) et faites la sieste aux heures les plus chaudes (13h-16h). Hydratez-vous régulièrement et portez un chapeau.</p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">L'Automne (Septembre-Octobre) : L'Arrière-Saison Dorée</h2>
            <p>
              Septembre et octobre sont des mois <strong>magiques en Italie</strong>. Les températures restent chaudes (20-28°C), la mer est à sa température maximale, et les touristes estivaux sont partis. C'est la saison des vendanges en Toscane, des truffes dans le Piémont et des couleurs automnales dans les Dolomites.
            </p>
            <p>
              Octobre est particulièrement recommandé pour la Sicile et les Pouilles, où l'été indien se prolonge bien au-delà de la fin septembre. Les prix baissent significativement et l'ambiance est plus authentique. C'est aussi la période parfaite pour les randonnées et le cyclotourisme.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">L'Hiver (Novembre-Mars) : La Saison Cachée</h2>
            <p>
              L'hiver en Italie est une option sous-estimée. Si le nord est froid et brumeux (Venise sous le brouillard a un charme mystérieux), le centre et le sud restent agréables. Rome en hiver offre des températures de 8-15°C, des musées quasi vides et des prix d'hébergement divisés par deux.
            </p>
            <p>
              C'est aussi la saison du ski dans les <strong>Dolomites</strong> et les Alpes italiennes, des marchés de Noël dans le Tyrol du Sud, et du Carnaval de Venise (février). La cuisine hivernale italienne — risottos, polenta, truffes, soupes — est un délice.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} />

            <h2 className="text-2xl font-bold mt-10 mb-4">Quand Partir par Destination</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Rome</h3>
            <p>
              <strong>Meilleure période :</strong> Avril-mai et septembre-octobre. Évitez juillet-août (canicule, 35-40°C). L'hiver (décembre-février) est doux et calme, idéal pour les musées.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Florence et Toscane</h3>
            <p>
              <strong>Meilleure période :</strong> Avril-juin et septembre-octobre. La Toscane en automne (vendanges, truffes, couleurs) est un rêve. Évitez l'été en ville (très chaud et bondé).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Venise</h3>
            <p>
              <strong>Meilleure période :</strong> Avril-mai et septembre-octobre. En été c'est bondé et cher. En hiver, risque d'acqua alta (inondations) mais ambiance unique. Le Carnaval (février) est spectaculaire mais très fréquenté.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Sicile et Sardaigne</h3>
            <p>
              <strong>Meilleure période :</strong> Mai-juin et septembre-octobre pour un mix culture/plage. Juillet-août pour la plage pure (eau à 25°C). L'hiver est doux (12-18°C) et agréable pour les randonnées et les visites culturelles.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Dolomites et Lacs du Nord</h3>
            <p>
              <strong>Meilleure période :</strong> Juin-septembre pour la randonnée, décembre-mars pour le ski. Les lacs (Côme, Garde, Majeur) sont splendides en mai-septembre.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Événements et Festivals à Ne Pas Manquer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Février :</strong> Carnaval de Venise — masques, costumes et festivités pendant 2 semaines</li>
              <li><strong>Avril :</strong> Pâques à Rome — messe papale place Saint-Pierre</li>
              <li><strong>Mai :</strong> Regata Storica à Venise, festival des fleurs à Florence</li>
              <li><strong>Juillet :</strong> Palio de Sienne — course de chevaux médiévale spectaculaire</li>
              <li><strong>Août :</strong> Festival du film de Venise (Mostra)</li>
              <li><strong>Septembre-Octobre :</strong> Vendanges en Toscane et Piémont, Festival de la truffe d'Alba</li>
              <li><strong>Décembre :</strong> Marchés de Noël dans le Tyrol du Sud, crèches napolitaines</li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/destinations/italie"><Button variant="outline"><MapPin className="w-4 h-4 mr-2" />Guide Italie</Button></Link>
              <Link to="/blog/itineraire-italie-10-jours"><Button variant="outline"><Compass className="w-4 h-4 mr-2" />Itinéraire 10 jours</Button></Link>
              <Link to="/blog/budget-voyage-italie"><Button variant="outline"><DollarSign className="w-4 h-4 mr-2" />Budget Italie</Button></Link>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirItalie;
