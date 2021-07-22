import { createStore, combineReducers} from 'redux';
import msgReducer from './reducers/msg-reducer';

const reducer = combineReducers({
    msg: msgReducer
});

export default createStore(reducer);