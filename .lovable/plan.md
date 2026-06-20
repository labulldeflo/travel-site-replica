## Audit SEO & Plan d'optimisation Cap Sur Le Monde

Le périmètre demandé est très large (audit complet + refonte de 3 pages + 10 nouveaux articles + maillage + SEO technique). Pour livrer du travail de qualité plutôt qu'un patchwork, je propose de découper en **3 lots livrés successivement**, avec validation entre chaque.

---

### Lot 1 — Audit & Quick Wins SEO technique (immédiat)

**Audit automatisé**
- Lancement d'un scan SEO complet (`seo--trigger_scan`) sur le site publié.
- Analyse Semrush du domaine + des 4 mots-clés cibles principaux (`voyage vietnam`, `visiter hanoi`, `budget vietnam`, `tour du monde budget`) — base `fr`.
- Croisement avec données GSC fournies (position 8,6 / 334 impressions).

**Vérifications techniques**
- `public/sitemap.xml` : exhaustivité (toutes les routes de `App.tsx`), `lastmod` à jour.
- `public/robots.txt` : règles, lien sitemap.
- Canonical, Open Graph, Twitter Cards via `SEO.tsx` — vérifier que les 3 pages prioritaires (`/amerique`, `/destinations/vietnam/hanoi`, `/blog/organiser-tour-monde-budget-limite`) sont propres.
- Recherche de liens cassés internes (`rg` sur `to="` et `href="/`).
- Vérification unicité H1 et hiérarchie Hn.
- Données structurées (Article, FAQPage, BreadcrumbList) sur les pages prioritaires.

**Livrable** : rapport d'audit + corrections techniques appliquées.

---

### Lot 2 — Optimisation des 3 pages prioritaires

1. **`/amerique`** — Hub continent enrichi (intro 1000+ mots, top destinations, budget, conseils, FAQ avec schema, maillage vers toutes les pages pays/villes d'Amérique).
2. **`/destinations/vietnam/hanoi`** — Guide ville 2000+ mots : quartiers, transport, hébergements, itinéraire 3 jours, budget détaillé, FAQ.
3. **`/blog/organiser-tour-monde-budget-limite`** — Article pilier 2500+ mots avec sommaire (`AutoTableOfContents`), budget chiffré, équipement, assurance (ACS), itinéraire-type, FAQ.

---

### Lot 3 — 10 nouveaux articles + maillage

**Cluster Vietnam (5)**
- `/blog/guide-complet-vietnam-2026`
- `/blog/que-faire-a-hanoi`
- `/blog/budget-voyage-vietnam-15-jours`
- `/blog/quand-partir-au-vietnam`
- `/blog/itineraire-vietnam-10-jours`

**Cluster Préparation voyage (5)**
- `/blog/comment-planifier-un-voyage`
- `/blog/budget-voyage-methode-complete`
- `/blog/checklist-voyage-gratuite` (lead magnet PDF)
- `/blog/organiser-tour-du-monde-petit-budget` (variante long-tail vs pilier existant, canonical adapté pour éviter cannibalisation)
- `/blog/erreurs-a-eviter-preparation-voyage`

**Maillage interne** : composant `RelatedArticles` mis à jour pour relier en hub-and-spoke :
- Pilier Vietnam ↔ Hanoï ↔ Budget ↔ Itinéraire ↔ Quand partir
- Pilier Préparation ↔ Budget ↔ Checklist ↔ Erreurs ↔ Tour du monde ↔ Planificateur (`/planificateur-budget`)

**Assets** : images locales WebP générées par cluster (respect des contraintes mémoire).

**SEO** : `SEO.tsx` + JSON-LD Article/FAQPage/Breadcrumb sur chaque page, ajout au `sitemap.xml` et `articlesIndex.ts` (moteur de recherche interne).

---

### Estimation de gain

Sur base position 8,6 / 334 impressions actuelles : un cluster Vietnam optimisé peut viser 3–10K impressions/mois sous 3–6 mois (KDI Vietnam ~35-50), pour 100–300 clics/mois si on atteint top 5. Le cluster "préparation voyage" est plus compétitif (KDI 50-70) — visée long-tail prioritaire.

---

### Question

**Je lance le Lot 1 maintenant (audit + quick wins techniques) ?** Je livrerai un vrai rapport chiffré avant d'attaquer les Lots 2 et 3, qui demandent beaucoup d'écriture de contenu et seront plus longs.

Alternative : si tu veux que je foncce tout en une seule passe sans validation intermédiaire, dis-le et j'enchaîne — mais le contexte sera très long et certaines décisions éditoriales (angle, ton de chaque nouvel article) seront prises sans toi.