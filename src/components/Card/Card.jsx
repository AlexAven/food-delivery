import { useDispatch, useSelector } from 'react-redux';

import AddButton from '../../assets/images/add-btn.svg?react';
import styles from './Card.module.scss';
import { addToCart, incrementItem, decrementItem, removeItem } from '../../features/cartSlice';

const Card = (props) => {
  const { photo, id, title, description, price } = props;
  const { entities } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDecrease = () => dispatch(decrementItem(props)); // временно
  const handleIncrease = () => dispatch(incrementItem(props)); // временно
  const handleRemove = () => dispatch(removeItem(props)); // временно
  const handleAddToCart = () => dispatch(addToCart(props));

  return (
    <article className={styles.card}>
      <img src={photo} alt="dish-photo" className={styles.card__photo} />
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__description}>{description}</p>
      <div className={styles.wrapper}>
        <p className={styles.card__price}>{price.toLocaleString('ru-RU')} ₽</p>
        {entities[id] && (
          <>
            <button onClick={handleDecrease}>-</button>
            {entities[id].qty}
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleRemove}>X</button>
          </>
        )}
        <button className={styles.card__addToCart}>
          <AddButton onClick={handleAddToCart} />
        </button>
      </div>
    </article>
  );
};

export default Card;
