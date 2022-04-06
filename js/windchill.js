window.addEventListener('load', () => {
    let long;
    let lat;
    let temperature = document.querySelector('.temperature');
    let Description = document.querySelector('.description');
    let windspeed = document.querySelector('.windspeed')

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;



            const api = `https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${long}&key=62fc843a3c504cd99a4d81272788cb02`;
           
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {description, icon} = data.data[0].weather;
                temperature.innerHTML =`${data.data[0].temp} &deg;C`;
                Description.innerHTML = description;

                windspeed.innerHTML = `Wind Speed: ${data.data[0].wind_spd} Km/h`;
                document.querySelector('.icon').src = icon;
                console.log(data)
                const t = data.data[0].temp;
                const s = data.data[0].wind_spd;
                var f = 37.74 + 0.6215*t - 35.75*s**0.16 + 0.4275*t*s**0.16
                var windChill = Math.round(f)
                document.querySelector('.windchill').innerHTML = `Wind Chill: ${windChill}&deg;F`;
                
            })

        });

    }
})


            
                

