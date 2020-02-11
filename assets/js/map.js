function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7.2,
        center: mainLocation
    });

    addMarker();
}

let map;
let infoLocation = [];
let mainLocation = {
    lat: 46.48502588469381,
    lng: 24.657045361236673
};

let markerPlace = [{
    nameLocation: "Viscri Fortified Church",
    LatLng: [{
        lat: 46.0548679,
        lng: 25.0885011
    }],
    imgLocation: "visit-1.jpg",
    contentLocationOne: "The fortified church in Viscri, Brașov county, was built in the 13th century on the basis of an old Roman basilica da-ting from the 12th century.",
    contentLocationTwo: "The ensemble of the fortified evangelical church formed of the church, the fortified enclosure, with a defensive road, two towers, two bastions, a gate tower is a historical monument. The church was fortified in the 15th century and transformed into a fortified church with towers, bastions and two defensive walls. ",
    redirectLink: "https://en.wikipedia.org/wiki/Viscri_fortified_church"
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
            markerPlace[i].contentLocationOne + '</p><p class="infoContent">' +
            markerPlace[i].contentLocationTwo + '<a target="_blank" href="' + 
            markerPlace[i].redirectLink + '">(read more on Wikipedia)</a></p></div></div>';

        const marker = new google.maps.Marker({
            position: markerPlace[i].LatLng[0],
            title: markerPlace[i].nameLocation,
            map: map
        });

        const infoArea = new google.maps.InfoWindow({
            content: contentBlock,
            maxWidth: 640
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