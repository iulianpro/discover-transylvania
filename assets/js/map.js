function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: mainLocation
    });

    addMarker();
}

let map;
let infoLocation = [];
let mainLocation = {
    lat: 46.23153292370858,
    lng: 24.624755457043655
};

let markerPlace = [{
    nameLocation: "Viscri",
    LatLng: [{
        lat: 46.0548679,
        lng: 25.0885011
    }],
    imgLocation: "visit-1.jpg",
    contentLocation: "Is part of Transylvania UNESCO World Heritage Site. It was built in 12th century being known as a place often visited by the Prince Charles."
},
{
    nameLocation: "Sinaia",
    LatLng: [{
        lat: 45.36002715,
        lng: 25.54266688425395
    }],
    imgLocation: "visit-2.jpg",
    contentLocation: "Is part of Transylvania UNESCO World Heritage Site. It was built in 12th century being known as a place often visited by the Prince Charles."
},
{
    nameLocation: "Brasov",
    LatLng: [{
        lat: 45.6424272,
        lng: 25.5885655
    }],
    imgLocation: "visit-3.jpg",
    contentLocation: "Is part of Transylvania UNESCO World Heritage Site. It was built in 12th century being known as a place often visited by the Prince Charles."
},
{
    nameLocation: "Cluj Napoca",
    LatLng: [{
        lat: 46.77029470580725,
        lng: 23.589161395502746
    }],
    imgLocation: "visit-4.jpg",
    contentLocation: "Is part of Transylvania UNESCO World Heritage Site. It was built in 12th century being known as a place often visited by the Prince Charles."
},
{
    nameLocation: "Bran",
    LatLng: [{
        lat: 45.5150774,
        lng: 25.367237292659574
    }],
    imgLocation: "main-image.jpg",
    contentLocation: "Is part of Transylvania UNESCO World Heritage Site. It was built in 12th century being known as a place often visited by the Prince Charles."
}
];

window.onload = function () {
    initMap();
};

function addMarker() {
    for (let i = 0; i < markerPlace.length; i++) {
        let contentBlock = '<div><h4 class="text-center">' + markerPlace[i].nameLocation +
            '</h4><div><img class="imgContent" src="assets/images/' +
            markerPlace[i].imgLocation + '"><p class="infoContent">' +
            markerPlace[i].contentLocation + '</p></div></div>';

        const marker = new google.maps.Marker({
            position: markerPlace[i].LatLng[0],
            title: markerPlace[i].nameLocation,
            map: map
        });

        const infoArea = new google.maps.InfoWindow({
            content: contentBlock,
            maxWidth: 650
        });

        marker.addListener('click', function () {
            closePreviousArea();
            infoArea.open(marker.get('map'), marker);
            infoLocation[0] = infoArea;
        });
    }
}

function closePreviousArea() {
    if (infoLocation.length > 0) {
        infoLocation[0].set("marker", null);
        infoLocation[0].close();
        infoLocation.length = 0;
    }
}