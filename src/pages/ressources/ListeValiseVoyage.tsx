import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import { Luggage, Sun, Snowflake, Mountain, Palmtree, ShieldCheck, Shirt } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ListeValiseVoyage = () => {
  const faqs = [
    { question: "Quelle taille de valise choisir pour un voyage d'une semaine ?", answer: "Pour une semaine, un bagage cabine de 40 à 55 litres suffit si vous êtes minimaliste. Sinon, optez pour une valise de 65 à 75 litres en soute. Le sac à dos de 40-50L est idéal pour les voyages itinérants." },
    { question: "Comment éviter de trop remplir sa valise ?", answer: "Appliquez la règle du 'et si' inversée : si vous vous dites 'et si j'en avais besoin', ne le prenez pas. Privilégiez des vêtements polyvalents, lavables facilement. Préparez votre valise 2-3 jours avant et retirez 30 % de ce que vous avez prévu." },
    { question: "Faut-il rouler ou plier ses vêtements ?", answer: "Roulez vos vêtements ! Cette technique économise jusqu'à 30 % d'espace et réduit les plis. Utilisez des cubes de rangement (packing cubes) pour organiser par catégorie : haut/bas, jour/nuit, sous-vêtements." },
    { question: "Que mettre dans son bagage à main en avion ?", answer: "Indispensables : passeport, billets, téléphone et chargeur, médicaments essentiels, une tenue de rechange, objets de valeur. N'oubliez pas les règles sur les liquides : flacons de 100 ml max dans un sac transparent de 1 litre." },
  ];

  return (
    <>
      <SEO hideH1={true}
        title="Liste Valise Voyage – Que Mettre dans sa Valise selon la Destination"
        description="Liste complète pour faire sa valise selon la destination et la saison. Astuces de rangement, essentiels à ne pas oublier et conseils pratiques pour voyager léger."
        url="/ressources-gratuites/liste-valise-voyage"
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="bg-gradient-ocean text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <Luggage className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h1 className="text-3xl md:text-5xl font-elegant font-bold mb-4">Liste Valise Voyage : Le Guide Complet</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Faites votre valise intelligemment grâce à nos listes adaptées à chaque type de voyage et destination.
              </p>
            </div>
          </section>

          <article className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8">
              Faire sa valise est un art que tout voyageur apprend à maîtriser avec l'expérience. Trop souvent, on emporte trop, on oublie l'essentiel, ou on se retrouve avec des vêtements inadaptés. Ce guide vous propose des listes détaillées selon votre destination, la saison et le type de voyage, pour partir léger et bien équipé.
            </p>

            {/* Les indispensables */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Les indispensables à emporter partout</h2>
            <p className="text-muted-foreground mb-4">
              Quelle que soit votre destination, certains objets sont universels et doivent figurer dans toute valise. Voici le kit de base du voyageur organisé :
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card><CardContent className="p-4 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Documents essentiels</strong><p className="text-sm text-muted-foreground">Passeport, copies numériques, billets, assurance voyage</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Trousse de toilette</strong><p className="text-sm text-muted-foreground">Format voyage, flacons 100 ml, brosse à dents, crème solaire</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Électronique</strong><p className="text-sm text-muted-foreground">Téléphone, chargeur, adaptateur universel, batterie externe</p></div>
              </CardContent></Card>
              <Card><CardContent className="p-4 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-ocean mt-1 shrink-0" />
                <div><strong className="text-foreground">Pharmacie de base</strong><p className="text-sm text-muted-foreground">Antidouleurs, pansements, anti-diarrhéique, répulsif moustiques</p></div>
              </CardContent></Card>
            </div>

            {/* Destination chaude */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Valise pour une destination chaude et tropicale</h2>
            <p className="text-muted-foreground mb-4">
              Pour des destinations comme la <Link to="/destinations/thailande" className="text-ocean hover:underline">Thaïlande</Link>, l'<Link to="/destinations/indonesie" className="text-ocean hover:underline">Indonésie</Link> ou le <Link to="/destinations/maroc" className="text-ocean hover:underline">Maroc</Link>, privilégiez des vêtements légers, respirants et à séchage rapide.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sun className="h-5 w-5 text-sunset" /> Essentiels climat chaud
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>T-shirts en coton ou fibres techniques (5-7 selon la durée)</li>
                <li>Shorts et pantalons légers convertibles</li>
                <li>Maillot de bain (2 pour alterner le séchage)</li>
                <li>Chapeau ou casquette et lunettes de soleil</li>
                <li>Crème solaire SPF 50 et après-soleil</li>
                <li>Sandales de marche et tongs pour la plage</li>
                <li>Vêtement couvrant pour les temples et sites religieux</li>
                <li>Anti-moustiques tropical (DEET 30-50 %)</li>
              </ul>
            </div>

            {/* Destination froide */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Valise pour une destination froide</h2>
            <p className="text-muted-foreground mb-4">
              Pour l'<Link to="/destinations/islande" className="text-ocean hover:underline">Islande</Link>, la <Link to="/destinations/norvege" className="text-ocean hover:underline">Norvège</Link> ou un voyage d'hiver, adoptez le système des 3 couches : une couche respirante, une couche isolante, et une couche imperméable.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Snowflake className="h-5 w-5 text-ocean" /> Essentiels climat froid
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Sous-vêtements thermiques (haut + bas en mérinos)</li>
                <li>Polaire ou doudoune légère compressible</li>
                <li>Veste imperméable coupe-vent avec capuche</li>
                <li>Bonnet, gants et écharpe ou tour de cou</li>
                <li>Chaussures de randonnée imperméables et chaudes</li>
                <li>Chaussettes en laine mérinos (3-4 paires)</li>
                <li>Crème hydratante et baume à lèvres</li>
              </ul>
            </div>

            {/* Voyage en ville */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Valise pour un city-trip en Europe</h2>
            <p className="text-muted-foreground mb-4">
              Pour visiter <Link to="/destinations/italie" className="text-ocean hover:underline">Rome</Link>, <Link to="/destinations/espagne" className="text-ocean hover:underline">Barcelone</Link> ou <Link to="/destinations/portugal" className="text-ocean hover:underline">Lisbonne</Link>, voyagez léger avec un bagage cabine. Privilégiez des tenues polyvalentes jour/soir.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>3-4 hauts interchangeables (couleurs neutres + 1 coloré)</li>
              <li>2 pantalons dont 1 jean et 1 chino léger</li>
              <li>1 robe ou tenue de soirée légère</li>
              <li>Chaussures de marche confortables (pas de chaussures neuves !)</li>
              <li>Veste légère ou blazer pour les soirées</li>
              <li>Parapluie compact ou poncho de pluie</li>
            </ul>

            {/* Randonnée et nature */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Sac à dos pour la randonnée et l'aventure</h2>
            <p className="text-muted-foreground mb-4">
              Pour un trek au <Link to="/destinations/perou" className="text-ocean hover:underline">Pérou</Link> ou une randonnée en <Link to="/destinations/suisse" className="text-ocean hover:underline">Suisse</Link>, le poids est votre ennemi. Chaque gramme compte.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Mountain className="h-5 w-5 text-ocean" /> Kit randonnée
              </h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Sac à dos technique 40-50L avec ceinture ventrale</li>
                <li>Chaussures de randonnée rodées et imperméables</li>
                <li>Bâtons de marche télescopiques</li>
                <li>Gourde filtrante ou pastilles de purification</li>
                <li>Frontale avec piles de rechange</li>
                <li>Couverture de survie et sifflet d'urgence</li>
                <li>Sac de couchage adapté aux températures nocturnes</li>
              </ul>
            </div>

            {/* Astuces rangement */}
            <h2 className="text-2xl font-elegant font-bold text-foreground mb-4">Astuces de rangement et d'organisation</h2>
            <p className="text-muted-foreground mb-4">
              Bien organiser sa valise permet de gagner de la place, retrouver ses affaires facilement et éviter les plis. Voici les techniques utilisées par les voyageurs expérimentés :
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li><strong>Roulez vos vêtements</strong> au lieu de les plier : gain de place de 30 %</li>
              <li><strong>Utilisez des packing cubes</strong> pour classer par catégorie</li>
              <li><strong>Placez les objets lourds en bas</strong> du sac, près des roulettes</li>
              <li><strong>Glissez les chaussettes dans les chaussures</strong> pour optimiser l'espace</li>
              <li><strong>Portez vos vêtements les plus volumineux</strong> pendant le trajet en avion</li>
              <li><strong>Sac plastique zippé</strong> pour le linge sale</li>
            </ul>

            {/* Liens internes */}
            <div className="bg-muted/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">📚 Ressources complémentaires</h3>
              <ul className="space-y-2">
                <li><Link to="/guides/que-mettre-valise" className="text-ocean hover:underline">→ Guide complet : Que mettre dans sa valise</Link></li>
                <li><Link to="/ressources/checklist-valise-destination" className="text-ocean hover:underline">→ Check-list valise selon la destination</Link></li>
                <li><Link to="/guides/preparer-voyage" className="text-ocean hover:underline">→ Guide : Préparer son voyage étape par étape</Link></li>
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

export default ListeValiseVoyage;
