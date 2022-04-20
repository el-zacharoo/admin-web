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

const Data = () => {
    const [geolocation, setGeolocation] = useState([]);
    const [, { queryGeo }] = useApi();
    useEffect(() => {
        queryGeo({ set: setGeolocation })

    }, []);

    return (
        <TableContainer>
            {geolocation.data &&
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>IP Address</TableCell>
                            <TableCell align="right">Page</TableCell>
                            <TableCell align="right">Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {geolocation.data.map((item, i) =>
                            <TableRow key={i}>
                                <TableCell>
                                    {item.ipAddress}
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
                    {geolocation.data.length}
                </Table >
            }
        </TableContainer>

    )
}
export default DataFormat; 