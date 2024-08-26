import { useQuery } from "@tanstack/react-query";
import { ProductInterface } from "../modals/productModal";
import axios from "axios";

const useProduct = (id: string | undefined) => {
    const getAProduct = async(id: string | undefined) => {
        const response = await axios.get<ProductInterface>(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    }
    return useQuery<ProductInterface>({
        queryKey: ["product", id],
        queryFn: ()=> getAProduct(id)
    })
}

export default useProduct;