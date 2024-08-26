import axios from "axios"
import { ProductInterface } from "../modals/productModal"
import { AddProductInterface } from "../modals/addProductModal";

export const getProducts = async () => {
    const response = await axios.get<ProductInterface[]>("https://fakestoreapi.com/products");
    return response.data;
}

export const getPaginatedProducts = async(page: number, pageSize: number) => {
    const response = await axios.get<ProductInterface[]>(`https://jsonplaceholder.typicode.com/todos`, {
        params: {
            _start: (page - 1) * pageSize,
            _limit: pageSize
        }
    });
    return response.data;
}

export const addProduct = async(product: AddProductInterface) => {
    const response = await axios.post("https://fakestoreapi.com/products", product);
    console.log(response);
    
    return response;
}

export const editProduct = async(id: string, product: AddProductInterface) => {
    const response = await axios.put(`https://fakestoreapi.com/products/${id}`, product);
    console.log(response.data);
    
    return response;
}