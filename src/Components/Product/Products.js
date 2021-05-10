import React from 'react'
import Product from './Product'
import '../../Css/Product.css'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Products() {
    return (
        <>
        <Header/>
        <div className="container-fluid padding">
    <div className="row welcome text-center">
        <div className="col-12 mt-4">
        <p className="title">Products</p>
        </div>
        <div>
        <hr className="my-4"/>
        </div>
   </div>
   <div className="container-fluid">
    <div className="row padding row-cols-1 row-cols-md-2 row-cols-lg-3 pr-4">
                   <Product 
                    title="Red Solid Pin Tuck Kurti"
                    price={100}
                    rating={4}
                    img="https://images-eu.ssl-images-amazon.com/images/I/31IvC0Ajz%2BL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"/>
                    <Product
                    title="Regular Waist Slim Fit Jeans "
                    price={500}
                    rating={5}
                    img="https://images-eu.ssl-images-amazon.com/images/I/41Vjg4I9JCL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"/>
                    <Product
                    title="Red Solid Pin Tuck Kurti"
                    price={100}
                    rating={4}
                    img="https://images-eu.ssl-images-amazon.com/images/I/31IvC0Ajz%2BL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"/>
                    <Product
                    title="DJ & C Men's Regular fit T-Shirt"
                    price={200}
                    rating={3}
                    img="https://images-eu.ssl-images-amazon.com/images/I/41zoIxik7yL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <Product
                    title="Pink & Blue by FBB Star Print Knit Frock"
                    price={150}
                    rating={3}
                    img="https://images-eu.ssl-images-amazon.com/images/I/41VzT8H+tcL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    /> 
                    <Product
                    title="DJ & C Floral Print T-Shirt "
                    price={600}
                    rating={4}
                    img="https://images-eu.ssl-images-amazon.com/images/I/41Jey-5jJfL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <Product
                    title="DJ&C by fbb Girls' Legging Bottom "
                    price={500}
                    rating={2}
                    img="https://images-eu.ssl-images-amazon.com/images/I/51kNAQ15RtL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                 <Product
                    title="T2F Girl's Plain Regular fit T-Shirt (Pack of 5)"
                    price={500}
                    rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51n8veEQNlL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <Product
                    title="T2F Girl's Plain Regular fit T-Shirt (Pack of 5)"
                    price={200}
                    rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41rFDQamRcL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <Product
                    title=" Girls'Taffeta Silk Lehenga Choli"
                    price={599}
                    rating={2}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51n8veEQNlL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <Product
                    title="Hopscotch Polyester Floral Prin Dress with Hat"
                    price={400}
                    rating={5}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51-lspG2jPL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                     <Product
                    title="Indian Evergreen Girls' Midi Dress"
                    price={300}
                    rating={2}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51Q7V01IyaL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                        />
                    </div>
                </div>
            </div>
            <Footer/>
            </>
    )
}

export default Products
