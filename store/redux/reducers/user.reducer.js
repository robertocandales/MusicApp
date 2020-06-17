import { SET_USER } from "../actions/types";

const initialState = {
  user: false,
  isLoading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_USER:
          return { ...state, user: action.payload.user }
      default:
          return state;
  }
};

export default userReducer;

