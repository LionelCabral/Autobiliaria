import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './CartWidget.css';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { unidades } = useContext(CartContext);
  return (
    <div className="carrito" >
        <Link to="/cart" className="carrito">
        <i class="bi bi-cart3"></i>
        </Link>
      {unidades() === 0 ? (
        <span></span>
      ) : (
        <span className="unidades">{unidades()}</span>
      )}

    </div>
  );
};

export default CartWidget;