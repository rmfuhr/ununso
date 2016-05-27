/*=================================================================
    Google Map
=================================================================*/

//for home pages
$(function() {
    var latLong = new google.maps.LatLng(23.751510, 90.386137);

    mapOption = {
        zoom: 15,
        disableDefaultUI: false,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: true,
        scaleControl: true,
        draggable: true,
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "landscape",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 65
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 51
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "saturation": -100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 30
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 40
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "saturation": -100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.province",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": -25
            }, {
                "saturation": -100
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#ffff00"
            }, {
                "lightness": -25
            }, {
                "saturation": -97
            }]
        }]

    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOption);

    google.maps.event.addDomListener(window, "resize", function() {
        var latLong = n.getCenter();
        google.maps.event.trigger(map, "resize"), map.setCenter(latLong)
    });
    
    $(".button-map").on("click", function() {
        $("#map-canvas").slideToggle(300, function() {
            google.maps.event.trigger(map, "resize"), map.setCenter(latLong)
        }), $(this).toggleClass("close-map show-map")
    })
});

// for contact.html
function googleMap2() {
    latLng2 = new google.maps.LatLng(23.751510, 90.386137);
    var mapOptions = {
        center: latLng2,
        zoom: 15,
        disableDefaultUI: false,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: true,
        scaleControl: true,
        draggable: true,
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "landscape",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 65
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 51
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "saturation": -100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 30
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 40
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "saturation": -100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.province",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": -25
            }, {
                "saturation": -100
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#ffff00"
            }, {
                "lightness": -25
            }, {
                "saturation": -97
            }]
        }]
    };
    var map = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions);
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: latLng2,
        map: map,
        title: 'Sparrow!',
        icon: "img/icons/map-marker.png"
    });
}
google.maps.event.addDomListener(window, "load", googleMap2);
