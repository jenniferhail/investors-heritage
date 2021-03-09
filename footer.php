	</main>

</div><!-- Close content wrapper -->

<footer class="footer margin-sides margin-bottom dark" role="contentinfo">

	<div class="wrapper">

		<div class="content grid-col large-grid-row space-between">

			<div class="col first">

				<div class="footer-menu">

					<ul class="footer-nav-menu">

						<?php
                            $footer_args = array(
                                'menu' => 'footer-menu',
                                'container' => false,
                                'items_wrap' => '%3$s'
                            );
                        ?>
						<?php wp_nav_menu($footer_args); ?>

						<?php if (have_rows('footer_social', 'option')): ?>

					    	<ul class="social-list">

					    	<?php while (have_rows('footer_social', 'option')): the_row(); ?>

					            <?php
                                    $network = get_sub_field('network');
                                    $link = get_sub_field('link');
                                    $link_url = $link['url'];
                                    $link_title = $link['title'];
                                    $link_target = $link['target'];

                                    if ($link_target == null) {
                                        $link_target = '_self';
                                    }
                                ?>

					    		<li class="social-item">
					                <?php if ($network == 'facebook'): ?>
					                    <a href="<?php echo $link_url; ?>" class="<?php echo $network; ?>" target="<?php echo $link_target; ?>"><i class="fab fa-facebook-f"></i></a>
					                <?php elseif ($network == 'twitter'): ?>
					                    <a href="<?php echo $link_url; ?>" class="<?php echo $network; ?>" target="<?php echo $link_target; ?>"><i class="fab fa-twitter"></i></a>
					                <?php elseif ($network == 'instagram'): ?>
					                    <a href="<?php echo $link_url; ?>" class="<?php echo $network; ?>" target="<?php echo $link_target; ?>"><i class="fab fa-instagram"></i></a>
					                <?php elseif ($network == 'snapchat'): ?>
					                    <a href="<?php echo $link_url; ?>" class="<?php echo $network; ?>" target="<?php echo $link_target; ?>"><i class="fab fa-snapchat-ghost"></i></a>
					                <?php elseif ($network == 'pinterest'): ?>
					                    <a href="<?php echo $link_url; ?>" class="<?php echo $network; ?>" target="<?php echo $link_target; ?>"><i class="fab fa-pinterest-p"></i></a>
					                <?php elseif ($network == 'googleplus'): ?>
					                    <a href="<?php echo $link_url; ?>" class="<?php echo $network; ?>" target="<?php echo $link_target; ?>"><i class="fab fa-google-plus-g"></i></a>
					                <?php elseif ($network == 'linkedin'): ?>
					                    <a href="<?php echo $link_url; ?>" class="<?php echo $network; ?>" target="<?php echo $link_target; ?>"><i class="fab fa-linkedin-in"></i></a>
					                <?php elseif ($network == 'youtube'): ?>
					                    <a href="<?php echo $link_url; ?>" class="<?php echo $network; ?>" target="<?php echo $link_target; ?>"><i class="fab fa-youtube"></i></a>
					                <?php elseif ($network == 'vimeo'): ?>
					                    <a href="<?php echo $link_url; ?>" class="<?php echo $network; ?>" target="<?php echo $link_target; ?>"><i class="fab fa-vimeo-v"></i></a>
					                <?php endif; ?>
					    		</li>

					    	<?php endwhile; ?>

					    	</ul>

					    <?php endif; ?>

					</ul>

				</div>

			</div>

			<div class="col second align-right">
				<div class="ih-logo ih-logo-footer">
					<a href="/" alt="Investors Heritage – Life Insurance Company">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565.5 136.5"><style type="text/css">
							.logomark{fill:#6FCBD9;}
							.wordmark{fill:#C2E6EF;}
						</style><path class="logomark" d="M111.3 129.1H8.5V8.2h102.9V129.1zM12.3 125.3h95.1V12H12.3V125.3zM43.2 74.8v35.8l6 6c0.4 0.4 0.5 1 0.3 1.6s-0.7 0.9-1.3 0.9H19.4c-0.6 0-1-0.3-1.3-0.9 -0.2-0.6-0.1-1.1 0.3-1.6l6-6V74.8 62.4 26.6l-6-6c-0.4-0.5-0.5-1-0.3-1.6s0.7-0.9 1.3-0.9h28.7c0.6 0 1 0.3 1.3 0.9 0.2 0.6 0.1 1.1-0.3 1.6l-6 6v35.8L43.2 74.8 43.2 74.8zM95.5 74.8v35.8l6 6c0.4 0.4 0.5 1 0.3 1.6s-0.7 0.9-1.3 0.9H71.7c-0.6 0-1-0.3-1.3-0.9 -0.2-0.6-0.1-1.1 0.3-1.6l6-6V74.8 62.4 26.6l-6-6c-0.4-0.5-0.5-1-0.3-1.6s0.7-0.9 1.3-0.9h28.7c0.6 0 1 0.3 1.3 0.9 0.2 0.6 0.1 1.1-0.3 1.6l-6 6v35.8L95.5 74.8 95.5 74.8zM54.6 63.4h10.5v10.5H54.6V63.4z"/><path class="wordmark" d="M148.2 81.2h-0.7c-0.6 0-1.1-0.2-1.6-0.7 -0.4-0.4-0.7-0.9-0.7-1.6V58.4c0-0.6 0.2-1.1 0.7-1.5 0.4-0.4 0.9-0.6 1.6-0.6h0.7v-0.7h-8.5v0.7h0.7c0.6 0 1.1 0.2 1.6 0.6 0.4 0.4 0.7 0.9 0.7 1.5V79c0 0.6-0.2 1.1-0.7 1.6 -0.4 0.4-0.9 0.7-1.6 0.7h-0.7V82h8.5V81.2zM155.1 80.6c-0.4 0.4-0.9 0.6-1.5 0.6h-0.9v0.7h8v-0.7h-0.9c-0.4 0-0.7-0.1-1.1-0.3 -0.7-0.4-1.1-1-1.1-1.8V61l19.9 21.3v0.1h0.6l-0.1-0.9c-0.2-1.3-0.3-2.7-0.3-4V58.3c0-0.6 0.2-1.1 0.7-1.5 0.4-0.4 0.9-0.6 1.5-0.6h0.8v-0.7h-8v0.7h0.9c0.6 0 1.1 0.2 1.5 0.6s0.6 0.9 0.7 1.5v18.1L155.9 55v-0.1h-0.6l0.1 0.8c0.2 1.2 0.3 2.6 0.3 4V79C155.7 79.7 155.5 80.2 155.1 80.6zM191.1 56.2h0.5v-0.7h-8.7v0.7h0.5c0.6 0 1.2 0.2 1.8 0.6s1.1 1 1.4 1.7l10.5 23.8v0.1h0.6v-0.2c0-0.5 0.5-1.8 1.4-3.8l9-20c0.2-0.5 0.5-0.9 0.9-1.3 0.7-0.6 1.4-1 2.2-1h0.5v-0.7h-7.8v0.7h0.5c0.5 0 0.8 0.1 1.1 0.4 0.2 0.3 0.4 0.6 0.4 0.8 0 0.3 0 0.5-0.1 0.8l-8.1 19.3 -7.6-19.1c-0.1-0.3-0.2-0.5-0.2-0.7s0-0.3 0.1-0.5C190 56.5 190.5 56.2 191.1 56.2zM229.7 59.8v-5l-0.2 0.1c-0.4 0.1-1 0.3-1.9 0.4 -0.9 0.1-1.8 0.2-2.5 0.2H214l0.1 0.7h0.6c0.6 0 1.1 0.2 1.5 0.6s0.7 0.9 0.7 1.4V79c0 0.6-0.2 1.1-0.7 1.6 -0.4 0.4-0.9 0.7-1.6 0.7H214V82h15.7l2.2-6.1 0.1-0.2h-0.7v0.1c-0.6 1.6-1.4 2.8-2.4 3.6 -0.9 0.8-2.3 1.2-4.1 1.2h-5.1v-11h6.1c0.5 0 0.8 0.2 1.2 0.5 0.3 0.3 0.5 0.7 0.5 1.2V72h0.7v-6.2h-0.7v0.7c0 0.5-0.2 0.9-0.5 1.2 -0.3 0.3-0.7 0.5-1.2 0.5h-6.1V57h7.4c0.5 0 1 0.2 1.4 0.6s0.6 0.9 0.6 1.4v0.8H229.7L229.7 59.8zM237.7 74.9H237V75c-0.4 1.1-0.6 2.2-0.6 3.3 0 1 0 1.7 0.1 2.1l0 0 0 0c0.7 0.7 1.7 1.3 3 1.6 1.2 0.3 2.4 0.5 3.6 0.5 2.2 0 3.8-0.7 5.1-2s2-3 2-5 -0.7-3.7-1.9-4.8l-7.3-6.8c-1-0.9-1.5-2-1.5-3.2s0.4-2.3 1.3-3.1c0.8-0.8 1.9-1.2 3.1-1.2 1.2 0 2.3 0.3 3 1 0.8 0.7 1.2 1.6 1.2 2.7v0.2h0.7v-4.9h-1.6c-1.2-0.3-2.3-0.4-3.3-0.4 -2.1 0-3.7 0.7-4.9 2s-1.8 2.9-1.8 4.6 0.7 3.4 2.1 4.6l7.1 6.6c0.9 0.9 1.4 2 1.4 3.4s-0.5 2.6-1.5 3.5 -2.3 1.4-3.8 1.4 -2.7-0.5-3.6-1.5c-0.9-1-1.4-2.2-1.4-3.7 0-0.3 0-0.5 0-0.8L237.7 74.9zM262.6 80.6c-0.4 0.4-0.9 0.6-1.6 0.6h-0.7v0.7h8.5v-0.7h-0.7c-0.6 0-1.1-0.2-1.6-0.6 -0.4-0.4-0.7-0.9-0.7-1.5V56.9h6.9c0.5 0 1 0.2 1.4 0.6 0.4 0.4 0.6 0.9 0.6 1.5v0.8l0.7 0.1v-5.1l-0.2 0.1c-0.2 0.1-0.7 0.2-1.5 0.4s-1.8 0.3-3 0.3h-12.5c-0.8 0-1.6-0.1-2.5-0.2 -0.9-0.2-1.6-0.3-1.9-0.4l-0.2-0.1V60l0.7-0.1v-0.8c0-0.6 0.2-1 0.6-1.5 0.4-0.4 0.9-0.6 1.4-0.6h6.9v22.1C263.2 79.7 263 80.2 262.6 80.6zM291.3 82.4c3.9 0 7.3-1.3 9.8-3.8s3.8-5.8 3.8-9.9 -1.3-7.4-3.8-9.9 -5.8-3.8-9.8-3.8c-3.9 0-7.3 1.3-9.8 3.8s-3.8 5.8-3.8 9.9 1.3 7.4 3.8 9.9C284.1 81.1 287.4 82.4 291.3 82.4zM283.9 59.8c1.9-2.3 4.4-3.4 7.5-3.4 2.1 0 3.8 0.5 5.4 1.5s2.8 2.5 3.7 4.3c0.9 1.9 1.3 4 1.3 6.4 0 3.7-1 6.6-2.9 8.9s-4.4 3.4-7.5 3.4 -5.6-1.1-7.5-3.4 -2.9-5.2-2.9-8.9S282 62 283.9 59.8zM309.8 80.6c-0.4 0.4-1 0.6-1.6 0.6h-0.7v0.7h8.5l-0.1-0.7h-0.6c-0.6 0-1.2-0.2-1.6-0.7 -0.4-0.4-0.6-0.9-0.6-1.6V57h2.2c0.9 0 1.6 0 2.3 0 1.4 0.1 2.4 0.6 3.2 1.6 0.8 1 1.2 2.3 1.3 3.9v0.8c0 0.4-0.1 0.9-0.2 1.4 -0.8 2.4-2.7 3.7-5.6 3.8 -0.9 0.1-1.6 0.1-2 0H314v0.7h0.2c0.8 0 1.5 0.4 2.3 1.2 0.3 0.3 0.5 0.6 0.8 0.9s1.1 1.6 2.7 3.8c1.5 2.2 2.8 3.9 3.2 4.4 0.3 0.4 0.7 0.8 1.2 1.2s1.2 0.8 2.1 1.2c0.9 0.4 2 0.6 3.1 0.6h2.2v-0.7h-0.2c-0.8 0-1.6-0.2-2.3-0.5 -0.3-0.1-0.6-0.3-0.9-0.6 -0.3-0.2-0.6-0.5-0.9-0.8s-0.7-0.8-1.4-1.5c-0.6-0.7-2.4-3.1-4.5-6.2 -0.4-0.5-0.9-1.1-1.4-1.6 -0.3-0.3-0.6-0.6-0.9-0.8 1.6-0.1 3-0.9 4-2.2 1.3-1.5 1.9-3.3 1.9-5.2 0-2.1-0.7-3.8-2-4.9 -1.3-1.3-3.2-1.9-5.4-1.9h-10.2v0.7h0.7c0.6 0 1.1 0.2 1.6 0.6 0.4 0.4 0.7 1 0.7 1.6V79C310.5 79.6 310.2 80.1 309.8 80.6zM418.5 80.6c-0.4 0.4-1 0.6-1.6 0.6h-0.7v0.7h8.5l-0.1-0.7H424c-0.6 0-1.2-0.2-1.6-0.7 -0.4-0.4-0.6-0.9-0.6-1.6V57h2.2c0.9 0 1.6 0 2.3 0 1.4 0.1 2.4 0.6 3.2 1.6 0.8 1 1.2 2.3 1.3 3.9v0.8c0 0.4-0.1 0.9-0.2 1.4 -0.8 2.4-2.7 3.7-5.6 3.8 -0.9 0.1-1.6 0.1-2 0h-0.2v0.7h0.2c0.8 0 1.5 0.4 2.3 1.2 0.3 0.3 0.5 0.6 0.8 0.9s1.1 1.6 2.7 3.8c1.5 2.2 2.8 3.9 3.2 4.4 0.3 0.4 0.7 0.8 1.2 1.2 0.5 0.4 1.2 0.8 2.1 1.2 0.9 0.4 2 0.6 3.1 0.6h2.2v-0.7h-0.2c-0.8 0-1.6-0.2-2.3-0.5 -0.3-0.1-0.6-0.3-0.9-0.6 -0.3-0.2-0.6-0.5-0.9-0.8s-0.7-0.8-1.4-1.5c-0.6-0.7-2.4-3.1-4.5-6.2 -0.4-0.5-0.9-1.1-1.4-1.6 -0.3-0.3-0.6-0.6-0.9-0.8 1.6-0.1 3-0.9 4-2.2 1.3-1.5 1.9-3.3 1.9-5.2 0-2.1-0.7-3.8-2-4.9 -1.3-1.3-3.2-1.9-5.4-1.9h-10.2v0.7h0.7c0.6 0 1.1 0.2 1.6 0.6 0.4 0.4 0.7 1 0.7 1.6V79C419 79.6 418.9 80.1 418.5 80.6zM334.2 74.9h-0.6V75c-0.4 1.1-0.6 2.2-0.6 3.3 0 1 0 1.7 0.1 2.1l0 0 0 0c0.7 0.7 1.7 1.3 3 1.6 1.2 0.3 2.4 0.5 3.6 0.5 2.2 0 3.8-0.7 5.1-2 1.3-1.3 2-3 2-5s-0.7-3.7-1.9-4.8l-7.3-6.8c-1-0.9-1.5-2-1.5-3.2s0.4-2.3 1.3-3.1c0.8-0.8 1.9-1.2 3.1-1.2s2.3 0.3 3 1c0.8 0.7 1.2 1.6 1.2 2.7v0.2h0.7v-4.9h-1.6c-1.2-0.3-2.3-0.4-3.3-0.4 -2.1 0-3.7 0.7-4.9 2 -1.2 1.3-1.8 2.9-1.8 4.6s0.7 3.4 2.1 4.6l7.1 6.6c0.9 0.9 1.4 2 1.4 3.4s-0.5 2.6-1.5 3.5 -2.3 1.4-3.8 1.4 -2.7-0.5-3.6-1.5 -1.4-2.2-1.4-3.7C334.1 75.4 334.1 75.2 334.2 74.9L334.2 74.9zM371 80.6c-0.4-0.4-0.7-0.9-0.7-1.6v-9.5h14.9V79c0 0.6-0.2 1.1-0.7 1.5 -0.4 0.4-1 0.6-1.6 0.6h-0.7v0.7h8.5v-0.7H390c-0.6 0-1.1-0.2-1.6-0.7 -0.4-0.4-0.7-1-0.7-1.6V58.4c0-0.6 0.2-1.1 0.7-1.6 0.4-0.4 0.9-0.6 1.6-0.6h0.7v-0.7h-8.5v0.7h0.7c0.4 0 0.8 0.1 1.1 0.3 0.7 0.4 1.1 1 1.1 1.9v9.8h-14.8v-9.8c0-0.6 0.2-1.1 0.7-1.5 0.4-0.4 0.9-0.6 1.6-0.6h0.7v-0.7h-8.5v0.7h0.7c0.6 0 1.1 0.2 1.6 0.6 0.4 0.4 0.7 0.9 0.7 1.5V79c0 0.6-0.2 1.1-0.7 1.6 -0.4 0.4-0.9 0.7-1.6 0.7h-0.7V82h8.5v-0.7h-0.7C372 81.2 371.4 81 371 80.6zM411 59.8v-5l-0.2 0.1c-0.4 0.1-1 0.3-1.9 0.4 -0.9 0.1-1.8 0.2-2.5 0.2h-11.1l0.1 0.7h0.6c0.6 0 1.1 0.2 1.5 0.6 0.4 0.4 0.7 0.9 0.7 1.4V79c0 0.6-0.2 1.1-0.7 1.6 -0.4 0.4-0.9 0.7-1.6 0.7h-0.7V82H411l2.2-6.1 0.1-0.2h-0.7v0.1c-0.6 1.6-1.4 2.8-2.4 3.6 -0.9 0.8-2.3 1.2-4.1 1.2H401v-11h6.1c0.5 0 0.8 0.2 1.2 0.5 0.3 0.3 0.5 0.7 0.5 1.2V72h0.7v-6.2h-0.7v0.7c0 0.5-0.2 0.9-0.5 1.2 -0.3 0.3-0.7 0.5-1.2 0.5H401V57h7.4c0.5 0 1 0.2 1.4 0.6 0.4 0.4 0.6 0.9 0.6 1.4v0.8H411L411 59.8zM444.6 80.6c-0.4 0.4-0.9 0.7-1.6 0.7h-0.7V82h8.5v-0.7h-0.6c-0.6 0-1.1-0.2-1.6-0.7 -0.4-0.4-0.7-0.9-0.7-1.6V58.4c0-0.6 0.2-1.1 0.7-1.5 0.4-0.4 0.9-0.6 1.6-0.6h0.7v-0.7h-8.5v0.7h0.7c0.6 0 1.1 0.2 1.6 0.6 0.4 0.4 0.7 0.9 0.7 1.5V79C445.2 79.6 445 80.1 444.6 80.6zM474.7 55.2c-0.8 0.2-1.8 0.3-3 0.3h-12.6c-0.8 0-1.6-0.1-2.5-0.2 -0.9-0.2-1.6-0.3-1.9-0.4l-0.2-0.1v5.1l0.6-0.2V59c0-0.6 0.2-1 0.6-1.5 0.4-0.4 0.9-0.6 1.4-0.6h6.9V79c0 0.6-0.2 1.1-0.7 1.5 -0.4 0.4-0.9 0.6-1.6 0.6H461v0.7h8.5v-0.7H469c-0.6 0-1.1-0.2-1.6-0.6 -0.4-0.4-0.7-0.9-0.7-1.5V56.9h6.9c0.5 0 1 0.2 1.4 0.6 0.4 0.4 0.6 0.9 0.6 1.5v0.8l0.7 0.1v-5.1l-0.2 0.1C476 54.9 475.5 55 474.7 55.2zM494.2 81.2h-0.5v0.7h8.7v-0.7h-0.5c-0.6 0-1.2-0.2-1.8-0.6 -0.6-0.4-1-1-1.4-1.7l-10-23.8V55h-0.6v0.2c0 0.5-0.5 1.8-1.4 3.8l-8.4 20c-0.4 0.8-0.8 1.3-1.4 1.7 -0.6 0.4-1.2 0.6-1.8 0.6h-0.5V82h7.8v-0.7H482c-0.5 0-0.8-0.1-1.1-0.4 -0.2-0.3-0.4-0.6-0.4-0.8 0-0.3 0-0.6 0.1-0.8l2.5-6.2h9.8l2.4 6.2c0.1 0.3 0.1 0.6 0.1 0.9s-0.1 0.6-0.4 0.9C495 81.1 494.7 81.2 494.2 81.2zM483.9 71.4l4.4-11.4 4.2 11.4H483.9zM515.9 56.4c2.4 0 4.4 0.6 6 1.7 1.6 1.1 2.7 2.8 3.3 4.8V63h0.6l-0.8-5.5h-0.1c-2.7-1.7-5.7-2.6-9.1-2.6 -3.9 0-7.3 1.3-9.8 3.8s-3.8 5.8-3.8 9.9 1.3 7.4 3.8 9.9 5.7 3.8 9.8 3.8c1.8 0 3.5-0.3 4.9-0.8 1.5-0.5 2.8-1.1 3.7-1.8 0.9-0.7 1.7-1.5 2.4-2.3l0 0v-6.2c0-0.5 0.1-0.9 0.4-1.1 0.3-0.3 0.7-0.4 1.3-0.4h0.7V69h-7.6v0.7h0.8c0.6 0 1 0.1 1.3 0.4s0.5 0.6 0.5 1.1v6.5c-1.1 1-2.3 1.8-3.8 2.3 -1.4 0.6-3 0.9-4.5 0.9 -3.1 0-5.6-1.2-7.5-3.4 -1.9-2.3-2.9-5.2-2.9-8.9 0-3.7 1-6.6 2.9-8.9C510.4 57.6 512.8 56.4 515.9 56.4zM547.1 59.8v-5l-0.2 0.1c-0.4 0.1-1 0.3-1.9 0.4 -0.9 0.1-1.8 0.2-2.5 0.2h-11.1l0.1 0.7h0.6c0.6 0 1.1 0.2 1.5 0.6s0.7 0.9 0.7 1.4V79c0 0.6-0.2 1.1-0.7 1.6 -0.4 0.4-0.9 0.7-1.6 0.7h-0.7V82H547l2.2-6.1 0.1-0.2h-0.7v0.1c-0.6 1.6-1.4 2.8-2.4 3.6 -0.9 0.8-2.3 1.2-4.1 1.2H537v-11h6.1c0.5 0 0.8 0.2 1.2 0.5 0.3 0.3 0.5 0.7 0.5 1.2V72h0.7v-6.2h-0.7v0.7c0 0.5-0.2 0.9-0.5 1.2 -0.3 0.3-0.7 0.5-1.2 0.5H537V57h7.4c0.5 0 1 0.2 1.4 0.6s0.6 0.9 0.6 1.4v0.8H547.1L547.1 59.8zM554.2 58.5h-0.6v-3h-1V55h2.6v0.5h-1V58.5zM557.5 58.5l-1-2.7 0 0v0.6 2.1h-0.6V55h0.9l1 2.7 1-2.7h0.9v3.5H559v-2 -0.7l0 0 -1 2.7C558 58.5 557.5 58.5 557.5 58.5z"/></svg>
					</a>
				</div>
				<div class="footer-logos">
					<img src="<?php echo get_template_directory_uri(); ?>/app/assets/img/Inc5000_Medallion_Color.png" class="inc-logo" alt="Inc. 5000 America's Fastest-Growing Private Companies">
					<img src="<?php echo get_template_directory_uri(); ?>/app/assets/img/logo-bestbets-2018.png" alt="Best Bets 2018">
				</div>
				<?php if (get_field('footer_contact', 'option')): ?>
				    <div class="contact-info">
				        <p><?php the_field('footer_contact', 'option'); ?></p>
				    </div>
				<?php endif; ?>
			</div>

			<?php if (get_field('footer_content', 'option')): ?>
			    <div class="copyright">
			        <p><?php the_field('footer_content', 'option'); ?></p>
			    </div>
			<?php endif; ?>

		</div>

	</div>

</footer>

<?php if (get_field('popup_display', 'option')): ?>
    <!-- <div class="option popup" data-delay="<?php the_field('popup_delay', 'option'); ?>" data-duration="<?php the_field('popup_duration', 'option'); ?>">
        <div class="wrapper">
            <div class="content">
                <h3><?php the_field('popup_title', 'option'); ?></h3>
                <?php the_field('popup_content', 'option'); ?>
            </div>
        </div>
    </div> -->
<?php endif; ?>

<?php wp_footer(); ?>
<!-- Google Maps, used on contact page -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfghfYcRnkHOjwFUnpMSQSQaVlMiuxcsQ&callback=initMap"></script>
<?php if(is_page(array(2912, 2857))) : ?>
<script type="text/javascript">
piAId = '458992';
piCId = '84489';
piHostname = 'pi.pardot.com';

(function() {
	function async_load(){
		var s = document.createElement('script'); s.type = 'text/javascript';
		s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
		var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
	}
	if(window.attachEvent) { window.attachEvent('onload', async_load); }
	else { window.addEventListener('load', async_load, false); }
})();
</script>
<?php endif; ?>
</body>
</html>
