import { createStore, combineReducers, applyMiddleware} from 'redux';

// Ajout du middleware 'redux-thunk' pour pouvoir gérer une requete Ajax dans les actions
import thunkMiddleware from 'redux-thunk';

import msgReducer from './reducers/msg-reducer';
import todoReducer from './reducers/todo-reducer';
import weatherReducer from './reducers/weather-reducer';

const reducer = combineReducers({
    msg: msgReducer,
    todoApp: todoReducer,
    weather: weatherReducer
});

export default createStore(reducer, applyMiddleware(thunkMiddleware));