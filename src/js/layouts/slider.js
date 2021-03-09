var glideEls = document.getElementsByClassName('slide-list');

if (glideEls.length > 0) {

	var glideNo = 1;

	for (var i = 0; i < glideEls.length; i++) {

		var glideClass = '.glide-' + glideNo;

		var glide = new Glide(glideClass, {
			perView: 1,
			type:	'carousel',
			focusAt: 'center',
			animationTimingFunc: 'ease',
			animationDuration: 800
		});

		glide.mount();

		glideNo++;
	}

}
