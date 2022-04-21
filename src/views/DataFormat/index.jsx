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
    const [page, setPage] = useState({ offset: 0, limit: 10 });
    const [rowsPerPage, setRowsPerPage] = useState(pageSize[0]);
    const [{ geolocations }, { queryData }] = useApi();
    const row = geolocations.data;

    useEffect(() => {
        queryData(page.offset)
    }, [queryData, page]);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    };

    const handleChangePage = (e, newPage) => {
        setPage({ offset: +newPage });
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
                    {row.slice(page.offset * rowsPerPage, page.offset * rowsPerPage + rowsPerPage).map((item, i) =>
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
            </Table >
            <TablePagination
                rowsPerPageOptions={pageSize}
                sx={style}
                component="div"
                count={row.length}
                rowsPerPage={rowsPerPage}
                page={page.offset}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer >

    )
}
export default DataFormat;