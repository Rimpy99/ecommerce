import { Typography } from "@mui/material";

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

const Product = ({product}: ProductPropsType) => {
    return(
        <>
            <Typography>{product.name} {product.price}</Typography>
            <img src={`http://localhost:3005/images/${product.image}.jpg`} alt={`${product.name} picture`}/>
        </>
    )
};

export default Product;