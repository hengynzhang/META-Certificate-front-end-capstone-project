import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import Hero from './Hero'
import Dishes from './Dishes'
import Footer from './Footer';

const Container = styled.div`
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.colors.bodyColor};
  font-family: ${({theme}) => theme.fonts.text};
  `
function Home() {
    return (
        <Container>
            <Header />
            <Hero />
            <Dishes />
            <Footer />
        </Container>
    )
}

export default Home
