import React, { useContext } from 'react'
import { useParams } from 'react-router'

import { items } from '../context/Data';
import Products from '../components/Products';
import './Product_Detail.css'
import DataContext from '../context/DataContext';

const Product_detail = () => {
  const { id } = useParams();

  const { addTocart } = useContext(DataContext)

  const product = items.find(pro => pro.id == id);

  const relatedProduct = items.filter(pro => pro.category.toLowerCase() == pro.category.toLowerCase())
  return (
    <div>
      <div className="container my-5 ">
        <div className="product-detail-card">
          <div className="image-section" style={{ gap: '2rem' }}>
            <img src={product.imgSrc} alt={product.title}
              className='product-image'
            />
            <div className="info-section">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price} ₹</p>
              <button className="btn add-to-cart"
                onClick={() => addTocart(product.id, product.title, product.price, product.imgSrc)}

              >🛒 Add To Cart</button>
            </div>
          </div>
        </div>

        <h2 className='text-center my-5'>Related Products</h2>
        <Products items={relatedProduct} />
      </div>
    </div>
  )
}

export default Product_detail