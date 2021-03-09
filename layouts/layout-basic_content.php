<?php
    $subtitle = get_sub_field('subtitle');
    $title = get_sub_field('title');
?>

<section id="section-<?php echo $layout_counter; ?>" class="layout basic-content">

	<div class="wrapper">

		<div class="content">

			<?php if ($subtitle): ?>
				<div class="intro">
					<h1 class="smallcaps"><?php echo $subtitle; ?></h1>
					<?php if ($title): ?>
						<h2 class="sans-serif-title divider-light"><?php echo $title; ?></h2>
					<?php endif; ?>
				</div>
			<?php else: ?>
				<?php if ($title): ?>
					<div class="intro">
						<h1 class="sans-serif-title divider-light"><?php echo $title; ?></h1>
					</div>
				<?php endif; ?>
			<?php endif; ?>

			<?php if (have_rows('basic_content')) : ?>

				<?php while (have_rows('basic_content')) : the_row(); ?>

					<?php
                        $content_type = get_row_layout();

                        // One Column
                        $content = get_sub_field('content');

                        // Two Column
                        $column_balance = get_sub_field('column_balance');
						$column_align_items = get_sub_field('column_align_items');
						$left_content = get_sub_field('left_content');
						$center_content = get_sub_field('center_content');
						$right_content = get_sub_field('right_content');
						$last_content = get_sub_field('last_content');
                    ?>

					<?php if ($content_type == 'one_column'): ?>
					<!-- One Column Basic Content Block -->

						<div class="copy">

							<?php echo $content; ?>

						</div>

					<?php elseif ($content_type == 'two_column'): ?>
					<!-- Two Column Basic Content Block -->

						<div class="copy <?php echo $column_balance; ?> <?php echo $column_align_items; ?>">

							<div class="copy--first">
								<?php echo $left_content; ?>
							</div>

							<div class="copy--second">
								<?php echo $right_content; ?>
							</div>

						</div>

					<?php elseif ($content_type == 'three_column'): ?>
					<!-- Three Column Basic Content Block -->

						<div class="copy <?php echo $column_balance; ?> <?php echo $column_align_items; ?>">

							<div class="copy--first">
								<?php echo $left_content; ?>
							</div>

							<div class="copy--second">
								<?php echo $center_content; ?>
							</div>

							<div class="copy--third">
								<?php echo $right_content; ?>
							</div>							

						</div>

					<?php elseif ($content_type == 'four_column'): ?>
					<!-- Four Column Basic Content Block -->

						<div class="copy <?php echo $column_balance; ?> <?php echo $column_align_items; ?>">

							<div class="copy--first">
								<?php echo $left_content; ?>
							</div>

							<div class="copy--second">
								<?php echo $center_content; ?>
							</div>

							<div class="copy--third">
								<?php echo $right_content; ?>
							</div>

							<div class="copy--fourth">
								<?php echo $last_content; ?>
							</div>							

					</div>												

					<?php elseif ($content_type == 'button'): ?>
					<!-- Button Basic Content Block -->

						<?php include(locate_template('layouts/component-button.php'));?>

					<?php endif; ?>

				<?php endwhile; ?>

			<?php endif; ?>

		</div>

	</div>

</section>
