import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddProductInterface } from "../modals/addProductModal";
import { addProduct, editProduct } from "../services/api";

const useEditProduct = (id: string, newProduct: AddProductInterface)  => {
    const queryClient = useQueryClient();   // same one that inject in the root file

    return useMutation<any>({
        mutationFn: () => editProduct(id, newProduct),
        // this function wil run if this is successfull
        mutationKey: ["product/edit"],
        onSuccess: () => {
            queryClient.refetchQueries({queryKey: ["products"], type: "active"})
        }
    })
}

export default useEditProduct;