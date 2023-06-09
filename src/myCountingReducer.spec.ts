import { createStore } from "redux";
import myCountingReducer from "./myCountingReducer";

test("Initial state should be 0", () => {
  const store = createStore(myCountingReducer);
  expect(store.getState()).toBe(0);
});

test("ADD should work as expected", () => {
  const store = createStore(myCountingReducer);

  store.dispatch({
    type: "ADD",
    payload: 1,
  });
  expect(store.getState()).toBe(1);

  store.dispatch({
    type: "ADD",
    payload: 99,
  });
  expect(store.getState()).toBe(100);
});

test("SUBSTRACT should work as expected", () => {
  const store = createStore(myCountingReducer);

  store.dispatch({
    type: "ADD",
    payload: 10,
  });
  expect(store.getState()).toBe(10);

  store.dispatch({
    type: "SUBSTRACT",
    payload: 5,
  });
  expect(store.getState()).toBe(5);

  store.dispatch({
    type: "SUBSTRACT",
    payload: 5,
  });
  expect(store.getState()).toBe(0);
});

test("MULTIPLY should work as expected", () => {
  const store = createStore(myCountingReducer);

  store.dispatch({
    type: "ADD",
    payload: 24,
  });
  expect(store.getState()).toBe(24);

  store.dispatch({
    type: "MULTIPLY",
    payload: 3,
  });
  expect(store.getState()).toBe(72);
});

test("RESET should work as expected", () => {
  const store = createStore(myCountingReducer);

  store.dispatch({
    type: "ADD",
    payload: 24,
  });
  expect(store.getState()).toBe(24);

  store.dispatch({
    type: "RESET",
  });
  expect(store.getState()).toBe(0);

  store.dispatch({
    type: "RESET",
  });
  expect(store.getState()).toBe(0);
});
