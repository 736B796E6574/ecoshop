import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>Beautiful hairdryer that will dry your hair my friends.</p>
                <p className="product__price"><small>$</small><strong>30</strong></p>
                <div className="product__rating">⭐️</div>
            </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" alt=""/>
                <button>Add to basket</button>
        </div>
    </div>
  )
}

export default Product