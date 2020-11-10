import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    let htmlTag = document.body.parentElement;
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'light' ? 'light' : 'dark');

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

    return (
        <div className="header">
            <Link to="/">
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