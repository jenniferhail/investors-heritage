<?php

// Getting the intro setting and title
$intro = get_sub_field('display_intro');
$intro_title = get_sub_field('intro_title');
$intro_subtitle = get_sub_field('intro_subtitle');

?>

<?php if ($intro): ?>

    <div class="intro">

		<?php if ($intro_subtitle): ?>

			<h1 class="smallcaps"><?php echo $intro_subtitle; ?></h1>

			<h2 class="sans-serif-title"><?php echo $intro_title; ?></h2>

		<?php else: ?>

			<h1 class="sans-serif-title"><?php echo $intro_title; ?></h1>

		<?php endif; ?>

    </div>

<?php endif; ?>
