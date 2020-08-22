import React, { useState, useEffect, createContext } from 'react';

export const CountriesContext = createContext();

const CountriesContextProvider = (props) => {
    const [allCountries, setAllCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterByRegion, setFilterByRegion] = useState('');

    useEffect(() => {
        getCountries('https://restcountries.eu/rest/v2/all')
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
                allCountries,
                loading,
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