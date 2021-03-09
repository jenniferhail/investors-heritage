<?php
    $table_orientation = get_sub_field('table_orientation');

    $i = '0';
    $x = '0';

    while( have_rows('dataset') ): the_row();
        $x++;
    endwhile;
?>

<div id="section-<?php echo $layout_counter; ?>" class="layout tables">
    <div class="wrapper">
        <div class="content">
            <h4><?php echo $table_orientation; ?> oriented table</h4>
            <div class="Rtable Rtable--<?php echo $x; ?>cols Rtable--collapse">

            <?php if( have_rows('dataset') ) : while( have_rows('dataset') ): the_row(); ?>

                <div class="Rtable-cell"><h5 class="heading"><?php the_sub_field('heading'); ?></h5></div>
                <?php if( have_rows('data') ) : while( have_rows('data') ): the_row(); ?>
                    <?php if ($table_orientation == 'columns') {
                        $i++;
                        $order = ' style="order: ' . $i . ';"';
                    } ?>
                    <div class="Rtable-cell"<?php echo $order; ?>><?php the_sub_field('item'); ?></div>

                <?php endwhile; $i = '0'; endif; ?>

            <?php endwhile; endif; ?>

            </div>
        </div>
    </div>
</div>
