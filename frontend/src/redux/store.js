import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import collectionReducer from "./reducers/collectionReducer"
import loginReducer from "./reducers/loginReducer"
import notificationReducer from "./reducers/notificationReducer"
import searchReducer from "./reducers/searchReducer"
import signupReducer from "./reducers/signupReducer"

const reducer = combineReducers({
  loggedUser: loginReducer,
  notification: notificationReducer,
  newUser: signupReducer,
  search: searchReducer,
  collectedMovies: collectionReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
