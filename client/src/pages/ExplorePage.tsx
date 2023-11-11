import { useLocation } from "react-router-dom";
import ExplorePageContent from "./ExplorePageContent";

const ExplorePage = () => {
    const location = useLocation().pathname;

    return(
        <>
            <ExplorePageContent location={location}/>
        </>
    )
};

export default ExplorePage;