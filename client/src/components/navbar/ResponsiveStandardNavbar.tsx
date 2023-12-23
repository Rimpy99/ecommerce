import { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import FlexBetween from '../FlexBetween';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { commonNavlinkStyles } from '../../styles/commonNavlinkStyles';
import { Link } from "react-router-dom";

const ResponsiveStandardNavbar = () => {

    const [ isMenuActive, setIsMenuActive ] = useState<boolean>(false);

    useEffect(() => {
        if(isMenuActive){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "auto"
        }
    }, [isMenuActive]);

    return(
        <>
            <FlexBetween
                sx={{
                    width: '100%',
                }}
            >
                <Link to={'/singin'} onClick={() => setIsMenuActive(false)}>
                    <HomeIcon
                        sx={{
                            ...commonNavlinkStyles,
                        }}    
                    />
                </Link>
                {
                    !isMenuActive 
                    ?
                        <MenuIcon
                            sx={{
                                ...commonNavlinkStyles,
                            }}
                            onClick={() => {
                                setIsMenuActive(true)
                            }}
                        />
                    :
                        <CloseIcon
                            sx={{
                                ...commonNavlinkStyles,
                            }}
                            onClick={() => {
                                setIsMenuActive(false)
                            }}
                        />
                }
            </FlexBetween>
            {  
                isMenuActive && 
                <Box
                    sx={{
                        position: 'absolute',
                        top: 'calc(100% + 2px)',
                        left: 0,
                        width: '100%',
                        height: 'calc(100vh - 100%)',
                        display: 'flex',
                        justifyContent: 'center',
                        py: 1,
                        bgColor: 'red',
                    }}
                    style={{ backgroundColor: 'white' }}
                >
                    <Box>
                        <FlexBetween
                            sx={{
                                py: 1,
                                borderBottom: 2,
                                borderColor: 'lightgray',
                            }}
                        >
                            <Link to={'/auth'} style={{ textDecoration: 'none' }} onClick={() => setIsMenuActive(false)}>
                                <PersonIcon sx={{ ...commonNavlinkStyles }} />
                            </Link>
                            <Link to={'/cart'} style={{ textDecoration: 'none' }} onClick={() => setIsMenuActive(false)}>
                                <ShoppingCartIcon sx={{ ...commonNavlinkStyles }} />
                            </Link>
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
                            <Link to={'/men'} style={{ textDecoration: 'none' }} onClick={() => setIsMenuActive(false)}>
                                <Typography sx={{ ...commonNavlinkStyles }}>MEN</Typography>
                            </Link>
                            <Link to={'/women'} style={{ textDecoration: 'none' }} onClick={() => setIsMenuActive(false)}>
                                <Typography sx={{ ...commonNavlinkStyles }}>WOMEN</Typography>
                            </Link>
                            <Link to={'/onsale'} style={{ textDecoration: 'none' }} onClick={() => setIsMenuActive(false)}>
                                <Typography sx={{ ...commonNavlinkStyles, color: 'red' }}>ON SALE</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            }
        </>
    );
}

export default ResponsiveStandardNavbar;