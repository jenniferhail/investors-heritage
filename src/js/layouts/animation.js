var lr,
layers = {
	settings: {
		card: $('.full-cards .card')
	},
	init: function() {
		lr = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.lr = lr;
		$.expose.layers = layers;
		console.log('layers loaded!');
	},
	bindUIActions: function() {
        lr.card.mouseenter(function(){
            $(this).addClass('top-layer');
        });
        lr.card.mouseleave(function(){
			var currentCard = $(this);
        	setTimeout(function(){
        		currentCard.removeClass('top-layer');
        	}, 1000);
        });
	}
};
