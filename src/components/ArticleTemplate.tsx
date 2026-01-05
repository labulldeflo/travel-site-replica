import React from "react";
import { Calendar, User, Tag, Clock, Coffee, DollarSign, MapPin, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AffiliateWidget from "@/components/AffiliateWidget";
import { Link } from "react-router-dom";

// Fonction utilitaire pour parser le markdown simple (gras, italique)
const parseSimpleMarkdown = (text: string): string => {
  if (!text) return "";
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") // **gras**
    .replace(/\*([^*]+)\*/g, "<em>$1</em>"); // *italique*
};
// =================================================================
// --- Types pour le Template ---
// =================================================================
interface MetaItemProps {
  Icon: LucideIcon;
  label: string;
  value: string;
  iconColor: string;
}

interface ContentSection {
  icon: LucideIcon;
  title: string;
  content: string | React.ReactNode;
}

interface GastronomyItem {
  title: string;
  description: string;
}

interface PracticalTip {
  title: string;
  content: string;
}

interface SidebarInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  iconColor: string;
}

interface ArticleTemplateProps {
  // Hero Section
  heroImage: string;
  heroImageAlt?: string;
  title: string;
  subtitle: string;
  category: string;
  keywords: string[];
  author?: string;
  date?: string;
  readingTime?: string;

  // Content Sections
  introduction?: string;
  introText?: string;
  contentSections: ContentSection[];
  
  // Gastronomie
  gastronomyTitle?: string;
  gastronomyIntro?: string;
  gastronomyItems: GastronomyItem[];
  gastronomyConclusion?: string;

  // Practical Tips
  practicalTips: PracticalTip[];
  
  // Conclusion
  conclusion?: string;
  conclusionText?: string;

  // Sidebar
  sidebarInfos: SidebarInfo[];

  // Affiliate
  affiliateCity: string;
  affiliateCountryCode: string;

  // CTA Links
  relatedArticles?: Array<{ title: string; url: string }>;
  destinationLink?: string;
  ctaTitle?: string;
}

// =================================================================
// --- Composant Utilitaire : Article Meta Info ---
// =================================================================
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
// --- Template Principal d'Article ---
// =================================================================
const ArticleTemplate: React.FC<ArticleTemplateProps> = ({
  heroImage,
  heroImageAlt = "",
  title,
  subtitle,
  category,
  keywords,
  author = "Voyage Site Team",
  date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }),
  readingTime = "7 min",
  introduction,
  introText,
  contentSections,
  gastronomyTitle = "Spécialités Locales",
  gastronomyIntro = "Ne manquez pas ces délices culinaires lors de votre visite.",
  gastronomyItems,
  gastronomyConclusion,
  practicalTips,
  conclusion,
  conclusionText,
  sidebarInfos,
  affiliateCity,
  affiliateCountryCode,
  relatedArticles,
  destinationLink,
  ctaTitle,
}) => {
  const finalIntro = introduction || introText;
  const finalConclusion = conclusion || conclusionText;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <header
          className="relative h-[65vh] md:h-[75vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-label={heroImageAlt}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-20">
            <div className="text-white max-w-4xl">
              {/* Tags et Métadonnées */}
              <div className="flex flex-wrap gap-3 text-sm mb-4 opacity-90">
                <Badge className="bg-ocean/70 hover:bg-ocean/80 text-white font-medium">
                  <Tag className="h-3 w-3 mr-1" aria-hidden="true" />
                  {category}
                </Badge>
                {keywords.map((keyword, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-white border-white/50 bg-transparent hover:bg-white/10"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>

              <h1 id="article-title" className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 drop-shadow">
                {subtitle}
              </p>

              {/* Infos rapides sous le titre */}
              <div className="flex items-center space-x-6 mt-6 pt-4 border-t border-white/30">
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <User className="h-4 w-4" aria-hidden="true" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  <span>{readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content + Sidebar */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article Content */}
            <article className="md:col-span-2 prose prose-lg max-w-none">
              {/* Introduction */}
              <p 
                className="text-lg leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left"
                dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(finalIntro || "") }}
              />

              {/* Content Sections */}
              {contentSections.map((section, index) => (
                <section key={index} className="mt-10">
                  <h2 className="text-3xl font-elegant font-bold text-cyan-600 mb-4 flex items-center gap-3">
                    <section.icon className="h-7 w-7 text-ocean" aria-hidden="true" />
                    {section.title}
                  </h2>
                  {typeof section.content === 'string' ? (
                    <div 
                      className="text-gray-700 leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  ) : (
                    section.content
                  )}
                </section>
              ))}

              {/* Section Gastronomie */}
              <section className="mt-12 bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h2 className="text-3xl font-elegant font-bold text-cyan-600 mb-4 flex items-center gap-3">
                  <Coffee className="h-7 w-7 text-ocean" aria-hidden="true" />
                  {gastronomyTitle}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {gastronomyIntro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gastronomyItems.map((item, index) => (
                    <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-ocean mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {gastronomyConclusion && (
                  <p className="mt-6 text-gray-700 leading-relaxed">
                    {gastronomyConclusion}
                  </p>
                )}

                <div className="mt-6 text-center">
                  <Button asChild className="bg-ocean hover:bg-ocean/90">
                    <Link to="/guide-gratuit">📥 Télécharge le guide gratuit du Vietnam</Link>
                  </Button>
                </div>
              </section>

              {/* Affiliate Widget */}
              <AffiliateWidget
                title={`Hébergements à ${affiliateCity}`}
                description={`Trouvez les meilleurs hôtels et logements pour votre séjour à ${affiliateCity} avec Booking.com`}
                link={`https://www.booking.com/city/${affiliateCountryCode}/${affiliateCity.toLowerCase()}.html`}
                badge="Meilleure offre"
                variant="card"
              />

              {/* Conseils Pratiques */}
              <section className="mt-12 pt-8 border-t">
                <h2 className="text-3xl font-elegant font-bold text-cyan-600 mb-6 flex items-center gap-3">
                  <MapPin className="h-7 w-7 text-ocean" aria-hidden="true" />
                  Conseils Pratiques
                </h2>

                <div className="space-y-6">
                  {practicalTips.map((tip, index) => (
                    <div key={index}>
                      <h3 className="font-bold text-ocean text-xl mb-2">{tip.title}</h3>
                      <div 
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: tip.content }}
                      />
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-10 p-6 bg-sand/30 rounded-lg border-l-4 border-ocean">
                <p 
                  className="text-lg text-gray-800 italic leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(finalConclusion || "") }}
                />
              </section>

              {/* CTA Bottom */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                {relatedArticles?.map((article, index) => (
                  <Button key={index} asChild variant="outline" className="flex-1">
                    <Link to={article.url}>{article.title}</Link>
                  </Button>
                ))}
                {destinationLink && (
                  <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
                    <Link to={destinationLink}>{ctaTitle || "Voir toutes les destinations"}</Link>
                  </Button>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="md:col-span-1">
              <div className="bg-accent/50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary" />
                  En Bref
                </h3>

                <div className="space-y-4">
                  {sidebarInfos.map((info, index) => (
                    <ArticleMetaItem
                      key={index}
                      Icon={info.icon}
                      label={info.label}
                      value={info.value}
                      iconColor={info.iconColor}
                    />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleTemplate;
