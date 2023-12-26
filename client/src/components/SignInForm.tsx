import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { authFormFieldStyles } from '../styles/authFormFieldStyles';
import { authFormButtonStyles } from '../styles/authFormButtonStyles';

const SignInForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return(
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                label="Email"
                required
                variant='outlined'
                type="email"
                value={email}
                sx={{ ...authFormFieldStyles }}
                />
                <TextField
                label="Password"
                required
                variant='outlined'
                type="password"
                value={password}
                sx={{ ...authFormFieldStyles }}
                />
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button sx={{ ...authFormButtonStyles }}>
                    Sign up
                </Button>
                </Box>
            </Box>
        </>
    )
}

export default SignInForm;