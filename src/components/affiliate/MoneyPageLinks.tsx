import { Link } from 'react-router-dom';
import { ArrowRight, Wallet, Backpack, Shield, MapPin, Plane } from 'lucide-react';

interface MoneyPageLinksProps {
  destination?: string;
  showBudget?: boolean;
  showEquipement?: boolean;
  showAssurance?: boolean;
  showPreparation?: boolean;
  showVols?: boolean;
  className?: string;
}

const MoneyPageLinks = ({
  destination,
  showBudget = true,
  showEquipement = true,
  showAssurance = true,
  showPreparation = true,
  showVols = false,
  className = '',
}: MoneyPageLinksProps) => {
  const links = [
    showBudget && {
      icon: Wallet,
      label: 'Budget voyage par pays',
      to: '/budget-voyage',
      color: 'text-sunset',
    },
    showEquipement && {
      icon: Backpack,
      label: 'Équipement recommandé',
      to: '/equipement-voyage',
      color: 'text-ocean',
    },
    showAssurance && {
      icon: Shield,
      label: 'Assurance voyage',
      to: '/guides/securite',
      color: 'text-ocean',
    },
    showPreparation && {
      icon: MapPin,
      label: 'Préparer son voyage',
      to: '/preparer-voyage',
      color: 'text-ocean',
    },
    showVols && {
      icon: Plane,
      label: 'Vols pas chers',
      to: '/bons-plans/vols',
      color: 'text-ocean',
    },
  ].filter(Boolean) as { icon: typeof Wallet; label: string; to: string; color: string }[];

  return (
    <div className={`not-prose my-8 p-5 bg-muted/40 rounded-xl border border-border ${className}`}>
      <h3 className="text-base font-semibold text-foreground mb-1">
        📌 Ressources utiles{destination ? ` — ${destination}` : ''}
      </h3>
      <p className="text-xs text-muted-foreground mb-3">
        Nos guides pour organiser votre voyage étape par étape.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-2.5 px-3 py-2.5 bg-background rounded-lg border border-border hover:border-ocean/40 transition-colors group"
            >
              <Icon className={`w-4 h-4 ${link.color} shrink-0`} />
              <span className="text-sm text-foreground group-hover:text-ocean transition-colors flex-1">
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

export default MoneyPageLinks;
