<?php
/**
 * Template Name: Page d'accueil HTML
 * Description: Page d'accueil avec tout le HTML du site React converti pour WordPress
 */

get_header(); ?>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
        <?php 
        $hero_image = get_theme_mod('cslm_hero_image');
        if ($hero_image) : ?>
            <img src="<?php echo esc_url($hero_image); ?>" alt="Mediterranean cove with turquoise waters" class="w-full h-full object-cover">
        <?php else : ?>
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Mediterranean cove with turquoise waters" class="w-full h-full object-cover">
        <?php endif; ?>
        <div class="absolute inset-0 bg-gradient-hero"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div class="mb-8">
            <h1 class="font-script text-6xl md:text-8xl font-bold mb-4 drop-shadow-lg text-sky-500 px-[52px] py-0 mx-0">
                Cap sur le Monde
            </h1>
            
            <!-- Decorative elements -->
            <div class="flex items-center justify-center space-x-4 mb-6">
                <div class="w-12 h-0.5 bg-gradient-ocean"></div>
                <div class="w-12 h-0.5 bg-gradient-ocean"></div>
            </div>
            
            <p class="text-lg md:text-xl font-elegant text-foreground uppercase tracking-widest drop-shadow-md mx-[10px] my-[8px]">
                PRENEZ-EN PLEIN LES MIRETTES
            </p>
        </div>
    </div>
</section>

