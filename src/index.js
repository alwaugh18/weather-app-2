let now = new Date();
let p = document.querySelector("p");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let date = (p.innerHTML = `${day} ${hours}:${minutes} `);

function location(city) {
  let apiKey = `a5451ed78964f5ccfbea31da870ec345`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5451ed78964f5ccfbea31da870ec345`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  console.log(response);
  let searchCity = document.querySelector("h2");
  searchCity.innerHTML = document.querySelector("#city").value;
  let temperatureElement = document.querySelector("h1");
  temperatureElement.innerHTML = response.data.main.temp;
  Math.round(temperatureElement);
}

function handleLocation(e) {
  e.preventDefault();
  let city = document.querySelector("#city");
  location(city.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleLocation);
