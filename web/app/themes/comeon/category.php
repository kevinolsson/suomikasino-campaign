<?php use Roots\Sage\Titles; ?>

<!-- <div class="page-header">
  <h1><?php single_cat_title(); ?></h1>
</div>

-->

<div class="pages__wrapper --posts">
  <main class="posts-list">
    <?php if (!have_posts()) : ?>
      <?php get_template_part('templates/page', 'header'); ?>
      <div class="alert alert-warning">
        <?php _e('Sorry, but this category does not contain any posts.', 'sage'); ?>
         <a href="<?= esc_url(home_url('/')); ?>">Back to Homepage</a>
      </div>
    <?php endif; ?>

  <?php if(have_posts()) { ?>    
    <div class="pages">
      <div class="pages__content">
        <?php get_template_part('templates/page', 'header'); ?>
        <?php while (have_posts()) : the_post(); ?>
          <?php get_template_part('templates/post-block'); ?>
          <?php if( ($wp_query->current_post + 1) < ($wp_query->post_count) ) { ?>
          <hr>
          <?php } ?>
        <?php endwhile; ?>
      </div>
    </div>
    <?php } ?>



    <div class="pagination-links">
      <?php posts_nav_link(' ', 'Newer', 'Older'); ?>
    </div>



  </main>

</div>