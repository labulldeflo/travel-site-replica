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
  author?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: FAQItem[];
  /** Masque l'ajout d'un H1 supplémentaire (utile lorsque la page fournit déjà son propre H1). */
  hideH1?: boolean;
  /** Marque la page comme homepage pour ajuster les schémas (Organization/WebSite). */
  isHomePage?: boolean;
  /** Empêche l'indexation par les moteurs. */
  noindex?: boolean;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  type = "website",
  author = SITE_NAME,
  datePublished,
  dateModified,
  breadcrumbs,
  faqs,
  children,
}) => {
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
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          image: imageUrl ? [imageUrl] : undefined,
          author: {
            "@type": "Organization",
            name: author,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
          },
          datePublished,
          dateModified: dateModified || datePublished,
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
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type === "article" ? "article" : "website"} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta
        name="twitter:card"
        content={imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>

      {children}
    </Helmet>
  );
};

export default SEO;