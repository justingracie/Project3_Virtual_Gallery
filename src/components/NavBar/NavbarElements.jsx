import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #808080;
    background-image: url('https://images.unsplash.com/photo-1533158691535-6466cef7f713?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaW50JTIwY2FudmFzJTIwcGFzdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800');
    background-repeat: none;
    background-size: 100%;
    height: 80px;
    display: flex; 
    justify-content: space-between; 
    padding: 0.5rem calc((100vw-1000px) /2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: black; 
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: mono;
    font-size: 2 rem;

    &.active {
        color: #FFFFF0;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: black;

    @media screen and (max-width 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%)
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max width: 768px){
        display: none;
    }
`

