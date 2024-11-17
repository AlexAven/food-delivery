import { useSelector } from 'react-redux';

import { Wrapper, Container, Footer, Total, Value, BuyBtn } from './Cartpage.styled.js';
import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';

const Cartpage = () => {
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <Wrapper>
      <Header title={'Корзина с выбранными товарами'} nav={true} />
      <Container>
        <Cart />
      </Container>
      <Footer>
        <Total>
          ЗАКАЗ НА СУММУ: <Value>{totalPrice.toLocaleString('ru-RU')} ₽</Value>
        </Total>
        <BuyBtn>Оформить заказ</BuyBtn>
      </Footer>
    </Wrapper>
  );
};

export default Cartpage;
