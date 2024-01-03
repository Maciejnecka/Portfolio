import React from 'react';
import StyledHeader from './Header.styled';
import Navigation from './navigation/Navigation';

function Header() {
  return (
    <StyledHeader className="header">
      <Navigation />
    </StyledHeader>
  );
}
export default Header;
