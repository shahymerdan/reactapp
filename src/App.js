import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Feature2 from './components/Feature2';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <GlobalStyle /> 
      <Hero  />
      <Products heading='Esasy Menu' data={productData} />
      <Feature />
      <Feature2/>
      <Products heading='Süýjülikler' data={productDataTwo} /> 
      <Footer/>
      
    
    </Router>
  );
}



export default App;