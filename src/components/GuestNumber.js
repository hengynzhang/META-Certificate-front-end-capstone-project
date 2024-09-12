import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0.5rem 0 0;
    padding: 0;
    border: 1px solid ${({theme}) => theme.colors.primaryGreen};  
    border-radius: 10px;
`
const H4 = styled.h4`
    font-size: 1.2rem;
    font-weight: bold;
    font-family: ${({theme}) => theme.fonts.text};
    margin-left: 0.5rem;
`
const NumberSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    background-color: ${({theme}) => theme.colors.primaryGreen};
    border-radius: 5px;
    padding: 0 0.5rem;
    margin-right: 0.5rem;
    color: ${({theme}) => theme.colors.primaryWhite};
`   

const Button = styled.button`
    border: 2px solid ${({theme}) => theme.colors.primaryWhite};
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${({theme}) => theme.colors.primaryWhite};
    cursor: pointer;
    background-color: transparent;
`
const P = styled.p`
    font-size: 1rem;
    font-weight: bold;
    font-family: ${({theme}) => theme.fonts.text};
`

function GuestNumber() {
    const [guestNumber, setGuestNumber] = useState(1)
    const handleDecrement = () => {
        if (guestNumber === 1) {
            return
        }
        setGuestNumber((prevN) => prevN - 1)
    }
    const handleIncrement = () => {
        if (guestNumber === 10) {
            return
        }
        setGuestNumber((prevN) => prevN + 1)
    }

    return (
        <Container>
            <H4>Guests (1-10)</H4>
            <NumberSection>
                <Button onClick={handleDecrement}>-</Button>
                <P>{guestNumber}</P>
                <Button onClick={handleIncrement}>+</Button>
            </NumberSection>
        </Container>
    )
}

export default GuestNumber
