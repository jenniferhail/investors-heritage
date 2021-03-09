$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var headerHeight = $('.header').outerHeight();
    var headerFixed = headerHeight + 50;

    if (scroll >= headerHeight) {
        $('.header').addClass('hide');
    } else {
        $('.header').removeClass('hide');
    }

    if (scroll >= headerFixed) {
        $('.header').addClass('transition');
    } else {
        $('.header').removeClass('transition');
    }

    if (scroll >= 500) {
        $('.header').addClass('reveal');
    } else {
        $('.header').removeClass('reveal');
    }
});

var mn,
mobileNav = {
	settings: {
		mobileBtn: $('.mobile-nav-btn'),
		mobileLink: $('.mobile-nav .menu-item a'),
		mobileNav: $('.mobile-nav-wrapper'),
        body: $('body'),
		header: $('.header')
	},
	init: function() {
		mn = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.mn = mn;
		$.expose.mobileNav = mobileNav;
		console.log('mobile menu loaded!');
	},
	bindUIActions: function() {

		var closed = true;

		mn.mobileBtn.on('click', function() {

			$(this).addClass('open');

			if ( closed == false) {

				$(this).removeClass('open');
				mn.mobileNav.removeClass('slide');
                mn.body.removeClass('lock');
				mn.header.removeClass('dark');
				closed = true;

			} else {

				$(this).addClass('open');
				mn.mobileNav.addClass('slide');
                mn.body.addClass('lock');
				mn.header.addClass('dark');
				closed = false;

			}

		});

		mn.mobileLink.on('click', function() {

			mn.mobileBtn.removeClass('open');
			mn.mobileNav.removeClass('slide');
            mn.body.removeClass('lock');
			mn.header.removeClass('dark');
			closed = true;

		});

	}
};

var mobileDelay = 550;

$('.mobile-nav a').each(function(indexCount) {
	mobileDelay = mobileDelay + 50;
	// Apply the animation delay
	$(this).css("transition-delay", mobileDelay + "ms");
});

// var deskDelay = 150;
//
// $('.header-nav .sub-menu a').each(function(indexCount) {
// 	deskDelay = deskDelay + 50;
// 	// Apply the animation delay
// 	$(this).css("transition-delay", deskDelay + "ms");
// });
