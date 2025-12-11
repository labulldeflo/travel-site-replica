# Thème WordPress CapSurLeMonde

Thème WordPress complet pour le blog voyage CapSurLeMonde avec support des custom post types (Destinations, Guides, Tests Matériel).

## Structure du thème

```
wordpress-templates/
├── style.css                    # En-tête du thème WordPress
├── functions.php                # Fonctions, CPT et ACF fields
├── header.php                   # En-tête avec navigation
├── footer.php                   # Pied de page avec liens et réseaux sociaux
├── index.php                    # Template par défaut (liste d'articles)
├── front-page.php              # Page d'accueil avec sections
├── single.php                   # Article simple
├── page.php                     # Page simple
├── 404.php                      # Page d'erreur
├── searchform.php              # Formulaire de recherche
├── single-destination.php      # Template destination
├── single-guide.php            # Template guide
├── single-test.php             # Template test matériel
├── archive-destination.php     # Archive destinations
├── archive-guide.php           # Archive guides
└── archive-test.php            # Archive tests
```

## Installation

### 1. Prérequis
- WordPress 6.0+
- PHP 7.4+
- MySQL 5.7+ ou MariaDB 10.3+
- HTTPS (SSL Certificate)

**Plugins requis :**
- Advanced Custom Fields (ACF) - Gratuit ou Pro
- WP All Import - Pour importer le contenu
- Rank Math SEO - Pour l'optimisation SEO

**Plugins recommandés :**
- WP Rocket ou W3 Total Cache - Cache et performance
- Smush ou ShortPixel - Optimisation d'images
- Wordfence Security - Sécurité
- UpdraftPlus - Sauvegardes automatiques
- ThirstyAffiliates - Gestion liens affiliés

### 2. Installation du thème

1. **Copier les fichiers du thème**
   ```bash
   # Via FTP/SFTP sur Hostinger
   /wp-content/themes/capsurlemonde/
   ```

2. **Upload du CSS design system**
   ```bash
   # Copier design-system.css dans :
   /wp-content/themes/capsurlemonde/css/design-system.css
   ```

3. **Activer le thème**
   - WordPress Admin → Apparence → Thèmes
   - Activer "CapSurLeMonde"

### 3. Configuration des menus

1. Créer deux menus :
   - **Menu Principal** (Header)
     - Accueil
     - Destinations
     - Guides
     - Tests Matériel
     - À Propos
   
   - **Menu Footer**
     - Mentions Légales
     - Politique de Confidentialité
     - CGV
     - Contact

2. Assigner les menus :
   - WordPress Admin → Apparence → Menus
   - Assigner "Menu Principal" → "Main Menu"
   - Assigner "Menu Footer" → "Footer Menu"

### 4. Custom Post Types créés

Le thème crée automatiquement 3 CPT :

#### Destinations
- Slug: `/destinations/`
- Champs ACF:
  - `duration` (texte) - Durée du voyage
  - `travelers` (texte) - Nombre de voyageurs
  - `budget` (texte) - Budget estimé
  - `highlights` (textarea) - Points forts
  - `location` (texte) - Localisation

#### Guides
- Slug: `/guides/`
- Pas de champs custom spécifiques

#### Tests Matériel
- Slug: `/tests/`
- Champs ACF:
  - `rating` (nombre) - Note sur 5
  - `price` (texte) - Prix du produit
  - `affiliate_link` (url) - Lien affilié

### 5. Import du contenu

1. **Importer via WP All Import**
   ```
   Fichier : wordpress-import.csv
   ```

2. **Mapper les champs**
   - Titre → post_title
   - Contenu → post_content
   - Type → post_type
   - Champs custom → custom_field_*

3. **Upload des images**
   ```
   Référence : medias-images.json
   Destination : /wp-content/uploads/
   ```

### 6. Configuration SEO (Rank Math)

1. **Titres et Meta**
   - Accueil : "CapSurLeMonde — Prenez-en plein les mirettes : guides et destinations pour voyageurs"
   - Archive Destinations : "%title% | CapSurLeMonde"
   - Archive Guides : "%title% | CapSurLeMonde"

2. **Sitemap**
   - Activer pour : Destinations, Guides, Tests, Pages
   - URL : `https://votresite.com/sitemap_index.xml`

### 7. Personnalisation

#### Images recommandées
- Logo : 200x60px
- Image à propos : 800x600px
- Images destinations : 1200x800px
- Images guides : 800x600px
- Images tests : 600x600px

#### Couleurs (via design-system.css)
Le système de design utilise des variables CSS HSL définies dans `design-system.css`.

## Templates disponibles

### Page d'accueil (front-page.php)
Sections :
- Hero avec titre et CTA
- Section "Qui sommes-nous"
- Grille de destinations (6 dernières)
- Grille de guides (3 derniers)
- Section "À propos"

### Single Destination (single-destination.php)
- Hero avec image de fond
- Cartes d'informations (durée, voyageurs, budget)
- Contenu principal + highlights en sidebar
- 3 destinations similaires

### Single Guide (single-guide.php)
- Hero avec image de fond
- Contenu complet avec sidebar sticky
- Informations de publication
- Boutons de partage
- 3 guides similaires

### Single Test (single-test.php)
- Hero avec image, note et prix
- Sidebar avec résumé et lien affilié
- Contenu détaillé
- 3 tests similaires

### Archives
- Liste en grille avec filtres
- Pagination
- Responsive

## Fonctionnalités

✅ Custom Post Types (Destinations, Guides, Tests)
✅ ACF Fields intégrés
✅ Navigation responsive avec menu mobile
✅ Footer avec réseaux sociaux
✅ Système de design cohérent
✅ Templates dédiés par type de contenu
✅ Archives et taxonomies
✅ SEO-friendly
✅ Partage sur réseaux sociaux
✅ Pagination
✅ Page 404 personnalisée
✅ Formulaire de recherche

## Support et Maintenance

### Mises à jour recommandées
- WordPress : Mensuel
- Thème : À chaque modification
- Plugins : Hebdomadaire

### Sauvegardes
- Base de données : Quotidienne
- Fichiers : Hebdomadaire

### Performance
- Utiliser un plugin de cache (WP Rocket, W3 Total Cache)
- Optimiser les images (Smush, ShortPixel)
- CDN recommandé (Cloudflare)

## Troubleshooting

### Les CPT n'apparaissent pas
1. Vérifier que le thème est activé
2. Aller dans Réglages → Permaliens
3. Cliquer sur "Enregistrer" sans rien changer

### Les champs ACF ne s'affichent pas
1. Vérifier que ACF est installé et activé
2. Les champs sont créés automatiquement via functions.php
3. Si besoin, désactiver/réactiver le thème

### Les images ne s'affichent pas
1. Vérifier les chemins dans medias-images.json
2. S'assurer que les images sont dans /wp-content/uploads/
3. Associer les images aux posts via "Image à la une"

### Le menu mobile ne fonctionne pas
1. Vérifier que JavaScript est activé
2. Vider le cache du navigateur
3. Vérifier la console pour les erreurs

## Licence

GNU General Public License v2 or later

## Support

Pour toute question ou problème :
- Documentation WordPress : https://wordpress.org/support/
- Documentation ACF : https://www.advancedcustomfields.com/resources/
- Support Hostinger : https://www.hostinger.fr/support
