import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddProductInterface } from "../modals/addProductModal";
import { addProduct } from "../services/api";

const useAddProduct = (newProduct: AddProductInterface)  => {
    const queryClient = useQueryClient();   // same one that inject in the root file

    return useMutation<any>({
        mutationFn: () => addProduct(newProduct),
        // this function wil run if this is successfull
        mutationKey: ["product/add"],
        onSuccess: () => {
            queryClient.refetchQueries({queryKey: ["products"], type: "active"})
        }
    })
}

export default useAddProduct;