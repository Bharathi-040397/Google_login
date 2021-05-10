import React from 'react'
import '../../Css/Header.css'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout} from '../../Redux/Action/User'



function Header() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const { cart } = useSelector(state => state.cart);

    const Logout = () => {
        dispatch(logout());
        localStorage.clear();
        history.push('/');
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light justify-content-left sticky-top" id="Header">
    <div className="container-fluid">
      <Link to="/"> 
      <img src="https://t3.ftcdn.net/jpg/02/37/09/88/360_F_237098808_t4lMaQCHh3fH9YvVxzUdS7XmOyinQOj9.jpg" alt="" className="navbar-brand" id="H_img"/>
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
        </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    
            <div className="navbar-nav ml-auto">
             <Link to="/products">
               <div className="nav-item ml-3">
                    <p className="nav-link p-2">Products</p>
                </div>
                </Link>
                <Link to="/cart">
               <div className="nav-item ml-3 ">
                 <p className="nav-link p-2">Cart <span>({cart.length})</span></p>
                </div>
                </Link>
               <div className="nav-item ml-3 ">
               <button className="nav-link btn btn-outline-danger mt-1 py-1 px-4" id="H_Button" onClick={()=>Logout()}>logout</button>
                </div>
            </div>
        </div>
        </div>
    </nav>
        
    )
}

export default Header
