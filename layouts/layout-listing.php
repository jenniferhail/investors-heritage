<?php
    $display_intro = get_sub_field('display_intro');
    $title = get_sub_field('title');
    $subtitle = get_sub_field('subtitle');

    $view = ' ' . get_sub_field('view');

    $posts = get_sub_field('select_items');
?>

<div id="section-<?php echo $layout_counter; ?>" class="layout listing">
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

            <?php if($posts): ?>
            	<ul class="select-list">
                    <?php foreach( $posts as $post): // variable must be called $post (IMPORTANT) ?>
                    <?php setup_postdata($post); ?>

                    <li class="select-item">
                        <a href="<?php the_permalink(); ?>"><h3 class="title"><?php the_title(); ?></h3></a>
            		</li>

            	   <?php endforeach; ?>
            	</ul>
                <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
            <?php endif; ?>
        </div>
    </div>
</div>
