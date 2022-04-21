import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';

import { useApi, Provider } from '@/components/Provider';

export const DataFormat = () => {
    return (
        <Provider>
            <Data />
        </Provider>
    )
}

const pageSize = 12;

const Data = () => {
    const [page, setPage] = useState({ offset: 0, limit: pageSize });
    const [{ geolocations }, { queryGeo }] = useApi();
    useEffect(() => {
        queryGeo(page)
    }, [queryGeo, page]);

    const handlePage = () => {
        setPage(prev => ({ ...prev, offset: prev.offset + pageSize }))
    };

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
                {/* {geolocation.data.length} */}
            </Table >

        </TableContainer>

    )
}
export default DataFormat; 