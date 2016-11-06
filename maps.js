// This example creates a simple polygon representing the Bermuda Triangle.

function initMap() {
  var vij = {lat: 16.494946, lng:80.688971}
  var vij2={lat: 16.508603, lng:80.688971}
  var vij3={lat: 16.503275, lng:80.644390}
 
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {
      lat: 16.886,
      lng: 80.268
    },
    mapTypeId: 'terrain'
  });
//console.log(map);
var contentString1='<div id="content">'+
 '<div class="divtablehead"><div class="col1head">Place</div><div class="col2head">KMs</div></div>'+
     '<div class="divtable"><div class="col1">Machilipatnam</div><div class="col2">64</div></div>'+
      '</div>'+
	'</div>';

  var contentString2='<div id="content">'+
 '<div class="divtablehead"><div class="col1head">Place</div><div class="col2head">KMs</div></div>'+
     '<div class="divtable"><div class="col1">Airport</div><div class="col2">6</div></div>'+
      '</div>'+
	'</div>';
 
 var contentString3='<div id="content">'+
 '<div class="divtablehead"><div class="col1head">Place</div><div class="col2head">KMs</div></div>'+
     '<div class="divtable"><div class="col1">PvSCollege</div><div class="col2">20</div></div>'+
      '</div>'+
	'</div>';
// var contentString = '<div id="content">'+
           
//              '<h1 id="firstHeading" class="firstHeading">vijayawada</h1>'+
//       //       '<table id="t1">'+
//       //  '<tr>'+hiii+'</tr>'+
//       //       '</table>'+

// '</div>';

        var infowindow1 = new google.maps.InfoWindow({
          content: contentString1
        });

        var marker1 = new google.maps.Marker({
          position: vij,
          map: map,
          title: 'Vijayawada'
        });
        marker1.addListener('click', function() {
          infowindow1.open(map, marker1);
        });
      
 var infowindow2 = new google.maps.InfoWindow({
          content: contentString2
        });

        var marker2 = new google.maps.Marker({
          position: vij2,
          map: map,
          title: 'Vijayawada'
        });
        marker2.addListener('click', function() {
          infowindow2.open(map, marker2);
        });

var infowindow3 = new google.maps.InfoWindow({
          content: contentString3
        });

        var marker3 = new google.maps.Marker({
          position: vij3,
          map: map,
          title: 'Vijayawada'
        });
        marker3.addListener('click', function() {
          infowindow3.open(map, marker3);
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
  } ,{
    lat: 16.51460570242487,
    lng: 80.72256088256836,
  }, {
    lat: 16.512630733746672,
    lng: 80.7081413269043
  }];
  
  

  // Construct the polygon.
  var vijayawada1 = new google.maps.Polygon({
    paths: vij1Coords,
    strokeColor: '#491027',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#491027',
    fillOpacity: 0.35
  });
  vijayawada1.setMap(map);

  var vijayawada2 = new google.maps.Polygon({
    paths: vij2Coords,
    strokeColor: '#331E1E',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#331E1E',
    fillOpacity: 0.35
  });
  vijayawada2.setMap(map);

var vijayawada3 = new google.maps.Polygon({
    paths: vij3Coords,
    strokeColor: '#f43782',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#f43782',
    fillOpacity: 0.35
  });
  vijayawada3.setMap(map);
}

// '<div id="siteNotice">'+
// 	'</div>'+
// 	'<h1 id="firstHeading" class="firstHeading">Vijayawada</h1>'+
// 	'<div id="bodyContent">'+ '<div style="float:left; width:20%;"><img src="vja-main.jpg" width="120" height="80"/></div>' +
// 	'<div style="float:right; width:80%;margin-top: -19px;"><p>The <b>Vijayawada</b> is the capital of Andrapadesh state. <br/>' +
// 	'The original complex with 2 million square feet of office space is the company\'s second largest square footage '+
// 	'assemblage of Google buildings (The largest Google building is the 2.9 million square foot building in New York City '+
// 	'which Google bought in 2010) '+
// 	// '<p>Attribution: Googleplex, <a href="http://en.wikipedia.org/wiki/Googleplex">'+
// 	// 'http://en.wikipedia.org/wiki/Googleplex</a> '+
// 	'.</p>'+'</div>'+
// 	'</div>'+

