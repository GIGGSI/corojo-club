import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'
import Dropdown from './Dropdown';
import logo from '../../images/logo.png'
import './Navbar.css'


const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding: 0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;

`
const Logo = styled(Link)`
${NavLink}
font-style:italic;
color:white;
img {
    max-width: 50%;
    height: auto;
}
`

const MenuBars = styled(FaBars)`
display:none;

@media screen and (max-width:768px){
display:block;
color:white;
font-size:2.5rem;
margin-top:1rem;
cursor:pointer;
position:absolute;
top:0;
right:0;
transform:translate(-50%,25%)
}
`;

const NavMenu = styled.div`
display:flex;
align-items:center;
/* margin-right:-48px; */



@media screen and (max-width:768px) {
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
text-transform:uppercase;
padding-bottom:10px;
/* margin:1rem 0; */
&:hover {
    border-bottom:1px solid white;
}

`

const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width:768px) {
    display:none;
}
`


const Navbar = ({ toggle, className }) => {
    const [dropdown, setDropdown] = React.useState(false);
    const [navbar, setNavbar] = React.useState(false);


    const onMouseEnter = () => {
        if (window.innerWidth < 760) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 760) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const changeBackground = () => {
        if (window.scrollY >= 530) {
            setNavbar(true)

        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return <nav className={navbar ? 'active' : 'null'}>
        {/* <Logo to="/">Corojo Club</Logo> */}
        <Logo to="/">
            <img src={logo} alt="Logo Corojo" />
        </Logo>

        <MenuBars onClick={toggle} />
        <NavMenu >

            <NavMenuLinks to='#' onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                Cigars
                {dropdown && <Dropdown />}
            </NavMenuLinks>
            <NavMenuLinks to='/coffe' >
                Coffe

            </NavMenuLinks>
            <NavMenuLinks to='/beer'>
                Beer

            </NavMenuLinks>
            <NavMenuLinks to='/events' >
                Events
            </NavMenuLinks>

        </NavMenu>
        {/* <NavBtn>
            <Button to='/contacts'
            >
                Contact us
            </Button>
        </NavBtn> */}
    </nav >
}

export default Navbar
