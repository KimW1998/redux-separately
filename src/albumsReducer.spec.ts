import { createStore } from "redux";
import { albumsReducer } from "./albumsReducer";

test("Initial state is an empty array", () => {
  const store = createStore(albumsReducer);
  expect(store.getState()).toEqual([]);
});

test("Adding new albums possible", () => {
  const store = createStore(albumsReducer);

  store.dispatch({
    type: "ADD_ALBUM",
    payload: {
      title: "The Road to Ithaca",
      artist: "Shai Maestro",
      genre: "jazz",
    },
  });

  store.dispatch({
    type: "ADD_ALBUM",
    payload: {
      title: "Landmarks",
      artist: "Brian Blade & The Fellowship Band",
      genre: "jazz",
    },
  });

  expect(store.getState()).toEqual([
    {
      title: "The Road to Ithaca",
      artist: "Shai Maestro",
      genre: "jazz",
    },
    {
      title: "Landmarks",
      artist: "Brian Blade & The Fellowship Band",
      genre: "jazz",
    },
  ]);
});

test("Removing an album possible", () => {
  const store = createStore(albumsReducer);

  store.dispatch({
    type: "ADD_ALBUM",
    payload: {
      title: "The Road to Ithaca",
      artist: "Shai Maestro",
      genre: "jazz",
    },
  });

  store.dispatch({
    type: "ADD_ALBUM",
    payload: {
      title: "Landmarks",
      artist: "Brian Blade & The Fellowship Band",
      genre: "jazz",
    },
  });

  store.dispatch({
    type: "REMOVE_ALBUM",
    payload: "Landmarks",
  });

  expect(store.getState()).toEqual([
    {
      title: "The Road to Ithaca",
      artist: "Shai Maestro",
      genre: "jazz",
    },
  ]);
});
test("Removing albums by genre", () => {
  const store = createStore(albumsReducer);

  const roadToIthaca = {
    title: "The Road to Ithaca",
    artist: "Shai Maestro",
    genre: "jazz",
  };
  const landmarks = {
    title: "Landmarks",
    artist: "Brian Blade & The Fellowship Band",
    genre: "jazz",
  };
  const teardrops = {
    title: "Teardrops",
    artist: "Neil Frances",
    genre: "pop",
  };

  for (const album of [roadToIthaca, landmarks, teardrops]) {
    store.dispatch({
      type: "ADD_ALBUM",
      payload: album,
    });
  }

  store.dispatch({
    type: "REMOVE_ALBUMS_BY_GENRE",
    payload: "jaxx",
  });

  expect(store.getState()).toEqual([roadToIthaca, landmarks, teardrops]);

  store.dispatch({
    type: "REMOVE_ALBUMS_BY_GENRE",
    payload: "jazz",
  });

  expect(store.getState()).toEqual([teardrops]);

  store.dispatch({
    type: "REMOVE_ALBUMS_BY_GENRE",
    payload: "pop",
  });

  expect(store.getState()).toEqual([]);
});
