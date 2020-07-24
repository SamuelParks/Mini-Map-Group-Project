// Leaflet Mini-Project

// Define formatter used to convert currency to $xxx,xxx,xxx format
// for use in popups
const formatter = new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          minimumFractionDigits: 0
                        })

// Define global arrays of Leaflet markers
var stadiumAFCMarkers = [];
var stadiumNFCMarkers = [];
var capMarkers = [];
var stadiumSizeMarkers = [];
var superbowlWinsMarkers = [];
var averageAttendanceMarkers = [];

// Define input file location
var geoJSONData = "./static/data/stadiums.geojson"

// Read input GeoJSON file 
d3.json(geoJSONData, function(data) {

  // Create AFC vs NFC Stadium Markers
  for (var i = 0; i < data.features.length; i++) {
    if (data.features[i].properties.Conference == "AFC") {
      
      // AFC Stadiums as red circle markers
      
      // For current stadium, create one lat-long array
      var coordinates = [];
      coordinates.push(data.features[i].geometry.coordinates[1]);
      coordinates.push(data.features[i].geometry.coordinates[0]);

      // Create a Leaflet circle marker and bind popup
      stadiumAFCMarkers.push(
        L.circle(coordinates, {
          stroke: false,
          fillOpacity: 1,
          color: "grey",
          fillColor: "red",
          radius: 20000
        }).bindPopup("<b>Stadium Name:</b> " + data.features[i].properties.Stadium    + "<br>" +
        "<b>Team:</b> "         + data.features[i].properties.Team       + "<br>" +
        "<b>Conference:</b> "   + data.features[i].properties.Conference + "<br>" +
        "<hr>" +
        "<b>Capacity:</b> "    + data.features[i].properties.Capacity   + "<br>" +
        "<b>Average 2019 Attendance:</b> " + data.features[i].properties.Average2019Attendance + "<br>" +
        "<b>Surface:</b> "     + data.features[i].properties.Surface    + "<br>" +
        "<b>Roof Type:</b> "   + data.features[i].properties.RoofType   + "<br>" +
        "<hr>" +
        "<b>Total Salary Cap:</b> " + formatter.format(data.features[i].properties.TotalCap) + "<br>" +
        "<b>Superbowl Wins:</b> "   + data.features[i].properties.SuperbowlWins + "<br>" +
        "<b>Superbowl Appearances:</b> " + data.features[i].properties.SuperbowlAppearances
        )
      )
    }
    else {
      
      // NFC Stadiums as grey circle markers

      // For current stadium, create one lat-long array
      var coordinates = [];
      coordinates.push(data.features[i].geometry.coordinates[1]);
      coordinates.push(data.features[i].geometry.coordinates[0]);

      // Create a Leaflet circle marker and bind popup      
      stadiumNFCMarkers.push(
        L.circle(coordinates, {
          stroke: false,
          fillOpacity: 1,
          color: "grey",
          fillColor: "blue",
          radius: 20000
        }).bindPopup("<b>Stadium Name:</b> " + data.features[i].properties.Stadium    + "<br>" +
        "<b>Team:</b> "         + data.features[i].properties.Team       + "<br>" +
        "<b>Conference:</b> "   + data.features[i].properties.Conference + "<br>" +
        "<hr>" +
        "<b>Capacity:</b> "    + data.features[i].properties.Capacity   + "<br>" +
        "<b>Average 2019 Attendance:</b> " + data.features[i].properties.Average2019Attendance + "<br>" +
        "<b>Surface:</b> "     + data.features[i].properties.Surface    + "<br>" +
        "<b>Roof Type:</b> "   + data.features[i].properties.RoofType   + "<br>" +
        "<hr>" +
        "<b>Total Salary Cap:</b> " + formatter.format(data.features[i].properties.TotalCap) + "<br>" +
        "<b>Superbowl Wins:</b> "   + data.features[i].properties.SuperbowlWins + "<br>" +
        "<b>Superbowl Appearances:</b> " + data.features[i].properties.SuperbowlAppearances
        )
      ) 
    }
  }

  // Create Total Salary Cap markers
  for (var i = 0; i < data.features.length; i++) {
    
    // For current data, create one lat-long array
    var coordinates = [];
    coordinates.push(data.features[i].geometry.coordinates[1]);
    coordinates.push(data.features[i].geometry.coordinates[0]);

    // Create a Leaflet circle marker and bind popup   
    capMarkers.push(
      L.circle(coordinates, {
        stroke: false,
        fillOpacity: 0.45,
        color: "white",
        fillColor: "green",
        radius: (data.features[i].properties.TotalCap / 2000)
      }).bindPopup("<b>Stadium Name:</b> " + data.features[i].properties.Stadium    + "<br>" +
      "<b>Team:</b> "         + data.features[i].properties.Team       + "<br>" +
      "<b>Conference:</b> "   + data.features[i].properties.Conference + "<br>" +
      "<hr>" +
      "<b>Capacity:</b> "    + data.features[i].properties.Capacity   + "<br>" +
      "<b>Average 2019 Attendance:</b> " + data.features[i].properties.Average2019Attendance + "<br>" +
      "<b>Surface:</b> "     + data.features[i].properties.Surface    + "<br>" +
      "<b>Roof Type:</b> "   + data.features[i].properties.RoofType   + "<br>" +
      "<hr>" +
      "<b>Total Salary Cap:</b> " + formatter.format(data.features[i].properties.TotalCap) + "<br>" +
      "<b>Superbowl Wins:</b> "   + data.features[i].properties.SuperbowlWins + "<br>" +
      "<b>Superbowl Appearances:</b> " + data.features[i].properties.SuperbowlAppearances
      )
    )
  }

  // Create Stadium Capacity markers
  for (var i = 0; i < data.features.length; i++) {
    
    // For current data, create one lat-long array
    var coordinates = [];
    coordinates.push(data.features[i].geometry.coordinates[1]);
    coordinates.push(data.features[i].geometry.coordinates[0]);

    // Create a Leaflet circle marker and bind popup  
    stadiumSizeMarkers.push(
      L.circle(coordinates, {
        stroke: false,
        fillOpacity: 0.35,
        color: "white",
        fillColor: "purple",
        radius: data.features[i].properties.Capacity
      }).bindPopup("<b>Stadium Name:</b> " + data.features[i].properties.Stadium    + "<br>" +
      "<b>Team:</b> "         + data.features[i].properties.Team       + "<br>" +
      "<b>Conference:</b> "   + data.features[i].properties.Conference + "<br>" +
      "<hr>" +
      "<b>Capacity:</b> "    + data.features[i].properties.Capacity   + "<br>" +
      "<b>Average 2019 Attendance:</b> " + data.features[i].properties.Average2019Attendance + "<br>" +
      "<b>Surface:</b> "     + data.features[i].properties.Surface    + "<br>" +
      "<b>Roof Type:</b> "   + data.features[i].properties.RoofType   + "<br>" +
      "<hr>" +
      "<b>Total Salary Cap:</b> " + formatter.format(data.features[i].properties.TotalCap) + "<br>" +
      "<b>Superbowl Wins:</b> "   + data.features[i].properties.SuperbowlWins + "<br>" +
      "<b>Superbowl Appearances:</b> " + data.features[i].properties.SuperbowlAppearances
      )
    )
  }

  // Create Superbowl Wins markers
  for (var i = 0; i < data.features.length; i++) {

    // For current data, create one lat-long array
    var coordinates = [];
    coordinates.push(data.features[i].geometry.coordinates[1]);
    coordinates.push(data.features[i].geometry.coordinates[0]);

    // Create a Leaflet circle marker and bind popup  
    superbowlWinsMarkers.push(
      L.circle(coordinates, {
        stroke: false,
        fillOpacity: 0.55,
        color: "white",
        fillColor: "orange",
        radius: data.features[i].properties.SuperbowlWins * 50000
      }).bindPopup("<b>Stadium Name:</b> " + data.features[i].properties.Stadium    + "<br>" +
      "<b>Team:</b> "         + data.features[i].properties.Team       + "<br>" +
      "<b>Conference:</b> "   + data.features[i].properties.Conference + "<br>" +
      "<hr>" +
      "<b>Capacity:</b> "    + data.features[i].properties.Capacity   + "<br>" +
      "<b>Average 2019 Attendance:</b> " + data.features[i].properties.Average2019Attendance + "<br>" +
      "<b>Surface:</b> "     + data.features[i].properties.Surface    + "<br>" +
      "<b>Roof Type:</b> "   + data.features[i].properties.RoofType   + "<br>" +
      "<hr>" +
      "<b>Total Salary Cap:</b> " + formatter.format(data.features[i].properties.TotalCap) + "<br>" +
      "<b>Superbowl Wins:</b> "   + data.features[i].properties.SuperbowlWins + "<br>" +
      "<b>Superbowl Appearances:</b> " + data.features[i].properties.SuperbowlAppearances
      )
    )
  }

    // Create Average Attendance markers
    for (var i = 0; i < data.features.length; i++) {

      // For current data, create one lat-long array
      var coordinates = [];
      coordinates.push(data.features[i].geometry.coordinates[1]);
      coordinates.push(data.features[i].geometry.coordinates[0]);
  
      // Create a Leaflet circle marker and bind popup  
      averageAttendanceMarkers.push(
        L.circle(coordinates, {
          stroke: false,
          fillOpacity: 0.55,
          color: "white",
          fillColor: "slateblue",
          radius: data.features[i].properties.Average2019Attendance
        }).bindPopup("<b>Stadium Name:</b> " + data.features[i].properties.Stadium    + "<br>" +
        "<b>Team:</b> "         + data.features[i].properties.Team       + "<br>" +
        "<b>Conference:</b> "   + data.features[i].properties.Conference + "<br>" +
        "<hr>" +
        "<b>Capacity:</b> "    + data.features[i].properties.Capacity   + "<br>" +
        "<b>Average 2019 Attendance:</b> " + data.features[i].properties.Average2019Attendance + "<br>" +
        "<b>Surface:</b> "     + data.features[i].properties.Surface    + "<br>" +
        "<b>Roof Type:</b> "   + data.features[i].properties.RoofType   + "<br>" +
        "<hr>" +
        "<b>Total Salary Cap:</b> " + formatter.format(data.features[i].properties.TotalCap) + "<br>" +
        "<b>Superbowl Wins:</b> "   + data.features[i].properties.SuperbowlWins + "<br>" +
        "<b>Superbowl Appearances:</b> " + data.features[i].properties.SuperbowlAppearances
        )
      )
    }


  // Create layer groups
  var AFCstadiums = L.layerGroup(stadiumAFCMarkers);
  var NFCstadiums = L.layerGroup(stadiumNFCMarkers);
  var totalCaps = L.layerGroup(capMarkers);
  var stadiumCapacities = L.layerGroup(stadiumSizeMarkers);
  var superbowlWins = L.layerGroup(superbowlWinsMarkers);
  var averageAttendance = L.layerGroup(averageAttendanceMarkers);

  // Create tileLayer for streetmap (light)
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  // Create tileLayer for dark map
  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });

  // Create a baseMaps object
  var baseMaps = {
    "Street Map" : streetmap,
    "Dark Map" : darkmap
  }

  // Create an overlay object
  var overlayMaps = {
    "NFL AFC Stadiums": AFCstadiums,
    "NFL NFC Stadiums": NFCstadiums,
    "NFL Total Salary Cap": totalCaps,
    "Stadium Capacity": stadiumCapacities,
    "Superbowl Wins": superbowlWins,
    "Average Attendance" : averageAttendance
  };
  
  // Create myMap object and add layers in order
  var myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 5,
    layers: [streetmap, superbowlWins, totalCaps, stadiumCapacities, averageAttendance, AFCstadiums, NFCstadiums]
  });

  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

});