import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';

import { TablePager } from '@/components/TablePager';
import { Time } from '@/components/Time';
import { useApi } from '@/components/Provider';

const pageSize = 10;
const now = new Date().toISOString()
const style = { backgroundColor: 'background.paper' }
const categories = [
    { name: 'IP Address', align: 'left' },
    { name: 'Device', align: 'left' },
    { name: 'Viewed', align: 'left' },
    { name: 'Page', align: 'right' },
    { name: 'Country', align: 'right' },
]

export const DataFormat = () => {
    const [page, setPage] = useState({ offset: 0, limit: pageSize });
    const [{ geolocations }, { queryData }] = useApi();
    useEffect(() => {
        queryData(page)
    }, [queryData, page]);

    const handlePage = () => {
        setPage(prev => ({ ...prev, offset: prev.offset + pageSize }))
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
                    {geolocations.data.map((item, i) =>
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
                <TablePager colSpan={5} count={geolocations.data.length} total={geolocations.matches}
                    onPage={() => handlePage()}
                />
            </Table >
        </TableContainer >

    )
}
export default DataFormat;