const Card = ({ photo, title, description, price }) => {
  return (
    <article className="card">
      <img src={photo} alt="dish-photo" className="card__photo" />
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <div className="wrapper">
        <p className="card__price">{price} ₽</p>
        <button className="card__addToCart">
          <img src="./src/assets/images/add-btn.png" alt="add-button" />
        </button>
      </div>
    </article>
  );
};

export default Card;
