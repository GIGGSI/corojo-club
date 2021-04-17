import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import { menuData } from '../../data/menuData'
import { Button } from '../../components/Navbar/Button'
import { setColor } from '../../stlyes';

const DropdownContainer = styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#cd853f;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity:${({ isOpen }) => isOpen ? '1' : '0'};

top:${({ isOpen }) => isOpen ? '0' : '-100%'};

`

const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`

const CloseIcon = styled(FaTimes)`
color:#000d1a;
`

const DropdownWrapper = styled.div`

`

const DropdownMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(5,60px);
text-align:center;
margin-bottom:4rem;

@media screen and (max-width:480px) {
    grid-template-rows:repeat(5,40px);

}
`

const DropdownLink = styled(Link)`
display:flex;
color:${setColor.mainWhite};
justify-content:center;
align-items:center;
font-size:1.5rem;
text-decoration:none;
text-transform:uppercase;
list-style:none;
cursor:pointer;
transition:0.2s ease-out;

&:hover {
    color:${setColor.mainBlack}
}

`

const BtnWrap = styled.div`
display:flex;
justify-content:center;;
`



const Dropdown = ({ isOpen, toggle }) => {
    return <DropdownContainer
        isOpen={isOpen}
        onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {menuData.map((item) => {
                    return <DropdownLink to={item.link} key={item.id}>
                        {item.title}
                    </DropdownLink>
                })}
            </DropdownMenu>
            <BtnWrap>
                <Button primary="true" round="true" big="true" to="/contact">
                    Contact us
                </Button>
            </BtnWrap>
        </DropdownWrapper>
    </DropdownContainer>
}

export default Dropdown
