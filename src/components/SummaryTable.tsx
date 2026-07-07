import React from "react";
import { cn } from "@/lib/utils";

/**
 * Composant réutilisable pour les tableaux récapitulatifs (comparatifs, budgets, itinéraires...).
 * - Responsive (scroll horizontal sur mobile)
 * - Sémantique (caption, thead/tbody, scope)
 * - Accessible (aria-label si caption absente)
 * - Compatible SEO (structure HTML native indexable)
 */
export interface SummaryTableColumn<T = Record<string, React.ReactNode>> {
  /** Clé accédant à la valeur dans chaque ligne. */
  key: keyof T & string;
  /** Libellé de colonne affiché en en-tête. */
  header: React.ReactNode;
  /** Alignement du contenu de la colonne. */
  align?: "left" | "center" | "right";
  /** Classe optionnelle appliquée aux cellules de la colonne. */
  className?: string;
}

export interface SummaryTableProps<T = Record<string, React.ReactNode>> {
  /** Colonnes du tableau. */
  columns: SummaryTableColumn<T>[];
  /** Lignes de données. */
  rows: T[];
  /** Légende visible (recommandée pour l'accessibilité et le SEO). */
  caption?: React.ReactNode;
  /** Label ARIA si aucune caption n'est fournie. */
  ariaLabel?: string;
  /** Classe supplémentaire sur le wrapper. */
  className?: string;
  /** Active le style zébré. */
  striped?: boolean;
}

function SummaryTable<T extends Record<string, React.ReactNode>>({
  columns,
  rows,
  caption,
  ariaLabel,
  className,
  striped = true,
}: SummaryTableProps<T>) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-lg border shadow-sm", className)}>
      <table
        className="w-full text-sm text-left border-collapse"
        aria-label={caption ? undefined : ariaLabel}
      >
        {caption && (
          <caption className="p-3 text-left text-sm font-semibold text-gray-700 bg-gray-50 border-b">
            {caption}
          </caption>
        )}
        <thead className="bg-ocean/10 text-gray-800">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={cn(
                  "px-4 py-3 font-semibold uppercase text-xs tracking-wide",
                  col.align === "center" && "text-center",
                  col.align === "right" && "text-right",
                  col.className,
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr
              key={rIdx}
              className={cn(
                "border-t",
                striped && rIdx % 2 === 1 && "bg-gray-50/60",
                "hover:bg-ocean/5 transition-colors",
              )}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "px-4 py-3 align-top text-gray-700",
                    col.align === "center" && "text-center",
                    col.align === "right" && "text-right",
                    col.className,
                  )}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SummaryTable;
