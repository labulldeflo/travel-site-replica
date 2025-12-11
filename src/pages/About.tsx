import React from "react";
import { MapPin, Heart, Camera, Users, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Assurez-vous que l'import de l'image est géré correctement par votre bundler (e.g., Webpack/Vite)
import coupleImg from "@/assets/couple-travel-portrait.jpg";

// --- NOUVEAU : Structure des données pour les valeurs ---
// Cela rend la section "Nos valeurs" dynamique et plus facile à maintenir/modifier.

interface ValueCardProps {
  Icon: LucideIcon;
  colorClass: string;
  title: string;
  description: string;
}

// --- NOUVEAU : Composant pour la Carte de Valeur ---
const ValueCard: React.FC<ValueCardProps> = ({
  Icon,
  colorClass,
  title,
  description
}) => <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-6 text-center h-full flex flex-col justify-between items-center">
      {/* Utilisation de `aria-hidden` car l'icône est décorative et le texte existe déjà */}
      <Icon className={`h-12 w-12 ${colorClass} mx-auto mb-4`} aria-hidden="true" />
      <h3 className="font-bold mb-2 text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground flex-grow">{description}</p>
    </CardContent>
  </Card>;

// --- Composant Principal Amélioré ---
const About = () => {
  const {
    t
  } = useTranslation();

  // Définition des données pour la section "Nos valeurs"
  const valuesData: ValueCardProps[] = [{
    Icon: MapPin,
    colorClass: "text-ocean",
    title: t("about.values.authenticity.title"),
    description: t("about.values.authenticity.desc")
  }, {
    Icon: Heart,
    colorClass: "text-sunset",
    title: t("about.values.passion.title"),
    description: t("about.values.passion.desc")
  }, {
    Icon: Camera,
    colorClass: "text-ocean",
    title: t("about.values.inspiration.title"),
    description: t("about.values.inspiration.desc")
  }, {
    Icon: Users,
    colorClass: "text-sunset",
    title: t("about.values.community.title"),
    description: t("about.values.community.desc")
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-[var(--header-height, 6rem)]">
        {" "}
        {/* Ajustement de la marge supérieure */}
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-white py-20" aria-labelledby="hero-title">
          <div className="container mx-auto px-4 text-center">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-elegant font-extrabold mb-6">
              {" "}
              {/* Utilisation de font-extrabold pour plus d'impact */}
              {t("about.aboutPage.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">{t("about.aboutPage.subtitle")}</p>
          </div>
        </section>
        {/* Notre histoire */}
        <section className="py-16 bg-white" aria-labelledby="story-title">
          {" "}
          {/* Ajout de bg-white pour contraste */}
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={coupleImg} alt={t("about.aboutPage.coupleImgAlt")} // Utiliser i18n pour le texte alternatif pour l'accessibilité
              className="rounded-xl shadow-2xl w-full object-cover aspect-video md:aspect-square" // Amélioration des classes d'image
              loading="lazy" // Amélioration de la performance
              />
              </div>
              <div className="md:order-first">
                {" "}
                {/* Changement de l'ordre pour un design asymétrique sur mobile/desktop */}
                <h2 id="story-title" className="text-3xl font-elegant font-bold mb-6 text-gray-800">
                  {t("about.aboutPage.ourStoryTitle")}
                </h2>
                <div className="space-y-4 text-lg text-gray-600">
                  {" "}
                  {/* Augmentation de la taille et ajustement de la couleur du texte */}
                  <p>{t("welcome.title")}</p>
                  <p>{t("welcome.p1")}</p>
                  <p>{t("welcome.p2")}</p>
                  <p>{t("welcome.p3")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Nos valeurs */}
        <section className="py-16 bg-gradient-sand" aria-labelledby="values-title">
          <div className="container mx-auto px-4">
            <h2 id="values-title" className="text-3xl font-elegant font-bold text-center mb-12 text-gray-800">
              {t("about.values.title")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Utilisation de la structure de données et du nouveau composant */}
              {valuesData.map((value, index) => <ValueCard key={index} Icon={value.Icon} colorClass={value.colorClass} title={value.title} description={value.description} />)}
            </div>
          </div>
        </section>
        {/* Contact CTA */}
        <section className="py-20 bg-white" aria-labelledby="contact-title">
          <div className="container mx-auto px-4 text-center">
            <h2 id="contact-title" className="text-3xl font-elegant font-bold mb-4 text-gray-800">
              {t("about.aboutPage.contactTitle")}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {" "}
              {/* Augmentation de la taille du texte */}
              {t("about.aboutPage.contactDesc")}
            </p>
            {/* Ajout d'un bouton d'appel à l'action pour le contact */}
            
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;