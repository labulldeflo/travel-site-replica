import React from "react";
import { Helmet } from "react-helmet";

// --- À CONFIGURER ---
// Mettez ici le nom de votre site et son URL de base
const SITE_NAME = "Cap sur le Monde";
const SITE_URL = "https://www.cap-sur-le-monde.com";
// --------------------

// Définit les "props" que notre composant SEO acceptera
interface SEOProps {
  title: string; // Le titre de la page (ex: "Mon Super Article")
  description: string; // La description (pour Google et les réseaux sociaux)
  image?: string; // L'image à afficher (URL complète)
  url?: string; // L'URL de la page (ex: "/mon-super-article")
  children?: React.ReactNode; // Pour ajouter des balises <Helmet> supplémentaires
}

/**
 * Un composant réutilisable pour gérer le SEO de chaque page.
 * Il utilise react-helmet pour injecter les balises <title>, <meta>, etc.
 */
const SEO: React.FC<SEOProps> = ({ title, description, image, url, children }) => {
  // Construit l'URL complète de la page
  const pageUrl = `${SITE_URL}${url || "/"}`;

  // Construit l'URL complète de l'image (si elle est fournie)
  const imageUrl = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : undefined;

  return (
    <Helmet
      // titleTemplate permet de formater tous les titres.
      // %s sera remplacé par la prop "title".
      // Ex: "Mon Article | Le Nom de Votre Site"
      titleTemplate={`%s | ${SITE_NAME}`}
      // defaultTitle est utilisé si aucune prop "title" n'est fournie
      defaultTitle={SITE_NAME}
    >
      {/* La prop "title" est passée ici */}
      <title>{title}</title>

      {/* --- Balises SEO principales --- */}
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {/* --- Open Graph (pour Facebook, LinkedIn, etc.) --- */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/* --- Twitter Card --- */}
      <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* Permet de passer d'autres balises si besoin */}
      {children}
    </Helmet>
  );
};

export default SEO;
