<?php

$args = array(
    'post_type'        => 'post',
    'posts_per_page'   => 10,
);

$the_query = new WP_Query( $args );

?>

<?php if ( $the_query->have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

<?php endwhile; ?>

<?php wp_reset_postdata(); ?>

<?php endif; ?>
