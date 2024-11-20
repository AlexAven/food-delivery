import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Mainpage.module.scss';
import Header from '../../components/Header/Header.jsx';
import Card from '../../components/Card/Card.jsx';
import { addToCart } from '../../features/cartSlice';
import { getCatalog } from '../../features/catalogSlice.js';

const Main = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(getCatalog());
  }, []);

  return (
    <>
      <Header cart={true} counter={true}>
        НАША ПРОДУКЦИЯ
      </Header>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.wrapper}>
            {catalog.ids.map((item) => {
              const { id, title, description, price, photo } = catalog.entities[item];
              const handleAddToCart = () => dispatch(addToCart(catalog.entities[item]));
              return (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  price={price}
                  photo={photo}
                  clickBtn={handleAddToCart}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
