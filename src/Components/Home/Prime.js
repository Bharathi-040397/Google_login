import React from 'react'
import '../../Css/Prime.css'

function Prime({img,title,desc,button}) {
    return (
       
        <div className="prime_container">
            <div className="prime_left">
                <p className="title">{title}</p>
                <p>{desc}</p>
                <button className="btn btn-warning mb-4 mt-2 prime_btn">{ button}</button>
            </div>
            <div className="prime_right">
                <img src={img} alt="" className="img-fluid mt-4 prime_img"/>
           </div>
        </div>
    )
}

export default Prime
