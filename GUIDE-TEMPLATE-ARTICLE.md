# 📝 Guide d'utilisation du Template d'Article

Ce guide explique comment utiliser le template `ArticleTemplate.tsx` pour créer rapidement des articles de destinations conformes au modèle de l'article Hanoï.

## 🎯 Structure du Template

Le template `ArticleTemplate.tsx` est un composant réutilisable qui génère automatiquement :
- ✅ Section Hero avec image et métadonnées
- ✅ Introduction narrative avec lettrine
- ✅ Sections de contenu avec icônes stylisées (cyan/bleu)
- ✅ Section gastronomie avec cards en arrière-plan gris
- ✅ Widget d'affiliation Booking.com
- ✅ Conseils pratiques
- ✅ Sidebar "En Bref" avec informations clés
- ✅ Conclusion stylisée
- ✅ CTAs vers articles connexes

## 🚀 Création rapide d'un article

### Étape 1 : Préparer l'image
```typescript
// Placer l'image dans src/assets/cities/
// Exemple : src/assets/cities/tokyo.jpg
import tokyoImg from "@/assets/cities/tokyo.jpg";
```

### Étape 2 : Créer le fichier article
```typescript
// src/pages/ArticleTokyo.tsx
import ArticleTemplate from "@/components/ArticleTemplate";
import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";
import tokyoImg from "@/assets/cities/tokyo.jpg";

const ArticleTokyo = () => {
  return (
    <ArticleTemplate
      // Remplir les props (voir ci-dessous)
    />
  );
};

export default ArticleTokyo;
```

### Étape 3 : Remplir les props

#### 📸 Hero Section (obligatoire)
```typescript
heroImage={tokyoImg}
heroImageAlt="Vue panoramique de Tokyo avec le mont Fuji en arrière-plan"
title="Tokyo : entre modernité et tradition"
subtitle="La capitale nippone nous a fascinés par ses contrastes saisissants."
category="Asie"
keywords={["Japon", "Tokyo", "Culture", "Street Food", "Temples"]}
```

#### 📝 Introduction (obligatoire)
```typescript
introText="Tokyo est une ville qui ne dort jamais, où les gratte-ciel ultramodernes côtoient les temples millénaires..."
```

#### 📍 Sections de Contenu (obligatoire, 3-5 sections recommandées)
```typescript
contentSections={[
  {
    icon: MapPin,
    title: "Le quartier de Shibuya",
    content: "Description détaillée du quartier..."
  },
  {
    icon: MapPin,
    title: "Les temples historiques",
    content: "Description des temples..."
  },
  // Ajouter 1-3 sections supplémentaires
]}
```

#### 🍜 Gastronomie (obligatoire)
```typescript
gastronomyTitle="Une expérience culinaire inoubliable"
gastronomyIntro="La gastronomie tokyoïte est un art à part entière..."
gastronomyItems={[
  {
    title: "🍜 Ramen authentiques",
    description: "Des bouillons mijotés pendant des heures..."
  },
  {
    title: "🍣 Sushi au marché",
    description: "Le poisson est d'une fraîcheur incomparable..."
  },
  // Ajouter 2-4 plats supplémentaires
]}
gastronomyConclusion="Tokyo compte plus d'étoiles Michelin que Paris..."
```

#### 💡 Conseils Pratiques (obligatoire, 4-6 conseils)
```typescript
practicalTips={[
  {
    title: "💰 Budget quotidien",
    content: "Comptez environ 80-120€ par jour..."
  },
  {
    title: "🚇 Transports",
    content: "Le réseau de métro est impressionnant..."
  },
  // Ajouter 2-4 conseils supplémentaires
]}
```

#### 🎯 Conclusion (obligatoire)
```typescript
conclusionText="Tokyo est une ville qui se vit intensément. Chaque jour réserve son lot de surprises..."
```

#### 📊 Sidebar (obligatoire)
```typescript
sidebarInfos={[
  {
    icon: Calendar,
    label: "Durée recommandée",
    value: "5-7 jours",
    iconColor: "text-ocean"
  },
  {
    icon: Clock,
    label: "Meilleure période",
    value: "Mars-Avril & Oct-Nov",
    iconColor: "text-green-600"
  },
  {
    icon: DollarSign,
    label: "Budget moyen/jour",
    value: "80-120€",
    iconColor: "text-orange-600"
  },
  {
    icon: MapPin,
    label: "Incontournables",
    value: "Shibuya, Senso-ji, Shinjuku",
    iconColor: "text-purple-600"
  }
]}
```

