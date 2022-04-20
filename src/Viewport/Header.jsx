import React from 'react';

import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';



export const Header = () => {


    return (
        <AppBar elevation={0} color="primary" position="relative" sx={{ padding: 1 }}>
            <Toolbar variant='dense' sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <Link underline="none" sx={{ display: 'flex', '& svg': { fontSize: '2rem', mr: 1 }, alignItems: 'center', color: 'info.main' }} component={RouterLink} to="/">
                    <Typography variant="h4">{import.meta.env.VITE_APP_NAME}</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Header;
