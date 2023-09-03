import { useEffect, useState } from "react";
import Product from "../components/Product";
import SyncLoader from "react-spinners/SyncLoader";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type ProductType = {
    product_id: number,
    name: string,
    image: string,
    price: string,
    color: string,
    sex: string,
    type: string,
    discount_price: string,
}

const HomePage = () => {

    const theme = useTheme();

    const [ products, setProducts ] = useState<ProductType[] | []>([]);
    // const [ options, setOptions ] = useState();
    const [ isError, setIsError ] = useState<boolean>(false);

    const getAllProductsFromDB = async () => {
        try{
            const fetchProducts = await fetch('/products',{
                method: 'GET'
            });
            const arrayOfProducts = await fetchProducts.json();
            setProducts(arrayOfProducts);
            console.log(products);
        }catch(err){
            setIsError(true);
        }
    }

    useEffect(() => {
        getAllProductsFromDB();
    }, []);

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
            {
                products.map((product) => <Product product={product}/>)
            }
        </>
    )
};

export default HomePage;