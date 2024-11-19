import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Mainpage.module.scss';
import Header from '../../components/Header/Header.jsx';
import Card from '../../components/Card/Card.jsx';
import { addToCart } from '../../features/cartSlice';
import { getCatalog } from '../../features/catalogSlice.js';

// data вместо стейта
// const data = {
//   entity: {
//     1: {
//       id: 1,
//       title: 'Устрицы по рокфеллеровски 1',
//       description: 'Значимость этих проблем настолько очевидна',
//       price: 100,
//       photo: './src/assets/images/1.png',
//     },
//     2: {
//       id: 2,
//       title: 'Устрицы по рокфеллеровски 2',
//       description: 'Значимость этих проблем настолько очевидна',
//       price: 250,
//       photo: './src/assets/images/1.png',
//     },
//     3: {
//       id: 3,
//       title: 'Устрицы по рокфеллеровски 3',
//       description: 'Значимость этих проблем настолько очевидна',
//       price: 400,
//       photo: './src/assets/images/1.png',
//     },
//     4: {
//       id: 4,
//       title: 'Устрицы по рокфеллеровски 4',
//       description: 'Значимость этих проблем настолько очевидна',
//       price: 467,
//       photo: './src/assets/images/1.png',
//     },
//     5: {
//       id: 5,
//       title: 'Устрицы по рокфеллеровски 5',
//       description: 'Значимость этих проблем настолько очевидна',
//       price: 320,
//       photo: './src/assets/images/1.png',
//     },
//     6: {
//       id: 6,
//       title: 'Устрицы по рокфеллеровски 6',
//       description: 'Значимость этих проблем настолько очевидна',
//       price: 9340,
//       photo: './src/assets/images/1.png',
//     },
//   },
//   ids: [1, 2, 3, 4, 5, 6],
// };

const Main = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog);
  console.log('catalog', catalog);

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
