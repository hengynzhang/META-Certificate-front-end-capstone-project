import React from 'react'
import logo from '../logos/Asset 20@4x.png'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    width: 100%;
    margin-top: 1rem;
    background-color: ${({theme}) => theme.colors.bodyColor};
`
const Img = styledComponents.img`
    width: 4vh;
    height: auto;
    margin-left: 1rem;
`
const Copyright = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    gap: 0.2rem;
`
const CopyrightIcon = styledComponents.span`
    font-family: 'Material Symbols Outlined';
    font-size: 1rem;
    font-weight: bold;
    color: ${({theme}) => theme.colors.lightBlack};
`
const P = styledComponents.p`   
    display: inline;
    font-family: ${({theme}) => theme.fonts.text};
    font-size: 1rem;
    font-weight: bold;
    color: ${({theme}) => theme.colors.lightBlack};
    margin: 0;
`
function Footer() {
    return (
        <Container>
            <Img src={logo} alt='little lemon logo'/>
            <Copyright>
                <CopyrightIcon>copyright</CopyrightIcon>
                <P>2024 Little Lemon</P>
            </Copyright>
        </Container>
    )
}

export default Footer
