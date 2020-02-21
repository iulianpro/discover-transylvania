/**
 * Variable declaration for map, current infowindow, json data content, main location map and
 * main zoom map (depending on the size of the device screen)
 */

let map;
let infoLocation = [];
let markerPlaceData = [];
const mainLocation = {
    lat: 46.48502588469381,
    lng: 24.257045361236673
};

if (window.matchMedia('(min-width: 768px)').matches) {
    mainZoom = 8;
} else {
    mainZoom = 7;
}

window.onload = function () {
    initMap();
};

/**
 * Initialization and controls customization google map
 */

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: mainZoom,
        center: mainLocation,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            mapTypeIds: ['ROADMAP']
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_CENTER
        }
    });

    addMarker();
}

/**
 * Import data from .json file
 */

$.getJSON('assets/data/locations.json', function (data) {
    $.each(data, function (index, value) {
        markerPlaceData.push(value);
    });
});

/**
 * Function that implements markers in the map, infowindow and listener events for each location
 */

function addMarker() {
    for (let i = 0; i < markerPlaceData.length; i++) {
        let contentBlock = `
        <div id="infowindow">
            <h4 class="text-center">${markerPlaceData[i].nameLocation}</h4>
            <div class="imgbox">
                <img class="imgContent" src="assets/images/${markerPlaceData[i].imgLocation}">
            </div>
            <div class="infoContent">
                <p>${markerPlaceData[i].contentLocationOne}</p>
                <p class="infoContent">${markerPlaceData[i].contentLocationTwo}
                    <a target="_blank" rel="noopener" href="${markerPlaceData[i].redirectLink}">(read more)</a>
                </p>
            </div>
        </div>`;

        const marker = new google.maps.Marker({
            position: markerPlaceData[i].LatLng[0],
            title: markerPlaceData[i].nameLocation,
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

/**
 * Function for automatically closing the previously opened card when the user clicks on a new marker
 */

function closePreviousArea() {
    if (infoLocation.length > 0) {
        infoLocation[0].set('marker', null);
        infoLocation[0].close();
        infoLocation.length = 0;
    }
}