# Stratégie SEO Cap sur le Monde — Objectif 1000+ visiteurs/mois

## Étape 1 — Analyse synthétique (pages existantes clés)

Basé sur l'inventaire actuel (articles index, GSC précédent, pages déjà optimisées les tours passés).

| Page | Trafic potentiel | Concurrence | Intention | Affiliation | Priorité |
|---|---|---|---|---|---|
| `/destinations/vietnam` | Élevé | Moyenne | Info + plan | ★★★ (assurance, hôtels) | **Haute** — déjà optimisé, à maintenir |
| `/blog/itineraire-vietnam-15-jours` | Élevé | Moyenne | Plan voyage | ★★★ | **Haute** — créé tour précédent |
| `/blog/quand-partir-vietnam` | Élevé | Faible | Info | ★ | **Haute** — à enrichir |
| `/blog/budget-voyage-vietnam` | Moyen | Faible | Info + plan | ★★ | **Haute** — à enrichir |
| `/destinations/vietnam/hanoi` | Moyen | Moyenne | Info | ★★ | **Haute** — déjà 3200 mots |
| `/destinations/vietnam/ho-chi-minh` | Moyen | Moyenne | Info | ★★ | **Moyenne** — à enrichir |
| `/equipement-voyage` | Élevé | **Forte** | Achat | ★★★★ | **Haute** — pilier money page |
| `/guides/securite` (assurance) | Moyen | Forte | Achat | ★★★★ | **Haute** — déjà optimisé |
| `/blog/organiser-tour-monde-budget-limite` | Moyen | Moyenne | Info | ★★ | **Moyenne** — déjà refait |
| Pages destinations secondaires (Bali, Japon, Thaïlande villes) | Moyen | Variable | Info | ★★ | **Moyenne** — conserver |
| Pages pays sans articles (Pérou, Kenya, Brésil…) | Faible court terme | Forte | Info | ★ | **Faible** — laisser dormir |

**Règle** : aucune page ayant déjà des impressions GSC ne sera supprimée.

## Étape 2 — Clusters retenus

### Cluster 1 — Vietnam (Priorité 1)
État actuel : 9 pages publiées (guide complet, budget, itinéraires 10/15j, quand partir, Hanoi, HCMV, Hoi An, Halong).
**Manquant** : Temples, Plages, Formalités/Visa, Conseils pratiques.

### Cluster 2 — Préparer son voyage (Priorité 2)
Existant : `/guides/planification`, `/equipement-voyage`, `/guides/securite`, checklist documents, `/blog/organiser-tour-monde-budget-limite`.
**Manquant** : "Erreurs à éviter", "Applications indispensables", "Voyager léger", "Budget voyage" générique.

### Cluster 3 — Équipement (Priorité 3, money pages)
Existant : `/equipement-voyage` (pilier), checklist interactive.
**Manquant** : tous les comparatifs produits ("meilleur X").

## Étape 3 — Maillage interne
- Chaque nouvelle page = min. **5 liens internes** sortants vers cluster + pilier
- Pilier de chaque cluster reçoit liens retour systématiques
- Composant `RelatedArticles` automatique déjà en place via `articlesIndex.ts` → chaque création **doit être ajoutée à l'index** avec la bonne `category` pour activer le maillage auto

## Étape 4 — Standards SEO (appliqués via `ArticleTemplate` + `SEO.tsx`)
H1 unique, Meta optimisée, FAQ JSON-LD, Breadcrumb JSON-LD, Article schema, TOC auto, alt sur toutes images, rel="sponsored" sur affiliés. Déjà industrialisé.

## Étape 5 — TOP 5 pages à créer EN PREMIER

Sélectionnées sur la combinaison **volume mensuel FR × faisabilité × revenu affiliation**.

| # | Page | URL cible | Volume FR estimé | Affiliation | Pourquoi en premier |
|---|---|---|---|---|---|
| 1 | **Meilleur sac à dos de voyage 2026** | `/equipement/meilleur-sac-a-dos-voyage` | ~3 600/mo | Amazon ★★★★ | Money page, intention achat pure, CTR Amazon élevé |
| 2 | **Meilleure valise cabine 2026** | `/equipement/meilleure-valise-cabine` | ~5 400/mo | Amazon ★★★★ | Volume max du cluster équipement |
| 3 | **Formalités et visa Vietnam 2026** | `/blog/visa-vietnam-formalites` | ~2 900/mo | ACS/Chapka ★★★ | Cluster Vietnam, intention transactionnelle (visa e-visa), affiliation assurance naturelle |
| 4 | **Applications indispensables voyage 2026** | `/blog/applications-indispensables-voyage` | ~1 600/mo | Holafly, Revolut, Booking ★★★ | Cluster Préparer, multi-affiliés, peu concurrentiel |
| 5 | **Erreurs à éviter en voyage** | `/blog/erreurs-a-eviter-voyage` | ~1 200/mo | Assurance + équipement ★★★ | Cluster Préparer, fort partage social, redirige vers money pages |

### Structure type de chaque page
- 1 800–2 500 mots
- Tableau comparatif (équipement) ou tableau récap (guides)
- 8 questions FAQ avec schema
- Min. 5 liens internes vers le cluster correspondant + pilier
- CTA affiliation contextuels (composants existants : `ComparisonTable`, `AffiliationHotel`, blocs Amazon de `productData.ts`)
- Inscription dans `articlesIndex.ts` + `sitemap.xml` + route `App.tsx`

### Ce que je NE fais PAS dans ce premier batch
- Pas de création des 5+ autres pages équipement (adaptateur, batterie, gourde, coussin, trousse, organisateurs, antivol, accessoires)
- Pas des pages Vietnam Temples/Plages/Conseils (nécessitent recherche photo locale)
- Pas de "Budget voyage générique" / "Voyager léger" (en attente validation)

## Livrable de ce batch
5 pages publiées, indexées (sitemap + articlesIndex), maillées entre elles et vers leurs piliers, avec FAQ schema et CTA affiliation.

**→ Après validation des 5, je propose le batch suivant (5 pages équipement money pages).**
