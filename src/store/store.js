import { createStore, combineReducers} from 'redux';
import msgReducer from './reducers/msg-reducer';
import todoReducer from './reducers/todo-reducer';

const reducer = combineReducers({
    msg: msgReducer,
    todoApp: todoReducer
});

export default createStore(reducer);