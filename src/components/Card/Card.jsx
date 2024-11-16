import { useDispatch, useSelector } from 'react-redux';

import ButtonCircle from '../ButtonCircle/ButtonCircle';
import { Container, Photo, Title, Description, Price, Wrapper } from './Card.styled';
import { incrementItem, decrementItem } from '../../features/cartSlice';

const Card = (props) => {
  const { photo, id, title, description, price, clickBtn, counter = false, direction } = props;
  const { entities } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDecrease = () => dispatch(decrementItem(props));
  const handleIncrease = () => dispatch(incrementItem(props));
  // const handleRemove = () => dispatch(removeItem(props)); // временно
  // const handleAddToCart = () => dispatch(addToCart(props));

  return (
    <Container direction={direction}>
      <Photo src={photo} alt="dish-photo" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Wrapper>
        <Price>{price.toLocaleString('ru-RU')} ₽</Price>
        {entities[id] && counter && (
          <>
            <ButtonCircle type={'minus'} onClick={handleDecrease} />
            {entities[id].qty}
            <ButtonCircle onClick={handleIncrease} />
          </>
        )}
        <ButtonCircle click={clickBtn} />
      </Wrapper>
    </Container>
  );
};

export default Card;
