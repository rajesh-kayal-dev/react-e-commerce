import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Link } from 'react-router';

const Cart = () => {
  const { cart, setCart } = useContext(DataContext);

  return (
    <div className="container my-5">
      {cart.length === 0 ? (
        <div className="text-center">
          <h1>Your Cart is empty</h1>
          <Link to={'/'} className='btn btn-warning mt-3'>Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="row d-flex justify-content-center">
            {cart.map((product) => (
              <div key={product.id} className='col-lg-8 col-md-10 my-3'>
                <div className="card cart-card shadow p-3 mb-3 bg-dark rounded">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-4 d-flex justify-content-center">
                      <img src={product.imgSrc} alt={product.title} className='cart-img img-fluid rounded' />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h3 className="product-title font-weight-bold text-white">{product.title}</h3>
                        <p className="product-description text-muted">{product.description}</p>
                        <p className="product-price text-success font-weight-bold">{product.price} ₹</p>
                        <div className="button-group mt-3">
                          <button className="btn btn-primary mx-2"
                            onClick={() => addTocart(product.id, product.title, product.price, product.imgSrc)}
                          >Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center my-5">
            <button className="btn btn-warning mx-2">Check Out</button>
            <button onClick={() => setCart([])} className="btn btn-danger mx-2">Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
