<?php get_header(); ?>

<main class="main-content">
    <?php while (have_posts()) : the_post(); ?>
        <article class="single-guide">
            <!-- Hero Section -->
            <div class="guide-hero" <?php if (has_post_thumbnail()) : ?>style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full'); ?>');"<?php endif; ?>>
                <div class="container">
                    <div class="guide-hero-content">
                        <div class="guide-badge">📚 Guide Pratique</div>
                        <h1 class="guide-hero-title"><?php the_title(); ?></h1>
                        <?php if (has_excerpt()) : ?>
                            <p class="guide-hero-excerpt"><?php the_excerpt(); ?></p>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="container py-12">
                <div class="guide-content-wrapper">
                    <div class="guide-content prose">
                        <?php the_content(); ?>
                        
                        <?php
                        $tags = get_the_tags();
                        if ($tags) :
                        ?>
                            <div class="guide-tags">
                                <h3>Tags :</h3>
                                <div class="tags-list">
                                    <?php foreach ($tags as $tag) : ?>
                                        <a href="<?php echo get_tag_link($tag->term_id); ?>" class="tag-badge">
                                            <?php echo esc_html($tag->name); ?>
                                        </a>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>

                    <!-- Sidebar -->
                    <aside class="guide-sidebar">
                        <div class="sidebar-card card sticky">
                            <h3>Dans ce guide</h3>
                            <div class="guide-meta">
                                <div class="meta-item">
                                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <span>Publié le <?php echo get_the_date(); ?></span>
                                </div>
                                <div class="meta-item">
                                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                    </svg>
                                    <span>Par <?php the_author(); ?></span>
                                </div>
                            </div>
                            
                            <div class="sidebar-cta">
                                <p><strong>Ce guide vous aide ?</strong></p>
                                <p>Partagez-le avec d'autres voyageurs !</p>
                                <div class="share-buttons">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank" class="btn btn-outline btn-sm">Facebook</a>
                                    <a href="https://twitter.com/intent/tweet?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>" target="_blank" class="btn btn-outline btn-sm">Twitter</a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <!-- Related Guides -->
            <?php
            $related = new WP_Query(array(
                'post_type' => 'guide',
                'posts_per_page' => 3,
                'post__not_in' => array(get_the_ID()),
                'orderby' => 'rand'
            ));

            if ($related->have_posts()) :
            ?>
                <section class="related-guides">
                    <div class="container">
                        <h2 class="section-title">Autres Guides</h2>
                        <div class="guides-grid">
                            <?php while ($related->have_posts()) : $related->the_post(); ?>
                                <article class="guide-card card">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <div class="card-image">
                                            <a href="<?php the_permalink(); ?>">
                                                <?php the_post_thumbnail('medium'); ?>
                                            </a>
                                        </div>
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
