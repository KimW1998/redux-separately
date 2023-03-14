import { createStore } from "redux";
import { appReducer } from "./appReducer";

const store = createStore(appReducer);
console.log("Initial state of the store:", store.getState());

store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
});

store.dispatch({
  type: "LOGIN",
  payload: {
    name: "Kelly van Evert",
    email: "kelley@codaisseur.com",
  },
});

store.dispatch({
  type: "UPDATE_LOGGEDIN_USER",
  payload: {
    name: "Kelley van Evert",
  },
});
