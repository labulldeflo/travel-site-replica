import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ExternalLink, Printer, Download, CheckSquare, Shield } from "lucide-react";
import { AFFILIATE_LINKS } from "@/lib/affiliateData";

interface ChecklistItem {
  name: string;
  affiliateLabel: string;
  affiliateUrl: string;
}

interface ChecklistCategory {
  title: string;
  items: ChecklistItem[];
}

const categories: ChecklistCategory[] = [
  {
    title: "🎒 Bagagerie",
    items: [
      { name: "Sac à dos 40-50L", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("sac a dos voyage 40L cabine") },
      { name: "Cubes de rangement (lot de 4)", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("cubes rangement voyage compression") },
      { name: "Sac à dos pliable jour (20L)", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("sac à dos pliable 20L voyage") },
      { name: "Cadenas TSA", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("cadenas TSA voyage") },
    ],
  },
  {
    title: "📱 High-tech",
    items: [
      { name: "Adaptateur universel USB-C", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("adaptateur universel voyage USB-C") },
      { name: "Batterie externe 20 000 mAh", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("batterie externe 20000mAh voyage") },
      { name: "Câble multi-embouts", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("cable multi embouts USB-C") },
      { name: "Écouteurs à réduction de bruit", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("écouteurs réduction bruit voyage") },
    ],
  },
  {
    title: "🧴 Hygiène & Confort",
    items: [
      { name: "Trousse de toilette suspendue", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("trousse toilette voyage suspendue") },
      { name: "Serviette microfibre", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("serviette microfibre voyage") },
      { name: "Oreiller de voyage compressible", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("oreiller voyage mousse mémoire") },
      { name: "Bouchons d'oreilles", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("bouchons oreilles voyage sommeil") },
      { name: "Trousse à pharmacie de base", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("trousse pharmacie voyage") },
    ],
  },
  {
    title: "👕 Vêtements & Chaussures",
    items: [
      { name: "Chaussures trail légères", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("chaussures trail légères") },
      { name: "Sandales de marche", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("sandales marche voyage") },
      { name: "T-shirts mérinos (x2)", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("t-shirt mérinos voyage") },
      { name: "Veste coupe-vent compressible", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("veste coupe vent compressible voyage") },
      { name: "Short de bain polyvalent", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("short bain séchage rapide voyage") },
    ],
  },
  {
    title: "📄 Documents & Sécurité",
    items: [
      { name: "Passeport (validité 6 mois+)", affiliateLabel: "", affiliateUrl: "" },
      { name: "Photocopies documents (cloud + papier)", affiliateLabel: "", affiliateUrl: "" },
      { name: "Assurance voyage", affiliateLabel: "Comparer", affiliateUrl: "/guides/securice" },
      { name: "Pochette anti-RFID", affiliateLabel: "Voir chez Amazon", affiliateUrl: AFFILIATE_LINKS.amazonSearch("pochette anti RFID voyage") },
    ],
  },
  {
    title: "🚐 Road Trip & Camping (France / Europe)",
    items: [
      { name: "Tente 2 secondes (2-3 places)", affiliateLabel: "Voir chez Decathlon", affiliateUrl: AFFILIATE_LINKS.decathlonSearch("tente 2 seconds 3 places") },
      { name: "Sac de couchage 10°C", affiliateLabel: "Voir chez Decathlon", affiliateUrl: AFFILIATE_LINKS.decathlonSearch("sac de couchage 10 degres") },
      { name: "Matelas auto-gonflant", affiliateLabel: "Voir chez Decathlon", affiliateUrl: AFFILIATE_LINKS.decathlonSearch("matelas autogonflant camping") },
      { name: "Réchaud à gaz compact", affiliateLabel: "Voir chez Decathlon", affiliateUrl: AFFILIATE_LINKS.decathlonSearch("rechaud gaz camping compact") },
      { name: "Glacière électrique 12V", affiliateLabel: "Voir chez Decathlon", affiliateUrl: AFFILIATE_LINKS.decathlonSearch("glaciere electrique 12v") },
      { name: "Lampe frontale rechargeable", affiliateLabel: "Voir chez Decathlon", affiliateUrl: AFFILIATE_LINKS.decathlonSearch("lampe frontale rechargeable") },
      { name: "Chaussures de randonnée légères", affiliateLabel: "Voir chez Decathlon", affiliateUrl: AFFILIATE_LINKS.decathlonSearch("chaussures randonnee legeres") },
    ],
  },
];

