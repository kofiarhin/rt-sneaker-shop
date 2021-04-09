import shopData from "../../SHOP_DATA"
const INITIAL_STATE = {
    search: "jordan",
    shopData: shopData
}


const shopReducer = (state=INITIAL_STATE, action) =>  {

    switch(action.type) {

        case "GET_SHOP_DATA":
            return { ...state, shopData};
            case "SET_SEARCH":
                return { ...state, search: action.payload}
            case "GET_SEARCH":
                return {...state, search: state.search}
        default:
            return state;
    }
}

export default shopReducer