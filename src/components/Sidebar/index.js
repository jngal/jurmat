import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    // SideBtnWrap,
    // SidebarRoute,
    SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClik={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>O nás</SidebarLink>
                    <SidebarLink to="vyroba" onClick={toggle}>Výroba</SidebarLink>
                    <SidebarLink to="gallery" onClick={toggle}>Galeria</SidebarLink>
                    <SidebarLink to="prices" onClick={toggle}>Cenník</SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to="./">Sign up</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
