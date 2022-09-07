import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo, MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavImgLogo
    // NavBtn,
    // NavBtnLink
} from './NavbarElements';
import logo6x4 from '../../images/logo_big.png';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavImgLogo src={logo6x4} />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">
                                O nás
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="vyroba">
                                Výroba
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="gallery">
                                Galeria
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="prices">
                                Cenník
                            </NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to="services">
                                E-shop
                            </NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to='/signin'>Prihlasiť sa</NavBtnLink>
                    </NavBtn> */}

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar

