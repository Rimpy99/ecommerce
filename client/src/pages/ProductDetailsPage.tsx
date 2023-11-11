import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const { productId } = useParams();

    return(
        <>
            {productId}
        </>
    )
};

export default ProductDetailsPage;