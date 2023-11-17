import React from "react";

export default function Weather() {
  return (
    <div>
      <div class="container my-5 container-main p-4 shadow-lg">
        <form id="form-city" class="row mb-5">
          <div class="col-6">
            <input
              id="text-input"
              class="form-control"
              type="text"
              placeholder="Search for city"
              aria-label="Search for city"
            />
          </div>
          <div class="col-6">
            <input type="submit" class="btn btn-secondary" />
            <button id="form-clear" class="btn btn-outline-secondary">
              Clear
            </button>
          </div>
        </form>
        <div class="row">
          <h1 class="h1 text-capitalize">--</h1>
          <p>
            Last updated: <span id="date-time">--</span>
          </p>
          <p id="conditions" class="text-capitalize">
            --
          </p>
          <h2 id="temperature" class="display-1 col-3">
            0<span class="display-6 opacity-50">ºC</span>
          </h2>
          <img
            id="icon"
            class="col-3"
            src="https://openweathermap.org/img/wn/10d@4x.png"
            alt=""
          />
          <div class="col-sm-6">
            <p>
              <img class="svg-icon" src="src/icons/maxtemp.svg" alt="" />
              <span id="temperature-max"></span>
            </p>
            <p>
              <img class="svg-icon" src="src/icons/mintemp.svg" alt="" />
              <span id="temperature-min"></span>
            </p>
            <p>
              <img class="svg-icon" src="src/icons/windy.svg" alt="" />
              <span id="windy">00</span> m/s
            </p>
            <p>
              <img class="svg-icon" src="src/icons/humidity.svg" alt="" />
              <span id="humidity">00</span>%
            </p>
            <p id="rain"></p>
            <p id="snow"></p>
            <p>
              <img
                class="svg-icon"
                src="/src/icons/sunrise.svg"
                alt="sunrise icon"
              />
              <span id="sunrise">00:00</span>
            </p>
            <p>
              <img
                class="svg-icon"
                src="/src/icons/sunset.svg"
                alt="sunset icon"
              />
              <span id="sunset">00:00</span>
            </p>
          </div>
        </div>
        <div id="forecast-container" class="row text-center mt-5"></div>
      </div>
    </div>
  );
}
