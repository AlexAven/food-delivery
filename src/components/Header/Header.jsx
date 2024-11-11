const Header = ({ title }) => {
  return (
    <header className="header">
      <h2 className="header__title">{title}</h2>
      <div className="wrapper">
        <div className="header__basketCounter"></div>
        <div className="header__basketBtn"></div>
      </div>
      <div className="header__logoutBtn"></div>
    </header>
  );
};

export default Header;
