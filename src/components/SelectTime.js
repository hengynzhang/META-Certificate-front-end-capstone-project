import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    margin: 1rem 0.5rem;
`
const TimeSelector = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
    border: none;
    background-color: transparent;
    padding: 0 0.5rem;
    margin: 0 0 1rem;
`
const Button = styled.button`
    border: 1px solid ${({theme}) => theme.colors.primaryGreen};
    border-radius: 5px;
    width: 17%;
    height: 1.5rem;
    font-size: 1rem;
    font-weight: normal;
    color: ${({ selected, theme }) => selected? 
        theme.colors.primaryWhite: 
        theme.colors.primaryGreen};
    cursor: pointer;
    background-color: ${({ selected, theme }) => selected? 
        theme.colors.primaryGreen : 
        'transparent'};
    &:hover, &:focus {
        background-color: ${({theme}) => theme.colors.primaryGreen};
        color: ${({theme}) => theme.colors.primaryWhite};
    }
`
function SelectTime({selectedTime, handleTimeSelect}) {
    const availableTime = [
        {
            time: '16:30',
            available: true
        },
        {
            time: '17:00',
            available: true
        },
        {
            time: '17:30',
            available: true
        },
        {
            time: '18:00',
            available: true
        },
        {
            time: '18:30',
            available: true
        },
        {
            time: '19:00',
            available: true
        },
        {
            time: '19:30',
            available: true
        },
        {
            time: '20:00',
            available: true
        },
        {
            time: '20:30',
            available: true
        },
        {
            time: '21:00',
            available: true
        }
    ]

    return (
        <Container>
            <H4>Select Time</H4>
            <TimeSelector>
                {availableTime.map(({time}) => {
                    return (
                        <Button 
                        key={time} 
                        selected = {time === selectedTime}
                        onClick={() => handleTimeSelect(time)}
                        >
                            {time}
                        </Button>
                        )
                })}
            </TimeSelector>
        </Container>
    )
}

export default SelectTime
