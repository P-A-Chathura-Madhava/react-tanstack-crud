import React, { useState } from 'react'
import usePaginatedProducts from '../hooks/usePaginated'

function PaginatedProducts() {
    const pageSize = 10;
    const [pageNumber, setPageNumber] = useState(1);

    const products = usePaginatedProducts(pageNumber, pageSize);
    console.log(products.data);   

  return (
    <div>
        <h2>Paginated Products</h2>
        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1}>Previous</button>
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
    </div>
  )
}

export default PaginatedProducts