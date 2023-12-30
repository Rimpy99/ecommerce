import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { authFormFieldStyles } from '../styles/authFormFieldStyles';
import { authFormButtonStyles } from '../styles/authFormButtonStyles';
import { authFormErrorStyles } from '../styles/authFormErrorStyles';
import { useAppDispatch } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../redux/slices/userSlice';

const SignInForm = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState<string>("");

    const SignIn = async() => {
        try{
            const fetchUser = await fetch('/auth/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: email, password: password})
            });

            if(!fetchUser.ok){
                if(fetchUser.status == 404){
                    setEmailError(true);
                }else if(fetchUser.status == 401){
                    setPasswordError(true);
                }else{
                    setErrorMessage("Something went wrong. Try again later.");
                }
            }else{
                let response = await fetchUser.json();

                dispatch(
                    signIn(
                        {
                            userId: response.userInfo.userId,
                            userToken: response.token,
                            userEmail: response.userInfo.email,
                            userIsAdmin: response.userInfo.isAdmin,
                        }
                    )
                );

                navigate('/');
            }
        }catch(err){
            setErrorMessage("Something went wrong. Try again later.")
        }
    }

    const handleFormSubmit = () => {
        setEmailError(false);
        setPasswordError(false);
        if(email.length > 0 && password.length > 0) SignIn();
    }

    return(
        <>
            <Typography sx={{ textAlign: 'center', color: 'red' }}>{errorMessage}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                    label="Email"
                    required
                    variant='outlined'
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    sx={{ ...authFormFieldStyles }}
                    error={emailError}
                />
                {emailError && <Typography sx={{ ...authFormErrorStyles }}>Such an account does not exist</Typography>}
                <TextField
                    label="Password"
                    required
                    variant='outlined'
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    sx={{ ...authFormFieldStyles }}
                    error={passwordError}
                />
                {passwordError && <Typography sx={{ ...authFormErrorStyles }}>Password is incorrect</Typography>}
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button 
                    sx={{ ...authFormButtonStyles, color: (email.length > 0 && password.length > 0) ? "white" : "gray" }} 
                    onClick={() => (email.length > 0 && password.length > 0) && handleFormSubmit()}
                >
                    Sign in
                </Button>
                </Box>
            </Box>
        </>
    )
}

export default SignInForm;