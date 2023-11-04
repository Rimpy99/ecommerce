import { useLocation } from "react-router-dom";
import ProductsPageContent from "./ProductsPageContent";

const ProductsPage = () => {
    const location = useLocation().pathname;

    return(
        <>
            <ProductsPageContent location={location}/>
        </>
    )
};

export default ProductsPage;