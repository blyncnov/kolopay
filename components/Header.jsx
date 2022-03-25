import React from 'react';

// components 
import Hero from './Hero';
import Navigation from './Navigation';

// styled-components
import { HeaderContainer } from "../styles/styled/Header"

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Navigation />
                <Hero />

            </HeaderContainer>
        </>
    )
}

export default Header;