import React from 'react'
import styled from 'styled-components'
import Logo from "assets/icons/image 2.png"
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <NavBar.Wrapper>
            <div className="logo">
            <img src={Logo} alt="tm30"/>
            </div>
            
            <div className="links">
                <Link to="">Home</Link>
                <Link to="">About</Link>
                <Link to="">Services</Link>
                <Link to="">Project</Link>
                <Link to="">Blog</Link>
                <Link to="">Contact</Link>
            </div>
        </NavBar.Wrapper>
    )
}

export default NavBar
NavBar.Wrapper = styled.nav`
display : flex;
justify-content : space-between;
align-items: center;
padding : 1.5rem 8rem;
background: #FCFEFF;
box-shadow: 0px 8px 16px rgba(64, 64, 64, 0.1);
.logo{
    width : 50%;
}
.links{
    width : 50%;
    display : flex;
    justify-content : space-between;
    a {
        text-decoration : none;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: #000D36;
    }
 
}

`