import { useState } from 'react';
import type { FC } from 'react';

interface BurgerProps {
  name: string;
  description: string;
  price: number;
  image: string;
  initialStock: number;
}

export const BurgerCard: FC<BurgerProps> = ({
  name,
  description,
  price,
  image,
  initialStock,
}) => {
  const [stock, setStock] = useState(initialStock);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState<string[]>([
    '5 Stars - Extremely delicious and worth it!',
    '5 Stars - Very fresh ingredients.'
  ]);

  const handleDecrease = () => {
    if (stock > 0) setStock(stock - 1);
  };

  const handleIncrease = () => {
    setStock(stock + 1);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setReviews([...reviews, `5 Stars - ${comment}`]);
      setComment('');
    }
  };

  return (
    <div className="burger-card">
      <div className="card-img-container">
        <img src={image} alt={name} className="burger-img" />
      </div>

      <h3 className="burger-title">{name}</h3>
      <p className="burger-desc">Description: {description}</p>

      <div className="price-tag">
        <strong>Price: ₱{price.toFixed(2)}</strong>
      </div>

      <div className="ratings-container">
        <span className="label">Ratings: </span>
        <span className="stars">⭐⭐⭐⭐⭐</span>
      </div>

      <div className="stock-container">
        <span className="stock-label">Stock: {stock}/{initialStock}</span>
        <div className="counter-btns">
          <button className="btn-minus" onClick={handleDecrease}>-</button>
          <span className="divider">/</span>
          <button className="btn-plus" onClick={handleIncrease}>+</button>
        </div>
      </div>

      <details className="reviews-dropdown">
        <summary>Customer Reviews</summary>
        <ul className="reviews-list">
          {reviews.map((rev, idx) => (
            <li key={idx}>{rev}</li>
          ))}
        </ul>
      </details>

      <form onSubmit={handleAddReview} className="review-form">
        <input
          type="text"
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="review-input"
        />
      </form>

      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};