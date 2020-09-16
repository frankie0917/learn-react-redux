const { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } = require("./userType");

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
};
