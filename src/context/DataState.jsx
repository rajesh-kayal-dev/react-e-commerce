import React, { useState } from 'react'
import DataContext from './DataContext'
import { items } from "./Data"
import { ToastContainer, toast,Bounce } from 'react-toastify';


const DataState = (props) => {
  const [products, setProducts] = useState(items)
  const [cart, setCart] = useState([])
  const addTocart = (id,title,price,imgSrc)=>{
    const obj = {id,title,price,imgSrc};
    toast.success('Item Added To Cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    setCart([...cart,obj]);
  }

  return (
    <DataContext.Provider value={{ products, setProducts, cart, setCart,addTocart }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataState