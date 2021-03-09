<?php
/* Template Name: Gated Thank You */
get_header();

?>

<section class="layout basic-content">
	<div class="wrapper">
		<div class="content">
			<!-- <div style="text-align: center;"> -->

			<div class="buttons">
				<?php

				    if (isset($_GET['resource_url']) && $_GET['resource_url'] != '') {
				        $resource_get = $_GET['resource_url'];

				        $resource_url = base64_decode($resource_get);

				        // Check if the resource url is a valid file. 4th to last char shold be a '.'
				        if (strlen($resource_url) > 4) {
				            $resource_valid_char = substr($resource_url, -4, 1);

				            if ($resource_valid_char === '.') {

				                // Set the cookie for 30 days and show the button.
				                // setcookie('allow_access', 'yes', time() + (86400 * 30), "/");

				                echo '<a href="' . $resource_url . '" class="btn cta-btn smallcaps" target="_blank"><span class="side-top-border"></span>Download Now<span class="right-triangle"></span><span class="side-bottom-border"></a>';
				            }
				        }
				    }

				?>
			</div>

			<!-- </div> -->
		</div>
	</div>
</section>

<?php get_footer(); ?>
