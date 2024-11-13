import { useDispatch } from 'react-redux';

import AddButton from '../../assets/images/add-btn.svg?react';
import { addToCart } from '../../features/cartSlice';

const Card = (props) => {
  const { photo, title, description, price } = props;
  const dispatch = useDispatch();
  const handleAddToCart = () => dispatch(addToCart(props));

  return (
    <article className="card">
      <img src={photo} alt="dish-photo" className="card__photo" />
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <div className="wrapper">
        <p className="card__price">{price} ₽</p>
        <button className="card__addToCart">
          <AddButton onClick={handleAddToCart} />
        </button>
      </div>
    </article>
  );
};

export default Card;
