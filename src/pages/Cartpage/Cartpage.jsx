import { useSelector } from 'react-redux';

import { Wrapper, Container, Footer, Total, Value } from './Cartpage.styled.js';
import ButtonSquare from '../../components/ButtonSquare/ButtonSquare.jsx';
import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';

const Cartpage = () => {
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <Wrapper>
      <Header nav={true}>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</Header>
      <Container>
        <Cart />
      </Container>
      <Footer>
        <Total>
          ЗАКАЗ НА СУММУ: <Value>{totalPrice.toLocaleString('ru-RU')} ₽</Value>
        </Total>
        <ButtonSquare type={'background'}>Оформить заказ</ButtonSquare>
      </Footer>
    </Wrapper>
  );
};

export default Cartpage;
