import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const Footer = () => {
    return (
        <Box component="footer"
            sx={{ backgroundColor: 'primary.main', display: "flex", justifyContent: "center", py: 5, px: 2, mt: 'auto' }}>
            <Copyright />
        </Box>
    );
}

export default Footer;

const Copyright = () => {
    return (
        <Typography variant="body2" color="info.main">
            {'Copyright © '}
            <Link underline="none" sx={{ color: "info.main" }} href="https://credibil.netlify.app/" >
                {import.meta.env.VITE_APP_NAME}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}