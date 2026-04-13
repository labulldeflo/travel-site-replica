import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { Map, Shield, Sun, Stethoscope, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GuideAfrique = () => {
  const faqs = [
    { question: "L'Afrique est-elle une destination sûre ?", answer: "De nombreux pays africains sont très accueillants et sûrs pour les touristes : le Maroc, la Tanzanie, le Kenya, l'Afrique du Sud, le Sénégal ou encore la Namibie. Comme partout, informez-vous sur la situation locale, évitez les zones déconseillées par le ministère des Affaires étrangères et prenez les précautions habituelles." },
    { question: "Quel budget pour un safari en Afrique ?", answer: "Un safari au Kenya ou en Tanzanie coûte entre 150 et 400 €/jour tout compris (hébergement, repas, transport, guide, entrées des parcs). Les options varient du camping (plus abordable) aux lodges de luxe. Un safari de 4-5 jours coûte en moyenne 800-2 000 €." },
    { question: "Quels vaccins faut-il pour voyager en Afrique ?", answer: "La fièvre jaune est obligatoire pour de nombreux pays d'Afrique subsaharienne. Les vaccins recommandés incluent : hépatite A et B, typhoïde, méningite, rage (pour les séjours longs). Un traitement antipaludéen est fortement conseillé dans les zones à risque." },
  ];

  return (
    <>
      <SEO hideH1={true}
        title="Guide Voyage Afrique – Safari, Budget, Visa et Santé"
        description="Guide complet pour voyager en Afrique : safari, road trip, budget par pays, vaccins, visa et itinéraires recommandés. Préparez votre aventure africaine."
        url="/ressources/guide-afrique"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <Map className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Guide Express Afrique</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Préparez votre safari ou votre road trip africain en toute sérénité.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              L'Afrique est un continent aux mille visages : savanes infinies, déserts majestueux, forêts tropicales, côtes paradisiaques et villes bouillonnantes. Ce guide vous donne les essentiels pour préparer un voyage mémorable sur le continent africain.
            </p>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Destinations phares par région</h2>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Afrique de l'Est – Safari et nature</h3>
            <p className="text-muted-foreground mb-4">
              Le Kenya et la Tanzanie sont les destinations safari par excellence. Le Serengeti, le Masai Mara, le Ngorongoro offrent des expériences uniques d'observation de la faune. La Tanzanie abrite aussi le Kilimandjaro, le plus haut sommet d'Afrique, et l'archipel de Zanzibar pour se détendre après l'aventure.
            </p>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Afrique du Nord – Culture et histoire</h3>
            <p className="text-muted-foreground mb-4">
              Le Maroc séduit par ses médinas, ses riads et le désert du Sahara. L'Égypte fascine avec ses pyramides et ses temples millénaires. La Tunisie offre un mélange de plages méditerranéennes et de sites archéologiques romains.
            </p>

            <h3 className="text-xl font-elegant font-semibold text-foreground mb-3">Afrique australe – Aventure et paysages</h3>
            <p className="text-muted-foreground mb-6">
              L'Afrique du Sud combine safaris (Kruger), vignobles, montagnes et vie urbaine (Le Cap). La Namibie offre des paysages surréalistes avec ses dunes de Sossusvlei et le désert du Namib. Madagascar est un monde à part, avec une biodiversité unique au monde.
            </p>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Budget par pays</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-foreground">Pays</th>
                    <th className="text-left py-3 px-2 text-foreground">Budget / jour</th>
                    <th className="text-left py-3 px-2 text-foreground">Type de voyage</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Maroc</td><td className="py-2 px-2">30-60 €</td><td className="py-2 px-2">Culture, médinas, désert</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Égypte</td><td className="py-2 px-2">25-50 €</td><td className="py-2 px-2">Histoire, croisière sur le Nil</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Kenya</td><td className="py-2 px-2">50-200 €</td><td className="py-2 px-2">Safari, nature, plages</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Tanzanie</td><td className="py-2 px-2">60-250 €</td><td className="py-2 px-2">Safari, Kilimandjaro, Zanzibar</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Afrique du Sud</td><td className="py-2 px-2">40-100 €</td><td className="py-2 px-2">Road trip, safari, Le Cap</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 px-2">Madagascar</td><td className="py-2 px-2">25-60 €</td><td className="py-2 px-2">Nature, biodiversité, plages</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Santé et vaccinations</h2>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-ocean" /> Préparation santé
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Vaccin fièvre jaune</strong> : obligatoire pour de nombreux pays d'Afrique subsaharienne</li>
                <li><strong>Hépatite A et B</strong> : fortement recommandés</li>
                <li><strong>Antipaludéen</strong> : indispensable dans les zones à risque (consultez votre médecin)</li>
                <li><strong>Eau</strong> : buvez uniquement de l'eau en bouteille ou filtrée</li>
                <li><strong>Assurance</strong> : souscrivez une assurance avec couverture rapatriement</li>
                <li><strong>Trousse à pharmacie</strong> : anti-diarrhéique, antiseptique, pansements, crème solaire</li>
              </ul>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Quand partir en Afrique</h2>
            <p className="text-muted-foreground mb-4">
              Les saisons varient considérablement selon les régions. En règle générale, la saison sèche est la meilleure période pour les safaris car les animaux se regroupent autour des points d'eau.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li><strong>Afrique de l'Est (Kenya, Tanzanie)</strong> : juin à octobre (grande migration du Serengeti en juillet-août)</li>
              <li><strong>Afrique du Sud</strong> : mai à septembre (hiver austral, idéal pour les safaris)</li>
              <li><strong>Maroc</strong> : mars à mai, septembre à novembre</li>
              <li><strong>Égypte</strong> : octobre à avril (éviter la chaleur estivale)</li>
              <li><strong>Madagascar</strong> : avril à novembre (saison sèche)</li>
            </ul>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Conseils pratiques pour un safari réussi</h2>
            <p className="text-muted-foreground mb-4">
              Un safari est une expérience unique qui se prépare. Voici les règles essentielles pour en profiter pleinement.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>Portez des vêtements de couleur neutre (kaki, beige, olive)</li>
              <li>Emportez des jumelles de qualité et un appareil photo avec zoom</li>
              <li>Levez-vous tôt : les animaux sont plus actifs à l'aube et au crépuscule</li>
              <li>Restez silencieux et ne sortez jamais du véhicule sans autorisation du guide</li>
              <li>Prévoyez des couches de vêtements : les matinées sont fraîches, les après-midis chauds</li>
            </ul>

            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Ressources complémentaires</h3>
              <ul className="space-y-2">
                <li><Link to="/destinations/maroc" className="text-ocean hover:underline">→ Destination Maroc</Link></li>
                <li><Link to="/destinations/kenya" className="text-ocean hover:underline">→ Destination Kenya</Link></li>
                <li><Link to="/destinations/tanzanie" className="text-ocean hover:underline">→ Destination Tanzanie</Link></li>
                <li><Link to="/destinations/afrique-du-sud" className="text-ocean hover:underline">→ Destination Afrique du Sud</Link></li>
                <li><Link to="/guides/securite" className="text-ocean hover:underline">→ Guide sécurité en voyage</Link></li>
                <li><Link to="/ressources-gratuites" className="text-ocean hover:underline">→ Toutes nos ressources gratuites</Link></li>
              </ul>
            </div>

            <FAQSection faqs={faqs} />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GuideAfrique;
