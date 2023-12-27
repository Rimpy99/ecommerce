import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { authFormFieldStyles } from '../styles/authFormFieldStyles';
import { authFormButtonStyles } from '../styles/authFormButtonStyles';
import { authFormErrorStyles } from '../styles/authFormErrorStyles';
import { Typography, Button, TextField, Box } from '@mui/material';

type SignUpFormProps = {
  setIsSignUpFormActive: Dispatch<SetStateAction<boolean>>,
}

const SignUpForm = ({setIsSignUpFormActive}: SignUpFormProps) => {

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>("");

  const createUser = async() => {
    try{
      const fetchUser = await fetch(`/auth/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password})
      });

      if(!fetchUser.ok){
        if(fetchUser.status == 400){
          let response = await fetchUser.json();
          setErrorMessage(response.msg);
        }else{
          setErrorMessage("Something went wrong. Try again later.")
        }
      }else{
        setIsSignUpFormActive(false);
      }
    }catch(err){
      setErrorMessage("Something went wrong. Try again later.")
    }
  }

  const handleFormSubmit = () => {
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setErrorMessage("");
    setIsFormSubmitted(true);

    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) setEmailError(true);

    if(password.length < 5) setPasswordError(true);

    if(password !== confirmPassword) setConfirmPasswordError(true);
  }

  useEffect(() => {
    if (isFormSubmitted && !emailError && !passwordError && !confirmPasswordError) createUser();
  }, [emailError, passwordError, confirmPasswordError, isFormSubmitted])

  return (
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
        <TextField
          label="Confirm Password"
          required
          variant='outlined'
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          sx={{ ...authFormFieldStyles }}
          error={confirmPasswordError}
        />
        {confirmPasswordError && <Typography sx={{ ...authFormErrorStyles }}>Passwords must match.</Typography>}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button sx={{ ...authFormButtonStyles }} onClick={() => handleFormSubmit()}>
            Sign up
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SignUpForm;