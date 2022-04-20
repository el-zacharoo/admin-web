import React, { createContext, useContext, useCallback, useMemo, useReducer } from 'react';

import cloneDeep from 'lodash.clonedeep';

const reducer = (state, action) => {
    const newState = cloneDeep(state);
    switch (action.type) {
        case 'init':
            newState.pending = true;
            newState.error = null;
            return newState;
        case 'query':
            newState.pending = false;
            let json = action.payload.json;
            const page = action.payload.page;
            if (page.offset > 0) {
                json.data = state.pages.data.concat(json.data);
            }
            newState.pages = json;
            newState.matches = json.matches;
            return newState;
        case 'get':
            newState.pending = false;
            newState.geolocation = action.payload;
            return newState;
        case 'error':
            console.error(action.error);
            newState.pending = false;
            newState.error = action.error.message;
            return newState;
        default:
            throw new Error('Unknown action type in entity reducer');
    }
};

const initialState = {
    pending: false,
    geolocations: {
        data: [],
        matches: 0
    },
    geolocation: {
        id: '',
        country: '',
        countryCode: '',
        ipAddress: '',
        platform: '',
        page: ''
    },
    error: null,
};

const Context = createContext(initialState);
export const Provider = (props) => {
    const { children } = props
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

const url = `${import.meta.env.VITE_BASE_URL}/geo`
const reqInit = {
    method: "GET",
    headers: {
        Accept: 'application/ json',
        'Content-Type': 'application/json',
    },
}

export const useApi = () => {
    const { state, dispatch } = useContext(Context);

    const queryGeo = async ({ set }) => {
        const resp = await fetch(url, reqInit);
        if (resp.ok) {
            const json = await resp.json();
            set(json);
        }
    };

    const fetchGeo = async ({ set }) => {
        const resp = await fetch(url, reqInit);
        if (resp.ok) {
            const json = await resp.json();
            set(json);
        }
    };

    const actions = useMemo(() => {
        return { queryGeo, fetchGeo }
    }, [queryGeo, fetchGeo]);

    return [state, actions];
}