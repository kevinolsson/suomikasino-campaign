<div class="pages__wrapper">
  <div class="pages">
    <div class="pages__content">


<?php while (have_posts()) : the_post(); ?>
<?php
  $category = get_the_category();
  $category_name = $category[0]->cat_name;
  $category_id = get_cat_ID( $category_name );
  $category_link = get_category_link( $category_id );
?>

  <article <?php post_class(); ?>>
    <header>
      <h2 class="entry-title"><?php the_title(); ?></h2>
      <?php //get_template_part('templates/entry-meta'); ?>
    </header>
    <div class="entry-content">
      <?php the_content(); ?>
    </div>
    <hr/>
    <a href="<?php echo esc_url( $category_link ); ?>" title="Category Name">Back to <?php echo $category_name; ?></a>
    <?php //comments_template('/templates/comments.php'); ?>
  </article>


<?php endwhile; ?>




</div>
</div>
</div>