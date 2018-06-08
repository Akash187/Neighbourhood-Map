var map;

//default locations
var locations = [{
        title: 'Park Ave Penthouse',
        location: {
            lat: 40.7713024,
            lng: -73.9632393
        }
  },
    {
        title: 'Chelsea Loft',
        location: {
            lat: 40.7444883,
            lng: -73.9949465
        }
    },
    {
        title: 'Union Square Open Floor Plan',
        location: {
            lat: 40.7347062,
            lng: -73.9895759
        }
    },
    {
        title: 'East Village Hip Studio',
        location: {
            lat: 40.7281777,
            lng: -73.984377
        }
    },
    {
        title: 'TriBeCa Artsy Bachelor Pad',
        location: {
            lat: 40.7195264,
            lng: -74.0089934
        }
    },
    {
        title: 'Chinatown Homey Space',
        location: {
            lat: 40.7180628,
            lng: -73.9961237
        }
    }
  ];

// Create a new blank array for all the listing markers.
var markers = [];

function toggleSidebar() {
    var overlay = document.getElementsByClassName('content');
    for (var i = 0; i < overlay.length; i++) {
        overlay[i].classList.toggle('active')
    }
}

$('.btn').click(function (event) {
    event.preventDefault();
    var query = $('input').val();
    if (query) {
        console.log(query);
        $("ul").text('');
        $.ajax('https://api.foursquare.com/v2/venues/search?client_id=5NIRKNO5FB5EZ2SRUH45EHZD22UXYUEKQSYTX55ZT3RXVD2M&client_secret=HO1MJ3KZQT4A1ELXYVONVIIUQHWUBLE4MUKDBBXYCUOZVOTA&v=20130815&ll=40.7127753,-74.0059728&query=' + query, {
            success: function (data) {
                extractingInfo(data);
            },
            error: function () {
                $("ul").append('<li> An error occured.</li>');
            }
        });
    } else {
        $("ul").append('<li> Please enter some keywords such as food, places, parks etc.</li>');
    }
});

function extractingInfo(data) {
    locations = [];
    console.log(data);
    var venues = data['response']['venues'];
    for (i = 0; i < venues.length; i++) {
        $("ul").append('<li>' + venues[i]['name'] + '</li>');
        try {
            coordinate = venues[i]['location']['labeledLatLngs'][0];
            var lat = coordinate['lat'];
            var lng = coordinate['lng'];
        } catch (err) {
            lat = venues[i]['location']['lat'];
            lng = venues[i]['location']['lng'];
        }
        address = venues[i]['location']['formattedAddress'][0];
        locations.push({
            title: venues[i]['name'],
            address: address,
            location: {
                lat: lat,
                lng: lng
            }
        })
    }
    console.log(locations);
    this.locations = ko.observableArray(locations);

}

var ViewModel = function () {
    ko.observable(initMap);
};
ko.applyBindings(new ViewModel());

var map;

function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.7413549,
            lng: -73.9980244
        },
        zoom: 13
    });

    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.

    var locations = this.locations;
    var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
        });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfowindow);
        });
        bounds.extend(markers[i].position);
    }
    // Extend the boundaries of the map for each marker
    map.fitBounds(bounds);
}

// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div>' + marker.title + '</div>');
        infowindow.open(map, marker);
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function () {
            infowindow.setMarker = null;
        });
    }
}
