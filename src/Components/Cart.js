import React from 'react'
import '../Css/Cart.css'
import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';
import { useSelector, useDispatch } from 'react-redux'
import { removeCart} from '../Redux/Action/Cart'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Header from '../Components/Common/Header'
import {getTotal} from '../Redux/Reducer/Cart'

function Cart() {
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removecart = (title) => {
        dispatch(removeCart(title));
    }

    return (
        <>
        <Header/>
        <div className="container-fluid padding">
       <div className="row welcome text-center">
        <div className="col-12 mt-4">
        <p className="title">Cart</p>
        </div>
        <div>
        <hr className="my-4"/>
        </div>
        </div>
     
   <div className="container-fluid">
 <div className="row center padding " style={{ height:'100vh'}}>
 
      {cart.map((c,index) => (
        <div key={index} className="col-12 mb-4">
              <div key={index} className="cart_product">
            <img className="cart_img" alt="" src={c.img} />
            <div className="cart_info">
                <p>{c.title}</p>
                <p className="cart_price">
                    <small>₹</small>
                    <strong>{c.price}</strong>
                </p>
                <div className='cart_rating'>
                    {Array(c.rating).fill().map((_, i) => {
                        return <StarBorderIcon key={i} className="star"/>
                    })}
                </div>
            <button className="remove_btn" onClick={()=>removecart(c.title)}>Remove</button>
            </div>
            </div>
      </div>      
      ))}
                        {cart.length !==0 &&
                            <div className="col-12  mb-4">
                                <div className="subtotal py-3">
                                
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                                <p className="total_heading">Subtotal ({cart.length} items): <strong>{value}</strong></p>
                                                <p className="total_gift">
                                                    <input className="totalcheck" type="checkbox" />This order contains a gift
                                                </p>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={getTotal(cart)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                
                                    />
                                    <Link to="/checkout">
                                        <button className="remove_btn">Proceed to Checkout</button>
                                    </Link>
                                </div>
                            </div>
                        }
        </div>
        </div>
        </div>
        </>
    )
}

export default Cart
