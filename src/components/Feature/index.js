import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  const navStyle ={
    color: "white"
};
  return (
    <FeatureContainer id="Feature">
      <h1>Pizzalar</h1>
      <p>Içindäkiler</p>
      <FeatureButton> <a href="tel:+99365555109" style={navStyle}>Jaň et!</a> </FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
