import React from "react";
import {
  Calendar,
  User,
  Tag,
  Clock,
  Coffee,
  MapPin,
  LucideIcon,
  ShieldCheck,
  Smartphone,
  Backpack,
  ListChecks,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AffiliateWidget from "@/components/AffiliateWidget";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const parseSimpleMarkdown = (text: string): string => {
  if (!text) return "";
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
};

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

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
  heroImage: string;
  heroImageAlt?: string;
  title: string;
  subtitle: string;
  category: string;
  keywords: string[];
  author?: string;
  date?: string;
  readingTime?: string;
  introduction?: string;
  introText?: string;
  /** Description meta personnalisée (sinon générée depuis le subtitle). */
  metaDescription?: string;
  /** Encadré "À retenir" en haut d'article. Généré automatiquement si absent. */
  keyTakeaways?: string[];
  contentSections: ContentSection[];
  gastronomyTitle?: string;
  gastronomyIntro?: string;
  gastronomyItems: GastronomyItem[];
  gastronomyConclusion?: string;
  practicalTips: PracticalTip[];
  conclusion?: string;
  conclusionText?: string;
  sidebarInfos: SidebarInfo[];
  affiliateCity: string;
  affiliateCountryCode: string;
  relatedArticles?: Array<{ title: string; url: string }>;
  destinationLink?: string;
  ctaTitle?: string;
  /** FAQ personnalisées (sinon FAQ génériques). */
  faqs?: Array<{ question: string; answer: string }>;
  /** Liens internes contextuels (maillage SEO). */
  internalLinks?: Array<{ label: string; url: string }>;
  /** Accepte les props supplémentaires historiques sans erreur TS. */
  [key: string]: unknown;
}

