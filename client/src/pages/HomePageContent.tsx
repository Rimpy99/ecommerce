import { useEffect, useState } from "react";
import Product from "../components/Product";
import FilterMenu from "../components/FilterMenu";
import SyncLoader from "react-spinners/SyncLoader";
import { Typography, Box } from "@mui/material";

type HomePageContentPropsType = {
    location: string,
}

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

type OptionsType = {
    color: string,
    type: string,
    sex: string,
    min_price: number,
    max_price: number, 
}

const HomePageContent = ({location}: HomePageContentPropsType) => {
    //STATES
    const [ products, setProducts ] = useState<ProductType[] | []>([]);
    const [ options, setOptions ] = useState<OptionsType>({
        color: '',
        type: '',
        sex: '',
        min_price: 0,
        max_price: 0,
    });
    const [ colors, setColors ] = useState<string[]>(['']);
    const [ types, setTypes ] = useState<string[]>(['']);
    const [ priceRange, setPriceRange ] = useState<number[]>([0, 100]);
    const [ isError, setIsError ] = useState<boolean>(false);

    //GETTING DATA FROM DATABASE
    const getAllProductsFromDB = async () => {
        try{
            const fetchProducts = await fetch(`/products/${location}`, {
                method: 'GET'
            });
            !fetchProducts.ok && setIsError(true);
            let arrayOfProducts = await fetchProducts.json();
            console.log(arrayOfProducts)
            setProducts(arrayOfProducts);
        }catch(err){
            setIsError(true);
        }
    }

    useEffect(() => {
        getAllProductsFromDB();
    }, [location]);

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

            // setPriceRange([options.min_price, options.max_price])
            setPriceRange([minPrice.price, maxPrice.price])

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
        <Box 
            sx={{ 
                width: '100%', 
                maxWidth: 1400, 
                display: 'flex', 
                flexDirection: {xs: 'column', lg: 'row'},
                // flexDirection: 'column',
                margin: 'auto', 
            }}
        >
            <Box sx={{ bgcolor: 'white', paddingTop: '20px', width: {xs: '100%', lg:'200px'} }}>
                <FilterMenu
                    colors={colors} 
                    types={types} 
                    options={options} 
                    setOptions={setOptions} 
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                />
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '300px', sm:'repeat(2, min(40%, 300px))', lg:'repeat(3, 300px)'},
                    gap: 5,
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    marginRight: {xs: 'auto', lg: 0},
                    paddingTop: '20px'
                }}
            >
                {
                    products.map((product) => {
                        if(options.color.length !== 0 && product.color !== options.color) return
                        if(options.type.length !== 0 && product.type !== options.type) return
                        if(options.sex.length !== 0 && options.sex !== product.sex) return
                        if(product.discount_price){
                            if(!(product.discount_price >= priceRange[0] && product.discount_price <= priceRange[1])) return
                        }else{
                            if(!(product.price >= priceRange[0] && product.price <= priceRange[1])) return
                        }
                        
                        return(
                            <Product product={product}/>
                        )
                    })
                }
            </Box>
        </Box>
    )
};

export default HomePageContent;