import React from 'react';

// components 
import Hero from './Hero';
import Navigation from './Navigation';

// styled-components

const Header = () => {
    return (
        <>
            <Navigation />
            <Hero />
        </>
    )
}

export default Header