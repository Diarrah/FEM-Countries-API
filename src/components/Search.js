import React, { useContext } from 'react';
import { CountriesContext } from '../contextHelpers/countryContext';

const Search = () => {
    const { searchTerm, setSearchTerm } = useContext(CountriesContext);

    return (
        <div className="search__input">
            <input 
                className="search__input--bar"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />    
            <i className="fa fa-search" aria-hidden="true" />
        </div>
    )
}

export default Search;