const initialState = 0;

type Action =
  | { type: "ADD"; payload: number }
  | { type: "SUBSTRACT"; payload: number }
  | { type: "MULTIPLY"; payload: 3 }
  | { type: "RESET" };

export default function myCountingReducer(
  state = initialState,
  action: Action
) {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "SUBSTRACT": {
      return state - action.payload;
    }
    case "MULTIPLY": {
      return state * action.payload;
    }
    case "RESET": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
// predict: what will be console logged? Nothing missing arguments
//console.log(myCountingReducer(undefined, {}));

// predict: what will be console logged? 5
console.log(myCountingReducer(0, { type: "ADD", payload: 5 }));

// predict: what will be console logged? 20
console.log(myCountingReducer(10, { type: "ADD", payload: 10 }));

// predict: what will be console logged? 20
console.log(myCountingReducer(10, { type: "ADD", payload: 10 }));
