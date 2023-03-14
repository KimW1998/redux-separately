type Album = {
  title: string;
  artist: string;
  genre: string;
};

type Action =
  | { type: "ADD_ALBUM"; payload: Album }
  | { type: "REMOVE_ALBUM"; payload: string }
  | { type: "REMOVE_ALBUMS_BY_GENRE"; payload: string };

const initialState: Album[] = [];

export function albumsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "ADD_ALBUM": {
      // => Ask yourself: what is action.payload?
      return [...state, action.payload];
    }
    case "REMOVE_ALBUM": {
      // => Ask yourself: what is action.payload?
      return state.filter((album) => {
        return album.title !== action.payload;
      });
    }
    case "REMOVE_ALBUMS_BY_GENRE": {
      // => Ask yourself: what is action.payload?
      return state.filter((album) => {
        return album.genre !== action.payload;
      });
    }
    default: {
      return state;
    }
  }
}
