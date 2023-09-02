import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import FlexBetween from '../FlexBetween';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { commonNavlinkStyles } from '../../styles/commonNavlinkStyles';

const ResponsiveStandardNavbar = () => {

    const [ isMenuActive, setIsMenuActive ] = useState<boolean>(false);

    return(
        <>
            <FlexBetween
                sx={{
                    width: '100%',
                }}
            >
                <HomeIcon
                    sx={{
                        ...commonNavlinkStyles,
                    }}    
                />
                <MenuIcon
                    sx={{
                        ...commonNavlinkStyles,
                    }}
                    onClick={() => {
                        setIsMenuActive(currentState => !currentState)
                    }}
                />
            </FlexBetween>
            {  
                isMenuActive && 
                <Box
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        height: 'calc(100vh - 100%)',
                        display: 'flex',
                        justifyContent: 'center',
                        py: 1,
                    }}
                >
                    <Box>
                        <FlexBetween
                            sx={{
                                py: 1,
                                borderBottom: 2,
                                borderColor: 'lightgray',
                            }}
                        >
                            <PersonIcon
                                sx={{
                                    ...commonNavlinkStyles
                                }} 
                            />
                            <ShoppingCartIcon
                                sx={{
                                    ...commonNavlinkStyles
                                }} 
                            />
                        </FlexBetween>
                        <Box
                            sx={{
                                // bgcolor: 'lightgray',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                py: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    ...commonNavlinkStyles
                                }}
                            >MEN</Typography>
                            <Typography
                                sx={{
                                    ...commonNavlinkStyles
                                }}
                            >WOMEN</Typography>
                            <Typography
                                sx={{
                                    ...commonNavlinkStyles,
                                    color: 'red'
                                }}
                            >ON SALE</Typography>
                        </Box>
                    </Box>
                </Box>
            }
        </>
    );
}

export default ResponsiveStandardNavbar;