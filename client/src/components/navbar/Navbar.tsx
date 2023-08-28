import { Box, Typography } from "@mui/material";
import FlexBetween from "../FlexBetween";
import AdminNavbar from "./AdminNavbar";
import StandardNavbar from "./StandardNavbar";

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
                        <StandardNavbar/>
                    ) : (
                        <AdminNavbar/>
                    )

                }
            </FlexBetween>
        </Box>
    )
};

export default Navbar;