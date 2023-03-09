const container = document.querySelector(".container");
const search = document.querySelector(".title-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error = document.querySelector(".error-image");

search.addEventListener("click", () => {
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
            container.style.height = "70%";
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
          const image1 = document.querySelector('.day-1 .weather-box img')
          const image2 = document.querySelector('.day-2 .weather-box img')
          const image3 = document.querySelector('.day-3 .weather-box img')
          const image4 = document.querySelector('.day-4 .weather-box img')
          const image5 = document.querySelector('.day-5 .weather-box img')

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
          humidity.innerHTML = json.list[0].main.humidity + "%";
          wind.innerHTML = json.list[0].wind.speed + " mph";

          switch (json.list[5].weather[0].main) {
            case "Clear":
              image1.src = "assets/images/clear.png";
              break;

            case "Rain":
              image1.src = "assets/images/rain.png";
              break;

            case "Snow":
              image1.src = "assets/images/snow.png";
              break;

            case "Clouds":
              image1.src = "assets/images/clouds.png";
              break;

            case "Haze":
              image1.src = "assets/images/haze.png";
              break;

            default:
              image1.src = "";
          }

          document.querySelector('.day-1 .weather-box .temperature').innerHTML =
            parseInt(json.list[5].main.temp) + "<span>°F</span>";
          document.querySelector('.day-1 .weather-box .description').innerHTML = json.list[5].weather[0].description;
          document.querySelector('.day-1 .weather-details .humidity span').innerHTML = json.list[5].main.humidity + "%";
          document.querySelector('.day-1 .weather-details .wind span').innerHTML = json.list[5].wind.speed + " mph";

          switch (json.list[13].weather[0].main) {
            case "Clear":
              image2.src = "assets/images/clear.png";
              break;

            case "Rain":
              image2.src = "assets/images/rain.png";
              break;

            case "Snow":
              image2.src = "assets/images/snow.png";
              break;

            case "Clouds":
              image2.src = "assets/images/clouds.png";
              break;

            case "Haze":
              image2.src = "assets/images/haze.png";
              break;

            default:
              image2.src = "";
          }

          document.querySelector('.day-2 .weather-box .temperature').innerHTML =
            parseInt(json.list[13].main.temp) + "<span>°F</span>";
          document.querySelector('.day-2 .weather-box .description').innerHTML = json.list[13].weather[0].description;
          document.querySelector('.day-2 .weather-details .humidity span').innerHTML = json.list[13].main.humidity + "%";
          document.querySelector('.day-2 .weather-details .wind span').innerHTML = json.list[13].wind.speed + " mph";

          switch (json.list[21].weather[0].main) {
            case "Clear":
              image3.src = "assets/images/clear.png";
              break;

            case "Rain":
              image3.src = "assets/images/rain.png";
              break;

            case "Snow":
              image3.src = "assets/images/snow.png";
              break;

            case "Clouds":
              image3.src = "assets/images/clouds.png";
              break;

            case "Haze":
              image3.src = "assets/images/haze.png";
              break;

            default:
              image3.src = "";
          }

          document.querySelector('.day-3 .weather-box .temperature').innerHTML =
            parseInt(json.list[21].main.temp) + "<span>°F</span>";
          document.querySelector('.day-3 .weather-box .description').innerHTML = json.list[21].weather[0].description;
          document.querySelector('.day-3 .weather-details .humidity span').innerHTML = json.list[21].main.humidity + "%";
          document.querySelector('.day-3 .weather-details .wind span').innerHTML = json.list[21].wind.speed + " mph";

          switch (json.list[29].weather[0].main) {
            case "Clear":
              image4.src = "assets/images/clear.png";
              break;

            case "Rain":
              image4.src = "assets/images/rain.png";
              break;

            case "Snow":
              image4.src = "assets/images/snow.png";
              break;

            case "Clouds":
              image4.src = "assets/images/clouds.png";
              break;

            case "Haze":
              image4.src = "assets/images/haze.png";
              break;

            default:
              image4.src = "";
          }

          document.querySelector('.day-4 .weather-box .temperature').innerHTML =
            parseInt(json.list[29].main.temp) + "<span>°F</span>";
          document.querySelector('.day-4 .weather-box .description').innerHTML = json.list[29].weather[0].description;
          document.querySelector('.day-4 .weather-details .humidity span').innerHTML = json.list[29].main.humidity + "%";
          document.querySelector('.day-4 .weather-details .wind span').innerHTML = json.list[29].wind.speed + " mph";

          switch (json.list[38].weather[0].main) {
            case "Clear":
              image5.src = "assets/images/clear.png";
              break;

            case "Rain":
              image5.src = "assets/images/rain.png";
              break;

            case "Snow":
              image5.src = "assets/images/snow.png";
              break;

            case "Clouds":
              image5.src = "assets/images/clouds.png";
              break;

            case "Haze":
              image5.src = "assets/images/haze.png";
              break;

            default:
              image5.src = "";
          }

          document.querySelector('.day-5 .weather-box .temperature').innerHTML =
            parseInt(json.list[38].main.temp) + "<span>°F</span>";
          document.querySelector('.day-5 .weather-box .description').innerHTML = json.list[38].weather[0].description;
          document.querySelector('.day-5 .weather-details .humidity span').innerHTML = json.list[38].main.humidity + "%";
          document.querySelector('.day-5 .weather-details .wind span').innerHTML = json.list[38].wind.speed + " mph";

          weatherBox.style.display = "";
          weatherDetails.style.display = "";
          weatherBox.classList.add("fadeIn");
          weatherDetails.classList.add("fadeIn");
          container.style.height = "98%";

          console.log(json)
          
      
          








        });
    });
});


