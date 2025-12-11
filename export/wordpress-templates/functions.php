<?php
/**
 * CapSurLeMonde Theme Functions
 * 
 * @package CapSurLeMonde
 * @version 1.0.0
 */

// Security: Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme Constants
define('CSLM_VERSION', '1.0.0');
define('CSLM_THEME_DIR', get_template_directory());
define('CSLM_THEME_URI', get_template_directory_uri());

/**
 * Custom Post Types
 */
function cslm_create_custom_post_types() {
    // Destinations CPT
    register_post_type('destination', array(
        'labels' => array(
            'name' => 'Destinations',
            'singular_name' => 'Destination',
            'add_new' => 'Ajouter destination',
            'add_new_item' => 'Ajouter nouvelle destination',
            'edit_item' => 'Modifier destination',
            'new_item' => 'Nouvelle destination',
            'view_item' => 'Voir destination',
            'search_items' => 'Chercher destinations',
            'not_found' => 'Aucune destination trouvée',
            'menu_name' => 'Destinations'
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-location-alt',
        'rewrite' => array('slug' => 'destinations'),
        'taxonomies' => array('category', 'post_tag')
    ));

    // Guides CPT
    register_post_type('guide', array(
        'labels' => array(
            'name' => 'Guides',
            'singular_name' => 'Guide',
            'add_new' => 'Ajouter guide',
            'menu_name' => 'Guides'
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-book-alt',
        'rewrite' => array('slug' => 'guides'),
        'taxonomies' => array('category', 'post_tag')
    ));

    // Tests CPT
    register_post_type('test', array(
        'labels' => array(
            'name' => 'Tests Matériel',
            'singular_name' => 'Test',
            'add_new' => 'Ajouter test',
            'menu_name' => 'Tests'
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-clipboard',
        'rewrite' => array('slug' => 'tests'),
        'taxonomies' => array('category', 'post_tag')
    ));
}
add_action('init', 'cslm_create_custom_post_types');

// ACF Fields
function cslm_add_acf_fields() {
    if(function_exists('acf_add_local_field_group')) {
        // Destination Fields
        acf_add_local_field_group(array(
            'key' => 'group_destinations',
            'title' => 'Informations Destination',
            'fields' => array(
                array(
                    'key' => 'field_duration',
                    'label' => 'Durée',
                    'name' => 'duration',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_travelers',
                    'label' => 'Nb Voyageurs',
                    'name' => 'travelers',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_budget',
                    'label' => 'Budget',
                    'name' => 'budget',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_highlights',
                    'label' => 'Points forts',
                    'name' => 'highlights',
                    'type' => 'textarea',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'destination',
                    ),
                ),
            ),
        ));

        // Test Product Fields
        acf_add_local_field_group(array(
            'key' => 'group_tests',
            'title' => 'Informations Produit',
            'fields' => array(
                array(
                    'key' => 'field_rating',
                    'label' => 'Note',
                    'name' => 'rating',
                    'type' => 'number',
                    'min' => 0,
                    'max' => 5,
                    'step' => 0.1,
                ),
                array(
                    'key' => 'field_price',
                    'label' => 'Prix',
                    'name' => 'price',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_affiliate_link',
                    'label' => 'Lien Affilié',
                    'name' => 'affiliate_link',
                    'type' => 'url',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'test',
                    ),
                ),
            ),
        ));
    }
}
add_action('acf/init', 'cslm_add_acf_fields');

// Theme Support
function cslm_theme_setup() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register Navigation Menus
    register_nav_menus(array(
        'main-menu' => 'Menu Principal',
        'footer-menu' => 'Menu Pied de Page'
    ));
}
add_action('after_setup_theme', 'cslm_theme_setup');

