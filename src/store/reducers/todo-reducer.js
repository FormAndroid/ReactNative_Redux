import {ADD_TASK, DELETE_TASK, FINISH_TASK, EDIT_TASK} from './../actions/todo-action';

const initialState = {
    todos: [{
        id: 'test',
        name: 'Test Todo liste',
        desc: 'Ceci est un test hardcodé !!!',
        limitDate: new Date(2021, 9, 1),
        isFinish: false
    }]
}

const todoReducer = (state= initialState, action) => {

    switch(action.type) {
        case ADD_TASK :
            const task = action.payload; 
            return {
                todos: [...state.todos, task]
            };

        case DELETE_TASK:
            const deletedId = action.payload;
            return {
                todos: state.todos.filter(task => task.id !== deletedId)
            };

        case FINISH_TASK:
            const finishedId = action.payload;
            return {
                todos : state.todos.map(task => (task.id !== finishedId) ? task : {...task, isFinish: true})
            };

        case EDIT_TASK:
            const updatedId = action.payload.id;
            const updatedTask = action.payload;
            return {
                todos: state.todos.map(task => (task.id !== updatedId) ? task : { ...updatedTask })
            }
    }

    return state;
}

export default todoReducer;