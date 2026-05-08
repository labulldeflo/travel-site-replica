import { Car, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AFFILIATE_LINKS } from "@/lib/affiliateData";
import { trackAffiliateClick } from "@/lib/affiliateTracking";
import { useLocation } from "react-router-dom";

interface Region {
  name: string;
  emoji: string;
  query: string;
  note: string;
}

const FRANCE: Region[] = [
  { name: "Bretagne", emoji: "🌊", query: "Brest", note: "Côte sauvage, Finistère" },
  { name: "Corse", emoji: "🏝️", query: "Ajaccio", note: "Calanques & GR20" },
  { name: "Alpes", emoji: "🏔️", query: "Annecy", note: "Lacs & cols mythiques" },
];

const EUROPE_SUD: Region[] = [
  { name: "Espagne", emoji: "🇪🇸", query: "Malaga", note: "Andalousie en road trip" },
  { name: "Portugal", emoji: "🇵🇹", query: "Lisbonne", note: "Algarve & côte atlantique" },
  { name: "Grèce", emoji: "🇬🇷", query: "Athenes", note: "Péloponnèse & îles accessibles" },
];

interface Props {
  title?: string;
  subtitle?: string;
  className?: string;
}

const DiscoverCarsEurope = ({
  title = "🚗 Louer une voiture en Europe — printemps/été 2026",
  subtitle = "Le meilleur moyen d'explorer la France et l'Europe du Sud sans dépendre des aéroports. Comparez les loueurs en 30 secondes via DiscoverCars.",
  className = "",
}: Props) => {
  const location = useLocation();

  const handleClick = (region: string) => {
    trackAffiliateClick({
      ctaType: "vol",
      provider: "DiscoverCars",
      destination: region,
      page: location.pathname,
      position: "discovercars-europe-block",
    });
  };

  const renderRegion = (r: Region) => (
    <a
      key={r.name}
      href={AFFILIATE_LINKS.discoverCars(r.query)}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={() => handleClick(r.name)}
      className="group flex items-center gap-3 rounded-lg border border-border bg-background hover:border-ocean/40 hover:shadow-soft transition-all p-3"
    >
      <span className="text-2xl shrink-0">{r.emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground group-hover:text-ocean transition-colors">
          {r.name}
        </p>
        <p className="text-[11px] text-muted-foreground truncate">{r.note}</p>
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-ocean shrink-0" />
    </a>
  );

  return (
    <section className={`not-prose my-10 ${className}`}>
      <div className="rounded-2xl border-2 border-ocean/20 bg-gradient-to-br from-ocean/5 to-transparent p-5 sm:p-7">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0">
            <Car className="w-5 h-5 text-ocean" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-lg sm:text-xl font-elegant font-bold text-foreground">
                {title}
              </h3>
              <Badge className="bg-ocean text-white border-0 text-[10px]">
                Tendance 2026
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-ocean" />
              Road Trip en France
            </p>
            <div className="space-y-2">{FRANCE.map(renderRegion)}</div>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sunset" />
              Europe du Sud
            </p>
            <div className="space-y-2">{EUROPE_SUD.map(renderRegion)}</div>
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-border/60">
          <p className="text-xs text-muted-foreground flex-1 text-center sm:text-left">
            ✔️ Comparaison gratuite · Annulation flexible · Plus de 500 loueurs comparés
          </p>
          <Button
            asChild
            size="sm"
            className="bg-ocean hover:bg-ocean/90 text-white"
          >
            <a
              href={AFFILIATE_LINKS.discoverCars()}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() => handleClick("global")}
            >
              Comparer les voitures
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </Button>
        </div>

        <p className="text-[10px] text-muted-foreground italic text-center mt-3">
          Lien affilié · Sans surcoût pour vous
        </p>
      </div>
    </section>
  );
};

export default DiscoverCarsEurope;
