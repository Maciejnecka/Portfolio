import React from 'react';
import StyledNavigation from './Navigation.styled';

function Navigation() {
  return (
    <StyledNavigation className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            <span className="navigation__index">01.</span>Home
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            <span className="navigation__index">02.</span>About
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            <span className="navigation__index">03.</span>Services
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            <span className="navigation__index">04.</span>Contact
          </a>
        </li>
      </ul>
    </StyledNavigation>
  );
}
export default Navigation;
