import React, { useEffect, useRef, useState } from 'react';
import { StyledNavigation, StyledMenuIcon } from './Navigation.styled';
import HamburgerIcon from '../../../icons/Hamburger.svg';
import CloseMark from '../../../icons/CloseMark.svg';

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigationRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleCloseMarkClick = (event) => {
    event.stopPropagation();
    closeNav();
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (isNavOpen && window.innerWidth > 600) {
        setIsNavOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target) &&
        isNavOpen &&
        !event.target.classList.contains('icon')
      ) {
        closeNav();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <>
      <StyledNavigation
        ref={navigationRef}
        className={`navigation ${isNavOpen ? 'open' : 'closed'}`}
      >
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
      <StyledMenuIcon
        className={`menu-icon ${windowWidth > 600 ? 'hidden' : ''}`}
        onClick={toggleNav}
      >
        <img
          className={`icon ${isNavOpen ? 'hidden' : ''}`}
          src={HamburgerIcon}
          alt="Hamburger Icon"
        />
        <img
          className={`icon ${isNavOpen ? '' : 'hidden'}`}
          src={CloseMark}
          alt="Close Mark"
          onClick={handleCloseMarkClick}
        />
      </StyledMenuIcon>
    </>
  );
}
export default Navigation;
