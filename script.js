async function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = "a048c289ca1fa07bdae5a130955cbaa9";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+apiKey;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("cityName").textContent = data.name;
            document.getElementById("temperature").textContent = "Temperature: "+data.main.temp+"°C";
            document.getElementById("description").textContent = "Condition:"+data.weather[0].description;
            document.getElementById("humidity").textContent =" Humidity: +"data.main.humidity+"%";
        } else {
            alert("City not found! Please enter a valid city.");
        }
    } catch (error) {
        alert("Error fetching weather data. Please try again.");
    }
}