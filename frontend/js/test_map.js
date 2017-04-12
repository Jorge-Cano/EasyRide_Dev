
$(function(){
  var map;
  navigator.geolocation.getCurrentPosition(function(position) {
    map = new GMaps({ div: '#map', lat: position.coords.latitude, lng: position.coords.longitude });


  });

  //var map = new GMaps(loc);

  //  map.drawRoute({
  //   origin: ["600 Congress Ave. Austin, TX"],//-12.044012922866312, -77.02470665341184],
  //   destination: ["4811 Ave H. Austin, TX"],//-12.090814532191756, -77.02271108990476],
  //   travelMode: 'driving',
  //   strokeColor: '#131540',
  //   strokeOpacity: 0.6,
  //   strokeWeight: 6
  // });

  // var x;
  // var y;
  // $('form').submit(function(e){
  //   e.preventDefault();
  //   getCoords($('#start').val(), function(x) {
  //     getCoords($('#end').val(), function(y) {
  //       console.log("coords: ", x, y);
  //       map.drawRoute({
  //         origin: x,
  //         destination: y,
  //         travelMode: 'driving',
  //         strokeColor: '#131540',
  //         strokeOpacity: 0.6,
  //         strokeWeight: 6
  //       });
  //     });
  //   })
  // });

  // function getCoords(address, callback){
  //   $.ajax({
  //   method: "GET",
  //   url: "https://api.geocod.io/v1/geocode",
  //   data: { q: address, api_key: "ed5480fd5e991f98d841e6dd855d40d010f1589"}
  //   })
  //   .done(function( msg ) {

  //     var z = msg.results[0].location;
  //     console.log(z.lat, z.lng);
  //     a = [z.lat, z.lng];
  //     callback(a);
  //   });

  // }

  $('form').submit(function(e){
    e.preventDefault();
    getCoords($('#start').val(), $('#end').val(), function(coordinates) {
        console.log("coords: ", coordinates.x, coordinates.y);
        map.drawRoute({
          origin: coordinates.x,
          destination: coordinates.y,
          travelMode: 'driving',
          strokeColor: '#131540',
          strokeOpacity: 0.6,
          strokeWeight: 6
        });
      });
  });

  function getCoords(startAddress, endAddress, callback){
    $.ajax({
      method: "GET",
      url: "https://api.geocod.io/v1/geocode",
      data: { q: startAddress, api_key: "ed5480fd5e991f98d841e6dd855d40d010f1589"}
    })
    .done(function( msg1 ) {
      $.ajax({
        method: "GET",
        url: "https://api.geocod.io/v1/geocode",
        data: { q: endAddress, api_key: "ed5480fd5e991f98d841e6dd855d40d010f1589"}
      })
      .done(function( msg2 ) {
        var start = msg1.results[0].location;
        var end = msg2.results[0].location;
        console.log(start, end);
        a = [start.lat, start.lng];
        b = [end.lat, end.lng];
        callback({
          x: a,
          y: b
        });
      });
    });

  }

});
