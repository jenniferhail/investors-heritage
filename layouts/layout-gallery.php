<?php
    $display_intro = get_sub_field('display_intro');
    $title = get_sub_field('title');
    $subtitle = get_sub_field('subtitle');

    $images = get_sub_field('gallery');
    $size = 'full'; // (thumbnail, medium, large, full or custom size)
?>

<section id="section-<?php echo $layout_counter; ?>" class="layout gallery">
    <div class="wrapper">
        <div class="content<?php echo $view; ?>">

            <?php if ($display_intro): ?>
                <div class="intro">
                    <h2 class="title"><?php echo $title; ?></h2>
                    <?php if ($subtitle): ?>
                        <p class="subtitle"><?php echo $subtitle; ?></p>
                    <?php endif; ?>
                </div>
            <?php endif; ?>

            <?php if ($images): ?>
                <ul class="gallery-list">
                    <?php foreach ($images as $image): ?>
                        <li class="gallery-item" data-id="<?php echo $image['ID']; ?>" data-url="<?php echo $image['url']; ?>">
                        	<?php echo wp_get_attachment_image($image['ID'], $size); ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </div>
    </div>
</section>
