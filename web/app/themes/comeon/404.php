<div class="pages__wrapper">

			<?php get_template_part('templates/page', 'header'); ?>
			<div class="alert alert-warning">
				<?php _e('Sorry, but the page you were trying to view does not exist.', 'sage'); ?>
				 <a href="<?= esc_url(home_url('/')); ?>">Back to Homepage</a>
			</div>

			<?php //get_search_form(); ?>

</div>
