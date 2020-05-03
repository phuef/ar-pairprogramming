//var geo = navigator.geolocation;
//console.log(geo);
//console.log(Geolocation);
//console.log(Geolocation.getCurrentPosition());
//console.log(Geolocation.watchPosition());
var lat =51.9541;
var lon =7.6210;
var APIKey= "9e55039796c9a5f733b4100a7273622d";
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
// https://api.openweathermap.org/data/2.5/weather?lat=51.9541&lon=7.6210&appid=9e55039796c9a5f733b4100a7273622d
var request = new XMLHttpRequest();
var apicall="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+APIKey;
function weatherData(){
  request.open('GET', apicall, false);
   request.onload = function() {
    var data = JSON.parse(this.response);
  }
  //{"coord":{"lon":7.62,"lat":51.95},"weather":[{"id":521,"main":"Rain","description":"shower rain","icon":"09d"}],"base":"stations","main":{"temp":285.15,"feels_like":280.09,"temp_min":283.15,"temp_max":287.04,"pressure":1000,"humidity":71},"visibility":10000,"wind":{"speed":6.2,"deg":300},"clouds":{"all":40},"dt":1588347256,"sys":{"type":1,"id":1269,"country":"DE","sunrise":1588305552,"sunset":1588359227},"timezone":7200,"id":2867543,"name":"Münster","cod":200}
  //weather.description
  //main.temp in celsius
  request.send(null);
  return request.responseText;
}
var weather=weatherData();
console.log(weather);
console.log(request.response);
 function kelvinInCelsius(kelvin){
   return kelvin-273.15;
 }
