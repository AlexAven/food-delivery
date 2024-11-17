import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Container = styled.section`
  background-color: #161516;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

const Footer = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  align-items: center;
  background-color: #161516;
  height: 90px;
  border-top: 1px solid #d58c51;
  padding: 10px 40px;
  box-sizing: border-box;
`;

const Total = styled.div`
  display: flex;
  gap: 15px;
  color: #ffffff;
  font-size: 21px;
`;

const Value = styled.div`
  color: #d58c51;
`;

const BuyBtn = styled.button`
  background: none;
  cursor: pointer;
  border: 1px solid $bordersColor;
  color: $alternativeFontColor;
  width: 200px;

  &:hover {
    background-color: $alternativeBackground;
    color: $mainFontColor;
  }
`;

export { Wrapper, Container, Footer, Total, Value, BuyBtn };
