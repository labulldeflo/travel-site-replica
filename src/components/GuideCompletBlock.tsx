import { Link } from 'react-router-dom';
import { BookOpen, DollarSign, Map, Sun, ArrowRight } from 'lucide-react';

interface GuideLink {
  label: string;
  to: string;
  icon: 'guide' | 'budget' | 'itineraire' | 'quand';
}

interface GuideCompletBlockProps {
  destination: string;
  links: GuideLink[];
  className?: string;
}

const iconMap = {
  guide: BookOpen,
  budget: DollarSign,
  itineraire: Map,
  quand: Sun,
};

const GuideCompletBlock = ({ destination, links, className = '' }: GuideCompletBlockProps) => {
  if (!links || links.length === 0) return null;

  return (
    <div className={`not-prose my-10 p-6 bg-ocean/5 rounded-xl border border-ocean/20 ${className}`}>
      <h2 className="text-lg font-semibold text-foreground mb-1">
        📚 Guide complet {destination}
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        Tous nos articles pour préparer votre voyage.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-3 px-4 py-3 bg-background rounded-lg border border-border hover:border-ocean/40 transition-colors group"
            >
              <Icon className="w-4 h-4 text-ocean shrink-0" />
              <span className="text-sm font-medium text-foreground group-hover:text-ocean transition-colors flex-1">
                {link.label}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-ocean transition-colors" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GuideCompletBlock;
