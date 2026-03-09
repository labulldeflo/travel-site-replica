import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { Luggage, Sun, Snowflake, CloudRain, Palmtree } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChecklistValiseDestination = () => {
  const faqs = [
    { question: "Combien de kilos prévoir pour un voyage de 2 semaines ?", answer: "En règle générale, 10 à 12 kg suffisent pour 2 semaines si vous choisissez des vêtements polyvalents et légers. La clé est de privilégier des matières à séchage rapide et de prévoir de laver en route." },
    { question: "Faut-il un bagage cabine ou un bagage en soute ?", answer: "Pour les voyages de moins de 10 jours, un bagage cabine de 40 L bien organisé avec des cubes de rangement suffit souvent. Au-delà, ou pour les destinations nécessitant un équipement spécifique (randonnée, froid extrême), un bagage en soute peut être nécessaire." },
    { question: "Comment adapter sa valise au climat tropical ?", answer: "Privilégiez des vêtements légers en coton ou lin, un imperméable compact pour les averses, des sandales et des chaussures fermées respirantes, un chapeau et de la crème solaire. Prévoyez aussi un gilet léger pour les climatisations souvent très fortes." },
  ];

  return (
    <>
      <SEO
        title="Check-list Valise Selon la Destination – Quoi Emporter"
        description="Adaptez votre valise selon le climat et le type de voyage : tropical, froid, ville ou aventure. Guide complet pour ne rien oublier dans vos bagages."
        url="/ressources/checklist-valise-destination"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <Luggage className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Check-list Valise Selon la Destination</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Adaptez votre valise au climat, au type de voyage et à la durée de votre séjour.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              Faire sa valise est un art qui s'apprend. Trop de vêtements et vous traînez un poids inutile ; pas assez et vous devrez acheter sur place. La clé est d'adapter vos bagages à votre destination, au climat et au type d'activités prévues. Voici nos listes détaillées selon chaque situation.
            </p>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Les essentiels, quelle que soit la destination</h2>
            <p className="text-muted-foreground mb-4">
              Avant de penser au climat spécifique, certains objets sont indispensables pour tout voyage. Ils constituent la base de votre valise, le socle sur lequel vous ajoutez les éléments spécifiques à votre destination.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>Trousse de toilette complète (format voyage, contenants de 100 ml max)</li>
              <li>Médicaments personnels et trousse à pharmacie de base</li>
              <li>Chargeur de téléphone et batterie externe</li>
              <li>Adaptateur de prise universel</li>
              <li>Copies des documents importants</li>
              <li>Cubes de rangement pour organiser le sac</li>
              <li>Sac à linge sale</li>
              <li>Cadenas pour les consignes et auberges</li>
            </ul>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-6">Valise par type de climat</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-elegant">
                    <Sun className="h-5 w-5 text-sunset" /> Destination tropicale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Asie du Sud-Est, Caraïbes, Amérique centrale, Afrique équatoriale</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• T-shirts en coton léger (x5)</li>
                    <li>• Shorts / jupes légères (x3)</li>
                    <li>• Robe ou tenue légère (x2)</li>
                    <li>• Maillot de bain (x2)</li>
                    <li>• Sandales et chaussures fermées respirantes</li>
                    <li>• Imperméable compact / poncho</li>
                    <li>• Chapeau ou casquette</li>
                    <li>• Crème solaire SPF 50+</li>
                    <li>• Anti-moustiques</li>
                    <li>• Gilet léger (pour la climatisation)</li>
                    <li>• Foulard couvrant (pour les temples)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-elegant">
                    <Snowflake className="h-5 w-5 text-ocean" /> Destination froide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Islande, Norvège, Canada en hiver, Patagonie</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sous-vêtements thermiques (x2)</li>
                    <li>• Polaire ou doudoune légère</li>
                    <li>• Veste imperméable et coupe-vent</li>
                    <li>• Pantalons chauds (x2-3)</li>
                    <li>• Bonnet, écharpe et gants</li>
                    <li>• Chaussettes en laine mérinos (x5)</li>
                    <li>• Chaussures de randonnée imperméables</li>
                    <li>• Chaufferettes pour les mains</li>
                    <li>• Crème hydratante (air sec)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-elegant">
                    <CloudRain className="h-5 w-5 text-muted-foreground" /> Destination tempérée
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Europe, Japon, côte est des États-Unis</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Système de couches : t-shirt + pull + veste</li>
                    <li>• Pantalons confortables (x2-3)</li>
                    <li>• Jean polyvalent</li>
                    <li>• Chaussures de marche confortables</li>
                    <li>• Parapluie compact</li>
                    <li>• Veste légère imperméable</li>
                    <li>• Tenue habillée (restaurants, sorties)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-elegant">
                    <Palmtree className="h-5 w-5 text-green-600" /> Safari / Aventure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Kenya, Tanzanie, Namibie, Costa Rica</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Vêtements neutres (kaki, beige, olive)</li>
                    <li>• Pantalons convertibles (shorts/longs)</li>
                    <li>• Chemise à manches longues (protection soleil/insectes)</li>
                    <li>• Chaussures de randonnée robustes</li>
                    <li>• Jumelles</li>
                    <li>• Lampe frontale</li>
                    <li>• Gourde réutilisable avec filtre</li>
                    <li>• Sac étanche pour l'électronique</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Astuces pour optimiser l'espace</h2>
            <p className="text-muted-foreground mb-4">
              Voyager léger est un véritable atout : moins de stress à l'aéroport, plus de mobilité sur place, et souvent des économies sur les frais de bagages des compagnies low-cost.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li><strong>La technique du roulage</strong> : roulez vos vêtements au lieu de les plier pour gagner 30 % d'espace</li>
              <li><strong>Cubes de rangement</strong> : organisez par catégorie (haut, bas, sous-vêtements, accessoires)</li>
              <li><strong>Portez le plus volumineux</strong> : enfilez vos chaussures de marche et votre veste dans l'avion</li>
              <li><strong>Vêtements polyvalents</strong> : choisissez des pièces combinables entre elles</li>
              <li><strong>Matières à séchage rapide</strong> : idéales pour laver et porter le lendemain</li>
            </ul>

            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Ce qu'il ne faut JAMAIS mettre en soute</h2>
            <p className="text-muted-foreground mb-6">
              Gardez toujours en bagage cabine : passeport et documents de voyage, médicaments essentiels, objets de valeur (appareil photo, ordinateur), un change complet, chargeurs et batterie externe. En cas de perte de bagage en soute, vous aurez le minimum vital.
            </p>

            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Ressources complémentaires</h3>
              <ul className="space-y-2">
                <li><Link to="/guides/que-mettre-valise" className="text-ocean hover:underline">→ Guide complet : Que mettre dans sa valise</Link></li>
                <li><Link to="/ressources/checklist-documents-voyage" className="text-ocean hover:underline">→ Check-list documents de voyage</Link></li>
                <li><Link to="/blog/quand-partir-thailande" className="text-ocean hover:underline">→ Quand partir en Thaïlande</Link></li>
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

export default ChecklistValiseDestination;
