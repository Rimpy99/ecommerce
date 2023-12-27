import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import { authFormButtonStyles } from '../styles/authFormButtonStyles';

const AuthPage = () => {
    const [ isSignUpFormActive, setIsSignUpFormActive ] = useState<boolean>(false);

    return(
        <Box sx={{ height: "100vh", display: "flex", justifyContent: "center" }}>
            <Box sx={{ paddingTop: '80px' }}>
                <Box sx={{ backgroundColor: "appColors.textColor", padding: "40px", borderRadius: "5px", color: "white" }}>
                    <Typography sx={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", letterSpacing: "2px" }}>
                        { isSignUpFormActive ? "SIGN UP" : "SIGN IN" }
                    </Typography>
                    { isSignUpFormActive ? <SignUpForm setIsSignUpFormActive={setIsSignUpFormActive}/> : <SignInForm /> }
                    <Button 
                        onClick={() => setIsSignUpFormActive(currentState => !currentState)}
                        sx={{ ...authFormButtonStyles }}
                    >
                        { isSignUpFormActive ? "Do you already have an account?" : "You don't have an account yet?" }
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AuthPage;