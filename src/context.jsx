import { Children, createContext, useContext, useEffect } from 'react';
import UseFetch from './hooks/use-fetch';
import { getCurrentUser } from './db/apiAuth';

const UrlContext = createContext({});

const UrlProvider = () => {
    const { data: user, loading, fn: fetchUser } = UseFetch(getCurrentUser)

    const isAuthenticated = user?.role === "authenticated";

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <UrlContext.Provider value={{ user, fetchUser, loading, isAuthenticated }}>
            {Children}
        </UrlContext.Provider>
    )
}


// To avoid redundant code, Return this ready-made context function 
// to be imported anywhere it is needed

export const urlState = () => {
    return useContext(UrlContext);
};

export default UrlProvider