<!-- Welcome Section -->
<section class="py-20 bg-background">
    <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Image -->
                <div class="order-2 lg:order-1">
                    <?php 
                    $about_image = get_theme_mod('cslm_about_image');
                    if ($about_image) : ?>
                        <img src="<?php echo esc_url($about_image); ?>" alt="Marion et Cris - Voyageurs" class="w-full rounded-2xl shadow-elegant">
                    <?php else : ?>
                        <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Marion et Cris - Voyageurs" class="w-full rounded-2xl shadow-elegant">
                    <?php endif; ?>
                </div>

                <!-- Content -->
                <div class="order-1 lg:order-2">
                    <h2 class="text-4xl md:text-5xl font-script font-bold text-foreground mb-6">
                        Bienvenue sur notre blog !
                    </h2>
                    <div class="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                        <p>
                            Nous sommes <strong>Marion et Cris</strong>, deux passionnés de voyage qui ont décidé 
                            de partager leurs aventures autour du monde. De l'Islande à la Patagonie, 
                            en passant par l'Asie du Sud-Est, nous vous emmenons avec nous !
                        </p>
                        <p>
                            Sur ce blog, vous trouverez nos récits de voyage détaillés, des guides pratiques 
                            pour préparer vos propres aventures, et tous nos meilleurs conseils pour voyager 
                            malin et responsable.
                        </p>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="<?php echo home_url('/destinations'); ?>" class="inline-flex items-center justify-center px-8 py-3 bg-gradient-ocean text-white font-semibold rounded-full hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                            Découvrir nos voyages
                        </a>
                        <a href="<?php echo home_url('/guides'); ?>" class="inline-flex items-center justify-center px-8 py-3 border-2 border-ocean text-ocean font-semibold rounded-full hover:bg-ocean hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                            Conseils voyage
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Voyages Section -->
<section id="voyages" class="py-20 bg-muted/30">
    <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
                    Nos Aventures
                </h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Découvrez nos récits de voyage à travers le monde, nos coups de cœur 
                    et tous nos conseils pour préparer vos propres aventures.
                </p>
            </div>

            <!-- Destinations Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $destinations = new WP_Query(array(
                    'post_type' => 'destination',
                    'posts_per_page' => 6,
                    'orderby' => 'date',
                    'order' => 'DESC'
                ));

                if ($destinations->have_posts()) :
                    while ($destinations->have_posts()) : $destinations->the_post();
                        $duration = get_post_meta(get_the_ID(), 'duration', true);
                        $travelers = get_post_meta(get_the_ID(), 'travelers', true);
                        $location = get_post_meta(get_the_ID(), 'location', true);
                        $highlights = get_post_meta(get_the_ID(), 'highlights', true);
                ?>
                    <div class="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-card rounded-lg">
                        <!-- Image -->
                        <div class="relative h-48 overflow-hidden">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('medium', array('class' => 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500')); ?>
                            <?php else : ?>
                                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="<?php the_title(); ?>" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                            <?php endif; ?>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        <!-- Content -->
                        <div class="p-6">
                            <h3 class="text-xl font-elegant font-semibold text-foreground mb-3 group-hover:text-ocean transition-colors">
                                <?php the_title(); ?>
                            </h3>
                            
                            <!-- Meta Info -->
                            <div class="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                                <?php if ($location) : ?>
                                <div class="flex items-center space-x-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <span><?php echo esc_html($location); ?></span>
                                </div>
                                <?php endif; ?>
                                
                                <?php if ($duration) : ?>
                                <div class="flex items-center space-x-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
                                        <line x1="16" y1="2" x2="16" y2="6" stroke-width="2"/>
                                        <line x1="8" y1="2" x2="8" y2="6" stroke-width="2"/>
                                        <line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/>
                                    </svg>
                                    <span><?php echo esc_html($duration); ?></span>
                                </div>
                                <?php endif; ?>
                                
                                <?php if ($travelers) : ?>
                                <div class="flex items-center space-x-1">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                    </svg>
                                    <span><?php echo esc_html($travelers); ?></span>
                                </div>
                                <?php endif; ?>
                            </div>

                            <p class="text-muted-foreground mb-4 leading-relaxed">
                                <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                            </p>

                            <!-- Highlights -->
                            <?php if ($highlights && is_array($highlights)) : ?>
                            <div class="mb-4">
                                <div class="flex flex-wrap gap-2">
                                    <?php foreach (array_slice($highlights, 0, 3) as $highlight) : ?>
                                    <span class="px-3 py-1 bg-ocean/10 text-ocean text-xs rounded-full border border-ocean/20">
                                        <?php echo esc_html($highlight); ?>
                                    </span>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                            <?php endif; ?>

                            <!-- Read More Button -->
                            <a href="<?php the_permalink(); ?>" class="block text-center w-full py-2 bg-gradient-ocean text-white rounded-lg hover:shadow-elegant transition-all duration-300 transform group-hover:scale-105">
                                Lire la suite
                            </a>
                        </div>
                    </div>
                <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>

            <!-- View All Button -->
            <div class="text-center mt-12">
                <a href="<?php echo home_url('/destinations'); ?>" class="inline-block px-8 py-3 border-2 border-ocean text-ocean font-semibold rounded-full hover:bg-ocean hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    Voir tous nos voyages
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Preparer Section -->
<section id="preparer" class="py-20 bg-muted/30">
    <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
                    Préparer son Tour du Monde
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Le guide complet pour organiser votre tour du monde étape par étape. 
                    De l'idée au départ, nous vous accompagnons dans tous vos préparatifs.
                </p>
            </div>

            <!-- Hero Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div class="text-center p-6 bg-background rounded-xl shadow-soft">
                    <div class="text-3xl font-bold text-ocean mb-2">18</div>
                    <div class="text-sm text-muted-foreground">Mois de voyage</div>
                </div>
                <div class="text-center p-6 bg-background rounded-xl shadow-soft">
                    <div class="text-3xl font-bold text-sunset mb-2">42</div>
                    <div class="text-sm text-muted-foreground">Pays visités</div>
                </div>
                <div class="text-center p-6 bg-background rounded-xl shadow-soft">
                    <div class="text-3xl font-bold text-ocean mb-2">25k€</div>
                    <div class="text-sm text-muted-foreground">Budget pour 2</div>
                </div>
                <div class="text-center p-6 bg-background rounded-xl shadow-soft">
                    <div class="text-3xl font-bold text-sunset mb-2">6</div>
                    <div class="text-sm text-muted-foreground">Mois de préparation</div>
                </div>
            </div>

            <!-- Étapes -->
            <?php
            $etapes = array(
                array('icon' => 'globe', 'title' => '1. Choisir ses destinations', 'description' => 'Définir son itinéraire en fonction de ses envies, du climat et de son budget.', 'details' => array('Recherche destinations', 'Climat et saisons', 'Coût de la vie', 'Visa requis')),
                array('icon' => 'calendar', 'title' => '2. Planifier les dates', 'description' => 'Optimiser son planning pour profiter des meilleures conditions météo.', 'details' => array('Haute/basse saison', 'Événements locaux', 'Durée optimale', 'Flexibilité dates')),
                array('icon' => 'credit-card', 'title' => '3. Établir son budget', 'description' => 'Calculer le budget nécessaire et prévoir les dépenses sur place.', 'details' => array('Transport international', 'Logements', 'Nourriture', 'Activités et visites')),
                array('icon' => 'file-text', 'title' => '4. Formalités administratives', 'description' => 'Préparer tous les documents nécessaires bien à l\'avance.', 'details' => array('Passeport valide', 'Visas nécessaires', 'Assurance voyage', 'Vaccinations')),
                array('icon' => 'users', 'title' => '5. Réservations essentielles', 'description' => 'Sécuriser transport et premiers logements pour commencer sereinement.', 'details' => array('Vols internationaux', 'Premiers hébergements', 'Transport sur place', 'Activités populaires')),
                array('icon' => 'compass', 'title' => '6. Équipement et départ', 'description' => 'Finaliser son matériel et se préparer mentalement au grand départ.', 'details' => array('Sac à dos adapté', 'Vêtements techniques', 'Trousse de secours', 'Applications utiles'))
            );

            foreach ($etapes as $index => $etape) :
                $isEven = $index % 2 === 0;
            ?>
                <div class="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 bg-card rounded-lg mb-8">
                    <div class="lg:flex w-full <?php echo $isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'; ?>">
                        <!-- Content -->
                        <div class="flex-1 p-8">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center">
                                        <span class="text-white text-2xl font-bold"><?php echo $index + 1; ?></span>
                                    </div>
                                </div>
                                
                                <div class="flex-1">
                                    <h3 class="text-2xl font-elegant font-semibold text-foreground mb-3">
                                        <?php echo $etape['title']; ?>
                                    </h3>
                                    
                                    <p class="text-muted-foreground mb-6 text-lg leading-relaxed">
                                        <?php echo $etape['description']; ?>
                                    </p>

                                    <!-- Checklist -->
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <?php foreach ($etape['details'] as $detail) : ?>
                                        <div class="flex items-center space-x-3">
                                            <div class="w-2 h-2 bg-sunset rounded-full flex-shrink-0"></div>
                                            <span class="text-sm text-muted-foreground"><?php echo $detail; ?></span>
                                        </div>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Visual Element -->
                        <div class="lg:w-1/3 p-8 bg-gradient-sand flex items-center justify-center">
                            <div class="text-center">
                                <div class="text-6xl font-bold text-ocean/20 font-script">
                                    <?php echo str_pad($index + 1, 2, '0', STR_PAD_LEFT); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>

            <!-- CTA Section -->
            <div class="mt-16 text-center bg-gradient-ocean rounded-2xl p-12 text-white">
                <h3 class="text-3xl font-script font-bold mb-4">
                    Prêt pour l'aventure ?
                </h3>
                <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                    Téléchargez notre guide complet gratuit avec toutes les étapes détaillées, 
                    nos outils de planification et notre budget prévisionnel.
                </p>
                <button class="px-8 py-4 bg-white text-ocean font-semibold rounded-full hover:bg-sand transition-all duration-300 transform hover:-translate-y-1 hover:shadow-elegant">
                    Télécharger le guide gratuit
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Conseils Section -->
<section id="conseils" class="py-20 bg-background">
    <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
                    Conseils Voyage
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Profitez de notre expérience pour préparer vos voyages sereinement. 
                    Nos guides pratiques vous accompagnent de A à Z dans vos préparatifs.
                </p>
            </div>

            <!-- Conseils Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $conseils = array(
                    array('title' => 'Préparer son sac', 'description' => 'Tous nos conseils pour faire son sac à dos comme un pro et ne rien oublier d\'essentiel.', 'tips' => array('Liste matériel', 'Poids optimal', 'Vêtements techniques')),
                    array('title' => 'Réserver ses vols', 'description' => 'Comment trouver les meilleurs prix et optimiser ses itinéraires pour économiser.', 'tips' => array('Comparateurs', 'Dates flexibles', 'Escales stratégiques')),
                    array('title' => 'Planifier son itinéraire', 'description' => 'Nos méthodes pour créer un parcours optimisé selon ses envies et son budget.', 'tips' => array('Outils planning', 'Durées recommandées', 'Transport local')),
                    array('title' => 'Assurance voyage', 'description' => 'Guide complet pour choisir la bonne assurance et voyager l\'esprit tranquille.', 'tips' => array('Comparatif assurances', 'Garanties essentielles', 'Démarches urgences')),
                    array('title' => 'Matériel photo', 'description' => 'Sélection d\'équipement photo pour capturer vos plus beaux souvenirs de voyage.', 'tips' => array('Appareils compacts', 'Accessoires utiles', 'Sauvegarde photos')),
                    array('title' => 'Santé en voyage', 'description' => 'Préparer sa trousse de secours et se protéger des risques sanitaires à l\'étranger.', 'tips' => array('Vaccinations', 'Trousse de secours', 'Assurance santé'))
                );

                foreach ($conseils as $conseil) :
                ?>
                    <div class="p-6 bg-card rounded-lg group hover:shadow-elegant transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-ocean/20">
                        <!-- Icon -->
                        <div class="mb-6">
                            <div class="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <span class="text-white text-2xl">✈</span>
                            </div>
                        </div>

                        <!-- Content -->
                        <h3 class="text-xl font-elegant font-semibold text-foreground mb-3 group-hover:text-ocean transition-colors">
                            <?php echo $conseil['title']; ?>
                        </h3>
                        
                        <p class="text-muted-foreground mb-4 leading-relaxed">
                            <?php echo $conseil['description']; ?>
                        </p>

                        <!-- Tips List -->
                        <ul class="space-y-2 mb-6">
                            <?php foreach ($conseil['tips'] as $tip) : ?>
                            <li class="flex items-center text-sm text-muted-foreground">
                                <div class="w-2 h-2 bg-sunset rounded-full mr-3 flex-shrink-0"></div>
                                <?php echo $tip; ?>
                            </li>
                            <?php endforeach; ?>
                        </ul>

                        <!-- Read More Link -->
                        <a href="<?php echo home_url('/guides'); ?>" class="text-ocean font-semibold text-sm hover:underline group-hover:translate-x-2 transition-transform duration-300 inline-block">
                            Voir le guide complet →
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Newsletter CTA -->
            <div class="mt-16 bg-gradient-sand rounded-2xl p-8 text-center">
                <h3 class="text-2xl font-elegant font-semibold text-foreground mb-4">
                    Ne ratez aucun conseil !
                </h3>
                <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Inscrivez-vous à notre newsletter pour recevoir nos derniers guides pratiques 
                    et bons plans voyage directement dans votre boîte mail.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                        type="email" 
                        placeholder="Votre adresse email"
                        class="flex-1 px-4 py-3 rounded-lg border border-sand-dark focus:outline-none focus:ring-2 focus:ring-ocean"
                    />
                    <button class="px-6 py-3 bg-gradient-ocean text-white rounded-lg hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Famille Section -->
<section id="famille" class="py-20 bg-background">
    <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
                    Voyager en Famille
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    L'aventure n'attend pas ! Découvrez comment voyager avec vos enfants 
                    et créer des souvenirs inoubliables en famille aux quatre coins du monde.
                </p>
            </div>

            <!-- Stats Family -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div class="text-center p-6 bg-gradient-sand rounded-xl">
                    <div class="text-4xl font-bold text-ocean mb-2">15</div>
                    <div class="text-muted-foreground">Pays visités en famille</div>
                </div>
                <div class="text-center p-6 bg-gradient-sand rounded-xl">
                    <div class="text-4xl font-bold text-sunset mb-2">50+</div>
                    <div class="text-muted-foreground">Familles accompagnées</div>
                </div>
                <div class="text-center p-6 bg-gradient-sand rounded-xl">
                    <div class="text-4xl font-bold text-ocean mb-2">100%</div>
                    <div class="text-muted-foreground">Sourires garantis</div>
                </div>
            </div>

            <!-- Conseils Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <?php
                $conseilsFamille = array(
                    array('title' => 'Âge idéal pour voyager', 'description' => 'Nos conseils pour déterminer le bon moment selon l\'âge de vos enfants.', 'tips' => array('0-2 ans : Avantages et défis', '3-7 ans : L\'âge de la découverte', '8+ ans : Voyageurs autonomes')),
                    array('title' => 'Transport avec enfants', 'description' => 'Comment rendre les longs trajets agréables pour toute la famille.', 'tips' => array('Préparer l\'avion', 'Road trips famille', 'Transport local sécurisé')),
                    array('title' => 'Sécurité et santé', 'description' => 'Protéger sa famille et prévenir les risques sanitaires en voyage.', 'tips' => array('Trousse de secours', 'Assurance famille', 'Vaccinations enfants')),
                    array('title' => 'Alimentation des enfants', 'description' => 'Conseils nutrition et découverte culinaire adaptée aux plus jeunes.', 'tips' => array('Découvrir sans risquer', 'Lait et petits pots', 'Restaurants family-friendly')),
                    array('title' => 'Activités familiales', 'description' => 'Sélectionner des expériences qui plairont à toute la famille.', 'tips' => array('Activités par âge', 'Temps de repos', 'Impliquer les enfants')),
                    array('title' => 'Créer des souvenirs', 'description' => 'Immortaliser le voyage et créer des souvenirs durables ensemble.', 'tips' => array('Carnet de voyage', 'Photos famille', 'Traditions voyage'))
                );

                foreach ($conseilsFamille as $conseil) :
                ?>
                    <div class="p-6 bg-card rounded-lg group hover:shadow-elegant transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-sunset/20">
                        <!-- Icon -->
                        <div class="mb-6">
                            <div class="w-16 h-16 bg-gradient-to-br from-sunset to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <span class="text-white text-2xl">👨‍👩‍👧‍👦</span>
                            </div>
                        </div>

                        <!-- Content -->
                        <h3 class="text-xl font-elegant font-semibold text-foreground mb-3 group-hover:text-sunset transition-colors">
                            <?php echo $conseil['title']; ?>
                        </h3>
                        
                        <p class="text-muted-foreground mb-4 leading-relaxed">
                            <?php echo $conseil['description']; ?>
                        </p>

                        <!-- Tips List -->
                        <ul class="space-y-2 mb-6">
                            <?php foreach ($conseil['tips'] as $tip) : ?>
                            <li class="flex items-center text-sm text-muted-foreground">
                                <div class="w-2 h-2 bg-ocean rounded-full mr-3 flex-shrink-0"></div>
                                <?php echo $tip; ?>
                            </li>
                            <?php endforeach; ?>
                        </ul>

                        <!-- Read More Link -->
                        <a href="<?php echo home_url('/guides'); ?>" class="text-sunset font-semibold text-sm hover:underline group-hover:translate-x-2 transition-transform duration-300 inline-block">
                            Voir nos conseils →
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- CTA Section -->
            <div class="text-center bg-gradient-to-r from-sunset/10 to-ocean/10 rounded-2xl p-12">
                <h3 class="text-3xl font-script font-bold text-foreground mb-4">
                    Prêts pour l'aventure en famille ?
                </h3>
                <p class="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Rejoignez notre communauté de familles baroudeuses et recevez nos meilleurs conseils 
                    pour voyager avec vos enfants en toute sérénité.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="px-8 py-3 bg-gradient-ocean text-white font-semibold rounded-full hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                        Guide famille gratuit
                    </button>
                    <button class="px-8 py-3 border-2 border-sunset text-sunset font-semibold rounded-full hover:bg-sunset hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                        Rejoindre la communauté
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="py-20 bg-muted/30">
    <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
                    Qui sommes-nous ?
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Nous sommes Marion et Cris, deux baroudeurs passionnés qui ont fait du voyage 
                    leur mode de vie. Découvrez notre histoire et notre vision du voyage.
                </p>
            </div>

            <!-- Hero About -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <!-- Image -->
                <div class="order-2 lg:order-1">
                    <div class="relative">
                        <?php 
                        $couple_image = get_theme_mod('cslm_couple_image');
                        if ($couple_image) : ?>
                            <img src="<?php echo esc_url($couple_image); ?>" alt="Marion et Cris - CapSurLeMonde" class="w-full rounded-2xl shadow-elegant">
                        <?php else : ?>
                            <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Marion et Cris - CapSurLeMonde" class="w-full rounded-2xl shadow-elegant">
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Content -->
                <div class="order-1 lg:order-2">
                    <h3 class="text-3xl font-elegant font-bold text-foreground mb-6">
                        Notre histoire d'amour... avec le voyage !
                    </h3>
                    <div class="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Tout a commencé en 2016 lors d'un voyage en Asie du Sud-Est qui devait durer 3 mois... 
                            et qui nous a complètement transformés ! Nous avons découvert une passion commune pour 
                            l'aventure, les rencontres authentiques et les paysages à couper le souffle.
                        </p>
                        <p>
                            Depuis, nous n'avons jamais cessé d'explorer le monde ensemble. Notre blog est né 
                            du désir de partager nos découvertes et d'inspirer d'autres voyageurs à se lancer 
                            dans leurs propres aventures.
                        </p>
                        <p>
                            Aujourd'hui, nous continuons de voyager avec la même passion, en adaptant nos 
                            aventures à notre vie de famille, car l'exploration n'a pas d'âge !
                        </p>
                    </div>
                </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                <div class="p-6 bg-card rounded-lg text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2">
                    <div class="text-3xl font-bold text-ocean mb-2">75</div>
                    <div class="text-sm text-muted-foreground">Pays visités</div>
                </div>
                <div class="p-6 bg-card rounded-lg text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2">
                    <div class="text-3xl font-bold text-sunset mb-2">8</div>
                    <div class="text-sm text-muted-foreground">Années de voyage</div>
                </div>
                <div class="p-6 bg-card rounded-lg text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2">
                    <div class="text-3xl font-bold text-ocean mb-2">50k+</div>
                    <div class="text-sm text-muted-foreground">Lecteurs mensuels</div>
                </div>
                <div class="p-6 bg-card rounded-lg text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2">
                    <div class="text-3xl font-bold text-sunset mb-2">100+</div>
                    <div class="text-sm text-muted-foreground">Articles publiés</div>
                </div>
            </div>

            <!-- Nos valeurs -->
            <div class="mb-16">
                <h3 class="text-3xl font-script font-bold text-center text-foreground mb-12">
                    Nos valeurs
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <?php
                    $valeurs = array(
                        array('title' => 'Voyage responsable', 'description' => 'Nous privilégions un tourisme respectueux des populations locales et de l\'environnement.'),
                        array('title' => 'Partage authentique', 'description' => 'Nos récits sont vrais, sans filtre, avec les galères comme les moments magiques.'),
                        array('title' => 'Inspiration créative', 'description' => 'Nous capturons l\'essence de chaque destination pour vous faire voyager avec nous.')
                    );

                    foreach ($valeurs as $valeur) :
                    ?>
                        <div class="p-8 bg-card rounded-lg text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2">
                            <div class="mb-6">
                                <div class="w-16 h-16 bg-gradient-sand rounded-full flex items-center justify-center mx-auto">
                                    <span class="text-ocean text-2xl">❤</span>
                                </div>
                            </div>
                            <h4 class="text-xl font-elegant font-semibold text-foreground mb-4">
                                <?php echo $valeur['title']; ?>
                            </h4>
                            <p class="text-muted-foreground leading-relaxed">
                                <?php echo $valeur['description']; ?>
                            </p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Contact CTA -->
            <div class="text-center bg-gradient-ocean rounded-2xl p-12 text-white">
                <h3 class="text-3xl font-script font-bold mb-4">
                    Envie d'échanger avec nous ?
                </h3>
                <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                    Nous adorons échanger avec notre communauté ! N'hésitez pas à nous poser 
                    vos questions ou partager vos propres aventures.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="<?php echo home_url('/contact'); ?>" class="inline-block px-8 py-3 bg-white text-ocean font-semibold rounded-full hover:bg-sand transition-all duration-300 transform hover:-translate-y-1">
                        Nous contacter
                    </a>
                    <a href="#" class="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-ocean transition-all duration-300 transform hover:-translate-y-1">
                        Suivre sur Instagram
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
