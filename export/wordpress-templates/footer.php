<footer class="footer">
    <div class="footer-container">
        <div class="footer-grid">
            <div class="footer-brand">
                <div class="footer-logo">
                    <svg class="footer-logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span class="footer-logo-text">CapSurLeMonde</span>
                </div>
                <p class="footer-tagline">Prenez-en plein les mirettes : guides et destinations pour voyageurs</p>
                <div class="footer-social">
                    <?php
                    $social_links = cslm_get_social_links();
                    if ($social_links['facebook']) :
                    ?>
                        <a href="<?php echo esc_url($social_links['facebook']); ?>" class="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                    <?php endif; ?>
                    
                    <?php if ($social_links['instagram']) : ?>
                        <a href="<?php echo esc_url($social_links['instagram']); ?>" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                    <?php endif; ?>
                    
                    <?php if ($social_links['youtube']) : ?>
                        <a href="<?php echo esc_url($social_links['youtube']); ?>" class="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
                            </svg>
                        </a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="footer-links-group">
                <h4 class="footer-title">Navigation</h4>
                <ul class="footer-links">
                    <li><a href="<?php echo home_url('/'); ?>">Accueil</a></li>
                    <li><a href="<?php echo home_url('/destinations'); ?>">Destinations</a></li>
                    <li><a href="<?php echo home_url('/guides'); ?>">Guides</a></li>
                    <li><a href="<?php echo home_url('/tests'); ?>">Tests Matériel</a></li>
                </ul>
            </div>

            <div class="footer-links-group">
                <h4 class="footer-title">Ressources</h4>
                <ul class="footer-links">
                    <li><a href="<?php echo home_url('/blog'); ?>">Blog</a></li>
                    <li><a href="<?php echo home_url('/guides'); ?>">Guides Pratiques</a></li>
                    <li><a href="<?php echo home_url('/#about'); ?>">À Propos</a></li>
                    <li><a href="<?php echo home_url('/contact'); ?>">Contact</a></li>
                </ul>
            </div>

            <div class="footer-links-group">
                <h4 class="footer-title">Légal</h4>
                <ul class="footer-links">
                    <li><a href="<?php echo home_url('/mentions-legales'); ?>">Mentions Légales</a></li>
                    <li><a href="<?php echo home_url('/politique-confidentialite'); ?>">Politique de Confidentialité</a></li>
                    <li><a href="<?php echo home_url('/cgv'); ?>">CGV</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> CapSurLeMonde. Tous droits réservés.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
