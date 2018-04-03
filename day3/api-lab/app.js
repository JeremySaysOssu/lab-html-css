var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var map;
var map1;

$(document).ready(function(){

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 11.6, lng: 43.16},
    zoom: 8
  });

})

map1 = new google.maps.Map(document.getElementById('map1'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});

$.ajax({
  method: 'GET',
  url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
  dataType: 'json',
  success: onSuccess
});

function onSuccess(responseDate){
  // below tell what we want to pull out.
  //  for (i=0); i<responseDate.length; i++) {
  let where = responseDate.features[0].properties.title;
  let where1 = responseDate.features[1].properties.title;
  // puts info in the div areas.
  $('#info').text(where);
  $('#info').append('<div>' + where1  + '</div>');
}
