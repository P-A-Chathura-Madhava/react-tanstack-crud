import { useQuery } from "@tanstack/react-query";
import { ProductInterface } from "../modals/productModal";
import axios from "axios";
import { getPaginatedProducts } from "../services/api";

const usePaginatedProducts = (page: number, pageSize: number) => {
    return useQuery<ProductInterface[]>({
        queryKey: ["paginatedProducts", {page, pageSize}],
        queryFn: () => getPaginatedProducts(page, pageSize)
    })
}

export default usePaginatedProducts;