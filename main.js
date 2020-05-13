 function getLocation() {
 if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(showPosition);

 } else {
   document.getElementbyId("geojson").value = "Geolocation is not supported by this browser.";

 }
}

function showPosition(position) {
  var coordLat = position.coords.longitude;
  var coordLong = position.coords.latitude;
  requestWeatherData(coordLat,coordLong);

}
getLocation();
var request = new XMLHttpRequest();
function requestWeatherData(lat,lon){
  var APIKey= "9e55039796c9a5f733b4100a7273622d";
  // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
  // https://api.openweathermap.org/data/2.5/weather?lat=51.9541&lon=7.6210&appid=9e55039796c9a5f733b4100a7273622d

  var apicall="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+APIKey;
  var weather=weatherData(apicall);
  console.log(weather);
  console.log(weather.weather);
  console.log(weather.weather[0].description);
  //document.getElementById('output').value= weather.weather[0].description;
  //console.log(document.getElementById('output').value);
  var weatherText = document.querySelector('a-text');
 //console.log(weatherText.value);
   weatherText.setAttribute('value', weather.weather[0].description);
  console.log(weatherText);
}

function weatherData(apicall){
  request.open('GET', apicall, false);
   request.onload = function() {
    var data = JSON.parse(this.response);
  }
  //{"coord":{"lon":7.62,"lat":51.95},"weather":[{"id":521,"main":"Rain","description":"shower rain","icon":"09d"}],"base":"stations","main":{"temp":285.15,"feels_like":280.09,"temp_min":283.15,"temp_max":287.04,"pressure":1000,"humidity":71},"visibility":10000,"wind":{"speed":6.2,"deg":300},"clouds":{"all":40},"dt":1588347256,"sys":{"type":1,"id":1269,"country":"DE","sunrise":1588305552,"sunset":1588359227},"timezone":7200,"id":2867543,"name":"Münster","cod":200}
  //weather.description
  //main.temp in celsius
  request.send(null);
  return JSON.parse(request.responseText);
}
let gyroscope = new Gyroscope({frequency: 60});
screen.orientation.onchange = function (){
    // logs 'portrait' or 'landscape'
    console.log(screen.orientation.type.match(/\w+/)[0]);
};
gyroscope.addEventListener('reading', e => {
  console.log("Angular velocity along the X-axis " + gyroscope.x);
  console.log("Angular velocity along the Y-axis " + gyroscope.y);
  console.log("Angular velocity along the Z-axis " + gyroscope.z);
  var weatherText = document.querySelector('a-text');
   weatherText.setAttribute('value', ""+gyroscope.x +gyroscope.y +gyroscope.z);
});
gyroscope.start();
 function kelvinInCelsius(kelvin){
   return kelvin-273.15;
 }
