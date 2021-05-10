import React, { Fragment } from 'react'
import Prime from './Prime'
import Slider from './Slider'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

function Home() {
    return (
        <Fragment>
            <Header/>
            <Slider />
            <Prime
                title="Unlimited FREE fast delivery"
                desc="Guaranteed free One-Day, Two-Day and Standard Delivery on eligible items
                Why pay Rs.100 for One-Day Delivery every time you need an item quickly? As a Prime member, get unlimited FREE 
                One-Day and Two-Day Delivery on eligible items from India’s largest online store, to over a hundred cities.
                 Prime items that are not eligible for free One-Day or Two-Day Delivery to your location, will always qualify for 
                 free Standard Delivery with no minimum purchase value. The fastest, free Prime delivery speed available for an item will be 
                 shown on the product page."
                img="https://www.expatica.com/app/uploads/sites/11/2014/05/Shopping.jpg"
                button="Subscribe"
            />
            <Prime
                title="Save Upto 50%"
                desc="Watch the latest and exclusive movies & TV shows
                With your Prime membership, you have access to the latest and exclusive Bollywood and regional blockbusters such 
                as Raazi and Goodachari, and Hollywood movies like Jumanji: Welcome to the Jungle. You can also get stuck into US TV shows like
                 Young Sheldon, and exclusive access to Prime Original Series Comicstaan, Breathe and Inside Edge."
                img="https://www.intheblack.com/-/media/intheblack/allimages/magazine-2018/11-november/small-shopping-bags.jpg?rev=2ad3af44e054440598b93c6c3c442aa1"
                button="Purchase"      
            />
            <Footer/>
        </Fragment>
    )
}

export default Home
