import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Sun, Snowflake, Palmtree, Mountain, Shirt, Droplets } from "lucide-react";

const categories = [
  {
    titre: "Vêtements essentiels (toute destination)",
    icon: Shirt,
    items: [
      { id: "val-sous-vetements", label: "Sous-vêtements (5-7 pièces)" },
      { id: "val-chaussettes", label: "Chaussettes (5-7 paires, dont 2 de rando)" },
      { id: "val-tshirts", label: "T-shirts / hauts légers (4-5)" },
      { id: "val-pantalon", label: "Pantalon polyvalent (2)" },
      { id: "val-short", label: "Short / jupe légère (2)" },
      { id: "val-pull", label: "Pull / polaire légère" },
      { id: "val-pyjama", label: "Tenue de nuit" },
      { id: "val-maillot", label: "Maillot de bain" },
    ],
  },
  {
    titre: "Climat chaud & tropical 🌴",
    icon: Sun,
    items: [
      { id: "val-lin", label: "Vêtements en lin / coton léger" },
      { id: "val-chapeau", label: "Chapeau / casquette" },
      { id: "val-lunettes", label: "Lunettes de soleil" },
      { id: "val-creme-solaire", label: "Crème solaire haute protection" },
      { id: "val-anti-moustique", label: "Spray anti-moustiques" },
      { id: "val-sandales", label: "Sandales confortables" },
      { id: "val-tenue-temple", label: "Tenue couvrante pour visiter les temples" },
      { id: "val-serviette-micro", label: "Serviette microfibre séchage rapide" },
    ],
  },
  {
    titre: "Climat froid & montagne ❄️",
    icon: Snowflake,
    items: [
      { id: "val-doudoune", label: "Doudoune légère compressible" },
      { id: "val-thermique", label: "Sous-vêtements thermiques" },
      { id: "val-bonnet", label: "Bonnet et gants" },
      { id: "val-echarpe", label: "Écharpe / tour de cou" },
      { id: "val-chaussures-rando", label: "Chaussures de randonnée imperméables" },
      { id: "val-polaire", label: "Polaire épaisse" },
      { id: "val-chaussettes-laine", label: "Chaussettes en laine mérinos" },
    ],
  },
  {
    titre: "Pluie & Mousson 🌧️",
    icon: Droplets,
    items: [
      { id: "val-impermeable", label: "Veste imperméable / K-Way" },
      { id: "val-poncho", label: "Poncho de pluie compact" },
      { id: "val-sac-etanche", label: "Sac étanche pour protéger l'électronique" },
      { id: "val-chaussures-eau", label: "Chaussures qui supportent l'eau" },
      { id: "val-parapluie", label: "Parapluie compact" },
    ],
  },
  {
    titre: "Trek & Aventure 🏔️",
    icon: Mountain,
    items: [
      { id: "val-sac-jour", label: "Petit sac à dos de journée (20L)" },
      { id: "val-gourde", label: "Gourde filtrante / bouteille réutilisable" },
      { id: "val-frontale", label: "Lampe frontale" },
      { id: "val-couteau", label: "Couteau suisse / multi-outil" },
      { id: "val-cordelette", label: "Cordelette / corde à linge" },
      { id: "val-sifflet", label: "Sifflet d'urgence" },
      { id: "val-baton", label: "Bâtons de randonnée pliables" },
    ],
  },
  {
    titre: "Plage & Balnéaire 🏖️",
    icon: Palmtree,
    items: [
      { id: "val-paréo", label: "Paréo / sarong" },
      { id: "val-tongs", label: "Tongs" },
      { id: "val-masque", label: "Masque et tuba" },
      { id: "val-lycra", label: "Lycra anti-UV" },
      { id: "val-sac-plage", label: "Sac de plage imperméable" },
      { id: "val-apres-soleil", label: "Après-soleil / aloe vera" },
    ],
  },
];

const ChecklistValiseDestination = () => {
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
      <div className="bg-gradient-sand text-foreground p-6 rounded-2xl">
        <h3 className="text-2xl font-elegant font-bold mb-1">
          🧳 Check-list valise selon la destination
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Adaptez votre valise selon le climat et le type de voyage
        </p>
        <div className="flex items-center gap-4">
          <Progress value={progress} className="flex-1 h-3" />
          <span className="text-lg font-bold whitespace-nowrap">
            {checkedCount}/{totalItems}
          </span>
        </div>
        {progress === 100 && (
          <p className="mt-3 text-sm font-semibold bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg px-3 py-2 text-center">
            🎉 Votre valise est complète !
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
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isComplete ? "bg-green-500" : "bg-gradient-sand border border-border"}`}>
                    <Icon className={`w-5 h-5 ${isComplete ? "text-white" : "text-foreground"}`} />
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

export default ChecklistValiseDestination;
