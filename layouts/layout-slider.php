<div id="section-<?php echo $layout_counter; ?>" class="layout slider">
    <div class="wrapper">
        <div class="content">

            <?php if( have_rows('slide') ): ?>
            	<ul class="slide-list">
            	<?php while( have_rows('slide') ): the_row(); ?>

                    <?php
                        $image = get_sub_field('image');

                        $image_id = $image['ID'];
                        $image_url = $image['url'];
                        $image_alt = $image['alt'];
                        $image_large = $image['sizes']['large'];
                    ?>

            		<li class="slide">
                        <div class="slide-content">
                            <h3 class="title"><?php the_sub_field('title'); ?></h3>
                            <?php the_sub_field('content'); ?>
                            <?php include(locate_template('layouts/component-button.php')); ?>
                        </div>
                        <div class="image">
                            <img <?php acf_responsive_image($image_id, $image_large, '1600px'); ?>  alt="<?php echo $image_alt; ?>" />
                        </div>
            		</li>

            	<?php endwhile; ?>
            	</ul>
            <?php endif; ?>

        </div>
    </div>
</div>
