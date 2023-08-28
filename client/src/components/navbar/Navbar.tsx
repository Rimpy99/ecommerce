import { Box, Typography } from "@mui/material";
import FlexBetween from "../FlexBetween";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdminNavbar from "./AdminNavbar";

const commonNavlinkStyles = {
    color: '#23264f',
    fontWeight: 'bold',
    m: 1,
    py: 1,
    cursor: 'pointer',
    width: '5rem',
    // bgcolor: '#6d75e8',
    textAlign: 'center',
    borderRadius: 1,
    "&:hover": {
        bgcolor: '#ebebf7',
    },
}

const Navbar = () => {
    const isAdmin = false;

    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                borderBottom: 2,
                borderColor: 'lightgray',
            }}
        >
            <FlexBetween
                sx={{
                    position: 'sticky',
                    maxWidth: 'md',
                    width: '1300px',
                    padding: '5px',
                }}
            >
                {
                    !isAdmin ? (
                        <>
                            <FlexBetween>
                                <HomeIcon
                                    sx={{
                                        ...commonNavlinkStyles
                                    }}
                                />
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
                            </FlexBetween>
                            <FlexBetween>
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
                        </>
                    ) : (
                        <AdminNavbar/>
                    )

                }
            </FlexBetween>
        </Box>
    )
};

export default Navbar;