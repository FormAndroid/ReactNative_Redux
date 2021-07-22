import axios from 'axios';

// Les types d'action
export const WEATHER_LOADING = 'WEATHER_LOADING';
export const WEATHER_SUCCESS = 'WEATHER_SUCCESS';
export const WEATHER_ERROR = 'WEATHER_ERROR';


// Les méthodes qui génére les actions
export const weatherLoading = () => ({
    type: WEATHER_LOADING
});

export const weatherSuccess = (data) => ({
    type: WEATHER_SUCCESS,
    payload: data
});

export const weatherError = (error) => ({
    type: WEATHER_ERROR,
    payload: error
});


// Méthode qui déclanche la requete AJAX et plusieur actions => Necessite redux-thunk
const URL_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q=__city__&appid=3d4aa29181fa1cfefbb4a4d43a7f1568&units=metric&lang=fr'

export const weatherFetch = (city) => {

    return dispatch => {
        if (city === undefined || city === null || city.trim() === '') {
            dispatch(weatherError('Veuillez encoder une ville'));
            return;
        }

        dispatch(weatherLoading());

        const url = URL_WEATHER.replace('__city__', city);

        axios.get(url)
            .then(({ data }) => {
                const result = {
                    city: data.name,
                    temp: data.main.temp,
                    desc: data.weather[0].description
                }
                dispatch(weatherSuccess(result));
            })
            .catch(error => {
                dispatch(weatherError('Ville non trouvé !'));
            })
    }
}