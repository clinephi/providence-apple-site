import React from 'react'
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavBarElements'

const activeNavLinkStyle = {
  color: '#15cdfc'
}

type Props = {
  style: React.CSSProperties,
  toggle: () => void
}

const NavBar = (props: Props) => {
    const {toggle} = props
    return ( 
      <>
        <Nav>
            <NavLink to="https://www.plant.uoguelph.ca/treefruit">
              <img
                src={require('../../img/Pomology-Logo.gif')}
                alt='logo'
                height={100}
                width={140}/>
            </NavLink>
            <Bars onClick={toggle}/>
            <NavMenu>
                <NavLink
                  to="/">
                  Home
                </NavLink>
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
                <NavLink
                  to="/further-information"
                  >
                  Further information
                </NavLink>
            </NavMenu>
        </Nav>
      </>
    )
}

export default NavBar