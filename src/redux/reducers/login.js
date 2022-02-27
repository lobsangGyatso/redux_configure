
const initialState = {
  request: false,
  success: false,
  error: '',
  userData: {},
  logoutResponse: '',
  logoutError: '',
};

function loginReducer(state = initialState, action = {}) {
  console.log('we are in ', action)
  switch (action.type) {
    case 'USER_LOGIN_REQUEST': {
      return {
        ...state,
        request: true,
        logoutResponse: '',
        logoutError: '',
        userData: {},
        error: '',
      };
    }
    case 'USER_LOGIN_SUCCESS': {
      return {
        ...state,
        request: false,
        success: true,
        logoutResponse: '',
        userData: action.payload ? action.payload : {},
        error: '',
      };
    }

    default: {
      return state;
    }
  }
}

export default loginReducer;
