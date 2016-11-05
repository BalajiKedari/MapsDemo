// This example creates a simple polygon representing the Bermuda Triangle.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {
      lat: 16.886,
      lng: 80.268
    },
    mapTypeId: 'terrain'
  });

  // Define the LatLng coordinates for the polygon's path.
  var vij1Coords = [{
    lat: 16.524151099794384,
    lng: 80.67707061767578
  }, {
    lat: 16.524480243014946,
    lng: 80.65346717834473
  }, {
    lat: 16.51180782417422,
    lng: 80.61982154846191
  }, {
    lat: 16.493949823791304,
    lng: 80.64994812011719
  }, {
    lat: 16.524151099794384,
    lng: 80.67707061767578
  }];


  var vij2Coords = [{
    lat: 16.523575097808624,
    lng: 80.67792892456055
  }, {
    lat: 16.49757093409857,
    lng: 80.65535545349121

  }, {
    lat: 16.48045236120222,
    lng: 80.69732666015625
  }, {
    lat: 16.513577075423445,
    lng: 80.70689678192139
  }, {
    lat: 16.523575097808624,
    lng: 80.67792892456055
  }];
  var vij3Coords = [{
    lat: 16.512630733746672,
    lng: 80.7081413269043
  }, {
    lat: 16.479382400137027,
    lng: 80.69887161254883

  }, {
    lat: 16.468517845437024,
    lng: 80.70247650146484
  }, {
    lat: 16.460945219845577,
    lng: 80.7388687133789
  }, {
    lat: 16.503413946435582,
    lng: 80.74092864990234
  } {
    lat: 16.51460570242487,
    lng: 80.72256088256836,
  }, {
    lat: 16.512630733746672,
    lng: 80.7081413269043
  }];
  
  var vijayawada3 = new google.maps.Polygon({
    paths: vij3Coords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  vijayawada2.setMap(map);





  // Construct the polygon.
  var vijayawada1 = new google.maps.Polygon({
    paths: vij1Coords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  vijayawada1.setMap(map);
  var vijayawada2 = new google.maps.Polygon({
    paths: vij2Coords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  vijayawada2.setMap(map);

}
