# Weather App HTML

A simple web-based weather application that allows users to fetch the current weather details of any city. The weather data is fetched dynamically using the OpenWeatherMap API.

## Features

- Displays the current city’s name and weather details (temperature, weather description).
- Handles errors for incorrect city inputs (e.g., "Error: City not found").
- Input field clears automatically after submission.
- Uses the OpenWeatherMap API to fetch real-time weather data.
- Responsive design for different screen sizes.

## Project Structure

```
├── index.html          # Main HTML structure
├── style.css           # CSS for styling the app
├── script.js           # JavaScript for fetching weather data and handling user interaction
└── README.md           # Project documentation
```

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-repo/weather-app.git
```

### 2. Open the project

Navigate to the project folder and open the `index.html` file in your browser.

### 3. Obtain API Key

To fetch weather data, you will need an API key from OpenWeatherMap.

1. Go to [OpenWeatherMap](https://openweathermap.org/).
2. Sign up (or log in if you already have an account).
3. Navigate to the **API Keys** section and generate a new API key.

### 4. Update the API Key

Open the `script.js` file and replace the placeholder `your_openweathermap_api_key_here` with your actual API key.

```javascript
const apiKey = 'your_openweathermap_api_key_here';
```

### 5. Run the application

You can now open the `index.html` file in any web browser, enter a city name, and click on "Get Weather" to see the current weather details for that city.

## How It Works

1. The user enters a city name in the input field.
2. The app fetches the current weather data for that city using the OpenWeatherMap API.
3. The weather data is displayed on the page, including:
   - City name
   - Temperature in Celsius
   - Weather description (e.g., "clear sky", "rain", etc.)
4. If the city is invalid, the app displays an error message: "Error: City not found".
5. After submission, the input field is cleared for a new search.

## Error Handling

- If the user enters an invalid city name, an error message is displayed in the `weather-data` div with the text "Error: City not found".

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the weather app.
- **JavaScript**: To fetch weather data from OpenWeatherMap API and handle user interactions.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

### Example of API URL:

```bash
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

**Note**: Replace `{city}` with the name of the city and `{API_KEY}` with your personal API key.

---

## Future Enhancements

- Add weather icons to make the interface more visual.
- Display additional information such as humidity, wind speed, and forecast.
- Implement a loading spinner for better user experience while fetching data.
  
---

This `README.md` provides all the necessary details to set up, run, and understand the weather app project. You can customize it further to suit your specific project needs!
