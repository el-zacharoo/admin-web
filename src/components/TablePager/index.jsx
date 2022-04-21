import React from 'react';

import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';

export const TablePager = ({ count, total, colSpan, onPage }) => {
    const hasMore = total > count;

    return (
        <>
            {count > 0 &&
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={colSpan} align="center" sx={{ borderBottom: 'none' }}>
                            {count} of {total || count}
                        </TableCell>
                    </TableRow>
                    {hasMore &&
                        <TableRow>
                            <TableCell colSpan={colSpan} align="center">
                                <Button color="secondary" variant="contained" onClick={onPage}>Load More</Button>
                            </TableCell>
                        </TableRow>
                    }
                </TableFooter>
            }
        </>
    );
}