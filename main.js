//var geo = navigator.geolocation;
//console.log(geo);
//console.log(Geolocation);
//console.log(Geolocation.getCurrentPosition());
//console.log(Geolocation.watchPosition());
var lat =51.9541;
var lon =7.6210;
var APIKey= "9e55039796c9a5f733b4100a7273622d";
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
// api.openweathermap.org/data/2.5/weather?lat=51.9541&lon=7.6210&appid=9e55039796c9a5f733b4100a7273622d
var request = new XMLHttpRequest();
var apicall="api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+APIKey;
request.open('GET', 'apicall', true);
request.onload = function() {
  // begin accessing JSON data here
  var data = JSON.parse(this.response);

  for (var i = 0; i < data.length; i++) {
    console.log(data);
  }
}
request.send();
console.log(request);
console.log(request.responseText);
