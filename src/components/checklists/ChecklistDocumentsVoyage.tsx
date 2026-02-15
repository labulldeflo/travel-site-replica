import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, FileText, Globe, Shield, CreditCard, Plane, Heart } from "lucide-react";

const categories = [
  {
    titre: "Documents d'identité",
    icon: FileText,
    items: [
      { id: "doc-passeport", label: "Passeport valide (6 mois après la date de retour)" },
      { id: "doc-photocopies", label: "Photocopies du passeport (x3 exemplaires)" },
      { id: "doc-photos", label: "Photos d'identité (x10)" },
      { id: "doc-cni", label: "Carte d'identité nationale" },
      { id: "doc-acte-naissance", label: "Extrait d'acte de naissance (moins de 3 mois)" },
      { id: "doc-livret-famille", label: "Copie du livret de famille" },
    ],
  },
  {
    titre: "Visas & Autorisations",
    icon: Globe,
    items: [
      { id: "doc-liste-visas", label: "Liste complète des visas nécessaires par pays" },
      { id: "doc-e-visa", label: "e-Visas demandés et imprimés" },
      { id: "doc-esta", label: "ESTA (USA) ou eTA (Canada) si applicable" },
      { id: "doc-lettre-invitation", label: "Lettre d'invitation si requise" },
      { id: "doc-justif-hebergement", label: "Justificatifs d'hébergement pour les visas" },
      { id: "doc-billet-retour", label: "Preuve de billet retour / sortie du territoire" },
    ],
  },
  {
    titre: "Santé & Assurance",
    icon: Shield,
    items: [
      { id: "doc-assurance", label: "Attestation d'assurance voyage (imprimée + numérique)" },
      { id: "doc-carnet-vaccin", label: "Carnet de vaccination international" },
      { id: "doc-ordonnances", label: "Ordonnances traduites en anglais" },
      { id: "doc-carte-vitale", label: "Carte Vitale" },
      { id: "doc-ceam", label: "Carte Européenne d'Assurance Maladie (CEAM)" },
      { id: "doc-groupe-sanguin", label: "Carte de groupe sanguin" },
      { id: "doc-allergies", label: "Fiche d'allergies / traitements en anglais" },
    ],
  },
  {
    titre: "Finances",
    icon: CreditCard,
    items: [
      { id: "doc-cb-principale", label: "Carte bancaire principale (Visa/Mastercard)" },
      { id: "doc-cb-secours", label: "Carte bancaire de secours (autre banque)" },
      { id: "doc-attestation-banque", label: "Attestation bancaire pour les visas" },
      { id: "doc-opposition", label: "Numéros d'opposition des cartes notés à part" },
      { id: "doc-devises", label: "Devises locales pour les premiers jours" },
    ],
  },
  {
    titre: "Transport",
    icon: Plane,
    items: [
      { id: "doc-billets", label: "Billets d'avion (imprimés + version mobile)" },
      { id: "doc-permis-inter", label: "Permis de conduire international" },
      { id: "doc-reservations", label: "Confirmations de réservations (hôtels, activités)" },
      { id: "doc-cartes-fidelite", label: "Cartes de fidélité compagnies aériennes" },
    ],
  },
  {
    titre: "Contacts d'urgence",
    icon: Heart,
    items: [
      { id: "doc-contacts-famille", label: "Liste des contacts famille/proches" },
      { id: "doc-ambassades", label: "Coordonnées des ambassades / consulats" },
      { id: "doc-contact-assurance", label: "Numéro d'urgence assurance voyage (24h/24)" },
      { id: "doc-medecin", label: "Coordonnées du médecin traitant" },
      { id: "doc-ariane", label: "Inscription au fil d'Ariane (diplomatie.gouv.fr)" },
    ],
  },
];

const ChecklistDocumentsVoyage = () => {
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
      <div className="bg-gradient-ocean text-white p-6 rounded-2xl">
        <h3 className="text-2xl font-elegant font-bold mb-1">
          📋 Check-list documents de voyage
        </h3>
        <p className="text-sm text-white/80 mb-4">
          Tous les papiers importants à ne pas oublier avant le départ
        </p>
        <div className="flex items-center gap-4">
          <Progress value={progress} className="flex-1 h-3 bg-white/20 [&>div]:bg-white" />
          <span className="text-lg font-bold whitespace-nowrap">
            {checkedCount}/{totalItems}
          </span>
        </div>
        {progress === 100 && (
          <p className="mt-3 text-sm font-semibold bg-white/20 rounded-lg px-3 py-2 text-center">
            🎉 Tous vos documents sont prêts !
          </p>
        )}
      </div>

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
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isComplete ? "bg-green-500" : "bg-gradient-ocean"}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-foreground">{cat.titre}</h4>
                    <p className="text-xs text-muted-foreground">{done}/{total} complété{done > 1 ? "s" : ""}</p>
                  </div>
                  <Badge variant={isComplete ? "default" : "secondary"} className={isComplete ? "bg-green-500 text-white" : ""}>
                    {isComplete ? "✓ Fait" : `${total - done} restant${total - done > 1 ? "s" : ""}`}
                  </Badge>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openCategories[catIndex] ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-4 pb-4 space-y-1">
                    {cat.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-accent/30 transition-colors">
                        <Checkbox id={item.id} checked={checkedItems[item.id] || false} onCheckedChange={() => handleCheck(item.id)} />
                        <label htmlFor={item.id} className={`text-sm cursor-pointer flex-1 ${checkedItems[item.id] ? "line-through text-muted-foreground" : "text-foreground"}`}>
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

export default ChecklistDocumentsVoyage;
