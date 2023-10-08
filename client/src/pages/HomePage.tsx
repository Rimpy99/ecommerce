import { useLocation } from "react-router-dom";
import HomePageContent from "./HomePageContent";

const HomePage = () => {
    const location = useLocation().pathname;

    return(
        <>
            <HomePageContent location={location}/>
        </>
    )
};

export default HomePage;