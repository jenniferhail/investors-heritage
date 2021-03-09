<?php
/* Template Name: Gated Form */
get_header();

?>

<section class="layout basic-content">
	<div class="wrapper">
		<div class="content">
			<!-- <div style="padding: 200px;"> -->
				<?php echo do_shortcode('[gravityforms id=1]'); ?>
			<!-- </div> -->
		</div>
	</div>
</section>

<?php get_footer(); ?>
