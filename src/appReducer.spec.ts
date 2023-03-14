import { createStore } from "redux";
import { appReducer } from "./appReducer";

test("User is initially not logged in", () => {
  const store = createStore(appReducer);
  expect(store.getState().user).toBe(null);
});

test("User can log in", () => {
  const store = createStore(appReducer);

  store.dispatch({
    type: "LOGIN",
    payload: {
      name: "Bla op 't Bla",
      email: "rein@codaisseur.com",
    },
  });

  expect(store.getState().user).toEqual({
    name: "Bla op 't Bla",
    email: "rein@codaisseur.com",
  });
});

test("Logout works", () => {
  const store = createStore(appReducer);

  store.dispatch({
    type: "LOGIN",
    payload: {
      name: "Bla op 't Bla",
      email: "rein@codaisseur.com",
    },
  });

  store.dispatch({
    type: "LOGOUT",
  });

  expect(store.getState().user).toEqual(null);
});

test("Updating the logged in user works", () => {
  const store = createStore(appReducer);

  store.dispatch({
    type: "LOGIN",
    payload: {
      name: "Bla op 't Bla",
      email: "rein@codaisseur.com",
    },
  });

  store.dispatch({
    type: "UPDATE_LOGGEDIN_USER",
    payload: {
      name: "Rein opt Land",
    },
  });

  expect(store.getState().user).toEqual({
    name: "Rein opt Land",
    email: "rein@codaisseur.com",
  });

  store.dispatch({
    type: "UPDATE_LOGGEDIN_USER",
    payload: {
      name: "Rein op 't Land",
    },
  });

  expect(store.getState().user).toEqual({
    name: "Rein op 't Land",
    email: "rein@codaisseur.com",
  });
});

test("Switching to and from dark mode works", () => {
  const store = createStore(appReducer);

  expect(store.getState().darkMode).toBe(false);

  store.dispatch({
    type: "TOGGLE_DARK_MODE",
  });

  expect(store.getState().darkMode).toBe(true);

  store.dispatch({
    type: "LOGIN",
    payload: {
      name: "Rein op 't Land",
      email: "rein@codaisseur.com",
    },
  });

  expect(store.getState().darkMode).toBe(true);

  store.dispatch({
    type: "LOGOUT",
  });

  expect(store.getState().darkMode).toBe(true);
});
