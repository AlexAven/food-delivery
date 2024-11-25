import styled from 'styled-components';

const Button = styled.button`
  ${({ type }) => {
    if (type === 'background') {
      return `background:  #d58c51;
      color: #ffffff;

      &:hover {
        background: none;
        color: #d58c51;
      }`;
    } else if (type === 'noBackground') {
      return `background: none;
      color: #d58c51;
      
      &:hover {
        background-color: #d58c51;
        color: #ffffff;
      }`;
    }
  }}
  cursor: pointer;
  border: 1px solid #d58c51;
  width: 200px;
  height: 42px;
`;

export { Button };
