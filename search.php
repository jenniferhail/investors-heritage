<?php get_header(); ?>

<section class="layout basic-content">
	<div class="wrapper">
		<h1>Search Results</h1>
		<?php get_template_part('inc/search-advanced'); ?>
		<?php if (have_posts()) : ?>
			<?php get_template_part('nav'); ?>
			<?php while (have_posts()) : the_post(); ?>
				<div <?php post_class('search-result'); ?> id="post-<?php the_ID(); ?>">
					<h2 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
					<?php get_template_part('meta'); ?>
					<div class="entry">
						<?php the_excerpt(); ?>
					</div>
				</div>
			<?php endwhile; ?>
			<?php get_template_part('nav'); ?>
		<?php else : ?>
			<h1>No results found.</h1>
		<?php endif; ?>
	</div>
</section>

<?php get_footer(); ?>
