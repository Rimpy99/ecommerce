import { useEffect, useState } from "react";

const HomePage = () => {

    // const [ products, setProducts ] = useState();
    const [ options, setOptions ] = useState();

    const getAllProductsFromDB = async () => {
        const fetchProducts = await fetch('')
    }

    useEffect(() => {
        getAllProductsFromDB()
    }, []);

    return(
        <>
        
        </>
    )
};

export default HomePage;