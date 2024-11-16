import styled from 'styled-components';

const Container = styled.article`
  flex: 0 1 312px;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  padding: 40px 20px 20px;
  border: 1px solid #d58c51;
  box-sizing: border-box;

  &:hover {
    color: #d58c51;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  padding-top: 20px;
  font-size: 17px;
  font-weight: 500;
`;

const Description = styled.p`
  flex-grow: 1;
`;

const Price = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Container, Photo, Title, Description, Price, Wrapper };
