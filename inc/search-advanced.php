<div class="search-wrapper">
	<form action="/" id="searchform-advanced" method="get">
		<input type="text" name="s" value="" placeholder="<?php echo (isset($_GET['s']) && $_GET['s'] != '') ? $_GET['s'] : 'Enter Search Terms'; ?>">
		<input type="submit" value="Search" class="btn">
	</form>
</div>
