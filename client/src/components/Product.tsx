import { Typography } from "@mui/material";

type ProductPropsType = {
    product: {
        product_id: number,
        name: string,
        image: string,
        price: string,
        color: string,
        sex: string,
        type: string,
        discount_price: string,
    }
}

const Product = ({product}: ProductPropsType) => {
    return(
        <>
            <Typography>{product.name}</Typography>
        </>
    )
};

export default Product;