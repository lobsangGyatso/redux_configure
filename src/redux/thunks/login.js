import axios from 'axios';
import { userLoginFailure, userLoginRequest, userLoginSuccess } from '../actions/login';

export const userLogin = (payload) => {
  return async (dispatch, getState)=>{
    try {
        const state = getState()
        console.log(state.loginReducer, payload, 'ad')
        dispatch(userLoginRequest())
        let user = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('sdfsdfsdf', user)
        dispatch(userLoginSuccess(user))
        // dispatch(login(user.data.data));
        // navigate('/')
    } catch (error) {
        dispatch(userLoginFailure());
    }
}
}