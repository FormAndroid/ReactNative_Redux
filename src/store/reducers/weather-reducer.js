import { WEATHER_ERROR, WEATHER_LOADING, WEATHER_SUCCESS } from "../actions/weather-action";

const initialState = {
    isLoading: false,
    data: null,
    error: null
}


const weatherReducer = (state = initialState, action) => {

    // '..state' permet d'éviter de perde une valeur lors d'un changement d'etat

    switch (action.type) {
        case WEATHER_LOADING:
            return {
                ...state,
                isLoading: true,
                data: null,
                error: null
            };

        case WEATHER_SUCCESS:
            return {
                ...state,  
                isLoading: false,
                data: action.payload
            }

        case WEATHER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }

    return state;
}

export default weatherReducer;