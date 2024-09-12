import React from 'react'
import styledComponents from 'styled-components'
import greekSalad from '../images/greek-salad.jpg'
import bruschetta from '../images/bruschetta.jpg'
import grilledFish from '../images/grilled-fish.jpg'
import lemonChicken from '../images/lemon-chicken.jpg'
import lemonDessert from '../images/lemon-dessert.jpg'

const Container = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.primaryWhite};
    font-family: ${({theme}) => theme.fonts.text};
`
const H3 = styledComponents.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
`
const DeliveryUl = styledComponents.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    gap: 0.2rem;
`
const DeliveryLi = styledComponents.li`
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    background-color: ${({theme}) => theme.colors.bodyColor};
    color: ${({theme}) => theme.colors.lightBlack};
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: ${({theme}) => theme.colors.primaryYellow};
    }
`
const Card = styledComponents.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    align-items: center;
    border-top: 2px solid ${({theme}) => theme.colors.lightBlack};
    cursor: pointer;
    margin: 0;
    padding: 0.5rem;
    &:hover {
        background-color: ${({theme}) => theme.colors.primaryYellow};
    }
`
const H4 = styledComponents.h4`
    grid-column: 1 / 5;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    padding-top: 0.3rem;
`
const Description = styledComponents.p`
    grid-column: 1 / 5;
    font-size: 1rem;
    line-height: 1.2;
    font-weight: 400;
    margin: 0;
`
const Price = styledComponents.p`
    grid-column: 1 / 5;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({theme}) => theme.colors.primaryGreen};
    margin: 0;
`
const Img = styledComponents.img`
    grid-column: 5 / 6;
    grid-row: 1 / 4;
    width: 20vw;
    height: 20vw;
    object-fit: cover;
    margin-left: 1rem;
    padding: 0;
`
function Menu() {
    const featuredDishes = [
        {
            name: 'Greek Salad', 
            description: 'Enjoy our renowned Greek salad, featuring crisp lettuce, juicy tomatoes, crunchy cucumbers, briny olives, and creamy feta cheese, all tossed in a zesty lemon and olive oil dressing.',
            price: '$6.99',
            src: greekSalad
        },
        {
            name: 'Bruschetta',
            description: 'Our delectable homemade bruschetta features ripe tomatoes, garlic, fresh basil, and extra virgin olive oil, all served atop perfectly toasted ciabatta bread for a delightful, savory bite.',
            price: '$9.99',
            src: bruschetta
        },
        {
            name: 'Grilled Fish',
            description: 'A fresh fillet of grilled fish, perfectly seasoned with zesty lemon and aromatic herbs, served alongside flavorful roasted vegetables for a balanced meal.',
            price: '$13.99',
            src: grilledFish
        },
        {
            name: 'Lemon Chicken',
            description: 'A deliciously tender and moist chicken breast, marinated in a blend of zesty lemon and fragrant herbs, served with crispy, golden roasted potatoes for a satisfying meal.',
            price: '$12.99',
            src: lemonChicken
        },
        {
            name: 'Lemon Dessert',
            description: 'A light, airy lemon mousse, paired with a tangy lemon sauce and topped with fresh, juicy berries, creating a delightful balance of sweetness and citrus zest.',
            price: '$5.99',
            src: lemonDessert
        }
    ]

    return (
        <Container>
            <H3>Order for Delivery</H3>
            <DeliveryUl>
                <DeliveryLi>Lunch</DeliveryLi>
                <DeliveryLi>Mains</DeliveryLi>
                <DeliveryLi>Desserts</DeliveryLi>
                <DeliveryLi>Specials</DeliveryLi>
            </DeliveryUl>
            {featuredDishes.map((dish) => 
            <Card key={dish.name}>
                <H4>{dish.name}</H4>
                <Description>{dish.description}</Description>
                <Price>{dish.price}</Price>
                <Img src={dish.src} alt={dish.name}/>
            </Card>)}
            </Container>
    )
}

export default Menu
