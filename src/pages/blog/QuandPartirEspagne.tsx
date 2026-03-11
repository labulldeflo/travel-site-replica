import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { AffiliateBlock } from "@/components/affiliate";
import { AFFILIATE_BLOCKS } from "@/lib/affiliateData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, DollarSign, Compass } from "lucide-react";
import espagneImage from "@/assets/destinations/espagne.jpg";

const QuandPartirEspagne = () => {
  const faqs = [
    { question: "Quelle est la meilleure période pour visiter l'Espagne ?", answer: "Le printemps (avril-mai) et l'automne (septembre-octobre) sont idéaux pour la plupart des régions. L'été est parfait pour les côtes mais étouffant dans l'intérieur." },
    { question: "Fait-il très chaud en Espagne en été ?", answer: "Oui, surtout en Andalousie et dans le centre (35-45°C à Séville et Cordoue en juillet-août). Les côtes méditerranéennes et atlantiques restent plus supportables (28-33°C)." },
    { question: "L'Espagne en hiver, c'est bien ?", answer: "Les Canaries offrent 20-25°C toute l'année. L'Andalousie est douce (12-18°C). Le nord et le centre sont froids. C'est la basse saison avec des prix très bas." },
    { question: "Quand partir en Espagne pour la plage ?", answer: "De juin à septembre pour la Méditerranée et les Baléares. Les Canaries se visitent toute l'année. La côte atlantique (Galice, Pays Basque) est plus fraîche mais belle en été." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Quand Partir en Espagne ? Climat et Meilleure Période"
        description="Guide complet sur le climat en Espagne mois par mois. Meilleure période pour visiter Madrid, Barcelone, l'Andalousie et les îles selon vos envies."
        image={espagneImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-07-01" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Quand Partir en Espagne", url: "/blog/quand-partir-espagne" },
        ]}
      />
      <Header />
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Quand Partir en Espagne ? Climat, Saisons et Meilleure Période
          </h1>

          <img src={espagneImage} alt="Espagne au printemps - meilleure période" className="w-full rounded-2xl mb-8 object-cover max-h-96" loading="lazy" />

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p className="lead text-xl mb-6">
              L'Espagne est un pays aux multiples visages climatiques : entre les plages ensoleillées de la Méditerranée, les chaleurs écrasantes de l'Andalousie intérieure, les pluies du Pays Basque et le printemps éternel des Canaries, chaque région a son propre calendrier idéal. Ce guide vous aide à choisir la meilleure période selon votre destination et vos activités.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Climat Général de l'Espagne</h2>
            <p>
              L'Espagne se divise en trois grandes zones climatiques : la <strong>côte méditerranéenne</strong> (Catalogne, Valence, Andalousie côtière) avec des étés chauds et secs ; le <strong>plateau central</strong> (Madrid, Castille) avec des hivers froids et des étés brûlants ; et la <strong>côte atlantique</strong> (Galice, Pays Basque, Asturies) avec un climat plus frais et humide. Les <strong>Canaries</strong> constituent une zone à part avec un climat subtropical toute l'année.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Tableau Climatique par Région</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Saison</th>
                    <th className="border border-border p-3 text-center">Madrid (Centre)</th>
                    <th className="border border-border p-3 text-center">Barcelone (Médit.)</th>
                    <th className="border border-border p-3 text-center">Séville (Andalousie)</th>
                    <th className="border border-border p-3 text-center">Canaries</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3 font-medium">🌸 Printemps</td><td className="border border-border p-3 text-center">12-24°C</td><td className="border border-border p-3 text-center">14-22°C</td><td className="border border-border p-3 text-center">16-28°C</td><td className="border border-border p-3 text-center">18-24°C</td></tr>
                  <tr><td className="border border-border p-3 font-medium">☀️ Été</td><td className="border border-border p-3 text-center">22-38°C</td><td className="border border-border p-3 text-center">22-32°C</td><td className="border border-border p-3 text-center">26-42°C</td><td className="border border-border p-3 text-center">22-28°C</td></tr>
                  <tr><td className="border border-border p-3 font-medium">🍂 Automne</td><td className="border border-border p-3 text-center">10-22°C</td><td className="border border-border p-3 text-center">14-24°C</td><td className="border border-border p-3 text-center">16-30°C</td><td className="border border-border p-3 text-center">20-26°C</td></tr>
                  <tr><td className="border border-border p-3 font-medium">❄️ Hiver</td><td className="border border-border p-3 text-center">2-10°C</td><td className="border border-border p-3 text-center">6-14°C</td><td className="border border-border p-3 text-center">8-16°C</td><td className="border border-border p-3 text-center">16-22°C</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Le Printemps (Avril-Mai) : La Période Idéale</h2>
            <p>
              Le printemps est la <strong>meilleure période pour découvrir l'Espagne</strong> dans son ensemble. Les températures sont parfaites pour les visites culturelles (18-28°C), la nature est verdoyante et fleurie, et les touristes estivaux ne sont pas encore arrivés. C'est la saison des <strong>ferias</strong> en Andalousie : la Feria de Abril à Séville et les patios fleuris de Cordoue sont des spectacles inoubliables.
            </p>
            <p>
              <strong>Avantages :</strong> Climat doux, prix modérés, ambiance festive, nature en fleurs. Parfait pour Madrid, Séville, Grenade, Barcelone et les randonnées.
            </p>
            <p>
              <strong>Inconvénients :</strong> Eau de mer encore fraîche. Quelques averses possibles au nord. La Semaine sainte (Semana Santa) est très fréquentée dans les villes andalouses.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.vols} />

            <h2 className="text-2xl font-bold mt-10 mb-4">L'Été (Juin-Août) : Plages et Chaleur Intense</h2>
            <p>
              L'été espagnol est synonyme de <strong>chaleur intense</strong> dans le centre et le sud. Séville et Cordoue atteignent régulièrement 40-45°C en juillet-août, rendant les visites culturelles éprouvantes. En revanche, c'est la période parfaite pour les <strong>plages méditerranéennes</strong>, les <strong>Baléares</strong> et la <strong>côte atlantique</strong>.
            </p>
            <p>
              Les côtes de Catalogne, Valence et Andalousie sont bondées mais festives. Le Pays Basque et la Galice offrent une alternative plus fraîche (22-28°C) avec des paysages spectaculaires. Saint-Sébastien, Bilbao et Saint-Jacques-de-Compostelle sont particulièrement agréables en été.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6 rounded-r-lg">
              <p className="font-medium">💡 <strong>Conseil :</strong> En été en Andalousie, adoptez le rythme local : visites le matin tôt (8h-12h), sieste l'après-midi, et sortie le soir après 20h quand la température redescend. Les villes s'animent à partir de 21h.</p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">L'Automne (Septembre-Octobre) : L'Arrière-Saison Parfaite</h2>
            <p>
              Septembre et octobre sont des mois <strong>exceptionnels pour l'Espagne</strong>. Les températures restent chaudes (20-30°C), la mer est à son maximum (24-26°C), les prix baissent et les touristes partent. C'est la saison des vendanges à La Rioja, des festivals gastronomiques et des couleurs automnales dans les montagnes.
            </p>
            <p>
              L'Andalousie en octobre est particulièrement agréable : 25-28°C, soleil garanti, sites culturels accessibles sans file d'attente. Barcelone retrouve son calme après l'afflux estival. Les Canaries restent parfaites avec 24-26°C.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">L'Hiver (Novembre-Mars) : Basse Saison et Bons Plans</h2>
            <p>
              L'hiver espagnol est très variable. Le centre et le nord sont froids (Madrid peut descendre à 0°C). L'Andalousie reste douce (12-18°C) et agréable pour les visites culturelles. Les <strong>Canaries</strong> sont la star de l'hiver européen avec 20-25°C et un soleil quasi garanti — la destination idéale pour fuir le froid.
            </p>
            <p>
              C'est la basse saison : les prix d'hébergement chutent de 30-50%, les sites sont quasi déserts. Le ski est possible dans la Sierra Nevada (près de Grenade) et les Pyrénées. Les marchés de Noël, les crèches vivantes et les Rois Mages (6 janvier) sont des traditions festives à découvrir.
            </p>

            <AffiliateBlock {...AFFILIATE_BLOCKS.hebergement} />

            <h2 className="text-2xl font-bold mt-10 mb-4">Quand Partir par Destination</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Madrid</h3>
            <p><strong>Meilleure période :</strong> Avril-juin et septembre-octobre. L'été est étouffant (35-40°C). L'hiver est froid mais sec et ensoleillé.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Barcelone</h3>
            <p><strong>Meilleure période :</strong> Mai-juin et septembre-octobre. Mix parfait culture + plage. L'été est bondé et cher.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Andalousie (Séville, Grenade, Cordoue)</h3>
            <p><strong>Meilleure période :</strong> Mars-mai et octobre-novembre. Évitez absolument juillet-août (40-45°C). Le printemps avec les ferias est magique.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Baléares (Majorque, Ibiza, Minorque)</h3>
            <p><strong>Meilleure période :</strong> Mai-juin et septembre-octobre pour un équilibre soleil/tranquillité. Juillet-août pour la fête à Ibiza.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Canaries</h3>
            <p><strong>Meilleure période :</strong> Toute l'année ! Température de 18-28°C constante. L'hiver européen (décembre-mars) est la haute saison.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Événements et Festivals</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mars-Avril :</strong> Las Fallas à Valence (sculptures géantes et feux d'artifice), Semana Santa en Andalousie</li>
              <li><strong>Avril :</strong> Feria de Abril à Séville — costumes, chevaux, flamenco et casetas</li>
              <li><strong>Mai :</strong> Festival des Patios de Cordoue (UNESCO), San Isidro à Madrid</li>
              <li><strong>Juillet :</strong> Running of the Bulls (San Fermín) à Pampelune, Festival de Benicàssim</li>
              <li><strong>Août :</strong> La Tomatina à Buñol, fêtes de Gràcia à Barcelone</li>
              <li><strong>Septembre :</strong> La Mercè à Barcelone (castells humains), vendanges à La Rioja</li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/destinations/espagne"><Button variant="outline"><MapPin className="w-4 h-4 mr-2" />Guide Espagne</Button></Link>
              <Link to="/blog/itineraire-espagne-10-jours"><Button variant="outline"><Compass className="w-4 h-4 mr-2" />Itinéraire 10 jours</Button></Link>
              <Link to="/blog/budget-voyage-espagne"><Button variant="outline"><DollarSign className="w-4 h-4 mr-2" />Budget Espagne</Button></Link>
            </div>
          </div>

          <FAQSection faqs={faqs} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default QuandPartirEspagne;
