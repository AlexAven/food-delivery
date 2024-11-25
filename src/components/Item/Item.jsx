import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Item.module.scss';
import ButtonSquare from '../ButtonSquare/ButtonSquare';
import { addCurrentItem } from '../../features/catalogSlice';

const Item = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCurrentItem(id));
  }, [dispatch, id]);

  const { title, description, price, photo } = useSelector((state) => state.catalog.entities[id]) || {};

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
          <ButtonSquare className={styles.item__button} type={'background'}>
            В корзину
          </ButtonSquare>
        </div>
      </div>
    </article>
  );
};

export default Item;
