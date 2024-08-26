import React, { useState } from 'react'
import useProduct from '../hooks/useProduct'

function Product() {
  const product = useProduct("1");
  console.log(product.data);
  
  
  return (
    <div>

    </div>
  )
}

export default Product