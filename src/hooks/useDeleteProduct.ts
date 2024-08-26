import { useMutation, useQuery } from "@tanstack/react-query";
import { ProductInterface } from "../modals/productModal";
import axios from "axios";

const useDeleteProduct = (id: string | undefined) => {
    const deleteProduct = async(id: string | undefined) => {
        const response = await axios.delete<ProductInterface>(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    }
    return useMutation<ProductInterface>({
        mutationKey: ["product/delete", id],
        mutationFn: ()=> deleteProduct(id)
    })
}

export default useDeleteProduct;