import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

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
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {geolocation.data && geolocation.data.map((item, i) =>
                        <TableRow key={i}>
                            <TableCell>
                                {item.id}
                            </TableCell>
                            <TableCell>
                                {item.ipAddress}
                            </TableCell>
                            <TableCell>
                                {item.country}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table >
        </TableContainer>

    )
}
export default DataFormat; 