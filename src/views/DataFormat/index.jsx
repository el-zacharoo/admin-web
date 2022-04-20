import React, { useEffect, useState } from 'react';

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
        <>
            {geolocation.data && geolocation.data.map((item, i) =>
                <p key={i}>{item.id} / {item.ipAddress} / {item.country}</p>
            )}
        </>
    )
}
export default DataFormat; 