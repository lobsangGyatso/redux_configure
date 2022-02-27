
const initialState = {
    request: false,
    success: false,
    error: '',  
    collection:[]
  };
  
  function collectionReducer(state = initialState, action = {}) {
    console.log('we are in ', action)
    switch (action.type) {
      case 'GET_COLLECTIONS': {
        return {
          ...state,
          request: true,
          logoutResponse: '',
          error: '',
          collection: [...action.payload]
        };
      }
    
      default: {
        return state;
      }
    }
  }
  
  export default collectionReducer;
  