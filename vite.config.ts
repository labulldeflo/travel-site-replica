import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 💡 AJOUT CLÉ POUR LE DÉPLOIEMENT (CORRECTION 500/404)
  // Utilise un chemin relatif pour garantir que les assets sont trouvés,
  // quel que soit le sous-dossier d'où le HTML est servi.
  base: "/",

  server: {
    host: "::",
    port: 8080,
  },

  // Amélioration : Utiliser l'opérateur spread pour une meilleure lisibilité
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Auto-optimize all .jpg images from assets subdirectories
        const optimizeDirs = ['/cities/', '/destinations/', '/tests/', '/guides/', '/blog/'];
        if (optimizeDirs.some(dir => url.pathname.includes(dir)) && url.pathname.endsWith('.jpg')) {
          return new URLSearchParams('w=800&format=webp&quality=75');
        }
        return new URLSearchParams();
      }
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      // Configuration de l'alias @/ pour src (déjà bien configurée)
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 💡 OPTIONNEL : Ajout d'options de build (Nettoyage du dossier)
  build: {
    // Force la sortie des assets au même niveau que le HTML pour certains déploiements
    // Assurez-vous que le dossier 'dist' est nettoyé avant chaque build
    emptyOutDir: true,
  },
}));
