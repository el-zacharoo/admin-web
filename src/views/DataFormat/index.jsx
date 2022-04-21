import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';

import { Time } from '@/components/Time';
import { useApi } from '@/components/Provider';

const pageSize = [10, 20, 30];
const now = new Date().toISOString();
const style = { backgroundColor: 'background.paper' };
const categories = [
    { name: 'IP Address', align: 'left' },
    { name: 'Device', align: 'left' },
    { name: 'Viewed', align: 'left' },
    { name: 'Page', align: 'right' },
    { name: 'Country', align: 'right' },
];

export const DataFormat = () => {
    const [page, setPage] = useState({ offset: 0, limit: pageSize[0] });
    const [{ geolocations }, { queryData }] = useApi();
    let row = geolocations.data;
    let limit = page.limit
    let offset = page.offset

    useEffect(() => {
        queryData(offset)
    }, [queryData, offset]);

    const handleChangeRowsPerPage = (e) => {
        setPage({ offset: 0, limit: +e.target.value });
    };
    const handleChangePage = (e, newPage) => {
        setPage({ offset: +newPage, limit: limit });
    };

    return (
        <TableContainer >
            <Table>
                <TableHead>
                    <TableRow>
                        {categories.map((item, i) =>
                            <TableCell sx={style} key={i} align={item.align}>{item.name}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody >
                    {row.slice(offset * limit, offset * limit + limit).map((item, i) =>
                        <TableRow sx={{ px: 1 }} key={i}>
                            <TableCell >
                                {item.ipAddress}
                            </TableCell>
                            <TableCell>{item.platform}</TableCell>
                            <TableCell>
                                {Time({ elapsed: Date.parse(now) - Date.parse(item.date) })}
                            </TableCell>
                            <TableCell align="right">
                                {item.page}
                            </TableCell>
                            <TableCell align="right">
                                {item.country}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={pageSize}
                sx={style}
                component="div"
                count={row.length}
                rowsPerPage={limit}
                page={offset}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer >
    )
}
export default DataFormat;