var cn,
cookieNotice = {
	settings: {
		notice: $('.cookie-notice'),
		close: $('.cookie-notice .close')
	},
	init: function() {
		cn = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.cn = cn;
		$.expose.cookieNotice = cookieNotice;
		console.log('cookieNotice loaded!');
	},
	bindUIActions: function() {
		cn.close.on('click', function() {
			cn.notice.addClass('move');
			setTimeout(function(){
				cn.notice.addClass('hide');
			}, 600);
		});
	}
};
