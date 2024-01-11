import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'    
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.aside`
    position: fixed;
    /* Bring the sidebar to the top if active */
    z-index: ${({ isOpen }) => (isOpen ? 999 : -999)}; 
    width: 100%;
    height: 100%;
    background: #854030;
    display: grid;
    align-items: center;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%') };
    top: 0;
`

export const CloseIcon = styled(FaTimes)`
    color: white;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SideBarWrapper = styled.div`
    color: #fff;
`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) { 
        grid-template-rows: repeat(6, 60px);
    }
`

export const SideBarLink = styled(Link)`
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

