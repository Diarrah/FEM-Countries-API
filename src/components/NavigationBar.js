import React from 'react';
import { Search, Filter } from '../components';

const NavigationBar = () => {
    return (
        <div className="navigation__bar">
            <Search />
            <Filter />
        </div>
    )
}

export default NavigationBar;