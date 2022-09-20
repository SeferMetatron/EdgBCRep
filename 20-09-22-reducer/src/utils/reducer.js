import theme from "./theme";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };

    case "RANDOM":
      return { ...state, count: Math.random() * 1000 };

    case "SET_USERNAME":
      return { ...state, userName: action.payload };

    case "SET_THEME":
      return { ...state, theme: !theme };

    default:
      return state;
  }
};

export default reducer;
