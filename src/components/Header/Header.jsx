import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import ButtonSquare from '../ButtonSquare/ButtonSquare';

const Header = (props) => {
  const { children, cart, nav, counter } = props;
  const { totalPrice, totalItems } = useSelector((state) => state.cart);
  console.log(useSelector((state) => state.cart));

  const pluraiser = (value) => {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ['товар', 'товара', 'товаров'];
    const pluralIndex = value % 100 > 4 && value % 100 < 20 ? 2 : cases[value % 10 < 5 ? value % 10 : 5];
    return `${value} ${titles[pluralIndex]}`;
  };

  return (
    <header className={styles.header}>
      {nav && (
        <Link to="/">
          <ButtonCircle type={'arrowLeft'} />
        </Link>
      )}
      {children && <h2 className={styles.title}>{children}</h2>}
      <div className={styles.wrapper}>
        {counter && (
          <p className={styles.header__basketCounter}>
            {totalItems === 0
              ? 'Нет товаров в корзине'
              : `${pluraiser(totalItems)} на сумму ${totalPrice.toLocaleString('ru-RU')} руб.`}
          </p>
        )}
        {cart && (
          <Link to="/cart" className={styles.header__basketBtn}>
            <img src="./src/assets/images/cart.svg" alt="cart-button" />
          </Link>
        )}
        <ButtonSquare>Выйти</ButtonSquare>
      </div>
    </header>
  );
};

export default Header;
