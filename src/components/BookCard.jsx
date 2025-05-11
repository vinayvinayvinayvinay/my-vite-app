function BookCard({ title, author, description, image, rentPrice, buyPrice }) {
    return (
      <div className="book-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p><em>by {author}</em></p>
        <p>{description}</p>
  
        <div className="price-buttons">
          <button className="rent">Rent - {rentPrice}</button>
          <button className="buy">Buy - {buyPrice}</button>
        </div>
      </div>
    );
  }
  export default BookCard;
  