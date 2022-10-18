import { legacy_createStore as createStore } from "redux";
export type InitialState = {
  searchTerm: string;
};
type Action = {
  type: string;
  payload: string;
};

const initialState: InitialState = {
  searchTerm: "",
};

const searchReducer = (state = initialState, action: Action) => {
  if (action.type === "SEARCH") {
    return {
      searchTerm: action.payload,
    };
  }
  return state;
};

const store = createStore(searchReducer);

export default store;
