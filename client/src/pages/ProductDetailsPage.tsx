import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, List, ListItem, Divider } from "@mui/material";
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

const sizeButtonStyle = {
    margin: "0 5px",
    color: 'appColors.textColor',
}

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const [ productInfo, setProductInfo ] = useState<ProductType | null>(null);
    const [ size, setSize ] = useState<string>('');
    const [ isError, setIsError ] = useState<boolean>(false);

    const getProductInfoFromDB = async () => {
        try{
            const fetchProduct = await fetch(`/products/getProductDetails/${productId}`, { method: 'GET' });
            !fetchProduct.ok && setIsError(true);
            const productData = await fetchProduct.json();
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
            <Box sx={{ display: 'flex', paddingTop: '100px', justifyContent: 'center', marginBottom: '100px', color: 'appColors.textColor' }}>
                <Box sx={{ width: {xs: '100%', md:'1300px'}, display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-between', alignItems: { xs: 'center', md: 'normal' } }}>
                    {/* <Box sx={{ width: '550px' }}> */}
                    <Box sx={{ width: {xs: '80%', md: '50%'} }}>
                        <img 
                            src={`http://localhost:3005/images/${productInfo.image}.jpg`} 
                            alt="product image" 
                            style={{ width: '100%' }}
                        />
                    </Box>
                    <Box sx={{ padding: {xs: '0', md: '0 40px'}, paddingTop: '70px', width: '50%', }}>
                        <Typography 
                            sx={{ 
                                textTransform: 'uppercase',  
                                fontWeight: 'bold',
                                fontSize: '40px',
                                letterSpacing: '2px',
                            }}
                        >
                            {productInfo.name}
                        </Typography>
                        <Box sx={{ display: "flex" }}>
                            <Typography sx={{ textDecoration: productInfo.discount_price ? 'line-through' : 'none', fontSize: "22px", letterSpacing: "4px", padding: "10px 0" }}>
                                {productInfo.price}$
                            </Typography>
                            {productInfo.discount_price && 
                                <Typography sx={{ color: 'red', fontSize: "22px", letterSpacing: "4px", padding: "10px 25px" }}>
                                    {productInfo.discount_price}$
                                </Typography>
                            }
                        </Box>
                        <Divider></Divider>
                        <Box sx={{ margin: "10px 0" }}>
                            <Button 
                                disabled={parseInt(productInfo.xs) <= 0}
                                onClick={() => setSize('xs')} 
                                sx={{ ...sizeButtonStyle, border: size === 'xs' ? '2px solid #23264f' : '2px solid #ededed' }}
                            >xs</Button>
                            <Button 
                                disabled={parseInt(productInfo.s) <= 0}
                                onClick={() => setSize('s')}
                                sx={{ ...sizeButtonStyle, border: size === 's' ? '2px solid #23264f' : '2px solid #ededed' }} 
                            >s</Button>
                            <Button 
                                disabled={parseInt(productInfo.m) <= 0}
                                onClick={() => setSize('m')}
                                sx={{ ...sizeButtonStyle, border: size === 'm' ? '2px solid #23264f' : '2px solid #ededed' }} 
                            >m</Button>
                            <Button 
                                disabled={parseInt(productInfo.l) <= 0}
                                onClick={() => setSize('l')}
                                sx={{ ...sizeButtonStyle, border: size === 'l' ? '2px solid #23264f' : '2px solid #ededed' }} 
                            >l</Button>
                            <Button 
                                disabled={parseInt(productInfo.xl) <= 0}
                                onClick={() => setSize('xl')}
                                sx={{ ...sizeButtonStyle, border: size === 'xl' ? '2px solid #23264f' : '2px solid #ededed' }} 
                            >xl</Button>
                            <Button 
                                disabled={parseInt(productInfo.xxl) <= 0}
                                onClick={() => setSize('xxl')}
                                sx={{ ...sizeButtonStyle, border: size === 'xxl' ? '2px solid #23264f' : '2px solid #ededed' }} 
                            >xxl</Button>
                        </Box>
                        <Button 
                            disabled={size ? false : true} 
                            sx={{ 
                                margin: "20px 0 30px", 
                                color: 'appColors.textColor',
                                fontWeight: "bold",
                                fontSize: "20px",
                                letterSpacing: "1px",
                            }}
                        >ADD TO CART</Button>
                        <Box>
                            <Typography>More information:</Typography>
                            <List sx={{ listStyleType: 'disc', paddingLeft: "18px" }}>
                                <ListItem sx={{ display: 'list-item' }}>gender: {productInfo.sex === "M" ? "Male" : "Female"}</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>color: {productInfo.color}</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>type: {productInfo.type}</ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
};

export default ProductDetailsPage;