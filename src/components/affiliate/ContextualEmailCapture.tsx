import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEmailCapture } from '@/lib/affiliateTracking';
import { useLocation } from 'react-router-dom';

interface ContextualEmailCaptureProps {
  leadMagnet: string;
  description: string;
  buttonLabel?: string;
  className?: string;
}

const ContextualEmailCapture = ({
  leadMagnet,
  description,
  buttonLabel = 'Recevoir le guide gratuit',
  className = '',
}: ContextualEmailCaptureProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    trackEmailCapture(location.pathname, leadMagnet);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`not-prose my-8 p-5 rounded-xl border border-green-500/30 bg-green-50 dark:bg-green-950/20 text-center ${className}`}>
        <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
        <p className="text-sm font-semibold text-foreground">Merci ! Vérifiez votre boîte mail 📬</p>
        <p className="text-xs text-muted-foreground mt-1">Votre guide arrive dans quelques minutes.</p>
      </div>
    );
  }

  return (
    <div className={`not-prose my-8 p-5 rounded-xl border border-ocean/20 bg-ocean/5 ${className}`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-ocean/10 flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-ocean" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-foreground mb-0.5">📩 {leadMagnet}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          required
          className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ocean/30"
        />
        <Button type="submit" size="sm" className="bg-ocean hover:bg-ocean/90 whitespace-nowrap">
          {buttonLabel}
        </Button>
      </form>
      <p className="text-[10px] text-muted-foreground mt-2">Gratuit • Pas de spam • Désinscription en 1 clic</p>
    </div>
  );
};

export default ContextualEmailCapture;
