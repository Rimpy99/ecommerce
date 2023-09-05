import { useEffect, useState } from "react";
import Product from "../components/Product";
import FilterMenu from "../components/FilterMenu";
import SyncLoader from "react-spinners/SyncLoader";
import { Typography, Box } from "@mui/material";

type ProductType = {
    product_id: number,
    name: string,
    image: string,
    price: number,
    color: string,
    sex: string,
    type: string,
    discount_price: number | null,
}

type OptionsType = {
    color: string,
    type: string,
    sex: string,
    min_price: number,
    max_price: number, 
}

const HomePage = () => {

    //STATES
    const [ products, setProducts ] = useState<ProductType[] | []>([]);
    const [ options, setOptions ] = useState<OptionsType>({
        color: '',
        type: '',
        sex: '',
        min_price: 0,
        max_price: 0,
    });
    const [ colors, setColors ] = useState<string[]>([''])
    const [ types, setTypes ] = useState<string[]>([''])
    const [ isError, setIsError ] = useState<boolean>(false);

    //GETTING DATA FROM DATABASE
    const getAllProductsFromDB = async () => {
        try{
            const fetchProducts = await fetch('/products', {
                method: 'GET'
            });
            const arrayOfProducts = await fetchProducts.json();
            setProducts(arrayOfProducts);
        }catch(err){
            setIsError(true);
        }
    }

    useEffect(() => {
        getAllProductsFromDB();
    }, []);

    useEffect(() => {
        if(products.length){
            const maxPrice = (products as ProductType[]).reduce((previous: ProductType, current: ProductType) => {
                return current.price > previous.price ? current : previous
            })

            const minPrice = (products as ProductType[]).reduce((previous: ProductType, current: ProductType) => {
                return current.price < previous.price ? current : previous;
            })

            const arrayOfColors = [...new Set(products.map((product) => product.color))];

            const arrayOfTypes = [...new Set(products.map((product) => product.type))];

            setOptions({
                ...options,
                min_price: minPrice.price,
                max_price: maxPrice.price
            })

            setColors(arrayOfColors)
            
            setTypes(arrayOfTypes)
        }
    }, [ products ])

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

    //RETURN IF EVERYTHING IS FINE
    return(
        <>
            <FilterMenu colors={colors} types={types} options={options} setOptions={setOptions} />
            {
                products.map((product) => {
                    if(options.color.length !== 0 && product.color !== options.color) return
                    if(options.type.length !== 0 && product.type !== options.type) return
                    if(options.sex.length !== 0 && options.sex !== product.sex) return
                    if(!(product.price >= options.min_price && product.price <= options.max_price)) return
                    
                    return(
                        <Product product={product}/>
                    )
                })
            }
        </>
    )
};

export default HomePage;