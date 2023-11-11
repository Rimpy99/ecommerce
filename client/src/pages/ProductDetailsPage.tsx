import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const { productId } = useParams();

    return(
        <>
            {productId}
            test
        </>
    )
};

export default ProductDetailsPage;