import { Calendar, User, Clock, MapPin, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import voyagerSeuleImg from '@/assets/blog/voyager-seule-50-ans.jpg';

const DestinationsVoyagerSeule50Ans = () => {
  return (
    <>
      <SEO 
        title="10 destinations parfaites pour voyager seule"
        description="Des destinations sûres, enrichissantes et parfaitement adaptées aux femmes qui souhaitent voyager en solo."
        url="/blog/destinations-voyager-seule-50-ans"
        hideH1={true}
      />
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          <header
            className="relative h-[65vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${voyagerSeuleImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
              <div className="text-white max-w-4xl">
                <Badge className="bg-sunset/70 text-white mb-4">Voyager seule à 50 ans</Badge>
                <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-4">
                  10 destinations parfaites pour voyager seule
                </h1>
                <div className="flex items-center gap-6 mt-6">
                  <span className="flex items-center gap-2"><User className="h-4 w-4" />Cap sur le Monde</span>
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />12 Jan 2025</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4" />6 min</span>
                </div>
              </div>
            </div>
          </header>

          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl italic border-l-4 border-sunset pl-4 mb-8">
                    Voyager seule est une expérience libératrice. Voici 10 destinations qui conjuguent sécurité, confort et enrichissement personnel.
                  </p>

                  <div className="bg-ocean/10 border border-ocean/20 p-6 rounded-lg mb-8">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-ocean" />
                      Nos critères de sélection
                    </h3>
                    <ul className="space-y-2 mb-0">
                      <li>✓ Sécurité pour les femmes voyageant seules</li>
                      <li>✓ Infrastructures touristiques de qualité</li>
                      <li>✓ Facilité de communication (anglais ou français)</li>
                      <li>✓ Richesse culturelle et beauté des paysages</li>
                      <li>✓ Rapport qualité-prix intéressant</li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    1. 🇵🇹 Portugal
                  </h2>
                  <p className="mb-4">
                    Le Portugal est LA destination idéale pour un premier voyage solo. Lisbonne et Porto offrent un cadre sécurisant, 
                    des habitants accueillants et une scène culturelle vibrante. L'Algarve propose des plages magnifiques et des villages authentiques.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <p className="mb-1"><strong>Budget quotidien :</strong> 50-80€</p>
                    <p className="mb-1"><strong>Meilleure période :</strong> Avril-Juin, Septembre-Octobre</p>
                    <p className="mb-0"><strong>Point fort :</strong> Excellente cuisine, climat agréable, coût de la vie modéré</p>
                  </div>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    2. 🇯🇵 Japon
                  </h2>
                  <p className="mb-4">
                    Le Japon est l'un des pays les plus sûrs au monde. Le respect, la propreté et l'efficacité des transports 
                    en font une destination parfaite. Kyoto, Tokyo et les Alpes japonaises offrent des expériences uniques.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <p className="mb-1"><strong>Budget quotidien :</strong> 80-120€</p>
                    <p className="mb-1"><strong>Meilleure période :</strong> Mars-Mai (cerisiers), Octobre-Novembre (momiji)</p>
                    <p className="mb-0"><strong>Point fort :</strong> Sécurité maximale, culture fascinante, transport impeccable</p>
                  </div>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    3. 🇳🇿 Nouvelle-Zélande
                  </h2>
                  <p className="mb-4">
                    Nature époustouflante, population accueillante et infrastructure touristique excellente. 
                    Parfait pour les amoureuses de randonnées et de paysages à couper le souffle.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <p className="mb-1"><strong>Budget quotidien :</strong> 70-100€</p>
                    <p className="mb-1"><strong>Meilleure période :</strong> Décembre-Février (été)</p>
                    <p className="mb-0"><strong>Point fort :</strong> Sécurité, nature préservée, activités outdoor</p>
                  </div>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    4. 🇮🇸 Islande
                  </h2>
                  <p className="mb-4">
                    L'Islande est considérée comme l'un des pays les plus sûrs du monde. Les paysages lunaires, 
                    les sources chaudes et les aurores boréales en font une destination magique.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <p className="mb-1"><strong>Budget quotidien :</strong> 100-150€</p>
                    <p className="mb-1"><strong>Meilleure période :</strong> Juin-Août (journées longues), Sept-Mars (aurores)</p>
                    <p className="mb-0"><strong>Point fort :</strong> Sécurité absolue, paysages uniques</p>
                  </div>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    5. 🇨🇦 Canada
                  </h2>
                  <p className="mb-4">
                    Montréal, Vancouver, Toronto et les Rocheuses offrent diversité culturelle et beauté naturelle. 
                    Le Canada est réputé pour sa sécurité et l'accueil chaleureux de ses habitants.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <p className="mb-1"><strong>Budget quotidien :</strong> 70-110€</p>
                    <p className="mb-1"><strong>Meilleure période :</strong> Mai-Octobre</p>
                    <p className="mb-0"><strong>Point fort :</strong> Francophonie (Québec), nature grandiose, sécurité</p>
                  </div>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    6. 🇮🇹 Italie
                  </h2>
                  <p className="mb-4">
                    Rome, Florence, Venise, la Toscane... L'Italie offre art, histoire et gastronomie. 
                    Les Italiennes sont nombreuses à voyager seules, créant un environnement accueillant.
                  </p>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    7. 🇹🇭 Thaïlande (Nord)
                  </h2>
                  <p className="mb-4">
                    Chiang Mai et le nord de la Thaïlande sont parfaits pour débuter en Asie. 
                    Infrastructure touristique excellente, prix doux et population bienveillante.
                  </p>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    8. 🇦🇹 Autriche
                  </h2>
                  <p className="mb-4">
                    Vienne, Salzbourg et le Tyrol combinent culture, nature et qualité de vie. 
                    Infrastructure parfaite et sécurité maximale.
                  </p>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    9. 🇪🇸 Espagne
                  </h2>
                  <p className="mb-4">
                    Barcelone, Séville, Saint-Jacques-de-Compostelle... L'Espagne est chaleureuse, 
                    culturellement riche et très sûre pour les voyageuses solo.
                  </p>

                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean">
                    10. 🇦🇺 Australie
                  </h2>
                  <p className="mb-4">
                    Sydney, Melbourne, la Grande Barrière de Corail... L'Australie offre modernité, 
                    nature spectaculaire et excellente sécurité.
                  </p>

                  <div className="bg-sunset/10 border-l-4 border-sunset p-6 rounded-r-lg mt-8">
                    <p className="font-bold mb-3">💡 Nos conseils pour voyager sereinement</p>
                    <ul className="space-y-2 mb-0">
                      <li>• Rejoignez des groupes Facebook de voyageuses solo</li>
                      <li>• Réservez vos premières nuits à l'avance</li>
                      <li>• Faites des walking tours pour rencontrer d'autres voyageurs</li>
                      <li>• Partagez régulièrement votre position avec vos proches</li>
                      <li>• Faites confiance à votre instinct</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DestinationsVoyagerSeule50Ans;
