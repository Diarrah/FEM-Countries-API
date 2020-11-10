import React, { useState, useEffect, useContext } from 'react';
import { CountriesContext } from '../contextHelpers/countryContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { setSearchTerm, setFilterByRegion } = useContext(CountriesContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'light' ? 'light' : 'dark');
    const htmlTag = document.body.parentElement;

    useEffect(() => {
        if (!localStorage.getItem('theme')) {
            setTheme('light')
            localStorage.setItem('theme', 'light')
            htmlTag.setAttribute('data-theme', 'light')
        } else {
            htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
        }
    }, [])

    const themeToggle = () => {
        if (theme !== 'light') {
            localStorage.setItem('theme', 'light')
            htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
            setTheme('light')
        } else {
            localStorage.setItem('theme', 'dark')
            htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
            setTheme('dark')
        }
    }

    const resetSearch = () => {
        setFilterByRegion('')
        setSearchTerm('')
    }

    return (
        <div className="header">
            <Link to="/" onClick={() => resetSearch()}>
                <h1 className="header__heading">Where in the world?</h1>
            </Link>
            <button className="header__theme__toggle" onClick={() => themeToggle()}>
                <i className={theme === 'light' ? `far fa-moon` : `far fa-lightbulb`} aria-hidden="true" />
                <span className="header__theme__toggle--mode">{theme === 'light' ? `Dark` : `Light`} Mode</span>
            </button>
        </div>
    )
}

export default Header;