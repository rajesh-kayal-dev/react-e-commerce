import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router'
import ShopByCategory from './ShopByCategory'
import DataContext from '../context/DataContext'
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Products = ({ items }) => {
    const { addTocart } = useContext(DataContext);
    const { pathname } = useLocation()

    return (
        <>
            <ToastContainer />
            {pathname == '/' && <ShopByCategory />}
            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    {
                        items.map((product) => (<div key={product.id}
                            className='col-lg-4 col-md-6 my-3 d-flex justify-content-center align-items-center'>
                            <div className="card product-card text-center" style={{ width: '18rem' }}>
                                <Link to={`/product/${product.id}`} className='image-container'>
                                    <img src={product.imgSrc} alt="no img" className='card-img-top' />
                                </Link>
                                <div className="cart-body text-center">
                                    <h5 className='card-title'>
                                        {product.title}
                                    </h5>
                                    <p className='product-price'>{product.price} ₹</p>
                                    <div className="button-container">
                                        <button className='btn add-to-cart'
                                            onClick={() => addTocart(product.id, product.title, product.price, product.imgSrc)}>
                                            🛒Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </>
    )
}

export default Products