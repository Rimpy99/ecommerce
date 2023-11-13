import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type ProductType = {
    product_id: number,
    name: string,
    image: string,
    price: number,
    sex: string,
    color: string,
    type: string,
    discount_price: number | null,
}

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const [ productInfo, setProductInfo ] = useState<ProductType | null>(null);
    const [ isError, setIsError ] = useState<boolean>(false);

    const getProductInfoFromDB = async () => {
        try{
            const fetchProduct = await fetch(`/product/${productId}`, { method: 'GET' });
            !fetchProduct.ok && setIsError(true);
            const productData = await fetchProduct.json();
            setProductInfo(productData);
        }catch(err){
            setIsError(true);
        }
    }

    useEffect(() => {
        getProductInfoFromDB();
    }, [])

    return(
        <>
            {productId}
        </>
    )
};

export default ProductDetailsPage;