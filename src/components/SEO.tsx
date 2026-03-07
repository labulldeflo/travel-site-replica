import React from "react";
import { Helmet } from "react-helmet";

const SITE_NAME = "Cap sur le Monde";
const SITE_URL = "https://www.cap-sur-le-monde.com";

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
  const pageUrl = `${SITE_URL}${url || "/"}`;
  const imageUrl = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : undefined;

  return (
    <>
      <Helmet
        titleTemplate={`%s | ${SITE_NAME}`}
        defaultTitle={SITE_NAME}
      >
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}
        {children}
      </Helmet>
      {!hideH1 && (
        <h1 className="sr-only">{h1 || title}</h1>
      )}
    </>
  );
};

export default SEO;
