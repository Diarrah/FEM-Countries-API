import React, { useContext } from 'react';
import { CountriesContext } from '../contextHelpers/countryContext';
import { Navigation, CountriesContainer, CountryLink, Spinner } from '../components';

const Home = () => {
    const { allCountries, loading, formatNumber } = useContext(CountriesContext);

    return (
        <>
        {loading && <Spinner />}
        <Navigation />
        <CountriesContainer>
            {allCountries.map(country => (
                <CountryLink
                    key={country.alpha3Code}
                    code={country.alpha3Code}
                    image={country.flag}
                    name={country.name}
                    pop={formatNumber(country.population)}
                    region={country.region}
                    capital={country.capital}
                />
            ))}
        </CountriesContainer>
        </>
    )
}

export default Home;