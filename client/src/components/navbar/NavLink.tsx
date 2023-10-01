import { Box } from "@mui/material";
import { ReactNode } from "react";
import { commonNavlinkStyles } from '../../styles/commonNavlinkStyles';
import { Link } from "react-router-dom";

type NavLinkPropsTypes = {
    isPageCorrect: boolean,
    children: ReactNode,
    linkTo: string,
    isChildAnIcon: boolean,
}

const NavLink = ({isPageCorrect, children, linkTo, isChildAnIcon}: NavLinkPropsTypes) => {

    let textColor = 'white';
    let textColorActive = 'appColors.textColor'

    if(linkTo === '/onsale'){
        textColor = textColorActive = 'red';
    }

    return(
        <Link to={linkTo} style={{ textDecoration: 'none' }}>
            <Box
                sx={{
                    ...commonNavlinkStyles,
                    py: isChildAnIcon ? 0.7 : 1,
                    bgcolor: isPageCorrect ? 'appColors.buttonActiveBackground' : 'white',
                    color: isPageCorrect ? textColor : textColorActive,
                    "&:hover": {
                        bgcolor: isPageCorrect ? 'appColors.buttonActiveBackground' : 'appColors.buttonOnHoverBackground',
                    }
                }}
            >
                {children}
            </Box>
        </Link>
    )
};

export default NavLink;