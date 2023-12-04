import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

type ProductPropsType = {
    product: {
        product_id: number,
        name: string,
        image: string,
        price: number,
        color: string,
        sex: string,
        type: string,
        discount_price: number | null,
    }
}

const ProductCard = ({product}: ProductPropsType) => {
    return(
        <Link to={`/products/${product.product_id}`} style={{ textDecoration: 'none' }}>
            <Box 
                sx={{ cursor: 'pointer', border: '1px solid lightgray', color: 'appColors.textColor' }}
            >
                <img style={{ width: '100%' }} src={`http://localhost:3005/images/${product.image}.jpg`} alt={`${product.name} picture`}/>
                <Typography sx={{ padding: '5px', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '2px' }}>{product.name}</Typography>
                <Box sx={{ display: 'flex' }}>
                    <Typography 
                        sx={{ padding: '5px', fontSize: '18px', textDecoration: product.discount_price ? 'line-through' : 'none' }}
                    >
                        {product.price}
                    </Typography>
                    { 
                        product.discount_price && 
                        <Typography sx={{ padding: '5px', fontSize: '18px', color: 'red' }}>
                            {product.discount_price}
                        </Typography>
                    }
                </Box>
            </Box>
        </Link>
    )
};

export default ProductCard;