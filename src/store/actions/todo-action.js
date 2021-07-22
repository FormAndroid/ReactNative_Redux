import {nanoid} from 'nanoid';


// Nom des actions possible
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FINISH_TASK = 'FINISH_TASK';
export const EDIT_TASK = 'EDIT_TASK';


// Méthode pour générer l'objet "action"
export const addTask = (task) => {
    const id = nanoid();
    return {
        type: ADD_TASK,
        payload: {...task, id, isFinish: false}
    }
}

export const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}

export const finishTask = (taskId) => ({
    type: FINISH_TASK,
    payload: taskId
})

export const editTask = (task) => ({
    type: EDIT_TASK,
    payload: task
})
