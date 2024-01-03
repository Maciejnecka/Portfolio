import styled from 'styled-components';
import { media } from '../../styled/mediaqueries';

export const StyledNavigation = styled.nav`
  .navigation__list {
    list-style: none;
    display: flex;
    padding: 0.5rem;
    font-size: 1rem;
  }
  .navigation__item {
    margin-left: 2rem;
  }

  .navigation__link {
    text-decoration: none;
    color: var(--font-main-white);
    transition: var(--transition);
    position: relative;

    &:hover {
      color: var(--main-color-blue);

      .navigation__index {
        color: var(--font-main-white);
      }

      &::before {
        width: 100%;
      }
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -10%;
      right: 0;
      width: 0;
      height: 2px;
      background-color: var(--main-color-blue);
      transition: width 0.5s ease-in-out;
    }
  }
  .navigation__index {
    color: var(--main-color-blue);
    transition: var(--transition);
  }

  &.open {
    display: flex;
    background-color: var(--color-navbar-background);
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
    background: rgba(39, 39, 38, 0.6);
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.3px);
    -webkit-backdrop-filter: blur(1.3px);

    .navigation__list {
      flex-direction: column;
    }
    .navigation__item {
      padding-top: 2rem;
      margin-left: 0;
      left: 0;
    }
  }

  ${media.small`
    display: none; 
  `}
`;

export const StyledMenuIcon = styled.div`
  z-index: 999;
  display: none;
  cursor: pointer;
  position: fixed;

  .icon {
    display: block;
    padding: 1rem;
    width: 2rem;
    height: 2rem;
    filter: invert(97%) sepia(0%) saturate(0%) hue-rotate(139deg)
      brightness(94%) contrast(88%);
    transition: var(--transition);
    &:hover {
      filter: invert(32%) sepia(65%) saturate(2047%) hue-rotate(157deg)
        brightness(91%) contrast(88%);
      transform: scale(1.1);
    }
  }

  .hidden {
    display: none;
  }

  ${media.small`
    display: block; 
  `}
`;
