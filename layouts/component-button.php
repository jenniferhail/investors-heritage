<?php $display_btn = get_sub_field('display_button'); ?>
<?php $stack_btn = get_sub_field('stack_buttons'); ?>

<?php if ($display_btn): ?>

	<?php if (have_rows('button')) : ?>

	    <div class="buttons<?php echo ($stack_btn) ? ' buttons-stacked' : ''; ?>">

	    <?php while (have_rows('button')) : the_row(); ?>
	        <?php
                $link = get_sub_field('link');
                $gated = get_sub_field('gated');
				$pardot_handler = get_sub_field('pardot_handler');
                if ($link) {
                    $link_url = $link['url'];
                    $link_title = $link['title'];
                    $link_target = $link['target'];

                    if ($link_target == null) {
                        $link_target = '_self';
                    }

                    if ($gated) {
                        // data-micromodal-trigger="modal-1"
                        $resource_url = base64_encode($link_url);
                        $link_url = '/access?resource_url=' . $resource_url;
						if($pardot_handler && $pardot_handler != ''){
							$link_url .= '&pardot_handler=' . urlencode($pardot_handler);
						}
                    }

                    echo '<a href="' . $link_url . '" target="' . $link_target . '" class="btn cta-btn smallcaps"><span class="side-top-border"></span>' . $link_title . '<span class="right-triangle"></span><span class="side-bottom-border"></span></a>';
                }
            ?>

			<!-- Let's detect if this has gated content turned on. -->
			<!-- If so, figure out a way to capture this particular loop -->
			<!-- Then print the results at the end of the DOM. -->
			<!-- This could possibly be acheived by storing an array of ACF IDs -->

			<!-- <?php // if ($gated):?>
				<div id="modal-1" class="modal" aria-hidden="true">

					<div class="modal__overlay" tabindex="-1" data-micromodal-close>

						<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >

							<header class="modal__header">
								<h2 id="modal-1-title" class="modal__title">Modal Title</h2>

								<button aria-label="Close modal" data-micromodal-close><i class="fas fa-times"></i></button>
							</header>

							<div class="modal-1-content" class="modal__content">
								<?php // the_field('gated_content');?>
							</div>

							<footer class="modal__footer">
								<button class="modal__btn modal__btn-primary">Continue</button>
								<button class="modal__btn" data-micromodal-close="" aria-label="Close this dialog window">Close</button>
							</footer>

						</div>
					</div>
				</div>
			<?php // endif;?> -->

			<!-- Lightbox will go here -->
			<!-- <div class="gated-content">
				[gravityform id=1 title=false description=false ajax=true tabindex=49]
			</div> -->

	    <?php endwhile; ?>

	    </div>

	<?php endif; ?>

<?php endif; ?>
