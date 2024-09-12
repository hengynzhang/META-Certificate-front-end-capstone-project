import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import Nav from './Nav'
import logo from '../logos/Asset 16@4x.png'

const Container = styled.header`
    width: 100%;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    margin: 0 auto;
    padding: 0.5rem;
    gap: 1rem;
    position: relative;
`
const Link = styled(RouterLink)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.primaryBlack};
`
const MenuButton = styled.span`
    font-family: 'Material Symbols Outlined';
    font-size: 2rem; 
    cursor: pointer;
    margin-left: 1rem;
`
const Logo = styled.img`
    width: 200px;
    height: auto;
    cursor: pointer;
`
const ShoppingCartButton = styled.span`
    font-family: 'Material Symbols Outlined';
    font-size: 2rem; 
    cursor: pointer;
    margin-right: 1rem;
`
function Header() {
    const [showNav, setShowNav] = useState(false)
    const navRef = useRef(null);
    const toggleNav = () => {
        setShowNav(!showNav)
        if (showNav) {
            navRef.current.style.display = 'none'
        } else {
            navRef.current.style.display = 'block'
        }
    }
    const handleClickOutside = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setShowNav(false)
            navRef.current.style.display = 'none'
        }
    }
    useEffect(() => {     
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
            <Container>
                <MenuButton onClick={toggleNav} aria-label="Toggle navigation">menu</MenuButton>
                <Nav ref={navRef} show={showNav}/>
                <Link to='/'>
                    <Logo src={logo} alt='little lemon logo' />
                </Link>
                <Link to='/cart'>
                    <ShoppingCartButton aria-label="View shopping cart">shopping_cart</ShoppingCartButton>
                </Link>
            </Container>
    )
}

export default Header
