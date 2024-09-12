import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    top: 1rem;
    left: 0;
    background-color: ${({theme}) => theme.colors.bodyColor};
    z-index: 1;    
    shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    width: 30%;
    padding: 0.5rem;
`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;
    padding: 0.2rem;
    margin: auto;
`
const Li = styled.li`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({theme}) => theme.colors.lightBlack};
    margin: 0;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: rgb(244, 206, 20);
        color: black;
    }
`
const Nav = React.forwardRef((props, ref) => {
    return (
        <Container ref={ref} style={{display: props.show? 'block' : 'none'}}>
            <Ul>
                <Li>Home</Li>
                <Li>Menu</Li>
                <Li>Reserve a table</Li>
                <Li>Contact</Li>
            </Ul>
        </Container>
    )
})

export default Nav
