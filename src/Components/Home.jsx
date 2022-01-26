import React from 'react'
import styled from 'styled-components'
import evan from '../image/evan.jpg'

const Home = () => {
    return (
        <PortafolioStyle>
            <div className='container-1'>
            <div className='primera'>
                <img src={evan} alt=''/>
                    <div className='text'>
                        <h1>hola</h1>
                    </div>
            </div>
            </div>
        </PortafolioStyle>
    )
}
const PortafolioStyle = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    
            
    .primera{
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        justify-content: space-around;
        /* justify-content: center;
        align-items: center;
        flex-direction: column;
        align-content: space-around;
        flex-wrap: nowrap; */
        img{
                width: 100%;
                height: 100%;
            }
        .text{
            position: absolute;
            text-align: center;
            
            h1{
            color: #9ffb09;
        }
        }
    }
`;

export default Home
