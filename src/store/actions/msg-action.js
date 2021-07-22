// Constante avec le nom de l'action
export const UPDATE_MSG = 'UPDATE_MSG';


// Méthode d'action
export const updateMsg = (msg) => {
    // L'action renvois un objet
    return {
        type: UPDATE_MSG,
        payload: msg
    };
}