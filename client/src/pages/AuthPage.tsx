import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const AuthPage = () => {
    const [ isSignUpFormActive, setIsSignUpFormActive ] = useState<boolean>(false);

    return(
        <Box>
            <Box>
                <Typography>{ isSignUpFormActive ? "SIGN UP" : "SIGN IN" }</Typography>
                { isSignUpFormActive ? <SignUpForm /> : <SignInForm /> }
                <Button onClick={() => setIsSignUpFormActive(currentState => !currentState)}>
                    { isSignUpFormActive ? "Do you already have an account?" : "You don't have an account yet?" }
                </Button>
            </Box>
        </Box>
    )
}

export default AuthPage;