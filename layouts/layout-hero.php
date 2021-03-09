<?php
    $bg_settings = get_sub_field('bg_settings');
    $overlap_settings = get_sub_field('overlap');
    $image = get_sub_field('image');
    $video = get_sub_field('video');

    $title = get_sub_field('title');
    $subtitle = get_sub_field('subtitle');

    if ($bg_settings == 'image') {
        $background = '<div class="background" style="background-image: url(' . $image['url'] . ');"></div>';
    } elseif ($bg_settings == 'video') {
        $background = '<video autoplay loop class="video-background" muted plays-inline> <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4"> </video>';
    } else {
        exit;
    }

    if ($overlap_settings) {
        $overlap = ' overlap-bottom';
    } else {
        $overlap = null;
    }

    $line_counter++;
    $line_id = 'border-' . $line_counter;
?>

<section id="section-<?php echo $layout_counter; ?>" class="layout hero margin-sides margin-top<?php echo $overlap; ?>">

    <div class="wrapper">

        <div class="content">

			<div class="hero-inner text-center">

				<?php if ($subtitle) : ?>

					<h1 class="hero-subtitle"><?php echo $subtitle; ?></h1>

					<div class="slide-border-effect">

						<div class="slide-border border-light-blue <?php echo $line_id; ?>" data-aos="grow" data-aos-delay="650"></div>

						<h2 class="hero-title border-title large-serif"><?php echo $title; ?></h2>

						<div class="slide-border border-light-blue" data-aos="grow" data-aos-anchor=".<?php echo $line_id; ?>" data-aos-delay="650"></div>

					</div>

				<?php else: ?>

					<div class="slide-border-effect">

						<div class="slide-border border-light-blue <?php echo $line_id; ?>" data-aos="grow" data-aos-delay="650"></div>

						<h1 class="hero-title border-title large-serif"><?php echo $title; ?></h1>

						<div class="slide-border border-light-blue" data-aos="grow" data-aos-anchor=".<?php echo $line_id; ?>" data-aos-delay="650"></div>

					</div>

	            <?php endif; ?>

				<a id="scroll-down" class="scroll-down bounce" href="#scroll-to"><span class="down-triangle"></span></a>

			</div>

        </div>

    </div>

	<?php echo $background;?>

</section>
