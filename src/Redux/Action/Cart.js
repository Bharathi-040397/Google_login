import ACTION from './index'

export const addCart = (Data) => {
    return {
        type: ACTION.ADD_CART,
        payload: Data
    }
}
export const removeCart = (title) => {
    return {
        type: ACTION.REMOVE_CART,
        payload:title
    }
}
export const clearCart = () => {
    return {
        type: ACTION.EMPTY_CART
    }
}
