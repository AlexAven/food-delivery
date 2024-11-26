import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Item.module.scss';
import ButtonSquare from '../ButtonSquare/ButtonSquare';
import { getCatalog } from '../../features/catalogSlice';
import { addCurrentItem } from '../../features/catalogSlice';
import { addToCart } from '../../features/cartSlice';

const Item = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalog()).then(() => {
      const savedCurrentItem = localStorage.getItem('currentItem');
      if (savedCurrentItem) {
        const { id } = JSON.parse(savedCurrentItem);
        dispatch(addCurrentItem(id));
      }
    });
  }, [dispatch]);

  const currentItem = useSelector((state) => state.catalog.currentItem) || {};
  const { title, description, price, photo } = currentItem;

  return (
    <article className={styles.item}>
      <img src={photo} className={styles.item__photo} />
      <div className={styles.item__content}>
        <div className={styles.item__text}>
          <h1 className={styles.item__title}>{title}</h1>
          <p className={styles.item__description}>
            {description}
            Не следует, однако забывать, что консультация с широким активом представляет собой интересный
            эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура
            организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало
            повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако
            забывать, что консультация с широким активом представляет собой интересный эксперимент
            проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации
            позволяет оценить значение новых предложений.
          </p>
        </div>
        <div className={styles.wrapper}>
          <p className={styles.item__price}>{price?.toLocaleString('ru-RU')} ₽</p>
          <ButtonSquare
            className={styles.item__button}
            clickBtn={() => dispatch(addToCart(currentItem))}
            type={'background'}
          >
            В корзину
          </ButtonSquare>
        </div>
      </div>
    </article>
  );
};

export default Item;
