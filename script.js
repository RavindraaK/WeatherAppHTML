// OpenWeatherMap API key (replace with your generated API key)
const apiKey = '9e534c30914994c074d9a52ef90679b0';

// Function to get weather data
function getWeather(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  const locationInput = document.getElementById('location-input');
  const location = locationInput.value;
  const weatherDataDiv = document.getElementById('weather-data');

  // API endpoint to fetch weather data
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  // Fetch weather data from OpenWeatherMap API
  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      // Display the weather data
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const cityName = data.name;

      weatherDataDiv.innerHTML = `
        <p>City: ${cityName}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
      `;
    })
    .catch(error => {
      // Display error message
      weatherDataDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    })
    .finally(() => {
      // Clear the input field after form submission
      locationInput.value = '';
    });
}

// Add event listener to the form
document.getElementById('location-form').addEventListener('submit', getWeather);
