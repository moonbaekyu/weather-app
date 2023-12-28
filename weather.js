// creating a function to display the temperature
function displayTemperature(response){
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#cityChange");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

// this will change the city when user types in the search bar
function search(event){
  event.preventDefault();
  let searchInputElement = document.querySelector("#search");
  let city = searchInputElement.value;
  // create API Url
  let apiKey = "a7aec6051f6o4af3d5c0t6e90f01db3d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#citySearch");
searchForm.addEventListener("submit", search);

// using real time date
let currentDate = document.querySelector("#currentDay");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
let day = currentTime.getDay();
let month = currentTime.getMonth();
let date = currentTime.getDate();
let currentHour = document.querySelector("#currentTime")

if (minutes < 10){
  minutes = `0${minutes}`;
}
if (hours < 10){
  hours = `0${hours}`
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "Jan",
  "Feb", 
  "March",
  "April",
  "May", 
  "June",
  "July", 
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

let formattedDay = days[day];
let formattedMonth = months[month];

currentDate.innerHTML = `${formattedDay}, ${date} ${formattedMonth}`;
currentHour.innerHTML = `${hours}:${minutes}`;





//Change Temperature Code
function changeTemp(event){
  event.preventDefault();
  let fah = document.querySelector('#fahrenheit');
  let cel = document.querySelector('#celsius');
  let temp = document.querySelector('#temperature');

  if (fah.textContent === "°C"){ //if click element is not equal to °C it will just to the else statment
    let fahTemp = parseFloat(temp.textContent); // parseFloat is used to accept a string and convert it into a floating-point number. textContent is to used to read and update the text conent from Cel to Fah 
    let celTemp = (fahTemp - 32) * 5/9; // convert fah temp to cel temp

    temp.textContent = celTemp.toFixed(0); // toString Convert Celsius temperature to string
    fah.textContent = "°F";
    cel.textContent = "°C"
  } else {  
    let celTemp = parseFloat(temp.textContent);    
    let fahTemp = (celTemp * 9/5) + 32; //convert cel temp to fah temp

    temp.textContent = fahTemp.toFixed(0); //toString converts fahrenheit temperature to string
    fah.textContent = "°C";
    cel.textContent = "°F"
  }
}

let temperature = document.querySelector('#fahrenheit');
temperature.addEventListener("click", changeTemp);
