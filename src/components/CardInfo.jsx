import React, { Component } from 'react';

import { ContentSpan, ContentInfo } from './styles';
class CardInfo extends Component {
  render() {
    const { label, text } = this.props;
    return (
      <ContentInfo>
        <ContentSpan>{label}</ContentSpan>
        {label === 'Preço: ' ? `R$ ${text}` : text}
      </ContentInfo>
    );
  }
}

export default CardInfo;
