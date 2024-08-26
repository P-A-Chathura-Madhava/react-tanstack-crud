import React, { useState } from 'react'
import useProduct from '../hooks/useProduct'
import useDeleteProduct from '../hooks/useDeleteProduct';

function DeleteProduct() {
  const {mutateAsync, isSuccess, data} = useDeleteProduct("1");
    
  return (
    <div>
        <button onClick={async() => {
            try {
                await mutateAsync();
                if (isSuccess) {
                    console.log(data);
                    console.log("Product Deleted");                    
                }                
            } catch (error) {
                console.log(error);                
            }

        }}>Delete a Product</button>
    </div>
  )
}

export default DeleteProduct