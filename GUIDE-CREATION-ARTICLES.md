# 📝 Guide de Création d'Articles Villes/Régions

Ce guide explique comment créer un nouvel article de ville ou région en utilisant le template `ArticleTemplate.tsx`.

## 🎯 Étapes de Création

### 1. Copier le Template
```bash
# Copier le fichier template
cp src/pages/ArticleTemplate.tsx src/pages/ArticleNomVille.tsx
```

### 2. Préparer l'Image
- Ajouter l'image dans `src/assets/cities/nom-ville.jpg`
- Dimensions recommandées : 1920x1080px minimum
- Format : JPG ou WebP pour de meilleures performances

### 3. Personnaliser les Métadonnées (lignes 13-22)

```typescript
const articleMetadata = {
  author: "Cap sur le Monde",
  date: "22 Mai 2025",
  readingTime: "7 min",
  category: "Europe", // Options: Europe, Asie du Sud-Est, Afrique, Amérique
  keywords: ["France", "Paris", "Tour Eiffel", "Culture", "Gastronomie"],
};
```

### 4. Modifier le Hero Section (lignes 33-74)

**À personnaliser :**
- L'image de fond (importer votre image)
- Le titre H1 : Court et accrocheur
- Le sous-titre : 1-2 phrases descriptives

```typescript
// Importer l'image en haut du fichier
import parisImg from "@/assets/cities/paris.jpg";

// Puis dans le style du header
style={{ backgroundImage: `url(${parisImg})` }}

// Titre
<h1>Paris : La Ville Lumière</h1>
<p>Entre monuments emblématiques et charme bohème...</p>
```

### 5. Structurer le Contenu Principal

#### Introduction (2-3 paragraphes)
- Paragraphe en italique : Phrase d'accroche émotionnelle
- Paragraphe normal : Contexte et présentation

#### Sections à inclure (recommandé)

**Section 1 - Quartiers/Lieux emblématiques**
```typescript
<section className="mb-12">
  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean border-b pb-2">
    <MapPin className="h-6 w-6 inline-block mr-2" />
    Les quartiers emblématiques
  </h2>
  <p>Description des quartiers...</p>
</section>
```

**Section 2 - Culture/Histoire**
- Monuments historiques
- Sites culturels
- Anecdotes locales

**Section 3 - Gastronomie**
```typescript
<section className="mb-12">
  <h2 className="text-3xl font-elegant font-bold mb-6 text-ocean border-b pb-2">
    <Coffee className="h-6 w-6 inline-block mr-2" />
    Gastronomie & Spécialités
  </h2>
  
  <div className="grid md:grid-cols-2 gap-4 mb-6">
    <div className="bg-gray-100 p-4 rounded-lg shadow-inner border border-gray-200">
      <h4 className="font-bold mb-1 text-lg text-sunset">🥐 Croissant</h4>
      <p className="text-sm text-gray-600">Le petit-déjeuner parisien par excellence...</p>
    </div>
    {/* Répéter pour 3-4 plats */}
  </div>
</section>
```

**Section 4 - Conseils Pratiques**
- Budget quotidien
- Transports
- Astuces locales

**Section 5 - Conclusion "Pourquoi on a aimé"**
- Ton personnel et émotionnel
- Ce qui rend le lieu unique
- Phrase de fin mémorable

### 6. Personnaliser la Sidebar

```typescript
<ArticleMetaItem
  Icon={MapPin}
  label="Durée conseillée"
  value="3-4 jours"
  iconColor="text-ocean"
/>
<ArticleMetaItem
  Icon={Coffee}
  label="À goûter absolument"
  value="Croissant & Café"
  iconColor="text-sunset"
/>
<ArticleMetaItem
  Icon={DollarSign}
  label="Budget journalier"
  value="60-120€"
  iconColor="text-ocean"
/>
<ArticleMetaItem
  Icon={Clock}
  label="Meilleure période"
  value="Avril à Octobre"
  iconColor="text-sunset"
/>
```

