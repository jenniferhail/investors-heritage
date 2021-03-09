<?php
    $overlap = get_sub_field('overlap');
    if ($overlap) {
        // If first card is an image, set to overlap-left
        // If second card is an image, set to overlap-right
        $overlap = ' overlap';
    }
    $section_classes = $overlap;
?>

<?php if ($overlap): ?>
	<?php if (have_rows('card')) : ?>
		<section id="section-<?php echo $layout_counter; ?>" class="layout cards full-cards<?php echo $section_classes; ?>">
		<?php $i = 1; ?>
		<?php while (have_rows('card')) : the_row(); ?>
			<?php
                if ($i == 1) {
                    $fade = 'data-aos="fade-right"';
                } elseif ($i == 2) {
                    $fade = 'data-aos="fade-left"';
                }
                $card_type = get_row_layout();
                $subtitle = get_sub_field('subtitle');
                $title = get_sub_field('title');
                $divider = get_sub_field('divider');
                $content = get_sub_field('content');
                $bg_image = get_sub_field('image');

                if ($divider) {
                    $divider_class = 'divider-dark';
                } else {
                    $divider_class = null;
                }
            ?>
			<?php if ($card_type == 'text'): ?>
				<div class="text-card wrapper">
					<div class="content">
						<ul class="grid small-grid-col large-grid-row">
							<li class="col one-half card color-bg btn-adjust">
								<div class="card-wrapper card-padding">
									<div class="card-inner">
										<?php if ($subtitle): ?>
											<h1 class="card-subtitle smallcaps"><?php echo $subtitle; ?></h1>
											<?php if ($title): ?>
												<h2 class="card-h1 h1 <?php echo $divider_class; ?>"><?php echo $title; ?></h2>
											<?php endif; ?>
										<?php else: ?>
											<?php if ($title): ?>
												<h1 class="card-h1 <?php echo $divider_class; ?>"><?php echo $title; ?></h2>
											<?php endif; ?>
										<?php endif; ?>
										<p class="copy"><?php echo $content; ?></p>
										<?php include(locate_template('layouts/component-button.php'));?>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			<?php elseif ($card_type == 'image'): ?>

				<div class="image-card three-quarters image-overlap" <?php echo $fade;?> style="background-image: url('<?php echo $bg_image['url'];?>')"></div>

			<?php endif; ?>
			<?php $i++; ?>
		<?php endwhile; ?>
		</section>
	<?php endif; ?>
<?php else: ?>
	<?php if (have_rows('card')) : ?>
		<section id="section-<?php echo $layout_counter; ?>" class="layout cards full-cards">
			<div class="wrapper">
				<ul class="grid-col small-grid-col large-grid-row">
					<?php $i = 1; ?>
					<?php while (have_rows('card')) : the_row(); ?>
						<?php
                            if ($i == 1) {
                                $fade = 'data-aos="fade-right"';
                            } elseif ($i == 2) {
                                $fade = 'data-aos="fade-left" data-aos-delay="650"';
                            }
                            $card_type = get_row_layout();
                            $subtitle = get_sub_field('subtitle');
                            $title = get_sub_field('title');
                            $divider = get_sub_field('divider');
                            $content = get_sub_field('content');
                            $image = get_sub_field('image');
                        ?>
						<?php if ($card_type == 'text'): ?>
							<li class="col one-half card" <?php echo $fade;?>>
								<div class="card-wrapper card-padding">
									<div class="card-inner">
										<?php if ($subtitle): ?>
											<h1 class="card-subtitle smallcaps"><?php echo $subtitle; ?></h1>
											<?php if ($title): ?>
												<h2 class="card-h1 h1 <?php echo $divider_class; ?>"><?php echo $title; ?></h2>
											<?php endif; ?>
										<?php else: ?>
											<?php if ($title): ?>
												<h1 class="card-h1 <?php echo $divider_class; ?>"><?php echo $title; ?></h2>
											<?php endif; ?>
										<?php endif; ?>
										<?php if ($divider):?>
											<span class="sep sep-blue"></span>
										<?php endif;?>
										<p class="copy"><?php echo $content; ?></p>
										<?php include(locate_template('layouts/component-button.php'));?>
									</div>
								</div>
							</li>
						<?php elseif ($card_type == 'image'): ?>
							<li class="col one-half card image-bg" style="background-image: url('<?php echo $image['url'];?>');" <?php echo $fade;?>>
							</li>
						<?php endif; ?>
						<?php $i++; ?>
					<?php endwhile; ?>
				</ul>
			</div>
		</section>
	<?php endif; ?>
<?php endif; ?>
