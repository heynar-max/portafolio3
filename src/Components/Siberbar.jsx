import React from 'react'
import styled from 'styled-components'
import Navegation from './Navegation';

const Siberbar = () => {
    return (
        <SiberbarStyle >
            <Navegation/>
        </SiberbarStyle>
        
    )
}
const SiberbarStyle = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    /* background: #bb992a; */
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
    }
`;
export default Siberbar
