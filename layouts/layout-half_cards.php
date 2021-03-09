<section id="section-<?php echo $layout_counter; ?>" class="layout cards half-cards">

    <div class="wrapper">

        <div class="content">

			<?php
                $count = count(get_sub_field('card'));
                $card_size = get_sub_field('card_size');
            ?>

            <?php if (have_rows('card')):?>

            	<ul class="card-list grid-col large-grid-row">

				<?php $i = 1; ?>

            	<?php while (have_rows('card')): the_row();?>

					<?php
                        $bg_image = get_sub_field('background_image');
                        $fg_image = get_sub_field('foreground_image');
                    ?>

					<?php
                    // If there are exactly two cards, add aos effects
                    if ($count == 2) {
                        if ($i == 1) {
                            $fade = 'data-aos="fade-right" data-aos-anchor-placement="top-bottom"';
                            $draw = 'data-aos="draw-from-right"';
                        } elseif ($i == 2) {
                            $fade = 'data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="650"';
                            $draw = 'data-aos="draw-from-left"';
                        }
                    } else {
                        $fade = null;
                        $draw = null;
                    }
                    ?>

					<li class="col card <?php echo $card_size; ?> card-count-<?php echo $count; ?>" <?php echo $fade; ?>>

						<div class="card-wrapper">

							<?php if(isset($bg_image['url'])) : ?>
								<?php if ($fg_image['url']): ?>
									<div class="card-image" <?php echo $draw; ?> style="background-image: url('<?php echo $bg_image['url']; ?>');" alt="<?php echo $bg_image['alt']; ?>">
										<img class="card-image-front" src="<?php echo $fg_image['url']; ?>" alt="<?php echo $fg_image['alt']; ?>">
									</div>
								<?php else: ?>
									<div class="card-image" <?php echo $draw; ?>>
										<img class="card-image-front" src="<?php echo $bg_image['url']; ?>" alt="<?php echo $bg_image['alt']; ?>">
									</div>
								<?php endif; ?>
							<?php endif; ?>

							<div class="card-inner card-padding">

								<?php if (have_rows('content_block')): ?>

									<?php $j = 1; ?>

									<?php while (have_rows('content_block')) : the_row(); ?>

										<?php
                                            $content_type = get_row_layout();

                                            $subtitle = get_sub_field('subtitle');
                                            $title = get_sub_field('title');
                                            $divider = get_sub_field('divider');
                                            $content = get_sub_field('card_content');

                                            if ($divider) {
                                                $divider_class = 'divider-dark';
                                            } else {
                                                $divider_class = null;
                                            }
                                        ?>

										<?php if ($content_type == 'subtitle' && $j == 1): ?>

											<?php if ($subtitle): ?>

												<h1 class="card-subtitle smallcaps"><?php echo $subtitle; ?></h1>

											<?php endif; ?>

										<?php elseif ($content_type == 'subtitle'): ?>

											<?php if ($subtitle): ?>

												<h2 class="card-subtitle smallcaps"><?php echo $subtitle; ?></h2>

											<?php endif; ?>

										<?php elseif ($content_type == 'title' && $j == 1): ?>

											<?php if ($title): ?>

												<h1 class="card-title h2"><?php echo $title; ?></h1>

											<?php endif; ?>

										<?php elseif ($content_type == 'title'): ?>

											<?php if ($title): ?>

												<h2 class="card-title"><?php echo $title; ?></h2>

											<?php endif; ?>

										<?php elseif ($content_type == 'text'): ?>

											<?php if ($content): ?>

												<p class="copy <?php echo $divider_class; ?>"><?php echo $content; ?></p>

											<?php endif; ?>

										<?php elseif ($content_type == 'button'): ?>

											<?php include(locate_template('layouts/component-button.php'));?>

										<?php endif; ?>

										<?php $j++; ?>

									<?php endwhile; ?>

								<?php endif; ?>

							</div>

						</div>

					</li>

					<?php $i++; ?>

            	<?php endwhile;?>

            	</ul>

            <?php endif;?>

        </div>

    </div>

</section>
