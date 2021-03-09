<section id="section-<?php echo $layout_counter; ?>" class="layout accordion">

    <div class="wrapper">
        <div class="content">

			<?php //Display the intro if selected?>
		    <?php include(locate_template('layouts/component-intro.php')); ?>

			<?php if (have_rows('acc_group')): ?>
				<ul class="acc-list">
            	<?php while (have_rows('acc_group')): the_row(); ?>

					<?php
                        $acc_type = get_row_layout();

                        $title = get_sub_field('title');
                        $subtitle = get_sub_field('subtitle');
                    ?>

					<?php if ($acc_type == 'acc_section'): ?>

						<li class="acc-section acc-item">
							<h3 class="acc-section-title"><?php echo $title; ?></h3>
						</li>

					<?php elseif ($acc_type == 'acc_item'): ?>

						<li class="acc-item">
							<div class="title">
								<div class="title-left">
									<h3 class="acc-title"><?php echo $title; ?></h3>
									<span class="acc-subtitle"><?php echo $subtitle; ?></span>
								</div>
								<div class="title-right">
									<span class="acc-toggle">More</span>
								</div>
							</div>
	                        <div class="acc-content">
	                            <div class="acc-content-wrapper">
	                                <?php the_sub_field('content'); ?>
	                                <?php include(locate_template('layouts/component-button.php')); ?>
	                            </div>
	                        </div>
	            		</li>

					<?php endif; ?>

				<?php endwhile; ?>
				</ul>
			<?php endif; ?>

        </div>
    </div>
</section>