const ChecklistEquipement = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const printRef = useRef<HTMLDivElement>(null);

  const totalItems = categories.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSavePdf = () => {
    // jsPDF is already in dependencies
    import("jspdf").then(({ default: jsPDF }) => {
      const doc = new jsPDF();
      let y = 20;

      doc.setFontSize(18);
      doc.text("Ma Check-list Équipement Voyage", 15, y);
      y += 12;

      categories.forEach((cat) => {
        if (y > 260) { doc.addPage(); y = 20; }
        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.text(cat.title.replace(/[\u{1F000}-\u{1FFFF}]/gu, "").trim(), 15, y);
        y += 8;

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        cat.items.forEach((item) => {
          if (y > 275) { doc.addPage(); y = 20; }
          const isChecked = checked[`${cat.title}-${item.name}`];
          const marker = isChecked ? "[x]" : "[  ]";
          doc.text(`${marker}  ${item.name}`, 20, y);
          y += 6;
        });
        y += 4;
      });

      doc.save("checklist-equipement-voyage.pdf");
    });
  };

  return (
    <section className="py-16 bg-muted/30" id="checklist">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <CheckSquare className="w-6 h-6 text-ocean" />
          </div>
          <h2 className="text-2xl md:text-3xl font-elegant font-bold text-foreground mb-2">
            Ma Check-list Équipement
          </h2>
          <p className="text-sm text-muted-foreground">
            Cochez au fur et à mesure — imprimez ou sauvegardez en PDF avant de partir.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
            <span>{checkedCount} / {totalItems} articles cochés</span>
            <span className="font-semibold text-ocean">{progress}%</span>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-ocean rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Checklist */}
        <div ref={printRef} className="space-y-6">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-background rounded-xl border border-border p-5">
              <h3 className="text-base font-bold text-foreground mb-3">{cat.title}</h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => {
                  const key = `${cat.title}-${item.name}`;
                  const isChecked = !!checked[key];
                  return (
                    <li key={key} className="flex items-center gap-3 group">
                      <Checkbox
                        id={key}
                        checked={isChecked}
                        onCheckedChange={() => toggle(key)}
                        className="shrink-0"
                      />
                      <label
                        htmlFor={key}
                        className={`text-sm cursor-pointer select-none transition-colors flex-1 ${
                          isChecked ? "line-through text-muted-foreground/60" : "text-foreground"
                        }`}
                      >
                        {item.name}
                      </label>
                      {item.affiliateUrl && (
                        <a
                          href={item.affiliateUrl}
                          target={item.affiliateUrl.startsWith("http") ? "_blank" : undefined}
                          rel={item.affiliateUrl.startsWith("http") ? "sponsored noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1 text-[11px] text-ocean/70 hover:text-ocean transition-colors shrink-0"
                        >
                          {item.affiliateLabel}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center print:hidden">
          <Button
            variant="outline"
            onClick={handlePrint}
            className="gap-2"
          >
            <Printer className="w-4 h-4" />
            Imprimer la check-list
          </Button>
          <Button
            onClick={handleSavePdf}
            className="gap-2 bg-ocean hover:bg-ocean/90"
          >
            <Download className="w-4 h-4" />
            Sauvegarder en PDF
          </Button>
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-4 italic print:hidden">
          Liens affiliés · Sans surcoût pour vous
        </p>

        {/* CTA Assurance final */}
        <div className="mt-10 p-6 rounded-xl border-2 border-ocean/30 bg-ocean/5 print:hidden">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-ocean" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-foreground mb-1">
                Vous avez tout votre matériel ?
              </h3>
              <p className="text-sm text-muted-foreground">
                N'oubliez pas votre assurance voyage — c'est l'équipement le plus important.
              </p>
            </div>
            <Button asChild className="bg-ocean hover:bg-ocean/90 shrink-0">
              <Link to="/guides/securite" onClick={() => window.scrollTo(0, 0)}>
                Voir mon comparatif
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistEquipement;
