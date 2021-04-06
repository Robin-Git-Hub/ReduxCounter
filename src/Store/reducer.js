const initialState = {
    compteur: 24000
}

const reducer = ( state = initialState, action) => {
    if (action.type === "INCREMENTE"){
        return {
            compteur: state.compteur + 1
        }    
    }else if (action.type === "DECREMENTE") {
        return {
            compteur: state.compteur - 1
        }
    }
    return state;
}

export default reducer; 