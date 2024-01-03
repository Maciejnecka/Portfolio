import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
   --color-main-background: #1A1A20; 

   --font-main-gray: #A3A3A2;
   --font-main-white: #DADADA;
}

body{
   background-color: var(--color-main-background);
   color: var(--font-main-gray)
}
//TODO temp
p{
   color: var(--font-main-white);
}
//TODO temp

`;

export default GlobalStyles;
