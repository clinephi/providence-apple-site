import React from 'react'
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavBarElements'

const activeNavLinkStyle = {
  color: '#15cdfc'
}

type Props = {
  style: React.CSSProperties
}

const NavBar = (props: Props) => {
    return ( 
      <>
        <Nav>
            <NavLink to="/">
              <img
                src={require('../../img/Pomology-Logo.gif')}
                alt='logo'
                height={100}
                width={140}/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink
                  to="/about"
                  style={({isActive}) => (isActive ? activeNavLinkStyle : {})}>
                  About
                </NavLink>
                <NavLink
                  to="/cultivation">
                  Cultivation
                </NavLink>
                <NavLink
                  to="/tree-availability"
                  >
                  Tree Availability
                </NavLink>
                <NavLink
                  to="/Products"
                  >
                  Products
                </NavLink>
                <NavLink
                  to="/nutrition"
                  >
                  Nutrition
                </NavLink>
            </NavMenu>
        </Nav>
      </>
    )
}

export default NavBar