// Enqueue Styles and Scripts
function cslm_enqueue_styles() {
    // Main stylesheet
    wp_enqueue_style('cslm-style', get_stylesheet_uri(), array(), CSLM_VERSION);
    
    // Design system CSS
    wp_enqueue_style('cslm-design-system', CSLM_THEME_URI . '/css/design-system.css', array(), CSLM_VERSION);
    
    // Theme JavaScript
    wp_enqueue_script('cslm-scripts', CSLM_THEME_URI . '/js/theme.js', array(), CSLM_VERSION, true);
    
    // Localize script for AJAX
    wp_localize_script('cslm-scripts', 'cslm_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('cslm_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'cslm_enqueue_styles');

/**
 * Register Widget Areas
 */
function cslm_widgets_init() {
    // Sidebar
    register_sidebar(array(
        'name'          => 'Sidebar',
        'id'            => 'sidebar-1',
        'description'   => 'Barre latérale principale',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    // Footer widgets
    for ($i = 1; $i <= 4; $i++) {
        register_sidebar(array(
            'name'          => sprintf('Footer %d', $i),
            'id'            => sprintf('footer-%d', $i),
            'description'   => sprintf('Zone de widget pied de page %d', $i),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h4 class="widget-title">',
            'after_title'   => '</h4>',
        ));
    }
}
add_action('widgets_init', 'cslm_widgets_init');

/**
 * Custom Excerpt Length
 */
function cslm_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'cslm_excerpt_length');

/**
 * Custom Excerpt More
 */
function cslm_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'cslm_excerpt_more');

/**
 * Custom Image Sizes
 */
function cslm_image_sizes() {
    add_image_size('destination-thumbnail', 800, 600, true);
    add_image_size('hero-image', 1920, 1080, true);
    add_image_size('guide-thumbnail', 600, 450, true);
    add_image_size('test-thumbnail', 500, 500, true);
}
add_action('after_setup_theme', 'cslm_image_sizes');

/**
 * Add Featured Image Column to Admin
 */
function cslm_add_thumbnail_column($columns) {
    $columns['thumbnail'] = 'Image';
    return $columns;
}
add_filter('manage_destination_posts_columns', 'cslm_add_thumbnail_column');
add_filter('manage_guide_posts_columns', 'cslm_add_thumbnail_column');
add_filter('manage_test_posts_columns', 'cslm_add_thumbnail_column');

function cslm_display_thumbnail_column($column, $post_id) {
    if ('thumbnail' === $column) {
        $thumbnail = get_the_post_thumbnail($post_id, array(80, 80));
        echo $thumbnail ? $thumbnail : '—';
    }
}
add_action('manage_destination_posts_custom_column', 'cslm_display_thumbnail_column', 10, 2);
add_action('manage_guide_posts_custom_column', 'cslm_display_thumbnail_column', 10, 2);
add_action('manage_test_posts_custom_column', 'cslm_display_thumbnail_column', 10, 2);

/**
 * Security: Remove WordPress version
 */
remove_action('wp_head', 'wp_generator');

/**
 * Security: Disable XML-RPC
 */
add_filter('xmlrpc_enabled', '__return_false');

/**
 * Performance: Defer JavaScript loading
 */
function cslm_defer_scripts($tag, $handle) {
    if (is_admin()) {
        return $tag;
    }
    return str_replace(' src', ' defer src', $tag);
}
add_filter('script_loader_tag', 'cslm_defer_scripts', 10, 2);

/**
 * SEO: Add Open Graph Meta Tags
 */
function cslm_add_og_tags() {
    if (is_singular()) {
        global $post;
        
        echo '<meta property="og:title" content="' . esc_attr(get_the_title()) . '" />' . "\n";
        echo '<meta property="og:type" content="article" />' . "\n";
        echo '<meta property="og:url" content="' . esc_url(get_permalink()) . '" />' . "\n";
        
        if (has_post_thumbnail()) {
            $thumbnail = wp_get_attachment_image_src(get_post_thumbnail_id(), 'large');
            echo '<meta property="og:image" content="' . esc_url($thumbnail[0]) . '" />' . "\n";
        }
        
        if (has_excerpt()) {
            echo '<meta property="og:description" content="' . esc_attr(get_the_excerpt()) . '" />' . "\n";
        }
        
        echo '<meta property="og:site_name" content="' . esc_attr(get_bloginfo('name')) . '" />' . "\n";
    }
}
add_action('wp_head', 'cslm_add_og_tags');

/**
 * Breadcrumbs
 */
function cslm_breadcrumbs() {
    if (is_front_page()) {
        return;
    }
    
    $separator = ' › ';
    $home_title = 'Accueil';
    
    echo '<nav class="breadcrumbs" aria-label="Breadcrumb">';
    echo '<a href="' . home_url('/') . '">' . $home_title . '</a>' . $separator;
    
    if (is_category() || is_single()) {
        the_category(', ');
        if (is_single()) {
            echo $separator;
            the_title();
        }
    } elseif (is_page()) {
        echo get_the_title();
    } elseif (is_search()) {
        echo 'Résultats de recherche pour "' . get_search_query() . '"';
    } elseif (is_404()) {
        echo 'Erreur 404';
    }
    
    echo '</nav>';
}

/**
 * Sanitize SVG uploads
 */
function cslm_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cslm_mime_types');

/**
 * Theme Customizer
 */
function cslm_customize_register($wp_customize) {
    // Social Media Section
    $wp_customize->add_section('cslm_social_media', array(
        'title'    => 'Réseaux Sociaux',
        'priority' => 30,
    ));
    
    // Facebook
    $wp_customize->add_setting('cslm_facebook', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('cslm_facebook', array(
        'label'   => 'Facebook URL',
        'section' => 'cslm_social_media',
        'type'    => 'url',
    ));
    
    // Instagram
    $wp_customize->add_setting('cslm_instagram', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('cslm_instagram', array(
        'label'   => 'Instagram URL',
        'section' => 'cslm_social_media',
        'type'    => 'url',
    ));
    
    // YouTube
    $wp_customize->add_setting('cslm_youtube', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('cslm_youtube', array(
        'label'   => 'YouTube URL',
        'section' => 'cslm_social_media',
        'type'    => 'url',
    ));
    
    // About Section
    $wp_customize->add_section('cslm_about', array(
        'title'    => 'Section À Propos',
        'priority' => 35,
    ));
    
    $wp_customize->add_setting('cslm_about_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'cslm_about_image', array(
        'label'   => 'Image À Propos',
        'section' => 'cslm_about',
    )));
}
add_action('customize_register', 'cslm_customize_register');

/**
 * Admin: Custom CSS
 */
function cslm_admin_styles() {
    echo '<style>
        .column-thumbnail img {
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
    </style>';
}
add_action('admin_head', 'cslm_admin_styles');

/**
 * Get Social Media Links
 */
function cslm_get_social_links() {
    return array(
        'facebook' => get_theme_mod('cslm_facebook', ''),
        'instagram' => get_theme_mod('cslm_instagram', ''),
        'youtube' => get_theme_mod('cslm_youtube', ''),
    );
}
?>