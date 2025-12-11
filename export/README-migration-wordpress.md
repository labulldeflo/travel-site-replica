# Migration WordPress - Les Deux Petits Baroudeurs

## 📋 Contenu de l'export

Vous trouverez dans ce dossier tous les éléments pour migrer le site vers WordPress :

### 1. **wordpress-content.json**
- Structure complète du contenu (pages, articles, guides, destinations)
- Métadonnées SEO pour chaque élément
- Données produits avec informations d'affiliation
- Organisation hiérarchique du contenu

### 2. **wordpress-import.csv** 
- Fichier CSV prêt pour l'import WordPress
- Compatible avec les plugins d'import standard
- Champs personnalisés inclus (durée, budget, rating, etc.)

### 3. **medias-images.json**
- Liste des images à télécharger et intégrer
- Chemins recommandés pour WordPress
- Textes alternatifs optimisés SEO
- Licences des images externes

### 4. **design-system.css**
- Système de couleurs et variables CSS
- Styles des composants principaux
- Classes utilitaires réutilisables
- Responsive design

---

## 🚀 Instructions de migration

### Phase 1 : Préparation WordPress

#### Installation de base
```bash
# Créer une installation WordPress fraîche
# Configurer SSL et nom de domaine
# Installer thème enfant (recommandé : Astra, GeneratePress ou Hello Elementor)
```

#### Plugins recommandés à installer :
```
SEO & Performance :
- Rank Math SEO (gratuit) ou Yoast SEO Pro
- WP Rocket (cache) ou W3 Total Cache
- Smush (optimisation images)
- UpdraftPlus (sauvegardes)

Import/Export :
- WP All Import (import CSV/JSON)
- Duplicator (migration complète)

Contenu :
- Advanced Custom Fields (champs personnalisés)
- Custom Post Type UI (types de contenus)

Monétisation :
- ThirstyAffiliates (liens affiliés)
- Pretty Links (raccourcissement liens)

Newsletter :
- Mailchimp for WordPress
- ConvertKit (recommandé pour blogueurs)

Autres :
- Complianz (RGPD)
- WooCommerce (si boutique ebook)
```

### Phase 2 : Structure du contenu

#### 1. Créer les Custom Post Types
```php
// À ajouter dans functions.php ou plugin
function create_travel_post_types() {
    // Type "Destinations"
    register_post_type('destination', array(
        'labels' => array(
            'name' => 'Destinations',
            'singular_name' => 'Destination'
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'has_archive' => true,
        'rewrite' => array('slug' => 'destinations'),
    ));
    
    // Type "Guides"
    register_post_type('guide', array(
        'labels' => array(
            'name' => 'Guides',
            'singular_name' => 'Guide'
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'has_archive' => true,
        'rewrite' => array('slug' => 'guides'),
    ));
    
    // Type "Tests Produits"  
    register_post_type('test_produit', array(
        'labels' => array(
            'name' => 'Tests Produits',
            'singular_name' => 'Test Produit'
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'has_archive' => true,
        'rewrite' => array('slug' => 'tests'),
    ));
}
add_action('init', 'create_travel_post_types');
```

#### 2. Créer les champs personnalisés (ACF)
```php
// Exemple de champs pour Destinations
'duration' => 'Durée recommandée',
'budget' => 'Budget estimé', 
'difficulty' => 'Difficulté',
'best_time' => 'Meilleure période',
'highlights' => 'Points forts',
'practical_info' => 'Infos pratiques',

// Exemple de champs pour Tests Produits
'rating' => 'Note /5',
'price' => 'Prix',
'pros' => 'Avantages',
'cons' => 'Inconvénients',
'verdict' => 'Verdict',
'affiliate_link' => 'Lien affilié',
'tested_date' => 'Date de test',
```

### Phase 3 : Import du contenu

#### 1. Télécharger et organiser les images
```bash
# Créer la structure de dossiers
wp-content/uploads/2024/09/
├── destinations/
├── guides/ 
├── tests/
└── general/

# Télécharger les images externes (Unsplash)
# Uploader les images locales existantes
# Respecter les noms de fichiers du JSON
```

#### 2. Import via WP All Import
1. Installer le plugin WP All Import
2. Importer le fichier **wordpress-import.csv**
3. Mapper les champs :
   - `post_title` → Titre
   - `post_content` → Contenu  
   - `post_category` → Catégories
   - `custom_field_*` → Champs personnalisés ACF
   - `featured_image` → Image mise en avant

