<?php get_header(); ?>

<main class="main-content">
    <div class="container py-20">
        <div class="error-404 text-center max-w-2xl mx-auto">
            <div class="error-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="120" height="120">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            </div>
            
            <h1 class="error-title">404 - Page introuvable</h1>
            <p class="error-description">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            
            <div class="error-actions">
                <a href="<?php echo home_url('/'); ?>" class="btn btn-primary">
                    Retour à l'accueil
                </a>
                <a href="<?php echo home_url('/destinations'); ?>" class="btn btn-outline">
                    Voir nos destinations
                </a>
            </div>
            
            <div class="error-search">
                <h3>Ou essayez de rechercher :</h3>
                <?php get_search_form(); ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
