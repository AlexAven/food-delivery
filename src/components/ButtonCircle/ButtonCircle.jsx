import Btn from './ButtonCircle.styled';

const ButtonCircle = ({ type = 'plus', click }) => {
  return (
    <Btn className="button" type={type} onClick={click}>
      <span className="button__line"></span>
    </Btn>
  );
};

export default ButtonCircle;
