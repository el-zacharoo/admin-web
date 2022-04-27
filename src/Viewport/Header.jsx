import React, { useState } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
    const { user, logout } = useAuth0()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppBar elevation={0} color="primary" position="relative" sx={{ padding: 1 }}>
            <Toolbar variant='dense' sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <Link underline="none" sx={{ display: 'flex', '& svg': { fontSize: '2rem', mr: 1 }, alignItems: 'center', color: 'info.main' }} component={RouterLink} to="/">
                    <Typography variant="h4">{import.meta.env.VITE_APP_NAME}</Typography>
                </Link>
                <Button onClick={handleClick} endIcon={<Avatar sx={{ width: 24, height: 24 }} src={user.picture} alt="Pic" />} color="info">{user.nickname}</Button>
                <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleClose}  >
                    <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
                        <ListItemIcon><LogoutIcon color="primary" fontSize="small" /></ListItemIcon>
                        <Typography variant="button">Logout</Typography>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Header;
