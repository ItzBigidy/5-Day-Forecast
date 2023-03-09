const container = document.querySelector(".container");
const search = document.querySelector(".title-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error = document.querySelector(".error-image");

search.addEventListener("click", (event) => {
  const APIkey = "3d0687ea34b9548ce1cbb3d4bd1d25c3";
  const city = document.querySelector(".search-bar").value;

  if (city === "") return;

  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&appid=" +
      APIkey
  )
    .then((response) => response.json())
    .then((data) => {
      const lat = data[0].lat;
      const lon = data[0].lon;

      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&units=imperial&appid=" +
          APIkey
      )
        .then((response) => response.json())
        .then((json) => {
          if (json.cod === "404") {
            container.style.height = "900px";
            weatherBox.style.display = "none";
            weatherDetails.style.display = "none";
            error.style.display = "block";
            error.classList.add("fadeIn");
            return;
          }

          error.style.display = "none";
          error.classList.remove("fadeIn");

          const image = document.querySelector(".weather-box img");
          const temperature = document.querySelector(
            ".weather-box .temperature"
          );
          const description = document.querySelector(
            ".weather-box .description"
          );
          const humidity = document.querySelector(
            ".weather-details .humidity span"
          );
          const wind = document.querySelector(".weather-details .wind span");

          switch (json.list[0].weather[0].main) {
            case "Clear":
              image.src = "assets/images/clear.png";
              break;

            case "Rain":
              image.src = "assets/images/rain.png";
              break;

            case "Snow":
              image.src = "assets/images/snow.png";
              break;

            case "Clouds":
              image.src = "assets/images/clouds.png";
              break;

            case "Haze":
              image.src = "assets/images/haze.png";
              break;

            default:
              image.src = "";
          }

          temperature.innerHTML =
            parseInt(json.list[0].main.temp) + "<span>°F</span>";
          description.innerHTML = json.list[0].weather[0].description;
          humidity.innerHTML = json.list[0].main.humidity;
          wind.innerHTML = json.list[0].wind.speed + " mph";

          weatherBox.style.display = "";
          weatherDetails.style.display = "";
          weatherBox.classList.add("fadeIn");
          weatherDetails.classList.add("fadeIn");
          container.style.height = "800px";

          console.log(json.list[0].main.humidity);

          
        });
    });
});
