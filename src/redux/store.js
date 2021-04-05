import { createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import reducers from "./reducers/root.reducer"
const middleware = [logger]


const store = createStore(reducers, applyMiddleware(...middleware))

export default store;