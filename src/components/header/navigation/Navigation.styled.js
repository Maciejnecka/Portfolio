import styled from 'styled-components';

const StyledNavigation = styled.nav`
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

    &:hover {
      color: var(--main-color-blue);
    }
  }
  .navigation__index {
    color: var(--main-color-blue);
  }
`;

export default StyledNavigation;
