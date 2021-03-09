var nf,
notification = {
	settings: {
		notice: $('.notification'),
		close: $('.notification .close')
	},
	init: function() {
		nf = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.nf = nf;
		$.expose.notification = notification;
		console.log('notification loaded!');
	},
	bindUIActions: function() {
		nf.close.on('click', function() {
			nf.notice.addClass('hide');
		});
	}
};
