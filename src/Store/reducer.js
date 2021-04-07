const initialState = {
    compteur: 0
}

const reducer = ( state = initialState, action) => {
    if (action.type === "INCREMENTE"){
        return {
            ...state,
            compteur: state.compteur + 1
        }    
    }else if (action.type === "DECREMENTE") {
        return {
            ...state,
            compteur: state.compteur - 1
        }
    }
    return state;
}

export default reducer; 