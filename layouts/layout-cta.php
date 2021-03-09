<?php
    $image = get_sub_field('image');
    $image_id = $image['ID'];
    $image_url = $image['url'];
    $image_alt = $image['alt'];
    $image_large = $image['sizes']['large'];

    $subtitle = get_sub_field('subtitle');
    $title = get_sub_field('title');

    $columns = get_sub_field('two_columns');
    $content = get_sub_field('content');
    $content_2 = get_sub_field('second_column_content');

    if ($columns) {
        $column_balance = get_sub_field('column_balance');
    } else {
        $column_balance = null;
    }

    $line_counter++;
    $line_id = 'border-' . $line_counter;
?>

<section id="section-<?php echo $layout_counter; ?>" class="layout cta cta-parallax">

	<div class="bg-img rellax" style="background-image: url('<?php echo $image_url; ?>');"></div>

	<div class="wrapper">

		<div class="content">

			<div class="cta-inner">

				<div class="intro">
					
					<?php if ($subtitle): ?>
						<h1 class="cta-subtitle smallcaps"><?php echo $subtitle;?></h1>
					<?php endif; ?>

					<div class="slide-border-effect">

						<div class="slide-border border-light-blue <?php echo $line_id; ?>" data-aos="grow" data-aos-anchor-placement="center-center"></div>

						<h2 class="cta-title border-title large-serif"><?php echo $title;?></h2>

						<div class="slide-border border-light-blue" data-aos="grow" data-aos-anchor=".<?php echo $line_id; ?>" data-aos-anchor-placement="center-center"></div>

					</div>

				</div>

				<div class="copy <?php echo $column_balance; ?>">

					<div class="copy--first">
						<?php echo $content; ?>
					</div>

					<?php if ($columns): ?>
						<div class="copy--second">
							<?php echo $content_2; ?>
						</div>
					<?php endif; ?>

				</div>

				<?php include(locate_template('layouts/component-button.php'));?>

			</div>

		</div>

	</div>

</section>
