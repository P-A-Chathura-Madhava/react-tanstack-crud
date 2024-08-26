import React from 'react'
import { useProductsList } from '../services/queries'

function Products() {
    const products = useProductsList();

    // console.log(products.data);
    
  return (
    <div>
        <h2>Products</h2>
        {
            products.data?.map((product) => {
                return (<div key={product.id}><span>{`${product.id} : ${product.title}`}</span></div>)
            })
        }
    </div>
  )
}

export default Products