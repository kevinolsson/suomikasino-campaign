<article class="post-block">
  <header class="header">
    <!-- TODO: No links if you're ont he page already -->
    <h6 class="header--left-aligned"><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h6>
  </header>
  <div class="content">
    <?php the_excerpt (); ?>
  </div>
</article>
