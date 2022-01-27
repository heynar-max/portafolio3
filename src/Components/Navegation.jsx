import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Separador from '../Style/Separador';
import Logo from '../image/logo.png'
import { Icon } from '../Style/Icon';




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
                    <NavLink to="/education" activeClassName="active-class" exact>education</NavLink>
                </li>
                <Separador/>
                <li className='nav-item'>
                    <NavLink to="/skills" activeClassName="active-class" exact>skill</NavLink>
                </li>
                <Separador/>
                <li className='nav-item'>
                    <NavLink to="/portafolio" activeClassName="active-class" exact>portafolio</NavLink>
                </li>
                <Separador/>
                <li className='nav-item'>
                    <NavLink to="/contact" activeClassName="active-class" exact>contact</NavLink>
                </li>

                
                <div className='iconos'>
                    <a href="https://www.linkedin.com/in/heynar-soto-holguin-bb7a43213/" target="_blank" rel="noreferrer" ><Icon className="fab fa-linkedin-in" /></a>
                    <a href='https://www.instagram.com/heynar_max/' target="_blank" rel="noreferrer"><Icon className="fab fa-instagram" /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Icon className="fab fa-facebook-f" /></a>

                </div>
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
    margin-top: -7rem;

    .logo{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom:5rem;
        img{
            width: 60%;
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
                    background-color: var(--fucsia)
                    width: 68%;
                }
                
                
                
            }
            
                li{
                    display: block;
                    text-align: left;

                    
                    a{
                        color: var(--negro);
                        display: block;
                        padding: .25rem 5rem;
                        position: relative;
                        z-index: 10;
                        font-size: .7rem;
                        text-transform: uppercase;
                        transition: all .4s ease-in-out;
                        font-weight: 600;
                        letter-spacing: 1px;
                        left: -30px;
                        
                            &::after{
                                content: '';
                                position: absolute;
                                top: 11px;
                                left: 70px;
                                width: 10px;
                                height: 1px;
                                background-color: var(--fucsia)

                            }

                            &::before{
                                content: "";
                                position: absolute;
                                top: 11px;
                                left: 70px;
                                width: 10px;
                                height: 1px;
                                transition: all 0.2s linear;
                                background-color: var(--fucsia)
                            }
                    }
                }
                            a:hover::before{
                            width: 60%;
                            height: 100%;
                            height: 1px;
                            
                            }
                            .iconos{
                                margin-top: 5rem;
                                display: flex;
                                justify-content: center;
                                
                                    i{
                                        color: var(--gris);
                                        width: 40px;
                                        line-height: 100px;
                                        text-align: center;
                                        font-size: 18px;
                                    }
                            }
            
        }
`;

export default Navegation
