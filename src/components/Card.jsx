import React, { Component } from 'react';
import Icon from '../assets/add.svg';
import { Container, Header, Content, HeaderName, AddIcon } from './styles';

import CardInfo from './CardInfo';
class Card extends Component {
  handleDragStart = (event, id) => {
    event.dataTransfer.setData('DataID', id);
  };
  render() {
    const { id, nome, montadora, preco, tipo, isDisabled, handleClick } =
      this.props;
    const newCartItem = {
      id,
      nome,
      montadora,
      preco,
      tipo,
      isDisabled,
    };

    return (
      <Container
        isDisabled={isDisabled}
        onDragStart={(event) => this.handleDragStart(event, id)}
        draggable
        id="draggableCard"
      >
        <Header>
          <HeaderName>{nome}</HeaderName>
          <AddIcon
            src={Icon}
            alt="Add icon"
            onClick={() => handleClick(newCartItem)}
          />
        </Header>
        <Content>
          <CardInfo label="Montadora: " text={montadora} />
          <CardInfo
            label="Preço: "
            text={new Intl.NumberFormat('pt-BR', {
              maximumSignificantDigits: 3,
            }).format(preco)}
          />
          <CardInfo label="Tipo: " text={tipo} />
        </Content>
      </Container>
    );
  }
}

export default Card;
