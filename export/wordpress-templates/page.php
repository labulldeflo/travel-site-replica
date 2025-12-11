<?php get_header(); ?>

<main class="main-content">
    <?php while (have_posts()) : the_post(); ?>
        <article class="page-content">
            <div class="page-header">
                <div class="container">
                    <h1 class="page-title"><?php the_title(); ?></h1>
                </div>
            </div>

            <div class="container py-12">
                <div class="prose mx-auto">
                    <?php the_content(); ?>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
