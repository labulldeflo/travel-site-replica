import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Luggage, FileText, CreditCard, Stethoscope, Smartphone, ShieldCheck } from "lucide-react";

const categories = [
  {
    titre: "Avant le départ – Administratif",
    icon: FileText,
    items: [
      { id: "vo-passeport", label: "Vérifier la validité du passeport (6 mois après retour)" },
      { id: "vo-visa", label: "Demander les visas nécessaires" },
      { id: "vo-assurance", label: "Souscrire une assurance voyage" },
      { id: "vo-photocopies", label: "Photocopier tous les documents importants" },
      { id: "vo-scan", label: "Scanner et stocker les documents dans le cloud" },
      { id: "vo-banque", label: "Prévenir sa banque du voyage" },
      { id: "vo-cb", label: "Vérifier les plafonds de carte bancaire" },
      { id: "vo-permis", label: "Obtenir le permis de conduire international si besoin" },
      { id: "vo-carteeuropeenne", label: "Commander la Carte Européenne d'Assurance Maladie" },
      { id: "vo-procuration", label: "Faire une procuration si besoin" },
    ],
  },
  {
    titre: "Santé & Vaccinations",
    icon: Stethoscope,
    items: [
      { id: "vo-medecin", label: "Rendez-vous chez le médecin traitant" },
      { id: "vo-vaccins", label: "Mettre à jour les vaccinations" },
      { id: "vo-pharmacie", label: "Préparer la trousse à pharmacie" },
      { id: "vo-ordonnances", label: "Faire traduire les ordonnances en anglais" },
      { id: "vo-anti-palu", label: "Traitement antipaludéen si nécessaire" },
      { id: "vo-dentiste", label: "Check-up dentiste avant le départ" },
      { id: "vo-lunettes", label: "Prévoir des lunettes/lentilles de rechange" },
    ],
  },
  {
    titre: "Bagages – Vêtements & Accessoires",
    icon: Luggage,
    items: [
      { id: "vo-sac", label: "Choisir le bon sac à dos / valise" },
      { id: "vo-vetements", label: "Vêtements adaptés au climat (couches)" },
      { id: "vo-chaussures", label: "Chaussures de marche confortables" },
      { id: "vo-impermeable", label: "Veste imperméable / coupe-vent" },
      { id: "vo-maillot", label: "Maillot de bain" },
      { id: "vo-pyjama", label: "Tenue de nuit confortable" },
      { id: "vo-foulard", label: "Foulard polyvalent (temples, soleil, froid)" },
      { id: "vo-cubes", label: "Cubes de rangement pour organiser le sac" },
      { id: "vo-sac-linge", label: "Sac à linge sale" },
      { id: "vo-cadenas", label: "Cadenas pour les casiers d'auberge" },
    ],
  },
  {
    titre: "Technologie & Électronique",
    icon: Smartphone,
    items: [
      { id: "vo-telephone", label: "Téléphone + chargeur" },
      { id: "vo-batterie", label: "Batterie externe chargée" },
      { id: "vo-adaptateur", label: "Adaptateur universel de prises" },
      { id: "vo-ecouteurs", label: "Écouteurs / casque anti-bruit" },
      { id: "vo-appareil-photo", label: "Appareil photo + carte mémoire" },
      { id: "vo-esim", label: "eSIM ou carte SIM locale préparée" },
      { id: "vo-applis", label: "Télécharger les applis utiles (Maps offline, traduction)" },
      { id: "vo-liseuse", label: "Liseuse ou livres" },
    ],
  },
  {
    titre: "Finances & Sécurité",
    icon: CreditCard,
    items: [
      { id: "vo-cash", label: "Retirer du cash / devises locales" },
      { id: "vo-cb-voyage", label: "Carte bancaire sans frais à l'étranger" },
      { id: "vo-budget", label: "Établir un budget quotidien" },
      { id: "vo-ceinture", label: "Pochette / ceinture de sécurité pour documents" },
      { id: "vo-opposition", label: "Noter les numéros d'opposition des cartes" },
      { id: "vo-cagnotte", label: "Réserve d'urgence accessible" },
    ],
  },
  {
    titre: "Le jour J – Dernières vérifications",
    icon: ShieldCheck,
    items: [
      { id: "vo-billets", label: "Imprimer / sauvegarder les billets d'avion" },
      { id: "vo-hebergement", label: "Confirmation de la 1ère nuit d'hébergement" },
      { id: "vo-navette", label: "Organiser le transport jusqu'à l'aéroport" },
      { id: "vo-maison", label: "Couper eau/gaz, vérifier les fenêtres" },
      { id: "vo-voisin", label: "Prévenir un voisin / gardien" },
      { id: "vo-poubelles", label: "Vider le frigo et sortir les poubelles" },
      { id: "vo-itineraire", label: "Partager son itinéraire avec un proche" },
      { id: "vo-sourire", label: "Sourire, c'est parti ! 🌍✈️" },
    ],
  },
];

