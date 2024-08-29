require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/weather", async (req, res, next) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).send({ error: "City name is required" });
  }

  const apiKey = process.env.API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.error) {
      return res.status(404).send({ error: "City not found" });
    }

    res.send({
      location: data.location.name,
      temperature: data.current.temperature,
      weather_descriptions: data.current.weather_descriptions[0],
      wind_speed: data.current.wind_speed,
      humidity: data.current.humidity,
    });
  } catch (error) {
    res.status(500).send({ error: "Unable to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running ON PORT : ${PORT}`);
});
