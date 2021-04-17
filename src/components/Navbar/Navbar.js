import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../../data/menuData';
import { Button } from './Button'
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
height:60px;
display:flex;
justify-content:space-between;
padding: 1rem 2rem;
z-index:100;
position:fixed;
width:100%;

.active{
    background:red;
}


`
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

`

const MenuBars = styled(FaBars)`
display:none;

@media screen and (max-width:768px){
display:block;
color:white;
font-size:2.5rem;
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
margin-right:-48px;

@media screen and (max-width:768px) {
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
text-transform:uppercase;
`

const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;
@media screen and (max-width:768px) {
    display:none;
}
`


const Navbar = ({ toggle }) => {


    return <Nav className="active">
        <Logo to="/">Corojo Club</Logo>
        <MenuBars onClick={toggle} />
        <NavMenu >

            {menuData.slice(1, menuData.length).map((item) => {

                const { link, id, title, showMenu } = item
                return <NavMenuLinks to={link} key={id} >


                    {title}
                </NavMenuLinks>
            })}
        </NavMenu>
        <NavBtn>
            <Button to='/contact'
                primary='true'>
                Contact us
            </Button>
        </NavBtn>
    </Nav>
}

export default Navbar