#### 3. Configuration SEO (Rank Math)
```php
// Auto-setup depuis les données CSV
- Title SEO : colonne 'seo_title'
- Meta description : colonne 'meta_description'  
- Schema markup : Product pour tests, Article pour guides
- Breadcrumbs activés
- Sitemap XML configuré
```

### Phase 4 : Design et thème

#### 1. Intégrer le design system
```css
/* Copier le contenu de design-system.css dans :
- Appearance > Customize > Additional CSS
- ou dans le fichier style.css du thème enfant
*/
```

#### 2. Templates recommandés à créer
```php
// Templates à créer dans le thème
single-destination.php    // Page individuelle destination
archive-destination.php   // Liste des destinations
single-guide.php         // Page individuelle guide
single-test_produit.php  // Page individuelle test produit
page-accueil.php        // Template page d'accueil
```

#### 3. Menus et navigation
```
Menu Principal :
- Accueil
- Destinations
  └── Vietnam
  └── Cambodge  
- Guides
- Tests & Matériel
- À Propos
- Contact

Menu Footer :
- Mentions légales
- Politique confidentialité
- Disclosure affiliation
```

### Phase 5 : Monétisation et outils

#### 1. Configuration liens affiliés
```php
// ThirstyAffiliates
- Créer les liens affiliés pour chaque produit testé
- Masquer les liens vrais derrière pretty links
- Ajouter disclosure automatique

// Exemples :
votresite.com/recommande/oreiller-tempur → lien Amazon
votresite.com/recommande/xiaomi-redmi → lien Fnac
```

#### 2. Newsletter et lead magnets
```php
// Mailchimp/ConvertKit
- Formulaire newsletter dans footer
- Pop-up temporisé (exit-intent)
- Ebook gratuit en opt-in
- Séquence email automatisée
```

#### 3. Analytics et tracking
```javascript
// Google Analytics 4
- Événements personnalisés :
  * Clics liens affiliés
  * Téléchargements ebook
  * Inscriptions newsletter
  * Temps de lecture articles

// Google Search Console
- Vérifier propriété
- Soumettre sitemap XML
- Surveiller indexation
```

---

## ⚡ Checklist post-migration

### ✅ Contenu
- [ ] Toutes les pages importées correctement
- [ ] Images optimisées et bien affichées  
- [ ] Champs personnalisés fonctionnels
- [ ] Liens internes mis à jour
- [ ] Menu de navigation configuré

### ✅ SEO
- [ ] Titles et meta descriptions
- [ ] URLs propres et SEO-friendly
- [ ] Schema markup activé
- [ ] Sitemap XML généré
- [ ] Redirections 301 si nécessaire

### ✅ Performance
- [ ] Cache activé (WP Rocket)
- [ ] Images optimisées (Smush)
- [ ] CDN configuré si nécessaire
- [ ] Temps de chargement < 3s

### ✅ Monétisation
- [ ] Liens affiliés testés et fonctionnels
- [ ] Disclosure légal affiché
- [ ] Newsletter opérationnelle
- [ ] Tracking analytics configuré

### ✅ Légal & RGPD
- [ ] Mentions légales
- [ ] Politique de confidentialité  
- [ ] Bannière cookies (Complianz)
- [ ] Disclosure affiliation

---

## 💡 Conseils supplémentaires

### Thèmes recommandés
1. **Astra Pro** - Très léger, SEO optimisé
2. **GeneratePress Premium** - Performance excellente  
3. **Hello Elementor** - Si utilisation d'Elementor

### Hébergeurs recommandés
1. **Hostinger** (votre choix actuel) - Bon rapport qualité/prix
2. **Kinsta** - Premium, géré WordPress
3. **SiteGround** - Optimisé WordPress

### Plugins à éviter
- Trop de plugins de cache en simultané
- Plugins non mis à jour régulièrement
- Constructeurs de pages lourds (Divi, Beaver Builder si pas nécessaire)

### Maintenance continue
```bash
# Sauvegardes automatiques (UpdraftPlus)
# Mises à jour sécurisées (staging)
# Monitoring uptime (UptimeRobot)
# Optimisation base de données (WP-Optimize)
```

---

## 🆘 Support technique

Pour toute question lors de la migration :

1. **Documentation WordPress** : wordpress.org/support
2. **Community forums** : wordpress.org/support/forums
3. **Plugin support** : Pages de support de chaque plugin
4. **Thème support** : Documentation du thème choisi

**Temps estimé de migration complète : 2-3 jours**

Bonne migration ! 🚀