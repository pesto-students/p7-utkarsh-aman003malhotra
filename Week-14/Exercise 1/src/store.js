import { createStore } from "redux";

const initialState = {
  isLightOn: true
};

const reducer = (state = initialState, action) => {
  if (action.type === "TOGGLE") {
    return {
      isLightOn: !state.isLightOn
    };
  }
  return initialState;
};

const store = createStore(reducer);
export default store;
