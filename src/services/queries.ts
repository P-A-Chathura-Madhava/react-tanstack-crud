import { useQueries, useQuery } from "@tanstack/react-query";
import { getProducts } from "./api";
// import axios from "axios";
// import { ProductInterface } from "../modals/productModal";

export function useProductsList() {  
  return useQuery({
    // Query key - uses to revalidate our query
    queryKey: ["products"],
    // Query function must always return a function
    queryFn: getProducts,
    // refetch when window changes
    // refetchOnWindowFocus: false,    
  });
}

// export function useGetProductById(id: string | undefined) {
//     return useQuery({
//         queryKey: ["product", id],
//         queryFn: async () => {
//             const response = await axios.get<ProductInterface>(`https://fakestoreapi.com/products/${id}`);
//             return response.data;
//         }
//     })
// }
