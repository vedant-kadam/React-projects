const redux = require("redux");

//reducer fnc
const counterReducer = (state, action) => {
  if (action.type === "PLUS") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "MINUS") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//store
const store = redux.createStore(counterReducer, { counter: 0 });

//subcriber function which will be triggered once the state is updated
const counterSubscriber = () => {
  const currState = store.getState();
  console.log(currState);
};

//subsribibg to the store
store.subscribe(counterSubscriber);
console.log(store.getState());
store.dispatch({ type: "PLUS" });
store.dispatch({ type: "MINUS" });
