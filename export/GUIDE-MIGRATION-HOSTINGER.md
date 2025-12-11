# 🚀 Guide de Migration WordPress - CapSurLeMonde vers Hostinger

## 📋 Prérequis

### Fichiers fournis :
- ✅ `wordpress-content.json` - Structure et contenu
- ✅ `wordpress-import.csv` - Données d'import
- ✅ `medias-images.json` - Liste des images
- ✅ `design-system.css` - Styles du site
- ✅ `wordpress-templates/` - Templates PHP
- ✅ Ce guide de migration

### Accès nécessaires :
- 🔑 Accès admin Hostinger (cPanel/hPanel)
- 🔑 Accès FTP/SFTP Hostinger
- 💻 WordPress installé sur le domaine

---

## 🎯 ÉTAPE 1 : Sauvegarde & Préparation

### 1.1 Sauvegarde complète
```bash
# Dans cPanel/hPanel Hostinger
- Files → File Manager
- Sélectionner tout le dossier public_html
- Créer archive : backup_wp_YYYYMMDD.zip
```

### 1.2 Export base de données
```bash
# Dans cPanel → phpMyAdmin
- Exporter → SQL
- Sauvegarder : backup_db_YYYYMMDD.sql
```

---

## 🛠 ÉTAPE 2 : Configuration WordPress de Base

### 2.1 Installation WordPress (si pas fait)
```bash
# Via hPanel Hostinger
- Auto Installer → WordPress
- Domaine : votre-domaine.com
- Créer admin : admin / mot-de-passe-fort
```

### 2.2 Configuration SSL
```bash
# Dans hPanel Hostinger
- SSL → Gérer → Forcer HTTPS
```

---

## 🔌 ÉTAPE 3 : Installation des Plugins Requis

### 3.1 Plugins obligatoires à installer :
1. **Advanced Custom Fields (ACF)** - Champs personnalisés
2. **WP All Import** - Import CSV 
3. **Custom Post Type UI** - Types de contenu
4. **Rank Math SEO** - Référencement
5. **Smush** - Optimisation images
6. **UpdraftPlus** - Sauvegardes
7. **Redirection** - Redirections URLs

### 3.2 Installation via admin WordPress :
```
Extensions → Ajouter → Rechercher → Installer → Activer
```

---

## 🏗 ÉTAPE 4 : Création des Custom Post Types

### 4.1 Copier le code functions.php
```php
# Fichier : wordpress-templates/functions.php
- Copier tout le contenu
- Coller dans : Apparence → Éditeur de thème → functions.php
- Sauvegarder
```

### 4.2 Vérifier les CPT créés
```
# Dans admin WordPress, vérifier nouveaux menus :
- Destinations
- Guides  
- Tests Matériel
```

---

## 📥 ÉTAPE 5 : Import du Contenu

### 5.1 Test import (10 articles)
```bash
# WP All Import → Nouvel Import
1. Uploader : wordpress-import.csv
2. Mapper les champs :
   - post_title → Title
   - post_content → Content  
   - post_excerpt → Excerpt
   - post_type → Post Type
   - custom_field_* → Champs ACF
3. Limiter à 10 articles
4. Lancer l'import
5. VÉRIFIER le résultat
```

### 5.2 Import complet (si test OK)
```bash
- Reprendre WP All Import
- Supprimer limitation
- Import complet
- Vérifier tous les contenus
```

---

## 🖼 ÉTAPE 6 : Upload des Images

### 6.1 Télécharger les images
```bash
# Depuis medias-images.json
- Télécharger toutes les images listées
- Les renommer selon les chemins indiqués
```

### 6.2 Upload via FTP
```bash
# Via FileZilla ou cPanel File Manager
- Se connecter en FTP
- Naviguer vers : /public_html/wp-content/uploads/
- Créer structure : /2024/12/ (année/mois)
- Upload toutes les images
```

### 6.3 Associer aux articles
```bash
# Dans WordPress admin
- Médias → Bibliothèque
- Associer chaque image à son article
- Définir comme image mise en avant
```

---

## 🎨 ÉTAPE 7 : Intégration Design System

### 7.1 Upload design-system.css
```bash
# Via FTP ou File Manager
- Copier design-system.css
- Vers : /public_html/wp-content/themes/votre-theme/css/
```

### 7.2 Copier les templates
```bash
# Copier depuis wordpress-templates/
- single-destination.php → /wp-content/themes/votre-theme/
- single-test.php → /wp-content/themes/votre-theme/  
- single-guide.php → /wp-content/themes/votre-theme/
```

### 7.3 Adapter le style au thème
```css
/* Ajouter dans style.css du thème */
@import url('css/design-system.css');

/* Personnalisations spécifiques */
.hero-section { /* styles */ }
.destination-card { /* styles */ }
.test-rating { /* styles */ }
```

---

## 🔍 ÉTAPE 8 : Configuration SEO

### 8.1 Rank Math - Configuration de base
```bash
# Setup Wizard Rank Math
1. Connecter Search Console
2. Type de site : Blog
3. Titre site : CapSurLeMonde
4. Description : Blog de voyage - Récits, guides et conseils
5. Logo et favicon
6. Réseaux sociaux
```

