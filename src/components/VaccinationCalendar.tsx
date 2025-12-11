import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Syringe, Clock, AlertCircle } from "lucide-react";

const VaccinationCalendar = () => {
  const vaccinations = [
    {
      nom: "Hépatite A",
      delaiAvant: "15 jours",
      rappel: "6-12 mois",
      priorite: "Essentiel",
      regions: ["Asie", "Afrique", "Amérique du Sud"]
    },
    {
      nom: "Hépatite B",
      delaiAvant: "6 mois (3 doses)",
      rappel: "Tous les 10 ans",
      priorite: "Recommandé",
      regions: ["Mondial"]
    },
    {
      nom: "Fièvre Jaune",
      delaiAvant: "10 jours",
      rappel: "Valable à vie",
      priorite: "Obligatoire",
      regions: ["Afrique", "Amérique du Sud"]
    },
    {
      nom: "Typhoïde",
      delaiAvant: "15 jours",
      rappel: "Tous les 3 ans",
      priorite: "Recommandé",
      regions: ["Asie", "Afrique", "Amérique du Sud"]
    },
    {
      nom: "Rage",
      delaiAvant: "1 mois (3 doses)",
      rappel: "Après exposition",
      priorite: "Recommandé",
      regions: ["Asie", "Afrique"]
    },
    {
      nom: "Encéphalite Japonaise",
      delaiAvant: "1 mois (2 doses)",
      rappel: "12-24 mois",
      priorite: "Optionnel",
      regions: ["Asie du Sud-Est"]
    },
    {
      nom: "DTP (Diphtérie, Tétanos, Polio)",
      delaiAvant: "N/A (mise à jour)",
      rappel: "Tous les 10 ans",
      priorite: "Essentiel",
      regions: ["Mondial"]
    }
  ];

  const getPrioriteColor = (priorite: string) => {
    switch (priorite) {
      case "Obligatoire":
        return "bg-destructive text-destructive-foreground";
      case "Essentiel":
        return "bg-sunset text-white";
      case "Recommandé":
        return "bg-ocean text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-ocean text-white p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Planning des Vaccinations</h3>
        </div>
        <p className="text-sm opacity-90">
          Planifiez vos vaccinations au moins 3 mois avant votre départ. Certains vaccins nécessitent plusieurs doses espacées dans le temps.
        </p>
      </div>

      <div className="space-y-4">
        {vaccinations.map((vaccin, index) => (
          <Card key={index} className="p-6 hover:shadow-elegant transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center">
                  <Syringe className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-semibold text-foreground">
                    {vaccin.nom}
                  </h4>
                  <Badge className={getPrioriteColor(vaccin.priorite)}>
                    {vaccin.priorite}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-ocean mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Délai avant départ</p>
                      <p className="text-muted-foreground">{vaccin.delaiAvant}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-ocean mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Rappel</p>
                      <p className="text-muted-foreground">{vaccin.rappel}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Régions concernées :</p>
                  <div className="flex flex-wrap gap-2">
                    {vaccin.regions.map((region, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {region}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-gradient-sand">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-sunset flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Conseils importants :</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Consultez un centre de vaccination international</li>
              <li>Conservez votre carnet de vaccination international</li>
              <li>Certains vaccins sont remboursés par la Sécurité Sociale</li>
              <li>Budget prévisionnel : 200-400€ pour l'ensemble</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VaccinationCalendar;
