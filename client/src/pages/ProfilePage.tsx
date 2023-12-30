import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";

const ProfilePage = () => {
    const userId = useAppSelector((state) => state.user.userId);

    const [userDetails, setUserDetails] = useState();
    const [ isError, setIsError ] = useState<boolean>(false);

    const getUserDetails = async () => {
        try{

        }catch(err){
            setIsError(true);
        }
    }

    useEffect(() => { 
        getUserDetails();
    }, [userId]);

    return(
        <>

        </>
    );
}

export default ProfilePage;