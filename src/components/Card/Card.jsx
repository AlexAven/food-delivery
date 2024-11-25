import { useDispatch, useSelector } from 'react-redux';

import ButtonCircle from '../ButtonCircle/ButtonCircle';
import { Container, Photo, Title, Description, Price, Wrapper } from './Card.styled';
import { addCurrentItem } from '../../features/catalogSlice';
import { incrementItem, decrementItem } from '../../features/cartSlice';

const Card = (props) => {
  const { photo, id, title, description, price, clickBtn, counter = false, direction, btnType } = props;
  const { entities, totalItemPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDecrease = () => dispatch(decrementItem(props));
  const handleIncrease = () => dispatch(incrementItem(props));
  const setCurrentItem = () => dispatch(addCurrentItem(id));

  return (
    <Container to={`/${id}`} onClick={setCurrentItem} direction={direction}>
      <Photo direction={direction} src={photo} alt="dish-photo" />
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      <Wrapper>
        {btnType === 'remove' ? (
          <Price>{totalItemPrice[id].toLocaleString('ru-RU')} ₽</Price>
        ) : (
          <Price>{price.toLocaleString('ru-RU')} ₽</Price>
        )}
        {entities[id] && counter && (
          <>
            <ButtonCircle type={'minus'} clickBtn={handleDecrease} />
            {entities[id].qty}
            <ButtonCircle clickBtn={handleIncrease} />
          </>
        )}
        <ButtonCircle type={btnType} clickBtn={clickBtn} />
      </Wrapper>
    </Container>
  );
};

export default Card;
