import React, {useState} from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import GuestNumber from './GuestNumber'
import SelectTime from './SelectTime'
import SelectDate from './SelectDate'
import ContactDetails from './ContactDetails'

const Container = styled.div`
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.bodyColor};
    font-family: ${({theme}) => theme.fonts.text};
`
const Heading = styled.div`
    width: 100%;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    margin: 0;
    padding: 0;
`
const Link = styled(RouterLink)`
    text-decoration: none;
    color: black;
    margin-left: 0;
`
const BackIcon = styled.span`
    font-family: 'Material Symbols Outlined';
    display: inline-block; 
    font-size: 2rem; 
    color: ${({theme}) => theme.colors.primaryGreen};
    cursor: pointer;
    margin-left: 1rem;
`
const H1 = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    font-family: ${({theme}) => theme.fonts.heading};
    color: ${({theme}) => theme.colors.primaryGreen};
    margin-right: 2rem;
`

function Reserve() {
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const handleTimeSelect = (time) => {
        setSelectedTime(time)
    };
    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };
    return (
        <Container>
            <Heading>
                <Link to='/'>
                    <BackIcon>chevron_left</BackIcon>
                </Link>
                <H1>Reserve a Table</H1>
            </Heading>
            <GuestNumber />
            <SelectTime selectedTime={selectedTime} handleTimeSelect={handleTimeSelect}/>
            <SelectDate selectedDate={selectedDate} handleDateSelect={handleDateSelect}/>
            <ContactDetails />
        </Container>
    )
}

export default Reserve
