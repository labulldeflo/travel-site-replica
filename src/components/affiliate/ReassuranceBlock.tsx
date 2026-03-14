import { ShieldCheck } from 'lucide-react';

interface ReassuranceBlockProps {
  items?: string[];
  className?: string;
}

const defaultItems = [
  "Annulation gratuite sur la plupart des offres",
  "Réservez maintenant, payez plus tard",
  "Service client disponible 24h/24",
];

const ReassuranceBlock = ({ items = defaultItems, className = '' }: ReassuranceBlockProps) => (
  <div className={`flex flex-wrap gap-x-4 gap-y-1.5 py-3 text-xs text-muted-foreground ${className}`}>
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-1">
        <ShieldCheck className="w-3 h-3 text-ocean/60 shrink-0" />
        {item}
      </span>
    ))}
  </div>
);

export default ReassuranceBlock;
