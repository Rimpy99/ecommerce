import { useState, useEffect } from 'react';
import { Typography, Box } from "@mui/material";
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
}

const OnSalePage = () => {

    const [ products, setProducts ] = useState<ProductType[] | []>([]);
    const [ isError, setIsError ] = useState<boolean>(false);

    const getAllOnSaleProductsFromDB = async() => {
        try{
            const fetchProducts = await fetch('/products/onsale', { method: 'GET' });
            !fetchProducts.ok && setIsError(true);
            const arrayOfProducts = await fetchProducts.json();
            setProducts(arrayOfProducts);
        }catch(err){
            setIsError(true);
        }
    }

    useEffect(() => {
        getAllOnSaleProductsFromDB();
    }, [])

    //ERROR HANDLING
    if(!products.length){
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
            )
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
            {products.map((product) => <Typography>{product.name}</Typography>)}
        </>
    )
};

export default OnSalePage;