**Liens CTA :**
```typescript
// Lien retour vers la page pays
<Link to="/destinations/france">Voir toutes les destinations</Link>

// Optionnel : Guide téléchargeable
<Link to="/guide-gratuit">Télécharger le guide 📖</Link>
```

### 7. Ajouter au Routing (App.tsx)

```typescript
// 1. En haut du fichier, dans la section lazy loading
const Articles = {
  // ... articles existants
  ArticleParis: lazy(() => import("./pages/ArticleParis")),
};

// 2. Dans AppRoutes, ajouter la route
<Route path="/article/paris" element={<Articles.ArticleParis />} />
```

### 8. Lier depuis la Page Pays

Dans la page pays (ex: `France.tsx`), ajouter le lien :

```typescript
const regions = [
  {
    name: 'Paris',
    link: '/article/paris', // ← Lien vers l'article
    // ... autres propriétés
  }
];
```

## ✅ Checklist Avant Publication

- [ ] Image ajoutée et importée
- [ ] Métadonnées complétées (author, date, category, keywords)
- [ ] Titre H1 unique et descriptif
- [ ] 3-5 sections de contenu
- [ ] Section gastronomie avec 4 plats minimum
- [ ] Budget et conseils pratiques
- [ ] Conclusion "Pourquoi on a aimé"
- [ ] Sidebar avec 4 ArticleMetaItem
- [ ] Liens CTA fonctionnels
- [ ] Route ajoutée dans App.tsx
- [ ] Lien depuis la page pays

## 🎨 Éléments de Style Disponibles

### Encadrés Conseil
```typescript
// Conseil (bleu)
<div className="bg-ocean/10 border-l-4 border-ocean p-4 rounded-r-lg shadow-sm">
  <p className="font-semibold mb-1 text-ocean">💡 Conseil :</p>
  <p className="text-gray-700">Votre conseil...</p>
</div>

// Coup de cœur (orange)
<div className="bg-sunset/10 border-l-4 border-sunset p-4 rounded-r-lg shadow-sm">
  <p className="font-semibold mb-1 text-sunset">❤️ Coup de cœur :</p>
  <p className="text-gray-700">Votre recommandation...</p>
</div>
```

### Icônes Lucide Utiles
```typescript
import { 
  MapPin,      // Lieux
  Coffee,      // Gastronomie
  DollarSign,  // Budget
  Clock,       // Temps/Durée
  Camera,      // Photo
  Users,       // Groupe/Famille
  Home,        // Hébergement
  Plane,       // Voyage
  Utensils,    // Restaurant
  Building,    // Architecture
} from "lucide-react";
```

## 📊 Structure Idéale

```
ArticleNomVille.tsx
├── Hero Section (image + titre)
├── Introduction (2-3 paragraphes)
├── Section 1: Quartiers/Lieux (500-800 mots)
├── Section 2: Culture/Histoire (400-600 mots)
├── Section 3: Gastronomie (300-500 mots + 4 plats)
├── Section 4: Conseils pratiques (200-400 mots)
├── Section 5: Conclusion (150-250 mots)
└── Sidebar
    ├── 4 MetaItems
    ├── CTA Pays
    └── CTA Guide (optionnel)
```

**Longueur totale recommandée :** 2000-3000 mots

## 🚀 Exemple Complet

Voir `src/pages/ArticleHanoi.tsx` pour un exemple complet et fonctionnel.

## 💡 Conseils d'Écriture

1. **Ton personnel** : Utilisez "nous", "on" pour créer de la proximité
2. **Détails sensoriels** : Odeurs, sons, couleurs
3. **Anecdotes** : Racontez des moments vécus
4. **Conseils pratiques** : Horaires, prix, adresses précises
5. **Authenticité** : Évitez le langage trop promotionnel
6. **Lisibilité** : Paragraphes courts, phrases simples
7. **Appel à l'action** : Incitez à découvrir, explorer

## ❓ Besoin d'Aide ?

Consultez les articles existants pour vous inspirer :
- `src/pages/ArticleHanoi.tsx` (Asie)
- `src/pages/ArticleMadrid.tsx` (Europe)
- `src/pages/ArticleProvence.tsx` (Région)
