<?php get_header(); ?>

<main class="main-content">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article class="test-single">
                
                <!-- Hero Section -->
                <div class="hero-section test-hero">
                    <div class="container">
                        <div class="test-header">
                            <?php if (has_post_thumbnail()): ?>
                                <div class="test-image">
                                    <?php the_post_thumbnail('large'); ?>
                                </div>
                            <?php endif; ?>
                            
                            <div class="test-meta">
                                <h1 class="test-title"><?php the_title(); ?></h1>
                                <p class="test-excerpt"><?php echo get_the_excerpt(); ?></p>
                                
                                <div class="test-rating-price">
                                    <?php if (get_field('rating')): ?>
                                        <div class="rating">
                                            <span class="rating-label">Notre note :</span>
                                            <div class="stars">
                                                <?php 
                                                $rating = get_field('rating');
                                                for ($i = 1; $i <= 5; $i++) {
                                                    if ($i <= $rating) {
                                                        echo '<span class="star filled">★</span>';
                                                    } elseif ($i - 0.5 <= $rating) {
                                                        echo '<span class="star half">★</span>';
                                                    } else {
                                                        echo '<span class="star empty">☆</span>';
                                                    }
                                                }
                                                ?>
                                            </div>
                                            <span class="rating-number"><?php the_field('rating'); ?>/5</span>
                                        </div>
                                    <?php endif; ?>

                                    <?php if (get_field('price')): ?>
                                        <div class="price">
                                            <span class="price-label">Prix :</span>
                                            <span class="price-amount"><?php the_field('price'); ?></span>
                                        </div>
                                    <?php endif; ?>
                                </div>

                                <?php if (get_field('affiliate_link')): ?>
                                    <div class="cta-buttons">
                                        <a href="<?php the_field('affiliate_link'); ?>" class="btn btn-primary" target="_blank" rel="nofollow">
                                            🛒 Voir le produit
                                        </a>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Test Content -->
                <section class="test-content">
                    <div class="container">
                        <div class="content-wrapper">
                            
                            <!-- Test Info Sidebar -->
                            <aside class="test-sidebar">
                                <div class="test-summary">
                                    <h3>📋 Résumé du test</h3>
                                    
                                    <?php if (get_field('rating')): ?>
                                        <div class="summary-item">
                                            <strong>Note globale :</strong>
                                            <div class="rating-display">
                                                <?php 
                                                $rating = get_field('rating');
                                                for ($i = 1; $i <= 5; $i++) {
                                                    echo $i <= $rating ? '★' : '☆';
                                                }
                                                ?>
                                                <span><?php the_field('rating'); ?>/5</span>
                                            </div>
                                        </div>
                                    <?php endif; ?>

                                    <?php if (get_field('price')): ?>
                                        <div class="summary-item">
                                            <strong>Prix :</strong> <?php the_field('price'); ?>
                                        </div>
                                    <?php endif; ?>

                                    <div class="summary-item">
                                        <strong>Testé par :</strong> CapSurLeMonde
                                    </div>

                                    <div class="summary-item">
                                        <strong>Date du test :</strong> <?php echo get_the_date(); ?>
                                    </div>

                                    <?php if (get_field('affiliate_link')): ?>
                                        <div class="affiliate-notice">
                                            <p><small>💡 Les liens vers les produits sont des liens affiliés. Nous touchons une petite commission si vous achetez via nos liens, sans surcoût pour vous.</small></p>
                                        </div>
                                    <?php endif; ?>
                                </div>

                                <!-- Quick Buy Button -->
                                <?php if (get_field('affiliate_link')): ?>
                                    <div class="quick-buy">
                                        <a href="<?php the_field('affiliate_link'); ?>" class="btn btn-accent" target="_blank" rel="nofollow">
                                            🛒 Acheter maintenant
                                        </a>
                                    </div>
                                <?php endif; ?>
                            </aside>

                            <!-- Article Content -->
                            <div class="article-content">
                                <?php the_content(); ?>
                            </div>

                        </div>
                    </div>
                </section>

                <!-- Related Tests -->
                <section class="related-tests">
                    <div class="container">
                        <h2>Autres tests qui pourraient vous intéresser</h2>
                        <div class="tests-grid">
                            <?php
                            $related = get_posts(array(
                                'post_type' => 'test',
                                'posts_per_page' => 3,
                                'post__not_in' => array(get_the_ID()),
                                'orderby' => 'rand'
                            ));
                            foreach ($related as $post) : setup_postdata($post);
                            ?>
                                <div class="test-card">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php if (has_post_thumbnail()): ?>
                                            <div class="card-image">
                                                <?php the_post_thumbnail('medium'); ?>
                                            </div>
                                        <?php endif; ?>
                                        <div class="card-content">
                                            <h3><?php the_title(); ?></h3>
                                            <p><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
                                            <div class="card-meta">
                                                <?php if (get_field('rating')): ?>
                                                    <span class="card-rating">⭐ <?php the_field('rating'); ?>/5</span>
                                                <?php endif; ?>
                                                <?php if (get_field('price')): ?>
                                                    <span class="card-price"><?php the_field('price'); ?></span>
                                                <?php endif; ?>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            <?php endforeach; wp_reset_postdata(); ?>
                        </div>
                    </div>
                </section>

            </article>
        <?php endwhile; ?>
    <?php endif; ?>
</main>

<?php get_footer(); ?>