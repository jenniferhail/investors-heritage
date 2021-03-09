<?php get_header(); ?>

<?php $page_404 = get_field('page_404', 'option'); ?>

    <section class="layout basic-content">

		<div class="wrapper">

			<div class="content">

		        <div class="intro">
		            <h1 class="smallcaps"><?php echo $page_404['headline']; ?></h1>
		            <h2 class="sans-serif-title"><?php echo $page_404['copy']; ?></h2>
		        </div>

		        <?php if ($page_404['link']): ?>
                    <div class="buttons">
                        <a href="<?php echo $page_404['link']['url']; ?>" target="<?php echo $page_404['link']['target']; ?>" class="btn cta-btn smallcaps"><span class="side-top-border"></span><?php echo $page_404['link']['title']; ?><span class="right-triangle"></span><span class="side-bottom-border"></span></a>
                    </div>
		        <?php endif; ?>

			</div>

		</div>

    </section>

<?php get_footer(); ?>
