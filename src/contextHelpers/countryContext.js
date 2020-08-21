import React, { useState, useEffect, createContext } from 'react';

export const CountriesContext = createContext();

const CountriesContextProvider = (props) => {
    const API_BASE_URL = "https://restcountries.eu/rest/v2/";
    const [allCountries, setAllCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterByRegion, setFilterByRegion] = useState('');

    useEffect(() => {
        getCountries(`${API_BASE_URL}all`)
    }, [])

    const getCountries = async (allCountriesAPI) => {
        setLoading(true)
        try {
            let result = await (await fetch(allCountriesAPI)).json();
            setAllCountries([...result])
        } catch(error) {
            console.log(error)
        }
        setLoading(false)
    }

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
      
    return (
        <CountriesContext.Provider
            value={{
                API_BASE_URL,
                allCountries,
                setAllCountries,
                loading,
                setLoading,
                searchTerm,
                setSearchTerm,
                filterByRegion,
                setFilterByRegion,
                formatNumber,
            }}
        >
            {props.children}
        </CountriesContext.Provider>
    );
};

export default CountriesContextProvider;