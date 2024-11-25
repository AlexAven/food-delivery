import Btn from './ButtonCircle.styled';

const ButtonCircle = ({ type = 'plus', clickBtn }) => {
  const handleCLick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (clickBtn) {
      clickBtn(event);
    }
  };

  return (
    <Btn className="button" type={type} onClick={handleCLick}>
      <span className="button__line"></span>
    </Btn>
  );
};

export default ButtonCircle;
