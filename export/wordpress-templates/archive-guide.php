<?php get_header(); ?>

<main class="main-content">
    <div class="archive-header">
        <div class="container">
            <h1 class="archive-title">Guides Pratiques</h1>
            <p class="archive-description">
                Tous nos conseils et astuces pour préparer votre voyage
            </p>
        </div>
    </div>

    <div class="container py-12">
        <?php if (have_posts()) : ?>
            <div class="guides-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="guide-card card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="card-image">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium'); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="card-content">
                            <h2 class="card-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            
                            <div class="post-meta">
                                <span class="post-date"><?php echo get_the_date(); ?></span>
                                <?php
                                $categories = get_the_category();
                                if (!empty($categories)) {
                                    echo ' • <span class="post-category">' . esc_html($categories[0]->name) . '</span>';
                                }
                                ?>
                            </div>
                            
                            <div class="card-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline">Lire le guide</a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <div class="pagination">
                <?php
                the_posts_pagination(array(
                    'prev_text' => '← Précédent',
                    'next_text' => 'Suivant →',
                ));
                ?>
            </div>

        <?php else : ?>
            <div class="no-posts">
                <h2>Aucun guide trouvé</h2>
                <p>Revenez bientôt pour découvrir nos nouveaux guides !</p>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
