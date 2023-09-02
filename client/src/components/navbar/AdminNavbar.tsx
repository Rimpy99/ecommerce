import { Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
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
            <PersonIcon 
                sx={{
                    ...commonNavlinkStyles,
                }}
            />
        </Box>
    )
};

export default AdminNavbar;