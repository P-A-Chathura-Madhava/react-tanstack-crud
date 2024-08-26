import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { addProduct } from '../services/api'
import { AddProductInterface } from '../modals/addProductModal'
import useAddProduct from '../hooks/useAddProduct'
import { useProductsList } from '../services/queries'
import useEditProduct from '../hooks/useEditProduct'

function EditProduct() {

  const product: AddProductInterface = {
    title: "New Product",
    price: "2000",
    category: "Electronics",
    description: "Good Product",
    image: "http//image-url"
  }

  const {mutateAsync, data, isSuccess} = useEditProduct("1", product);
  const products = useProductsList();
  
  return (
    <div>
      <h3>Add Product</h3>
      <button onClick={async() => {
        try {
          await mutateAsync();
          console.log("product Edited");
          console.log(data?.data);                   
        } catch (error) {
          console.log(error);          
        }
      }}>Edit Product</button>
              <h2>Products</h2>
        {isSuccess && 
            products.data?.map((product) => {
                return (<div key={product.id}><span>{`${product.id} : ${product.title}`}</span></div>)
            })
        }
    </div>
  )
}

export default EditProduct