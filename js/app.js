const inputCity = document.getElementById("inputCity");
const submit = document.querySelector('#submit')
// console.log(inputCity)
// console.log(submit)

const fetchWeatherData = async (city) => {
  const apiKey = "49e10b559fdc5b8ba5e67efd9ca67a75";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("failed to show weather");
    }
    const data = await response.json();
    // console.log(data);
    return data;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};



const updateUI = (weatherData) => {
 const list = weatherData.city
 const forcast = weatherData.list.map(weather => weather)
//  console.log(forcast);
  const weatherInfo = document.querySelector("#weather-info");
  weatherInfo.innerHTML = `
        <p>City: ${list.name}</p>
        <p>Population: ${list.population} </p>
        <h1> forcast 5 days <h1>
         <p> Date/time: ${forcast[2].dt_txt} ,  Temp : ${forcast[2].main.temp} F , weather : ${forcast[2].weather[0].main}</p>
         <p> Date/time: ${forcast[10].dt_txt} ,  Temp : ${forcast[10].main.temp} F , weather : ${forcast[10].weather[0].main} </p>
         <p> Date/time: ${forcast[18].dt_txt} ,  Temp : ${forcast[18].main.temp} F , weather : ${forcast[18].weather[0].main} </p>
         <p> Date/time: ${forcast[26].dt_txt} ,  Temp : ${forcast[26].main.temp} F , weather : ${forcast[26].weather[0].main} </p>
         <p> Date/time: ${forcast[34].dt_txt} ,  Temp : ${forcast[35].main.temp} F , weather : ${forcast[35].weather[0].main} </p>

        `;
};


const handleUserInput = async ( ) => {

const newCity = inputCity.value
  const city = newCity

  
      if(city){
          try {
              const weatherData = await fetchWeatherData(city)
  
              updateUI(weatherData);
              
          } catch (error) {
              console.error('error in weather data : ', error.message);
              alert('error in weather data please try again  ');
              
          }
      }
    
}

submit.addEventListener('click' , ()=>{
  handleUserInput()
})