import React, { useContext, useState } from 'react'
import { FaAmazon, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import DataContext from '../context/DataContext';

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const {cart} = useContext(DataContext)
  
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault()
    navigate(`/product/search/${searchTerm}`)
    setSearchTerm('')
  }
  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 sticky-top shadow'>
      <div className="container-fluid">
        <Link to={'/'} className='navbar-brand d-flex align-items-center'>
          <FaAmazon className='text-warning fs-2 me-2' />
          <span className='fs-4 fw-bold'>amazon</span>
        </Link>
        <form className='d-flex mx-auto search-container'
          onSubmit={handelSubmit}>
          <input type="search" className='form-control search-input' placeholder='Search Product...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='btn btn-warning search-button'><FaSearch /></button>
        </form>
        {/* categoryes */}
        <ul className='navbar-nav mx-auto d-flex gap-3'>
          {["Mobiles", "Laptops", "Tablets", "watches"].map((category) => (
            <li key={category} className='nav-items'>
              <Link to={`/product/category/${category}`} className='nav-link category-link'>
                {category}
              </Link>
            </li>
          ))}

        </ul>
        {/* cart or button */}
        <Link to={'/cart'} type="button" className="btn btn-warning position-relative car-btn">
          <FaShoppingCart className='fs-4' />
          {cart.length >0 && (<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           {cart.length}
            <span className="visually-hidden">unread messages</span>
          </span>) }
          

        </Link>
      </div>
    </div>
  )
}

export default Navbar