import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './components/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reserve from './components/Reserve';
import Cart from './components/Cart';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reserve' element={<Reserve />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
  ;
}

export default App;
