import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: space-between;
  ${({ direction }) => {
    if (direction === 'row') {
      return `
      border: none;
      gap: 30px;
      align-items: center
      `;
    } else {
      return `
      flex: 0 1 312px;
      border: 1px solid #d58c51;
      padding: 40px 20px 20px;
      `;
    }
  }};
  box-sizing: border-box;

  &:hover {
    color: #d58c51;
  }
`;

const Photo = styled.img`
  ${({ direction }) => {
    if (direction === 'row') {
      return `
        height: 122px;
        `;
    } else {
      return `
        height: auto;
        padding-bottom: 20px;
      `;
    }
  }};
  width: auto;
`;

const Title = styled.h3`
  font-size: 17px;
  font-weight: 500;
  flex-grow: 1;
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
  gap: 20px;
`;

export { Container, Photo, Title, Description, Price, Wrapper };
