# Utilisation du Shortcode iframe - Option B

## 🎯 Shortcode avec URL personnalisée

### Dans une page WordPress

1. **Créer/Éditer une page WordPress**
2. **Ajouter le shortcode suivant:**

```
[react_site_iframe url="https://votre-site.lovable.app" height="1000px"]
```

### Exemples d'utilisation

#### Exemple 1: Page d'accueil
```
[react_site_iframe url="https://capsurlemonde.lovable.app"]
```

#### Exemple 2: Avec hauteur personnalisée
```
[react_site_iframe url="https://capsurlemonde.lovable.app" height="1200px"]
```

#### Exemple 3: Dans un template PHP
```php
<?php
// Dans front-page.php ou page.php
echo do_shortcode('[react_site_iframe url="https://capsurlemonde.lovable.app" height="800px"]');
?>
```

## 📋 Étapes d'installation

### 1. Ajouter le code dans functions.php
Copier le code du shortcode depuis `INTEGRATION-IFRAME-WORDPRESS.md` section 1.

### 2. Déployer votre site React
- Cliquer sur **Publish** dans Lovable
- Copier l'URL générée (ex: `https://votre-projet.lovable.app`)

### 3. Utiliser le shortcode
- Remplacer `votre-site.lovable.app` par votre vraie URL
- Ajuster la hauteur si nécessaire

### 4. Tester
- Vérifier que l'iframe s'affiche correctement
- Tester le scroll et le responsive

## ⚙️ Paramètres disponibles

| Paramètre | Valeur par défaut | Description |
|-----------|-------------------|-------------|
| `url` | `https://votre-site-lovable.lovable.app` | URL de votre site React |
| `height` | `800px` | Hauteur initiale de l'iframe |

## 🔒 Sécurité pour la production

Dans `src/App.tsx`, remplacer:
```tsx
window.parent.postMessage({ type: 'setHeight', height }, '*');
```

Par:
```tsx
window.parent.postMessage({ type: 'setHeight', height }, 'https://votre-domaine-wordpress.com');
```

Et dans le code WordPress `functions.php`, vérifier que l'URL correspond.

## 💡 Avantages de l'iframe

✅ Le site React reste hébergé sur Lovable  
✅ Mises à jour automatiques via Lovable  
✅ Pas besoin de reconstruire WordPress  
✅ Auto-resize selon le contenu  
✅ Compatible avec tous les thèmes WordPress  

## 🚀 Alternative: Domaine personnalisé

Au lieu d'une iframe, vous pouvez aussi:
1. Connecter un domaine personnalisé à Lovable
2. Utiliser WordPress uniquement pour le blog
3. Le site principal reste sur Lovable avec votre domaine
