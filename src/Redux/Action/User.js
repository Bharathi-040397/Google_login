import ACTION  from '../Action'

export const login = (user) => {
    return {
        type: ACTION.LOGIN,
        payload:user,
    }
}
export const logout = () => {
    return {
        type: ACTION.LOGOUT
    }
}