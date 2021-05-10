import React,{ useState } from 'react'
import {useDispatch} from 'react-redux'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { addCart } from '../../Redux/Action/Cart'


function Product({ title, img, price, rating }) {
    
    const dispatch = useDispatch();

    const [Data] = useState({
        title,
        img,
        price,
        rating
    })
    
    const addcart = () => {
        dispatch(addCart(Data))
    }
    return (
        <div className="col mb-4">
             <div className="Product">
            <div className="Product_info">
                <p>{title}</p>
                <p className="Product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => {
                        return <StarBorderIcon key={i} className="star" />
                    
                    })}
                </div>
            </div>
            <img className="Product_img" alt="" src={img} />
            <button className="Product_btn" onClick={()=>addcart()}>Add to Cart</button>
        </div>
        </div>
    )
}

export default Product
