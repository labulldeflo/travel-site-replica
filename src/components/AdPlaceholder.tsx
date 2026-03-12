interface AdPlaceholderProps {
  format?: 'banner' | 'rectangle' | 'leaderboard';
  className?: string;
}

/**
 * Emplacement réservé pour de futurs encarts publicitaires (AdSense).
 * Rendu invisible par défaut — à activer quand les annonces seront configurées.
 * Formats : banner (728x90), rectangle (300x250), leaderboard (970x90).
 */
const AdPlaceholder = ({ format = 'rectangle', className = '' }: AdPlaceholderProps) => {
  // Ne rien afficher pour l'instant — remplacer par le code AdSense quand prêt
  // Le composant sert de marqueur dans le layout pour les futurs emplacements
  return (
    <div
      className={`ad-slot ad-slot-${format} ${className}`}
      data-ad-format={format}
      aria-hidden="true"
    />
  );
};

export default AdPlaceholder;
