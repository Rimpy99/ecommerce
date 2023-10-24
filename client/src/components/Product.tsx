import { Typography, Box } from "@mui/material";

type ProductPropsType = {
    product: {
        product_id: number,
        name: string,
        image: string,
        price: number,
        color: string,
        sex: string,
        type: string,
        discount_percent: number | null,
    }
}

const Product = ({product}: ProductPropsType) => {
    return(
        <Box sx={{ cursor: 'pointer', border: '1px solid lightgray', color: 'appColors.textColor' }}>
            <img style={{ width: '100%' }} src={`http://localhost:3005/images/${product.image}.jpg`} alt={`${product.name} picture`}/>
            <Typography sx={{ padding: '5px', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '2px' }}>{product.name}</Typography>
            <Box sx={{ display: 'flex' }}>
                <Typography 
                    sx={{ padding: '5px', fontSize: '18px', textDecoration: product.discount_percent ? 'line-through' : 'none' }}
                >
                    {product.price}
                </Typography>
                { 
                    product.discount_percent && <Typography sx={{ padding: '5px', fontSize: '18px', color: 'red' }}>{product.price - (product.price * product.discount_percent / 100)}</Typography>
                }
            </Box>
        </Box>
    )
};

export default Product;