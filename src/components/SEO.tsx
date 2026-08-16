import React from "react";
import { Helmet } from "react-helmet";

const SITE_NAME = "Cap sur le Monde";
const SITE_URL = "https://cap-sur-le-monde.com";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  /** Alias legacy toléré (équivalent de `type`). */
  ogType?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: FAQItem[];
  hideH1?: boolean;
  isHomePage?: boolean;
  noindex?: boolean;
  /** H1 alternatif (utilisé par certaines pages internes). */
  h1?: string;
  /** Métadonnées article legacy (auteur/date). */
  articleMeta?: { author?: string; datePublished?: string; dateModified?: string };
  /** Alias legacy pour la description. */
  metaDescription?: string;
  children?: React.ReactNode;
  /** Accepte les props supplémentaires historiques sans erreur TS. */
  [key: string]: unknown;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  type,
  ogType,
  author,
  datePublished,
  dateModified,
  articleMeta,
  breadcrumbs,
  faqs,
  noindex = false,
  children,
}) => {
  // Compatibilité avec les anciennes pages du site : plusieurs utilisent encore
  // ogType="article" et articleMeta au lieu des props modernes.
  const effectiveType: "website" | "article" =
    type === "article" || ogType === "article" ? "article" : "website";
  const effectiveAuthor = articleMeta?.author || author || SITE_NAME;
  const effectiveDatePublished = articleMeta?.datePublished || datePublished;
  const effectiveDateModified =
    articleMeta?.dateModified || dateModified || effectiveDatePublished;

  const pageUrl = url?.startsWith("http")
    ? url
    : `${SITE_URL}${url || "/"}`;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : undefined;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  const articleSchema =
    effectiveType === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          image: imageUrl ? [imageUrl] : undefined,
          author: {
            "@type": "Organization",
            name: effectiveAuthor,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
          },
          datePublished: effectiveDatePublished,
          dateModified: effectiveDateModified,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": pageUrl,
          },
        }
      : null;

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url.startsWith("http")
              ? item.url
              : `${SITE_URL}${item.url}`,
          })),
        }
      : null;

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const schemas = [
    organizationSchema,
    websiteSchema,
    articleSchema,
    breadcrumbSchema,
    faqSchema,
  ].filter(Boolean);

  return (
    <Helmet titleTemplate={`%s | ${SITE_NAME}`} defaultTitle={SITE_NAME}>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={effectiveType} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {effectiveType === "article" && effectiveDatePublished && (
        <meta property="article:published_time" content={effectiveDatePublished} />
      )}
      {effectiveType === "article" && effectiveDateModified && (
        <meta property="article:modified_time" content={effectiveDateModified} />
      )}

      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      <script type="application/ld+json">{JSON.stringify(schemas)}</script>

      {children}
    </Helmet>
  );
};

export default SEO;
