import { UPDATE_MSG } from "../actions/msg-action";

const initialState = {
    content: 'Hello World'
};

// Méthode "reducer" qui permet de modifier les valeurs du store
const msgReducer = (state = initialState, action) => {
    console.log(action);

    // Modification en fonction du type d'action recu
    switch (action.type) {
        case UPDATE_MSG:
            return {
                content: action.payload
            };
    }

    return state;
}

export default msgReducer;