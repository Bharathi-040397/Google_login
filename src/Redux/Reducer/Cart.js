import ACTION from '../Action/'

const initialState = {
    cart: [],
   
};

const Cart = (state = initialState, action) => {
    console.log(state);
    console.log(action.payload);

    switch (action.type) {
       case ACTION.ADD_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case ACTION.EMPTY_CART:
            return {
                ...state,
                cart:[]
            }
            
        case ACTION.REMOVE_CART:
            let newcart = [...state.cart];
            const index = state.cart.findIndex(
                (cartItem) => cartItem.title === action.payload
            );
                
            if (index >= 0) {
                newcart.splice(index, 1);
             }
            else {
                console.warn("can't remove product");
            }
            return {
                ...state,
                cart: newcart,
            };
        
        default:
            return state;
    }
  
};

export const getTotal = (cart) => {
   return  cart?.reduce((amount, item) => item.price + amount, 0);
}

export default Cart