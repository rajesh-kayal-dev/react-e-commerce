import React from 'react'
import { useParams } from 'react-router'
import Products from '../components/Products'
import VideoPlayer from '../components/VideoPlayer'

import { Videos } from '../context/Data'
import { items } from '../context/Data'

const ProductByCatagory = () => {
  const { cat } = useParams();

  const videoByCategory = Videos.find(vid => vid.category.toLowerCase() == cat.toLowerCase());
  const productsByCategory = items.filter(pro => pro.category.toLowerCase() === cat.toLocaleLowerCase())

  return (
    <div>
      <VideoPlayer src={videoByCategory.url} />
      < Products items={productsByCategory} />
    </div>
  )
}

export default ProductByCatagory