<?php
    $subtitle = get_sub_field('subtitle');
    $title = get_sub_field('title');
	$copy = get_sub_field('copy');
?>

<section id="section-<?php echo $layout_counter; ?>" class="layout calculators">
	<div class="wrapper">
		<div class="content">

			<?php if ($subtitle): ?>
				<div class="intro">
					<h1 class="smallcaps"><?php echo $subtitle; ?></h1>
					<?php if ($title): ?>
						<h2 class="sans-serif-title divider-light"><?php echo $title; ?></h2>
					<?php endif; ?>
				</div>
			<?php else: ?>
				<?php if ($title): ?>
					<div class="intro">
						<h1 class="sans-serif-title divider-light"><?php echo $title; ?></h1>
					</div>
				<?php endif; ?>
			<?php endif; ?>

			<div class="copy">
				<?php echo $copy; ?>
			</div>

			<?php if ( have_rows('calculators') ) : ?>
				<div class="calculator-wrapper">
				<?php while (have_rows('calculators')) : the_row(); ?>

					<?php $calc_type = get_row_layout(); ?>

					<?php if ($calc_type == 'double_annuity') : ?>
						<div id="double-annuity-calculator" class="calculator double-annuity">
							<h1 class="calc-title h3">How long does it take my money to double in an annuity?</h5>
							<div class="calc-content">
								<p>Enter your current annuity interest rate below to determine how long it will take your annuity to double in value.</p>
								<div class="calc-field-group">
									<label>Current annuity interest rate:</label>
									<div class="calc-flex">
										<div class="slider-group">
											<div class="slider" id="double-annuity-slider" data-slider="" data-start="0.05" data-initial-start="3.75" data-step="0.05" data-end="25" data-t="d9i4ux-t">
												<span class="slider-handle" data-slider-handle="" role="slider" tabindex="0" aria-controls="double-annuity-input" aria-valuemax="25" aria-valuemin="0.05" aria-valuenow="3.75" aria-orientation="horizontal" style="left: 14.51%;"></span>
												<span class="slider-fill" data-slider-fill="" style="width: 15%;"></span>
											</div>
										</div>
										<div class="input-group">
											<input type="number" id="double-annuity-input" class="input-group-field" max="25" min="0.05" step="0.05">
											<span class="input-group-label">%</span>
										</div>
									</div>
								</div>
								<div class="small-12 cell">
									It will take <span id="double-annuity-result" class="result">19.2 years</span> to double your annuity value.
								</div>
							</div>
						</div>
					<?php elseif ($calc_type == 'double_cd') : ?>
						<div id="double-cd-calculator" class="calculator double-cd">
							<h1 class="calc-title h3">How long does it take my money to double in a CD?</h5>
							<div class="calc-content">
								<div class="calc-field-group">
									<label>CD interest rate:</label>
									<div class="calc-flex">
										<div class="slider-group">
											<div class="slider" id="cd-interest-rate-slider" data-slider="" data-start="0.05" data-initial-start="3.75" data-step="0.05" data-end="25" data-t="mq7ojo-t">
												<span class="slider-handle" data-slider-handle="" role="slider" tabindex="0" aria-controls="cd-interest-rate-input" aria-valuemax="25" aria-valuemin="0.05" aria-valuenow="3.75" aria-orientation="horizontal" style="left: 14.51%;"></span>
												<span class="slider-fill" data-slider-fill="" style="width: 15%;"></span>
											</div>
										</div>
										<div class="input-group">
											<input type="number" id="cd-interest-rate-input" class="input-group-field" max="25" min="0.05" step="0.05">
											<span class="input-group-label">%</span>
										</div>
									</div>
								</div>
								<div class="calc-field-group">
									<label>Tax Bracket:</label>
									<div class="calc-flex">
										<div class="slider-group">
											<div class="slider" id="tax-bracket-slider" data-slider="" data-initial-start="25" data-step="5" data-end="95" data-t="vodfn5-t">
												<span class="slider-handle" data-slider-handle="" role="slider" tabindex="0" aria-controls="tax-bracket-input" aria-valuemax="95" aria-valuemin="0" aria-valuenow="25" aria-orientation="horizontal" style="left: 24.18%;"></span>
												<span class="slider-fill" data-slider-fill="" style="width: 25%;"></span>
											</div>
										</div>
										<div class="input-group">
											<input type="number" id="tax-bracket-input" class="input-group-field" max="95" min="0" step="5">
											<span class="input-group-label">%</span>
										</div>
									</div>
								</div>
								<div class="small-12 cell">
									It will take <span id="double-cd-result" class="result">25.6 years</span> to double your CD value.
								</div>
							</div>
						</div>
					<?php elseif ($calc_type == 'taxable_equivalent_yield') : ?>
						<div id="yield-calculator" class="calculator equivalent-yield">
							<h1 class="calc-title h3">What is the taxable equivalent yield on my annuity?</h5>
							<div class="calc-content">
								<div class="calc-field-group">
									<label>Interest rate:</label>
									<div class="calc-flex">
										<div class="slider-group">
											<div class="slider" id="yield-interest-rate-slider" data-slider="" data-start="0.05" data-initial-start="3.75" data-step="0.05" data-end="25" data-t="kck8cn-t">
												<span class="slider-handle" data-slider-handle="" role="slider" tabindex="0" aria-controls="yield-interest-rate-input" aria-valuemax="25" aria-valuemin="0.05" aria-valuenow="3.75" aria-orientation="horizontal" style="left: 14.51%;"></span>
												<span class="slider-fill" data-slider-fill="" style="width: 15%;"></span>
											</div>
										</div>
										<div class="input-group">
											<input type="number" id="yield-interest-rate-input" class="input-group-field" max="25" min="0.05" step="0.05">
											<span class="input-group-label">%</span>
										</div>
									</div>
								</div>
								<div class="calc-field-group">
									<label>Tax Bracket:</label>
									<div class="calc-flex">
										<div class="slider-group">
											<div class="slider" id="yield-tax-bracket-slider" data-slider="" data-initial-start="25" data-step="5" data-end="95" data-t="clanu2-t">
												<span class="slider-handle" data-slider-handle="" role="slider" tabindex="0" aria-controls="yield-tax-bracket-input" aria-valuemax="95" aria-valuemin="0" aria-valuenow="25" aria-orientation="horizontal" style="left: 24.18%;"></span>
												<span class="slider-fill" data-slider-fill="" style="width: 25%;"></span>
											</div>
										</div>
										<div class="input-group">
											<input type="number" id="yield-tax-bracket-input" class="input-group-field" max="95" min="0" step="5">
											<span class="input-group-label">%</span>
										</div>
									</div>
								</div>
								<div class="small-12 cell">
									Your taxable equivalent percent is <span id="yield-result" class="result">5.00</span>.
								</div>
							</div>
						</div>
					<?php endif; ?>

				<?php endwhile; ?>
				</div>
			<?php endif; ?>

		</div>
	</div>
</section>