#### 🔗 Affiliation (obligatoire)
```typescript
affiliateCity="Tokyo"
affiliateCountryCode="jp"  // Code pays à 2 lettres pour Booking.com
```

#### 🎯 Liens CTA (optionnel mais recommandé)
```typescript
relatedArticles={[
  { label: "🗻 Découvrir Kyoto", to: "/destinations/japon/kyoto" },
  { label: "🏔️ Explorer le Mont Fuji", to: "/destinations/japon/mont-fuji" }
]}
destinationLink={{
  label: "🗾 Tous nos guides Japon",
  to: "/destinations/japon"
}}
```

### Étape 4 : Ajouter la route
```typescript
// Dans App.tsx
import ArticleTokyo from "@/pages/ArticleTokyo";

// Ajouter la route
<Route path="/destinations/japon/tokyo" element={<ArticleTokyo />} />
```

## 📋 Checklist avant publication

- [ ] Image hero de qualité (1600x900px min)
- [ ] Alt text descriptif pour l'image
- [ ] 3-5 sections de contenu narratif
- [ ] 4-6 plats en section gastronomie
- [ ] 4-6 conseils pratiques
- [ ] Informations sidebar complètes
- [ ] Code pays correct pour Booking.com
- [ ] Liens CTA vers articles connexes
- [ ] Route ajoutée dans App.tsx
- [ ] Test de l'article en mode responsive

## 🎨 Icônes recommandées

Pour la sidebar, variez les couleurs :
- `text-ocean` (bleu) - Durée, Transport
- `text-green-600` (vert) - Climat, Période
- `text-orange-600` (orange) - Budget, Coût
- `text-purple-600` (violet) - Incontournables
- `text-red-600` (rouge) - Sécurité, Santé
- `text-yellow-600` (jaune) - Visa, Documents

Icônes courantes de `lucide-react` :
- `Calendar` - Durée, Date
- `Clock` - Meilleure période
- `DollarSign` - Budget
- `MapPin` - Lieux, Incontournables
- `Plane` - Transport aérien
- `Train` - Transport ferroviaire
- `Shield` - Sécurité
- `Heart` - Santé
- `FileText` - Visa, Documents

## 📝 Conseils de rédaction

### Introduction (150-200 mots)
- Commencer par une accroche sensorielle
- Décrire l'ambiance générale de la destination
- Partager une première impression marquante

### Sections de contenu (100-150 mots chacune)
- Structurer : lieu → description → expérience personnelle
- Utiliser des détails sensoriels (sons, odeurs, couleurs)
- Alterner entre informations pratiques et émotions

### Gastronomie (50-75 mots par plat)
- Nommer le plat en gras avec emoji
- Décrire les ingrédients/préparation
- Recommander un lieu spécifique si possible

### Conseils pratiques (75-100 mots chacun)
- Être concret et actionnable
- Donner des chiffres précis (prix, durées)
- Inclure des alternatives quand possible

### Conclusion (100-150 mots)
- Synthétiser l'expérience globale
- Partager une émotion personnelle
- Encourager le lecteur à visiter

## 🔄 Conversion d'articles existants

Pour convertir un article existant vers le template :

1. Ouvrir l'article actuel
2. Copier le contenu texte
3. Créer un nouveau fichier avec le template
4. Réorganiser le contenu selon la structure
5. Remplacer l'ancien fichier
6. Tester l'affichage

## 💡 Exemples complets

Consultez ces fichiers pour voir le template en action :
- `src/pages/ArticleHanoi.tsx` (modèle de référence original)
- `src/pages/ArticleTemplateExample.tsx` (exemple d'utilisation du template)

## 🆘 Besoin d'aide ?

- Le template est dans `src/components/ArticleTemplate.tsx`
- L'exemple est dans `src/pages/ArticleTemplateExample.tsx`
- Pour les images : `src/assets/cities/`
- Pour les routes : `src/App.tsx`
