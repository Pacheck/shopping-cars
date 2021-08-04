import styled from 'styled-components';
import TrashCan from '../assets/trash-can.png';

const BorderStyle = '1px solid rgb(91 192 222)';

// Components
export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const PageHeader = styled.header`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 12%;
  background-color: #fefefe;
`;

export const PageHeaderTitle = styled.h1`
  align-self: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 88%;
`;

export const MainContent = styled.main`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 100%;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  height: fit-content;
`;

export const AsideContent = styled.aside`
  width: 40%;
  height: 100%;
`;

export const ContentWrapper = styled.section``;

export const CarsWrapper = styled.section``;

export const CarsContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 90%;
  min-width: 445px;
  border: 1px solid lightgray;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #5bc0de;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1596bd;
  }
  ::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 30px;
    box-shadow: inset 0px 0px 0px 0px #f0f0f0;
  }
`;

export const ContentTotal = styled.h3`
  font-size: 25px;
`;

export const CartCard = styled.div`
  width: 90%;
  min-height: 100px;
  margin-top: 10px;
  background-color: #f3f3f3;
`;

export const CartCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30%;
  background-color: rgb(91 192 222);
  border-left: ${BorderStyle};
  border-right: ${BorderStyle};
  border-top: ${BorderStyle};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const CartCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 70%;
  border: ${BorderStyle};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const HeaderName = styled.h4`
  color: #fff;
  margin-left: 15px;
`;

export const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const RemoveCartItem = styled.img``;

export const CarsContentInfoWrapper = styled.div``;
export const CarsContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const ClearButton = styled.div`
  width: 20px;
  height: 20px;
  padding: 10px;
  cursor: pointer;
  background: url(${TrashCan});
  background-size: contain;
  background-repeat: no-repeat;
`;
