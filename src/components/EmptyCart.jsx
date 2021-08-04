import React, { Component } from 'react';
import { ReactComponent as CarImage } from '../assets/car.svg';

import { EmptyCartContainer, Text } from './styles';

class EmptyCart extends Component {
  render() {
    return (
      <EmptyCartContainer>
        <CarImage alt="Imagem de carro" width="15rem" />
        <Text>Arraste seus carros preferidos aqui :)</Text>
      </EmptyCartContainer>
    );
  }
}

export default EmptyCart;
