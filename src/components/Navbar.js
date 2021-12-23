import React from "react";
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import Bars from '../images/logo.svg';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav `
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #c31432;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

const NavLink = css `
    color:#fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-family: 'Caveat', sans-serif; font-size: 24px; 
    `;

const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor-pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
    font-family: "Architects Daughter"; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px;
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }

    .buttons { border-radius: 12px;
        margin-top: 6px;
        padding: 5px 2px 5px 1px;
        border: 1px;
        color: black;
        font-family: "Architects Daughter";
        font-size: 14px;
        background-color: green;
        transition: 0.3s ease-out;

        &:hover {
         color: white; 
         background-color: black;
        }
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo className="letter" to="/">MyAgency</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item,index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>   
            <NavBtn>
                <Button to='/contact' className="buttons" primary='true'>Contact Us</Button>
            </NavBtn>         
        </Nav>
    );
};

export default Navbar;
