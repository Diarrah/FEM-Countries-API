import React, { useContext } from 'react';
import { CountriesContext } from '../contextHelpers/countryContext';
import { Spinner } from '../components';
import { Link } from 'react-router-dom';

const Country = ({ match }) => {
    const { allCountries, loading, formatNumber } = useContext(CountriesContext);
    
    const country = allCountries.find(
        (country) => country.alpha3Code === match.params.countryCode
    );

    const countryBorderFullName = (border) => {
        const borderCountry = [...allCountries].filter(({ alpha3Code }) => alpha3Code === border);
        return (
          <Link to={`/country/${borderCountry[0].alpha3Code}`}>
            {borderCountry[0].name}
          </Link>
        );
      };


    return (
        <>
        {loading && <Spinner />}
        {country && (
            <div className="country__page">
                <div className="country__page__image__container">
                    <img className="country__page__image" src={country.flag} alt={`${country.name}'s national flag`} />
                </div>
                <div className="country__page__textbox">
                    <h1 className="country__page__textbox--title">{country.name}</h1>
                    <div className="country__page__textbox__metadata">
                        <ul className="country__page__textbox__metadata--list-1">
                            <li className="country__page__textbox__metadata--name">
                                Native Name: {" "} <span>{country.nativeName}</span>
                            </li>
                            <li className="country__page__textbox__metadata--population">
                                Population: {" "} <span>{formatNumber(country.population)}</span>
                            </li>
                            <li className="country__page__textbox__metadata--region">
                                Region: {" "} <span>{country.region}</span>
                            </li>
                            <li className="country__page__textbox__metadata--subregion">
                                Sub Region: {" "} <span>{country.subregion}</span>
                            </li>
                            <li className="country__page__textbox__metadata--capital">
                                Capital: {" "} <span>{country.capital}</span>
                            </li>
                        </ul>
                        <ul className="country__page__textbox__metadata--list-2">
                            <li className="country__page__textbox__metadata--domain">
                                Top Level Domain: {" "} <span>{country.topLevelDomain}</span>
                            </li>
                            <li className="country__page__textbox__metadata--currency">
                                Currencies: {" "} 
                                {country.currencies
                                    .filter(({name}) => name !== null)
                                    .map(({name, symbol, code}) => (
                                        <span key={name}>
                                            <span className="country__page__textbox__metadata--currency-symbol">{symbol && `${symbol} `}</span>
                                            <span className="country__page__textbox__metadata--currency-name">{name}</span>
                                            <span className="country__page__textbox__metadata--currency-code">{code && ` (${code}) `}</span>
                                        </span>  
                                ))}
                            </li>
                            <li className="country__page__textbox__metadata--languages">
                                Languages: {" "} 
                                {country.languages.map(({name}) => (
                                    <span key={name}>
                                        <span className="country__page__textbox__metadata--languages-lang">{name}</span>
                                    </span>
                                ))}
                            </li>
                        </ul>
                    </div>
                    <div className="country__page__textbox__borders">
                    <ul className="country__page__textbox__borders--list">
                        Borders: {" "}
                        <span>
                            {country.borders.map(border => (
                                <li className="country__page__textbox__border" key={border}>
                                    {countryBorderFullName(border)}
                                </li>
                            ))} 
                        </span>
                    </ul>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Country;