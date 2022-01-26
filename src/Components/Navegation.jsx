import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Separador from '../Style/Separador';
import Logo from '../image/logo.png'

const Navegation = () => {
    return (
        <NavbarStyle>
            
            <ul className='navegar'>
            <div className='logo'>
                
                <NavLink to="/" activeClassName="active-class" exact><img src={Logo} alt=''/></NavLink>
            </div>
            
                <li className='nav-item'>
                    <NavLink to="/about" activeClassName="active-class" exact>about me </NavLink>
                </li>
                <Separador/>
                <li className='nav-item'>
                    <NavLink to="/skills" activeClassName="active-class" exact>skills</NavLink>
                </li>
                <Separador/>
                <li className='nav-item'>
                    <NavLink to="/education" activeClassName="active-class" exact>education</NavLink>
                </li>
                <Separador/>
                <li className='nav-item'>
                    <NavLink to="/portafolio" activeClassName="active-class" exact>portafolio</NavLink>
                </li>
                <Separador/>
                <li className='nav-item'>
                    <NavLink to="/contact" activeClassName="active-class" exact>contact</NavLink>
                </li>
            </ul>
        </NavbarStyle>
    )
}
const NavbarStyle = styled.div`

    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: row;
    margin-top: -12rem;

    .logo{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom:5rem;
        img{
            width: 50%;
        }
    }

        .navegar{
            width: 100%;
            text-align: center;
            

            
            .active-class{
                color: var(--negro);
                
                &::after{
                    height: 1px;
                    margin-left: 0%;
                    margin-right: 50%;
                    background: #ef106e;
                    width: 68%;
                }
                
                
                
            }
                li{
                    display: block;
                    text-align: center;

                    
                    a{
                        color: var(--negro);
                        display: block;
                        padding: .25rem 7rem;
                        position: relative;
                        z-index: 10;
                        font-size: .8rem;
                        text-transform: uppercase;
                        transition: all .4s ease-in-out;
                        font-weight: 550;
                        letter-spacing: 1px;
                        left: -30px;

                        

                            &::after{
                                content: '';
                                position: absolute;
                                top: 10px;
                                left: 80px;
                                width: 10px;
                                height: 1px;
                                background: #ef106e;

                            }

                            &::before{
                                content: "";
                                position: absolute;
                                top: 10px;
                                left: 80px;
                                width: 10px;
                                height: 1px;
                                transition: all 0.2s linear;
                                background: #ef106e;
                            }
                    }
                }
                            a:hover::before{
                            width: 60%;
                            height: 100%;
                            height: 1px;
                            
                            }
            
        }
`;

export default Navegation
