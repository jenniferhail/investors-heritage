AOS.init({
    easing: 'ease-in-out',
    once: false,
    duration: 1000
});

accordions.init();
mobileNav.init();
layers.init();
licensedMap.init();
// cookieNotice.init();
// notification.init();
// MicroModal.init();

var rellaxEl = document.querySelectorAll('.rellax');

if (rellaxEl.length > 0) {
	console.log('The rellax class exists. ' + rellaxEl.length); // value

	var rellax = new Rellax('.rellax', {
	    speed: -2,
	    center: true,
	    wrapper: null,
	    round: true,
	    vertical: true,
	    horizontal: false
	});
}

function msieversion() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");

	if (msie > 0) {
	    $("[data-aos^=fade][data-aos^=fade]").css("opacity", "1");
	}
}

$(document).ready(function() {
	msieversion()
});

$(document).foundation()
