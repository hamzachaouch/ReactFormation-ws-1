import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const initialState = {};
const middlware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlware))
);
store.subscribe(() => {
  console.log("store updated !", store.getState());
});

export default store;
