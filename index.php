<?php get_header(); ?>

	<div class="interior-page">
		<?php if (have_rows('layouts')) : ?>

			<?php 
                $line_counter = 0;
				$slide_counter = 0;
				$layout_counter = 0;
            ?>

			<?php while (have_rows('layouts')) : the_row(); $layout_counter++; ?>

				<?php $layout_type = get_row_layout(); ?>
				<?php include(locate_template('layouts/layout-' . $layout_type . '.php')); ?>

			<?php endwhile; ?>

		<?php endif; ?>
	</div>

<?php get_footer(); ?>
