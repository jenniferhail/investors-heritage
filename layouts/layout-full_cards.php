<?php $line_counter++; ?>

<section id="section-<?php echo $layout_counter; ?>" class="layout cards full-cards">

  <div class="wrapper">

	<div class="content">

		<?php $push_down = get_sub_field('push_down'); ?>

		<?php if (have_rows('card')):?>

			<ul class="grid-col large-grid-row step-layout <?php echo $push_down; ?>">

			<?php $i = 1; ?>

			<?php while (have_rows('card')): the_row();?>

				<?php
                    $title = get_sub_field('title');
                    $divider = get_sub_field('divider');
                    $content = get_sub_field('card_content');
                    $bg_type = get_sub_field('background_type');
                    $bg_image = get_sub_field('background_image');
                    $show_slider = get_sub_field('show_slider');

                    if ($divider && $bg_type == 'color' && $show_slider) {
                        $divider_class = 'divider-dark';
                    } else {
                        $divider_class = null;
                    }

                    $line_id = 'border-' . $line_counter;
                ?>

				<?php if ($i == 1) {
                    $fade = 'data-aos="fade-right"';
                    $hover = ' hover-shift-right';
                // $hover = null;
                } elseif ($i == 2) {
                    $fade = 'data-aos="fade-left" data-aos-delay="650"';
                    $hover = ' hover-shift-left';
                    // $hover = null;
                } ?>

				<?php if ($bg_type == 'image') : ?>

					<li class="col one-half card image-bg screen <?php echo $hover; ?>" style="background-image: url('<?php echo $bg_image['url']; ?>');" <?php echo $fade;?>>

				<?php elseif ($bg_type == 'color') : ?>

					<?php if ($show_slider) : ?>

						<li class="col one-half card card-slider<?php echo $hover; ?>" <?php echo $fade;?>>

					<?php else : ?>

						<li class="col one-half card color-bg center<?php echo $hover; ?>" <?php echo $fade;?>>

					<?php endif; ?>

                <?php endif; ?>

					<div class="card-wrapper">

						<div class="card-inner">

							<?php if ($title) : ?>

								<?php if ($bg_type == 'color' && $show_slider == false) : ?>

									<div class="slide-border-effect">

			                            <div class="slide-border border-white <?php echo $line_id; ?>" data-aos="grow" data-aos-anchor-placement="top-bottom"></div>

			                                <h1 class="border-title cushion-top-bottom card-h1"><?php echo $title; ?></h1>

			                            <div class="slide-border border-white" data-aos="grow" data-aos-anchor=".<?php echo $line_id; ?>" data-aos-anchor-placement="top-bottom"></div>

			                        </div>

								<?php else : ?>

									<?php if ($title): ?>
										<h2 class="card-h1 <?php echo $divider_class; ?>"><?php echo $title; ?></h2>
									<?php endif; ?>

								<?php endif; ?>

							<?php endif; ?>

							<?php if ($bg_type == 'image' && $content) : ?>

								<p class="copy"><?php echo $content; ?></p>

							<?php endif; ?>

							<?php if ($bg_type == 'color' && $show_slider) : ?>
								<?php $slide_counter++; ?>
								<?php $posts = get_sub_field('slider'); ?>
								<?php if ($posts): ?>
									<div class="glide-<?php echo $slide_counter; ?> slide-list">
										<div class="glide__track" data-glide-el="track">
											<ul class="glide__slides">
										    <?php foreach ($posts as $post): // variable must be called $post (IMPORTANT)?>
									        <?php setup_postdata($post); ?>
									        <?php
                                                $member_date = get_field('membership_year');
                                                $funeral_home = get_field('funeral_home');
                                                $member_location = get_field('location');
                                                $image_url = get_the_post_thumbnail_url($post->ID, 'medium');
                                            ?>

												<li class="glide__slide testimonial">
													<div class="excerpt">
														<?php the_content(); ?>
													</div>
													<div class="credit">
														<div class="col round-img">
															<img class="member-photo" src="<?php echo $image_url; ?>" alt="<?php the_title(); ?><?php if ($member_location): ?> of <?php echo $member_location; ?>.<?php endif; ?><?php if ($member_date): ?> A member since <?php echo $member_date; ?>.<?php endif; ?>">
														</div>
														<div class="col member-info">
															<p><?php the_title(); ?><?php if ($member_location): ?> | <?php echo $member_location; ?><?php endif; ?></p>
															<?php if ($funeral_home): ?><p><?php echo $funeral_home; ?></p><?php endif; ?>
															<?php if ($member_date): ?><p><i>IH Family Member since <?php echo $member_date; ?></i></p><?php endif; ?>
														</div>
													</div>
												</li>

											<?php endforeach; ?>
											</ul>
										</div>
										<div class="glide__arrows" data-glide-el="controls">
											<button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
											<button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
										</div>
									</div>
									<?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly?>
								<?php endif; ?>
							<?php endif; ?>
							<?php include(locate_template('layouts/component-button.php'));?>
						</div>
					</div>
				</li>

				<?php $i++; ?>

			<?php endwhile; ?>

			</ul>

		<?php endif; ?>

	</div>

  </div>

</section>
