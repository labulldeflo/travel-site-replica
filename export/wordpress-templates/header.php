<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="header-nav">
    <div class="container-nav">
        <a href="<?php echo home_url('/'); ?>" class="logo-link">
            <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span class="logo-text">CapSurLeMonde</span>
        </a>
        
        <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Menu">
            <svg class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>

        <nav class="main-nav" id="main-nav">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'main-menu',
                'container' => false,
                'menu_class' => 'nav-links',
                'fallback_cb' => function() {
                    echo '<ul class="nav-links">
                        <li><a href="' . home_url('/') . '">Accueil</a></li>
                        <li><a href="' . home_url('/destinations') . '">Destinations</a></li>
                        <li><a href="' . home_url('/guides') . '">Guides</a></li>
                        <li><a href="' . home_url('/tests') . '">Tests Matériel</a></li>
                        <li><a href="' . home_url('/#about') . '">À Propos</a></li>
                    </ul>';
                }
            ));
            ?>
        </nav>
    </div>
</header>

<script>
document.getElementById('mobile-menu-toggle')?.addEventListener('click', function() {
    document.getElementById('main-nav')?.classList.toggle('active');
});
</script>
