
export async function getWeather() {
    const key = 'c3052d4861727d54201d760d99383718' ;
    const URL = `https://api.openweathermap.org/data/2.5/weather?id=3514972&appid=${key}`
    try{
let res = await fetch(URL);
    let s = await res.json();
    let temp = Math.round(s.main.temp - 273)  
     console.log(temp)
     setTemp(temp)

} catch (err){
        console.log(err)
    }
 }

let setTemp  = function (temp){
 let elem =  document.getElementById("weather")
 let temperature = `${temp} С`
 elem.textContent =  temperature;
}