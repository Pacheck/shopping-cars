import React, { Component } from 'react';
import * as Styled from './styles';
import RemoveImage from '../assets/remove.svg';

import Card from '../components/Card';
import CardInfo from '../components/CardInfo';
import EmptyCart from '../components/EmptyCart';

const AccessToStateModel = '@stored-state-model';
class HomePage extends Component {
  state = {
    allCars: [
      {
        id: 1,
        nome: 'Jetta',
        montadora: 'Volkswagen',
        preco: 144000,
        tipo: 'Sedan',
        isDisabled: false,
      },
      {
        id: 2,
        nome: 'Polo',
        montadora: 'Volkswagen',
        preco: 70000,
        tipo: 'Hatch',
        isDisabled: false,
      },
      {
        id: 3,
        nome: 'T-Cross',
        montadora: 'Volkswagen',
        preco: 123000,
        tipo: 'SUV',
        isDisabled: false,
      },
      {
        id: 4,
        nome: 'Tiguan R-line',
        montadora: 'Volkswagen',
        preco: 146000,
        tipo: 'SUV',
        isDisabled: false,
      },
      {
        id: 5,
        nome: 'Civic',
        montadora: 'Honda',
        preco: 115000,
        tipo: 'Sedan',
        isDisabled: false,
      },
      {
        id: 6,
        nome: 'Corolla',
        montadora: 'Toyota',
        preco: 110000,
        tipo: 'Sedan',
        isDisabled: false,
      },
      {
        id: 7,
        nome: 'Corolla Cross',
        montadora: 'Toyota',
        preco: 184000,
        tipo: 'SUV',
        isDisabled: false,
      },
      {
        id: 8,
        nome: 'Compass',
        montadora: 'Jeep',
        preco: 132000,
        tipo: 'SUV',
        isDisabled: false,
      },
      {
        id: 9,
        nome: 'Golf GTI',
        montadora: 'Volkswagen',
        preco: 138000,
        tipo: 'Hatch',
        isDisabled: false,
      },
    ],
    carsInCart: [],
    total: 0.0,
  };

  handleAllowDrop = (event) => {
    event.preventDefault();
  };
  handleDropEvent = (event) => {
    event.preventDefault();
    const transferedId = event.dataTransfer.getData('DataID');
    console.log(transferedId);

    const itemToTransfer = this.state.allCars.find(
      (car) => car.id === Number(transferedId)
    );
    this.handleAddItemToCart(itemToTransfer);
  };
  handleCardsRender = () => {
    return this.state.carsInCart.length === 0 ? (
      <EmptyCart />
    ) : (
      this.state.carsInCart.map((car) => (
        <Styled.CartCard key={car.nome}>
          <Styled.CartCardHeader>
            <Styled.HeaderName>{car.nome}</Styled.HeaderName>
            <Styled.HeaderAction>
              <Styled.RemoveCartItem
                src={RemoveImage}
                alt="Remover"
                onClick={() => this.handleRemoveItemFromCart(car.id)}
                draggable={false}
              />
            </Styled.HeaderAction>
          </Styled.CartCardHeader>
          <Styled.CartCardContent>
            <CardInfo label="Tipo: " text={car.nome} />
            <CardInfo
              label="Preço: "
              text={new Intl.NumberFormat('pt-BR', {
                maximumSignificantDigits: 3,
              }).format(car.preco)}
            />
          </Styled.CartCardContent>
        </Styled.CartCard>
      ))
    );
  };

  handleAddItemToCart = (newCartItem) => {
    const updatedCars = this.state.allCars.map((car) => {
      if (car.id === newCartItem.id) {
        return { ...newCartItem, isDisabled: !newCartItem.isDisabled };
      }
      return car;
    });
    const newCarsInCart = [...this.state.carsInCart, newCartItem];
    const newTotal = this.state.total + newCartItem.preco;

    const stateModelToStore = {
      AllCars: updatedCars,
      CartItems: newCarsInCart,
      total: newTotal,
    };

    localStorage.setItem(AccessToStateModel, JSON.stringify(stateModelToStore));

    this.setState({
      allCars: updatedCars,
      carsInCart: newCarsInCart,
      total: this.state.total + newCartItem.preco,
    });
  };

  handleRemoveItemFromCart = (carId) => {
    const CartItem = this.state.carsInCart.find((car) => car.id === carId);

    const newCartItems = this.state.carsInCart.filter(
      (car) => car.id !== carId
    );
    const newCarsArray = this.state.allCars.map((car) => {
      if (car.id === carId) {
        return { ...car, isDisabled: !car.isDisabled };
      }
      return car;
    });

    const stateModelToStore = {
      AllCars: newCarsArray,
      CartItems: newCartItems,
      total: this.state.total - CartItem.preco,
    };

    localStorage.setItem(AccessToStateModel, JSON.stringify(stateModelToStore));

    this.setState({
      allCars: newCarsArray,
      carsInCart: newCartItems,
      total: this.state.total - CartItem.preco,
    });
  };

  handleClearCartAndStorage = () => {
    localStorage.removeItem(AccessToStateModel);
    const defaultVehicleList = this.state.allCars.map((car) =>
      car.isDisabled ? { ...car, isDisabled: false } : car
    );
    this.setState({
      allCars: defaultVehicleList,
      carsInCart: [],
      total: 0,
    });
  };

  componentDidMount() {
    const storagedData = JSON.parse(localStorage.getItem(AccessToStateModel));

    if (storagedData) {
      const { AllCars, CartItems, total } = storagedData;
      this.setState({
        allCars: AllCars,
        carsInCart: CartItems,
        total,
      });
    }
  }
  render() {
    return (
      <Styled.PageContainer>
        <Styled.PageHeader>
          <Styled.PageHeaderTitle>Loja de Carros!</Styled.PageHeaderTitle>
        </Styled.PageHeader>
        <Styled.MainWrapper>
          <Styled.MainContent>
            <Styled.CardsContainer>
              {this.state.allCars &&
                this.state.allCars.map((car) => (
                  <Card
                    key={car.nome}
                    {...car}
                    handleClick={this.handleAddItemToCart}
                  />
                ))}
            </Styled.CardsContainer>
          </Styled.MainContent>
          <Styled.AsideContent>
            <Styled.ContentWrapper>
              <Styled.CarsWrapper>
                <Styled.CarsContent
                  onDrop={this.handleDropEvent}
                  onDragOver={this.handleAllowDrop}
                >
                  {this.handleCardsRender()}
                </Styled.CarsContent>
              </Styled.CarsWrapper>
              <Styled.CarsContentInfoWrapper>
                <Styled.CarsContentInfo>
                  <Styled.ContentTotal>Total</Styled.ContentTotal>
                  <Styled.ContentTotal>
                    R${' '}
                    {new Intl.NumberFormat('pt-BR', {
                      maximumSignificantDigits: 3,
                    }).format(this.state.total)}
                  </Styled.ContentTotal>
                </Styled.CarsContentInfo>
                <Styled.ClearButton onClick={this.handleClearCartAndStorage} />
              </Styled.CarsContentInfoWrapper>
            </Styled.ContentWrapper>
          </Styled.AsideContent>
        </Styled.MainWrapper>
      </Styled.PageContainer>
    );
  }
}

export default HomePage;
