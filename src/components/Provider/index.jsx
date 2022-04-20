import React, { createContext, useContext, useCallback, useMemo, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {

    switch (action.type) {
        case 'init':
            state.pending = true;
            state.error = null;
            return state;
        case 'post':
            state.pending = false;
            state.geolocation = action.payload;
            state.geolocation.push(action.payload)
            state.geolocation.matches++;
            return state;
        case 'error':
            console.error(action.error);
            state.pending = false;
            state.error = action.error.message;
            return state;
        default:
            throw new Error('Unknown action type in entity reducer');
    }
};

const initialState = {
    pending: false,
    geolocation: {
        country: '',
        countryCode: '',
        ipAddress: '',
        platform: '',
        page: ''
    },
    error: null,
};

const Context = createContext(initialState);
export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export const useApi = () => {
    const { state, dispatch } = useContext(Context);

    const create = useCallback(async (geolocation) => {
        const reqInit = {
            method: "POST",
            headers: {
                Accept: 'application/ json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(geolocation)
        }
        const resp = await fetch(`${import.meta.env.VITE_BASE_URL}/geo`, reqInit);
        if (resp.ok) {
            dispatch({ type: 'post', payload: await resp.json() });
            console.log(state)
        } else {
            dispatch({ type: 'error', error: resp.Error, meta: { method: 'post' } });
        }

    }, [dispatch]);

    const getData = async ({ setIP }) => {
        const res = await axios.get(import.meta.env.VITE_API)
        if (navigator.brave) {
            null
        }
        setIP(res.data)

    }
    const actions = useMemo(() => {
        return { create, getData }
    }, [create, getData]);

    return [state, actions];
}