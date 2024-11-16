import { useSelector, useDispatch } from 'react-redux';

import Card from '../Card/Card.jsx';
import { removeItem } from '../../features/cartSlice';
import { Purchases, Total } from './Cart.styled.js';

const Cart = () => {
  const { ids, entities } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Purchases>
        {ids.map((item) => {
          const { id, title, description, price, photo } = entities[item];
          const handleRemove = () => dispatch(removeItem(entities[item])); // временно
          return (
            <Card
              key={id}
              id={id}
              title={title}
              description={description}
              price={price}
              photo={photo}
              clickBtn={handleRemove}
              direction={'row'}
            />
          );
        })}
      </Purchases>
      <Total></Total>
    </>
  );
};

export default Cart;