const ChecklistVoyageuseOrganisee = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>(
    Object.fromEntries(categories.map((_, i) => [i, true]))
  );

  const handleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalItems = categories.reduce((a, c) => a + c.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  const getCategoryProgress = (items: { id: string }[]) => {
    const done = items.filter((i) => checkedItems[i.id]).length;
    return { done, total: items.length };
  };

  return (
    <div className="space-y-6">
      {/* Header with progress */}
      <div className="bg-gradient-sunset text-white p-6 rounded-2xl">
        <h3 className="text-2xl font-elegant font-bold mb-1">
          ✈️ La check-list ultime de la voyageuse organisée
        </h3>
        <p className="text-sm text-white/80 mb-4">
          Cochez chaque étape pour ne rien oublier avant le grand départ !
        </p>
        <div className="flex items-center gap-4">
          <Progress value={progress} className="flex-1 h-3 bg-white/20 [&>div]:bg-white" />
          <span className="text-lg font-bold whitespace-nowrap">
            {checkedCount}/{totalItems}
          </span>
        </div>
        {progress === 100 && (
          <p className="mt-3 text-sm font-semibold bg-white/20 rounded-lg px-3 py-2 text-center">
            🎉 Bravo ! Vous êtes prête pour l'aventure !
          </p>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((cat, catIndex) => {
          const Icon = cat.icon;
          const { done, total } = getCategoryProgress(cat.items);
          const isComplete = done === total;
          return (
            <Collapsible
              key={catIndex}
              open={openCategories[catIndex]}
              onOpenChange={(open) =>
                setOpenCategories((prev) => ({ ...prev, [catIndex]: open }))
              }
            >
              <Card className={`overflow-hidden transition-all ${isComplete ? "border-green-400/50 bg-green-50/30 dark:bg-green-950/10" : ""}`}>
                <CollapsibleTrigger className="w-full p-4 flex items-center gap-3 hover:bg-accent/40 transition-colors cursor-pointer">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isComplete ? "bg-green-500" : "bg-gradient-sunset"}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-foreground">{cat.titre}</h4>
                    <p className="text-xs text-muted-foreground">
                      {done}/{total} complété{done > 1 ? "s" : ""}
                    </p>
                  </div>
                  <Badge variant={isComplete ? "default" : "secondary"} className={isComplete ? "bg-green-500 text-white" : ""}>
                    {isComplete ? "✓ Fait" : `${total - done} restant${total - done > 1 ? "s" : ""}`}
                  </Badge>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openCategories[catIndex] ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="px-4 pb-4 space-y-1">
                    {cat.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-accent/30 transition-colors"
                      >
                        <Checkbox
                          id={item.id}
                          checked={checkedItems[item.id] || false}
                          onCheckedChange={() => handleCheck(item.id)}
                        />
                        <label
                          htmlFor={item.id}
                          className={`text-sm cursor-pointer flex-1 ${
                            checkedItems[item.id]
                              ? "line-through text-muted-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};

export default ChecklistVoyageuseOrganisee;
