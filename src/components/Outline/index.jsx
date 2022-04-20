import React from 'react';

import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import * as PropTypes from 'prop-types';

export const Outline = ({ visible }) => {
    if (!visible) {
        return <></>;
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4, mt: 10 }}>
            <Skeleton height="5rem" />
            <Skeleton variant="rect" height="20rem" />
            <Skeleton height="5rem" />
        </Container>
    );
};


Outline.propTypes = {
    visible: PropTypes.bool
};
