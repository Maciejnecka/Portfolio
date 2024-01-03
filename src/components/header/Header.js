import React from 'react';
import StyledHeader from './Header.styled';
import Navigation from './navigation/Navigation';

function Header() {
  return (
    <>
      <StyledHeader className="header">
        <Navigation />
      </StyledHeader>
      <h1>
        HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
        HelloHelloHelloHello
        HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
        HelloHelloHelloHelloHelloHello
        HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
      </h1>
    </>
  );
}
export default Header;
