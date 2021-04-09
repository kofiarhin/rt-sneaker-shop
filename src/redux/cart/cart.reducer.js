import { addItem } from "./cart-utility"
const INITIAL_STATE = {
    cartData: []
}

const cartReducer = ( state=INITIAL_STATE, action) => {

    switch(action.type) {
        
        case "ADD_ITEM":
            return { ...state, cartData: addItem(state.cartData, action.payload) }
            // return {...state, cartData: [...state.cartData, action.payload]}
        case "CLEAR_CART":
            return {...state, cartData: action.payload}
        default:
            return state;
    }
}

export default cartReducer