var map, infoWindow;

function toggleSidebar() {
    var overlay = document.getElementsByClassName('content');
    for (var i = 0; i < overlay.length; i++) {
        overlay[i].classList.toggle('active')
    }
}

//locations data for places to be shown on map
var placesData = [
    {
        title: 'No. 1 Chinese Restauant',
        lat: 40.6874018498,
        lng: -73.9773168598,
        show: true,
        selected: false,
        address: '705 Fulton St (St. Felix St)',
        venue_id: '4b0c24a8f964a520b43723e3'
    },
    {
        title: 'Shing Wong Restauant Inc',
        lat: 40.5985051061,
        lng: -73.9590482352,
        show: true,
        selected: false,
        address: '1232 Avenue U',
        venue_id: '4fabf962e4b02cf9200fc5a0'
    },
    {
        title: 'Taverna Mediterranean Restauant',
        lat: 40.6197926789,
        lng: -73.9982254155,
        show: true,
        selected: false,
        address: '1550 Bay Ridge Ave',
        venue_id: '4b073c56f964a5204efa22e3'
    },
    {
        title: 'L&R Restauant Equipment',
        lat: 40.7343495275,
        lng: -74.1315113954,
        show: true,
        selected: false,
        address: 'Newark, NJ 07105',
        venue_id: '5065ebf3e4b07b978844a53f'
    },
    {
        title: 'CJs Restaurant and Pub',
        lat: 40.755443,
        lng: -73.918466,
        show: true,
        selected: false,
        address: '43-04 34th Ave',
        venue_id: '53c2dcc9498eecc148cd204e'
    },
    {
        title: 'Tanugim Restauant',
        lat: 41.0926518801,
        lng: -74.074586357,
        show: true,
        selected: false,
        address: '312 Saddle River Rd',
        venue_id: '4c3b509a16cb2d7f62a802a9'
    }, {
        title: 'City Hall Park',
        lat: 40.7125161212,
        lng: -74.0070226261,
        show: true,
        selected: false,
        address: '17 Park Row (btwn Broadway & Centre St)',
        venue_id: '3fd66200f964a520d8f11ee3'
    },
    {
        title: 'Central Park',
        lat: 40.7840834259,
        lng: -73.9648532867,
        show: true,
        selected: false,
        address: '59th St to 110th St (5th Ave to Central Park West)',
        venue_id: '412d2800f964a520df0c1fe3'
    },
    {
        title: 'Union Square Park',
        lat: 40.735207605,
        lng: -73.9904952434,
        show: true,
        selected: false,
        address: 'btwn Broadway & Union Sq E (btwn E 14th & E 17th St)',
        venue_id: '3fd66200f964a520def11ee3'
    },
    {
        title: 'Battery Park',
        lat: 40.70370559,
        lng: -74.0161981505,
        show: true,
        selected: false,
        address: 'Battery Pl (at State St)',
        venue_id: '42daf100f964a52035261fe3'
    },
    {
        title: 'Washington Square Park',
        lat: 40.7308157966,
        lng: -73.9974582195,
        show: true,
        selected: false,
        address: 'W 4th St (btwn MacDougal St & University Pl)',
        venue_id: '40abf500f964a52035f31ee3'
    },
    {
        title: 'Brooklyn Bridge Park',
        lat: 40.702282,
        lng: -73.996456,
        show: true,
        selected: false,
        address: 'Main St (Plymouth St)',
        venue_id: '430d0a00f964a5203e271fe3'
    },
    {
        title: 'Regal Cinemas Battery Park 11',
        lat: 40.714683,
        lng: -74.015023,
        show: true,
        selected: false,
        address: '102 N End Ave',
        venue_id: '49e7ce15f964a5201d651fe3'
    },
    {
        title: 'Madison Square Park',
        lat: 40.7422620419,
        lng: -73.988006115,
        show: true,
        selected: false,
        address: 'Broadway & Madison Ave',
        venue_id: '40b68100f964a5207d001fe3'
    },
    {
        title: 'Tompkins Square Park',
        lat: 40.7263640351,
        lng: -73.9822310178,
        show: true,
        selected: false,
        address: 'E 7th St to E 10th St (btwn Ave A & B)',
        venue_id: '408c5100f964a520c6f21ee3'
    },
    {
        title: 'Asphalt Green Battery Park City',
        lat: 40.7159236442,
        lng: -74.0146734558,
        show: true,
        selected: false,
        address: '212 N End Ave (Murray Street)',
        venue_id: '51bcd723498eecb51dd996bc'
    },
    {
        title: 'Fort Greene Park',
        lat: 40.691621075,
        lng: -73.9756464958,
        show: true,
        selected: false,
        address: 'Washington Park (btwn Myrtle & DeKalb Ave)',
        venue_id: '41196180f964a5200b0c1fe3'
    },
    {
        title: 'Battery Park City',
        lat: 40.7129525191,
        lng: -74.0156013818,
        show: true,
        selected: false,
        address: 'New York, NY 10280',
        venue_id: '4b576d3df964a520173728e3'
    },
    {
        title: 'Pier 26 - Hudson River Park',
        lat: 40.7209471135,
        lng: -74.0129479766,
        show: true,
        selected: false,
        address: 'West St (at Beach St)',
        venue_id: '4ba0e528f964a5205c8537e3'
    },
    {
        title: 'McCarren Park',
        lat: 40.720910216,
        lng: -73.9525514872,
        show: true,
        selected: false,
        address: '780 Lorimer St',
        venue_id: '4081c500f964a52081f21ee3'
    },
    {
        title: 'Cadman Plaza Park',
        lat: 40.6976894505,
        lng: -73.990688324,
        show: true,
        selected: false,
        address: '1 Cadman Plaza East (at Red Cross Pl)',
        venue_id: '4a46ca54f964a5207ca91fe3'
    },
    {
        title: 'Brooklyn Bridge Park - Pier 6',
        lat: 40.6932887131,
        lng: -74.0027797222,
        show: true,
        selected: false,
        address: 'Pier 6 (at Atlantic & Furman)',
        venue_id: '4b81eb25f964a52000c430e3'
    },
    {
        title: 'MTA Bus - Broadway & Park Pl',
        lat: 40.7123049703,
        lng: -74.0079939365,
        show: true,
        selected: false,
        address: 'Broadway (btwn Park Pl & Barclay St)',
        venue_id: '4e77bb14887738167d0c976c'
    },
    {
        title: 'Equinox Park Avenue',
        lat: 40.746093,
        lng: -73.98135,
        show: true,
        selected: false,
        address: '1 Park Ave (btwn E 32nd & E 33rd St)',
        venue_id: '49c943d2f964a5204f581fe3'
    },
    {
        title: 'MTA Subway - Prospect Park (B/Q/S)',
        lat: 40.6616114608,
        lng: -73.9622459022,
        show: true,
        selected: false,
        address: 'Flatbush Ave. & Ocean Ave. (Empire Blvd)',
        venue_id: '4b636f5df964a5209d792ae3'
    },
    {
        title: 'Battery Park Dog Run',
        lat: 40.7073520764,
        lng: -74.0161513539,
        show: true,
        selected: false,
        address: 'W. Thames St. (at West St.)',
        venue_id: '4ba65f32f964a520614b39e3'
    },
    {
        title: 'Mannahatta Park',
        lat: 40.7047414122,
        lng: -74.0066850185,
        show: true,
        selected: false,
        address: 'Wall St (at Front St)',
        venue_id: '4c1fa362b4e62d7fd0f2df93'
    },
    {
        title: 'African Burial Ground National Monument',
        lat: 40.7149897531,
        lng: -74.0055297583,
        show: true,
        selected: false,
        address: '290 Broadway',
        venue_id: '4a9442e3f964a520f92020e3'
        },
    {
        title: 'Castle Clinton National Monument',
        lat: 40.703476669,
        lng: -74.0165823698,
        show: true,
        selected: false,
        address: 'Battery Park',
        venue_id: '4ad0ec5df964a52023db20e3'
        },
    {
        title: 'Nathan Hale Monument',
        lat: 40.7120103811,
        lng: -74.005685568,
        show: true,
        selected: false,
        address: 'City Hall Park',
        venue_id: '4d0110e48da26a311c68960c'
        },
    {
        title: 'Monument Park',
        lat: 40.8299335628,
        lng: -73.9258217812,
        show: true,
        selected: false,
        address: 'Yankee Stadium',
        venue_id: '4c41fde43735be9a0c4919a4'
        },
    {
        title: 'Gay Liberation Monument by George Segal',
        lat: 40.7335708498,
        lng: -74.0024456084,
        show: true,
        selected: false,
        address: 'Christopher Park',
        venue_id: '4da22627b521224be6ec03ee'
        },
    {
        title: 'Americas Response Monument ',
        lat: 40.7136182152,
        lng: -74.011905965,
        show: true,
        selected: false,
        address: 'Vesey(West Broadway)',
        venue_id: '50843479e4 b0d5064c07d764 '
    },
    {
        title: 'Liberation Monument',
        lat: 40.6927588542,
        lng: -74.0568371411,
        show: true,
        selected: false,
        address: 'Liberty State Park',
        venue_id: '4dc6f2ab1f6ef43b8a3b5b17'
            },
    {
        title: 'Stonewall National Monument',
        lat: 40.7335301842,
        lng: -74.0025909278,
        show: true,
        selected: false,
        address: 'Christopher Street (7th Ave)',
        venue_id: '576ec4c6498e779fa600f8ea'
            },
    {
        title: 'Maine Monument',
        lat: 40.7681604165,
        lng: -73.9811405726,
        show: true,
        selected: false,
        address: 'Central Park',
        venue_id: '4ce7fee5fe90a35da7d13f0e'
            },
    {
        title: 'Soldiersand Sailors Monument',
        lat: 40.7920968965,
        lng: -73.9789295197,
        show: true,
        selected: false,
        address: '171 Riverside Dr (at W 89th St)',
        venue_id: '4db745a50437af5fb4c8f48b'
            },
    {
        title: 'Firemans Monument ',
        lat: 40.7985973462,
        lng: -73.9729390787,
        show: true,
        selected: false,
        address: 'New York, NY ',
        venue_id: '51 fb006a498e0ad89fbbb47e '
    }, {
        title: 'Netherlands Monument',
        lat: 40.7043998119,
        lng: -74.0145170689,
        show: true,
        selected: false,
        address: 'Battery Park (State Street)',
        venue_id: '4ecfdc88e5e84d55c8d54fcb'
                },
    {
        title: 'Statue of Liberty',
        lat: 40.6893839339,
        lng: -74.0446007252,
        show: true,
        selected: false,
        address: 'Liberty Island',
        venue_id: '42893400f964a52054231fe3'
                },
    {
        title: 'Prison Ship Martyrs Monument',
        lat: 40.6918244477,
        lng: -73.9754855633,
        show: true,
        selected: false,
        address: 'Fort Greene Park',
        venue_id: '4b92d0aef964a520561e34e3'
                },
    {
        title: 'The Nobel Monument',
        lat: 40.7823022657,
        lng: -73.9746436867,
        show: true,
        selected: false,
        address: 'Theodore Roosevelt Park',
        venue_id: '4e5a6acab61c4aaa3e09fd38'
                },
    {
        title: 'The Roxy Hotel',
        lat: 40.7193391215,
        lng: -74.0048718452,
        show: true,
        selected: false,
        address: '2 Avenue of the Americas (btwn Walker & White St)',
        venue_id: '3fd66200f964a520bbe61ee3'
    },
    {
        title: 'Four Seasons Hotel New York Downtown',
        lat: 40.7127728912,
        lng: -74.0091103996,
        show: true,
        selected: false,
        address: '27 Barclay St (Broadway)',
        venue_id: '57c640ad498e74977f98372f'
    },
    {
        title: 'Hotel 50 Bowery NYC',
        lat: 40.7159364,
        lng: -73.9967894,
        show: true,
        selected: false,
        address: '50 Bowery (btw Bayard & Canal)',
        venue_id: '578692f4498e1054905dbde7'
    },
    {
        title: 'Hotel Chantelle',
        lat: 40.7185546571,
        lng: -73.9889973789,
        show: true,
        selected: false,
        address: '92 Ludlow St (btwn Delancey & Broome St)',
        venue_id: '4cbcafab035d236aebebe64e'
    },
    {
        title: 'Smyth Hotel',
        lat: 40.7153258921,
        lng: -74.0093359815,
        show: true,
        selected: false,
        address: '85 W Broadway (Chambers St)',
        venue_id: '49efcc88f964a52006691fe3'
    },
    {
        title: 'Soho Grand Hotel',
        lat: 40.7219552704,
        lng: -74.004377193,
        show: true,
        selected: false,
        address: '310 W Broadway (Between Grand Street & Canal Street)',
        venue_id: '3fd66200f964a52053eb1ee3'
    },
    {
        title: 'SoHo Grand Hotel Club Room',
        lat: 40.7219580076,
        lng: -74.0042521736,
        show: true,
        selected: false,
        address: '310 W Broadway (btwn Grand and Canal)',
        venue_id: '4c899f201eafb1f79c847335'
    }, {
        title: 'Bruins Stadium',
        lat: 40.8050065819,
        lng: -74.0016746521,
        show: true,
        selected: false,
        address: 'North Hudson Park',
        venue_id: '4e11eeaeb61c637b97b194e1'
    },
    {
        title: 'Stadium Storage',
        lat: 40.6923543,
        lng: -73.9854427,
        show: true,
        selected: false,
        address: '365 Bridge St',
        venue_id: '566735d6498e84c17f64f68b'
    },
    {
        title: 'Secret Stadium',
        lat: 40.703093539,
        lng: -73.9874421126,
        show: true,
        selected: false,
        address: '147 Front St',
        venue_id: '4c264859f1272d7f1b4786c5'
    },
    {
        title: 'Stadium Bar & Grill',
        lat: 40.7290175198,
        lng: -74.172222967,
        show: true,
        selected: false,
        address: 'Newark, NJ 07102',
        venue_id: '5111c3d2e4b077779b8fb2a8'
    }, {
        title: 'Yankee Stadium',
        lat: 40.8295578098,
        lng: -73.9266563755,
        show: true,
        selected: false,
        address: '1 E 161st St (btwn Jerome & Rivera Ave)',
        venue_id: '3fd66200f964a520ddf01ee3'
    },
    {
        title: 'MTA Subway - 161st St/Yankee Stadium (4/B/D)',
        lat: 40.8278609004,
        lng: -73.9256514609,
        show: true,
        selected: false,
        address: '1 E 161st St (River Ave)',
        venue_id: '4b5b08c9f964a520f9df28e3'
    },
    {
        title: 'Stadium Goods',
        lat: 40.7199551386,
        lng: -74.0020520257,
        show: true,
        selected: false,
        address: '47 Howard St (btwn Mercer St. & Broadway)',
        venue_id: '561b24e5498ec9037e2ed048'
    },
    {
        title: 'Hard Rock Cafe Yankee Stadium',
        lat: 40.8283911225,
        lng: -73.9261007309,
        show: true,
        selected: false,
        address: 'Yankee Stadium (Gate 6)',
        venue_id: '4ab659aff964a520b17620e3'
    },
    {
        title: 'Regal Cinemas Battery Park 11',
        lat: 40.714683,
        lng: -74.015023,
        show: true,
        selected: false,
        address: '102 N End Ave',
        venue_id: '49e7ce15f964a5201d651fe3'
    },
    {
        title: 'Stadium Pizza',
        lat: 40.8255439878,
        lng: -73.9266069407,
        show: true,
        selected: false,
        address: '157th (River Avenue)',
        venue_id: '4ac159f9f964a520dc9620e3'
    },
    {
        title: 'Stadium Pizzeria',
        lat: 40.7095446156,
        lng: -74.1018895851,
        show: true,
        selected: false,
        address: '321 State Rt 440 (Danforth Avenue)',
        venue_id: '4bfb33f0bbb7c928e6e60743'
    },
    {
        title: 'Regal Cinemas Union Square 14',
        lat: 40.734137,
        lng: -73.990753,
        show: true,
        selected: false,
        address: '850 Broadway',
        venue_id: '43a72ba0f964a520672c1fe3'
    },
    {
        title: 'Stadium Goods Market Center',
        lat: 40.7197116357,
        lng: -74.0023201799,
        show: true,
        selected: false,
        address: '305 Canal St',
        venue_id: '561b259d498e0c5c4d878c3b'
    }, {
        title: 'Queens Center Mall',
        lat: 40.734787249,
        lng: -73.8688409328,
        show: true,
        selected: false,
        address: '90-15 Queens Blvd (at 59th Ave)',
        venue_id: '4528a216f964a520173b1fe3'
    },
    {
        title: 'Manhattan Mall',
        lat: 40.749135023,
        lng: -73.9891867647,
        show: true,
        selected: false,
        address: '100 W 33rd St (at 6th Ave)',
        venue_id: '4a19bdd6f964a520477a1fe3'
    },
    {
        title: 'Fulton Mall',
        lat: 40.6905147164,
        lng: -73.9850181341,
        show: true,
        selected: false,
        address: 'Fulton St (btwn Flatbush Ave & Adams St)',
        venue_id: '4a5e557ff964a52062be1fe3'
    },
    {
        title: 'The Mall at Short Hills',
        lat: 40.7396366,
        lng: -74.3656369,
        show: true,
        selected: false,
        address: '1200 Morris Tpke',
        venue_id: '4a959788f964a520cb2320e3'
    },
    {
        title: 'Willowbrook Mall',
        lat: 40.8886349819,
        lng: -74.2594130713,
        show: true,
        selected: false,
        address: '1400 Willowbrook Mall',
        venue_id: '4ad50856f964a5206a0121e3'
    },
    {
        title: 'Menlo Park Mall',
        lat: 40.5477276418,
        lng: -74.3355323558,
        show: true,
        selected: false,
        address: '55 Parsonage Rd (Rt. 1)',
        venue_id: '4a63525af964a520bdc41fe3'
    },
    {
        title: 'Central Park Mall',
        lat: 40.772449379,
        lng: -73.9715480804,
        show: true,
        selected: false,
        address: 'Central Park',
        venue_id: '49ebbf61f964a52020671fe3'
    },
    {
        title: 'Staten Island Mall',
        lat: 40.5815422381,
        lng: -74.1657498492,
        show: true,
        selected: false,
        address: '2655 Richmond Ave',
        venue_id: '4a0896a2f964a520ee731fe3'
    },
    {
        title: 'Palisades Center Mall',
        lat: 41.0973535278,
        lng: -73.9566039221,
        show: true,
        selected: false,
        address: '1000 Palisades Center Dr',
        venue_id: '49bca48cf964a52043541fe3'
    },
    {
        title: 'Kings Plaza Mall',
        lat: 40.6100470887,
        lng: -73.9200496674,
        show: true,
        selected: false,
        address: '5100 Kings Plz (at Flatbush Ave)',
        venue_id: '4a40f778f964a520afa41fe3'
    },
    {
        title: 'Lux Accessories @ Shop Small Pop-Up Mall',
        lat: 40.7127808442,
        lng: -74.0059437988,
        show: true,
        selected: false,
        address: 'New York, NY 10282',
        venue_id: '4ec3cc39b63468c86d4c0737'
    },
    {
        title: 'Westfield World Trade Center',
        lat: 40.7116015143,
        lng: -74.0113681555,
        show: true,
        selected: false,
        address: '185 Greenwich St (btwn Fulton St & Cortlandt St)',
        venue_id: '509fd01de4b070da0a9d3c24'
    },
    {
        title: 'New World Mall Food Court',
        lat: 40.7596779673,
        lng: -73.8292039347,
        show: true,
        selected: false,
        address: '136-20 Roosevelt Ave (at Main St.)',
        venue_id: '4eade683cc21b06a57cde8b8'
    },
    {
        title: 'Green Acres Mall',
        lat: 40.662459136,
        lng: -73.719291687,
        show: true,
        selected: false,
        address: '2034 Green Acres Mall, Sunrise Highway (at Sunrise Hwy)',
        venue_id: '45ebc90ef964a5208f431fe3'
    },
    {
        title: 'The Mall at Bay Plaza',
        lat: 40.8644517333,
        lng: -73.8275733986,
        show: true,
        selected: false,
        address: '200 Baychester Ave',
        venue_id: '53da8b41498eb2fa60cd3341'
    },
    {
        title: 'Woodbridge Center Mall',
        lat: 40.5563058975,
        lng: -74.2994374923,
        show: true,
        selected: false,
        address: '250 Woodbridge Center Dr (Route 1 and Route 9)',
        venue_id: '4a960f12f964a520eb2520e3'
    },
    {
        title: 'Paramus Park Mall',
        lat: 40.956639949,
        lng: -74.0688693523,
        show: true,
        selected: false,
        address: '700 Paramus Park (btwn Route 17 & Garden State Pkwy)',
        venue_id: '4a991c59f964a520662d20e3'
    },
    {
        title: 'New World Mall 新世界商城',
        lat: 40.7596530907,
        lng: -73.8292735334,
        show: true,
        selected: false,
        address: '136-20 Roosevelt Ave (at Main St.)',
        venue_id: '4c0fcbf7336220a1245ece77'
    },
    {
        title: 'Jamba Juice Newport Centre Mall',
        lat: 40.726817,
        lng: -74.036872,
        show: true,
        selected: false,
        address: '30 Mall Dr. W., Unit B26, (at Newport Centre)',
        venue_id: '4c350a623896e21ec69cec90'
    }
];

