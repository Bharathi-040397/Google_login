import React from 'react'
import '../../Css/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="row" id="footer_row">
            <div className=" col-sm-12 col-md-8" id="footer_left">
            <img  className="footer_img" src="https://t3.ftcdn.net/jpg/02/37/09/88/360_F_237098808_t4lMaQCHh3fH9YvVxzUdS7XmOyinQOj9.jpg" alt=""/>
            <p className="footer_text">The next Gen SaaS based peer to peer networking and reskilling platform.</p>
            <p className="footer_text" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum aspernatur obcaecati consequatur dolorem ad reprehenderit iste cum laudantium
                odit possimus natus ullam, voluptatibus animi! Aperiam
                hic culpa earum deleniti qui. Nunc, nisl nulla massa mattis quis tellus turpis eros, condimentum.
                Felis vulputate urna sem maecenas orci nec. Donec nec pretium.
            </p>
            <p className="footer_text">With Us let's Change the Networks and buy to Go.</p>

            <div id="Footer_left_footer">
                <div className="footer_icons">
                        <div className="footer_icon">
                          <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="fb"/>  
                   </div>
                        <div className="footer_icon">
                         <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="twittter"/>   
                   </div>
                        <div className="footer_icon">
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/youtube_circle-512.png" alt="youtube"/>    
                   </div>
                   
                </div>
                </div>
                <p className="footer_text">With us let's Change the way every pserson Networks and Learn to be featurestic</p>
                
        </div>
        <div className="col-sm-12 col-md-4" id="footer_right">
                <div className="footer_add_container">
                   <h5 className="title">Contact Us</h5>
                   <h5 className="footer_add">13,Raja street</h5>
                   <h5 className="footer_add">Kanchi</h5>
                   <h5 className="footer_add">Chennai</h5>
               </div>
              <br/>
           <p className="footer_add">Blog || Privacy policy || Terms</p>
           
       </div>
    </div>
</footer>
    )
}

export default Footer
