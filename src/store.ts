import { createStore } from "redux";

import myCountingReducer from "./myCountingReducer";

const store = createStore(myCountingReducer);
console.log("Initial state of the store:", store.getState());

store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10,
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

store.dispatch({
  type: "SUBSTRACT",
  payload: 10,
});

store.dispatch({
  type: "SUBSTRACT",
  payload: 10,
});

console.log("final state:", store.getState());

//consolelog logs 5 times
