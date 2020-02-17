// initialization and controls customization google map

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

if(window.matchMedia('(min-width: 768px)').matches) {
    mainZoom = 8;
} else {
    mainZoom = 7;
}

// define variables for map

let map;
let infoLocation = [];
let mainLocation = {
    lat: 46.48502588469381,
    lng: 24.257045361236673
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
    nameLocation: "The Royal Palace Peles Sinaia",
    LatLng: [{
        lat: 45.36002715,
        lng: 25.54266688425395
    }],
    imgLocation: "visit-2.jpg",
    contentLocationOne: "Peleș Castle is a palace in Sinaia, built between 1873 and 1914. Is currently owned by the Royal Family of Romania and houses the Peleș National Museum.",
    contentLocationTwo: "Peleș Castle in Sinaia, the summer residence of the kings of Romania, was built at the will of King Carol I of Romania (1866-1914) and is one of the most important historical buildings in Romania, having a unique character and is one of the most important monuments of its kind in Europe in the second half of the nineteenth century. ",
    redirectLink: "https://en.wikipedia.org/wiki/Pele%C8%99_Castle"
},
{
    nameLocation: "Sfatului Square and Black Church Brasov",
    LatLng: [{
        lat: 45.6424272,
        lng: 25.5885655
    }],
    imgLocation: "visit-6.jpg",
    contentLocationOne: "The Piata Sfatului was, in the Middle Ages, the place where fairs were organized in Brașov for both Saxon and Hungarian as well as for those who came from Romania.",
    contentLocationTwo: "The most important building in this square is the Black Church. It is one of the most representative monuments of gothic architecture in Romania. It is considered to be the largest church in Romania. Due to its size, when it was completed in 1477, it received the title of the largest church between Vienna and Constantinople. ",
    redirectLink: "https://en.wikipedia.org/wiki/Biserica_Neagr%C4%83"
},
{
    nameLocation: "St. Michael's Church Cluj",
    LatLng: [{
        lat: 46.77029470580725,
        lng: 23.589161395502746
    }],
    imgLocation: "visit-4.jpg",
    contentLocationOne: "The Catholic Church of St. Michael's is one of the most representative monuments of the Gothic architecture of Transylvania, it's 70m long and 80m height.",
    contentLocationTwo: "Was build on a site that served as a cemetery and where there was a chapel dedicated to St. James. The main document attesting the existence of the edifice is one issued by the papal court in Avignon, from January 1349. The construction began in 1316 and was completed in 1390, followed by a second phase between 1410-1487. ",
    redirectLink: "https://en.wikipedia.org/wiki/St._Michael%27s_Church,_Cluj-Napoca"
},
{
    nameLocation: "Bran Dracula's Castle",
    LatLng: [{
        lat: 45.5150774,
        lng: 25.367237292659574
    }],
    imgLocation: "visit-5.jpg",
    contentLocationOne: "The Castle is in Bran at 25 km sw of Brașov. It's a national monument museum. The fortress is on the Transylvanian side of the historical border with Wallachia.",
    contentLocationTwo: "Commonly known as Dracula's Castle it is often erroneously referred to as the home of the title character in Bram Stoker's Dracula. There is no evidence that Stoker knew anything about this castle which has only tangential associations with Vlad the Impaler, voivode of Wallachia, the putative inspiration for Dracula. ",
    redirectLink: "http://www.bran-castle.com/"
},
{
    nameLocation: "Corvin Hunyadi Castle",
    LatLng: [{
        lat: 45.749141,
        lng: 22.888279
    }],
    imgLocation: "main-image.jpg",
    contentLocationOne: "The Corvin Castle, also called the Hunyadi Castle is considered one of the most beautiful castles in the world, being located in top 10 destinations in Europe",
    contentLocationTwo: "The fortress was one of the largest and most famous properties of Iancu de Hunedoara, governor and regent of Hungary between 1446-1453, the father of the future king Matia Corvin. During the construction it underwent significant transformations, being both a strengthened strategic point and a feudal residence.",
    redirectLink: "https://en.wikipedia.org/wiki/Corvin_Castle"
}
];

window.onload = function () {
    initMap();
};

// function that implements in the map markers, infowindow and listener events for each location

function addMarker() {
    for (let i = 0; i < markerPlace.length; i++) {
        let contentBlock = '<div id="infowindow"><h4 class="text-center">' + markerPlace[i].nameLocation +
            '</h4><div class="imgbox"><img class="imgContent" src="assets/images/' +
            markerPlace[i].imgLocation + '"></div><div class="infoContent"><p>' +
            markerPlace[i].contentLocationOne + '</p><p class="infoContent">' +
            markerPlace[i].contentLocationTwo + '<a target="_blank" href="' +
            markerPlace[i].redirectLink + '">(read more)</a></p></div></div>';

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

// function for automatically closing the previously opened card when the user clicks on a new marker

function closePreviousArea() {
    if (infoLocation.length > 0) {
        infoLocation[0].set("marker", null);
        infoLocation[0].close();
        infoLocation.length = 0;
    }
}