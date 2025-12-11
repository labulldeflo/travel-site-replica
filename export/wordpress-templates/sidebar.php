<?php
/**
 * Sidebar Template
 * @package CapSurLeMonde
 */

if (!is_active_sidebar('sidebar-1')) {
    return;
}
?>

<aside class="sidebar widget-area" role="complementary" aria-label="Sidebar">
    <?php dynamic_sidebar('sidebar-1'); ?>
</aside>
