import { searchItem } from "./search-utils"
const INITIAL_STATE = {
    search: ""
}


const searchReducer = (state=INITIAL_STATE, action) =>  {

    switch(action.type) {

        case "SEARCH_ITEM":
            return {...state, searchResult: searchItem(action.payload), search: action.payload }
        default:
            return state;

    }
}

export default searchReducer