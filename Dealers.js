$(document).ready(function(){
    
  var dealers=getDealers();
  console.log(dealers);
});

function getDealers(){

var response = [{
  "location": null,
  "boundary": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          81.09,
          16.18
        ],
        [
          81.12,
          16.21
        ],
        [
          81.15,
          16.22
        ],
        [
          81.19,
          16.21
        ],
        [
          81.19,
          16.18
        ],
        [
          81.18,
          16.16
        ],
        [
          81.15,
          16.13
        ],
        [
          81.12,
          16.13
        ],
        [
          81.08,
          16.15
        ],
        [
          81.09,
          16.18
        ]
      ]
    ]
  },
  "id": "mtmdealer",
  "name": "jagan jonnala",
  "type": 1,
  "lastUpdateDate": "2016-11-01T23:48:52.1403825+00:00"
}, {
  "location": null,
  "boundary": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          81.11772537231445,
          16.200663279695725
        ],
        [
          81.11394882202148,
          16.180551191209034
        ],
        [
          81.10090255737305,
          16.16884567192047
        ],
        [
          81.09283447265625,
          16.154831110126484
        ],
        [
          81.11583709716797,
          16.15037921793509
        ],
        [
          81.14124298095703,
          16.16505359441981
        ],
        [
          81.16630554199219,
          16.188134678408776
        ],
        [
          81.17145538330077,
          16.20956469698257
        ],
        [
          81.16201400756836,
          16.22621256486022
        ],
        [
          81.11772537231445,
          16.200663279695725
        ]
      ]
    ]
  },
  "id": "mtmdealercounterclockwise",
  "name": "jagan jonnala",
  "type": 1,
  "lastUpdateDate": "2016-11-01T23:48:52.1403825+00:00"
}, {
  "location": null,
  "boundary": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          78.37594985961914,
          17.522600333522334
        ],
        [
          78.35929870605469,
          17.510322718986135
        ],
        [
          78.36015701293945,
          17.49378755320691
        ],
        [
          78.36650848388672,
          17.48691110080686
        ],
        [
          78.37955474853516,
          17.480198122660536
        ],
        [
          78.3926010131836,
          17.479870653975134
        ],
        [
          78.40839385986328,
          17.480689324583476
        ],
        [
          78.41869354248047,
          17.484782622363976
        ],
        [
          78.42418670654297,
          17.493296386660322
        ],
        [
          78.42144012451172,
          17.505575152130717
        ],
        [
          78.41131210327148,
          17.51572497168026
        ],
        [
          78.40410232543945,
          17.52374620184082
        ],
        [
          78.3900260925293,
          17.526692687146934
        ],
        [
          78.37594985961914,
          17.522600333522334
        ]
      ]
    ]
  },
  "id": "cca61947-f1a2-43e3-81da-ecc525181a22",
  "name": "hydkphbdealer",
  "type": 1,
  "lastUpdateDate": "2016-11-02T11:40:57.8956668+00:00"
}, {
  "location": null,
  "boundary": null,
  "id": "sjfhssk_sfjhsfsh-jvbjbsjbs",
  "name": "Venkatesh",
  "type": 1,
  "lastUpdateDate": "2016-11-02T12:26:10.5927694+00:00"
}];



var dealers = _.map(response, function(dealer) {
  var coordinates = dealer.boundary && dealer.boundary.coordinates[0];
  var customCoordinates = _.map(coordinates, function(coordinate) {
    return {
      lat: coordinate[1],
      lng: coordinate[0]
    };
  });
  return {
  location:{},
  boundary:customCoordinates,
  population:2000,
  areaCovered:10
  };
  
})

return dealers;


}
// $.ajax({
//             type: 'GET',
//             url: 'http://qwipo.azurewebsites.net/dealerservices/api/Dealer',
//             dataType: 'json',
//             contentType: 'application/json; charset=utf-8',
//             success: function(response) {
//               //  $('#lblData').html(JSON.stringify(response));
//               console.log(response);
//             },
//             error: function(error) {
//                 console.log(error);
//             }
//         });


