<?php
/* Template Name: Contact Page */
get_header();

$intro_title = get_field('intro_title');
$intro_subtitle = get_field('intro_subtitle');

?>

<div class="interior-page">
	<section class="layout map">
		<div class="wrapper">
			<div class="content">
				<div class="intro">
					<?php if ($intro_subtitle): ?>
						<h1 class="smallcaps"><?php echo $intro_subtitle; ?></h1>
						<h2 class="sans-serif-title"><?php echo $intro_title; ?></h2>
					<?php else: ?>
						<h1 class="sans-serif-title"><?php echo $intro_title; ?></h1>
					<?php endif; ?>
			    </div>
				<div class="grid-col large-grid-row">

					<?php if (have_rows('contact_info')): ?>
		            	<div class="col info">
		            	<?php while (have_rows('contact_info')): the_row(); ?>

							<?php
                                $info_title = get_sub_field('title');
                                $info_content = get_sub_field('content');
                                $address = get_sub_field('address');
                                $map_pin = get_sub_field('map_pin');

                                if ($map_pin && $address) {
                                    $lat = $address['lat'];
                                    $lng = $address['lng'];
                                    $add_pin = ' location';
                                } else {
                                    $lat = null;
                                    $lng = null;
                                    $add_pin = null;
                                }
                            ?>

							<div class="copy<?php echo $add_pin; ?>" data-lat="<?php echo $lat; ?>" data-lng="<?php echo $lng; ?>">
								<?php if ($info_title): ?>
									<h2 class="smallcaps"><?php echo $info_title; ?></h2>
								<?php endif; ?>
								<?php if ($info_content): ?>
									<?php echo $info_content; ?>
								<?php endif; ?>
							</div>

						<?php endwhile; ?>
						</div>
					<?php endif; ?>

					<div class="col map" id="ih-map">
					</div>
				</div>
			</div>
		</div>
	</section>

	<?php if (have_rows('layouts')) : ?>
		<?php $line_counter = 0; ?>
		<?php while (have_rows('layouts')) : the_row(); ?>
			<?php $layout_type = get_row_layout(); ?>
			<?php include(locate_template('layouts/layout-' . $layout_type . '.php')); ?>
		<?php endwhile; ?>
	<?php endif; ?>
</div>

<?php get_footer(); ?>
