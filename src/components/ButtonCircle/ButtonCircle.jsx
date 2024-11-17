import Btn from './ButtonCircle.styled';

const ButtonCircle = ({ type = 'plus', clickBtn }) => {
  return (
    <Btn className="button" type={type} onClick={clickBtn}>
      <span className="button__line"></span>
    </Btn>
  );
};

export default ButtonCircle;
