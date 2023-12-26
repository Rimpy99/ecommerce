import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { authFormFieldStyles } from '../styles/authFormFieldStyles';
import { authFormButtonStyles } from '../styles/authFormButtonStyles';
import { authFormErrorStyles } from '../styles/authFormErrorStyles';

const SignInForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    const handleFormSubmit = () => {
        if(email.length > 0 && password.length > 0) console.log('test')
    }

    return(
        <>
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
                {emailError && <Typography sx={{ ...authFormErrorStyles }}>Email address must be correct.</Typography>}
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
                {passwordError && <Typography sx={{ ...authFormErrorStyles }}>Password must be at least 5 characters long.</Typography>}
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button sx={{ ...authFormButtonStyles }} onClick={() => handleFormSubmit()}>
                    Sign in
                </Button>
                </Box>
            </Box>
        </>
    )
}

export default SignInForm;