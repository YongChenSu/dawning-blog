import React from 'react';
import styled from 'styled-components';
import { useColorMode } from '../contexts/colorModeContext';

const Navbar = () => {
    const { isDarkMode, toggleColorMode } = useColorMode();
    return (
        <NavbarWrapper>
            header
            <button onClick={toggleColorMode}>切換</button>
        </NavbarWrapper>
    );
};

export default Navbar;

const NavbarWrapper = styled.nav`
	width: 100%;
	height: 70px;
	background-color: var(--color-heading-black);
`;
