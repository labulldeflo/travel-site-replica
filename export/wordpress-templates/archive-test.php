<?php get_header(); ?>

<main class="main-content">
    <div class="archive-header">
        <div class="container">
            <h1 class="archive-title">Tests Matériel</h1>
            <p class="archive-description">
                Nos avis et tests de matériel de voyage
            </p>
        </div>
    </div>

    <div class="container py-12">
        <?php if (have_posts()) : ?>
            <div class="tests-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="test-card card">
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
                            
                            <div class="test-meta">
                                <?php
                                $rating = get_field('rating');
                                $price = get_field('price');
                                ?>
                                
                                <?php if ($rating) : ?>
                                    <div class="rating">
                                        <?php
                                        for ($i = 1; $i <= 5; $i++) {
                                            if ($i <= $rating) {
                                                echo '<span class="star filled">★</span>';
                                            } else {
                                                echo '<span class="star">★</span>';
                                            }
                                        }
                                        ?>
                                        <span class="rating-value"><?php echo number_format($rating, 1); ?>/5</span>
                                    </div>
                                <?php endif; ?>
                                
                                <?php if ($price) : ?>
                                    <div class="price"><?php echo esc_html($price); ?></div>
                                <?php endif; ?>
                            </div>
                            
                            <div class="card-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline">Voir le test</a>
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
                <h2>Aucun test trouvé</h2>
                <p>Revenez bientôt pour découvrir nos nouveaux tests !</p>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
