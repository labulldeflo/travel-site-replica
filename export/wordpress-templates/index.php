<?php get_header(); ?>

<main class="main-content">
    <div class="container py-12">
        <div class="max-w-4xl mx-auto">
            <?php if (have_posts()) : ?>
                <div class="posts-grid">
                    <?php while (have_posts()) : the_post(); ?>
                        <article class="post-card card">
                            <?php if (has_post_thumbnail()) : ?>
                                <a href="<?php the_permalink(); ?>" class="post-thumbnail">
                                    <?php the_post_thumbnail('large'); ?>
                                </a>
                            <?php endif; ?>
                            
                            <div class="card-content p-6">
                                <div class="post-meta">
                                    <span class="post-date"><?php echo get_the_date(); ?></span>
                                    <?php
                                    $categories = get_the_category();
                                    if (!empty($categories)) {
                                        echo ' • <span class="post-category">' . esc_html($categories[0]->name) . '</span>';
                                    }
                                    ?>
                                </div>
                                
                                <h2 class="post-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                
                                <div class="post-excerpt">
                                    <?php the_excerpt(); ?>
                                </div>
                                
                                <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                                    Lire la suite
                                </a>
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
                    <h2>Aucun article trouvé</h2>
                    <p>Désolé, aucun contenu n'est disponible pour le moment.</p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>
