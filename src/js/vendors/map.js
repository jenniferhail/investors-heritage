// Initialize and add the map
function initMap() {

	var markers = [];
	var googleMarkers = [];

	var locationElements = document.getElementsByClassName('location');

	// Create an array of markers
	for (var i = 0; i < locationElements.length; i++) {
	    // console.log(locationElements[i]);
		var locLat = locationElements[i].getAttribute('data-lat'),
			locLng = locationElements[i].getAttribute('data-lng');

		markers[i] = {};
		markers[i].position = { lat: locLat, lng: locLng }
		markers[i].url = 'https://www.google.com/maps/dir/' + locLat + ',' + locLng;
		markers[i].title = 'Get Directions';

	}

	// console.log(markers);

	if (locationElements.length > 0) {
		// The map, centered at Uluru
		var map = new google.maps.Map(
			document.getElementById('ih-map'),
			{
				zoom: 13,
				center: new google.maps.LatLng(markers[0].position.lat, markers[0].position.lng),
				disableDefaultUI: true,
				styles: [
				{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 33
					}]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
					{
						"color": "#efefef"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#e3eed3"
					}]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels",
					"stylers": [
					{
						"visibility": "on"
					},
					{
						"lightness": 20
					}]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
					{
						"lightness": 20
					}]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#83a5b0"
					}]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#bdcdd3"
					}]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
					{
						"color": "#ffffff"
					}]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#b5cbe4"
					}]
				}]
			});
	}

	// var iconBase = 'http://investors.local/app/themes/mightily/app/assets/img/';
	var iconBase = '/app/themes/mightily/app/assets/img/';

	// Create an array of google marker objects
	for (var i = 0; i < markers.length; i++) {
		googleMarkers[i] = new google.maps.Marker({
			position: new google.maps.LatLng(markers[i].position.lat,markers[i].position.lng),
			icon: iconBase + 'baseline-place-38px.svg',
			map: map,
			url: markers[i].url,
			title: markers[i].title
	    });
		google.maps.event.addListener(googleMarkers[i], 'click', function() {
			// window.location.href = marker.url;
			window.open(
				this.url, '_blank'
			);
		});
	}

	//
	if (googleMarkers.length > 1) {
		var bounds = new google.maps.LatLngBounds();

		for (var i = 0; i < googleMarkers.length; i++) {
			bounds.extend(googleMarkers[i].getPosition());
		}
		map.fitBounds(bounds);
	}

}
