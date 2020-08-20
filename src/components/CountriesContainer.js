import React, { useState, useEffect, useContext } from 'react';
import { CountriesContext } from '../contextHelpers/countryContext';

const CountriesContainer = ({ children }) => {
    const { searchTerm, filterByRegion } = useContext(CountriesContext);
    const [gridChildren, setGridChildren] = useState(null);
    let grid = document.querySelector('.main__grid');

    useEffect(() => {
        grid && setGridChildren(grid.children.length)
    }, [searchTerm, filterByRegion])

    return (
        <>
        <div className="main__grid">{children}</div>
        {gridChildren === 0 && (
            <p className="main__grid__error__msg">
                No country with the name <span>{searchTerm}</span> found in the <span>{filterByRegion ? `${filterByRegion}` : `All`}</span> region
            </p> 
        )}
        </>
    )
}

export default CountriesContainer;