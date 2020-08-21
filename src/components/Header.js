import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    let { body } = document;
    const [theme, setTheme] = useState(body.parentElement.dataset.theme);

    const themeToggle = () => {
        setTheme(
            body.parentElement.dataset.theme === 'light'
                ? body.parentElement.dataset.theme = 'dark'
                : body.parentElement.dataset.theme = 'light'
        )
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