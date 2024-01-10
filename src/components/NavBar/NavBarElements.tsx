import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
  background: #854030;
  /* background: #870d0dae; */
  height: 80px;
  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-start; //3rd nav style 
  padding: 0.5rem calc((100vw - 1400px) / 2);
  z-index: 10;
`
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 900px) {
    display: block; 
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px; // 1st nav style 
  /* margin-right: 24px; // 2nd nav style */
  width: 100vh; //3rd nav style
  white-space: nowrap; //3rd nav style
  font-weight: bold;
  /* text-transform: uppercase; */

  a:not(:last-child)::after{
    content:""; 
    border:1px solid #e2e2e2;
    border-width: 1px 1px 0 0;
    position:relative; 
    right:-15px; 
    top:0; 
    height:50%;
  }

  /* Make the navbar items disappear if they are shrunk too much */
  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* margin-left: 24px; //2nd nav */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;

  }
`