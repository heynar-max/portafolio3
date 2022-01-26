import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --negro: #111;
        --azul: #0a3cc5;
        --rojo: #fa0808;
        --verde: #33fb01;
    }
    *{
    margin: 0;
    padding: 0;
    /* box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem; */
    
}
`;
export default GlobalStyle