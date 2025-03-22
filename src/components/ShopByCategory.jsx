import React, { useContext, useState } from 'react'
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaClock, FaThLarge, FaRupeeSign } from 'react-icons/fa'
import DataContext from '../context/DataContext'
import { items } from '../context/Data'
const categories = [
  { name: "All Products", icons: <FaThLarge /> },
  { name: "Mobiles", icons: <FaMobileAlt /> },
  { name: "Tablets", icons: <FaTabletAlt /> },
  { name: "Laptops", icons: <FaLaptop /> },
  { name: "Watches", icons: <FaClock /> },
]
const priceRange = [30000, 40000, 50000, 60000, 70000, 80000]

const ShopByCategory = () => {
  const { setProducts } = useContext(DataContext);
  const [selectedPrice, setSelectedPrice] = useState(80000)

  const FilterByCategory = (cat) => {
    if(cat == 'All Products'){
      setProducts(items)
      return
    }
    setProducts(items.filter(pro => pro.category.toLowerCase() === cat.toLowerCase()))
  }
  const filterByPrice = (price) =>{
    setProducts(items.filter(pro => pro.price <= price))
  }

  return (
    <>
      <div className="container bg-dark text-light my-4 p-4 rounded">
        <h3 className='text-center mb-3'>Filter Products</h3>
        <div className="flex-weap  d-flex justify-content-center align-items-center gap-3 mb-4">
          {categories.map(({ name, icons }) => (<div key={name} className=' d-flex justify-content-center gap-2 px-3 py-2 rounded bg-secondary text-light fw-bold'
            style={{ cursor: 'pointer' }}
            onClick={()=> FilterByCategory(name)}
            >
            {icons}<span>{name}</span>
          </div>
          ))}
        </div>

        <div className='flex-weap  d-flex justify-content-center align-items-center gap-3'>
          {priceRange.map((value) => <span key={value}
            className={`badge p-3 fw-bold ${selectedPrice == value ? "bg-warning text-dark" : "bg-light text-dark"}`}
            style={{ cursor: 'pointer', fontSize: "1rem", borderRadius: '10px' }}
            onClick={()=>filterByPrice(value)}>
            <FaRupeeSign /> {value}
          </span>)}
        </div>


      </div>
    </>
  )
}

export default ShopByCategory