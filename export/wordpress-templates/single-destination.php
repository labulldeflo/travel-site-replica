<?php get_header(); ?>

<main class="main-content">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article class="destination-single">
                
                <!-- Hero Section -->
                <div class="hero-section" style="background-image: url('<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full'); ?>');">
                    <div class="hero-overlay">
                        <div class="container">
                            <div class="hero-content">
                                <h1 class="hero-title"><?php the_title(); ?></h1>
                                <p class="hero-excerpt"><?php echo get_the_excerpt(); ?></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Destination Info Cards -->
                <section class="destination-info">
                    <div class="container">
                        <div class="info-cards">
                            <?php if (get_field('duration')): ?>
                                <div class="info-card">
                                    <div class="info-icon">⏱️</div>
                                    <div class="info-content">
                                        <h3>Durée</h3>
                                        <p><?php the_field('duration'); ?></p>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php if (get_field('travelers')): ?>
                                <div class="info-card">
                                    <div class="info-icon">👥</div>
                                    <div class="info-content">
                                        <h3>Voyageurs</h3>
                                        <p><?php the_field('travelers'); ?></p>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php if (get_field('budget')): ?>
                                <div class="info-card">
                                    <div class="info-icon">💰</div>
                                    <div class="info-content">
                                        <h3>Budget</h3>
                                        <p><?php the_field('budget'); ?></p>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </section>

                <!-- Main Content -->
                <section class="destination-content">
                    <div class="container">
                        <div class="content-wrapper">
                            
                            <!-- Highlights Sidebar -->
                            <?php if (get_field('highlights')): ?>
                                <aside class="highlights-sidebar">
                                    <div class="highlights-box">
                                        <h3>✨ Points forts</h3>
                                        <div class="highlights-content">
                                            <?php the_field('highlights'); ?>
                                        </div>
                                    </div>
                                </aside>
                            <?php endif; ?>

                            <!-- Article Content -->
                            <div class="article-content">
                                <?php the_content(); ?>
                            </div>

                        </div>
                    </div>
                </section>

                <!-- Related Destinations -->
                <section class="related-destinations">
                    <div class="container">
                        <h2>Autres destinations qui pourraient vous intéresser</h2>
                        <div class="destinations-grid">
                            <?php
                            $related = get_posts(array(
                                'post_type' => 'destination',
                                'posts_per_page' => 3,
                                'post__not_in' => array(get_the_ID()),
                                'orderby' => 'rand'
                            ));
                            foreach ($related as $post) : setup_postdata($post);
                            ?>
                                <div class="destination-card">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php if (has_post_thumbnail()): ?>
                                            <div class="card-image">
                                                <?php the_post_thumbnail('medium'); ?>
                                            </div>
                                        <?php endif; ?>
                                        <div class="card-content">
                                            <h3><?php the_title(); ?></h3>
                                            <p><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
                                            <?php if (get_field('duration')): ?>
                                                <span class="card-duration">⏱️ <?php the_field('duration'); ?></span>
                                            <?php endif; ?>
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