import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Cap sur le Monde";
const SITE_URL = "https://www.cap-sur-le-monde.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  h1?: string;
  hideH1?: boolean;
  ogType?: "website" | "article";
  /** For Article structured data */
  articleMeta?: {
    author?: string;
    datePublished?: string;
    dateModified?: string;
  };
  /** Breadcrumb items for BreadcrumbList schema */
  breadcrumbs?: BreadcrumbItem[];
  /** Include WebSite schema (homepage only) */
  isHomePage?: boolean;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  h1,
  hideH1 = false,
  ogType = "website",
  articleMeta,
  breadcrumbs,
  isHomePage = false,
  children,
}) => {
  const location = useLocation();
  const pagePath = url ?? location.pathname;
  const pageUrl = `${SITE_URL}${pagePath}`;
  const imageUrl = image
    ? image.startsWith("http") ? image : `${SITE_URL}${image}`
    : DEFAULT_OG_IMAGE;

  // JSON-LD: WebSite (homepage)
  const webSiteSchema = isHomePage
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/destinations?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      })
    : null;

  // JSON-LD: BreadcrumbList
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
        })),
      })
    : null;

  // JSON-LD: Article
  const articleSchema = articleMeta
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        image: imageUrl,
        author: {
          "@type": "Person",
          name: articleMeta.author || "Cap sur le Monde",
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
        },
        datePublished: articleMeta.datePublished,
        dateModified: articleMeta.dateModified || articleMeta.datePublished,
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      })
    : null;

  return (
    <>
      <Helmet titleTemplate={`%s | ${SITE_NAME}`} defaultTitle={SITE_NAME}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`${title} | ${SITE_NAME}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content={ogType} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | ${SITE_NAME}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        {webSiteSchema && (
          <script type="application/ld+json">{webSiteSchema}</script>
        )}
        {breadcrumbSchema && (
          <script type="application/ld+json">{breadcrumbSchema}</script>
        )}
        {articleSchema && (
          <script type="application/ld+json">{articleSchema}</script>
        )}
        {children}
      </Helmet>
      {!hideH1 && <h1 className="sr-only">{h1 || title}</h1>}
    </>
  );
};

export default SEO;
