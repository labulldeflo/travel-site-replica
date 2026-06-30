import { ExternalLink, Award, Wallet, Zap, AlertTriangle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackAffiliateClick } from "@/lib/affiliateTracking";
import { useLocation } from "react-router-dom";

type RecommendationType = "best" | "budget" | "simple" | "avoid";

interface RecommendationCardProps {
  type: RecommendationType;
  title?: string;
  name: string;
  description: string;
  url?: string;
  ctaLabel?: string;
  ctaType?: "hotel" | "assurance" | "esim" | "activites" | "equipement" | "vol";
  destination?: string;
  className?: string;
}

const typeConfig = {
  best: {
    icon: Award,
    label: "🏆 Notre recommandation",
    borderColor: "border-ocean",
    bgColor: "bg-ocean/5",
    iconColor: "text-ocean",
  },
  budget: {
    icon: Wallet,
    label: "💰 Meilleur choix petit budget",
    borderColor: "border-green-500/40",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    iconColor: "text-green-600",
  },
  simple: {
    icon: Zap,
    label: "⚡ Le plus simple",
    borderColor: "border-sunset/40",
    bgColor: "bg-sunset/5",
    iconColor: "text-sunset",
  },
  avoid: {
    icon: AlertTriangle,
    label: "⚠️ À éviter si…",
    borderColor: "border-destructive/30",
    bgColor: "bg-destructive/5",
    iconColor: "text-destructive",
  },
} as const;

export default function RecommendationCard({
  type,
  title,
  name,
  description,
  url,
  ctaLabel,
  ctaType = "hotel",
  destination,
  className = "",
}: RecommendationCardProps) {
  const location = useLocation();

  const config = typeConfig[type];
  const Icon = config.icon;

  const handleClick = () => {
    if (!url) return;

    trackAffiliateClick({
      ctaType,
      provider: name,
      destination,
      page: location.pathname,
      position: "recommendation",
    });
  };

  return (
    <article
      className={`not-prose my-6 rounded-xl border-l-4 p-5 shadow-sm transition-all hover:shadow-md ${config.borderColor} ${config.bgColor} ${className}`}
    >
      <div className="mb-2 flex items-center gap-2">
        <Icon className={`h-5 w-5 ${config.iconColor}`} />

        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {title ?? config.label}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-foreground">
        {name}
      </h3>

      <p className="mb-4 text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      {url && type !== "avoid" && (
        <>
          <Button
            asChild
            onClick={handleClick}
            className="h-11 bg-[#FF9900] font-semibold text-white hover:bg-[#e68a00]"
          >
            <a
              href={url}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
            >
              {ctaLabel ?? "👉 Voir le prix sur Amazon"}

              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-green-600" />
              Amazon sécurisé
            </span>

            <span className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-orange-500" />
              Stock variable
            </span>

            <span>
              Lien affilié
            </span>
          </div>
        </>
      )}
    </article>
  );
}
