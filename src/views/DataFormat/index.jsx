import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';

import { useApi, Provider } from '@/components/Provider';

export const DataFormat = () => {
    return (
        <Provider>
            <Data />
        </Provider>
    )
}

const pageSize = 10;

const Data = () => {
    const [page, setPage] = useState({ offset: 0, limit: pageSize });
    const [{ geolocations }, { queryGeo }] = useApi();
    useEffect(() => {
        queryGeo(page)
    }, [queryGeo, page]);

    const handlePage = () => {
        setPage(prev => ({ ...prev, offset: prev.offset + pageSize }))
    };
    console.log(geolocations)
    return (
        <TableContainer>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>IP Address</TableCell>
                        <TableCell>Device</TableCell>
                        <TableCell align="right">Page</TableCell>
                        <TableCell align="right">Country</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {geolocations.data.map((item, i) =>
                        <TableRow key={i}>
                            <TableCell>
                                {item.ipAddress}
                            </TableCell>
                            <TableCell>{item.platform}</TableCell>
                            <TableCell align="right">
                                {item.page}
                            </TableCell>
                            <TableCell align="right">
                                {item.country}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                <TablePager colSpan={4} count={geolocations.data.length} total={geolocations.matches}
                    onPage={() => handlePage()}
                />
            </Table >
        </TableContainer>

    )
}
export default DataFormat;

const TablePager = ({ count, total, colSpan, onPage }) => {
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