 <header class="navigation">
   <a href="<?= esc_url(home_url('/')); ?>" class="navigation__logo">
      <img alt="<?php bloginfo('name'); ?>" src="<?php bloginfo('stylesheet_directory'); ?>/dist/images/logo@2x.png"/>
   </a>
   <div class="navigation__menu">
      <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'navigation__menu--ul']);
      endif;
      ?>
   </div>
 </header>