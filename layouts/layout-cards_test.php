<?php

    $card_style = get_sub_field('card_style');

    $intro = get_sub_field('intro');
    $display_intro = $intro['display_intro'];
    $subtitle = $intro['subtitle'];
    $title = $intro['title'];
    $subtitle = $intro['subtitle'];
?>

<?php if ($card_style == 'half-card') : ?>

	<section id="section-<?php echo $layout_counter; ?>" class="layout cards half-cards">

	    <div class="wrapper">

	        <div class="content">

	            <?php //if (have_rows('cards')):?>

	            	<ul class="card-list grid-col large-grid-row">

	            	<?php // while (have_rows('cards')): the_row();?>

	            		<!-- <li class="col one-half card">

							<div class="card-wrapper">

								<div class="card-image" style="background-image: url('/assets/img/wealth-image-bg.jpg');">

									<img class="card-image-front" src="/assets/img/wealth-image-fg.png" alt="Leave More For Your Family and Less to Taxes">

								</div>

								<div class="card-inner card-padding">

									<h1 class="card-subtitle smallcaps">Wealth</h1>

									<h2 class="card-title"><?php // the_sub_field('title');?></h2>

									<span class="sep sep-blue"></span>

									<p class="copy"><?php // the_sub_field('content');?></p>

									<?php // include(locate_template('layouts/component-button.php'));?>

								</div>

							</div>

	            		</li> -->

						<li class="col one-half card" data-aos="fade-right" data-aos-anchor-placement="top-center">

							<div class="card-wrapper">

								<div class="card-image" style="background-image: url('/assets/img/wealth-image-bg.jpg');">

									<img class="card-image-front" src="/assets/img/wealth-image-fg.png" alt="Leave More For Your Family and Less to Taxes">

								</div>

								<div class="card-inner card-padding">

									<h1 class="card-subtitle smallcaps">Wealth</h1>

									<h2 class="card-title">Quality of life is always better with quality life</h2>

									<span class="sep sep-blue"></span>

									<p class="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis dictum augue. Nulla convallis est vel lorem accumsan, non fermentum ipsum semper. Pellentesque nec nunc id risus malesuada sagittis a in risus. Donec lacus dui,
									blandit nec sem non.</p>

									<div class="buttons">

										<a class="btn cta-btn smallcaps" href="#"><span class="side-top-border"></span>Learn More<span class="right-triangle"></span><span class="side-bottom-border"></span></a>

									</div>

								</div>

							</div>

						</li>

						<li class="col one-half card" data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="650">

							<div class="card-wrapper">

							<div class="card-image" style="background-image: url('/assets/img/family-image-bg.jpg');">

							<img class="card-image-front" src="/assets/img/family-image-fg.png" alt="Leave More For Your Family and Less to Taxes">

							</div>

							<div class="card-inner card-padding">

							<h1 class="card-subtitle smallcaps">Family</h1>

							<h2 class="card-title">A lifetime of work in every single policy</h2>

							<span class="sep sep-blue"></span>

							<p class="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis dictum augue. Nulla convallis est vel lorem accumsan, non fermentum ipsum semper. Pellentesque nec nunc id risus malesuada sagittis a in risus. Donec lacus dui,
							blandit nec sem non.</p>

							<div class="buttons">

							<a class="btn cta-btn smallcaps" href="#"><span class="side-top-border"></span>Learn More<span class="right-triangle"></span><span class="side-bottom-border"></span></a>

							</div>

							</div>

							</div>

						</li>

	            	<?php // endwhile;?>

	            	</ul>

	            <?php // endif;?>

	        </div>

	    </div>

	</section>

<?php elseif ($card_style == 'full-card') : ?>

	<section id="section-<?php echo $layout_counter; ?>" class="layout cards full-cards">

	  <div class="wrapper">

		<div class="content">

		  <ul class="grid-col large-grid-row step-layout">

			<li class="col one-half card image-bg card-center text-center proportional-portrait hover-shift-right" data-aos="fade-right" style="background-image: url('/assets/img/lets-work-together.jpg')">

			  <div class="card-wrapper card-padding">

				<div class="card-inner">

				  <h1 class="card-h1">Let's Work Together</h1>

				  <div class="buttons">

					<a class="btn cta-btn white-btn smallcaps" href="#"><span class="side-top-border"></span>Get in Touch<span class="right-triangle"></span><span class="side-bottom-border"></span></a>

				  </div>

				</div>

			  </div>

			</li>

			<li class="col one-half card color-bg card-slider push-down hover-shift-left" data-aos="fade-left" data-aos-delay="650">

			  <div class="card-wrapper">

				<div class="card-inner">

				  <!-- <div class="card-intro"> -->

				  <h1 class="card-h1">What They Say About What We Do</h1>

				  <span class="sep sep-blue"></span>

				  <!-- </div> -->

				  <ul class="slide-list">

					<li class="slide testimonial">

					  <p class="copy">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis dictum augue. Nulla convallis est vel lorem accumsan, non fermentum ipsum semper. Pellentesque nec nunc id risus malesuada sagittis a in risus. Donec lacus
						dui, blandit nec sem non.”</p>

					  <div class="credit">
						<img class="round-img member-photo" src="/assets/img/testimonial-1.jpg" alt="John Smith of Louisville, KY. A member since 1998">
						<span class="member-info">Rachel Malone | Louisville, KY<br><i>Member since 1998</i></span>
					  </div>

					</li>

					<li class="slide testimonial">

					  <p class="copy">“Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
						auctor.”
					  </p>

					  <div class="credit">
						<img class="round-img member-photo" src="/assets/img/testimonial-2.jpg" alt="John Smith of Louisville, KY. A member since 1998">
						<span class="member-info">Henry McGee | Louisville, KY<br><i>Member since 1998</i></span>
					  </div>

					</li>

					<li class="slide testimonial">

					  <p class="copy">“Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus
						vel augue laoreet rutrum faucibus dolor auctor.”</p>

					  <div class="credit">
						<img class="round-img member-photo" src="/assets/img/testimonial-3.jpg" alt="John Smith of Louisville, KY. A member since 1998">
						<span class="member-info">Ruby Ryan | Louisville, KY<br><i>Member since 1998</i></span>
					  </div>

					</li>

				  </ul>

				</div>

			  </div>

			</li>

		  </ul>

		</div>

	  </div>

	</section>

<?php endif; ?>
