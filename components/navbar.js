import React from 'react';
import styled from 'styled-components';
import { useColorMode } from '../contexts/colorModeContext';
export default function Navbar() {
	const a = useColorMode();
	const { isDarkMode, toggleColorMode } = useColorMode();
	console.log('a', a, 'isDarkMode', isDarkMode);
	// console.log('isDardMode', { isDardMode });
	// console.log('toggleColorMode', { toggleColorMode });
	return (
		<NavbarWrapper>
			header
			<button onClick={toggleColorMode}>切換</button>
		</NavbarWrapper>
	);
}

const NavbarWrapper = styled.nav`
	width: 100%;
	height: 70px;
	background-color: var(--color-heading-black);
`;
