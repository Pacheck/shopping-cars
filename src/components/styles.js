import styled, { css, keyframes } from 'styled-components';
const BorderStyle = '1px solid lightgray';
const activeBlueBorder = css`
  border-color: rgb(91 192 222);
`;

const roll = keyframes`

  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }

`;

export const Container = styled.div`
  width: 220px;
  border-radius: 6px;
  margin: 10px;
  margin: 0px 10px 20px 10px;
  box-shadow: 0px 2px 5px #ccc;
  transition: all 0.3s ease;

  ${(props) =>
    props.isDisabled
      ? 'opacity: 0.5; pointer-events: none;'
      : 'background-color: ##fefefe;'}

  cursor: url('https://www.google.com/intl/en_ALL/mapfiles/openhand.cur'), all-scroll;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: -o-grab;
  cursor: -ms-grab;
  cursor: grab;
  :active {
    cursor: url('https://www.google.com/intl/en_ALL/mapfiles/closedhand.cur'),
      all-scroll;
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: -o-grabbing;
    cursor: -ms-grabbing;
    cursor: grabbing;
  }
  :hover {
    box-shadow: 0px 12px 25px #ccc;
    transform: scale(1.05, 1.05);

    & > section {
      background-color: rgb(91 192 222);
      ${activeBlueBorder};
      color: #fff;

      & img {
        animation: ${roll} 0.75s;
        transform: rotate(180deg);
      }
    }
    & div {
      ${activeBlueBorder};
    }
  }
`;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 6px;
  border-left: ${BorderStyle};
  border-right: ${BorderStyle};
  border-top: ${BorderStyle};
  border-bottom: ${BorderStyle};
  border-top-right-radius: 6px;
  background-color: #e3e3e3;
  height: 32px;
`;

export const Content = styled.div`
  text-align: center;
  border-left: ${BorderStyle};
  border-right: ${BorderStyle};
  border-bottom: ${BorderStyle};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const HeaderName = styled.p`
  font-weight: 600;
  margin-left: 5px;
  font-size: 18px;
`;

export const ContentInfo = styled.p`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ContentSpan = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const AddIcon = styled.img`
  width: 22px;
  margin-right: 5px;
  :hover {
    cursor: pointer;
  }
`;
export const Text = styled.h3``;
export const EmptyCartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
