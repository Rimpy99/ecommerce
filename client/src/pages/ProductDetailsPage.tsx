import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const { productId } = useParams();

    return(
        <>
            {productId}
            test2
        </>
    )
};

export default ProductDetailsPage;