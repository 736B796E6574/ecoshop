import React from 'react';
import "./Home.css";
import Product from './Product';
import "./Product.css";

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2bc3ccc6-0075-49a2-9a19-45f44ea3666c.jpg" alt="" className="home__image" />
            <div className="home__row">
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home