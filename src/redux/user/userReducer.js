const {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} = require("./userType");

const initialState = {
  users: [],
  loading: false,
  error: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
