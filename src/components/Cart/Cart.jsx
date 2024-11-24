import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Card from '../Card/Card.jsx';
import { getCart, removeItem } from '../../features/cartSlice';
import { Purchases } from './Cart.styled.js';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch(getCart(JSON.parse(savedCart)));
    }
  }, [dispatch]);

  return (
    <>
      <Purchases>
        {cart.ids.map((item) => {
          const { id, title, price, photo } = cart.entities[item];
          const handleRemove = () => dispatch(removeItem(cart.entities[item]));
          return (
            <Card
              key={id}
              id={id}
              title={title}
              price={price}
              photo={photo}
              clickBtn={handleRemove}
              direction={'row'}
              btnType={'remove'}
              counter={true}
            />
          );
        })}
      </Purchases>
    </>
  );
};

export default Cart;
