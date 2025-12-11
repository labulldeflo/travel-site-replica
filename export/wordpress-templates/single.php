<?php get_header(); ?>

<main class="main-content">
    <?php while (have_posts()) : the_post(); ?>
        <article class="single-post">
            <!-- Hero Section -->
            <div class="post-hero" <?php if (has_post_thumbnail()) : ?>style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full'); ?>');"<?php endif; ?>>
                <div class="container">
                    <div class="post-hero-content">
                        <div class="post-meta">
                            <span class="post-date"><?php echo get_the_date(); ?></span>
                            <?php
                            $categories = get_the_category();
                            if (!empty($categories)) {
                                echo ' • <span class="post-category">' . esc_html($categories[0]->name) . '</span>';
                            }
                            ?>
                        </div>
                        <h1 class="post-hero-title"><?php the_title(); ?></h1>
                        <?php if (has_excerpt()) : ?>
                            <p class="post-hero-excerpt"><?php the_excerpt(); ?></p>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="container py-12">
                <div class="post-content-wrapper">
                    <div class="post-content prose">
                        <?php the_content(); ?>
                    </div>

                    <!-- Sidebar -->
                    <aside class="post-sidebar">
                        <div class="sidebar-card card">
                            <h3>À propos de l'auteur</h3>
                            <div class="author-info">
                                <?php echo get_avatar(get_the_author_meta('ID'), 64); ?>
                                <div>
                                    <div class="author-name"><?php the_author(); ?></div>
                                    <div class="author-bio"><?php the_author_meta('description'); ?></div>
                                </div>
                            </div>
                        </div>

                        <div class="sidebar-card card">
                            <h3>Partager</h3>
                            <div class="share-buttons">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank" class="share-btn">Facebook</a>
                                <a href="https://twitter.com/intent/tweet?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>" target="_blank" class="share-btn">Twitter</a>
                                <a href="https://pinterest.com/pin/create/button/?url=<?php the_permalink(); ?>&media=<?php echo get_the_post_thumbnail_url(); ?>&description=<?php the_title(); ?>" target="_blank" class="share-btn">Pinterest</a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <!-- Related Posts -->
            <?php
            $related = new WP_Query(array(
                'post_type' => 'post',
                'posts_per_page' => 3,
                'post__not_in' => array(get_the_ID()),
                'orderby' => 'rand'
            ));

            if ($related->have_posts()) :
            ?>
                <section class="related-posts">
                    <div class="container">
                        <h2 class="section-title">Articles Similaires</h2>
                        <div class="related-posts-grid">
                            <?php while ($related->have_posts()) : $related->the_post(); ?>
                                <article class="post-card card">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <a href="<?php the_permalink(); ?>" class="post-thumbnail">
                                            <?php the_post_thumbnail('medium'); ?>
                                        </a>
                                    <?php endif; ?>
                                    <div class="card-content">
                                        <h3 class="card-title">
                                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                        </h3>
                                        <a href="<?php the_permalink(); ?>" class="btn btn-outline">Lire</a>
                                    </div>
                                </article>
                            <?php endwhile; ?>
                        </div>
                    </div>
                </section>
            <?php
                wp_reset_postdata();
            endif;
            ?>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
