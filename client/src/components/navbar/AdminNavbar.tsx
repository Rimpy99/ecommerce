import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { commonNavlinkStyles } from '../../styles/commonNavlinkStyles';

const AdminNavbar = () => {

    return(
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                padding: '0 30px'
            }}
        >
            <HomeIcon 
                sx={{
                    ...commonNavlinkStyles,
                }}
            />
        </Box>
    )
};

export default AdminNavbar;