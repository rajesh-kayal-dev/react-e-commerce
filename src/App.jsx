import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import All_Products from './components/All_Products'
import Trnding_slider from './components/Trnding_slider'
import Product_detail from './pages/Product_detail'
import ProductByCatagory from './pages/ProductByCatagory'
import Search_Product from './pages/Search_Product'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<All_Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product_detail />} />
        <Route path="/product/category/:cat" element={<ProductByCatagory />} />
        <Route path="/product/search/:term" element={<Search_Product />} />
      </Routes>
      <Trnding_slider />
    </Router>
  )
}

export default App