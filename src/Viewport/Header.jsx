import React from 'react';

import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from '@mui/material';



export const Header = () => {
    const { user } = useAuth0()
    console.log(user)

    return (
        <AppBar elevation={0} color="primary" position="relative" sx={{ padding: 1 }}>
            <Toolbar variant='dense' sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <Link underline="none" sx={{ display: 'flex', '& svg': { fontSize: '2rem', mr: 1 }, alignItems: 'center', color: 'info.main' }} component={RouterLink} to="/">
                    <Typography variant="h4">{import.meta.env.VITE_APP_NAME}</Typography>
                </Link>
                <Button endIcon={<Avatar sx={{ width: 24, height: 24 }} src={user.picture} alt="Pic" />} color="info">{user.nickname}</Button>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Header;