const ArticleMetaItem: React.FC<MetaItemProps> = ({
  Icon,
  label,
  value,
  iconColor,
}) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border">
    <Icon className={`h-5 w-5 ${iconColor} flex-shrink-0`} aria-hidden="true" />
    <div>
      <p className="text-xs font-semibold uppercase text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-800">{value}</p>
    </div>
  </div>
);

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({
  heroImage,
  heroImageAlt = "",
  title,
  subtitle,
  category,
  keywords,
  author = "Cap sur le Monde",
  date = new Date().toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
  readingTime = "7 min",
  introduction,
  introText,
  metaDescription,
  keyTakeaways,
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
  faqs,
  internalLinks,
}) => {
  const finalIntro = introduction || introText;
  const finalConclusion = conclusion || conclusionText;

  // Description meta prioritaire, sinon fallback sur le subtitle tronqué à 155 caractères (limite SERP Google).
  const seoDescription =
    metaDescription ||
    (subtitle.length > 155 ? `${subtitle.slice(0, 152)}...` : subtitle);

  const seoImageAlt = heroImageAlt || `${title} - guide voyage ${category}`;

  // Génération automatique de l'encadré "À retenir" si non fourni : combine subtitle et mots-clés principaux.
  const finalTakeaways: string[] =
    keyTakeaways && keyTakeaways.length > 0
      ? keyTakeaways
      : [
          subtitle,
          `Destination : ${affiliateCity}${category ? ` (${category})` : ""}`,
          `Points clés : ${keywords.slice(0, 3).join(", ")}`,
          `Temps de lecture estimé : ${readingTime}`,
        ].filter(Boolean);

  // FAQ par défaut si non fournie explicitement par la page.
  const defaultFaqs = [
    {
      question: `Quand préparer son voyage à ${affiliateCity} ?`,
      answer:
        "L’idéal est de commencer plusieurs semaines à l’avance pour comparer les hébergements, vérifier les formalités, prévoir l’assurance et organiser les activités principales.",
    },
    {
      question: "Faut-il prendre une assurance voyage ?",
      answer:
        "C’est fortement recommandé dès qu’un voyage implique des frais importants, un départ à l’étranger ou des réservations non remboursables.",
    },
    {
      question: "Une eSIM est-elle utile en voyage ?",
      answer:
        "Oui, surtout hors de France. Elle permet d’avoir Internet rapidement sans dépendre uniquement du Wi-Fi public.",
    },
  ];
  const finalFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  const tableOfContents = [
    ...contentSections.map((section) => ({
      title: section.title,
      id: slugify(section.title),
    })),
    { title: gastronomyTitle, id: "gastronomie" },
    { title: "Conseils pratiques", id: "conseils-pratiques" },
  ];


  return (
    <>
      <SEO
  title={title}
  description={seoDescription}
  image={heroImage}
  url={destinationLink}
  type="article"
  author={author}
  breadcrumbs={[
    { name: "Accueil", url: "/" },
    { name: category, url: destinationLink || "/" },
    { name: title, url: destinationLink || "/" },
  ]}
  faqs={[
    {
      question: `Quand préparer son voyage à ${affiliateCity} ?`,
      answer:
        "L’idéal est de commencer plusieurs semaines à l’avance pour comparer les hébergements, vérifier les formalités, prévoir l’assurance et organiser les activités principales.",
    },
    {
      question: "Faut-il prendre une assurance voyage ?",
      answer:
        "C’est fortement recommandé dès qu’un voyage implique des frais importants, un départ à l’étranger ou des réservations non remboursables.",
    },
    {
      question: "Une eSIM est-elle utile en voyage ?",
      answer:
        "Oui, surtout hors de France. Elle permet d’avoir Internet rapidement sans dépendre uniquement du Wi-Fi public.",
    },
  ]}
      />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-24">
          <header
            className="relative h-[65vh] md:h-[75vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-label={seoImageAlt}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

            <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-20">
              <div className="text-white max-w-4xl">
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

                <h1
                  id="article-title"
                  className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg"
                >
                  {title}
                </h1>

                <p className="text-xl md:text-2xl text-white/90 drop-shadow">
                  {subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/30">
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

          <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="md:col-span-2 prose prose-lg max-w-none">
                {finalIntro && (
                  <p
                    className="text-lg leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left"
                    dangerouslySetInnerHTML={{
                      __html: parseSimpleMarkdown(finalIntro),
                    }}
                  />
                )}

                <section className="not-prose mt-8 p-6 rounded-xl border bg-sand/30">
                  <h2 className="text-2xl font-elegant font-bold text-cyan-700 mb-4 flex items-center gap-2">
                    <Star className="h-6 w-6 text-ocean" />
                    Nos recommandations avant de partir
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button asChild variant="outline" className="h-auto py-4">
                      <Link to="/meilleure-assurance-voyage">
                        <ShieldCheck className="h-5 w-5 mr-2" />
                        Assurance voyage
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="h-auto py-4">
                      <Link to="/meilleure-esim-internationale">
                        <Smartphone className="h-5 w-5 mr-2" />
                        eSIM internationale
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="h-auto py-4">
                      <Link to="/equipement-voyage">
                        <Backpack className="h-5 w-5 mr-2" />
                        Équipement voyage
                      </Link>
                    </Button>
                  </div>
                </section>

                <section className="not-prose mt-8 p-6 bg-white rounded-xl border shadow-sm">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <ListChecks className="h-5 w-5 text-ocean" />
                    Sommaire
                  </h2>

                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-ocean hover:underline"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>

                {contentSections.map((section, index) => (
                  <section
                    key={index}
                    id={slugify(section.title)}
                    className="mt-10 scroll-mt-28"
                  >
                    <h2 className="text-3xl font-elegant font-bold text-cyan-600 mb-4 flex items-center gap-3">
                      <section.icon
                        className="h-7 w-7 text-ocean"
                        aria-hidden="true"
                      />
                      {section.title}
                    </h2>

                    {typeof section.content === "string" ? (
                      <div
                        className="text-gray-700 leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    ) : (
                      section.content
                    )}
                  </section>
                ))}

                <section
                  id="gastronomie"
                  className="mt-12 bg-gray-50 p-8 rounded-lg border border-gray-200 scroll-mt-28"
                >
                  <h2 className="text-3xl font-elegant font-bold text-cyan-600 mb-4 flex items-center gap-3">
                    <Coffee className="h-7 w-7 text-ocean" aria-hidden="true" />
                    {gastronomyTitle}
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {gastronomyIntro}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {gastronomyItems.map((item, index) => (
                      <Card
                        key={index}
                        className="bg-white shadow-sm hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-4">
                          <h3 className="font-bold text-ocean mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {gastronomyConclusion && (
                    <p className="mt-6 text-gray-700 leading-relaxed">
                      {gastronomyConclusion}
                    </p>
                  )}

                  {destinationLink && !destinationLink.includes("/france") && (
                    <div className="mt-6 text-center">
                      <Button asChild className="bg-ocean hover:bg-ocean/90">
                        <Link to="/ressources-gratuites">
                          Télécharger les guides gratuits
                        </Link>
                      </Button>
                    </div>
                  )}
                </section>

                <div className="not-prose mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AffiliateWidget
                    title={`Hébergements à ${affiliateCity}`}
                    description={`Trouvez les meilleurs hôtels et logements pour votre séjour à ${affiliateCity} avec Booking.com.`}
                    link={`https://www.booking.com/city/${affiliateCountryCode}/${affiliateCity.toLowerCase()}.html`}
                    badge="Hôtels"
                    variant="card"
                  />

                  <AffiliateWidget
                    title="Assurance voyage"
                    description="Comparez les meilleures assurances avant votre départ pour voyager avec plus de sécurité."
                    link="/meilleure-assurance-voyage"
                    badge="Recommandé"
                    variant="card"
                  />

                  <AffiliateWidget
                    title="eSIM internationale"
                    description="Restez connecté dès votre arrivée sans changer de carte SIM physique."
                    link="/meilleure-esim-internationale"
                    badge="Bon plan"
                    variant="card"
                  />

                  <AffiliateWidget
                    title="Équipement indispensable"
                    description="Découvrez les accessoires utiles pour préparer votre voyage : valise, sac, adaptateur, batterie externe."
                    link="/equipement-voyage"
                    badge="Amazon"
                    variant="card"
                  />
                </div>

                <section
                  id="conseils-pratiques"
                  className="mt-12 pt-8 border-t scroll-mt-28"
                >
                  <h2 className="text-3xl font-elegant font-bold text-cyan-600 mb-6 flex items-center gap-3">
                    <MapPin className="h-7 w-7 text-ocean" aria-hidden="true" />
                    Conseils pratiques
                  </h2>

                  <div className="space-y-6">
                    {practicalTips.map((tip, index) => (
                      <div key={index}>
                        <h3 className="font-bold text-ocean text-xl mb-2">
                          {tip.title}
                        </h3>
                        <div
                          className="text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: tip.content }}
                        />
                      </div>
                    ))}
                  </div>
                </section>

                <section className="not-prose mt-12 p-6 rounded-xl bg-white border shadow-sm">
                  <h2 className="text-2xl font-elegant font-bold text-cyan-700 mb-4">
                    Questions fréquentes
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-800">
                        Quand préparer son voyage à {affiliateCity} ?
                      </h3>
                      <p className="text-gray-700">
                        L’idéal est de commencer plusieurs semaines à l’avance
                        pour comparer les hébergements, vérifier les formalités,
                        prévoir l’assurance et organiser les activités principales.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-800">
                        Faut-il prendre une assurance voyage ?
                      </h3>
                      <p className="text-gray-700">
                        C’est fortement recommandé dès qu’un voyage implique des
                        frais importants, un départ à l’étranger ou des réservations
                        non remboursables.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-800">
                        Une eSIM est-elle utile en voyage ?
                      </h3>
                      <p className="text-gray-700">
                        Oui, surtout hors de France. Elle permet d’avoir Internet
                        rapidement sans dépendre uniquement du Wi-Fi public.
                      </p>
                    </div>
                  </div>
                </section>

                {finalConclusion && (
                  <section className="mt-10 p-6 bg-sand/30 rounded-lg border-l-4 border-ocean">
                    <p
                      className="text-lg text-gray-800 italic leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: parseSimpleMarkdown(finalConclusion),
                      }}
                    />
                  </section>
                )}

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  {relatedArticles?.map((article, index) => (
                    <Button
                      key={index}
                      asChild
                      variant="outline"
                      className="flex-1"
                    >
                      <Link
                        to={article.url}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {article.title}
                      </Link>
                    </Button>
                  ))}

                  {destinationLink && (
                    <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
                      <Link
                        to={destinationLink}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {ctaTitle || "Voir toutes les destinations"}
                      </Link>
                    </Button>
                  )}
                </div>
              </article>

              <aside className="md:col-span-1">
                <div className="bg-accent/50 p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Tag className="h-5 w-5 text-primary" />
                    En bref
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
    </>
  );
};

export default ArticleTemplate;