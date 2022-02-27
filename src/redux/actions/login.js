export const userLoginRequest = ()=>(
    {
        type:'USER_LOGIN_REQUEST',
    }
);


export const userLoginSuccess = (payload) => (
    {
        type:'USER_LOGIN_SUCCESS',
        payload
    }
    
)


export const userLoginFailure = () => (
    {
        type:'USER_LOGIN_FAILURE'
    }
)




// export const userLoginRequest = action(USER_LOGIN_REQUEST, 'payload');
// export const userLoginSuccess = action(USER_LOGIN_SUCCESS, 'payload');
// export const userLoginFailure = action(USER_LOGIN_FAILURE);


