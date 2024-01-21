import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { signOut } from '../redux/slices/userSlice';
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const userEmail = useAppSelector((state) => state.user.userEmail);
    const dispatch = useAppDispatch()

    const navigate = useNavigate();

    // const [ isError, setIsError ] = useState<boolean>(false);

    // const getUserDetails = async () => {
    //     try{

    //     }catch(err){
    //         setIsError(true);
    //     }
    // }

    // useEffect(() => { 
    //     getUserDetails();
    // }, [userId]);

    const handleSignOut = () => {
        dispatch(signOut());
        navigate('/auth');
    }

    return(
        <>
            <Box 
                sx={{ 
                    display: 'flex', 
                    paddingTop: '100px', 
                    justifyContent: 'center'
                }}
            >
                <Box 
                    sx={{ 
                        width: {xs: '90%', md: '70%'}
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex', 
                            textAlign: 'center',
                            borderBottom: 2,
                            borderColor: 'lightgray',
                            paddingBottom: '5px',
                        }}
                    >
                        <Typography 
                            sx={{ 
                                fontSize: "20px", 
                                padding: '0 15px', 
                                color: 'appColors.textColor',
                            }}
                        >
                            {userEmail}
                        </Typography>
                        <Button
                            sx={{  
                                backgroundColor: 'appColors.buttonActiveBackground',
                                color: 'white',
                                fontWeight: "bold",
                                fontSize: "13px",
                                letterSpacing: "1px",
                                "&:hover": {
                                    bgcolor: 'appColors.buttonActiveBackground',
                                }
                            }}
                            onClick={() => handleSignOut()}
                        >
                            Sign out
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default ProfilePage;