async function fetchWeather() {
    const apiKey = '4f2af255bfb64b7b3fde5682af1b8bdb';
    const url = new URL('http://api.openweathermap.org/data/2.5/weather');
    const params = { zip: "94040,us", APPID: apiKey }
    url.search = new URLSearchParams(params).toString();
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        const temperature = (data.main.temp - 273.16).toFixed(2);
        console.log('temperature:', temperature);
        return temperature;
    } catch (error) {
        console.log('Oops, error: ', error);
    }
}


function updateWeather(temperature) {
    const divEle = document.querySelector("#weather");
    divEle.innerHTML = temperature + '度';
}


function addListeners() {
    const ele = document.querySelector("#weather-button");
    ele.addEventListener("click", async function(e) {
        const temperature = await fetchWeather();
        updateWeather(temperature);
    });

}


export { addListeners }