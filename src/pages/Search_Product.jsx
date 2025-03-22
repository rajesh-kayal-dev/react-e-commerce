import React from 'react'
import { useParams } from 'react-router'
import { items } from '../context/Data';
import Products from '../components/Products';

const Search_Product = () => {
  const {term} = useParams();
  const serachProducts = items.filter(pro=>pro.title.toLowerCase().includes(term.toLocaleLowerCase()))
  return (
    <div>
      <Products items={serachProducts} />
    </div>
  )
}

export default Search_Product