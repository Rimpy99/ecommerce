import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SyncLoader from "react-spinners/SyncLoader";

type ProductType = {
    product_id: number,
    name: string,
    image: string,
    price: number,
    sex: string,
    color: string,
    type: string,
    discount_price: number | null,
    xs: string,
    s: string,
    m: string,
    l: string,
    xl: string,
    xxl: string,
}

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const [ productInfo, setProductInfo ] = useState<ProductType | null>(null);
    const [ isError, setIsError ] = useState<boolean>(false);

    const getProductInfoFromDB = async () => {
        try{
            const fetchProduct = await fetch(`/products/getProductDetails/${productId}`, { method: 'GET' });
            !fetchProduct.ok && setIsError(true);
            const productData = await fetchProduct.json();
            console.log(productData[0])
            setProductInfo(productData[0]);
        }catch(err){
            setIsError(true);
        }
    }

    useEffect(() => {
        getProductInfoFromDB();
    }, [])

    if(productInfo === null){
        if(isError){
            return(
                <Box sx={{
                    minHeight: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography>Something went wrong!</Typography>
                </Box>
            );
        }

        return(
            <Box sx={{
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <SyncLoader color={'lightgray'}/>
            </Box>
        )
    }

    return(
        <>
            {productInfo.name}
        </>
    )
};

export default ProductDetailsPage;