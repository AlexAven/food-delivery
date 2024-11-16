import styled from 'styled-components';

const Btn = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid ${({ type }) => (type !== 'plus' && type !== 'minus' ? '#D58C51' : '#FFFFFF')};
  border-radius: 50%;
  background-color: transparent;
  transform: ${({ type }) => {
    if (type === 'plus' || type === 'arrowLeft' || type === 'minus') {
      return 'rotate(0deg)';
    } else if (type === 'remove') {
      return 'rotate(45deg)';
    }
  }};

  &:hover {
    background-color: ${({ type }) => (type !== 'plus' && type !== 'minus' ? '#FFFFFF' : '#975f31')};
    cursor: pointer;
  }

  .button__line {
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      ${({ type }) => (type === 'arrowLeft' ? 'transform-origin: top left;' : null)};
      ${({ type }) => {
        if (type === 'arrowLeft') {
          return 'transform: translate(-55%, -40%) rotate(-30deg)';
        } else {
          return 'transform: translate(-50%, -50%)';
        }
      }};
      width: 15px;
      height: 2px;
      background-color: ${({ type }) => (type !== 'plus' && type !== 'minus' ? '#D58C51' : '#FFFFFF')};
      border-radius: 2px;
    }

    &::after {
      ${({ type }) => (type === 'arrowLeft' ? 'transform-origin: top left;' : null)};
      ${({ type }) => {
        if (type === 'arrowLeft') {
          return 'transform: translate(-50%, -70%) rotate(30deg)';
        } else if (type !== 'minus') {
          // Не применять если type === 'minus'
          return 'transform: translate(-50%, -50%) rotate(90deg)';
        } else {
          return ''; // Убедитесь, что возвращается пустая строка для исключения стилей
        }
      }};
    }
  }
`;
export default Btn;
