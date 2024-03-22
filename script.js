const button = document.querySelector('#btn');
const showWeatherDegree = document.querySelector('.show-weather');
const showHumidity = document.querySelector('.water');
const windDetails = document.querySelector('.wind');




button.addEventListener('click', (e) => {

    e.preventDefault();

    const search = String(document.querySelector('.srch').value);
    console.log(search)




    if (search === '') {

        alert('please enter valid Location');

        return;
    }
    else {

        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${search}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5ded5121c0msh546088b83963c33p158031jsn1396269fa343',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        fetch(url, options).then((response) => response.json())
            .then((response) => {

                temperature = response.temp;
                humidity = response.humidity;
                wind_speed = response.wind_speed;

                showWeatherDegree.innerHTML = `<p>${temperature}<span>°C</span></p>`;
                showHumidity.innerHTML = `
                    <i class='bx bx-water'></i>
                    <p>${humidity}<span>%</span></p>`;
                windDetails.innerHTML = `
                    <i class='bx bx-wind'></i>
                    <p>${wind_speed}<span>Km/h </span></p>`

                // console.log(response);
                // console.log(temprature);
                // console.log(humidity);
                // console.log(wind_speed);

            }).catch((err) => {
                console.log(err);

            })

    }

});


