import { Typography } from '@mui/material';
import FlexBetween from "../FlexBetween";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { commonNavlinkStyles } from '../../styles/commonNavlinkStyles';

const StandardNavbar = () => {

    return(
        <>
            <FlexBetween>
                <HomeIcon
                    sx={{
                        ...commonNavlinkStyles,
                    }}
                />
                <Typography
                    sx={{
                        ...commonNavlinkStyles,
                    }}
                >MEN</Typography>
                <Typography
                    sx={{
                        ...commonNavlinkStyles,
                    }}
                >WOMEN</Typography>
                <Typography
                    sx={{
                        ...commonNavlinkStyles,
                        color: 'red',
                    }}
                >ON SALE</Typography>
            </FlexBetween>
            <FlexBetween>
                <PersonIcon
                    sx={{
                        ...commonNavlinkStyles,
                    }}
                />
                <ShoppingCartIcon
                    sx={{
                        ...commonNavlinkStyles,
                    }}
                />
            </FlexBetween>
        </>
    )
};

export default StandardNavbar;