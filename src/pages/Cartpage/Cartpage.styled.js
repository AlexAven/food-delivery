import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #161516;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Container = styled.section`
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

export { Wrapper, Container, Footer, Total, Value };
