<?php get_header(); ?>

<main class="main-content">
    <div class="archive-header">
        <div class="container">
            <h1 class="archive-title">Nos Destinations</h1>
            <p class="archive-description">
                Découvrez tous nos récits de voyage à travers le monde
            </p>
        </div>
    </div>

    <div class="container py-12">
        <?php if (have_posts()) : ?>
            <div class="destinations-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <article class="destination-card card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="card-image">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('large'); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="card-content">
                            <h2 class="card-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            
                            <div class="destination-meta">
                                <?php
                                $duration = get_field('duration');
                                $travelers = get_field('travelers');
                                $location = get_field('location');
                                ?>
                                
                                <?php if ($location) : ?>
                                    <span class="meta-item">
                                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <?php echo esc_html($location); ?>
                                    </span>
                                <?php endif; ?>
                                
                                <?php if ($duration) : ?>
                                    <span class="meta-item">
                                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        <?php echo esc_html($duration); ?>
                                    </span>
                                <?php endif; ?>
                                
                                <?php if ($travelers) : ?>
                                    <span class="meta-item">
                                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                        <?php echo esc_html($travelers); ?>
                                    </span>
                                <?php endif; ?>
                            </div>
                            
                            <div class="card-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline">Découvrir</a>
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
                <h2>Aucune destination trouvée</h2>
                <p>Revenez bientôt pour découvrir nos nouvelles aventures !</p>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
