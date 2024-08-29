# Weather Information Service

A simple Node.js application that fetches and displays weather information based on user input (city or location) using the Weatherstack API.

## Features

- Fetch weather data from Weatherstack API
- Display current temperature, weather description, wind speed, and humidity for a given city
- Simple and clean API interface

## Built With
- Node.js - JavaScript runtime
- Express - Web framework for Node.js
- Axios - Promise-based HTTP client


## Example API CALL
```
GET http://localhost:3000/weather?city=cityName
{
    "location": "String",
    "temperature": Number,
    "weather_descriptions": "String",
    "wind_speed": Number,
    "humidity": Number
}
```

