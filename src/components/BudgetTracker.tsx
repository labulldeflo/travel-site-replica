import { useState } from "react";
import { Download, Plus, Trash2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

interface BudgetItem {
  id: string;
  categorie: string;
  description: string;
  montantPrevu: number;
  montantReel: number;
  date: string;
}

const BudgetTracker = () => {
  const [items, setItems] = useState<BudgetItem[]>([
    {
      id: "1",
      categorie: "Transport",
      description: "Vol Paris-Bangkok",
      montantPrevu: 450,
      montantReel: 0,
      date: new Date().toISOString().split("T")[0],
    },
    {
      id: "2",
      categorie: "Hébergement",
      description: "Hôtel Bangkok (3 nuits)",
      montantPrevu: 120,
      montantReel: 0,
      date: new Date().toISOString().split("T")[0],
    },
  ]);

  const [newItem, setNewItem] = useState<Partial<BudgetItem>>({
    categorie: "",
    description: "",
    montantPrevu: 0,
    montantReel: 0,
    date: new Date().toISOString().split("T")[0],
  });

  const [zapierWebhook, setZapierWebhook] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addItem = () => {
    if (!newItem.categorie || !newItem.description) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    const item: BudgetItem = {
      id: Date.now().toString(),
      categorie: newItem.categorie || "",
      description: newItem.description || "",
      montantPrevu: newItem.montantPrevu || 0,
      montantReel: newItem.montantReel || 0,
      date: newItem.date || new Date().toISOString().split("T")[0],
    };

    setItems([...items, item]);
    setNewItem({
      categorie: "",
      description: "",
      montantPrevu: 0,
      montantReel: 0,
      date: new Date().toISOString().split("T")[0],
    });
    toast.success("Dépense ajoutée");
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
    toast.success("Dépense supprimée");
  };

  const updateItem = (id: string, field: keyof BudgetItem, value: string | number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const exportToCSV = () => {
    const headers = ["Catégorie", "Description", "Montant Prévu", "Montant Réel", "Date", "Écart"];
    const rows = items.map((item) => [
      item.categorie,
      item.description,
      item.montantPrevu,
      item.montantReel,
      item.date,
      item.montantReel - item.montantPrevu,
    ]);

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `budget-voyage-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();

    toast.success("Fichier CSV téléchargé");
  };

  const sendToZapier = async () => {
    if (!zapierWebhook) {
      toast.error("Veuillez entrer votre URL webhook Zapier");
      return;
    }

    setIsLoading(true);

    try {
      const totalPrevu = items.reduce((sum, item) => sum + item.montantPrevu, 0);
      const totalReel = items.reduce((sum, item) => sum + item.montantReel, 0);

      await fetch(zapierWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          items: items,
          totaux: {
            prevu: totalPrevu,
            reel: totalReel,
            ecart: totalReel - totalPrevu,
          },
        }),
      });

      toast.success("Données envoyées à Google Sheets", {
        description: "Vérifiez votre feuille de calcul",
      });
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Erreur lors de l'envoi vers Zapier");
    } finally {
      setIsLoading(false);
    }
  };

  const totalPrevu = items.reduce((sum, item) => sum + item.montantPrevu, 0);
  const totalReel = items.reduce((sum, item) => sum + item.montantReel, 0);
  const ecart = totalReel - totalPrevu;

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-4">Tableau de Suivi Budget</h3>

        {/* Zapier Integration */}
        <div className="mb-6 p-4 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-2 text-sm">Export automatique vers Google Sheets</h4>
          <div className="flex gap-2">
            <Input
              placeholder="Collez votre URL webhook Zapier ici"
              value={zapierWebhook}
              onChange={(e) => setZapierWebhook(e.target.value)}
              className="flex-1"
            />
            <Button onClick={sendToZapier} disabled={isLoading} className="gap-2">
              <Send className="w-4 h-4" />
              {isLoading ? "Envoi..." : "Envoyer"}
            </Button>
          </div>

          {/* C'est cette ligne qui est cassée dans votre code */}
          <p className="text-xs text-muted-foreground mt-2">
            Créez un Zap avec un trigger "Catch Hook" pour recevoir vos données dans Google Sheets
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <div className="text-sm text-muted-foreground">Budget Prévu</div>
            <div className="text-2xl font-bold text-foreground">{totalPrevu}€</div>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <div className="text-sm text-muted-foreground">Dépensé</div>
            <div className="text-2xl font-bold text-foreground">{totalReel}€</div>
          </div>
          <div
            className={`p-4 rounded-lg ${ecart > 0 ? "bg-red-50 dark:bg-red-950" : "bg-green-50 dark:bg-green-950"}`}
          >
            <div className="text-sm text-muted-foreground">Écart</div>
            <div className="text-2xl font-bold text-foreground">
              {ecart > 0 ? "+" : ""}
              {ecart}€
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Catégorie</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Prévu</TableHead>
              <TableHead>Réel</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Écart</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Input
                    value={item.categorie}
                    onChange={(e) => updateItem(item.id, "categorie", e.target.value)}
                    className="min-w-[120px]"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={item.description}
                    onChange={(e) => updateItem(item.id, "description", e.target.value)}
                    className="min-w-[200px]"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={item.montantPrevu}
                    onChange={(e) => updateItem(item.id, "montantPrevu", parseFloat(e.target.value) || 0)}
                    className="w-24"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={item.montantReel}
                    onChange={(e) => updateItem(item.id, "montantReel", parseFloat(e.target.value) || 0)}
                    className="w-24"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="date"
                    value={item.date}
                    onChange={(e) => updateItem(item.id, "date", e.target.value)}
                    className="w-36"
                  />
                </TableCell>
                <TableCell className={item.montantReel - item.montantPrevu > 0 ? "text-red-500" : "text-green-500"}>
                  {item.montantReel - item.montantPrevu > 0 ? "+" : ""}
                  {item.montantReel - item.montantPrevu}€
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={() => deleteItem(item.id)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {/* Add New Row */}
            <TableRow className="bg-muted/20">
              <TableCell>
                <Input
                  placeholder="Catégorie"
                  value={newItem.categorie}
                  onChange={(e) => setNewItem({ ...newItem, categorie: e.target.value })}
                />
              </TableCell>
              <TableCell>
                <Input
                  placeholder="Description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  placeholder="0"
                  value={newItem.montantPrevu || ""}
                  onChange={(e) => setNewItem({ ...newItem, montantPrevu: parseFloat(e.target.value) || 0 })}
                  className="w-24"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  placeholder="0"
                  value={newItem.montantReel || ""}
                  onChange={(e) => setNewItem({ ...newItem, montantReel: parseFloat(e.target.value) || 0 })}
                  className="w-24"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="date"
                  value={newItem.date}
                  onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
                  className="w-36"
                />
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <Button onClick={addItem} size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Ajouter
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Export Button */}
      <div className="flex justify-end">
        <Button onClick={exportToCSV} variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Exporter en CSV
        </Button>
      </div>
    </Card>
  );
};

export default BudgetTracker;
