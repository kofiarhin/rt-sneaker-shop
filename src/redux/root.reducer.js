import { combineReducers} from "redux"
import { persistReducer } from "redux-persist"

import shopReducer from "./shop/shop.reducer"
import cartReducer from  "./cart/cart.reducer"
import  storage from "redux-persist/lib/storage"
import userReducer from "./user/user.reducer"


const rootReducer = combineReducers({
    shop: shopReducer,
    cart: cartReducer,
    user: userReducer
})


const config = {
    key: "root",
    storage,
    whiteList: ["cart"]
}
export default persistReducer(config, rootReducer)