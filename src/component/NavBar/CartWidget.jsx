import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { unidades } = useContext(CartContext);
  return (
    <div className="carrito">
      {unidades() === 0 ? (
        <span></span>
      ) : (
        <span className="unidades">{unidades()}</span>
      )}

      <i class="bi bi-cart3"></i>
    </div>
  );
};

export default CartWidget;