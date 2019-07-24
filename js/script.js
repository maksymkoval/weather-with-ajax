$(document).ready(function(){
  
    var weather= $('.weather')
    var now = new Date();
   
weather.prepend('Current date: '+now.getDate()+'.'+now.getMonth()+'.'+now.getFullYear()+'');
$.ajax({
    type:'GET',
    url:'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19',
    success: function(data){
console.log(data);
weather.append('<div class="wrap">'+
    '<div class="first">location:<b>'+data.name+'</b><br>'+
    ' weather: <b>'+data.weather[0].main+'</b><br>'+
'<img  class="image" src="http://openweathermap.org/img/w/'+data.weather[0].icon+'.png"><br>'+
'description: <b class="main">'+data.weather[0].description+'</b><br>'+
'temp: <b class="main">'+data.main.temp+' &#176;C</b><br></div>'+
'<div class="second">pressure: <b>'+data.main.pressure+' hPa</b><br>'+
'humidity: <b>'+data.main.humidity+' %</b><br>'+
'speed: <b>'+data.wind.speed+' km/h SSE</b><br>'+
'</div>'
)
    }
});
});