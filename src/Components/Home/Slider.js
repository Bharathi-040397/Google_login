import React from 'react'
import '../../Css/Slider.css'

function Slider() {
    return (
        <div id="carosell" className="carousel slide" data-ride="carousel">
    <ul className="carousel-indicators">
        <li data-target="#carousell" data-slide-to="0" className="active"></li>
        <li data-target="#carousell" data-slide-to="1"></li>
        <li data-target="#carousell" data-slide-to="2"></li>
        <li data-target="#carousell" data-slide-to="3"></li>
        <li data-target="#carousell" data-slide-to="4"></li>
    </ul>
      <div className="carousel-inner">
       
        <div className="carousel-item active">
            <img className="slider_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/newseasonflip/wapc._SX3000_QL85_.jpg"/>
        </div>
        <div className="carousel-item">
            <img className="slider_img" alt="" src="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/NewSeason/AF/MF/Header/PC/MF._CB406502601_.jpg"/>
        </div>
        <div className="carousel-item">
        <img className="slider_img" alt=""  src="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/NewSeason/AF/KF/KF-eng-mob._CB406550983_.jpg" />
        </div>
    
</div>
</div>
    )
}

export default Slider
