import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Globe, CreditCard, Shield, Plane, Heart } from "lucide-react";
import { useState } from "react";

const DocumentsChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const categories = [
    {
      titre: "Documents d'identité",
      icon: FileText,
      items: [
        { id: "passeport", label: "Passeport valide 6 mois après retour", priorite: "Obligatoire" },
        { id: "photocopies", label: "Photocopies du passeport (x3)", priorite: "Essentiel" },
        { id: "photos", label: "Photos d'identité (x10)", priorite: "Recommandé" },
        { id: "cni", label: "Carte d'identité nationale", priorite: "Recommandé" }
      ]
    },
    {
      titre: "Visas et autorisations",
      icon: Globe,
      items: [
        { id: "visa-inde", label: "Visa Inde (e-Visa)", priorite: "Selon pays" },
        { id: "visa-vietnam", label: "Visa Vietnam", priorite: "Selon pays" },
        { id: "visa-usa", label: "ESTA USA", priorite: "Selon pays" },
        { id: "visa-australie", label: "eVisitor Australie", priorite: "Selon pays" },
        { id: "liste-visas", label: "Liste complète des visas nécessaires", priorite: "Essentiel" }
      ]
    },
    {
      titre: "Santé et assurance",
      icon: Shield,
      items: [
        { id: "assurance", label: "Assurance voyage complète", priorite: "Obligatoire" },
        { id: "carnet-vaccin", label: "Carnet de vaccination international", priorite: "Obligatoire" },
        { id: "ordonnances", label: "Ordonnances traduites en anglais", priorite: "Recommandé" },
        { id: "carte-vitale", label: "Carte Vitale", priorite: "Essentiel" },
        { id: "carte-europeenne", label: "Carte Européenne d'Assurance Maladie", priorite: "Essentiel" }
      ]
    },
    {
      titre: "Finances",
      icon: CreditCard,
      items: [
        { id: "cb-principale", label: "Carte bancaire principale (Visa/Mastercard)", priorite: "Obligatoire" },
        { id: "cb-secours", label: "Carte bancaire de secours", priorite: "Essentiel" },
        { id: "attestation-banque", label: "Attestation bancaire", priorite: "Recommandé" },
        { id: "numeros-opposition", label: "Numéros d'opposition des cartes", priorite: "Essentiel" }
      ]
    },
    {
      titre: "Transport",
      icon: Plane,
      items: [
        { id: "billets-avion", label: "Billets d'avion (version papier)", priorite: "Essentiel" },
        { id: "permis-conduire", label: "Permis de conduire international", priorite: "Recommandé" },
        { id: "confirmations", label: "Confirmations de réservations", priorite: "Recommandé" }
      ]
    },
    {
      titre: "Contacts d'urgence",
      icon: Heart,
      items: [
        { id: "contacts-famille", label: "Liste contacts famille", priorite: "Essentiel" },
        { id: "ambassades", label: "Coordonnées ambassades", priorite: "Essentiel" },
        { id: "contacts-assurance", label: "Contacts assurance voyage", priorite: "Obligatoire" },
        { id: "medecin", label: "Coordonnées médecin traitant", priorite: "Recommandé" }
      ]
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

  const handleCheckChange = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getTotalItems = () => {
    return categories.reduce((acc, cat) => acc + cat.items.length, 0);
  };

  const getCheckedCount = () => {
    return Object.values(checkedItems).filter(Boolean).length;
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-ocean text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Checklist Documents</h3>
        <p className="text-sm opacity-90 mb-4">
          Assurez-vous d'avoir tous les documents nécessaires avant votre départ
        </p>
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold">{getCheckedCount()}/{getTotalItems()}</div>
          <div className="text-sm">documents préparés</div>
        </div>
      </div>

      <div className="space-y-6">
        {categories.map((categorie, catIndex) => {
          const IconComponent = categorie.icon;
          return (
            <Card key={catIndex} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-sunset rounded-full flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {categorie.titre}
                </h4>
              </div>

              <div className="space-y-3">
                {categorie.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <Checkbox
                      id={item.id}
                      checked={checkedItems[item.id] || false}
                      onCheckedChange={() => handleCheckChange(item.id)}
                    />
                    <label
                      htmlFor={item.id}
                      className="flex-1 flex items-center justify-between cursor-pointer"
                    >
                      <span className={`text-sm ${checkedItems[item.id] ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {item.label}
                      </span>
                      <Badge className={`${getPrioriteColor(item.priorite)} text-xs`}>
                        {item.priorite}
                      </Badge>
                    </label>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 bg-gradient-sand">
        <h4 className="font-semibold text-foreground mb-3">💡 Conseils pratiques</h4>
        <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
          <li>Numérisez tous vos documents et stockez-les dans le cloud</li>
          <li>Conservez des photocopies séparées de vos originaux</li>
          <li>Envoyez-vous les documents par email</li>
          <li>Préparez un dossier physique avec tous les documents papier</li>
          <li>Vérifiez les exigences spécifiques de chaque pays 3 mois avant</li>
        </ul>
      </Card>
    </div>
  );
};

export default DocumentsChecklist;
