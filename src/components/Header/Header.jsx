const Header = ({ title }) => {
  return (
    <header className="header">
      <h2 className="header__title">{title}</h2>
      <div className="wrapper">
        <p className="header__basketCounter">Х товара на сумму Z </p>
        <a className="header__basketBtn">
          <img src="./src/assets/images/cart.png" alt="cart-button" />
        </a>
        <button className="header__logoutBtn">Выйти</button>
      </div>
    </header>
  );
};

export default Header;
