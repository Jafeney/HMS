var map = null;

function initialize() {
	var latlng = new google.maps.LatLng(51.507335,-0.127683);
	var myOptions = {
		zoom: 15,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		}
	};

	map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
	var contentString = '<div class="gmap-content"><h2>Nice Hotel</h2><p>1 Main Road, London, UK</p></div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: latlng, 
		map: map
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

}