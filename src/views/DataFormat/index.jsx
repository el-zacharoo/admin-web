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
import { Paper } from '@mui/material';

const pageSize = 10;
const now = new Date().toISOString()
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
        <TableContainer sx={{ px: 1 }} component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        {categories.map((item, i) =>
                            <TableCell key={i} align={item.align}>{item.name}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {geolocations.data.map((item, i) =>
                        <TableRow key={i}>
                            <TableCell>
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