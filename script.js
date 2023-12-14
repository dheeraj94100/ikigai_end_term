const apikey = "0213af246c74738ea192fa3cb6dc7dbc";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const sbox = document.querySelector(".search input");
const sbut = document.querySelector(".search button");
const wicon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + " c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      wicon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      wicon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      wicon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      wicon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      wicon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

sbut.addEventListener("click", () => {
  checkweather(sbox.value);
});

function showDateTime() {
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString();
  var formattedTime = currentDate.toLocaleTimeString();
  var dateTimeString =
    "Current Date and Time: " + formattedDate + " " + formattedTime;

  document.getElementById("dateTime").textContent = dateTimeString;
}

function getWeather() {
  document.querySelector(".error").style.display = "block";
}
