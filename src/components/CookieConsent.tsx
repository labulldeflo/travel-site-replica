import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const COOKIE_KEY = 'cslm_cookie_consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay to avoid flash on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(COOKIE_KEY, 'refused');
    setVisible(false);
    // Disable GA4 tracking
    if (typeof window !== 'undefined') {
      (window as any)['ga-disable-G-LESCLW87FV'] = true;
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-2xl mx-auto bg-background border border-border rounded-xl shadow-lg p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground font-medium mb-1">🍪 Cookies et confidentialité</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ce site utilise Google Analytics pour mesurer l'audience et des cookies d'affiliation (Booking, Amazon, etc.) 
              lorsque vous cliquez sur nos recommandations.{' '}
              <a href="/politique-confidentialite" className="text-ocean hover:underline">En savoir plus</a>
            </p>
          </div>
          <button onClick={() => setVisible(false)} className="text-muted-foreground hover:text-foreground p-1 shrink-0" aria-label="Fermer">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          <Button size="sm" onClick={accept} className="bg-ocean hover:bg-ocean/90 text-xs h-8 flex-1 sm:flex-none">
            Accepter
          </Button>
          <Button size="sm" variant="outline" onClick={refuse} className="text-xs h-8 flex-1 sm:flex-none">
            Refuser
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
