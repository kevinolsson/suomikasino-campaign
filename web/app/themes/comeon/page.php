<div class="pages__wrapper">
	<div class="pages">
		<div class="pages__content">
			<?php while (have_posts()) : the_post(); ?>
				<?php get_template_part('templates/page', 'header'); ?>
				<?php get_template_part('templates/content', 'page'); ?>
			<?php endwhile; ?>
		</div>
	</div>
</div>
