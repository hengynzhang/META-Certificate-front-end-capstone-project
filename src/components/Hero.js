import React from 'react'
import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'
import restaurant from '../images/restaurant.jpg'


const Container = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 2fr;
    padding-left: 1rem;
    padding-right: 0.5rem;
    margin-top: 0.5rem;
    background-color: ${({theme}) => theme.colors.primaryGreen};
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: auto;
        position: relative;
        padding: 1rem;
        gap: 1rem;
    }
`
const H1 = styled.h1`
    grid-column: 1 / 5;
    height: 2rem;
    font-family: ${({theme}) => theme.fonts.heading};
    font-size: 2rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.primaryYellow};
    margin-top: 1rem;
    margin-bottom: 0;
    @media (min-width: 768px) {
        font-size: 3rem;
        margin: 1rem;
        max-width: 40vw;
    }
`
const H2 = styled.h2`
    grid-column: 1 / 4;
    height: 1.5rem;
    font-family: ${({theme}) => theme.fonts.heading};
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.primaryWhite};
    margin-top: 0;
    margin-bottom: 0;
    @media (min-width: 768px) {
        font-size: 2rem;
        margin: 1rem;
        max-width: 40vw;
    }
`
const P = styled.p`
    grid-column: 1 / 4;
    line-height: 1.3;
    font-size: 1rem;
    font-weight: 200;
    text-align: stretch;
    color: ${({theme}) => theme.colors.primaryWhite};
    margin: 0 0.5rem 0 0;
    @media (min-width: 768px) {
        font-size: 1.2rem;
        margin: 1rem;
        max-width: 40vw;
        wrap: true;
    }
`
const Img = styled.img`
    grid-column: 4 / 6;
    grid-row: 2 / 4;
    width: 30vw;
    height: 30vw;
    object-fit: cover;
    border-radius: 5%;
    background-color: ${({theme}) => theme.colors.primaryWhite};
    @media (min-width: 768px) {
        width: 40%;
        height: 70%;
        position: absolute;
        top: 20%;
        right: 5%;
    }
`
const Button = styled.button`
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    width: 10rem;
    height: 2.5rem;
    font-family: ${({theme}) => theme.fonts.text};
    font-size: 1.2rem;
    font-weight: 500;
    background-color: ${({theme}) => theme.colors.primaryYellow};
    border: none;
    border-radius: 10%;
    color: ${({theme}) => theme.colors.primaryBlack};
    cursor: pointer;
    margin-bottom: 0.5rem;
    &:hover {
        background-color: ${({theme}) => theme.colors.primaryWhite};
        color: ${({theme}) => theme.colors.primaryGreen};
    }
`
const Link = styled(RouterLink)`
    text-decoration: none;
    color: inherit;
`
function Hero() {
    return (
        <Container>
            <H1>Little Lemon</H1>
            <H2>Chicago</H2>
            <P>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</P>
            <Img src={restaurant} alt='restaurant interior'/>
            <Button>
                <Link to='/reserve'>Reserve a table</Link>
            </Button>
        </Container>
    )
}

export default Hero