### 8.2 Templates de titre SEO
```bash
# Rank Math → Titles & Meta
- Articles : %title% | CapSurLeMonde
- Destinations : %title% - Guide Voyage | CapSurLeMonde  
- Tests : Test %title% - Avis & Prix | CapSurLeMonde
```

### 8.3 Sitemap XML
```bash
# Rank Math → Sitemap Settings
- Activer sitemap
- Inclure : Articles, Pages, Destinations, Guides, Tests
- Exclure : Médias, Archives dates
```

---

## 📱 ÉTAPE 9 : Tests & Optimisation

### 9.1 Tests fonctionnels
- ✅ Navigation principale
- ✅ Pages destinations (single-destination.php)
- ✅ Pages tests (single-test.php) 
- ✅ Recherche interne
- ✅ Formulaires contact
- ✅ Liens affiliés fonctionnels

### 9.2 Tests techniques
```bash
# Outils à utiliser :
- PageSpeed Insights (performance)
- Mobile-Friendly Test (responsive)
- Rich Results Test (données structurées)
```

### 9.3 Optimisations
```bash
# Smush → Optimiser toutes les images
# Cache → Activer cache Hostinger
# CDN → Activer Cloudflare (si disponible)
```

---

## 🚀 ÉTAPE 10 : Mise en Production

### 10.1 Configuration finale
```bash
# Paramètres WordPress
- URL du site : https://votre-domaine.com
- Adresse WordPress : https://votre-domaine.com
- Fuseau horaire : Paris
- Format de date : français
```

### 10.2 Menus navigation
```bash
# Apparence → Menus
1. Menu Principal :
   - Accueil
   - Destinations  
   - Guides
   - Tests
   - Contact

2. Menu Footer :
   - Mentions légales
   - Politique confidentialité
   - Contact
```

### 10.3 Widgets & Sidebar
```bash
# Apparence → Widgets
- Newsletter signup
- Articles populaires
- Réseaux sociaux
- Recherche
```

---

## 📊 ÉTAPE 11 : Analytics & Suivi

### 11.1 Google Analytics
```bash
# Dans Google Analytics
1. Créer propriété : votre-domaine.com
2. Installer code de suivi
3. Rank Math → Analytics → Connecter GA

# Objectifs à configurer :
- Pages vues destinations
- Clics liens affiliés  
- Téléchargements guides
- Inscriptions newsletter
```

### 11.2 Search Console
```bash
# Google Search Console
1. Ajouter propriété : votre-domaine.com
2. Vérifier via Rank Math
3. Soumettre sitemap XML
4. Surveiller indexation
```

---

## 🔧 ÉTAPE 12 : Maintenance & Sécurité

### 12.1 Sauvegardes automatiques
```bash
# UpdraftPlus
- Planifier : quotidien
- Stockage : Google Drive/Dropbox
- Conserver : 30 sauvegardes
```

### 12.2 Sécurité
```bash
# Recommandations :
- Mots de passe forts
- Limitation tentatives connexion
- Masquer version WordPress
- SSL forcé partout
```

### 12.3 Mises à jour
```bash
# Calendrier maintenance :
- WordPress core : dès disponible
- Plugins : hebdomadaire
- Thème : vérifier compatibilité
- Monitoring : performances daily
```

---

## 📋 CHECKLIST FINALE

### ✅ Contenu
- [ ] Tous les articles importés
- [ ] Images associées et optimisées  
- [ ] Champs ACF remplis
- [ ] Liens internes fonctionnels
- [ ] Liens affiliés trackés

### ✅ SEO
- [ ] Titles et meta descriptions
- [ ] Sitemap XML généré
- [ ] Search Console configurée
- [ ] Analytics installé
- [ ] Données structurées

### ✅ Performance  
- [ ] Images optimisées (Smush)
- [ ] Cache activé
- [ ] CDN configuré (optionnel)
- [ ] PageSpeed > 85

### ✅ Fonctionnalités
- [ ] Navigation responsive
- [ ] Recherche interne
- [ ] Formulaires contact
- [ ] Newsletter signup
- [ ] Partage réseaux sociaux

### ✅ Légal
- [ ] Mentions légales
- [ ] Politique confidentialité  
- [ ] RGPD compliance
- [ ] Cookies notice

---

## 🆘 Support & Assistance

### En cas de problème :

**Erreur import CSV :**
- Vérifier encodage UTF-8
- Augmenter memory_limit PHP
- Import par petits lots

**Images non affichées :**
- Vérifier permissions fichiers (755)
- Chemin correct dans medias-images.json
- Régénérer miniatures

**Templates non appliqués :**
- Vérifier nom fichiers templates
- Clear cache site
- Réactiver thème

**Performance lente :**
- Optimiser base de données
- Réduire plugins actifs
- Activer cache Hostinger

---

## 📞 Contact Support

- **Documentation Hostinger :** help.hostinger.com
- **Support WordPress :** wordpress.org/support
- **Plugins utilisés :** Voir documentation respective

**Backup final à conserver :**
- `backup_wp_final_YYYYMMDD.zip`
- `backup_db_final_YYYYMMDD.sql`

---

*Guide préparé pour la migration CapSurLeMonde vers WordPress/Hostinger*
*Version 1.0 - Décembre 2024*