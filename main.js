let body = document.querySelector("body")

body.style.background = "#222"

let box = document.createElement("div")
box.classList.add("main_div")

body.append(box)

let search_div = document.createElement("div")
search_div.innerHTML = `<div class="input-group mb-3 ">
        <input id="my_in" type="text" class="form-control rounded-pill me-2" placeholder="Enter city name"  >
        <button class="btn btn-outline-secondary rounded-circle" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
      </div>`

box.append(search_div)

let btn = document.getElementById("button-addon2")
let input = document.getElementById("my_in")

function createDivWeather() {
    let weather = document.createElement("div")
    weather.innerHTML =
        `<img src="images/rain.png" class="weather-icon">
        <h1 class="temp">22°C</h1>
        <h2 class="city">New York</h2>
        <div class="details">
            <div class="col">
                <img src="images/humidity.png" alt="">
                <div>
                    <p class="humidity">50%</p>
                    <p>humidity</p>
                </div>
            </div>
            <div class="col">
                <img src="images/wind.png" alt="">
                <div>
                    <p class="wind">15 km/h</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>`
    weather.classList.add("weather")
    box.append(weather)
}
createDivWeather()

const api_key = `83b941c1bb37608534ab7ad2469ba01d`
let api_url = `https://api.openweathermap.org/data/2.5/weather?=$&units=metric`
// let api=`https://api.openweathermap.org/data/2.5/weather?q=israel&appid=83b941c1bb37608534ab7ad2469ba01d&units=metric`

async function getData(city) {
    const response = await fetch(api_url+`&q=${city}`+`&appid=${api_key}`)
    const data = await response.json()
    return data
}


async function apdateWeather(){
    let data=await getData(input.value)
    document.querySelector(".weather-icon").src = `images/${data.weather[0].main}.png`
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h"
}

btn.addEventListener("click",()=>{
    apdateWeather()
} )


