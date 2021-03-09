var ac,
accordions = {
	settings: {
		accItem: $('.acc-item'),
		accContent: $('.acc-item .acc-content'),
		title: $('.acc-item .title'),
		toggle: $('.acc-toggle'),
		closedArray: []
	},
	init: function() {
		ac = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.ac = ac;
		$.expose.accordions = accordions;
		console.log('accordions loaded!');
	},
	bindUIActions: function() {
		ac.title.each( function(index, value) {
			ac.closedArray.push(true);
		});

		ac.title.on('click', function() {

			// Get the index of the clicked item
			var thisIndex = ac.title.index(this);
			// Update the value in the array at the given thisIndex
			// ac.closedArray[thisIndex] = false;

			$(this).closest('.acc-item').find('.acc-content').slideToggle( '3000', function() {
				// Animation complete.
			});

			if ( ac.closedArray[thisIndex] == false ) {
				$(this).closest('.acc-item').removeClass('open');
				$(this).closest('.acc-item').find('.acc-toggle').html('More');
				// closed = true;
				ac.closedArray[thisIndex] = true;
			} else {
				$(this).closest('.acc-item').addClass('open');
				$(this).closest('.acc-item').find('.acc-toggle').html('Less');
				// closed = false;
				ac.closedArray[thisIndex] = false;
			}

		});
	}
};
