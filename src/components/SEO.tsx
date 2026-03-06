import React from "react";
import { Helmet } from "react-helmet";

// --- À CONFIGURER ---
// Mettez ici le nom de votre site et son URL de base
const SITE_NAME = "Cap sur le Monde";
const SITE_URL = "https://www.cap-sur-le-monde.com";
// --------------------

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  h1?: string; // H1 discret pour le SEO (si absent, utilise title)
  hideH1?: boolean; // Mettre true si la page a déjà un H1 visible
  children?: React.ReactNode;
}

/**
 * Un composant réutilisable pour gérer le SEO de chaque page.
 * Il utilise react-helmet pour injecter les balises <title>, <meta>, etc.
 */
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
