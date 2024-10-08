import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SubProductCard({ id, name, price, image, viewed, sold }) {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let found = false;

    const updatedCart = cart.map(item => {
      if (item.id === id) {
        item.quantity = item.quantity ? item.quantity + 1 : 2;
        found = true;
      }
      return item;
    });

    if (!found) {
      updatedCart.push({ id, name, price, image, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(`${name} added to cart!`, {
      position: "top-right"
    });
  };

  return (
    <div className="product__card">
      <h4>{name}</h4>
      <p>${price}</p>
      <img src={image} alt={name} />
      <p>Viewed: {viewed} times</p>
      <p>Sold: {sold} units</p>
      <button 
        onClick={handleAddToCart} 
        className="ww product__link bg-success text-white px-5 py-2 text-decoration-none ms-5"
      >
        Add to cart
      </button>
    </div>
  );
}

export default SubProductCard;
