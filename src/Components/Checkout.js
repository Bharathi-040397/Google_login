import React from 'react'
import { useSelector } from 'react-redux'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CurrencyFormat from 'react-currency-format';
import '../Css/Cart.css'
import Header from '../Components/Common/Header'
import { getTotal } from '../Redux/Reducer/Cart'
import { Link } from 'react-router-dom'


function Checkout() {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    const { cart } = useSelector(state => state.cart);

    return (
        <>
            <Header/>
        <div className="container-fluid padding pt-3">
        <div className="row checkout">
            <div className="col col-sm-12 col-md-4 ">
              <h5 className="check_title">Address</h5>
            </div>
            <div className="col col-sm-12 col-md-8 ">
                    <h5 className="check_title">{ userLocal.email}</h5>
            </div>
       </div>
        <div className="row checkout">
            <div className="col col-sm-12 col-md-4">
              <h5 className="check_title">Products</h5>
            </div>
            <div className="col col-sm-12 col-md-8">
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
            </div>
            </div>
      </div>      
            ))}
            </div>
       
       </div>
       <div className="row">
                <div className="col-12">
                    
                {cart.length !==0 &&
                            <div className="col-12  mb-4">
                                <div className="subtotal py-3">
                                
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                                <p className="total_heading">Subtotal ({cart.length} items): <strong>{value}</strong></p>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={getTotal(cart)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                
                                    />
                                    <Link to="/checkout">
                                        <button className="remove_btn">Pay</button>
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

export default Checkout
