import {apiData} from './const.js';

// OpenWeather Api

var loc = document.getElementById("loc");
var img = document.getElementById("weathImg")
var temp = document.getElementById("temp");
var desc = document.getElementById("desc");
var humid = document.getElementById("humid");
var wind = document.getElementById("wind");
var imgSrc = document.getElementById("weathImg");

var weatherApi = (location) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiData.key}&units=metric`)
    .then((res) => res.json())
    .then((data) => {

        // console.log(data);
        loc.innerHTML = `Weather in ${data.name}`;
        temp.innerHTML = `${data.main.temp}°C`;
        desc.innerHTML = `${data.weather[0].description}`;
        humid.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed}km/h`;
        imgSrc.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch((err) => {console.log(`Some Error Found:- ${err}`);
    });
} 

weatherApi("Mumbai");


var getWeather = document.getElementById("getWeather");

getWeather.onclick = (inputLoc) => {
    
    console.log(inputLoc);
};
getWeather.onclick = (inputLoc) => {
    var inputLoc = document.getElementById("inputLoc").value;
    if(inputLoc.length <= 0) alert("Location cannot be Empty");
    else
        weatherApi(inputLoc);
};