import { createStore, combineReducers } from "redux";

export const initialState = {
  count: { value: 0, default: 100 },
  user: { userName: "" },
  foo: {},
  isModalVisible: false,
  modalData: {},
};

function countReducer(state = {}, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

function userReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}

function fooReducer(state = {}, action) {
  switch (action.type) {
    case "SET_FOO":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}

function modalReducer(state = {}, action) {
  switch (action.type) {
    case "SET_MODAL_VISIBLE":
      return { ...state, isModalVisible: true };
    case "SET_MODAL_INVISIBLE":
      return { ...state, isModalVisible: false };
    case "SET_MODAL_DATA":
      return { ...state, modalData: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
  foo: fooReducer,
  isModalVisible: modalReducer,
  modalData: modalReducer,
});

const store = createStore(rootReducer, initialState);
export default store;
