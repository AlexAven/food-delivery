import { Button } from './ButtonSquare.styled';

const ButtonSquare = ({ type = 'noBackground', children, clickBtn }) => {
  return (
    <Button type={type} onClick={clickBtn}>
      {children}
    </Button>
  );
};

export default ButtonSquare;
