var map,
licensedMap = {
	settings: {
		mapsvg: $('.map-svg svg'),
		productSelect: $('#map-legend'),
		stateListTitle: $('.state-list h2'),
		stateList: $('.licensed-state-list')
	},
	init: function() {
		map = this.settings;
		this.bindUIActions();
		// Optional - Expose scoped vars to global $. Use in console with $.expose
		$.expose.map = map;
		$.expose.licensedMap = licensedMap;
		console.log('licensed map loaded!');
	},
	bindUIActions: function() {
		var productType;

		if (map.mapsvg.length > 0) {
			// On page load, display first product in the select dropdown
			$(states).each( function(index, value) {

				var stateobj = states[index];
				var statename = stateobj.name;

				var statepath = statename.toLowerCase().replace(' ', '-');
				statepath = $('#' + statepath);
				// console.log(statepath);

				productType = 'a_licensed_to_sell';

				if (stateobj[productType] == 'yes') {
					statepath.addClass('active');
					map.stateList.html(function(i, html) {
						return html + (!html ? '' : ', ') + stateobj.name;
					});
				}

				if (stateobj[productType] == 'pending') {
					statepath.addClass('pending');
				}

			});

			map.productSelect.change( function() {

				// Remove active and pending classes from all states
				map.mapsvg.find('path').removeClass('active');
				map.mapsvg.find('path').removeClass('pending');
				// Clear html from state list & title
				map.stateList.html('');
				map.stateListTitle.html('');

				productType = $(this).val();
				var productName = $('#map-legend option:selected').text();
				map.stateListTitle.html(productName);

				$(states).each( function(index, value) {

					var stateobj = states[index];
					var statename = stateobj.name;

					var statepath = statename.toLowerCase().replace(' ', '-');
					statepath = $('#' + statepath);

					if (stateobj[productType] == 'yes') {
						statepath.addClass('active');
						map.stateList.html(function(i, html) {
							return html + (!html ? '' : ', ') + stateobj.name;
						});
					}

					if (stateobj[productType] == 'pending') {
						statepath.addClass('pending');
					}

				});

			});
		}

	}
};


// // on change event of dropdown select
// function productSelect(selectObject) {
//
// 	// Remove active and pending classes from all states
// 	mapsvg.find('path').removeClass('active');
// 	mapsvg.find('path').removeClass('pending');
//
// 	var productType = selectObject.value;
// 	console.log(productType);
//
// 	// var productType = jQuery('.map-legend').val();
// 	// var selectedproduct = 'Youth';
//
//
// 	jQuery.each(states, function(index, value) {
//
// 		var stateobj = states[index];
// 		var statename = stateobj.name.toLowerCase();
// 		statename = statename.replace(' ', '-');
//
// 		var statepath = jQuery('#' + statename);
//
// 		if (stateobj[productType] == 'Yes') {
// 		// if (stateobj[selectedproduct] == 'Yes') {
// 			statepath.addClass('active');
// 			jQuery('licensed-state-list').append(stateobj.name);
// 			// console.log(stateobj.name + ' is licensed. ');
// 		}
//
// 		if (stateobj[productType] == 'Pending') {
// 		// if (stateobj[selectedproduct] == 'Pending') {
// 			statepath.addClass('pending');
// 		}
//
// 	});
//
// }
