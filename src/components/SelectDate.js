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
const DateSelector = styled.div`
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
const Date = styled.div`
    border: none;
    border-radius: 5px;
    width: 10%;
    color: ${({selected, theme}) => 
        selected? 
        theme.colors.primaryWhite:
        theme.colors.primaryGreen};
    cursor: pointer;
    background-color: ${({selected, theme}) => 
        selected? 
        theme.colors.primaryGreen:
        'transparent'};
    text-align: center;
    padding: 0.2rem;
    &:hover, &:focus {
        background-color: ${({theme}) => theme.colors.primaryGreen};
        color: ${({theme}) => theme.colors.primaryWhite};
    }
`
const P = styled.p`
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5rem;
    font-family: ${({theme}) => theme.fonts.text};
    margin: 0.2rem 0;
    padding: 0;
`

function SelectDate({selectedDate, handleDateSelect}) {
    const availableDate = [
        {
            day: 'Mon',
            date: '03'
        },
        {
            day: 'Tue',
            date: '04'
        },
        {
            day: 'Wed',
            date: '05'
        },
        {
            day: 'Thu',
            date: '06'
        },
        {
            day: 'Fri',
            date: '07'
        },
        {
            day: 'Sat',
            date: '08'
        },
        {
            day: 'Sun',
            date: '09'
        }
    ]
    return (
        <Container>
            <H4>Select Date</H4>
            <DateSelector>
                {availableDate.map(({day, date}) => {
                    return (
                        <Date 
                            role='button'
                            key={date}
                            onClick={() => handleDateSelect(date)}
                            selected={selectedDate === date}
                        >
                            <P>{day}</P> 
                            <P>{date}</P>
                        </Date>
                    )
                })}
            </DateSelector>
        </Container>
    )
}

export default SelectDate
