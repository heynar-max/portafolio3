import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --negro: #111;
        --gris: #757575;
        --blanco: #ffffff;
        --fucsia: #ef106e;
    }
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    

/* font-family: 'Bakbak One', cursive; */
/* font-family: 'DM Serif Display', serif; */
/* font-family: 'Oswald', sans-serif; */
font-family: 'Raleway', sans-serif;
/* font-family: 'Yeseva One', cursive; */
    font-size: 1.1rem;
    
}
`;
export default GlobalStyle