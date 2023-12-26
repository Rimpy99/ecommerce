export const authFormFieldStyles = {
    '& .MuiOutlinedInput-root': {
        color: 'white', // Set the font color to white
        '& fieldset': {
            borderColor: 'white', // Set the border color to white
        },
        '&:hover fieldset': {
            borderColor: 'white', // Set the border color on hover to white
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white', // Set the border color when focused to white
        },
    },
    '& .MuiInputLabel-root': {
    color: 'white', // Set the label color to white
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
    color: 'white', // Set the label color when the input is focused to white
    },
    '& input::placeholder': {
    color: 'white', // Set the placeholder color to white
    },
    margin: "15px 0 5px 0",
}