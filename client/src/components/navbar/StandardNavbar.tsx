import { Typography } from '@mui/material';
import FlexBetween from "../FlexBetween";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavLink from './NavLink';
import { commonNavlinkStyles } from '../../styles/commonNavlinkStyles';

type StandardNavbarPropsTypes = {
    location: string,
}

const StandardNavbar = ({location}: StandardNavbarPropsTypes) => {

    return(
        <>
            <FlexBetween>
                <NavLink isPageCorrect={location === '/' ? true : false} linkTo={'/'} isChildAnIcon={true}>
                    <HomeIcon/>
                </NavLink>
                <NavLink isPageCorrect={location === '/men' ? true : false} linkTo={'/men'} isChildAnIcon={false}>
                    <Typography sx={{ fontWeight: 'bold' }}>MEN</Typography>
                </NavLink>
                <NavLink isPageCorrect={location === '/women' ? true : false} linkTo={'/women'} isChildAnIcon={false}>
                    <Typography sx={{ fontWeight: 'bold' }}>WOMEN</Typography>
                </NavLink>
                <NavLink isPageCorrect={location === '/onsale' ? true : false} linkTo={'/onsale'} isChildAnIcon={false}>
                    <Typography sx={{ fontWeight: 'bold' }}>ON SALE</Typography>
                </NavLink>
            </FlexBetween>
            <FlexBetween>
                <NavLink isPageCorrect={location === '/auth' ? true : false} linkTo={'/auth'} isChildAnIcon={true}>
                    <PersonIcon/>
                </NavLink>
                <NavLink isPageCorrect={location === '/cart' ? true : false} linkTo={'/cart'} isChildAnIcon={true}>
                    <ShoppingCartIcon/>
                </NavLink>
            </FlexBetween>
        </>
    )
};

export default StandardNavbar;