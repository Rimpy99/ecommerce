import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import FlexBetween from "../FlexBetween";
import AdminNavbar from "./AdminNavbar";
import StandardNavbar from "./StandardNavbar";
import ResponsiveStandardNavbar from "./ResponsiveStandardNavbar";

const Navbar = () => {
    const isAdmin = false;

    const [ windowSize, setWindowSize ] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                borderBottom: 2,
                borderColor: 'lightgray',
                position: 'sticky',
                top: 0,
                left: 0,
                bgcolor: 'white',
                zIndex: 1000,
            }}
        >
            <FlexBetween
                sx={{
                    // maxWidth: '1300px',
                    width: '1400px',
                    padding: '5px'
                }}
            >
                {
                    !isAdmin ? (
                        <>
                            {windowSize > 700 ? <StandardNavbar/> : <ResponsiveStandardNavbar/>}
                        </>
                    ) : (
                        <AdminNavbar/>
                    )

                }
            </FlexBetween>
        </Box>
    )
};

function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
};

export default Navbar;