var ViewModel = function ()

{

    var self = this;

    self.errorDisplay = ko.observable('');
    self.mapArray = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < placesData.length; i++) {
        var place = new google.maps.Marker({
            position: {
                lat: placesData[i].lat,
                lng: placesData[i].lng
            },
            map: map,
            title: placesData[i].title,
            show: ko.observable(placesData[i].show),
            selected: ko.observable(placesData[i].selected),
            venue_id: placesData[i].venue_id,
            address: placesData[i].address, // venue id used for foursquare
            animation: google.maps.Animation.DROP
        });

        self.mapArray.push(place);
        bounds.extend(place.position);
    }

    // function for animation to make markers bounce but stop after 600ms
    self.Bounce = function (marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () {
            marker.setAnimation(null);
        }, 600);
    };

    // function to add ImageURL to each marker
    self.addApiInfo = function (marker) {
        $.ajax({
            url: "https://api.foursquare.com/v2/venues/" + marker.venue_id + "/photos?client_id=TPXVAORKOB34XX2UORPW1ICYZX4NIFRL2NMREY55SH2J4V5T&client_secret=EBPYOEXAXRFSTYIBREQO4HFELCX4IRONX1HVTBM5VP4R0HK5&v=20180323",
            dataType: "json",
            success: function (data) {
                marker.imageUrl = '';
                if (data['response']['photos']['items']) {
                    try {
                        firstpic = data['response']['photos']['items'][0];
                        //console.log(firstpic);
                        prefix = firstpic['prefix'];
                        suffix = firstpic['suffix'];
                        marker.imageURL = prefix + "300x300" + suffix;
                    } catch (err) {
                        marker.imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0dy5BlxR6959aQ9UkqQOuYXQHgBvE6eVHotrNdSpXmMgdSK8"
                    }
                } else {
                    marker.imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0dy5BlxR6959aQ9UkqQOuYXQHgBvE6eVHotrNdSpXmMgdSK8"
                }
            },

            // warn if there is error in recievng json
            error: function (e) {
                self.errorDisplay("Image is not Available for some location.");
            }
        });
    };

    //function to add information about API to the markers
    var addMarkerInfo = function (marker) {

        //add API items to each marker
        self.addApiInfo(marker);

        //add the click event listener to marker
        marker.addListener('click', function () {
            //set this marker to the selected state

            self.setSelected(marker);
        });
    };
    map.fitBounds(bounds);

    //  iterate through mapArray and add marker api info  
    for (var i = 0; i < self.mapArray.length; i++) {
        addMarkerInfo(self.mapArray[i]);
    }

    // create a searchText for the input search field
    self.searchText = ko.observable('');


    //every keydown is called from input box
    self.filterList = function () {
        //variable for search text
        var currentText = self.searchText();
        infowindow.close();

        //list for user search
        if (currentText.length === 0) {
            self.setAllShow(true);
        } else {
            for (var i = 0; i < self.mapArray.length; i++) {
                // to check whether the searchText is there in the mapArray
                if (self.mapArray[i].title.toLowerCase().indexOf(currentText.toLowerCase()) > -1) {
                    self.mapArray[i].show(true);
                    self.mapArray[i].setVisible(true);
                } else {
                    self.mapArray[i].show(false);
                    self.mapArray[i].setVisible(false);
                }
            }
        }
        infowindow.close();
    };

    // to show all the markers
    self.setAllShow = function (marker) {
        for (var i = 0; i < self.mapArray.length; i++) {
            self.mapArray[i].show(marker);
            self.mapArray[i].setVisible(marker);
        }
    };
    // function to make all the markers unselected 
    self.setAllUnselected = function () {
        for (var i = 0; i < self.mapArray.length; i++) {
            self.mapArray[i].selected(false);
        }
    };

    self.currentLocation = self.mapArray[0];

    // function to make all the markers selected and show the likes and ratings

    self.setSelected = function (location) {
        self.setAllUnselected();
        location.selected(true);

        self.currentLocation = location;

        Address = function () {
            if (self.currentLocation.address === '' || self.currentLocation.address === undefined) {
                return "Address not  available for this location";
            } else {
                return "Address: " + self.currentLocation.address;
            }
        };

        //marker will show Address and image
        var InfoWindow = "<h3>" + self.currentLocation.title + "</h3>" + "<div>" + Address() + "</div>" + "<img src=" + "'" + self.currentLocation.imageURL + "'/>";

        infowindow.setContent(InfoWindow);

        infowindow.open(map, location);
        self.Bounce(location);
    };
};

function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'), {
            center: {
                lat: 40.7413549,
                lng: -73.9980244
            },
            zoom: 8,
            mapTypeControl: false
        }
    );
    infowindow = new google.maps.InfoWindow();

    ko.applyBindings(new ViewModel());
}

function mapError() {
    document.getElementById('map-error').innerHTML = "Error in Map!";
}
