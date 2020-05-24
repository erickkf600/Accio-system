const COMPRAS = {res: []}

export default function buysReducers(state = COMPRAS, action) {
    if (action.type === "SET_DATA"){
        return {
            ...state,
            res: action.data
        }
    }    
    return state
}