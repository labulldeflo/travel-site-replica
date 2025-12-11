# Intégration du site React dans WordPress via iframe

## 1. Code WordPress - Ajouter dans functions.php

```php
/**
 * Shortcode pour intégrer le site React via iframe
 * Usage: [react_site_iframe]
 */
function capsurlemonde_react_iframe_shortcode($atts) {
    $atts = shortcode_atts(array(
        'url' => 'https://votre-site-lovable.lovable.app', // URL de votre site React
        'height' => '800px',
    ), $atts);
    
    ob_start();
    ?>
    <div id="react-iframe-container" style="width: 100%; overflow: hidden;">
        <iframe 
            id="react-site-iframe"
            src="<?php echo esc_url($atts['url']); ?>"
            style="width: 100%; border: none; min-height: <?php echo esc_attr($atts['height']); ?>;"
            scrolling="no"
            title="Cap Sur Le Monde"
        ></iframe>
    </div>
    
    <script>
    // Auto-resize de l'iframe en fonction du contenu
    (function() {
        const iframe = document.getElementById('react-site-iframe');
        
        window.addEventListener('message', function(event) {
            // Sécurité: vérifier l'origine du message
            // Remplacez par l'URL de votre site Lovable
            if (event.origin !== '<?php echo esc_js($atts['url']); ?>') {
                return;
            }
            
            if (event.data.type === 'setHeight' && event.data.height) {
                iframe.style.height = event.data.height + 'px';
            }
        });
    })();
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('react_site_iframe', 'capsurlemonde_react_iframe_shortcode');
```

## 2. Code React - Ajouter dans src/App.tsx

```tsx
import { useEffect } from "react";

const App = () => {
  // Script pour envoyer la hauteur à WordPress
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage(
        { type: 'setHeight', height }, 
        '*' // En production, remplacez par l'URL exacte de votre WordPress
      );
    };

    sendHeight();
    
    // Envoyer la hauteur lors du resize
    window.addEventListener('resize', sendHeight);
    
    // Vérifier la hauteur périodiquement (utile pour le contenu dynamique)
    const interval = setInterval(sendHeight, 1000);

    return () => {
      window.removeEventListener('resize', sendHeight);
      clearInterval(interval);
    };
  }, []);

  return (
    // ... reste du code
  );
};
```

## 3. Utilisation dans WordPress

### Option A: Dans une page WordPress
1. Créer une nouvelle page
2. Ajouter le shortcode: `[react_site_iframe]`
3. Publier

### Option B: Avec une URL personnalisée
```
[react_site_iframe url="https://mon-site.lovable.app" height="1000px"]
```

### Option C: Dans un template WordPress
```php
<?php echo do_shortcode('[react_site_iframe]'); ?>
```

## 4. Configuration avancée

### CSS personnalisé pour l'iframe
Ajouter dans le fichier `style.css` de votre thème:

```css
#react-iframe-container {
    margin: 0;
    padding: 0;
}

#react-site-iframe {
    display: block;
    width: 100%;
    max-width: 100%;
}
```

### Responsive
L'iframe s'adapte automatiquement à la largeur du conteneur WordPress et ajuste sa hauteur en fonction du contenu React.

## 5. Sécurité

Pour la production, **modifiez les URLs** dans:
- Le code WordPress: remplacer `'https://votre-site-lovable.lovable.app'`
- Le code React: remplacer `'*'` par l'URL exacte de votre WordPress

Exemple:
```javascript
window.parent.postMessage(
  { type: 'setHeight', height }, 
  'https://capsurlemonde.com' // Votre domaine WordPress
);
```

## 6. Déploiement

1. **Déployer le site React** sur Lovable (bouton Publish)
2. **Copier l'URL** du site déployé
3. **Ajouter le code WordPress** dans `functions.php`
4. **Ajouter le code React** dans `src/App.tsx` et redéployer
5. **Utiliser le shortcode** avec l'URL correcte
