import ACTION from '../Action'

export const initialState = {
    user: null,
    isLogged:false,
}

const User = (state = initialState, action) => {
   
    switch(action.type){
        case ACTION.LOGIN:
            return {
                ...state,
                isLogged:true,
                user: action.payload,
            }
        case ACTION.LOGOUT:
            return {
                ...state,
                isLogged:false,
                user: null,
            };
        default:
            return state
    }
}
export default User