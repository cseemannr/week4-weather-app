import React, { useState } from "react";
import axios from "axios";

import maxTemp from "../icons/maxtemp.svg";
import minTemp from "../icons/mintemp.svg";
import windy from "../icons/windy.svg";
import humidity from "../icons/humidity.svg";
import sunrise from "../icons/sunrise.svg";
import sunset from "../icons/sunset.svg";

export default function Weather() {
  let key = "1a2b7258ebd456c01aef9175dfe8b709";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [coord, setCoord] = useState("");
  const [forecast, setForecast] = useState("");

  function getForecast(lat, lon) {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

    axios.get(url).then((res) => console.log(res));
  }

  function getWeather(res) {
    console.log(res.data);

    let lat = res.data.coord.lat;
    let lon = res.data.coord.lon;

    getForecast(lat, lon);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric `;
    axios.get(url).then(getWeather);
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  return (
    <div>
      <div className="container my-5 container-main p-4 shadow-lg">
        <form id="form-city" className="row mb-5" onSubmit={handleSubmit}>
          <div className="col-6">
            <input
              id="text-input"
              className="form-control"
              type="search"
              placeholder="Search for city"
              aria-label="Search for city"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <input type="submit" value="Search" className="btn btn-secondary" />
          </div>
        </form>
        <div className="row">
          <h1 className="h1 text-capitalize">--</h1>
          <p>
            Last updated: <span id="date-time">--</span>
          </p>
          <p id="conditions" className="text-capitalize">
            --
          </p>
          <h2 id="temperature" className="display-1 col-3">
            0<span className="display-6 opacity-50">ºC</span>
          </h2>
          <img
            id="icon"
            className="col-3"
            src="https://openweathermap.org/img/wn/10d@4x.png"
            alt=""
          />
          <div className="col-sm-6">
            <p>
              <img
                className="svg-icon"
                src={maxTemp}
                alt="Max temperature icon"
              />
              <span id="temperature-max">0</span>ºC
            </p>
            <p>
              <img
                className="svg-icon"
                src={minTemp}
                alt="Min temperature icon"
              />
              <span id="temperature-min">0</span>ºC
            </p>
            <p>
              <img className="svg-icon" src={windy} alt="Wind icon" />
              <span id="windy">00</span> m/s
            </p>
            <p>
              <img className="svg-icon" src={humidity} alt="Humidity icon" />
              <span id="humidity">00</span>%
            </p>
            <p id="rain"></p>
            <p id="snow"></p>
            <p>
              <img className="svg-icon" src={sunrise} alt="Sunrise icon" />
              <span id="sunrise">00:00</span>
            </p>
            <p>
              <img className="svg-icon" src={sunset} alt="Sunset icon" />
              <span id="sunset">00:00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
