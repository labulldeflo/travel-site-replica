import React from "react";
import { Calendar, User, Tag, Clock, Coffee, DollarSign, MapPin, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import defaultCityImage from "@/assets/cities/rome.jpg";

// =================================================================
// COMPOSANT RÉUTILISABLE - Ne pas modifier
// =================================================================
interface MetaItemProps {
  Icon: LucideIcon;
  label: string;
  value: string;
  iconColor: string;
}

const ArticleMetaItem: React.FC<MetaItemProps> = ({ Icon, label, value, iconColor }) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border">
    <Icon className={`h-5 w-5 ${iconColor} flex-shrink-0`} aria-hidden="true" />
    <div>
      <p className="text-xs font-semibold uppercase text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-800">{value}</p>
    </div>
  </div>
);

// =================================================================
// COMPOSANT PRINCIPAL - À PERSONNALISER
// =================================================================
const ArticleTemplate = () => {
  // TODO: Personnaliser les métadonnées
  const articleMetadata = {
    author: "Cap sur le Monde",
    date: "22 Mai 2025",
    readingTime: "7 min",
    category: "Europe", // Europe / Asie du Sud-Est / Afrique / Amérique
    keywords: ["Pays", "Ville", "Mot-clé 1", "Mot-clé 2", "Mot-clé 3"],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* =================================================================
            HERO SECTION - À PERSONNALISER
            ================================================================= */}
        <header
          className="relative h-[65vh] md:h-[75vh] bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${defaultCityImage})` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-20">
            <div className="text-white max-w-4xl">
              {/* Tags */}
              <div className="flex flex-wrap gap-3 text-sm mb-4 opacity-90">
                <Badge className="bg-ocean/70 hover:bg-ocean/80 text-white font-medium">
                  <Tag className="h-3 w-3 mr-1" />
                  {articleMetadata.category}
                </Badge>
                {articleMetadata.keywords.map((keyword, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-white border-white/50 bg-transparent hover:bg-white/10"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>

              {/* TODO: Personnaliser le titre et le sous-titre */}
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                Nom de la Ville : Titre accrocheur
              </h1>
              <p className="text-xl md:text-2xl text-white/90 drop-shadow">
                Sous-titre descriptif qui donne envie de lire l'article.
              </p>

              {/* Métadonnées article */}
              <div className="flex items-center space-x-6 mt-6 pt-4 border-t border-white/30">
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <User className="h-4 w-4" />
                  <span>{articleMetadata.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <Calendar className="h-4 w-4" />
                  <span>{articleMetadata.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <Clock className="h-4 w-4" />
                  <span>{articleMetadata.readingTime} de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* =================================================================
            CONTENU PRINCIPAL
            ================================================================= */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* COLONNE PRINCIPALE - 8/12 */}
              <article className="lg:col-span-8 max-w-full bg-white p-8 rounded-xl shadow-lg">
                
                {/* INTRODUCTION */}
                <div className="prose prose-lg max-w-none mb-12 text-gray-700">
                  <p className="text-xl font-serif italic text-gray-800 leading-relaxed border-l-4 border-sunset pl-4 mb-8">
                    TODO: Écrire une introduction captivante en 2-3 phrases. Utilisez des images, des émotions.
                  </p>
                  <p className="text-lg leading-relaxed">
                    TODO: Développer le contexte, expliquer ce qui rend ce lieu unique.
                  </p>
                </div>

                {/* SECTION 1 - À DUPLIQUER selon besoin */}
                <section className="mb-12">
                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean border-b pb-2">
                    <MapPin className="h-6 w-6 inline-block mr-2" />
                    {/* TODO: Titre de la section (ex: Les quartiers emblématiques) */}
                    Titre de la Section 1
                  </h2>
                  <p className="leading-relaxed mb-6">
                    TODO: Paragraphe descriptif. Racontez l'expérience, donnez des détails vivants.
                  </p>
                  <p className="leading-relaxed mb-6">
                    TODO: Deuxième paragraphe si nécessaire.
                  </p>
                  
                  {/* Encadré conseil (optionnel) */}
                  <div className="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm">
                    <p className="font-semibold mb-1 text-ocean">💡 Conseil :</p>
                    <p className="text-gray-700">
                      TODO: Un conseil pratique, une astuce de voyageur.
                    </p>
                  </div>
                </section>

                {/* SECTION 2 */}
                <section className="mb-12">
                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean border-b pb-2">
                    {/* TODO: Titre de la section 2 */}
                    Titre de la Section 2
                  </h2>
                  <p className="leading-relaxed mb-6">
                    TODO: Contenu de la section 2.
                  </p>
                </section>

                {/* SECTION 3 - Gastronomie/Street Food (si pertinent) */}
                <section className="mb-12">
                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean border-b pb-2">
                    <Coffee className="h-6 w-6 inline-block mr-2" />
                    {/* TODO: Titre gastronomie */}
                    Gastronomie & Spécialités locales
                  </h2>
                  <p className="leading-relaxed mb-6">
                    TODO: Introduction sur la cuisine locale.
                  </p>

                  {/* Grille de plats - À personnaliser */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner border border-gray-200">
                      <h4 className="font-bold mb-1 text-lg text-sunset">🍽️ Plat 1</h4>
                      <p className="text-sm text-gray-600">
                        Description du plat 1.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner border border-gray-200">
                      <h4 className="font-bold mb-1 text-lg text-sunset">🍽️ Plat 2</h4>
                      <p className="text-sm text-gray-600">
                        Description du plat 2.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner border border-gray-200">
                      <h4 className="font-bold mb-1 text-lg text-sunset">🍽️ Plat 3</h4>
                      <p className="text-sm text-gray-600">
                        Description du plat 3.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner border border-gray-200">
                      <h4 className="font-bold mb-1 text-lg text-sunset">🍽️ Plat 4</h4>
                      <p className="text-sm text-gray-600">
                        Description du plat 4.
                      </p>
                    </div>
                  </div>

                  {/* Coup de cœur culinaire */}
                  <div className="bg-sunset/10 border-l-4 border-sunset p-4 rounded-r-lg shadow-sm">
                    <p className="font-semibold mb-1 text-sunset">🍻 Nos coups de cœur :</p>
                    <p className="text-gray-700">
                      TODO: Recommandations de restaurants, adresses.
                    </p>
                  </div>
                </section>

                {/* SECTION 4 - Conseils pratiques */}
                <section className="mb-12">
                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean border-b pb-2">
                    Conseils pratiques & budget
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    
                    {/* Budget */}
                    <div className="bg-white rounded-xl p-6 shadow-md border">
                      <h3 className="font-bold mb-3 text-lg text-ocean">Budget moyen par jour</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-sunset" />
                          Hébergement : XX–XX €/nuit
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-sunset" />
                          Repas : X–X € selon type
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-sunset" />
                          Transports : X–X €
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-sunset" />
                          Visites : X–X €
                        </li>
                      </ul>
                    </div>

                    {/* Déplacements */}
                    <div className="bg-white rounded-xl p-6 shadow-md border">
                      <h3 className="font-bold mb-3 text-lg text-ocean">Se déplacer</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-sunset" />
                          À pied : idéal pour le centre
                        </li>
                        <li className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-sunset" />
                          Transport 1 : description
                        </li>
                        <li className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-sunset" />
                          Transport 2 : description
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Conseil spécial */}
                  <div className="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm">
                    <p className="font-semibold mb-1 text-ocean">💡 Astuce :</p>
                    <p className="text-gray-700">
                      TODO: Un conseil pratique important.
                    </p>
                  </div>
                </section>

                {/* SECTION FINALE - Pourquoi on a aimé */}
                <section className="mb-12">
                  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean border-b pb-2">
                    Pourquoi on a aimé [Nom de la Ville]
                  </h2>
                  <p className="leading-relaxed mb-4">
                    TODO: Conclusion émotionnelle, ce qui rend ce lieu spécial.
                  </p>
                  <div className="bg-sunset/10 border-l-4 border-sunset p-4 rounded-r-lg shadow-sm font-semibold text-gray-700">
                    <p>
                      TODO: Phrase de conclusion percutante.
                    </p>
                  </div>
                </section>

              </article>

              {/* SIDEBAR - 4/12 */}
              <aside className="lg:col-span-4 sticky top-28 h-fit space-y-8">
                
                {/* Informations clés */}
                <div className="space-y-3">
                  <h3 className="text-xl font-elegant font-bold mb-2 text-gray-800">En Bref</h3>
                  
                  {/* TODO: Personnaliser les métadonnées */}
                  <ArticleMetaItem
                    Icon={MapPin}
                    label="Durée conseillée"
                    value="2-3 jours"
                    iconColor="text-ocean"
                  />
                  <ArticleMetaItem
                    Icon={Coffee}
                    label="À goûter absolument"
                    value="Spécialité locale"
                    iconColor="text-sunset"
                  />
                  <ArticleMetaItem
                    Icon={DollarSign}
                    label="Budget journalier"
                    value="40-80€"
                    iconColor="text-ocean"
                  />
                  <ArticleMetaItem
                    Icon={Clock}
                    label="Meilleure période"
                    value="Avril à Octobre"
                    iconColor="text-sunset"
                  />
                </div>

                {/* CTA - Retour vers la page pays */}
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <h3 className="font-bold text-lg mb-3 text-ocean">Découvrir plus</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Explorez d'autres destinations du pays.
                  </p>
                  {/* TODO: Remplacer le lien par la bonne destination */}
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/destinations/pays">Voir toutes les destinations</Link>
                  </Button>
                </div>

                {/* CTA Guide gratuit (optionnel) */}
                <div className="bg-gradient-to-br from-ocean/10 to-sunset/10 rounded-xl p-6 shadow-lg border-2 border-ocean/20">
                  <h3 className="font-bold text-lg mb-2 text-ocean">Guide Gratuit</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Téléchargez notre guide complet pour préparer votre voyage.
                  </p>
                  <Button asChild className="w-full bg-ocean hover:bg-ocean/90">
                    <Link to="/guide-gratuit">Télécharger le guide 📖</Link>
                  </Button>
                </div>

              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleTemplate;
