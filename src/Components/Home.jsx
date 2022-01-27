import React from 'react'
import styled from 'styled-components'
import evan from '../image/heynarpor.jpg'

const Home = () => {
    return (
        <PortafolioStyle>
            <div className='container-1'>
            <div className='primera'>
                <img src={evan} alt=''/>
                    <div className='text'>
                        <h1>hello i´m</h1>
                        <h2>heynar Soto holguin</h2>
                        <h3>FRONTEND DEVELOPER</h3>

                    </div>
            </div>
            </div>
        </PortafolioStyle>
    )
}
const PortafolioStyle = styled.div`
    /* display: flex;
    align-items: center; */
    height: 100%;
    width: 100%;
    
            
    .primera{
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        height: 100%;
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
            
            

            
            
            h1{
            color: var(--blanco);
            text-transform: uppercase;
            margin-right: 50rem;
            font-size: 2rem;
            font-weight: 550;
        }
        h2{
            color: var(--blanco);
            text-transform: uppercase;
            margin-right: 50rem;
            font-size: 2.5rem;
            font-weight: 600;
            
        }
        h3{
            color: var(--fucsia);
            font-size: 1rem;
            width: 240px;
            height: 30px;
            background-color: var(--negro);
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 400;
            margin-top: 30px;
        }
        }
    }
`;

export default Home
