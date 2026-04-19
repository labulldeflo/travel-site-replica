/**
 * Calcule le temps de lecture estimé d'un texte (HTML ou plain text).
 * Base : 200 mots/minute (lecture francophone moyenne).
 */
export const calculateReadingTime = (...texts: Array<string | undefined | null>): string => {
  const words = texts
    .filter(Boolean)
    .map((t) => (t || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim())
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
};
