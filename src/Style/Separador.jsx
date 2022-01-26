import React from 'react'
import styled from 'styled-components'

const Separador = () => {
    return (
        <SeparadorStiled>
            <hr className='separador'/>
        </SeparadorStiled>
    )
}
const SeparadorStiled = styled.div`

.separador{
    border-top: 1px solid #68676730;
    margin: 10px auto 20px !important;
    max-width: 60%;
    
} 
`;
export default Separador