<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-content">
            <div class="hero-badge">✈️ Bienvenue sur notre blog voyage</div>
            <h1 class="hero-title">CapSurLeMonde</h1>
            <p class="hero-subtitle">
                Découvrez nos aventures à travers le monde et préparez votre prochain voyage avec nos guides pratiques
            </p>
            <div class="hero-buttons">
                <a href="#voyages" class="btn btn-primary">Découvrir nos voyages</a>
                <a href="<?php echo home_url('/guides'); ?>" class="btn btn-secondary">Nos guides</a>
            </div>
        </div>
    </section>

    <!-- Welcome Section -->
    <section class="welcome-section">
        <div class="container">
            <div class="welcome-grid">
                <div class="welcome-image">
                    <?php
                    $about_image = get_theme_mod('about_image');
                    if ($about_image) {
                        echo '<img src="' . esc_url($about_image) . '" alt="CapSurLeMonde" />';
                    } else {
                        echo '<img src="' . get_template_directory_uri() . '/assets/couple-travel-portrait.jpg" alt="CapSurLeMonde" />';
                    }
                    ?>
                </div>
                <div class="welcome-content">
                    <h2 class="section-title">Qui sommes-nous ?</h2>
                    <p>
                        Bienvenue sur <strong>CapSurLeMonde</strong> ! Nous sommes un couple passionné de voyage qui a décidé 
                        de partager nos aventures et nos conseils avec vous.
                    </p>
                    <p>
                        De l'Asie à l'Amérique du Sud, en passant par l'Europe, nous explorons le monde 
                        avec curiosité et authenticité. Notre mission : vous inspirer et vous aider à préparer 
                        vos propres aventures !
                    </p>
                    <a href="<?php echo home_url('/#about'); ?>" class="btn btn-primary">En savoir plus</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Destinations Section -->
    <section id="voyages" class="voyages-section">
        <div class="container">
            <h2 class="section-title text-center">Nos Aventures</h2>
            <p class="section-subtitle text-center">
                Découvrez nos récits de voyage et laissez-vous inspirer pour votre prochaine destination
            </p>

            <div class="destinations-grid">
                <?php
                $destinations = new WP_Query(array(
                    'post_type' => 'destination',
                    'posts_per_page' => 6,
                    'orderby' => 'date',
                    'order' => 'DESC'
                ));

                if ($destinations->have_posts()) :
                    while ($destinations->have_posts()) : $destinations->the_post();
                ?>
                    <article class="destination-card card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="card-image">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('large'); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="card-content">
                            <h3 class="card-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h3>
                            
                            <div class="destination-meta">
                                <?php
                                $duration = get_field('duration');
                                $travelers = get_field('travelers');
                                if ($duration || $travelers) :
                                ?>
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
                                <?php endif; ?>
                            </div>
                            
                            <div class="card-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline">Lire la suite</a>
                        </div>
                    </article>
                <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>

            <div class="text-center mt-8">
                <a href="<?php echo home_url('/destinations'); ?>" class="btn btn-primary">
                    Voir tous nos voyages
                </a>
            </div>
        </div>
    </section>

    <!-- Guides Section -->
    <section id="conseils" class="conseils-section">
        <div class="container">
            <h2 class="section-title text-center">Nos Guides Pratiques</h2>
            <p class="section-subtitle text-center">
                Tous nos conseils pour préparer votre voyage sereinement
            </p>

            <div class="guides-grid">
                <?php
                $guides = new WP_Query(array(
                    'post_type' => 'guide',
                    'posts_per_page' => 3,
                    'orderby' => 'date',
                    'order' => 'DESC'
                ));

                if ($guides->have_posts()) :
                    while ($guides->have_posts()) : $guides->the_post();
                ?>
                    <article class="guide-card card">
                        <div class="card-content">
                            <h3 class="card-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h3>
                            <div class="card-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            <a href="<?php the_permalink(); ?>" class="btn btn-outline">Lire le guide</a>
                        </div>
                    </article>
                <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>

            <div class="text-center mt-8">
                <a href="<?php echo home_url('/guides'); ?>" class="btn btn-primary">
                    Voir tous nos guides
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="container">
            <div class="about-content">
                <h2 class="section-title text-center">Pourquoi nous suivre ?</h2>
                
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">📸</div>
                        <h3>Authenticité</h3>
                        <p>Des récits sincères et des photos non retouchées de nos vraies expériences</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">💡</div>
                        <h3>Conseils Pratiques</h3>
                        <p>Des guides détaillés basés sur notre expérience terrain</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🌍</div>
                        <h3>Diversité</h3>
                        <p>Des destinations variées pour tous les types de voyageurs</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
