const submitbtn = document.getElementById("city_search");
const cityname = document.getElementById("cityname");
const cityoutput = document.getElementById("citynameoutput");
const temp = document.getElementById("temp");
const windspeed = document.getElementById("windspeed");
const mintemp = document.getElementById("mintemp");
const maxtemp = document.getElementById("maxtemp");
const speed = document.getElementById("speed");
const temppic = document.getElementById("temppic");
const direction = document.getElementById("direction");
const tempinfo = document.getElementById("tempinfo");

const getinfo = async (event) => {
  event.preventDefault();
  let cityval = cityname.value;
  if (cityval === " ") {
    cityoutput.innerText = "Pls Enter City Name ";
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=87cc2ca083471e0582fed00272b96f4f`;
      const response = await fetch(url);
      const data = await response.json();
      const jsonarr = [data];

      temp.innerText = `${Math.floor(jsonarr[0].main.temp_max / 10)}`;
      cityoutput.innerText = `${jsonarr[0].name}, ${jsonarr[0].sys.country}`;
      windspeed.innerText = jsonarr[0].weather[0].description;
      speed.innerText = `${jsonarr[0].wind.speed} km/h `;
      mintemp.innerText = `${Math.floor(jsonarr[0].main.temp_min / 10) - 1} °C`;
      maxtemp.innerText = `${
        Math.ceil(jsonarr[0].main.feels_like / 10) + 1
      } °C`;

      const pic = jsonarr[0].weather[0].main;
      if (pic == "Haze") {
        temppic.innerText = "🌫️";
      } else if (pic == "Clear") {
        temppic.innerText = "☀️";
      } else if (pic == "Rain") {
        temppic.innerText = "⛈️";
      } else {
        temppic.innerText = "☁️";
      }

      const dir = jsonarr[0].wind.deg;
      if (dir >= 0 && dir < 90) {
        direction.innerText = `${dir}° ↗`;
      } else if (dir >= 90 && dir < 180) {
        direction.innerText = `${dir}° ↖`;
      } else if (dir >= 180 && dir < 270) {
        direction.innerText = `${dir}° ↙`;
      } else {
        direction.innerText = `${dir}° ↘`;
      }
    } catch {
      cityoutput.innerText = "City";
    }
  }
};
submitbtn.addEventListener("click", getinfo);

const getDay = () => {
  let weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  let Month = new Array(12);

  Month[0] = "January";
  Month[1] = "February";
  Month[2] = "March";
  Month[3] = "April";
  Month[4] = "May";
  Month[5] = "June";
  Month[6] = "July";
  Month[7] = "August";
  Month[8] = "September";
  Month[9] = "October";
  Month[10] = "November";
  Month[11] = "December";

  const date = document.getElementById("date");
  const week = document.getElementById("week");
  let currentDay = new Date();
  let daytoday = weekday[currentDay.getDay()];
  let datetoday = currentDay.getDate();
  let monthtoday = Month[currentDay.getMonth() + 1];

  date.innerText = `${datetoday} ${monthtoday} `;
  week.innerText = `${daytoday}`;
};
getDay();
