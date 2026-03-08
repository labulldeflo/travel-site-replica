import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Cap sur le Monde";
const SITE_URL = "https://www.cap-sur-le-monde.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  h1?: string;
  hideH1?: boolean;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url, h1, hideH1 = false, children }) => {
  const location = useLocation();
  // Use explicit url prop if provided, otherwise auto-detect from current route
  const pagePath = url ?? location.pathname;
  const pageUrl = `${SITE_URL}${pagePath}`;
  const imageUrl = image
    ? (image.startsWith("http") ? image : `${SITE_URL}${image}`)
    : DEFAULT_OG_IMAGE;

  return (
    <>
      <Helmet
        titleTemplate={`%s | ${SITE_NAME}`}
        defaultTitle={SITE_NAME}
      >
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`${title} | ${SITE_NAME}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | ${SITE_NAME}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        {children}
      </Helmet>
      {!hideH1 && (
        <h1 className="sr-only">{h1 || title}</h1>
      )}
    </>
  );
};

export default SEO;
